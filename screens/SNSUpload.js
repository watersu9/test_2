import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import NavigationBar from "../components/NavigationBar";
import { FontFamily, FontSize, Color } from "../GlobalStyles";

const SNSUpload = () => {
  return (
    <View style={styles.snsupload}>
      <View style={styles.heading}>
        <Text style={styles.text}>님 !</Text>
        <Text style={[styles.text1, styles.textTypo]}>
          오늘도 운동하러 오셨군요 !
        </Text>
      </View>
      <View style={styles.snsuploadChild} />
      <View style={styles.snsuploadItem} />
      <Image
        style={styles.mdicameraOutlineIcon}
        contentFit="cover"
        source={require("../assets/mdicameraoutline.png")}
      />
      <View style={styles.snsuploadInner} />
      <Text style={[styles.text2, styles.textTypo]}>
        오늘의 운동/식단을 공유해주세요!
      </Text>
      <NavigationBar buttonExplore={require("../assets/buttonexplore1.png")} />
    </View>
  );
};

const styles = StyleSheet.create({
  textTypo: {
    fontFamily: FontFamily.latoBold,
    fontWeight: "600",
    textAlign: "left",
    position: "absolute",
  },
  text: {
    top: 26,
    left: 137,
    fontSize: FontSize.size_5xl,
    fontWeight: "800",
    fontFamily: FontFamily.latoBlack,
    textAlign: "left",
    color: Color.colorGray_300,
    position: "absolute",
  },
  text1: {
    top: 0,
    fontSize: FontSize.size_sm,
    left: 0,
    color: Color.colorGray_300,
    fontFamily: FontFamily.latoBold,
    fontWeight: "600",
  },
  heading: {
    top: 41,
    left: 194,
    width: 172,
    height: 55,
    position: "absolute",
  },
  snsuploadChild: {
    top: 96,
    left: 205,
    borderStyle: "solid",
    borderColor: Color.colorBlack,
    borderTopWidth: 1,
    width: 112,
    height: 1,
    position: "absolute",
  },
  snsuploadItem: {
    top: 176,
    backgroundColor: Color.colorWhite,
    width: 390,
    height: 405,
    left: 0,
    position: "absolute",
  },
  mdicameraOutlineIcon: {
    top: 342,
    left: 168,
    width: 62,
    height: 74,
    position: "absolute",
    overflow: "hidden",
  },
  snsuploadInner: {
    top: 129,
    left: 35,
    width: 318,
    height: 250,
    position: "absolute",
  },
  text2: {
    top: 132,
    left: 30,
    fontSize: 22,
    color: Color.colorBlack,
    width: 338,
    height: 25,
  },
  snsupload: {
    backgroundColor: Color.colorLightcyan,
    flex: 1,
    width: "100%",
    height: 855,
    overflow: "hidden",
  },
});

export default SNSUpload;
