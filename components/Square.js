import { View, Text } from "react-native";
import React from "react";
import { N, SQUARE_SIZE } from "../constants";
import Animated, { useAnimatedStyle } from "react-native-reanimated";

export default function Square({ index, progress }) {
  const offsetAngle = (2 * Math.PI) / N;
  const finalAngle = offsetAngle * (N - 1 - index);

  const rStyle = useAnimatedStyle(() => {
    const rotate = Math.min(finalAngle, progress.value);

    return {
      transform: [
        { rotate: `${rotate}rad` },
        { translateY: -index * SQUARE_SIZE },
      ],
    };
  });

  return (
    <Animated.View
      key={index}
      style={[
        {
          height: SQUARE_SIZE,
          aspectRatio: 1,
          backgroundColor: "white",
          opacity: (index + 1) / N,
          position: "absolute",
        },
        rStyle,
      ]}
    />
  );
}
