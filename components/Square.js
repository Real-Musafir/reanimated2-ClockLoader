import { View, Text } from "react-native";
import React from "react";
import { N, SQUARE_SIZE } from "../constants";

export default function Square({ index }) {
  const offsetAngle = (2 * Math.PI) / N;
  const finalAngle = offsetAngle * index;
  return (
    <View
      key={index}
      style={{
        height: SQUARE_SIZE,
        aspectRatio: 1,
        backgroundColor: "white",
        opacity: (index + 1) / N,
        position: "absolute",
        transform: [
          { rotate: `${finalAngle}` },
          { translateY: -index * SQUARE_SIZE },
        ],
      }}
    />
  );
}
