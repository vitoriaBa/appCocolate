import { Text, SafeAreaView, StyleSheet,View,ScrollView, TouchableOpacity,Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function MilkaOreo() {
  const navi = useNavigation();

  return (

     <SafeAreaView style={styles.container}>
     <View  style={styles.container}>
      <Text style={styles.titulo} >Milka e Oreo</Text>

 
    <Image source={require('../assets/milkaoreo.png')} style={styles.img}></Image>
    <Text style={styles.text} > Milka Oreo é uma barra de delicioso chocolate ao leite recheado com o creme e pedaços crocantes de biscoitos Oreo. Chocolate ao leite macio Com um recheio de biscoitos Oreo quebrados</Text>
  

    </View >

     
     
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
     alignItems:'center',
    backgroundColor:'#684583',
    padding: 8,
  },
  titulo:{
fontSize:50,
fontWeight:'bold',
color:'#FFFFFF',
  },
  text:{
    fontSize:20,
fontWeight:'bold',
color:'#FFFFFF',
  },
img:{
  width:300,
  height:300,
  transform: [{ rotate: '-20deg' }],
}
 

});