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
import { getAll,remove,get } from '../../controllers/user';
// import SimpleButton from '../../components/form/simpleButton';
import SearchInput from '../../components/form/SearchInput';

export default function HomeScreen({ navigation }){
    const [search,setSearch] = useState('');
    const [listData,setListData] = useState([]);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: 'All Customers',
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
    console.log('User Loaded');
    let data = await getAll();
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
    navigation.navigate('UserEditScreen', {id:id});
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
            <Pressable onPress={() => navigation.navigate('UserCreateScreen')}
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
                        title={element.name}
                        description={element.phone} />
                    )
                })
            }
        </ScrollView>
      </View>
    </SafeAreaView>);
}