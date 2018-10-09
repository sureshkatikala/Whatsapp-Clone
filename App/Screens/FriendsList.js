import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ListView,
    ImageBackground,Image,TouchableHighlight
} from 'react-native';
const firebase = require("firebase");
import Spinner from 'react-native-loading-spinner-overlay';


import { Colors, Styles } from '../Shared'
import {NavigationActions,withNavigation} from 'react-navigation'

import TextField from '../Components/TextField';
import Button from '../Components/Button';
import Separator from '../Components/Separator';
import { Time } from 'react-native-gifted-chat';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-elements';
var navigator;
// let time= new Time().toLocaleString();


 class FriendsList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2,
            }),
            loading: true 
        };
        this.friendsRef = this.getRef().child('friends');

        // navigator = this.props.navigator
    }

    getRef() {
        return firebase.database().ref();
    }
    // logout(){
    //     firebase.auth().signOut().then(() => {
    //         navigation.pop();
    //     }, function (error) {
    //         // An error happened.
    //     });
    // }

    listenForItems(friendsRef) {
        var user = firebase.auth().currentUser;

        friendsRef.on('value', (snap) => {

            // get children as an array
            var items = [];
            var ok=[];
            snap.forEach((child) => {
                if(child.val().email != user.email)
                    items.push({
                        name: child.val().name,
                       
                        uid: child.val().uid,
                        email: child.val().email,
                        avatar:child.val().avatar,
                    
                    });
            });
            
            this.setState({
                dataSource: this.state.dataSource.cloneWithRows(items),
                loading: false
            });

        });
    }

    componentDidMount() {
        this.listenForItems(this.friendsRef);
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                this.props.navigation.navigate('chats');
            } else {
                this.props.navigation.navigate('login');
                





            }
          });
    }

    
    static navigationOptions = ({ navigation }) => ({
        headerTitle: 'Chat ',
        headerLeft:(< Button 
            primary style={styles.rightButton}></Button>),
        // headerRight: (
        //     < Button 
        //                  primary style={styles.rightButton}
        //     onPress={() => {
        //                         firebase.auth().signOut().then(() => {
        //                             navigation.pop();
        //                         }, function (error) {
        //                             // An error happened.
        //                         });
        //                     } }>
              
        //                Logout</Button>
        //   ),

    })

    renderRow = (rowData) => {
        return(
         
        <TouchableOpacity onPress={() => this.props.navigation.push('chat', {friend:rowData}) }>
       
 
             <View style={{ alignItems:'center', padding:10, flexDirection:'row', borderBottomWidth:1, borderColor:'#f7f7f7' }}>
                <Image source={ {uri:rowData.avatar}}  style={{ borderRadius:30, width:60, height:60 }}
                resizeMode="cover"/>
                <View>
                <View style={{ flexDirection:'row', justifyContent:'space-between', width:'100%' }}>
                <Text style={styles.profileName}>{rowData.name}</Text>
                
            </View>
            <View style={{ flexDirection:'row', alignItems:'center' }}>
              <Text style={{ fontWeight:'400', color:'#666', fontSize:12, marginLeft:15 ,width:'100%'}}>Hey there! I’m using WhatsApp</Text>
            </View>
            
            </View>
            </View>
        </TouchableOpacity>);
        
    }
    static navigationOptions={
        tabBarLabel:'CHATS'
    }

    render() {
        return (
            <ImageBackground
				style={[ styles.container, styles.backgroundImage ]}
				source={require('../images/white.jpg')}>
            <View style={styles.container}>
                {/* <View style={styles.topGroup}> */}
                    
                    {/* <TouchableOpacity>
                        <Text style={styles.inviteFriends}>Invite More Freinds</Text>
                    </TouchableOpacity> */}
                {/* </View> */}
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this.renderRow} />
                <Spinner visible={this.state.loading} />
            </View>
            <TouchableOpacity style={styles.addButton}
      underlayColor='#25D366'onPress={() => {
        this.props.navigation.navigate('contacts')
      }}>
      <Text style={{fontSize: 30, color: 'white'}}>+</Text>
     
  </TouchableOpacity>
            </ImageBackground>
        );
    }
}
//  logout(navigation) {
//     return(
//     firebase.auth().signOut().then(() => {
//      this.props.navigation.navigate.pop()
//     }, function (error) {
//         // An error happened.
//     }));
//   }
    

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'stretch',
        marginRight: 10,
        marginLeft: 0
    },
    rightButton: {
        marginTop: 10,
        marginLeft: 5,
        marginRight: 10,
        padding: 0,
    },
    topGroup: {
        flexDirection: 'row',
        margin: 10
    },
    myFriends: {
        flex: 1,
        color: Colors.grayColor,
        fontSize: 16,
        padding: 5
    },
    inviteFriends: {
        color: Colors.mainColor,
        padding: 5
    },
    profileContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 8,
        marginLeft: 6,
        marginBottom: 8,
    },
    profileImage: {
        width: 30,
        height: 30,
        borderRadius: 15,
        marginLeft: 6
    },
    profileName: {
        marginLeft: 13,
        fontSize: 16,
        fontWeight:'bold',
        width:'100%'
    },
    actionButtonIcon: {
        fontSize: 20,
        height: 22,
        color: 'green',
      },
      addButton: {
        backgroundColor: '#25D366',
        borderColor: '#25D366',
        borderWidth: 1,
        height: 60,
        width: 60,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 20,
        right:20,
        shadowColor: "#000000",
        shadowOpacity: 0.8,
        shadowRadius: 2,
        shadowOffset: {
          height: 1,
          width: 0
        }
      }

})
export default withNavigation(FriendsList);
console.ignoredYellowBox = ['Warning: Each', 'Warning: Failed'];