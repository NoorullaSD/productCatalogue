import { useEffect, useState } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/homeScreen';
import CartScreen from '../screens/cartScreen';
import { cartEvents } from '../events/cartEvents';
import { colors } from '../theme/colors';

const Tab = createBottomTabNavigator();

export default function AppNavigator() {

    // Store and manage the current cart item count
    const [cartCount, setCartCount] = useState(0)

    // Subscribe to cart updates and cleanup on unmount
    useEffect(() => {

        console.log('REGISTERING CART LISTENER');
        // Register cart update listener
        const handleCartUpdated = (count: number) => {
            console.log('RECEIVED CART COUNT:', count);
            setCartCount(count);
        };

        cartEvents.on('cartUpdated', handleCartUpdated);
        // Remove listener when component unmounts
        return () => {
            console.log('REMOVING CART LISTENER');
            cartEvents.off('cartUpdated', handleCartUpdated);
        };
    }, []);

    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,

                tabBarIcon: ({ focused, color, size }) => {
                    let iconName: string;

                    if (route.name === 'Home') {
                        iconName = focused
                            ? 'home'
                            : 'home-outline';
                    } else if (route.name === 'Cart') {
                        iconName = focused
                            ? 'cart'
                            : 'cart-outline';
                    } else {
                        iconName = 'help-outline';
                    }

                    return (
                        <Ionicons
                            name={iconName}
                            size={size}
                            color={color}
                        />
                    );
                },

                tabBarActiveTintColor: colors.primary,
                tabBarInactiveTintColor: colors.grey,
            })}>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Cart" component={CartScreen}
                options={{
                    tabBarBadge: cartCount > 0 ? cartCount : undefined,
                }}
            />
        </Tab.Navigator>
    );
}