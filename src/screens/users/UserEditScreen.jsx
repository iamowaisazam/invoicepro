

import React,{useState} from 'react';
import {create,get,edit} from "../../controllers/user";
import {SafeAreaView,View} from 'react-native';

import SimpleButton from '../../components/form/simpleButton';
import FormInput from '../../components/form/formInput';
import { useRoute } from '@react-navigation/native';



export default function UserEditScreen({ navigation }){
    
    const [form,setForm] = useState({
      id:'',
      name:'',
      email:'',
      phone:'',
      address:'',
    });
    const route = useRoute();
    const { id } = route.params;
    

  React.useLayoutEffect(() => {
      navigation.setOptions({ 
        title: 'Edit Customer',
      });
      onload();

  }, []);


  
  const onload = async () => {

      let data = await get(id);
      if(data){
        setForm({
          id:data.id,
          name:data.name,
          email:data.email,
          phone:data.phone,
          address:data.address,
        });
      }else{
        // setForm({
        //   id:'',
        //   name:'',
        //   email:'',
        //   phone:'',
        //   address:'',
        // });
        alert('Failed');
      }
  }


  const formSubmit = async () => {

        if(form.name == ''){
          alert('Name Field Is Required');
          return false;
        }

        if(form.email == ''){
          alert('Email Field Is Required');
          return false;
        }

        let res = await edit(form);
        if(res){
            navigation.navigate('UserListScreen');
        }else{
            alert('Failed');
        }  
  }




 
 
  return (
    <SafeAreaView >
         
          <View style={{
              alignItems:'center',
              marginTop:10,
          }}>

          <View style={{
            flexDirection:'column',
            width:'92%'
          }} > 
          <FormInput 
            onChangeText={(e) => setForm({...form,name:e})} 
            value={form.name}
            placeholder="Full Name"
            keyboardType="default" />

          <FormInput 
            onChangeText={(e) => setForm({...form,email:e})} 
            value={form.email}
            placeholder="Email"
            keyboardType="default" />

          <FormInput 
            onChangeText={(e) => setForm({...form,phone:e})} 
            value={form.phone}
            placeholder="Phone"
            keyboardType="default" />

          <FormInput 
            onChangeText={(e) => setForm({...form,address:e})} 
            value={form.address}
            placeholder="Address"
            keyboardType="default" />    
        </View>
        
        <View style={{marginTop:10}} >
          <SimpleButton text="Submit" onPress={formSubmit} />
        </View>
      </View>
    </SafeAreaView>
  );
}
