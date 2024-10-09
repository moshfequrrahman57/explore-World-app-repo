import LottieView from 'lottie-react-native';
import React from 'react';
import { StyleSheet, View,Text, useState } from 'react-native';

const SplashAnimation = ({navigation}) => {

    if(Platform.OS==='android'){
        setTimeout(()=>{
          navigation.reset({
            index:0,
            routes:[{name:'Placecard'}]
          });
        
        },3000);
    }
    
    

    return (

        <View  style={styles.container}>
            <Text style={styles.app_name}>Explore</Text>
            <LottieView style={{width:350,height:350}} 
            source={require('../assets/travel.json')} 
            autoPlay/>
        </View>
    );
}

const styles =StyleSheet.create({
   app_name:{
    position:'absolute',
     bottom: '0%',
      right:'5%',
      fontSize:25,
      color:'#c96868',
      fontFamily:'SixtyfourConvergence-Regular',
      
    },
   
    container:{
        flex: 1,
        justifyContent:'center',
        alignItems: 'center',
        padding: 20,
        margin: 10,
        position:'relative'
    }
});



export default SplashAnimation;