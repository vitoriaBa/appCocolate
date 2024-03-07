import{createStackNavigator} from "@react-navigation/stack";

import Home from './Home';
import MilkaOreo from './MilkaOreo';




const Stack = createStackNavigator();

export default function Rotas(){
  return(
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Home"> 
    <Stack.Screen name ='Home' component={Home} options={{headerShown:false, title: 'Home'}}/>
    <Stack.Screen name ='MilkaOreo' component={MilkaOreo} options={{headerShown:false, title: 'MilkaOreo'}}/>
  
    </Stack.Navigator>
    </NavigationContainer>
  );
}


