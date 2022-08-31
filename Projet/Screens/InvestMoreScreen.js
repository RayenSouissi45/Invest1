import {
  View,
  Text,
  Pressable,
  StyleSheet,
  TextInput,
  ImageBackground,
} from "react-native";
import { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import Investment from "./Investment";
import MoneyValue from "../components/MoneyValue";



function InvestMoreScreen({navigation}) {
  const [enteredMoney, setEnteredMoney] = useState(0) ; 
 

  const number = "numb";
  const title = "Bonjour";
  
   function moneyHandler(enteredText) {
    setEnteredMoney(Number(enteredText))
    console.log("enteredText" ,enteredText )

   }

   const pluss= () => {
    setEnteredMoney(Number(enteredMoney))
    setEnteredMoney(enteredMoney +10)
    console.log("flous"+enteredMoney)
    }
  
   const handleChange = (e) => {
    setEnteredMoney((Number(e) || 0))
  };
  
   
  
  
  return (
    <LinearGradient colors={["#925702", "#C8C80D"]} style={styles.mainScreen}>
      <View style={styles.container}>
        <View style={styles.Header}>
          <Pressable
            style={({ pressed }) =>
              pressed ? [styles.No, styles.pressedheader] : styles.No
            }
            onPress={() => navigation.pop()}
          >
            <AntDesign
              name="close"
              size={60}
              /* color="#0A165B"  */ color="black"
            />
          </Pressable>
          <Pressable
           
            style={({ pressed }) =>
              pressed ? [styles.Yes, styles.pressedheader] : styles.Yes
            }
            onPress={() => navigation.pop()}
          >
            <AntDesign
              name="check"
              size={60}
              /*color="#0E5405" */ color="black"
              style={({ pressed }) =>
                pressed ? [styles.plus, styles.pressed] : styles.plus
              }
            />
          </Pressable>
        </View>
        <View style={styles.part1}>
          <View style={styles.header1}>
            <View style={styles.buyView}>
              <Text style={styles.buyText}>Buy</Text>
            </View>
          </View>
          <View style={styles.inputanddollar}>
            <View style={styles.dollarView}>
              <Text style={styles.dollartext}>$</Text>
            </View>
            {/*<View style={styles.inputheader}> */}
            <View style={styles.inputView}>
              <TextInput
                style={styles.textInputBigMoney}
                placeholder="00.00"
                keyboardType="numeric"
                maxLength={5}
                // onChangeText={moneyHandler}
                value={enteredMoney+10}
                onChange={handleChange}
            /> 
            
              
            
              {/* <Text>{enteredMoney}</Text>  */}
            </View>  
            
            <View style={styles.icons}>
            <Pressable
              
                style={({ pressed }) =>
                  pressed ? [styles.plus, styles.pressed] : styles.plus
                }
                onPress={pluss}
              >
                <AntDesign
                  style={styles.iconplus}
                  name="plus"
                  size={27}
                  color="black"
                />
              </Pressable> 
              
              <Pressable
             
             
                style={({ pressed }) =>
                  pressed ? [styles.moin, styles.pressed] : styles.moin
                }
              >
                <AntDesign
                  style={styles.iconmoin}
                  name="minus"
                  size={27}
                  color="black"
                />
              </Pressable>
            </View>
            {/* </View> */}
          </View>
        </View>

        <View style={styles.part2}>
        
          <ImageBackground
            source={require("../images/women.jpeg")}
            resizeMode="cover"
            style={styles.image}
          >
            </ImageBackground>
            
          <View style={styles.riskView}>
            <Text style={styles.risktext}> Attribute Risk Percent </Text>
          </View>
          
          
          <MoneyValue color={'#AC8700'} title="Low Risk 8-10%"></MoneyValue>

          <MoneyValue color={'#873B00'}title="Medium Risk 12-20%"></MoneyValue>
          <MoneyValue color={'#640B06'} title="High Risk 100% +"></MoneyValue>
          <MoneyValue color={'#016C04'} title="ESG/ECP 20% +"></MoneyValue>
         
        </View>
      </View>
    </LinearGradient>
  );
}
export default InvestMoreScreen;

const styles = StyleSheet.create({
  image: {
   
     position:'absolute',
    borderWidth: 2,
 
    opacity: 0.18,
    
    
   

  },
  mainScreen: {
    flex: 1,
  },
  container: {
    flex: 1,
    /*backgroundColor:'#211922' */
  },
  textInputBigMoney: {
    fontSize: 45,
    width: 190,

    justifyContent: "center",
    alignItems: "center",
    padding: 2,
    marginLeft: 10,
  },
  inputView: {
    borderRadius: 20,
    marginBottom: 10,
    borderWidth: 2,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    width: 180,
    paddingLeft: 40,
  },
  dollartext: {
    fontSize: 45,
  },
  part1: {
    marginLeft: 117,
    marginTop: 100,
    display: "flex",
    flexDirection: "row",
  },
  dollarView: {
    marginRight: 10,
    marginTop: 10,
  },
  Header: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    backgroundColor: "#925702",
  },
  No: {
    paddingLeft: 60,
    width: "50%",
  },
  Yes: {
    paddingLeft: 60,
    borderLeftWidth: 1,
    width: "50%",
  },
  buyView: {
    marginLeft: 150,
  },
  buyText: {
    fontSize: 42,
    letterSpacing: 2,
    fontWeight: "bold",
  },
  header1: {
    width: "100%",
    height: 60,
  },
  part1: {
    width: "100%",
  },
  inputanddollar: {
    display: "flex",
    flexDirection: "row",
    marginLeft: 75,
  marginBottom:10,
    height: 120,
    paddingTop: 20,
  },

  inputheader: {
    display: "flex",
    flexDirection: "row",

    paddingTop: 10,
  },
  icons: {
    marginLeft: 20,
    width: 45,
    height: 80,
    justifyContent: "center",
    borderRadius: 20,
    backgroundColor: "#885106",
    alignItems: "center",
    overflow: "hidden",
    marginTop: 6,
  },
  moin: {
    width: "100%",
    height: "50%",
  },
  plus: {
    width: "100%",
    height: "50%",
  },
  iconplus: {
    marginLeft: 8,
    marginTop: 5,
  },
  iconmoin: {
    marginLeft: 8,
    marginTop: 3,
  },
  pressed: {
    opacity: 0.15,
    backgroundColor:'yellow'
 
  },

  pressedheader: {
    opacity: 0.3,
    backgroundColor:'#DDA223'
  },
  header1: {
    marginTop: 20,
    marginBottom: 10,
  },
  riskView: {
    marginTop: 20,
    marginLeft: 20,
    marginBottom: 20,
  },
  risktext: {
    fontSize: 30,
    letterSpacing: 0.1,
    fontWeight: "bold",
    color: "black",
  },
  part2: {
   
    borderRadius: 20,
   // backgroundColor:'#C29920',
    overflow: "hidden",
    width: "90%",
    marginLeft: 21,
    borderWidth:1,
  },
});
