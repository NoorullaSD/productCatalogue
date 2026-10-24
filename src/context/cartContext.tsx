import React, { createContext, useContext, useEffect, useMemo, useState, } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { cartEvents } from '../events/cartEvents';
import { CartItem, Product } from '../types/product';

const CART_STORAGE_KEY = '@product_catalog_cart';

interface CartContextType {
    cart: CartItem[];
    addToCart: (product: Product) => void;
    increment: (id: string) => void;
    decrement: (id: string) => void;
    total: number;
    itemCount: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
    const [cart, setCart] = useState<CartItem[]>([]);
    const [isCartLoaded, setIsCartLoaded] = useState(false);

    // Load cart from AsyncStorage when app starts
    useEffect(() => {
        const loadCart = async () => {
            try {
                const storedCart = await AsyncStorage.getItem(
                    CART_STORAGE_KEY,
                );

                if (storedCart) {
                    const parsedCart: CartItem[] = await JSON.parse(storedCart);

                    setCart(parsedCart);

                    // const count = parsedCart.reduce(
                    //     (sum, item) => sum + item.quantity,
                    //     0,
                    // );

                    // cartEvents.emit('cartUpdated', count);
                }
            } catch (error) {
                console.error('Failed to load cart:', error);
            } finally {
                setIsCartLoaded(true);
            }
        };

        loadCart();
    }, []);

    // Save cart whenever cart changes
    useEffect(() => {
        if (!isCartLoaded) {
            return;
        }

        const saveCart = async () => {

            try {
                await AsyncStorage.setItem(
                    CART_STORAGE_KEY,
                    JSON.stringify(cart),
                );
            } catch (error) {
                console.error('Failed to save cart:', error);
            }
        };

        const count = cart.reduce(
            (sum, item) => sum + item.quantity,
            0,
        );

        cartEvents.emit('cartUpdated', count);

        saveCart();

    }, [cart]);

    // Add product to cart with initial quantity of 1
    const addToCart = (product: Product) => {
        setCart(currentCart => {
            let updatedCart: CartItem[];

            updatedCart = [
                ...currentCart,
                {
                    ...product,
                    quantity: 1,
                },
            ];

            return updatedCart;
        });
    };

    // Increase product quantity in the cart
    const increment = (id: string) => {
        setCart(currentCart => {
            const updatedCart = currentCart.map(item =>
                item.id === id
                    ? {
                        ...item,
                        quantity: item.quantity + 1,
                    }
                    : item,
            );

            return updatedCart;
        });
    };

    // Decrease product quantity and remove item when quantity reaches zero
    const decrement = (id: string) => {
        setCart(currentCart => {
            const updatedCart = currentCart
                .map(item =>
                    item.id === id
                        ? {
                            ...item,
                            quantity: item.quantity - 1,
                        }
                        : item,
                )
                .filter(item => item.quantity > 0);

            return updatedCart;
        });
    };

    // Calculate total number of items in the cart
    const itemCount = useMemo(() =>
        cart.reduce(
            (sum, item) => sum + item.quantity,
            0,
        ),
        [cart]);

    // Calculate total cart amount
    const total = useMemo(() =>
        cart.reduce(
            (sum, item) =>
                sum + item.price * item.quantity,
            0,
        ),
        [cart],
    );

    return (
        <CartContext.Provider
            value={{
                cart,
                addToCart,
                increment,
                decrement,
                total,
                itemCount,
            }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);

    if (!context) {
        throw new Error(
            'useCart must be used inside CartProvider',
        );
    }

    return context;
};