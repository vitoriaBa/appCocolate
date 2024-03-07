import { Text, SafeAreaView, StyleSheet,View,ScrollView, TouchableOpacity,Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Home() {
  const navi = useNavigation();

  

  return (

     <SafeAreaView style={styles.container}>
     <View  style={styles.cont}>
    <Text style={styles.titulo} >Milka</Text>
    </View >

<ScrollView horizontal={true}>

      <View style={styles.scrool}>

<TouchableOpacity  style={styles.item}
 onPress={() => navi.navigate('Choco1')}
> 
        <Text style={styles.text}>
        Milka Oreo
        </Text>
         <Image source={require('../assets/milkaoreo.png')} style={styles.img}></Image>
</TouchableOpacity>


<TouchableOpacity  style={styles.item}> 
       <Text style={styles.text}>
        Item 2
        </Text>
         <Image source={require('../assets/milkaoreo.png')} style={styles.img}></Image>
</TouchableOpacity>
        
<TouchableOpacity  style={styles.item}> 
       <Text style={styles.text}>
        Item 3
        </Text>
         <Image source={require('../assets/milkaoreo.png')} style={styles.img}></Image>
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
fontSize:100,
fontWeight:'bold',
color:'#FFFFFF',
paddingTop:100,
 transform: [{ rotate: '-16deg' }]
  },
  text:{
    fontSize:20,
fontWeight:'bold',
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
    backgroundColor:'#9775AA',
    width:250,
    height:250,
    borderColor:'#FFFFFF',
    borderRadius:30,
   borderWidth: 10,
  },
  img:{
  width:200,
  height:200,
}
 

});