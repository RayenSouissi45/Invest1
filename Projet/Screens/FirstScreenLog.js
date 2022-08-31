import { View, Text, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Investment from "./Investment";
import History from "./History";
import Wallet from "./Wallet";
import { FontAwesome5 } from '@expo/vector-icons';

import { MaterialIcons } from '@expo/vector-icons';  

const BottomTab = createBottomTabNavigator();
function FirstScreenLog() {
  return (
    <LinearGradient colors={["orange", "#A6D6D1"]} style={styles.mainScreen}>
     <BottomTab.Navigator initialRouteName="FirstScreenLog"
        screenOptions= {{
          headerShown:'false',
          headerStyle: { backgroundColor: 'orange' },
          headerTintColor: 'black',
          tabBarActiveTintColor: 'brown',
          tabBarInactiveTintColor: 'gray',
          tabBarActiveBackgroundColor:'#F9F4EE',
          
          
          
         
            

          
        }} 
      >
       
        
       
          
          
        

      
      

         <BottomTab.Screen
          name="Investment"
          component={Investment}
          options={{
            headerShown:false,
            tabBarActiveTintColor: 'brown',
            tabBarIconActiveTintColor:'red',
            tabBarIcon: ({color,size}) => (
              <FontAwesome5 name="comment-dollar" size={24} color={color}
              
              />
            
            )
          }
          
          }
        
          screenOptions={{
            headerShown: false
          }}
          
         
          
        />


        <BottomTab.Screen
          name="Wallet"
          component={Wallet}
          
          options={{
            headerShown:false,
            tabBarIcon: ({color,size}) => (
              <FontAwesome5 name="wallet" size={24} color={color} />
            
            ) 
          }

          }
        />
       
         <BottomTab.Screen
          name="History"
          component={History}
          options={{
            headerShown:false,
            tabBarIcon: ({focused,size,color}) => (
              <MaterialIcons name="history" size={24}
              color={color}
              style={styles.icon}/>
            )
          }

          }
          
        />
      </BottomTab.Navigator>
    </LinearGradient>
  );
}

export default FirstScreenLog;
const styles = StyleSheet.create({
  mainScreen: {
    flex: 1,
  },
  
  pressed : {
    color:'pink'
  }

})
