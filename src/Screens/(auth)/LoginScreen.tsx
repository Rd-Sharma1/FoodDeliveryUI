import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const LoginScreen = () => {
  const navigation = useNavigation<any>();

  return (
    <View>
      <Text>LoginScreen</Text>
      <Button title="Get Started" onPress={() => navigation.replace("tabs")} />
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
