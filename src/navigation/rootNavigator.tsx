import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import TabNavigator from "./tabNavigator"
import ProductDetailsScreen from '../screens/productDetailsScreen';

import { RootStackParamList } from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="MainTabs" component={TabNavigator} />
            <Stack.Screen name="ProductDetails" component={ProductDetailsScreen} />
        </Stack.Navigator>
    );
};

export default RootNavigator;