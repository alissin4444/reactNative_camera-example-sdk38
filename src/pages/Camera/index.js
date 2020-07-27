import React, { useState, useEffect } from "react";
import { Text, TouchableOpacity, View } from "react-native";

import { Camera } from "expo-camera";

const CameraComponent = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <Camera style={{ flex: 1 }} type={type}>
      <TouchableOpacity
        style={{
          flex: 1,
          justifyContent: "flex-end",
          alignItems: "center",
        }}
        onPress={() => {
          setType(
            type === Camera.Constants.Type.back
              ? Camera.Constants.Type.front
              : Camera.Constants.Type.back
          );
        }}
      >
        <Text style={{ fontSize: 28, marginBottom: 10, color: "#fff" }}>
          {" "}
          Flip{" "}
        </Text>
      </TouchableOpacity>
    </Camera>
  );
};

export default CameraComponent;
