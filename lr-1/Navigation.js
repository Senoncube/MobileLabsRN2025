import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import NewsScreen from "./components/addNewsPage/News";
import GalleryScreen from "./components/addGallery/gallery";
import AuthScreen from "./components/addAuth/auth";

const Stack = createStackNavigator();

const AppNavigator = () => (
  <Stack.Navigator
    initialRouteName="News"
    screenOptions={{
      headerStyle: { backgroundColor: "#f4511e" },
      headerTintColor: "#fff",
      headerTitleStyle: { fontWeight: "bold" },
    }}
  >
    <Stack.Screen 
      name="News" 
      component={NewsScreen} 
      options={{ title: "Новини" }} 
    />
    <Stack.Screen 
      name="Gallery" 
      component={GalleryScreen} 
      options={{ title: "Галерея" }} 
    />
    <Stack.Screen 
      name="Auth" 
      component={AuthScreen} 
      options={{ title: "Реєстрація" }} 
    />
  </Stack.Navigator>
);

export default AppNavigator;
