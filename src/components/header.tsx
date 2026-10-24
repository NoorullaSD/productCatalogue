import React from 'react';
import { View, Text } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import useAppState from '../hooks/useAppState';
import { headerStyle } from './styles/header.styles';
import { colors } from '../theme/colors';

interface HeaderProps {
    title?: string;
}

const Header = React.memo(({ title = 'Product Catalog' }: HeaderProps) => {
    const insets = useSafeAreaInsets();
    const appState = useAppState();

    return (
        <View
            style={[headerStyle.header, { paddingTop: insets.top }]}>
            <View style={headerStyle.headerContent}>
                <View style={headerStyle.titleContainer}>
                    <View style={headerStyle.logo}>
                        <Ionicons name="bag-handle" size={22} color={colors.backgroundColor} />
                    </View>

                    <View>
                        <Text style={headerStyle.title}>{title}</Text>
                        <Text style={headerStyle.subtitle}>Discover amazing products</Text>
                        <View style={headerStyle.activeContainer}>
                            <View style={headerStyle.badge}>
                            </View>
                            <Text style={headerStyle.subtitle}>{appState}</Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
});

export default Header;