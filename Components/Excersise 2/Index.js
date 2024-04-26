import React from 'react';
import Homescreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider as PaperProvider } from 'react-native-paper';
import CustomNavigationBar from './CustomNavigationBar';

const Stack = createStackNavigator();

const Index = () => {
    return (
        <PaperProvider>
            <NavigationContainer>
                <Stack.Navigator
                    initialRouteName="Home"
                    screenOptions={{
                        header: (props) => <CustomNavigationBar {...props} />,
                    }}>
                    <Stack.Screen name="Home" component={Homescreen} />
                    <Stack.Screen name="Details" component={DetailsScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        </PaperProvider>
    );
}

export default Index;
