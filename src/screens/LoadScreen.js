import { StyleSheet,Button ,Text, View,ImageBackground } from 'react-native';

export default function LoadScreen({ navigation }) {

  return (
    <View style={{
      flex: 1,
      alignItems:'center',
      justifyContent:'center',
      borderWidth:1,
      borderColor:'black',
      backgroundColor:"#FF4A85"
    }}>
          <View style={{
            flex:1,
            justifyContent:'center',
            marginHorizontal:30,
          }} >
            {/* <Text style={{
              textAlign:'center',
              paddingVertical:10,
              fontSize:40,
              color:'white',
            }}>Welcome</Text> */}
            {/* <Text style={{
              textAlign:'center',
              paddingVertical:10,
              fontSize:15,
              color:'white'
            }} >Hi Friends This Wallet Manage Application.You Can Manage Your Personal Expense Cash Easily</Text> */}
            <View style={{
              alignSelf:'center',
              borderWidth:1,
              textAlign:'center',
              width:200,
              margin:'auto',
            }}>
              <Button 
                onPress={() => navigation.replace('DashboardScreen')} title="Lets Start" 
                color="black"/></View>
          </View>
         
    </View>
  );
}
