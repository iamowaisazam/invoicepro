import 'react-native-gesture-handler';
import {useState} from "react";

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';




// Screens
import DashboardScreen from '../screens/dashboard/DashboardScreen'
import LoadScreen from '../screens/LoadScreen'


//Users
import UserListScreen from "../screens/users/UserListScreen";
import UserCreateScreen from "../screens/users/UserCreateScreen";
import UserEditScreen from "../screens/users/UserEditScreen";

//Products
import ProductListScreen from "../screens/products/ProductListScreen";
import ProductCreateScreen from "../screens/products/PrdouctCreateScreen";
import ProductEditScreen from "../screens/products/ProductEditScreen";

//Products
import InvoiceListScreen from "../screens/invoices/InvoiceListScreen";
import PaymentListScreen from "../screens/payments/PaymentListScreen";
import SettingScreen from '../screens/setting/SettingScreen';
import MyDrawer from '../components/drawer';
import { Image, Pressable } from 'react-native';

const Stack = createNativeStackNavigator();



export default () => {

   const [drawer,setDrawer] = useState(false);

   const NavOptions = {
    headerShown: true, 
    headerStyle: {
      backgroundColor: '#FF4A85',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
    headerTitleAlign: 'center',
    headerLeft: () => <Pressable 
      style={{
        paddingRight:13,
      }}
       onPress={() => setDrawer(true)}>
      <Image style={{
        width:30,
        height:30,
        }} source={require('../assets/menu-icons/menu.png')} />
      </Pressable>
  };


  const screens = [
  
      { name: "UserListScreen", component: UserListScreen, options:NavOptions },
      { name: "UserCreateScreen", component: UserCreateScreen, options:NavOptions },
      { name: "UserEditScreen", component: UserEditScreen, options:NavOptions },
    
      { name: "ProductListScreen", component: ProductListScreen, options:NavOptions },
      { name: "ProductCreateScreen", component: ProductCreateScreen, options:NavOptions },
      { name: "ProductEditScreen", component: ProductEditScreen, options:NavOptions },
    
      { name: "InvoiceListScreen", component: InvoiceListScreen, options:NavOptions },
      { name: "PaymentListScreen", component: PaymentListScreen, options:NavOptions },
      
      { name: "Load", component: LoadScreen, options:false },
    
      { name: "DashboardScreen", component: DashboardScreen, options:NavOptions },
    
      { name: "SettingScreen", component: SettingScreen, options:NavOptions },
    
  ];


  return (
    <NavigationContainer>
        
        <Stack.Navigator 
          screenOptions={{headerShown: false}}
          initialRouteName="UserCreateScreen">

        {screens.map(({ name, component,options }) => (
          <Stack.Screen
            key={name}
            name={name}
            component={component}
            options={options ? options : {}} // Use the same options for all screens
          />
        ))}

          

          {/* <Stack.Screen 
              options={{headerShown:false}} 
              name="Load" 
              component={LoadScreen} />

          <Stack.Screen 
          options={NavOptions} 
          name="DashboardScreen" 
          component={DashboardScreen} />

          <Stack.Screen 
            options={NavOptions} 
            name="SettingScreen" 
            component={SettingScreen} />
          

        

          <Stack.Screen 
            options={NavOptions} 
            name="UserListScreen" 
            component={UserListScreen} />
          
          <Stack.Screen 
            options={NavOptions} 
            name="UserCreateScreen" 
            component={UserCreateScreen} />
          
          <Stack.Screen 
            options={NavOptions} 
            name="UserEditScreen" 
            component={UserEditScreen} />
          

    
        
          <Stack.Screen 
            options={NavOptions} 
            name="ProductListScreen" 
            component={ProductListScreen} />
          
          <Stack.Screen 
            options={NavOptions} 
            name="ProductCreateScreen" 
            component={ProductCreateScreen} />
          
          <Stack.Screen 
            options={NavOptions} 
            name="ProductEditScreen" 
            component={ProductEditScreen} />

      

          <Stack.Screen 
            options={NavOptions} 
            name="InvoiceListScreen" 
            component={InvoiceListScreen} />

      

          <Stack.Screen 
            options={NavOptions} 
            name="PaymentListScreen" 
            component={PaymentListScreen} /> */}

        </Stack.Navigator> 
          <MyDrawer drawer={drawer} setDrawer={setDrawer}/>
    </NavigationContainer>
  )

}