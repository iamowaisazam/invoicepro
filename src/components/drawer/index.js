import * as React from 'react';
import { Image, View,Pressable } from 'react-native';
import ContentArea from './ContentArea';




const MyDrawer = ({drawer,setDrawer}) => {

  

  if(!drawer){
    return<View></View>
  }

  return (<View style={{
        width:'100%',
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        position:'absolute',
        zIndex:2,
        height:'100%',
        flexDirection:'row'
    }}>

      <View style={{
            backgroundColor:'white',
            width:250,
            zIndex:1,
            height:'100%',
        }}>
            <View style={{
                backgroundColor:'#FF4A85',
                width:'100%',
                height:150,
                justifyContent:'center',
                alignItems:'center'}}>
                <Image style={{
                    width:100,
                    height:100,
                }} source={require('../../assets/background.jpg')} />
            </View>
            <ContentArea setDrawer={setDrawer} />
        </View>


        <Pressable 
         onPress={() => setDrawer(false)}
           style={{
            flexGrow:1,
            // backgroundColor:'red',
            padding:20,
            height:'100%',
        }}>
            
        </Pressable>


    </View>
  );


};

export default MyDrawer;