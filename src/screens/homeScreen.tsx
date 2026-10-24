import React, { useCallback, useMemo, useState, useEffect } from 'react';
import { View, FlatList, ActivityIndicator } from 'react-native';
import { products } from '../data/products';
import { homeStyle } from './styles/home.styles';
// Custom components
import Search from '../components/search';
import ProductCard from '../components/productCard';
import { useFocusEffect } from '@react-navigation/native';
import EmptyProducts from '../components/emptyProducts';

const HomeScreen = ({ navigation }: any) => {
    // Stores the actual search value used for filtering products
    const [search, setSearch] = useState('');
    // Stores the text displayed in the search input
    const [searchText, setSearchText] = useState("")
    // Controls the pull-to-refresh loading state
    const [refreshing, setRefreshing] = useState(false);
    // Controls the initial loading state before products are displayed
    const [loading, setLoading] = useState(true);

    // Initial 2-second loading
    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    useFocusEffect(
        useCallback(() => {
            return () => {
                setSearchText('');
                setSearch('');
            };
        }, [])
    );

    // Get all products and filter them based on search
    const filteredProducts = useMemo(() => {
        if (!search.trim()) {
            return products;
        }
        return products.filter(product =>
            product.name
                .toLowerCase()
                .includes(search.trim().toLowerCase()),
        );
    }, [products, search]);

    // Navigate to Product Details with selected product ID
    const handleProductPress = useCallback(
        (productId: string) => {
            navigation.navigate('ProductDetails', {
                productId,
            });
        },
        [navigation]
    );

    // Handle search input and update search value
    const handleSearch = useCallback((value: string) => {
        setSearch(value);
    }, []);

    // Reset search and refresh the product list
    const handleOnRefresh = async () => {
        setRefreshing(true);
        setSearchText('');
        setSearch("")
        setRefreshing(false);
    };

    // Initial loading screen
    if (loading) {
        return (
            <View style={homeStyle.loadingContainer}>
                <ActivityIndicator size="large" />
            </View>
        );
    }

    return (
        <View style={homeStyle.container}>
            <Search value={searchText} onChangeText={setSearchText} onSearch={handleSearch} />
            <FlatList
                data={filteredProducts}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <ProductCard
                        product={item}
                        onPress={handleProductPress}
                    />
                )}
                onRefresh={handleOnRefresh}
                refreshing={refreshing}
                initialNumToRender={10}
                maxToRenderPerBatch={10}
                windowSize={5}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={<EmptyProducts />}
            />
        </View>
    );
};

export default HomeScreen;