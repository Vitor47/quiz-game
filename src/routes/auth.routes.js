import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Start from '../pages/Start'
import Home from '../pages/Home'

const AuthStack = createNativeStackNavigator();

function AuthRoutes() {
    return (
        <AuthStack.Navigator>
            <AuthStack.Screen
                name="Start"
                component={Start}
                options={{
                    headerShown: false,
                }}
            />
            <AuthStack.Screen
                name="Home"
                component={Home}
                options={{
                    headerShown: false,
                }}
            />
        </AuthStack.Navigator>
    )
}

export default AuthRoutes;