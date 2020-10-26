import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {
  const friends = [
    { name: "Friend # 1", age: "25" },
    { name: "Friend # 2", age: "35" },
    { name: "Friend # 3", age: "45" },
    { name: "Friend # 4", age: "55" },
    { name: "Friend # 5", age: "65" },
    { name: "Friend # 6", age: "75" },
    { name: "Friend # 7", age: "85" },
    { name: "Friend # 8", age: "95" },
    { name: "Friend # 9", age: "105" },
  ];

  return (
    <FlatList
      //   horizontal
      //   showsHorizontalScrollIndicator={false}
      keyExtractor={(friend) => friend.name}
      data={friends}
      renderItem={({ item }) => {
        return (
          <Text style={styles.textStyle}>
            {item.name} - Age {item.age}
          </Text>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50,
  },
});

export default ListScreen;
