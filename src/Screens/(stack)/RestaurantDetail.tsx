import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const RestaurantDetail = ({ route }: any) => {
  const navigation = useNavigation<any>();

  const { RestaurantName, price } = route.params;

  return (
    <View>
      <Text>RestaurantDetail</Text>
      <Text>
        {RestaurantName} {price}
      </Text>
      <Button
        title="cart"
        onPress={() =>
          navigation.push("CartScreen", {
            RestaurantName: "RestaurantName",
            price: "price",
          })
        }
      />
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default RestaurantDetail;

const styles = StyleSheet.create({});
