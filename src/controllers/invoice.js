import AsyncStorage from '@react-native-async-storage/async-storage';
import uuid from 'react-native-uuid';


export const create = async (data) => {
    try {
            let oldata = await AsyncStorage.getItem('invoices');
            oldata = JSON.parse(oldata);
            oldata = oldata ? oldata : [];            
            data.id = uuid.v4();
            oldata.push(data);  
            const jsonData = JSON.stringify(oldata)
            let saveData = await AsyncStorage.setItem('invoices',jsonData);
            return true;

      } catch(e) {
           return false;
      }

}



export const getAll = async (search) => {

    try {
            let oldata = await AsyncStorage.getItem('invoices');
            oldata = JSON.parse(oldata);
            
            let response = [];
            if(search){
                let modified = [];    
                oldata.forEach(element => {
                    if(element.title.includes(search)){
                        modified.push(element);
                    }
                });
                response = modified;
            }else{
                response = oldata;
            }

            return response ? response : [];

      } catch(e) {
           return false;
      }

}



export const edit = async (data) => {
    try {
           let oldata = await AsyncStorage.getItem('invoices');
           oldata = JSON.parse(oldata);
           oldata = oldata ? oldata : [];
           let objIndex = oldata.findIndex((obj => obj.id == data.id)); 
           oldata[objIndex].title = data.title;
           oldata[objIndex].price = data.price;
           oldata[objIndex].description = data.description;
            
           let JsonData = JSON.stringify(oldata);
           let saveData = await AsyncStorage.setItem('invoices',JsonData);
           return true;

      } catch(e) {
           return false;
      }
}



export const get = async (id) => {

    try {
            let oldata = await AsyncStorage.getItem('invoices');
            oldata = JSON.parse(oldata);
            oldata = oldata ? oldata : [];
            let resdata = oldata.find(item => item.id === id);
            return resdata;

      } catch(e) {
           return false;
      }

}



export const remove = async (id) => {

    try {
      
            let oldata = await AsyncStorage.getItem('invoices');
            oldata = JSON.parse(oldata);
            oldata = oldata ? oldata : [];
           let newdata = oldata.filter(item => item.id != id);
            let JsonData =JSON.stringify(newdata);
            let saveData = await AsyncStorage.setItem('invoices',JsonData);
            return true;

      } catch(e) {
           return false;
      }

}





export default {};