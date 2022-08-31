import { Children } from "react";
import reactDom from "react-dom";
import { View, Text, StyleSheet, Pressable } from "react-native";
import Login from "../Screens/Login";
import FirstScreenLog from "../Screens/FirstScreenLog";

function SecondButton({ children, navigation, onPress }) {
  return (
    <Pressable
      style={({ pressed }) =>
        pressed ? [styles.TextContainer, styles.pressed] : styles.TextContainer
      }
     /* onPress={()=> navigation.navigate("FirstScreenLog")} */
     onPress={onPress}
    >
      <View style={styles.TextContainer}>
        <Text style={styles.Text}>{children}</Text>
      </View>
    </Pressable>
  );
}

export default SecondButton;
const styles = StyleSheet.create({
  TextContainer: {
    height: 50,
    width: 280,
    backgroundColor: "white",
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
    margin: 10,
  },
  Text: {
    fontWeight: "bold",
    color: "black",
  },
  pressed: {
    opacity: 0.75,
    backgroundColor: "grey",
  },
});
