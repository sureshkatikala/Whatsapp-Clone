
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,Button,TouchableHighlight,TouchableOpacity
} from 'react-native';
import { StackNavigator,SafeAreaView ,Navigation,TabNavigator,
  createStackNavigator,createMaterialTopTabNavigator,NavigationAction,StackActions} from 'react-navigation';
const firebase = require("firebase");
import {Icon} from 'react-native-elements'
import OptionsMenu from "react-native-options-menu";

var config = {
  apiKey: "AIzaSyCPpvTIQUuoCsdwovoHBc_oQv8EmzqsWRw",
authDomain: "chat-22607.firebaseapp.com",
databaseURL: "https://chat-22607.firebaseio.com",
projectId: "chat-22607",
storageBucket: "chat-22607.appspot.com",
messagingSenderId: "958591471882"
};
firebase.initializeApp(config);

import Call from './App/Screens/Call.js'
import Status from './App/Screens/Status.js'
import Login from './App/Screens/Login'
import Signup from './App/Screens/Signup'
import ForgetPassword from './App/Screens/ForgetPassword'
import FriendsList from './App/Screens/FriendsList'
import Chat from './App/Screens/Chat'
import Navigator from './App/Router.js'





// const bt=createMaterialTopTabNavigator({
  
//   Calls:{screen:Call},
//   chats:{screen:FriendsList},
//   Status:{screen:Status,
//   }
// } ,{
//   initialRouteName:'chats',
// activeTintColor:'white',
// navigationOptions:{tabBarVisible:true},

  
  
//   tabBarOptions: {
//     showLabel:true,
//     activeTintColor:'white',
//     activeBackgroundColor:'white',
     
    
//     labelStyle: {
      
//       fontSize: 13,
//       fontWeight:'bold',
//       color:'white',
//       borderColor:'white',
//       borderEndColor:'white',
//       borderTopColor:'white'
      
      
//     },
    
//     tabStyle: {
     
//        marginTop:0,
        
//       width: 130,
//       height:'70%'

//     },
//     style: {
//       backgroundColor: '#075E54',

//     },
    
  
   
//   }})
// // const bt=TabNavigator({
// //   Calls:{screen:Call,},
// //   chats:{screen:FriendsList},
// //   Status:{screen:Status}
  
// // },{
// //   tabBarPosition:'top',
// //   navigationOptions:{
// //     tabBarLabel:'Whatsapp',
    
// //   },
// //   tabStyle:{
// //     marginTop:50,
// //   }
  

// // })


// const Homestack=createStackNavigator({
//   login:{screen:Login,
//     navigationOptions: {
//       headerStyle: {
//         backgroundColor: '#075E54',
        
//       },
      
//       headerTintColor: '#fff',
//       headerTitleStyle: {
//         fontWeight: 'bold',
//       },
//     }},
//   signup:{screen:Signup},
//   forgetpassword:{screen:ForgetPassword},
//   friends:{screen:bt,
//     navigationOptions: {
      
//       title:'Whatsapp',
      
//       headerLeft:null,
//       headerRight:(
//        <OptionsMenu
//   customButton={myIcon}
//   destructiveIndex={1}
//   options={["Settings", "WhatsApp Web", "Logout"]}
//    actions={[logout]}
//   />
  
        
//       ),
//       headerStyle: {
//         backgroundColor: '#075E54',
        
//         elevation:0 ,
       
//       },
      
//       headerTintColor: '#fff',
//       headerTitleStyle: {
//         fontWeight: 'bold',
//         width:100
//       },
      
    
//       },
//     },
//   chat:{screen:Chat,
//     navigationOptions: {
//       headerRight:(<Icon name='attachment' type='entypo' color='white' style={{ marginRight: '50%' }}/>),
//       headerStyle: {
//         backgroundColor: '#075E54',
//       },
      
//       headerTintColor: '#fff',
//       headerTitleStyle: {
//         fontWeight: 'bold',
//         width:100

//       },
//     }
//   }
// },
//   { initialRouteName:'login'


    
// });
// function logout(navigation) {
//   return(
//   firebase.auth().signOut().then(() => {
//    navigation.navigate('login')
//   }, function (error) {
//       // An error happened.
//   }));
// }
// function logout (navigation) {
//   const popAction = StackActions.pop({
//     n: 1,
//   });
//   navigation. dispatch(popAction);
  
// }


export default class Firechat extends Component {
  
  render() {
    
    return (
      // <View style={{ flex: 1 }}>
      //   <StatusBar barStyle="light-content"/>
      //   <NavigationProvider router={Router}>
      //     <StackNavigation initialRoute={Router.getRoute('login') } />
      //   </NavigationProvider>
      // </View>
      <Navigator/>
    );
  }
}
console.ignoredYellowBox = ['Warning: Each', 'Warning: Failed'];

const styles =StyleSheet.create({
  rightButton: {
    marginTop: 10,
    marginLeft: 5,
    marginRight: 10,
    padding: 0,
},
})