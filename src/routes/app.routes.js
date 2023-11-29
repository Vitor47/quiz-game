import { createNativeStackNavigator } from "@react-navigation/native-stack";
import GameScreen from "../pages/GameScreen";
import EndGame from "../pages/EndGame";

const AppStack = createNativeStackNavigator();

function AppRoutes() {
  return (
    <AppStack.Navigator>
      <AppStack.Screen
        name="GameScreen"
        component={GameScreen}
        options={{
          headerShown: false,
        }}
      />
      <AppStack.Screen
        name="EndGame"
        component={EndGame}
        options={{
          headerShown: false,
        }}
      />
    </AppStack.Navigator>
  );
}

export default AppRoutes;
