import React from 'react';

import { StyleSheet, SafeAreaView, ScrollView, Image } from 'react-native';
import { View, Drawer, Header, Left, Button, Text, Icon, Badge } from 'native-base';
import { Sidebar, Postcard } from './../Components'
import { TouchableOpacity } from 'react-native-gesture-handler';
import Notification from 'react-native-vector-icons/MaterialIcons'

export default class DrawerExample extends React.Component {
    constructor() {
        super();
        this.state = {

        }
    }
    static navigationOptions = {
        header: null
    };
    closeDrawer() { this.drawer._root.close() };

    openDrawer() {
        this.drawer._root.open()
    };
    render() {

        return (
            <Drawer ref={(ref) => { this.drawer = ref; }}
                content={<Sidebar path={this.props.path} navigator={this.navigator} onClose={() => this.closeDrawer()} />}

            >
                <Header style={{ backgroundColor: "rgb(183, 47, 47)" }}>
                    <Left style={{ flex: 1, alignSelf: "flex-start" }}>
                        <TouchableOpacity></TouchableOpacity>
                        <Button onPress={() => this.openDrawer()} transparent>
                            <Icon name='menu' />
                        </Button>

                        <View style={styles.icon_container}>
                            <Image
                                square
                                style={styles.logo}
                                source={require('./../Images/logo.png')} />
                        </View>

                    </Left>


                    <View>
                        <Notification name="notifications" size={30} style={{ marginTop: 10 }} color="grey" onPress={()=>this.props.path.navigate("Notification")} />
                    </View>


                </Header>
                <View style={styles.parent} >
                    <ScrollView style={styles.scrollView}>
                        <View>
                            {this.props.children}
                            <Postcard path={this.props.path} />
                            <Postcard path={this.props.path} />
                            <Postcard path={this.props.path} />
                            <Postcard path={this.props.path} />
                            <Postcard path={this.props.path} />

                        </View>
                    </ScrollView>

                </View>

            </Drawer>



        )
    }
}

const styles = StyleSheet.create({
    scrollView: {
        marginHorizontal: 1,
    },
    text: {
        fontSize: 42,
    },
    parent: {
        flex: 1,

    },
    icon_container: {
        borderRadius: 50,
        padding: 5,
        marginLeft: "45%",
        width: 60,
        height: 60,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
        marginTop: -25


    },
    logo: {
        height: 30,
        width: 30,
        marginTop: -15
    },
    label:{
        position:"absolute",
    }
});