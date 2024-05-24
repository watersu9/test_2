import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const CameraScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.camerascreen}>
      <Image
        style={styles.camerascreenChild}
        contentFit="cover"
        source={require("../assets/ellipse-3.png")}
      />
      <Pressable
        style={[styles.backbutton, styles.backbuttonLayout]}
        onPress={() => navigation.navigate("ServiceStart")}
      >
        <View style={[styles.backbuttonChild, styles.backbuttonLayout]} />
        <Image
          style={styles.rightArrow1Icon}
          contentFit="cover"
          source={require("../assets/rightarrow-1.png")}
        />
      </Pressable>
      <Text style={[styles.text, styles.textTypo]}>카메라 화면</Text>
      <Text style={[styles.text1, styles.textTypo]}>측정시작</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  backbuttonLayout: {
    height: 39,
    width: 41,
    position: "absolute",
  },
  textTypo: {
    height: 20,
    width: 80,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    lineHeight: 20,
    fontSize: FontSize.size_base,
    left: 156,
    position: "absolute",
  },
  camerascreenChild: {
    top: 673,
    left: 138,
    width: 116,
    height: 116,
    position: "absolute",
  },
  backbuttonChild: {
    top: 0,
    left: 0,
    borderRadius: Border.br_3xs,
    borderStyle: "solid",
    borderColor: Color.primary,
    borderWidth: 2,
  },
  rightArrow1Icon: {
    top: 11,
    left: 10,
    width: 20,
    height: 16,
    position: "absolute",
  },
  backbutton: {
    top: 45,
    left: 15,
  },
  text: {
    top: 416,
  },
  text1: {
    top: 797,
  },
  camerascreen: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 852,
    overflow: "hidden",
  },
});

export default CameraScreen;
