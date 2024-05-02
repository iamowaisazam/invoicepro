import {TextInput} from "react-native";


export default (props) => {

      return (<TextInput
        style={{
            backgroundColor:'white',
            width:'100%',
            paddingHorizontal:10,
            borderRadius:8,
            marginVertical:10,
        }}
        onChangeText={props.onChangeText}
        value={props.value}
        placeholder={props.placeholder}
        keyboardType={props.keyboardType} />)
     
}