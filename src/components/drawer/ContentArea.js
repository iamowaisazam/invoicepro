import * as React from 'react';
import { Image, View,Pressable } from 'react-native';
import Item from "./items";
import { useNavigation } from '@react-navigation/native';


export default ({setDrawer}) => {

    const navigation = useNavigation();

  return (<View style={{
            width:'100%',
            height:'100%',
            padding:10,
        }}>
            <Item 
              onPress ={() => {
                navigation.navigate('DashboardScreen');
                setDrawer(false);
            }}
              title="Dashboard" 
              icon={require('../../assets/menu-icons/home.png')} />
           
            <Item 
              title="Customers"
              onPress={() => {
                navigation.navigate('UserListScreen')
                setDrawer(false);
              }} 
              icon={require('../../assets/menu-icons/user.png')} />
           
            <Item 
              title="Products"
              onPress={() => {
                navigation.navigate('ProductListScreen')
                setDrawer(false);
              }} 
              icon={require('../../assets/menu-icons/product.png')} />
            
            <Item 
              title="Invoices"
              onPress={() => {
                navigation.navigate('InvoiceListScreen')
                setDrawer(false);
              }} 
              icon={require('../../assets/menu-icons/invoice.png')} />
           
            <Item 
               title="Payments"
               onPress={() => {
                navigation.navigate('PaymentListScreen')
                setDrawer(false);
               }}  
               icon={require('../../assets/menu-icons/payment.png')} />
            
            <Item 
               title="Setting" 
               onPress={() => {
                navigation.navigate('SettingScreen')
                setDrawer(false);
               }} 
               icon={require('../../assets/menu-icons/setting.png')} />
    </View>);

};

