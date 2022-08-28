import { View, Text, Pressable, StyleSheet } from "react-native";
import React from "react";

const PrimaryButton = ({ children }) => {
  function buttonPressed() {
    console.log("Pressed");
  }

  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer
        }
        onPress={buttonPressed}
      >
        <Text style={[styles.buttonText]}>{children}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 24,
    margin: 4,
    overflow: "hidden",
  },
  buttonInnerContainer: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: "#72063c",
    elevation: 2,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  pressed: { opacity: 0.75 },
});

export default PrimaryButton;
