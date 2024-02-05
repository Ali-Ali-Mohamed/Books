import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import BooksScreen from './src/screens/BooksScreen';
import BookDetailScreen from './src/screens/BookDetailScreen';

const stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen name="Books" component={BooksScreen} />
        <stack.Screen name="Book Details" component={BookDetailScreen} />
      </stack.Navigator>
    </NavigationContainer>
  );
}

export default App;