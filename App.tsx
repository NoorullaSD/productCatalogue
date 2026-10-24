import { StatusBar, useColorScheme } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import Header from './src/components/header';
import { CartProvider } from './src/context/cartContext';
import RootNavigator from './src/navigation/rootNavigator';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <CartProvider>
        <NavigationContainer>
          <StatusBar barStyle={isDarkMode ? 'dark-content' : 'light-content'} />
          <Header />
          <RootNavigator />
        </NavigationContainer>
      </CartProvider>
    </SafeAreaProvider>
  );
}




export default App;
