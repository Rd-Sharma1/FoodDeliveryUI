import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const HomeScreen = () => {
  const navigation = useNavigation<any>();

  return (
    <View>
      <Text>HomeScreen</Text>
      <Button
        title="detail"
        onPress={() =>
          navigation.navigate("RestaurantDetail", {
            RestaurantName: "RestaurantName",
            price: "price",
          })
        }
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
