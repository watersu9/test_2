import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Border, Color, FontSize, FontFamily, Padding } from "../GlobalStyles";

const HomeContainer = () => {
  return (
    <View style={[styles.navigationBar, styles.bgLayout]}>
      <View style={[styles.bg, styles.bgPosition]} />
      <Image
        style={[styles.buttonprofileIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/buttonprofile.png")}
      />
      <Image
        style={[styles.buttonstatisticIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/buttonstatistic.png")}
      />
      <Image
        style={[styles.buttonexploreIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/buttonexplore.png")}
      />
      <View style={styles.buttonhomeactive}>
        <View style={[styles.homeParent, styles.bgPosition]}>
          <Image
            style={[styles.homeIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/home.png")}
          />
          <Text style={styles.home}>Home</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bgLayout: {
    height: 64,
    width: 340,
  },
  bgPosition: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  iconLayout: {
    height: 24,
    width: 24,
  },
  bg: {
    borderRadius: Border.br_13xl,
    backgroundColor: Color.colorWhite,
    height: 64,
    width: 340,
  },
  buttonprofileIcon: {
    left: 286,
    top: 20,
    width: 24,
    position: "absolute",
  },
  buttonstatisticIcon: {
    left: 214,
    top: 20,
    width: 24,
    position: "absolute",
  },
  buttonexploreIcon: {
    left: 142,
    top: 20,
    width: 24,
    position: "absolute",
  },
  homeIcon: {
    overflow: "hidden",
  },
  home: {
    fontSize: FontSize.size_smi,
    lineHeight: 24,
    fontWeight: "500",
    fontFamily: FontFamily.latoLight,
    color: Color.colorWhite,
    textAlign: "left",
    marginLeft: 4,
  },
  homeParent: {
    borderRadius: Border.br_24xl,
    backgroundColor: Color.primary,
    flexDirection: "row",
    paddingLeft: Padding.p_base,
    paddingTop: Padding.p_7xs,
    paddingRight: Padding.p_lgi,
    paddingBottom: Padding.p_7xs,
  },
  buttonhomeactive: {
    top: 14,
    left: 14,
    width: 98,
    height: 36,
    position: "absolute",
  },
  navigationBar: {
    top: 768,
    left: 25,
    position: "absolute",
  },
});

export default HomeContainer;
