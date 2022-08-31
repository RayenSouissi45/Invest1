import { View, Text, StyleSheet, Image , ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import AddButton from "../components/AddButton";
import { AntDesign } from '@expo/vector-icons'; 
import InvestMoreScreen from "./InvestMoreScreen";




function Investment({navigation}) {



 const onPress = ()=> {
    console.log("hi hamdoulah")
    navigation.navigate("InvestMoreScreen")
  } 
  /*function PressHandler() {
   
    navigation.navigate("InvestMoreScreen")
   
   } */
  return (
    <View>
      <View style={styles.add}>
      <LinearGradient
         colors={["orange", "yellow"]} style={styles.mainScreen}>
          <ImageBackground
        source={require("../images/crypto.jpg")}
        resizeMode="cover"
        style={styles.image}
      ></ImageBackground>
      <View style={styles.GetstartedView}>
      <Text style={styles.GetstartedText}>
     Get <Text style={styles.StartedText}>Started</Text> {"\n"} Investing
      </Text>
      </View>
            <AddButton style={styles.buttonInvest}
            navigation={navigation}
            onPress={onPress} >
          Invest More</AddButton>
          
           
        </LinearGradient>
        <Image
              style={styles.imagecix}
              source={require("../images/STAKE-CIX.png")}
  /> 
      </View>

      <View style={styles.liste}></View>
    </View>
  );
}
export default Investment;
const styles = StyleSheet.create({
  add: {
    backgroundColor: "#FE952C",
    height: 260,
    Width: 20,
    borderBottomLeftRadius:50,
    borderBottomRightRadius:50,
    overflow:'hidden',
    elevation:7,
    
  },
  liste: {
    flex: 1,
  },
  mainScreen: {
    flex:1
    
  },
  buttonInvest: {
    marginLeft:100


  },
  imagecix : {
    height:100,
    width:100,
    position:'absolute',
    marginLeft:260,
    marginTop:70,
  
  },
  image: {


   flex:1,
    opacity: 0.18,
   
  },
  GetstartedView: {
    position:"absolute",
    marginTop:20,
    marginLeft:30
    
  },
  GetstartedText: {
    fontSize:35,
    fontWeight:'bold',
    letterSpacing:1
  },
  StartedText:{
    color:'brown',
    fontSize:37,
    
  }
});
