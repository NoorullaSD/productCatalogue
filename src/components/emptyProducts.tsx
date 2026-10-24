import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { emptyProductStyle } from './styles/emptyProducts.styles';

const EmptyProducts = () => {
    return (
        <View style={emptyProductStyle.container}>
            <Text style={emptyProductStyle.icon}>🛍️</Text>

            <Text style={emptyProductStyle.title}>
                No Products Found
            </Text>

            <Text style={emptyProductStyle.description}>
                We couldn't find any products to display.
            </Text>
        </View>
    );
};


export default EmptyProducts;