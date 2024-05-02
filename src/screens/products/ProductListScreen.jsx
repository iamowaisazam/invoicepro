import React,{useState} from 'react';
import { useFocusEffect } from '@react-navigation/native';

import {
  SafeAreaView,
  ScrollView,
  View,
  Image,
  Pressable
} from 'react-native';

import ListItem from '../../components/ListItem';
import { getAll,remove} from '../../controllers/product';
import SearchInput from '../../components/form/SearchInput';

export default function HomeScreen({ navigation }){
    const [search,setSearch] = useState('');
    const [listData,setListData] = useState([]);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: 'All Product',
    });
    // onload();
  },[]);


  useFocusEffect(
    
      React.useCallback(() => {
        onload();
        return () => {
        };
      }, [])
  );


  const onload = async () => {
    console.log('Product Loaded');
    let data = await getAll();
    setListData(data);
  }

  const handleSearch = async (e) => {
     setSearch(e);
     let data = await getAll(e);
    //  console.log(data);
     if(data){
      setListData(data);
     }
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

        <View>
            <Pressable onPress={() => navigation.navigate('ProductCreateScreen')}
            style={{
              alignItems:'center',
              marginVertical:10,
            }}>
              <Image source={require('../../assets/menu-icons/add.png')} />
            </Pressable>
        </View>

        <ScrollView style={{height:'88%'}}>
            {
                listData.map((element,index) => {
                    return  (
                    <ListItem key={index}
                        onPressEdit={() => handleEdit(element.id)}
                        onPress={() =>handleDelete(element.id)}
                        title={element.title}
                        description={element.price} />
                    )
                })
            }
        </ScrollView>
      </View>
    </SafeAreaView>);
}