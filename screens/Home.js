import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Calendar } from "react-native-calendars";
import HomeContainer from "../components/HomeContainer";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const Home = () => {
  const navigation = useNavigation();

  const onDayPress = (day) => {
    navigation.navigate("CreatePostScreen", { date: day.dateString });
  };

  return (
    <View style={styles.home}>
      <View style={styles.heading}>
        <Text style={styles.text}>님 !</Text>
        <Text style={[styles.text1, styles.textTypo]}>
          오늘도 운동하러 오셨군요 !
        </Text>
      </View>
      <Pressable
        style={styles.searchButton}
        onPress={() => navigation.navigate("Exercisevideo")}
      >
        <View style={styles.bg} />
        <Image
          style={[styles.icSearchIcon, styles.text2Layout]}
          contentFit="cover"
          source={require("../assets/ic-search.png")}
        />
        <Text style={[styles.search1, styles.text1Typo]}>Search</Text>
      </Pressable>
      <View style={styles.homeChild} />
      <View style={[styles.homeItem, styles.homeLayout]} />
      <View style={[styles.homeInner, styles.homeLayout]} />
      <Text style={[styles.text2, styles.text2Layout]}>나의 정보</Text>
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
      <Pressable
        style={[styles.pressable, styles.childLayout]}
        onPress={() => navigation.navigate("TrainerList")}
      >
        <View style={[styles.child, styles.childLayout]} />
        <Text style={[styles.text3, styles.textTypo]}>전문가와 상담</Text>
        <Image
          style={styles.communication1Icon}
          contentFit="cover"
          source={require("../assets/communication.png")}
        />
      </Pressable>
      <HomeContainer />
      <Calendar
        style={styles.calendar}
        onDayPress={onDayPress}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textTypo: {
    fontFamily: FontFamily.latoBold,
    fontWeight: "600",
    textAlign: "left",
  },
  text2Layout: {
    height: 24,
    position: "absolute",
  },
  text1Typo: {
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  homeLayout: {
    height: 159,
    width: 159,
    top: 204,
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_xs,
    position: "absolute",
  },
  backbuttonLayout: {
    height: 39,
    width: 41,
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
    fontSize: FontSize.size_sm,
    position: "absolute",
    left: 0,
    top: 0,
    color: Color.colorGray_300,
  },
  heading: {
    top: 41,
    left: 194,
    width: 172,
    height: 55,
    position: "absolute",
  },
  bg: {
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_xs,
    height: 48,
    width: 350,
    left: 0,
    top: 0,
    position: "absolute",
  },
  icSearchIcon: {
    top: 12,
    left: 12,
    width: 24,
    overflow: "hidden",
  },
  search1: {
    top: 16,
    left: 46,
    fontFamily: FontFamily.latoRegular,
    color: "rgba(25, 33, 38, 0.5)",
    textAlign: "left",
  },
  searchButton: {
    top: 109,
    left: 20,
    height: 48,
    width: 350,
    position: "absolute",
  },
  homeChild: {
    top: 96,
    borderColor: Color.colorBlack,
    borderTopWidth: 1,
    width: 112,
    height: 1,
    borderStyle: "solid",
    left: 205,
    position: "absolute",
  },
  homeItem: {
    left: 27,
  },
  homeInner: {
    left: 205,
  },
  text2: {
    top: 218,
    left: 65,
    fontSize: FontSize.size_xl,
    color: Color.colorBlack,
    width: 82,
    fontFamily: FontFamily.latoBold,
    fontWeight: "600",
    textAlign: "left",
  },
  backbuttonChild: {
    borderRadius: Border.br_3xs,
    borderColor: Color.primary,
    borderWidth: 2,
    borderStyle: "solid",
    left: 0,
    top: 0,
  },
  rightArrow1Icon: {
    top: 11,
    left: 10,
    width: 20,
    height: 16,
    position: "absolute",
  },
  backbutton: {
    top: 48,
    left: 14,
  },
  text3: {
    top: 210,
    left: 224,
    lineHeight: 30,
    fontSize: FontSize.size_xl,
    textAlign: "center",
    width: 125,
    height: 36,
  },
  communication1Icon: {
    top: 256,
    left: 243,
    width: 87,
    height: 87,
    position: "absolute",
  },
  home: {
    backgroundColor: Color.colorLightcyan,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
  calendar: {
    marginTop:380,
  },
});

export default Home;



