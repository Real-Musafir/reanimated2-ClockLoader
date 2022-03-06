import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Square from "./components/Square";
import { N, SQUARE_SIZE } from "./constants";
export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="inverted" />
      {new Array(12).fill(0).map((_, index) => {
        return <Square key={index} index={index} />;
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111",
    alignItems: "center",
    justifyContent: "center",
  },
});
