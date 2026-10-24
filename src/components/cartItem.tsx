import React from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { cartItemStyle } from './styles/cartItem.styles';

export interface CartItemData {
    id: string;
    name: string;
    image: string;
    category: string;
    price: number;
    quantity: number;
}

interface CartItemProps {
    item: CartItemData;
    onIncrement: (id: string) => void;
    onDecrement: (id: string) => void;
}

const CartItem = React.memo(({ item, onIncrement, onDecrement }: CartItemProps) => {
    return (
        <View style={cartItemStyle.card}>
            {/* Product Image */}
            <Image source={{ uri: item.image }} style={cartItemStyle.productImage} resizeMode="cover" />

            {/* Product Details */}
            <View style={cartItemStyle.productInfo}>
                <Text style={cartItemStyle.productName} numberOfLines={2}>{item.name}</Text>
                <Text style={cartItemStyle.category}>{item.category}</Text>
                <Text style={cartItemStyle.price}>${(item.price * item.quantity).toFixed(2)}</Text>


                {/* Quantity */}
                <View style={cartItemStyle.quantityContainer}>
                    <Pressable onPress={() => onDecrement(item.id)} style={cartItemStyle.quantityButton}>
                        <Ionicons name="remove" size={18} color="#111827" />
                    </Pressable>

                    <Text style={cartItemStyle.quantity}> {item.quantity} </Text>

                    <Pressable onPress={() => onIncrement(item.id)} style={cartItemStyle.quantityButton}>
                        <Ionicons name="add" size={18} color="#111827" />
                    </Pressable>
                </View>
            </View>

        </View>
    );
});

export default CartItem;