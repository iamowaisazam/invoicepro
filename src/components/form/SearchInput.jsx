import {TextInput} from "react-native";


export default (props) => {

      return (<TextInput
            style={{
                backgroundColor:'white',
                width:'100%',
                paddingHorizontal:10,
                borderRadius:8,
                marginVertical:20,
            }}
            onChangeText={props.onChangeText}
            value={props.value}
            placeholder="Search"
            keyboardType="default"
        />
    ) 
}