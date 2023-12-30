import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { routes } from "@constants/routes";
import { NAVIGATION_TYPE } from "@constants/navigation";

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          animation: "none",
        }}
      >
        {routes.map((route) => {
          const { name, ...rest } = route;

          return (
            <Stack.Screen key={name} name={name as NAVIGATION_TYPE} {...rest} />
          );
        })}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
