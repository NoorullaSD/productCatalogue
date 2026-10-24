import React from 'react';
import { Text, View, Image, Pressable } from 'react-native';
import { productCardStyle } from './styles/productCard.styles';

export interface Product {
    id: string;
    name: string;
    image: string;
    category: string;
    price: number;
}

interface ProductCardProps {
    product: Product;
    onPress: (productId: string) => void;
}

const ProductCard = React.memo(({ product, onPress }: ProductCardProps) => {
    return (
        <Pressable onPress={() => onPress(product.id)}
            style={({ pressed }) => [productCardStyle.card, pressed && productCardStyle.pressed]}>
            <Image source={{ uri: product.image }} style={productCardStyle.image} resizeMode="cover" />
            <View style={productCardStyle.content}>
                <Text style={productCardStyle.name} numberOfLines={2}>{product.name}</Text>
                <Text style={productCardStyle.category}>{product.category}</Text>
                <Text style={productCardStyle.price}>${product.price.toFixed(2)}</Text>
            </View>
        </Pressable>
    );
});


export default ProductCard;