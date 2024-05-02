import React,{useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  TextInput,
  View,
  Alert
} from 'react-native';

import ListItem from '../../components/ListItem';
import { getAll,remove,get } from '../../controllers/product';
import SimpleButton from '../../components/form/simpleButton';
import SearchInput from '../../components/form/SearchInput';

export default function PaymentListScreen({ navigation }){
    const [search,setSearch] = useState('');
    const [listData,setListData] = useState([]);

  React.useLayoutEffect(() => {

    navigation.setOptions({
      headerRight: () => (
        <SimpleButton 
        onPress={() => navigation.navigate('ProductCreateScreen')}
        text='Add New'  
        />),
      headerShown: true, 
      title: 'Payment List Screen',
      headerStyle: {
        backgroundColor: '#FF4A85',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    });

    onload();

  },[]);


  const onload = async () => {
    let data = await getAll();
    // console.log(data);
    setListData(data);
  }

  const handleSearch = async (e) => {
     setSearch(e);
     let data = await getAll(e);
     setListData(data);
  }

  const handleDelete = async (id) => {

    let res = await remove(id);    
    if(res){
      onload();
    }
  }

  const handleEdit = async (id) => {

    navigation.navigate('ProductEditScreen', {id:id});
  }



  return (<SafeAreaView
  style={{
    alignItems:'center',
  }} >
    <View style={{
      width:'92%',
    }} >
        <View style={{alignItems:'center'}}>
          <SearchInput 
            onChangeText={handleSearch}
            value={search} />
        </View>

        <ScrollView style={{height:'88%'}}>
            {
                listData.map((element,index) => {
                    return  (
                    <ListItem key={index}
                        onPressEdit={() => handleEdit(element.id)}
                        onPress={() =>handleDelete(element.id)}
                        title={element.title}
                        description={element.barcode} />
                    )
                })
            }
        </ScrollView>
      </View>
    </SafeAreaView>);
}