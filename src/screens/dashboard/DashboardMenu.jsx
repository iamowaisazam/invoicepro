import { Image, Pressable, StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
    constiner:{
        width:'100%',
      flexDirection:"row",
      flexWrap:"wrap",
      justifyContent:'space-between',
      marginTop:5,
    },
    cardItem:{
        width:'48%',
        marginVertical:7,
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

      return<View style={styles.constiner}>
         
        <Pressable onPress={() => navigation.navigate('UserListScreen')} style={styles.cardItem} >
              <Image style={styles.cardIcon} source={require('../../assets/menu-icons/user.png')} />
              <Text style={styles.cartTitle} >Customers</Text>
        </Pressable>

        <Pressable onPress={() => navigation.navigate('ProductListScreen')} style={styles.cardItem} >
           <Image style={styles.cardIcon} source={require('../../assets/menu-icons/product.png')} />
           <Text style={styles.cartTitle} >Products</Text>
        </Pressable>

        <Pressable style={styles.cardItem} onPress={() => navigation.navigate('InvoiceListScreen')} >
           <Image style={styles.cardIcon} 
           source={require('../../assets/menu-icons/invoice.png')} />
           <Text style={styles.cartTitle} >Invoices</Text>
        </Pressable>

        <Pressable style={styles.cardItem} onPress={() => navigation.navigate('PaymentListScreen')} >
           <Image style={styles.cardIcon} 
           source={require('../../assets/menu-icons/payment.png')} />
           <Text style={styles.cartTitle} >Payments</Text>
        </Pressable>

 </View>}