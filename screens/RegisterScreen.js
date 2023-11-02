import { Text, View, SafeAreaView, Image, KeyboardAvoidingView, TextInput, Pressable, Alert } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import filipkartLogo from '../assets/flipkart-logo.png'
import axios from 'axios'

const RegisterScreen = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigation = useNavigation()

    useEffect(() => {
        handleRegister()
    }, [])


    const handleRegister = () => {
        console.log(">>>", name, email, password);
        const user = {
            name: name,
            email: email,
            password: password
        }
        //send A post request to the backend API
        axios.post("http://192.168.1.13:8000/register", user)
            .then((response) => {
                console.log(response);
                Alert.alert(
                    "Registration Successfully",
                    "You have registered successfully"
                );
                setName("");
                setEmail("");
                setPassword("");
            })
            .catch((error) => {
                Alert.alert(
                    "Registration Error",
                    "An error occurred during registration. Please check your network connection."
                );
                console.log("Registration Error:", error);
            });
    }


    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white', alignItems: 'center' }}>
            <View>
                <Image
                    style={{ height: 100, width: 150 }}
                    source={filipkartLogo}></Image>
            </View>


            <KeyboardAvoidingView>
                <View style={{ alignItems: 'center' }}>
                    <Text style={{ fontSize: 17, fontWeight: 'bold', marginTop: 12, color: '#041E42' }}>
                        Register to your Account
                    </Text>
                </View>

                <View style={{ marginTop: 70 }}>
                    <View style={{
                        flexDirection: 'row', alignItems: 'center',
                        gap: 5, backgroundColor: '#d0d0d0', paddingVertical: 5,
                        borderRadius: 5, marginTop: 30,
                    }}>
                        <Text style={{ marginLeft: 8, color: 'gray' }}>name</Text>

                        <TextInput
                            value={name}
                            onChangeText={(text) => setName(text)}
                            style={{
                                color: 'gray', marginVertical: 10, width: 300, fontSize: name ? 16 : 16
                            }} placeholder='enter your name' />
                    </View>

                    <View style={{
                        flexDirection: 'row', alignItems: 'center',
                        gap: 5, backgroundColor: '#c3c3c3', paddingVertical: 5,
                        borderRadius: 5, marginTop: 30
                    }}>
                        <Text style={{ marginLeft: 8, color: 'gray' }}>email</Text>

                        <TextInput
                            value={email}
                            onChangeText={(text) => setEmail(text)}
                            // secureTextEntry={true}
                            style={{
                                color: 'gray', marginVertical: 10, width: 300, fontSize: email ? 16 : 16
                            }} placeholder='enter your email' />
                    </View>
                </View>

                <View style={{
                    flexDirection: 'row', alignItems: 'center',
                    gap: 5, backgroundColor: '#c3c3c3', paddingVertical: 5,
                    borderRadius: 5, marginTop: 30
                }}>
                    <Text style={{ marginLeft: 8, color: 'gray' }}>Passw</Text>

                    <TextInput
                        value={password}
                        onChangeText={(text) => setPassword(text)}
                        secureTextEntry={true}
                        style={{
                            color: 'gray', marginVertical: 10, width: 300, fontSize: password ? 16 : 16
                        }} placeholder='enter your password' />
                </View>

                <View style={{ marginTop: 12, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Text style={{ color: 'gray', fontWeight: 'bold' }}>
                        Keep me logged in
                    </Text>

                    <Text style={{ color: '#007FFF', fontWeight: 'bold' }}>Forget Password</Text>
                </View>

                <View style={{ marginTop: 70 }} />

                <Pressable
                    onPress={handleRegister}
                    style={{
                        width: 200, backgroundColor: '#FEBE10',
                        borderRadius: 6, marginLeft: 'auto', marginRight: 'auto',
                        padding: 15, alignItems: 'center'
                    }}>
                    <Text style={{ color: 'black', fontSize: 16, fontWeight: 'bold' }}>Register</Text>
                </Pressable>

                <Pressable
                    style={{ marginTop: 15, alignItems: 'center' }}
                // onPress={() => navigation.navigate('Register')}
                >
                    <Text style={{ color: 'gray', fontSize: 16 }}>
                        Don't have an account? Sign Up
                    </Text>
                </Pressable>
            </KeyboardAvoidingView>
        </SafeAreaView >
    )
}

export default RegisterScreen