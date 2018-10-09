// import React, { Component } from 'react';
// import {Text,View} from 'react-native'
// export default class Call extends Component {
//     static navigationOptions={
//         tabBarLabel:'CALLS'
//     }
//     render() {
//       return (
//           <View>
//               <Text>
//                   Call screen</Text>
//                   </View>
//                   );
//       }
//     }
import React, { Component } from 'react';
import {
Registry,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  ListView,
  Image,
  Text,
  View,ImageBackground
} from 'react-native';



import { StackNavigator,SafeAreaView ,Navigation,withNavigation} from 'react-navigation';

// import  {Ionicons,FontAwesome} from '@expo/vector-icons'
import {Icon} from 'react-native-elements'
import { Ionicons } from '@expo/vector-icons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const image1 = require('../images/geasy.jpg')
const image2 = require('../images/eminem.jpg')
const image3 = require('../images/kyle.jpg')
const image4 = require('../images/devon.jpg')
const image5 = require('../images/image8.jpeg')
const image6 = require('../images/image7.jpeg')
const image7 = require('../images/image6.jpeg')
const image8= require('../images/profile.jpg')
const data = [{
  
  "first_name": "Sai kiran",
  "message": "September 14,4:37 AM",
  "image": image1
}, {
  
  "first_name": "Kalyan",
  "message": "September 15,8:07 AM",
  "image": image2
}, {
 
  "first_name": "Manoj",
  "message": "(7) August 30,8:07 AM",
  "image": image3
}, {
  
  "first_name": "Disha",
  "message": "(3) July 15,12:07 PM",
  "image": image4
},
{
  
  "first_name": "Veena",
  "message": "(2) June 13,8:07 PM",
  "image": image5
},
{
  
  "first_name": "Deepthi",
  "message": "(6) June 25,7:07 PM",
  "image": image6
},{
  
  "first_name": "Preethi",
  "message": "(4) June 14,6:07 AM",
  "image": image7
},
{
  
  "first_name": "Kohli",
  "message": "(2) May 30,5:07 PM",
  "image": image8
}
]
const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});


 class Call extends Component {
    constructor(props){
    super(props)

    this.state = {
      dataSource: ds.cloneWithRows(data),
    }
  }
  
  eachMessage(x){
    return (
      <ImageBackground
				style={[ styles.container, styles.backgroundImage ]}
				source={require('../images/white.jpg')}>
      <TouchableOpacity >
        <View style={{ alignItems:'center', padding:10, flexDirection:'row', borderBottomWidth:1, borderColor:'#f7f7f7', }}>
          <Image source={x.image} style={{ borderRadius:30, width:60, height:60 }} resizeMode="cover"/>
          <View>
            <View style={{ flexDirection:'row', justifyContent:'space-between', width:280 }}>
              <Text style={{ marginLeft:15,width:90, fontWeight:'600', color:'#222', fontSize:15 }}>{x.first_name}</Text>
             
             {/* <View> {myicon}</View> */}
            </View>
            <View style={{ flexDirection:'row', alignItems:'center' }}>
            <Icon name='call-missed' type='Material-icons' color='red' />
              <Text style={{ fontWeight:'400', color:'#666', fontSize:12, marginLeft:2,width:150}}>{x.message}</Text>
            </View>
           </View>
         
         
          <Icon  name='phone' type='font-awesome' color='#075E54' />
         
       
          
        </View>
      </TouchableOpacity>
      </ImageBackground>
     
    )
  }

  render() {
    return (
      <View style={{ flex:1 }}>
      
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => this.eachMessage(rowData)}
        />
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
export default withNavigation(Call);
