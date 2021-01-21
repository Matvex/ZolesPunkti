import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const ControlButton = (props) => {
  let sty = { ...styles[props.value] };

  return (
    <TouchableOpacity
      style={[styles.control_button, sty]}
      onPress={props.onPress}
    >
      <Text style={styles.text}>{props.title}</Text>
    </TouchableOpacity>
  );
};

export default ControlButton;

const styles = StyleSheet.create({
  control_button: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 12,
  },
  text: {
    fontSize: 18,
  },
  true: {
    backgroundColor: "red",
  },
  false: {
    backgroundColor: "blue",
  },
});
