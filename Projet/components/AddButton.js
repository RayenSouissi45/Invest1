import { Children } from 'react';
import {View,Text, Pressable, StyleSheet} from 'react-native'
import InvestMoreScreen from '../Screens/InvestMoreScreen';


function AddButton({children,navigation,onPress}) {
    
    return <Pressable 
    style={({ pressed }) =>
        pressed ? [styles.buttonpress, styles.pressed] : styles.buttonpress
      }
  onPress={onPress}
    >
   <Text style={styles.buttonText}>
    {children}
   </Text>
    </Pressable>
}
export default AddButton ;
const styles=StyleSheet.create({
    buttonpress: {
        backgroundColor:'white',
        height:60,
        width:200,
        marginLeft:30,
        marginTop:140,
        borderRadius:40,
        justifyContent: "center",
        alignItems: "center",
        position:'absolute'

    },
    buttonText : {
        color:'#B95B1A',
        textAlign:'center',
        justifyContent:'center',
        alignItems:'center',
        
        
        fontSize:22
        


    },
    pressed: {
        opacity: 0.75,
        backgroundColor: "#DACEC5",
      },
})