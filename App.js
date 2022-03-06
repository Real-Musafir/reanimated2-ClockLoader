import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useSharedValue, withTiming } from "react-native-reanimated";
import { useEffect } from "react";
import Square from "./components/Square";
import { N, SQUARE_SIZE } from "./constants";
export default function App() {
  const progress = useSharedValue(0);

  useEffect(() => {
    progress.value = withTiming(2 * Math.PI, { duration: 4000 });
  });

  return (
    <View style={styles.container}>
      <StatusBar style="inverted" />
      {new Array(12).fill(0).map((_, index) => {
        return <Square key={index} index={index} progress={progress} />;
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
