
import React from 'react';
import SplashAnimation from './pages/SplashAnimation';
// import Home from './pages/Home';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Receipe from './components/Receipe';
import Placecard from './components/Placecard';

export default function App(){

const Stack =createNativeStackNavigator();

return(

    <NavigationContainer >
      <Stack.Navigator initialRouteName='SplashAnimation' >
        
        <Stack.Screen name='SplashAnimation' component={SplashAnimation} 
        options={{title:"Splash Screen",  headerShown:false}}/>

{/*     <Stack.Screen name='Home' component={Home} options={{title:"Home Screen"}}/> */}
        <Stack.Screen name='Placecard' component={Placecard} options={{title:"Tourist Places",  headerShown:false}}/>
        </Stack.Navigator>      

    </NavigationContainer>

);

}
