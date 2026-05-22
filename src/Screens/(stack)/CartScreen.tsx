import React from "react";
import { StyleSheet, Text, View } from "react-native";

const CartScreen = ({ route }: any) => {
  const { RestaurantName, price } = route.params;

  return (
    <View>
      <Text>CartScreen</Text>
      <Text>
        {RestaurantName} {price}
      </Text>
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({});
