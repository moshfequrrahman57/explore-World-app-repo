import React from 'react';


import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Image,
} from 'react-native';

const DATA = [
  {
    id: 1,
    title: 'Sajek Valley',
    image_path: require('../assets/1.jpeg')
  },
  {
    id: 2,
    title: 'Madhob kundo Water Falls',
    image_path: require('../assets/2.jpeg')
  },
  {
    id: 3,
    title: 'Ratargul Swamp Forest',
    image_path: require('../assets/3.jpeg')
  },
  {
    id: 4,
    title: 'Kuyakata Sea Beach',
    image_path: require('../assets/4.jpeg')
  },
  {
    id: 5,
    title: 'Cox Bazar  Sea Beach',
    image_path: require('../assets/5.jpeg')
  },
  {
    id: 6,
    title: 'Saint Martin Islan',
    image_path: require('../assets/6.jpeg')
  },
  {
    id: 7,
    title: 'Jaflong',
    image_path: require('../assets/7.jpeg')
  },
  {
    id: 8,
    title: 'Mahastan Gar',
    image_path: require('../assets/8.jpeg')
  },
  {
    id: 9,
    title: 'Lalbag Kella',
    image_path: require('../assets/9.jpeg')
  },
  {
    id: 10,
    title: 'National Memorial',
    image_path: require('../assets/1.jpeg')
  },
  {
    id: 11,
    title: 'Sundarban Forest',
    image_path: require('../assets/11.jpeg')
  },


];

const Item = ({id,title,image_url}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{`${id}. ${title}`}</Text>
    <Image style={{width:80,height:70,borderRadius:3}} source={image_url}/> 
  </View>
);

const Receipe = () => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({item}) =>
        
          <Item id={item.id} title={item.title} image_url={item.image_path} />
        
        }
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight/3 ,
   
  },
  item: {
   display:'flex',
   flex:1,
   flexDirection:'row',
   justifyContent:'space-around',
    backgroundColor: '#ccdceb',
    padding: 10,
    marginVertical: 6,
    marginHorizontal: 16,
    borderRadius:5
  },
  title: {
    fontSize:22,
    flex:0.7,
   
  },
});

export default Receipe;


{/* <View style={{flex:1,flexDirection:'row',flexWrap:'wrap',justifyContent:'space-between',marginLeft:16,marginRight:16,}}>
       <View style={{display: 'flex',width:'49%',height:260,justifyContent:'center',alignItems:'center',position:'relative',marginTop:16,overflow:'hidden',elevation:20,shadowColor:'black',borderStyle:'solid'}}> 
        <Image style={{width:'98%',height:'98%',borderRadius:5,resizeMode: 'cover'}} source={require('../assets/1.jpeg')}/>
        <Text style={{width: '80%',fontSize:20, textAlign:'center',position:'absolute', bottom: 10, left:'10%',color:'white', backgroundColor:'lightgreen', padding: 5, borderRadius:5,}}>Left</Text> 
        </View>
    </View> */}