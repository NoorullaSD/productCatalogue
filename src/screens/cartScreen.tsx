import React, { useState } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Text, View, FlatList, Pressable } from 'react-native';

import { useCart } from '../context/cartContext';
import CartItem from '../components/cartItem';
import { cartStyle } from './styles/cart.styles';
import { colors } from '../theme/colors';
import EmptyProducts from '../components/emptyProducts';

const CartScreen = ({ navigation }: any) => {

    // Get cart data, cart actions, and total amount
    const { cart, increment, decrement, total } = useCart();
    // Track cart pull-to-refresh state
    const [refreshing, setRefreshing] = useState(false);

    // Handle cart pull-to-refresh
    const handleOnRefresh = async () => {
        setRefreshing(true);
        console.log("cart refreshing")
        setRefreshing(false);
    };

    // Show empty cart UI when there are no items
    if (cart.length === 0) {
        return (
            <View style={cartStyle.emptyContainer}>
                <View style={cartStyle.emptyIcon}>
                    <Ionicons name="cart-outline" size={55} color={colors.primary} />
                </View>
                <Text style={cartStyle.emptyTitle}>Your Cart is Empty</Text>
                <Text style={cartStyle.emptyDescription}> Looks like you haven't added anything to your cart yet.</Text>

                <Pressable onPress={() => navigation.navigate('Home')} style={cartStyle.shopButton}>
                    <Ionicons name="bag-outline" size={20} color={colors.backgroundColor} />
                    <Text style={cartStyle.shopButtonText}> Start Shopping</Text>
                </Pressable>
            </View>
        );
    }

    return (
        <View style={cartStyle.container}>
            <FlatList
                data={cart}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <CartItem item={item} onIncrement={increment} onDecrement={decrement} />
                )}
                onRefresh={handleOnRefresh}
                refreshing={refreshing}
                initialNumToRender={10}
                maxToRenderPerBatch={10}
                windowSize={5}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={cartStyle.listContent}
            />

            <View style={cartStyle.summary}>
                <Text style={cartStyle.summaryTitle}>Order Summary </Text>

                <View style={cartStyle.summaryRow}>
                    <Text style={cartStyle.summaryLabel}>Subtotal </Text>

                    <Text style={cartStyle.summaryValue}> ${total.toFixed(2)} </Text>
                </View>

                <View style={cartStyle.summaryRow}>
                    <Text style={cartStyle.summaryLabel}>Delivery </Text>
                    <Text style={cartStyle.freeText}>FREE</Text>
                </View>

                <View style={cartStyle.divider} />

                <View style={cartStyle.summaryRow}>
                    <Text style={cartStyle.totalLabel}>Total</Text>
                    <Text style={cartStyle.totalValue}>${total.toFixed(2)}</Text>
                </View>
            </View>
        </View>
    );
};

export default CartScreen;