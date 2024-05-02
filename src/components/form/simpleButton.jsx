import {View,Pressable,Text} from "react-native";


export default (props) => {

      return ( <Pressable onPress={props.onPress}
        style={{
            backgroundColor: '#FF4A85',
            padding: 10,
            borderRadius: 5,
        }}>
            <Text style={{
                color: 'white',
                fontSize: 16,
                fontWeight:500,
            }}>{props.text}</Text>
     </Pressable>)
     
}