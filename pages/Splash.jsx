import React from "react";
import { View ,Text, Button} from "react-native";


export default function Splash({navigation}){

    if(Platform.OS==='android'){
        setTimeout(()=>{
          navigation.reset({
            index:0,
            routes:[{name:'Home'}]
          })
        },2000);
    }
return (

<View style={{display:"flex", alignItems:'center',justifyContent:'center', backgroundColor:'#ea23ef'}}>
    <Text>I am Splash.</Text>

    <Button title="Go to Home" onPress={()=>navigation.navigate('Home')}/>
</View>

)

}