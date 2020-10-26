import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = () => {
  return (
    <View>
      <Text style={styles.text}>If it's beer, it's here.</Text>
      <Button
        onPress={() => console.log("Button pressed")}
        title="Go to Components Demo"
      />
      <TouchableOpacity onPress={() => console.log("List Pressed")}>
        <Text>Go to List Demo</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
