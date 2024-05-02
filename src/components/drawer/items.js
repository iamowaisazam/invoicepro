import { Image, Pressable, StyleSheet, Text, View } from "react-native";



export default (props) => {

    
      return <Pressable style={{
            width:'100%',
            flexDirection:'row',
            padding:10,
            alignItems:'center',
        }}
        onPress={props.onPress}
        >
              <Image style={{
                width:36,
                height:36,
              }} source={props.icon} />
              <Text style={{
                color:'black',
                fontSize:20,
                paddingLeft:20,
              }}>{props.title}</Text>
        </Pressable>
    }