

import React from 'react';
import {PropsWithChildren} from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';


import DashboardMenu from './DashboardMenu';
import RecentInvoices from './RecentInvoices';



export default function HomeScreen({ navigation }) {

  React.useLayoutEffect(() => {

    navigation.setOptions({
      title: 'Sky Kids Wear',
    });

  }, [navigation]);

  

  return (
    <SafeAreaView >
      
     <View style={{
          paddingHorizontal:15,
          flexDirection:'column',
          alignItems:'center',
          justifyContent:'center'
       }} >

            {/* DashboardMenu  */}
            <DashboardMenu navigation={navigation} />

            {/* RecentInvoices */}
           <View
           style={{
            paddingTop:15,
            width:'100%',
            justifyContent:'flex-start',
            flexDirection:'column'
           }}>
             <Text style={{
              fontSize:17,
             }} >Recent Invoices</Text>
             <RecentInvoices/>
          </View> 


       </View>
       </SafeAreaView>
  );
}



