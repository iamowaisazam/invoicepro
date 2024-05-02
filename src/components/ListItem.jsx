import { Image, Pressable, StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
    constiner:{
      flexDirection:"column",
      justifyContent:'center',
      alignItems:'center',
      // marginTop:5,
    },
    cardItem:{
        // width:'93%',
        marginHorizontal:6,
        marginVertical:7,
        backgroundColor:'white',
        alignItems:"center",
        justifyContent:'center',
        // padding:10,
        flexDirection:'row'   
    },
    cardIcon:{
        width:70,
        height:70,
       
    },
    cartTitle:{
        marginTop:10,
        paddingVertical:1,
        fontSize:20,
        color:'black',
    }
});

export default (props) => {

   
    
      return <View 
                style={{
                width:'100%',
                marginVertical:7,
                backgroundColor:'white',
                alignItems:"center",
                justifyContent:'center',
                flexDirection:'row',
                paddingHorizontal:13}}> 

                 <Pressable onPress={props.onPressEdit}
                 style={{width:60}} >
                    <Image style={{
                     width:50,
                     height:50,
                     }} source={require('../assets/menu-icons/user.png')} />
                 </Pressable>
                  <Pressable 
                  onPress={props.onPressEdit}
                  style={{flexGrow:1,paddingVertical:10,paddingHorizontal:5,}} >
                    <Text style={{fontSize:22,color:'black'}} >
                       {props.title} </Text>
                    <Text style={{fontSize:15,color:'gray'}} >
                     {props.description}
                    </Text>
                 </Pressable>
                  
                  <Pressable onPress={props.onPress}>
                    <Image 
                        style={{
                        width:40,
                        height:40,
                        }} source={require('../assets/menu-icons/delete.png')} />
                  </Pressable>
            </View>}