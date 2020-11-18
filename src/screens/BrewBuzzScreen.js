import React from "react";
import { Text, View, StyleSheet } from "react-native";

const BrewBuzz = () => {
  return (
    <View style={styles.parentStyle}>
      <View style={styles.viewOneStyle}></View>
      <View style={styles.viewTwoStyle}>
        <Text>Venn Brewing Co. ⭐⭐⭐⭐⭐</Text>
        <View style={styles.viewThreeStyle}>
          <Text>3550 E 46th St Suite 140</Text>
          <Text>Minneapolis, MN 55406</Text>
        </View>
      </View>
      <View>
        <Text>More stuff here?</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  parentStyle: {
    margin: 30,
    borderWidth: 3,
    borderColor: "black",
    borderRadius: 15,
    height: 200,
    flexDirection: "row",
  },
  viewOneStyle: {
    marginLeft: 10,
    marginTop: 5,
    height: 100,
    width: 100,
    backgroundColor: "red",
  },
  viewTwoStyle: {
    height: 50,
    width: 200,
    backgroundColor: "green",
    marginLeft: 20,
    marginTop: 5,
  },
  viewThreeStyle: {
    height: 76,
    width: 200,
    backgroundColor: "blue",
    marginTop: 5,
  },
});

export default BrewBuzz;
