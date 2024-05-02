import {
    View, 
    Text, 
    FlatList, 
    Dimensions, 
    TouchableOpacity,
    StyleSheet,
    Image} from 'react-native';
import React, {useState} from 'react';

const {height, width} = Dimensions.get('window');


const styles = StyleSheet.create({
  container: {
    // backgroundColor:'red',
    justifyContent: 'center', 
    alignItems: 'center'
  },
  sectionContainer:{
     height: 210,
     justifyContent: 'center',
     alignItems: 'center',
  },
  slideItem:{
    width: width,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slideLink:{
      width:'100%',
      padding:10,
      height: '100%',
      // backgroundColor: 'green',
      borderRadius: 10,
  },
  slideImg:{
    width:'100%',
    height: '100%',
  },
  slideIndicators:{
    flexDirection: 'row',
          width: width,
          justifyContent: 'center',
          alignItems: 'center',
  },
  slideIndicatorItem:{
      width:8,
      height:8,
      marginLeft: 5,
  },
  

  
});

export default function Screen1() {

    const [data, SetData] = useState([1, 1, 1, 1, 1]);
    const [currentIndex, setCurrentIndex] = useState(0);

   return (<View style={styles.container}>
      
      <View style={styles.sectionContainer}>
        <FlatList
          data={data}
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          onScroll={e => { 
            const x = e.nativeEvent.contentOffset.x; 
            setCurrentIndex((x / width).toFixed(0));
          }} horizontal renderItem={({item, index}) => {
            return (<View
                key={index}
                style={styles.slideItem}>
                <TouchableOpacity
                  disabled={true}
                  style={styles.slideLink}>
                    <Image style={styles.slideImg} source={require('../assets/background.jpg')} />
                  </TouchableOpacity>
              </View>
            );}} />
      </View>

      <View style={styles.slideIndicators}>
        { data.map((item, index) => {
          return (<View 
          key={index} 
          style={{
            marginVertical:10,
            width:8,
            height:8,
            marginLeft: 5,
            borderRadius: currentIndex == index ? 5 : 4,
            backgroundColor: currentIndex == index ? 'green' : 'gray',}
          }>
          </View>);
        })}
      </View>
  </View>);
}