import React,{useState} from 'react';
import {create} from "../../controllers/user";
import {SafeAreaView, View, TextInput, Button, Text, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import styles from '../../styles';

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  phone: Yup.string().required('Required'),
  address: Yup.string().required('Required'),
});


export default function HomeScreen({ navigation }){

  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Add New Customer',
    });
  }, []);

  React.useEffect(() => {
    

    return () => {

      resetForm();
      console.log('trigger');
      
    };
  }, []); 


  const formSubmit = async (values,{ resetForm }) => {

        let res = await create(values);
        if(res){
            alert('Customer Added');
            resetForm();
            // navigation.navigate('UserListScreen');
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

        <Formik
         
            initialValues={{ name: '', email: '',phone:'',address:''}} // Set default values here
            validationSchema={validationSchema}
            onSubmit={formSubmit}
          >
            {({ handleChange, handleBlur, handleSubmit, values, errors, touched,resetForm }) => (
              <View style={{width:'90%'}} >
                
                <TextInput
                  onChangeText={handleChange('name')}
                  onBlur={handleBlur('name')}
                  value={values.name}
                  placeholder="Name"
                  style={styles.input}
                />
                {touched.name && errors.name && <Text style={styles.error}>{errors.name}</Text>}

                <TextInput
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
                  placeholder="Email"
                  style={styles.input}
                />
                {touched.email && errors.email && <Text style={styles.error}>{errors.email}</Text>}

                <TextInput
                  onChangeText={handleChange('phone')}
                  onBlur={handleBlur('phone')}
                  value={values.phone}
                  placeholder="phone"
                  secureTextEntry
                  style={styles.input}
                />
                {touched.phone && errors.phone && <Text style={styles.error} >{errors.phone}</Text>}

                <TextInput
                  onChangeText={handleChange('address')}
                  onBlur={handleBlur('address')}
                  value={values.address}
                  placeholder="address"
                  secureTextEntry
                  style={styles.input}
                />
                {touched.address && errors.address && <Text style={styles.error}>{errors.address}</Text>}

                <Button style={styles.button} onPress={handleSubmit} title="Submit" />
              </View>
            )}
          </Formik>

      </View>
    </SafeAreaView>
  );
  

}
