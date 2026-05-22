import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const Logout = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Text>Logout</Text>
      <Button
        title="Logout"
        onPress={navigation.reset({
          index: 0,
          routes: [{ name: "auth" }],
        })}
      />
    </View>
  );
};

export default Logout;

const styles = StyleSheet.create({});
