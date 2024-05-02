

import React,{useState} from 'react';
import {create} from "../../controllers/product";
import {SafeAreaView,View} from 'react-native';

import SimpleButton from '../../components/form/simpleButton';
import FormInput from '../../components/form/formInput';


export default function HomeScreen({ navigation }){
    
    const [form,setForm] = useState({
      title:'',
      price:'',
      description:'',
    });
    

    React.useLayoutEffect(() => {
      navigation.setOptions({
        title: 'Add New Product',
      });
    }, []);


  const formSubmit = async () => {

        if(form.title == ''){
          alert('Title Field Is Required');
          return false;
        }

        if(form.barcode == ''){
          alert('Barcode Field Is Required');
          return false;
        }

        let res = await create(form);
        if(res){
            alert('Product Added');
            setForm({
              title:'',
              price:'',
              description:'',
            });
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
