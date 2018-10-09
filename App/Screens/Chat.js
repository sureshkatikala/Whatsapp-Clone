import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,ImageBackground,KeyboardAvoidingView,TouchableWithoutFeedback,Keyboard
} from 'react-native';

import {navigation,withNavigation} from 'react-navigation'
import { GiftedChat } from 'react-native-gifted-chat';
const firebase = require("firebase");


import { Colors, Styles } from '../Shared'

import TextField from '../Components/TextField';
import Button from '../Components/Button';
import Separator from '../Components/Separator';
const Dismiss =({children})=>{
    <TouchableWithoutFeedback onPress ={()=> Keyboard.dismiss()}>{children}</TouchableWithoutFeedback>
};

 class Chat extends Component {
    static navigationOptions = ({ navigation }) => ({
        headerTitle: 'Chat',
        headerTitleStyle: {
            fontWeight: 'bold',
            width:'100%'
          },

       

    })


    constructor(props) {
        super(props);
        this.state = {
            messages: []
        };

        this.user = firebase.auth().currentUser
        this.friend = this.props.navigation.state.params.friend
       

        

        this.chatRef = this.getRef().child('chat/' + this.generateChatId());
        this.chatRefData = this.chatRef.orderByChild('order')
        this.onSend = this.onSend.bind(this);

    }

    generateChatId() {
        if(this.user.uid > this.friend.uid)
            return `${this.user.uid}-${this.friend.uid}`
        else
            return `${this.friend.uid}-${this.user.uid}`
    }

  
    

    getRef() {
        return firebase.database().ref();
    }

    listenForItems(chatRef) {
        chatRef.on('value', (snap) => {

            // get children as an array
            var items = [];
            snap.forEach((child) => {
                const avatar = ( child.val().uid == this.user.uid? this.user.avatar: this.friend.avatar)
                const name = child.val().uid == this.user.uid? this.user.name: this.friend.name
                items.push({
                    _id: child.val().createdAt,
                    text: child.val().text,
                    createdAt: new Date(child.val().createdAt),
                    user: {
                        _id: child.val().uid,
                        avatar: avatar
                    }
                });
            });

            this.setState({
                loading: false,
                messages: items
            })


        });
    }

    componentDidMount() {
        this.listenForItems(this.chatRefData);
        
          
    }

    componentWillUnmount() {
        this.chatRefData.off()
    }

    onSend(messages = []) {

        // this.setState({
        //     messages: GiftedChat.append(this.state.messages, messages),
        // });
        messages.forEach(message => {
            var now = new Date().getTime()
            this.chatRef.push({
                _id: now, 
                text: message.text,
                createdAt: now,
                uid: this.user.uid,
                order: -1 * now
            })
        })
        
    }
    render() {
        return (
            
         
            <View  style={{flex:1}}>
           

            <ImageBackground
				style={[ styles.container, styles.backgroundImage ]}
				source={require('../images/background.jpg')}>
                {/* <Dismiss> */}
            <GiftedChat
                messages={this.state.messages}
                onSend={this.onSend.bind(this)}
                user={{
                    _id: this.user.uid,
                }}
                />
                {/* </Dismiss>  */}
                 <KeyboardAvoidingView behavior={'padding'} keyboardVerticalOffset={80}/>
                </ImageBackground>
                </View>
                
                
                
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'stretch',
        // marginRight: 10,
        // marginLeft: 10,
        backgroundColor: 'transparent'
    },
    form: {
        flex: 1,
        justifyContent: 'space-between',
      },
})
export default withNavigation(Chat);
console.ignoredYellowBox = ['Warning: Each', 'Warning: Failed'];