 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';



import VectorIcons from'react-native-vector-icons/AntDesingn';
import Color from "../layout/color.js";
import CreateUser from "../views/CreateUser/componentes";
import TodoList from '../views/CreateUser/componentes';
const Tab = createBottomTabNavigator();

class App extends React.component{
  constructor(props) {
    super(props);
  }
  HomeScreen(){
    return (
    <View>
      <Text>
        <VectorIcons name = "attachment" size={35} color='#00000'/>
            VISTA PARA LA ENTREGA DE TAREAS
      </Text>
    </View>
    ) 
  }
  SettingsScreen(){
    return (
      <View>
        <Text>
              DONE
        </Text>
      </View>
      ) 

  }
  listUser(){
    return <this.TodoList/>;
  }
  listUser(){
    return <this.CreateUser/>;
  }
  render(){
    return <NavigationContainer>
      <Tab.Navigator>
        screenOptions={({route})=>({
          TabBarIOS: ({focused, color, size}) => {
            let iconName;
            switch (route.name){
              case 'LISTA DE TAREAS' {
                if (focused){
                  return <VectorIcons name="menufold" size = {23} color={Color.[Color.key].thirthcolor}/>;
                }
                else{
                  return <Ionicons name="menufold" size={23} color={Color.[Color.key].secondcolor} />;
                }
              }
              case 'AGREGAR TAREA': {
                if (focused){
                  return <VectorIcons name="folder1" size={23} color={Color.option1.thirthcolor}/>;
                } else {
                  return <VectorIcons name= "folder1" size={23} color={Color.option1.secondcolor}/>;

                }
              }
            }
          }
        })}
      <Tab.Screen name = "LISTA DE TAREAS" component={this.TodoList}/>
      <Tab.Screen name = "AGREGAR TAREA" component={this.CreateUser/>
      </Tab.Navigator>
    </NavigationContainer>
  }
}

export default App;
