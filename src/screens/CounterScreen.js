import React, { useReducer } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import DeprecatedViewPropTypes from "react-native/Libraries/DeprecatedPropTypes/DeprecatedViewPropTypes";

const reducer = (state, action) => {
  // state { count: number }
  // action { type: 'increment' || 'decrement' }
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + action.payload };
    case "decrement":
      return { ...state, count: state.count - action.payload };
    default:
      return state;
  }
};

const CounterScreen = ({}) => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  const { counter } = state;

  return (
    <View>
      <Button
        title="Increase"
        onPress={() => {
          dispatch({ type: "increment", payload: 1 });
        }}
      />
      <Button
        title="Decrease"
        onPress={() => {
          dispatch({ type: "decrement", payload: 1 });
        }}
      />
      <Text>Current Count: {state.count} </Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CounterScreen;
