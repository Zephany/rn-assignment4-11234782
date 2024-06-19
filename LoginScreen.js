import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const AppleImage = require('./assets/apple.png');
const GoogleImage = require('./assets/google.png');
const FacebookImage = require('./assets/facebook.png');


export default function LoginScreen({ navigation }) {
    const [name, setName] = useState ('');
    const [email, setEmail] = useState ('');

    const handleLogin = () => {
        navigation.navigate('Home', {name, email});
    };

    return (
        <View style={styles.container}>
            <View style={styles.info}>
                <Text style={styles.title}>Jobizz</Text>
                <Text style={styles.welcome}>Welcome Back 👋</Text>
                <Text style={styles.message1}>Let's log in. Apply to jobs!</Text>
            </View>
            <View style={styles.inputBox}>
                <TextInput 
                    style={styles.input}
                    placeholder='Name'
                    value= { name }
                    onChangeText={ setName }
                
                />
                <TextInput 
                    style={styles.input}
                    placeholder='Email'
                    value= { email }
                    onChangeText={ setEmail }
                />
                <TouchableOpacity style={styles.button} onPress={handleLogin}>
                    <Text style={styles.buttonText}>Log in</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.message2}>
                <View style={styles.line}></View>
                <Text style={styles.message2Text}>Or continue with</Text>
                <View style={styles.line}></View>
            </View>
            <View style={styles.accountBox}>
                <TouchableOpacity>
                <Image source={ AppleImage}/>
                </TouchableOpacity>
                <TouchableOpacity>
                <Image source={ GoogleImage}/>
                </TouchableOpacity>
                <TouchableOpacity>
                <Image source={ FacebookImage}/>
                </TouchableOpacity>
            </View>
            <View style={styles.register}>
                <Text style={styles.registerText}>Haven't an account? </Text>
                <TouchableOpacity>
                    <Text style={styles.registerLink}>Register</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        height: hp('100%'),
        width: wp('100%'),
        paddingLeft: wp('5%'),
        paddingRight: wp('5%'),
    },

    info: {
        marginTop: hp('12%'),  
        fontFamily: 'Poppins',
    },

    title: {
        fontSize: hp('4%'),
        color: '#356899',
        fontWeight: '600',
        marginBottom: hp('1%'),
    },

    welcome: {
        fontSize: hp('4.5%'),
        color: '#0D0D26',
        fontWeight: '600',
        marginBottom: hp('1%'),
    },

    message1: {
        fontSize: hp('2%'),
        color: '#',
        fontWeight: '400',
        opacity:0.5,
    },

    inputBox: {
        height: hp('30%'),
        marginTop: hp('6%'),
    },

    input: {
        height: hp('8%'),
        marginBottom: hp('2%'),
        paddingLeft: wp('4%'),
        fontSize: hp('2.5%'),
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#AFB0B6'
    },

    button: {
        height: hp('8%'),
        backgroundColor: '#356899',
        marginTop: hp('2%'),
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        

    },

    buttonText: {
        fontSize: hp('2.5%'),
        color: 'white'
    }, 

    message2: {
        marginTop: hp('7%'),
        flexDirection: 'row',
        alignItems: 'center',    
          
    },

    line: {
        flex: 1,
        height: 1,
        backgroundColor: '#AFB0B6',
        
    },

    message2Text: {
        width: wp('30%'),
        textAlign: 'center',
        color: '#AFB0B6',
        fontFamily: 'Circular Std',
        fontSize: hp('2%'),
    },

    accountBox: {
        flexDirection: 'row',
        alignSelf: 'center',
    },

    register:{
        flexDirection: 'row',
        alignSelf: 'center',
        marginTop: hp('2%'),
        fontFamily: 'Circular Std',
    },

    registerText: {
        color: '#BDBEC2'
    },

    registerLink: {
        color: '#0000FF'
    },


})