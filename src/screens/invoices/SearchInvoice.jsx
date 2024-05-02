import React,{useState} from 'react';
import { View,Text,Pressable } from "react-native"
import { Button,TextInput} from 'react-native-paper';
import { getAll} from '../../controllers/product';
import Dropdown from '../../components/dropdown';


export default (props) => {

    const {setListData} = props;

    const [search,setSearch] = useState({
        search:'',
        customer:'',
    });

    const handleSearch = async () => {

        let data = await getAll(search.search);
       
        if(data){
        setListData(data);
        }

    }

    return  <View style={{
        alignItems:'center',
        paddingTop:10,
        flexDirection:'column'
        }}>

            <Dropdown />
            
         <TextInput
            style={{
                width:'100%',
                backgroundColor:'white',
                height:40,
                marginTop:10,
            }}
            underlineColor="transparent"
            selectionColor="black"
            activeUnderlineColor="transparent"
            onChangeText={((e) => setSearch({...search,search:e}))}
            value={search.search}
            placeholder="Search By Customer Name"
            keyboardType="default"
        />

        <TextInput
            style={{
                width:'100%',
                backgroundColor:'white',
                height:40,
                marginTop:15,
            }}
            selectionColor="black"
            underlineColor="transparent"
            activeUnderlineColor="transparent"
            onChangeText={((e) => setSearch({...search,customer:e}))}
            value={search.customer}
            placeholder="Search By Invoice Number"
            keyboardType="default"
        />

    
        <Button mode="contained"
        style={{
            padding: 2,
            borderRadius: 5,
            marginTop: 20,
          }}
         labelStyle={{
            color: 'white',
            fontSize: 16,
            fontWeight: 'bold',
          }} 
        onPress={handleSearch}>Search</Button>

    </View>
    }