import * as React from "react";
import { Text, StyleSheet, View, Pressable, Alert } from "react-native";
import { Image } from "expo-image";
import * as ImagePicker from 'expo-image-picker';
import NavigationBar from "../components/NavigationBar";
import { FontFamily, FontSize, Color } from "../GlobalStyles";

const SNSUpload = () => {
  const [selectedImage, setSelectedImage] = React.useState(null);

  const pickImage = async () => {
    // Request permission to access the media library
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      Alert.alert("Permission to access camera roll is required!");
      return;
    }

    // Launch the image picker
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);  // Set the selected image URI
    }
  };

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
      <Pressable
        style={[styles.backbutton, styles.backbuttonLayout]}
        onPress={() => navigation.navigate("Home")}
      >
        <View style={[styles.backbuttonChild, styles.backbuttonLayout]} />
        <Image
          style={styles.rightArrow1Icon}
          contentFit="cover"
          source={require("../assets/rightarrow-1.png")}
        />
      </Pressable>
      <Pressable onPress={pickImage}>
        <Image
          style={styles.mdicameraOutlineIcon}
          contentFit="cover"
          // Show selected image or the default camera icon
          source={selectedImage ? { uri: selectedImage } : require("../assets/mdicameraoutline.png")}
        />
      </Pressable>
      
      <View style={styles.snsuploadInner} />
      <Text style={[styles.text2, styles.textTypo]}>
        오늘의 운동/식단을 공유해주세요!
      </Text>
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
      <NavigationBar buttonExplore={require("../assets/buttonexplore.png")} />
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
    top: 36,
    left: 137,
    fontSize: FontSize.size_5xl,
    fontWeight: "800",
    fontFamily: FontFamily.latoBlack,
    textAlign: "left",
    color: Color.colorGray_300,
    position: "absolute",
  },
  text1: {
    top: 10,
    fontSize: FontSize.size_sm,
    left: 0,
    color: Color.colorGray_300,
    fontFamily: FontFamily.latoBold,
    fontWeight: "600",
  },
  heading: {
    top: 51,
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
  backbutton: {
    top: 48,
    left: 14,
  }
});

export default SNSUpload;

