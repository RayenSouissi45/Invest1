import { Children } from "react";
import reactDom from "react-dom";
import { View, Text, StyleSheet, Pressable } from "react-native";
import Login from "../Screens/Login";

function PrimaryButton({ children, navigation, onPress }) {
  return (
    <Pressable
      style={({ pressed }) =>
        pressed ? [styles.TextContainer, styles.pressed] : styles.TextContainer
      }
      onPress={onPress}
    >
      <View style={styles.TextContainer}>
        <Text style={styles.Text}>{children}</Text>
      </View>
    </Pressable>
  );
}

export default PrimaryButton;
const styles = StyleSheet.create({
  TextContainer: {
    height: 50,
    width: 280,
   /* backgroundColor: "#FFD700", */
   backgroundColor:'#C29C00',
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
    margin: 10,
  },
  Text: {
    fontWeight: "bold",
    color: "white",
  },
  pressed: {
    opacity: 0.75,
    backgroundColor: "grey",
  },
});
