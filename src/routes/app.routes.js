import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ListTasks from '../pages/ListTasks';

const AuthStack = createNativeStackNavigator();

function AuthRoutes() {
    return (
        <AuthStack.Navigator>
            <AuthStack.Screen
                name="ListTasks"
                component={ListTasks}
                options={{
                    headerShown: false,
                }}
            />
        </AuthStack.Navigator>
    )
}

export default AuthRoutes;