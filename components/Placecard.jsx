import React from 'react';

import {
  SafeAreaView, View, FlatList,  StyleSheet, Text, StatusBar, Image,
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
  <View style={styles.card_view}> 
  <Image style={styles.card_image} source={image_url}/>
  <View style={styles.card_text_container}>
  <Text style={styles.card_text}>{`${title}`}</Text> 
  </View>
  </View>

);




const Placecard = () => {
  return (

    <SafeAreaView style={styles.container_save_area_view}>
      <View style={styles.container_header_view}>
        <Image style={styles.header_logo} source={require('../assets/Logo/logo2.png')}/>
        <Text style={styles.header_text}>{'Plan your next \nexplore'}</Text>
      </View>
    <FlatList style={{marginLeft:10}} numColumns={2} columnWrapperStyle={{gap:10}} contentContainerStyle={{gap:0} }
      data={DATA}
      renderItem={({item}) =>
      
        <Item id={item.id} title={item.title} image_url={item.image_path} />
      
      }
      keyExtractor={item => item.id}
    />
  </SafeAreaView>

  
  );
};

const styles =StyleSheet.create({

  container_save_area_view:{
    flex:1,
    marginLeft:5,
    marginRight:5,
    marginTop:'5%'
  },
container_header_view:{ 
  flexDirection:'row',
  justifyContent:'flex-start',
  alignItems:'baseline'
},
header_logo:{
  width:60,
  height:60, 
  marginLeft:20, 
  marginRight:10
},
header_text:{
  fontFamily:'Pacifico-Regular',
   fontSize:32, 
   padding:10,
   color:'#784212',
    lineHeight:45
   },
   card_view:{
    display: 'flex',
    width:'47%',
    height:290,
    justifyContent:'center',
    alignItems:'center',
    position:'relative',
    marginTop:16,
    overflow:'hidden',
    /* elevation:20, */
    shadowColor:'black',
    borderStyle:'solid'
  },

card_image:{
  width:'100%',
  height:'100%',
  borderRadius:12,
  resizeMode: 'cover'
},
card_text_container:{
  display:'flex', 
  width: '100%',
   height:'20%',
   opacity:0.8,
   position:'absolute',
    bottom: 0,
     backgroundColor:'#16325B',
      borderBottomRightRadius:12,
      borderBottomLeftRadius:12,
    },
    
    card_text:{
      fontFamily:'JosefinSlab-Bold',
      fontSize:20,
      textAlign:'left',
      padding:10,
      color:'#ffffff',
    }

})
export default Placecard;