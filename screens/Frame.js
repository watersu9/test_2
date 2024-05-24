import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const Frame = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.pressable}
      onPress={() => navigation.navigate("OpenningScreen")}
    >
      <View style={[styles.view, styles.viewLayout]}>
        <View style={[styles.child, styles.itemPosition]} />
        <Text style={[styles.text, styles.textTypo]}>시작하기</Text>
      </View>
      <View style={[styles.view1, styles.itemLayout]}>
        <Image
          style={[styles.item, styles.itemLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-1.png")}
        />
        <Text style={[styles.text1, styles.textTypo]}>{`모두의
휘트니스`}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  viewLayout: {
    height: 55,
    width: 143,
    position: "absolute",
  },
  itemPosition: {
    left: 0,
    top: 0,
  },
  textTypo: {
    textAlign: "center",
    color: Color.colorWhite,
    fontWeight: "800",
    position: "absolute",
  },
  itemLayout: {
    height: 240,
    width: 240,
    position: "absolute",
  },
  child: {
    borderRadius: Border.br_3xs,
    borderStyle: "solid",
    borderColor: Color.colorWhite,
    borderWidth: 3,
    height: 55,
    width: 143,
    position: "absolute",
  },
  text: {
    top: 13,
    left: 26,
    fontSize: FontSize.size_5xl,
    fontFamily: FontFamily.interExtraBold,
  },
  view: {
    top: 521,
    left: 125,
  },
  item: {
    left: 0,
    top: 0,
  },
  text1: {
    marginLeft: -105,
    top: 54,
    left: "50%",
    fontSize: 48,
    fontFamily: FontFamily.latoBlack,
    width: 210,
    height: 151,
  },
  view1: {
    top: 206,
    left: 76,
  },
  pressable: {
    backgroundColor: Color.primary,
    flex: 1,
    width: "100%",
    height: 852,
    overflow: "hidden",
  },
});

export default Frame;
