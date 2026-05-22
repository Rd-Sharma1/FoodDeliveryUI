import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const OnboardingScreen = () => {
  const navigation = useNavigation<any>();

  return (
    <View>
      <Text>Onboarding</Text>
      <Button
        title="Get Started"
        onPress={() => navigation.navigate("Login")}
      />
    </View>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({});
