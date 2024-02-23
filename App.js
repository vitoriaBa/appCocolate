import { StatusBar } from 'expo-status-bar';
import { Text, SafeAreaView, StyleSheet,View,ScrollView, TouchableOpacity,Image} from 'react-native';
//import { useNavigation } from '@react-navigation/native';
import { useFonts} from 'expo-font';

export default function App() {
//  const navi = useNavigation();

  let [fontsLoaded, fontError] = useFonts({
    'Lobster-LRegular': require('./assets/fonts/Lobster-Regular.ttf'),
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }


  

  return (

     <SafeAreaView style={styles.container}>
     <View  style={styles.cont}>
    <Text style={styles.titulo} >Milka</Text>
    </View >

<ScrollView horizontal={true}>

      <View style={styles.scrool}>
<TouchableOpacity  style={styles.item}
// onPress={() => navi.navigate('Choco1')}
> 
        <Text style={styles.text}>
        Milka Oreo
        </Text>
        <Image source={require('./assets/milkaoreo.png')} style={styles.img}></Image>
</TouchableOpacity>


<TouchableOpacity  style={styles.item}> 
       <Text style={styles.text}>
       Milka Daim
        </Text>
        <Image source={require('./assets/picole.png')} style={styles.img}></Image>
</TouchableOpacity>
        
<TouchableOpacity  style={styles.item}> 
       <Text style={styles.text}>
       Milka Nozes com passa
        </Text>
        <Image source={require('./assets/castanha.png')} style={styles.img}></Image>
</TouchableOpacity>
     
      </View>
    </ScrollView>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
     alignItems:'center',
    backgroundColor:'#684583',
    padding: 0,
  },
  titulo:{
    margin:30,
    backgroundColor:'',
fontSize:120,

fontFamily:'Lobster-Regular',
color:'#FFFFFF',
paddingTop:100,
paddingRight:50,
 transform: [{ rotate: '-16deg' }]
  
},
  text:{
    fontSize:25,
    fontFamily:'Lobster-Regular',

color:'#FFFFFF',
  },

  scrool:{
 flexDirection: 'row', 
    alignItems: 'center',
  },


  item:{
     marginHorizontal: 15,
       flex: 1,
    justifyContent:'center',
     alignItems:'center',
    //backgroundColor:'#9775AA',
    width:350,
    height:350,
    borderColor:'#FFFFFF',
    borderRadius:30,
   borderWidth: 10,
  },
  
  
  img:{
  width:250,
  height:250,
}
 

});