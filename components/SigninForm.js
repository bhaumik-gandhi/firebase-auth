import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { FormLabel, FormInput, Button} from 'react-native-elements';
import axios from 'axios';
import firebase from 'firebase';

const ROOT_URL = 'https://us-central1-one-time-password-83c5f.cloudfunctions.net';

class SigninForm extends Component {
    state = { phone: '', code: '' };
    
    handleSubmit = async () => {
        try {
            let { data }  = await axios.post(`${ROOT_URL}/verifyOneTimePassword`, { 
                phone: this.state.phone,
                code: this.state.code
            });
            
            firebase.auth().signInWithCustomToken(data.token);
        } catch (err) {
            console.error(err);
        }
    }

    render() {
        return (
            <View style={{ marginBottom: 10 }}>
                <FormLabel>
                    Enter Phone Number
                </FormLabel>
                <FormInput 
                    value={this.state.phone}
                    onChangeText={phone => this.setState({ phone })}
                />
                <FormLabel>
                    Enter Code
                </FormLabel>
                <FormInput 
                    value={this.state.code}
                    onChangeText={code => this.setState({ code })}
                />
                <Button
                    onPress={this.handleSubmit}
                    title='Submit'
                />
            </View>
        );
    }
}

export default SigninForm;