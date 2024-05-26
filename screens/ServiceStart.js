import * as React from "react";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const ServiceStart = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.servicestart}>
      <View style={styles.servicestartChild} />
      <Pressable
        style={[styles.backbutton, styles.backbuttonLayout]}
        onPress={() => navigation.navigate("Login1")}
      >
        <View style={[styles.backbuttonChild, styles.backbuttonChildBorder]} />
        <Image
          style={styles.rightArrow1Icon}
          contentFit="cover"
          source={require("../assets/rightarrow-1.png")}
        />
      </Pressable>
      <Text style={styles.text}>{`어서오세요 !              님 !
이용하실 서비스를 
선택해주세요.`}</Text>
      <Image
        style={styles.servicestartItem}
        contentFit="cover"
        source={require("../assets/group-36694.png")}
      />
      <View style={[styles.servicestartInner, styles.backbuttonChildBorder]} />
      <Pressable
        style={[styles.pressable, styles.pressableLayout]}
        onPress={() => navigation.navigate("Poseestimation")}
      >
        <View style={[styles.child, styles.pressableLayout]} />
        <Text style={[styles.text1, styles.textTypo]}>자세 측정</Text>
        <Image
          style={styles.camera1Icon}
          contentFit="cover"
          source={require("../assets/camera-1.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.pressable1, styles.pressableLayout]}
        onPress={() => navigation.navigate("Home")}
      >
        <View style={[styles.child, styles.pressableLayout]} />
        <Text style={[styles.text2, styles.textTypo]}>운동 기록</Text>
        <Image
          style={styles.edit1Icon}
          contentFit="cover"
          source={require("../assets/edit-1.png")}
        />
      </Pressable>
    </View>
  );
};
const styles = StyleSheet.create({
  backbuttonLayout: {
    height: 39,
    width: 41,
  },
  backbuttonChildBorder: {
    borderStyle: "solid",
    position: "absolute",
  },
  pressableLayout: {
    height: 172,
    width: 137,
    position: "absolute",
  },
  textTypo: {
    height: 18,
    width: 99,
    textAlign: "center",
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xl,
    left: 19,
    color: Color.colorBlack,
    position: "absolute",
  },
  servicestartChild: {
    top: 93,
    left: 11,
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorMediumseagreen_100,
    width: 370,
    height: 750,
    position: "absolute",
  },
  backbuttonChild: {
    borderColor: Color.primary,
    borderWidth: 2,
    borderRadius: Border.br_3xs,
    left: 0,
    top: 0,
    height: 39,
    width: 41,
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
    position: "absolute",
  },
  text: {
    marginLeft: -161.5,
    top: 160,
    left: "50%",
    fontSize: FontSize.size_13xl,
    fontWeight: "800",
    fontFamily: FontFamily.interExtraBold,
    textAlign: "left",
    width: 322,
    height: 113,
    color: Color.colorBlack,
    position: "absolute",
  },
  servicestartItem: {
    top: 191,
    left: 207,
    maxHeight: "100%",
    width: 92,
    position: "absolute",
  },
  servicestartInner: {
    top: 333,
    left: 196,
    borderColor: Color.colorGainsboro_200,
    borderRightWidth: 1,
    width: 1,
    height: 271,
  },
  child: {
    borderRadius: Border.br_3xs,
    left: 0,
    top: 0,
    backgroundColor: Color.colorWhite,
  },
  text1: {
    top: 133,
  },
  camera1Icon: {
    top: 38,
    left: 24,
    width: 89,
    height: 77,
    position: "absolute",
  },
  pressable: {
    left: 38,
    top: 382,
    width: 137,
  },
  text2: {
    top: 132,
  },
  edit1Icon: {
    left: 32,
    width: 93,
    height: 153,
    top: 0,
    position: "absolute",
  },
  pressable1: {
    left: 217,
    top: 382,
    width: 137,
  },
  servicestart: {
    flex: 1,
    width: "100%",
    height: 852,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
});

export default ServiceStart;
