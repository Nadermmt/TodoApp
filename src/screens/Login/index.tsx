import React, {useState} from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import {Colors} from "../../assets";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {styles} from './styles';

const Login = ({ navigation }) => {
    const [passCode, setPassCode] = useState('');

    const onLogin = async () => {
        if (passCode === '1234') {
            await AsyncStorage.setItem('isUserLoggedIn', JSON.stringify(true))
            navigation.navigate('Home');
        }
    };

    return (
        <View style={styles.container}>
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <TextInput
                    style={{width: '50%', borderWidth: 1, borderColor: Colors.grey, padding: 4, color: Colors.black}}
                    onChangeText={text => setPassCode(text)}
                    keyboardType={'number-pad'}
                />
                <TouchableOpacity onPress={onLogin}>
                    <Text style={{color: Colors.black}}>Login</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Login;