import {
    StyleSheet, Text, View, SafeAreaView,
    Image, KeyboardAvoidingView, TextInput, Pressable
} from 'react-native'
import React, { useState } from 'react'
import filipkartLogo from '../assets/flipkart-logo.png'

const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState()
    const [Password, setPassword] = useState()
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
                        Login In to your Account
                    </Text>
                </View>

                <View style={{ marginTop: 70 }}>
                    <View style={{
                        flexDirection: 'row', alignItems: 'center',
                        gap: 5, backgroundColor: '#d0d0d0', paddingVertical: 5,
                        borderRadius: 5, marginTop: 30,
                    }}>
                        <Text style={{ marginLeft: 8, color: 'gray' }}>E-mail</Text>

                        <TextInput
                            value={email}
                            onChangeText={(text) => setEmail(text)}
                            style={{
                                color: 'gray', marginVertical: 10, width: 300, fontSize: email ? 16 : 16
                            }} placeholder='Enter your Email' />
                    </View>

                    <View style={{
                        flexDirection: 'row', alignItems: 'center',
                        gap: 5, backgroundColor: '#c3c3c3', paddingVertical: 5,
                        borderRadius: 5, marginTop: 30
                    }}>
                        <Text style={{ marginLeft: 8, color: 'gray' }}>Passw</Text>

                        <TextInput
                            value={Password}
                            onChangeText={(text) => setPassword(text)}
                            secureTextEntry={true}
                            style={{
                                color: 'gray', marginVertical: 10, width: 300, fontSize: Password ? 16 : 16
                            }} placeholder='Enter your Password' />
                    </View>
                </View>

                <View style={{ marginTop: 12, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Text style={{ color: 'gray', fontWeight: 'bold' }}>
                        Keep me logged in
                    </Text>

                    <Text style={{ color: '#007FFF', fontWeight: 'bold' }}>Forget Password</Text>
                </View>

                <View style={{ marginTop: 70 }} />

                <Pressable style={{
                    width: 200, backgroundColor: '#FEBE10',
                    borderRadius: 6, marginLeft: 'auto', marginRight: 'auto',
                    padding: 15, alignItems: 'center'
                }}>
                    <Text style={{ color: 'black', fontSize: 16, fontWeight: 'bold' }}>Login</Text>
                </Pressable>

                <Pressable
                    style={{ marginTop: 15, alignItems: 'center' }}
                    onPress={() => navigation.navigate('Register')}>
                    <Text style={{ color: 'gray', fontSize: 16 }}>
                        Don't have an account? Sign Up
                    </Text>
                </Pressable>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

export default LoginScreen

const styles = StyleSheet.create({})