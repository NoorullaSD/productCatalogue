import React, { useEffect, useState } from 'react';
import { View, Text, BackHandler, Image, Pressable, ScrollView, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { products } from '../data/products';
import { useCart } from '../context/cartContext';
import { productDetailStyle } from './styles/productDetail.styles';
import { colors } from '../theme/colors';

const ProductDetailsScreen = ({ route, navigation }: any) => {
    // Get product ID from navigation params
    const { productId } = route.params;
    // Get cart state and cart actions from Cart Context
    const { cart, addToCart, increment, decrement } = useCart();

    // Handle Android hardware back button and navigate back
    useEffect(() => {
        const subscription = BackHandler.addEventListener(
            'hardwareBackPress',
            () => {
                navigation.goBack();
                return true;
            },
        );

        return () => {
            subscription.remove();
        };
    }, [navigation]);

    // Find the selected product and check if it already exists in the cart
    const product = products.find(item => item.id === productId);
    const cartItem = cart.find(item => item.id === productId);

    // Show fallback UI when the requested product is not found
    if (!product) {
        return (
            <View style={productDetailStyle.notFound}>
                <Ionicons name="alert-circle-outline" size={50} color="#9CA3AF" />
                <Text style={productDetailStyle.notFoundText}>Product not found</Text>
            </View>
        );
    }

    return (
        <View style={productDetailStyle.container}>
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={productDetailStyle.scrollContent}>

                {/* Product Image */}
                <View style={productDetailStyle.imageContainer}>
                    <Image source={{ uri: product.image }} style={productDetailStyle.image} resizeMode="cover" />
                </View>

                {/* Product Information */}
                <View style={productDetailStyle.content}>
                    <View style={productDetailStyle.categoryBadge}>
                        <Text style={productDetailStyle.categoryText}>{product.category}</Text>
                    </View>
                    <Text style={productDetailStyle.productName}>{product.name}</Text>
                    <View style={productDetailStyle.priceRow}>
                        <Text style={productDetailStyle.price}>${product.price.toFixed(2)}</Text>
                        <View style={productDetailStyle.rating}>
                            <Ionicons name="star" size={16} color="#F59E0B" />
                            <Text style={productDetailStyle.ratingText}>4.5</Text>
                        </View>
                    </View>

                    <View style={productDetailStyle.divider} />

                    <Text style={productDetailStyle.sectionTitle}>Description</Text>
                    <Text style={productDetailStyle.description}>{product.description}</Text>
                </View>
            </ScrollView>

            {/* Bottom Add To Cart */}
            <View style={productDetailStyle.bottomContainer}>
                <View>
                    <Text style={productDetailStyle.bottomLabel}>Total Price</Text>

                    <Text style={productDetailStyle.bottomPrice}>
                        ${cartItem?.quantity ? (cartItem?.quantity * product.price).toFixed(2) : product.price.toFixed(2)}
                    </Text>
                </View>

                {cartItem ? (
                    <View style={productDetailStyle.quantityContainer}>
                        <Pressable
                            onPress={() => decrement(product.id)}
                            style={productDetailStyle.quantityButton}>
                            <Ionicons name="remove" size={20} color={colors.backgroundColor} />
                        </Pressable>

                        <Text style={productDetailStyle.quantityText}>{cartItem.quantity}</Text>

                        <Pressable
                            onPress={() => increment(product.id)}
                            style={productDetailStyle.quantityButton}>
                            <Ionicons name="add" size={20} color={colors.backgroundColor} />
                        </Pressable>
                    </View>
                ) : (
                    <Pressable
                        onPress={() => addToCart(product)}
                        style={({ pressed }) => [
                            productDetailStyle.addButton,
                            pressed && productDetailStyle.buttonPressed,
                        ]}>
                        <Ionicons name="cart-outline" size={21} color="#FFFFFF" />
                        <Text style={productDetailStyle.addButtonText}>Add to Cart</Text>
                    </Pressable>
                )}
            </View>
        </View>
    );
};

export default ProductDetailsScreen;