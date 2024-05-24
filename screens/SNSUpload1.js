import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import NavigationBar from "../components/NavigationBar";
import { Color, FontSize, Border, FontFamily } from "../GlobalStyles";

const SNSUpload1 = () => {
  return (
    <View style={styles.snsupload}>
      <View style={[styles.back, styles.backLayout]}>
        <View style={[styles.backChild, styles.backLayout]} />
        <Image
          style={styles.iconChevronleft}
          contentFit="cover"
          source={require("../assets/icon--chevronleft.png")}
        />
      </View>
      <View style={[styles.snsuploadChild, styles.snsuploadBg]} />
      <View style={[styles.snsuploadItem, styles.snsuploadBg]} />
      <View style={styles.snsuploadInner} />
      <Image
        style={[
          styles.materialSymbolspersonOutlinIcon,
          styles.gameIconsqueenCrownLayout,
        ]}
        contentFit="cover"
        source={require("../assets/materialsymbolspersonoutline.png")}
      />
      <Text style={[styles.text, styles.textTypo]}>지수뿡</Text>
      <Image
        style={[styles.gameIconsqueenCrown, styles.gameIconsqueenCrownLayout]}
        contentFit="cover"
        source={require("../assets/gameiconsqueencrown.png")}
      />
      <View style={[styles.back1, styles.backLayout]}>
        <View style={[styles.backChild, styles.backLayout]} />
        <Image
          style={styles.iconChevronleft}
          contentFit="cover"
          source={require("../assets/icon--chevronleft.png")}
        />
      </View>
      <Text style={[styles.allPosts, styles.allPostsPosition]}>
        Today’s Post
      </Text>
      <Image
        style={styles.shapeIcon}
        contentFit="cover"
        source={require("../assets/shape.png")}
      />
      <Text style={[styles.joshuaLTheGameContainer, styles.allPostsPosition]}>
        <Text style={styles.text1}>{`지수뿡 | `}</Text>
        <Text style={styles.text2}>{`오늘 식단 !!
`}</Text>
      </Text>
      <NavigationBar buttonExplore={require("../assets/buttonexplore2.png")} />
    </View>
  );
};

const styles = StyleSheet.create({
  backLayout: {
    height: 39,
    width: 39,
    position: "absolute",
  },
  snsuploadBg: {
    backgroundColor: Color.colorWhite,
    position: "absolute",
  },
  gameIconsqueenCrownLayout: {
    height: 30,
    width: 30,
    position: "absolute",
    overflow: "hidden",
  },
  textTypo: {
    textAlign: "left",
    fontSize: FontSize.size_xl,
  },
  allPostsPosition: {
    color: Color.colorGray_200,
    letterSpacing: 0,
    top: "50%",
    position: "absolute",
  },
  backChild: {
    top: 0,
    borderRadius: Border.br_3xs,
    borderStyle: "solid",
    borderColor: Color.primary,
    borderWidth: 1,
    left: 0,
  },
  iconChevronleft: {
    marginTop: -6.5,
    right: 16,
    width: 9,
    height: 15,
    top: "50%",
    position: "absolute",
  },
  back: {
    left: 17,
    top: 24,
    width: 39,
  },
  snsuploadChild: {
    top: 66,
    width: 390,
    height: 66,
    left: 0,
  },
  snsuploadItem: {
    top: 135,
    left: -1,
    width: 391,
    height: 405,
  },
  snsuploadInner: {
    top: 129,
    left: 35,
    width: 318,
    height: 250,
    position: "absolute",
  },
  materialSymbolspersonOutlinIcon: {
    top: 83,
    left: 17,
  },
  text: {
    top: 85,
    left: 51,
    fontFamily: FontFamily.interExtraBold,
    color: Color.colorBlack,
    width: 58,
    height: 28,
    fontWeight: "800",
    position: "absolute",
  },
  gameIconsqueenCrown: {
    top: 82,
    left: 109,
  },
  back1: {
    left: 18,
    top: 24,
    width: 39,
  },
  allPosts: {
    marginTop: -411.5,
    width: "29.23%",
    left: "35.38%",
    fontSize: FontSize.size_5xl,
    lineHeight: 21,
    fontWeight: "600",
    fontFamily: FontFamily.latoBold,
    textAlign: "center",
  },
  shapeIcon: {
    width: 41,
    height: 35,
  },
  text1: {
    fontFamily: FontFamily.latoBlack,
    fontWeight: "800",
  },
  text2: {
    fontWeight: "500",
    fontFamily: FontFamily.latoLight,
  },
  joshuaLTheGameContainer: {
    marginTop: 181.5,
    width: "88.46%",
    left: "5.9%",
    lineHeight: 18,
    textAlign: "left",
    fontSize: FontSize.size_xl,
  },
  snsupload: {
    backgroundColor: Color.colorLightcyan,
    flex: 1,
    width: "100%",
    height: 855,
    overflow: "hidden",
  },
});

export default SNSUpload1;
