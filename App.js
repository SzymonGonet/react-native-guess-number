import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import StartGameScreen from "./src/screens/StartGameScreen";

export default function App() {
  return (
    <View style={styles.rootScreen}>
      <StartGameScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    backgroundColor: "#ddb52f",
  },
});
