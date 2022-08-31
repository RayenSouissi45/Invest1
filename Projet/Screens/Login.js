import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  StatusBar,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import PrimaryButton from "../components/PrimaryButton";
import SecondButton from "../components/SecondButton";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import FirstScreenLog from "./FirstScreenLog";
import { Button } from "react-native"

function Login({ navigation }) {
  function navHandler() {
    navigation.navigate("FirstScreenLog")
  }
  return (
    <LinearGradient colors={["orange", "#A6D6D1"]} style={styles.mainScreen}>
      <StatusBar style="dark" backgroundColor={"black"} />
      {/*<Image 
              style={styles.image}
              source={require('../images/STAKE-CIX.png')} /> */}
      <FontAwesome
        name="user-circle-o"
        size={124}
        color="white"
        style={styles.ionic}
      />
      <View>
        <View style={styles.ViewTextInput}>
          <TextInput
            style={styles.textInput}
            placeholder=" Email"
            placeholderTextColor={"white"}
          />

          <TextInput
            style={styles.textInput}
            placeholder="Password"
            placeholderTextColor={"white"}
          />
        </View>
        <View style={styles.Viewsecondbutton}>
          <SecondButton 
          navigation={navigation} 
          style={styles.secondbutton}
          onPress={navHandler}
          >
            Sign in
          </SecondButton>
          
          
          
        </View>
        <View style={styles.CannotView}>
          <Text style={styles.CannotText}>Cannot acces your account?</Text>
        </View>
      </View>
    </LinearGradient>
  );
}
export default Login;
const styles = StyleSheet.create({
  mainScreen: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "yellow",
  },
  image: {
    height: 100,
    width: 100,
    marginLeft: 130,
    marginTop: 60,
  },
  ViewTextInput: {
    marginLeft: 20,
    justifyContent: "space-between",
    display: "flex",
    marginTop: 30,
  },
  textInput: {
    borderColor: "white",
    borderWidth: 2,
    borderRadius: 30,
    height: 45,
    width: 320,
    margin: 7,
    paddingLeft: 20,
  },
  Viewsecondbutton: {
    marginLeft: 40,
    marginTop: 20,
  },
  ionic: {
    marginLeft: 130,
    marginTop: 100,
  },
  CannotView: {
    fontSize: 3,
    marginLeft: 70,
    marginBottom: 10,
  },
  CannotText: {
    color: "white",
    fontSize: 20,
    letterSpacing: 0.08,
  },
});
