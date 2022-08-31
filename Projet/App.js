import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import MainScreen from "./Screens/MainScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./Screens/Login";
import FirstScreenLog from "./Screens/FirstScreenLog";
import History from "./Screens/History";
import Wallet from "./Screens/Wallet";
import Investment from "./Screens/Investment";
import InvestMoreScreen from "./Screens/InvestMoreScreen";
import SystemInvestor from "./Screens/SystemInvestor";
import SystemMain from "./Screens/SystemMain";
import SystemHistory from "./Screens/SystemHistory"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';




const BottomTabs = createBottomTabNavigator();
function System() {
  return (
    <BottomTabs.Navigator
     
    >
      <BottomTabs.Screen
        name="SystemMain"
        component={SystemMain}
       
      />
      <BottomTabs.Screen
        name="SystemInvestor"
        component={SystemInvestor}
        options={{
          title: 'All Expenses',
          tabBarLabel: 'All Expenses',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="hourglass" size={size} color={color} />
          ),
        }}
      />
       <BottomTabs.Screen
        name="SystemHistory"
        component={SystemHistory}
       
      />
    </BottomTabs.Navigator>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <LinearGradient colors={["orange", "#A6D6D1"]} style={styles.mainScreen}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="MainScreen" component={MainScreen} />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{
              headerShown: "true",
            }}
          />
          <Stack.Screen name="FirstScreenLog"
           component={FirstScreenLog}
           options={{
            headerShown: "true",
          }}
          />
           <Stack.Screen name="InvestMoreScreen"
           component={InvestMoreScreen}
           
          /> 
          <Stack.Screen name="System"
           component={System}
           
          /> 

{/*<Stack.Screen name="Investment"
           component={Investment}
           options={{
            headerShown: "true",
          }}
          /> */}
          


          
          

        </Stack.Navigator>
      </NavigationContainer>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  mainScreen: {
    flex: 1,
  },
  image: {
    paddingLeft: 150,
    flex: 1,
    opacity: 0.17,
  },
});
