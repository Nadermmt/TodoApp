import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Colors } from '../assets';
import { Splash } from '../screens';

const Stack = createNativeStackNavigator();

const RootNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerShown: false,
                contentStyle: {
                    backgroundColor: Colors.white
                }
            }}>
                <Stack.Screen name="Splash" component={Splash}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default RootNavigation;