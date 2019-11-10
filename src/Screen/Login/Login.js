import React from 'react'
import { View, Text, TextInput, Switch, Button, TouchableOpacity, Image } from 'react-native'
import { styles } from './../../Styles/Style'
import Icon from 'react-native-vector-icons/Entypo'
import Logo from './../../Images/logo.png'
import { Signup } from '../index'



class Login extends React.Component {



    constructor() {
        super()
        this.state = {
            password: true,
        }
    }


    static navigationOptions = {
        header: null
    }







    render() {
        const { password } = this.state;
        console.log(this.state)
        return (

            <View style={styles.container}>
                {password ?
                    <View>
                        <View style={{ justifyContent: "center", alignItems: "center" }}>
                            <Image source={require('../../Images/logo.png')} style={{ width: 150, height: 150, borderWidth: 1, borderColor: "rgb(198, 0, 0)", borderRadius: 100 }} />
                        </View>

                        <Text style={styles.name}>
                            Blood Donation
                </Text>

                        <View>
                            <TextInput style={styles.username}
                                placeholder="Phone number, email or username"
                                keyboardType="email-address"
                                underlineColorAndroid='transparent'
                                onChangeText={(email) => this.setState({ email })} />

                            <TextInput style={styles.username}
                                secureTextEntry={true}
                                placeholder="Password"
                                underlineColorAndroid='transparent'
                                onChangeText={(password) => this.setState({ password })} />
                            <View>

                            <View>
                                    <TouchableOpacity style={styles.login}  onPress={() => this.props.navigation.navigate("Home")} >
                                        <Text style={{ textAlign: "center", color: "white" }}>Login</Text>
                                    </TouchableOpacity>
                                </View>

                                <Text style={{ color: "grey", margin: 10, textAlign: "center" }}>Forgot your login details? <Text style={{ color: "black", fontWeight: "bold" }}>Get help Sign in.</Text></Text>
                            </View>
                            <View>


                                <View style={styles.seperator}>
                                    <Text style={{ padding: 10, borderRadius: 50, borderWidth: 1, borderColor: 'rgb(206, 202, 202)', width: 40, height: 40, alignSelf: "center", backgroundColor: "white", marginBottom: -20 }}>OR</Text>
                                </View>

                                

                            </View>


                        </View>
                    </View> : <Signup />}
                {password ?
                    <Text style={{ color: "grey", marginTop: 20, textAlign: "center" }}>Don't have an account <Text style={{ color: "black", fontWeight: "bold" }} onPress={() => { this.setState({ password: false }) }}>Sign up</Text></Text>
                    :
                    <Text style={{ color: "grey", marginTop: 20, textAlign: "center" }}>already have an account <Text style={{ color: "black", fontWeight: "bold" }} onPress={() => this.setState({ password: true })} >loign</Text></Text>
                }
            </View>
        )
    }
}

export default Login