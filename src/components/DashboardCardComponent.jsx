import { Image, Pressable, StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
    constiner:{
    //   backgroundColor:'red',
      flexDirection:"row",
      flexWrap:"wrap",
      justifyContent:'center',
    //   marginTop:5,
    },
    cardItem:{
        width:'45%',
        // marginHorizontal:6,
        // marginVertical:7,
        // height:100,
        backgroundColor:'white',
        alignItems:"center",
        justifyContent:'center',
        padding:10,
        flexDirection:'column'   
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
        width:'100%',
        textAlign:'center',
        // backgroundColor:'yellow'
    }

});

export default ({navigation}) => {

    
      return <View style={styles.constiner} >
         
        <Pressable onPress={() => navigation.navigate('UserListScreen')} style={styles.cardItem} >
              <Image style={styles.cardIcon} source={require('../assets/menu-icons/user.png')} />
              <Text style={styles.cartTitle} >Customers</Text>
        </Pressable>

        <Pressable onPress={() => navigation.navigate('ProductListScreen')} style={styles.cardItem} >
           <Image style={styles.cardIcon} source={require('../assets/menu-icons/home.png')} />
           <Text style={styles.cartTitle} >Products</Text>
        </Pressable>

        <View style={styles.cardItem} >
           <Image style={styles.cardIcon} 
           source={require('../assets/menu-icons/product.png')} />
           <Text style={styles.cartTitle} >Invoices</Text>
        </View>

        <View style={styles.cardItem} >
           <Image style={styles.cardIcon} 
           source={require('../assets/menu-icons/payment.png')} />
           <Text style={styles.cartTitle} >Payments</Text>
        </View>

   
      </View>
  }