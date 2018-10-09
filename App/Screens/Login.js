import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
const firebase = require("firebase");
import Spinner from 'react-native-loading-spinner-overlay';

import { Colors, Styles } from '../Shared'

import TextField from '../Components/TextField';
import Button from '../Components/Button';
import Separator from '../Components/Separator';

export default class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            errorMessage: null
        }
        console.ignoredYellowBox = [
            'Setting a timer'
            ];

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.props.navigation.navigate('friends')
                this.setState({
                    loading: false
                })
            }
        });
    }

   
    static navigationOptions = ({ navigation }) => ({
        title: 'Login',
        headerTitleStyle: {
            fontWeight: 'bold',
            width:"100%"
          },

        
    })
   

    login = () => {
        this.setState({
            errorMessage: null,
            loading: true 
        })
        const {email, password} = this.state;
        firebase.auth()
            .signInWithEmailAndPassword(email, password)
            .catch((error) => {
                
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                this.setState({
                    errorMessage,
                    loading: false
                })
            });
            this.setState({ email:'',password:''
        })
    }

    renderErrorMessage = () => {
        if(this.state.errorMessage)
            return <Text style={styles.error}>{this.state.errorMessage}</Text>
    }

    render() {
        
        return (
            <View style={styles.container}>
                <TextField placeholder="Email"
               ref={input => { this.textInput = input }}
                    value={this.state.email}
                    onChangeText={email => this.setState({ email }) } />
                <TextField placeholder="Password"
                 secureTextEntry
                    value={this.state.password}
                    onChangeText={password => this.setState({ password }) } />
                <Button primary onPress={this.login}>Login</Button>
                {this.renderErrorMessage()}
                <Separator />
                <Button secondary onPress={() => {
                    this.props.navigation.navigate('signup');
                } }>Sign Up</Button>
                <Button secondary onPress={() => {
                    this.props.navigation.navigate('forgetpassword');
                } }>Forget Password</Button>

                <Spinner visible={this.state.loading} />
                
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'stretch',
        marginRight: 10,
        marginLeft: 10
    },
    error: {
        margin: 8,
        marginBottom: 0,
        color: 'red',
        textAlign: 'center'
    }
})
