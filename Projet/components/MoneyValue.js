import {View,Text,StyleSheet,Pressable } from 'react-native'
function MoneyValue({title,color}) {
    return (<Pressable 
      style={({ pressed }) =>
              pressed ? [styles.container, styles.pressed] : styles.container
            }

    backgroundColor={color}>
      <View style={styles.titleView}>
 <Text style={styles.titleText}>{title}</Text>
 </View>
    </Pressable>)
}

export default MoneyValue ;
const styles=StyleSheet.create({
   container: {
   margin:10,
    width:'95%',
    overflow:'hidden',
    borderRadius:30,
    padding:10,
    borderWidth:1,
    height:75,
    
   
   },
   titleText : {
      fontSize:20,
      color:'black'
   },
   titleView : {
      marginLeft:40,
      marginTop:10,

   },
   pressed: {
      opacity: 0.55,
      
   
    },

})
