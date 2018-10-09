import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,SafeAreaView,
    TouchableOpacity,
    ListView,
    ImageBackground,Image,TouchableHighlight
} from 'react-native';
import { StackNavigator,Navigation,TabNavigator,
  createStackNavigator,createMaterialTopTabNavigator,NavigationAction,StackActions,withNavigation} from 'react-navigation';

  import Call from '../App/Screens/Call.js'
  import Status from '../App/Screens/Status.js'
  import Login from '../App/Screens/Login'
  import Signup from '../App/Screens/Signup'
  import ForgetPassword from '../App/Screens/ForgetPassword'
  import FriendsList from '../App/Screens/FriendsList'
  import Chat from '../App/Screens/Chat'
  import ContactList from '../App/Screens/contacts'
  import {Icon} from 'react-native-elements'
  import OptionsMenu from "react-native-options-menu";
  import Settings from '../App/Screens/Settings.js'
/**
  * This is where we map route names to route components. Any React
  * component can be a route, it only needs to have a static `route`
  // * property defined on it, as in HomeScreen below
  */
 const firebase = require("firebase");
 const bt=createMaterialTopTabNavigator({
  
  Calls:{screen:Call},
  chats:{screen:FriendsList},
  Status:{screen:Status,
  
  },

} ,{
  initialRouteName:'chats',
activeTintColor:'white',
navigationOptions:{tabBarVisible:true},

  
  
  tabBarOptions: {
    showLabel:true,
    activeTintColor:'white',
    activeBackgroundColor:'white',
     
    
    labelStyle: {
      
      fontSize: 13,
      fontWeight:'bold',
      color:'white',
      borderColor:'white',
      borderEndColor:'white',
      borderTopColor:'white'
      
      
    },
    
    tabStyle: {
     
       marginTop:0,
        
      width: 130,
      height:'70%'

    },
    style: {
      backgroundColor: '#075E54',

    },
    
  
   
  }})
  withNavigation(bt)
  const myIcon = <Icon name='dots-three-vertical' type='entypo' color='white' iconStyle={{marginRight:10}} />

const routes={
  login:{screen:Login,
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#075E54',
        
      },
      
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }},
  signup:{screen:Signup},
  forgetpassword:{screen:ForgetPassword},
  friends:{screen:bt,
    navigationOptions : {
      
      title:'Whatsapp',
      
      headerLeft:null,
      headerRight:(
        //   <TouchableOpacity>
        //   <View  style={{ marginRight: 30,paddingTop:25 }}>
        // <Icon name='attachment' type='entypo' color='white'/></View>
        //  <View  style={{ paddingLeft:5,paddingBottom:25}}>
        //  <Icon name='attachment' type='entypo' color='white'/></View>
        // </TouchableOpacity>
        <View style={{  flexDirection:'row',alignItems:'center'}}>
             <TouchableOpacity>     
            <Icon name="search" type='font-awesome' color='#fff' size={20} style={{ padding:5,paddingRight:15 }} />
            </TouchableOpacity> 
            <Text style={{color:'#075E54'}}>MAg</Text>
            <OptionsMenu
  customButton = {myIcon}
  
  customButton={myIcon}
  destructiveIndex={1}
  options={["Settings", "WhatsApp Web", "Logout"]}
   actions={[settings,web,this.logout]}/>
           
          </View>
        
        
        ),
      // logout:({navigation})=>({firebase.auth().signOut().then(() => {
      //   this.props.navigation.pop();
      // }, function (error) {
      //   // An error happened.
      // })}),
   headerStyle: {
        backgroundColor: '#075E54',
        
        elevation:0 ,
       
      },
      
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
        width:100
      },
      
    
      },
    },
  chat:{screen:Chat,
    navigationOptions: {
      headerRight:(
      
      <View style={{  flexDirection:'row',alignItems:'center'}}>
             <TouchableOpacity>     
            <Icon name="video-camera" type='font-awesome' color='#fff' size={20} style={{ padding:5,paddingRight:15 }} />
            </TouchableOpacity> 
            <Text style={{color:'#075E54'}}>MAg</Text>
            <TouchableOpacity> 
            <Icon name="call" color='#fff' size={23} style={{ padding:5,paddingRight:15 }} />
            </TouchableOpacity> 
            <Text style={{color:'#075E54'}}>MAg</Text>
            <TouchableOpacity> 
            <Icon name="attach-file" color='#fff' size={23} style={{ padding:15, }} />
            </TouchableOpacity> 
            <Text style={{color:'#075E54'}}>MAg</Text>
            
          </View>
      
      
      
      ),
      headerStyle: {
        backgroundColor: '#075E54',
      },
      
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
        width:100

      },
    }
  },
  contacts:{screen:ContactList,
    navigationOptions:{
      headerStyle: {
        backgroundColor: '#075E54',
      },
      
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
        width:"100%"

      },
      headerRight:(
       
        <View style={{  flexDirection:'row',alignItems:'center'}}>
             <TouchableOpacity>     
            <Icon name="search" type='font-awesome' color='#fff' size={20} style={{ padding:5,paddingRight:15 }} />
            </TouchableOpacity> 
            <Text style={{color:'#075E54'}}>MAg</Text>
            <OptionsMenu
  customButton = {myIcon}
  
  customButton={myIcon}
  destructiveIndex={1}
  options={["Invite a friend","Contacts", "Refresh","Help"]}
  />
           
          </View>
        
        
        ),
    },
    

    },
    Settings:{screen:Settings,
      navigationOptions:{
        headerStyle: {
          backgroundColor: '#075E54',
        },
        
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
          width:"100%"
  
        },}}
  
  }


const config={initialRouteName:'login'}
withNavigation(bt);
const Navigator = createStackNavigator(routes, config);
export default Navigator;
console.ignoredYellowBox = ['Warning: Each', 'Warning: Failed'];
// console.ignoredYelloWBox = ['Warning: Each', 'Warning']

	


	





// const logout =()=>{ firebase.auth().signOut().then(() => {
//   this.props.navigation.pop();
// }, function (error) {
//   // An error happened.
// });}
function logout() {
    return(
      firebase.auth().signOut(), function (error) {
        // An error happened.
    });
  }
  function web() {
    return(alert('Whatsapp Web is currently disabled'));}



    function settings() {
      return(
        
          this.props.navigation.navigate('Settings')
       
           
       
      )}
      
  const styles = StyleSheet.create({
    right: {
      // alignItems: "flex-end",
      // flexDirection: "row"
      marginRight:15
    },
    row:{
      flexDirection:'row'
    },})

    {/*          
       <OptionsMenu
  customButton={myIcon}
  destructiveIndex={1}
  options={["Settings", "WhatsApp Web", "Logout"]}
   actions={[logout]}
  /> */}