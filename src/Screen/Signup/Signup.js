import React from 'react'
import { View, Text, TextInput, Switch, Button, TouchableOpacity, Image,SafeAreaView, ScrollView  } from 'react-native'
import { styles } from './../../Styles/Style'
import Icon from 'react-native-vector-icons/Entypo'
import Logo from './../../Images/logo.png'
import {Picker} from './../../Components'



class Signup extends React.Component {
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

            <View >
      <ScrollView >
                <View style={{ justifyContent: "center", alignItems: "center" }}>
                    <Image source={require('../../Images/logo.png')} style={{ width: 140, height: 140, borderWidth: 1, borderColor: "rgb(198, 0, 0)", borderRadius: 100 }} />
                </View>

                <Text style={styles.name}>
                    Be donar save life
                </Text>

                <View>
                    <TextInput style={styles.username}
                        placeholder="First name"
                        keyboardType="email-address"
                        underlineColorAndroid='transparent'
                        onChangeText={(email) => this.setState({ email })} />

                   
                    <TextInput style={styles.username}
                        secureTextEntry={true}
                        placeholder="Last name"
                        underlineColorAndroid='transparent'
                        onChangeText={(password) => this.setState({ password })} />


                    <TextInput style={styles.username}
                        secureTextEntry={true}
                        placeholder="Email"
                        underlineColorAndroid='transparent'
                        onChangeText={(password) => this.setState({ password })} />

                    <Picker />



                    <TextInput style={styles.username}
                        secureTextEntry={true}
                        placeholder="Password"
                        underlineColorAndroid='transparent'
                        onChangeText={(password) => this.setState({ password })} /> 
                    
                    <View>

                    <TouchableOpacity style={styles.login} >
                            <Text style={{textAlign:"center",color:"white"}}>Signup</Text>
                      </TouchableOpacity>
                        
                    </View>
                </View>

                </ScrollView>
            </View>
        )
    }
}

export default Signup