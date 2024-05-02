

import React,{useState} from 'react';
import {create,get,edit} from "../../controllers/product";
import {SafeAreaView,View} from 'react-native';

import SimpleButton from '../../components/form/simpleButton';
import FormInput from '../../components/form/formInput';
import { useRoute } from '@react-navigation/native';



export default function UserEditScreen({ navigation }){
    
    const [form,setForm] = useState({
      id:'',
      title:'',
      price:'',
      description:'',
    });
    const route = useRoute();
    const { id } = route.params;

  
  React.useLayoutEffect(() => {
    navigation.setOptions({
      title:'Edit Product',
    });

      onload();

  }, []);


  
  const onload = async () => {

      let data = await get(id);
      if(data){
        setForm({
          id:data.id,
          title:data.title,
          price:data.price,
          description:data.description,
        });
      }else{
 
        alert('Failed');
      }

   

  }


  const formSubmit = async () => {

        if(form.title == ''){
          alert('Title Field Is Required');
          return false;
        }

        if(form.barcode == ''){
          alert('Barcode Field Is Required');
          return false;
        }

        let res = await edit(form);
        if(res){
            navigation.navigate('ProductListScreen');
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
            onChangeText={(e) => setForm({...form,title:e})} 
            value={form.title}
            placeholder="Title"
            keyboardType="default" />

          <FormInput 
            onChangeText={(e) => setForm({...form,price:e})} 
            value={form.price}
            placeholder="Price"
            keyboardType="default" />

          <FormInput 
            onChangeText={(e) => setForm({...form,description:e})} 
            value={form.description}
            placeholder="Description"
            keyboardType="default" />    
        </View>
        
        <View style={{marginTop:10}} >
          <SimpleButton text="Submit" onPress={formSubmit} />
        </View>
      </View>
    </SafeAreaView>
  );
}
