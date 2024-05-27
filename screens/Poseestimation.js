import * as React from "react";
import { StyleSheet, View, Pressable, Text,Linking } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";



const Poseestimation = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.poseestimation}>
      <View style={styles.poseestimationChild} />
      <Pressable
        style={[styles.backbutton, styles.backbuttonLayout]}
        onPress={() => navigation.navigate("ServiceStart")}
      >
        <View style={[styles.backbuttonChild, styles.backbuttonChildBorder]} />
        <Image
          style={styles.rightArrow1Icon}
          contentFit="cover"
          source={require("../assets/rightarrow-1.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.shoulderpressbutton, styles.shoulderpressbuttonLayout]}
        onPress={() => Linking.openURL("https://taeyoung0823.github.io/")}
      >
        <Image
          style={[
            styles.shoulderpressbuttonChild,
            styles.shoulderpressbuttonLayout,
          ]}
          contentFit="cover"
          source={require("../assets/Ellipse.png")}
        />
        <Image
          style={styles.shoulderpressIcon}
          contentFit="cover"
          source={require("../assets/shoulderpress.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.squatbutton, styles.shoulderpressbuttonLayout]}
        onPress={() => navigation.navigate("CameraScreen")}
      >
        <Image
          style={[
            styles.shoulderpressbuttonChild,
            styles.shoulderpressbuttonLayout,
          ]}
          contentFit="cover"
          source={require("../assets/Ellipse.png")}
        />
        <Image
          style={styles.squatIcon}
          contentFit="cover"
          source={require("../assets/squat.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.dumbbelcurlbutton, styles.lungebuttonPosition]}
        onPress={() => Linking.openURL("https://storage.googleapis.com/tfjs-models/demos/pose-detection/index.html?model=movenet")}
      >
        <Image
          style={[
            styles.shoulderpressbuttonChild,
            styles.shoulderpressbuttonLayout,
          ]}
          contentFit="cover"
          source={require("../assets/Ellipse.png")}
        />
        <Image
          style={styles.biceps1Icon}
          contentFit="cover"
          source={require("../assets/dumbbelcurl.png")}
        />
      </Pressable>
        <Image
          style={styles.dumbbelcurlIcon}
          contentFit="cover"
          source={require("../assets/dumbbelcurl.png")}
        />
      <Text style={[styles.text, styles.textTypo1]}>
        어떤 운동을 확인하시겠습니까 ?
      </Text>
      <Text style={[styles.text1, styles.textTypo]}>스쿼트</Text>
      <Text style={[styles.text2, styles.textTypo]}>런지</Text>
      <Text style={[styles.text3, styles.textTypo]}>덤벨컬</Text>
      <Text style={[styles.text4, styles.textTypo1]}>숄더 프레스</Text>
      <Image
        style={styles.poseestimationItem}
        contentFit="cover"
        source={require("../assets/line-3.png")}
      />
      <View
        style={[styles.poseestimationInner, styles.backbuttonChildBorder]}
      />
      <Pressable
        style={[styles.lungebutton, styles.lungebuttonPosition]}
        onPress={() => navigation.navigate("Gotolocalhost")}
      >
        <Image
          style={[
            styles.shoulderpressbuttonChild,
            styles.shoulderpressbuttonLayout,
          ]}
          contentFit="cover"
          source={require("../assets/Ellipse.png")}
        />
        <Image
          style={styles.lungeIcon}
          contentFit="cover"
          source={require("../assets/lunge.png")}
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
  shoulderpressbuttonLayout: {
    height: 155,
    width: 155,
    position: "absolute",
  },
  lungebuttonPosition: {
    left: 205,
    height: 155,
    width: 155,
    position: "absolute",
  },
  textTypo1: {
    height: 25,
    color: Color.colorBlack,
    fontFamily: FontFamily.latoBold,
    fontWeight: "600",
    fontSize: FontSize.size_3xl,
    textAlign: "center",
    position: "absolute",
  },
  textTypo: {
    width: 69,
    height: 25,
    color: Color.colorBlack,
    fontFamily: FontFamily.latoBold,
    fontWeight: "600",
    fontSize: FontSize.size_3xl,
    position: "absolute",
  },
  poseestimationChild: {
    top: 92,
    left: 11,
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorMediumseagreen_100,
    width: 370,
    height: 750,
    position: "absolute",
  },
  backbuttonChild: {
    borderRadius: Border.br_3xs,
    borderColor: Color.primary,
    borderWidth: 2,
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
  shoulderpressbuttonChild: {
    left: 0,
    top: 0,
  },
  shoulderpressIcon: {
    top: 12,
    left: 13,
    width: 130,
    height: 130,
    position: "absolute",
  },
  shoulderpressbutton: {
    left: 31,
    width: 155,
    top: 462,
  },
  squatIcon: {
    top: 16,
    left: 18,
    width: 119,
    height: 119,
    position: "absolute",
  },
  squatbutton: {
    top: 230,
    left: 31,
    width: 155,
  },
  dumbbelcurlIcon: {
    top: 26,
    left: 28,
    width: 102,
    height: 102,
    position: "absolute",
  },
  dumbbelcurlbutton: {
    top: 462,
  },
  text: {
    top: 132,
    left: 27,
    width: 338,
  },
  text1: {
    left: 83,
    textAlign: "left",
    top: 401,
    width: 69,
  },
  text2: {
    left: 247,
    top: 401,
    width: 69,
    textAlign: "center",
  },
  text3: {
    top: 633,
    left: 248,
    textAlign: "center",
  },
  text4: {
    top: 636,
    left: 55,
    width: 107,
  },
  poseestimationItem: {
    top: 223,
    left: 194,
    width: 1,
    height: 447,
    position: "absolute",
  },
  poseestimationInner: {
    top: 438,
    left: 56,
    borderColor: Color.colorGainsboro_200,
    borderTopWidth: 1,
    width: 280,
    height: 1,
  },
  lungeIcon: {
    top: 20,
    left: 19,
    width: 118,
    height: 118,
    position: "absolute",
  },
  lungebutton: {
    top: 230,
  },
  poseestimation: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 852,
    overflow: "hidden",
  },
});

export default Poseestimation;
