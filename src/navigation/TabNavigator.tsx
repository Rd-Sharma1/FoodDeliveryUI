import OrdersScreen from "@/Screens/(tabs)/OrdersScreen";
import SearchScreen from "@/Screens/(tabs)/SearchScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import React from "react";
import { StyleSheet } from "react-native";
import DrawerNavigator from "./DrawerNavigator";
import HomeStack from "./HomeStack";

const getTabBarVisibility = (route: any) => {
  const routeName = getFocusedRouteNameFromRoute(route) ?? "HomeScreen";

  if (routeName === "RestaurantDetail" || routeName === "CartScreen") {
    return { display: "none" };
  }

  return undefined;
};

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="HomeTab"
        component={HomeStack}
        options={({ route }) => ({
          headerShown: false,
          tabBarStyle: getTabBarVisibility(route),
        })}
      />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Orders" component={OrdersScreen} />
      <Tab.Screen
        name="ProfileDrawer"
        component={DrawerNavigator}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;

const styles = StyleSheet.create({});
