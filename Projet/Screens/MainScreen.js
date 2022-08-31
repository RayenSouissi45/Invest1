import {
  View,
  Image,
  Text,
  StyleSheet,
  StatusBar,
  ImageBackground,
  Button,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import PrimaryButton from "../components/PrimaryButton";
import { shouldUseActivityState } from "react-native-screens";
import { Ionicons } from "@expo/vector-icons";
import reactDom from "react-dom";
import Login from "./Login";
import System from "./SystemInvestor";

function MainScreen({ navigation }) {
  function Handler() {
    console.log("pressed");
  }
  function onPress() {
    navigation.navigate("Login")
  }
  function onPresSystem () {
    navigation.navigate("System")
  }
  return (
    <>
      <LinearGradient colors={["orange", "#A6D6D1"]} style={styles.mainScreen}>
        <ImageBackground
        source={require("../images/crypto.jpg")}
        resizeMode="cover"
        style={styles.image}
      >
         
          <StatusBar style="dark" />
        </ImageBackground>
        <View style={styles.ViewContainer}>
          <View style={styles.cixView}>
            {/*<Image
              style={styles.imagecix}
              source={require("../images/STAKE-CIX.png")}
  /> */}
            <View style={styles.walletIcon}>
              <View style={styles.IconView}>
                <Ionicons name="wallet" size={150} color={"white"} />
              </View>
            </View>
          </View>
          <View style={styles.welcomeview}>
            <Text style={styles.welcometext}>
              Get your money {"\n"} under controle {"\n"}
            </Text>
            <View style={styles.managewisely}>
              {/* 
              <Text style={styles.manage}>
                Manage your {"\n"} money  wisely
              </Text>
              */}
            </View>

            {/* <View style={styles.wordcixview}> */}
          </View>

          {/*   <View style={styles.walletIcon}>
        
       <Ionicons name="wallet"
         size={100}
         
         />
    </View> */}

          <View style={styles.ButtonContainer}>
            <PrimaryButton navigation={navigation}
            onPress={onPress}>
              Login as a Customer
            </PrimaryButton>

            <PrimaryButton  navigation={navigation}
            onPress={onPresSystem}
            >
              System
            </PrimaryButton>
          </View>
        </View>
      </LinearGradient>
    </>
  );
}
export default MainScreen;
const styles = StyleSheet.create({
  mainScreen: {
    flex: 1,
  },

  image: {
    paddingLeft: 150,
    flex: 1,
    opacity: 0.18,
  },

  ViewContainer: {
    position: "absolute",
    marginTop: 20,

    opacity: 1,
  },

  ButtonContainer: {
    display: "flex",
    flexDirection: "column",

    border: "solid",

    justifyContent: "space-between",
    marginLeft: 50,
    width: 200,
    paddingBottom: 40,
    height: 100,
    marginBottom: 100,
  },
  button2: {
    backgroundColor: "#EFB2AC",
  },
  welcometext: {
    fontSize: 40,
    /*color: "#0D0156", */
    color: "white",
    marginLeft: 20,
    fontWeight: "bold",
    letterSpacing: -2,
    lineHeight: 40,
  },
  welcomeview: {
    marginLeft: 50,

    height: 200,
    width: 400,
    marginTop: 10,
  },
  walletIcon: {
    paddingLeft: 20,
    paddingTop: 70,
  },
  imagecix: {
    height: 200,
    width: 200,
    flex: 1,
  },
  cixView: {
    paddingLeft: 20,
    width: 150,
    paddingTop: 40,
    paddingLeft: 10,
    marginLeft: 50,
  },
  manage: {
    fontSize: 30,
    color: "#F0FFF0",
  },
  wordcixview: {
    height: 100,
    width: 100,
  },
  IconView: {
    paddingLeft: 40,

    width: 400,
    paddingBottom: 0,
  },
  managewisely: {
    position: "absolute",

    paddingTop: 10,
    marginTop: 70,
    marginLeft: 55,
  },
});
