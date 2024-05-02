import { Image, StyleSheet, Text, View } from "react-native";


export default () => {

    
      return <View style={{
        flexDirection:"column",
        justifyContent:'center',
        alignItems:'center',
        marginTop:5,
      }}>
         
         {
            [{
                title:'Resturant',
                description:'The Custom London'
            },
            {
                title:'Grocery Store',
                description:'Giant Food Usa'
            },
            {
                title:'Payment Receive',
                description:'Digital Wallet'
            }].map((element,index) => {

                return  (<View key={index} 
                    style={{
                    marginVertical:7,
                    backgroundColor:'white',
                    alignItems:"center",
                    justifyContent:'center',
                    flexDirection:'row',
                    paddingHorizontal:13}}> 
                 <View style={{width:60}} >
                    <Image style={{
                     width:50,
                     height:50,
                     }} source={require('../assets/menu-icons/user.png')} />
                 </View>
                  
                  <View style={{flexGrow:1,paddingVertical:10,paddingHorizontal:5,}} >
                    <Text style={{fontSize:22,color:'black'}} >{element.title}</Text>
                    <Text style={{fontSize:15,color:'gray'}} >
                        {element.description}
                    </Text>
                 </View>
                  <Text style={{color:'red',fontSize:15}} >$330</Text>
            </View>) 

            })

         }
        
      </View>
  }