import React, { useEffect, useMemo, useState } from 'react';
import { TextInput, View } from 'react-native';
import { debounce } from '../utils/debounce';
import { searchStyle } from './styles/search.styles';

interface SearchProps {
    value: string;
    onChangeText: (value: string) => void;
    onSearch: (value: string) => void;
    placeholder?: string;
}

const Search = React.memo(({ value, onChangeText, onSearch, placeholder = 'Search products...' }: SearchProps) => {

    const debouncedSearch = useMemo(
        () =>
            debounce((value: string) => {
                onSearch(value);
            }, 500),
        [onSearch],
    );

    const handleSearch = (value: string) => {
        // Update TextInput immediately
        onChangeText(value);
        // Perform search after 500ms
        debouncedSearch(value);
    };

    return (
        <View style={searchStyle.container}>
            <TextInput
                placeholder={placeholder}
                value={value}
                onChangeText={handleSearch}
                style={searchStyle.input}
                autoCapitalize="none"
                autoCorrect={false}
            />
        </View>
    );
});

export default Search;