import HelpScreen from "@/Screens/(drawer)/HelpScreen";
import Logout from "@/Screens/(drawer)/Logout";
import MyOrdersScreen from "@/Screens/(drawer)/MyOrdersScreen";
import SettingsScreen from "@/Screens/(drawer)/SettingsScreen";
import UserProfile from "@/Screens/(drawer)/UserProfile";
import ProfileScreen from "@/Screens/(tabs)/ProfileScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Profile" component={ProfileScreen} />
      <Drawer.Screen name="MyOrders" component={MyOrdersScreen} />
      <Drawer.Screen name="Settings" component={SettingsScreen} />
      <Drawer.Screen name="Logout" component={Logout} />
      <Drawer.Screen name="Help" component={HelpScreen} />
      <Drawer.Screen name="User" component={UserProfile} />
    </Drawer.Navigator>
  );
}
