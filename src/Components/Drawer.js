import React from 'react'
import { AppRegistry, Image, StatusBar, View } from "react-native";

import {
    Button,
    Text,
    Container,
    List,
    ListItem,
    Content,
    Icon
} from "native-base"

import Postcard from './Postcard'
export default class Drawer extends React.Component {


    render() {
        return (
            <View style={{flex: 1, marginTop: 55}}>
                <Container >
                    <Content style={{ flex: 1 ,backgroundColor:"rgb(237, 239, 244)"}}>
                    
<View style={{backgroundColor:"rgb(242, 144, 142)",paddingBottom:"15%"}}>
                        <View
                            style={{
                                height: 120,
                                width: "100%",
                                alignSelf: "stretch",
                            }}
                        >

                            <View>
                                <Image
                                    square
                                    style={{
                                        height: 70,
                                        width: 70,
                                        alignSelf: "center",
                                        top: 30,
                                    }}
                                    source={require('./../Images/user.png')} />
                          
                            

                            </View>
                        </View>
                                <Text style={{textAlign:"center",fontSize:24}}>suneel chouhan</Text>
                        </View>

                        <List>
                            <ListItem
                                button
                                onPress={() => this.props.path.navigate("Home")}
                            >
                                <Text>Homes</Text>
                            </ListItem>

                            <ListItem
                                button
                                onPress={() => this.props.path.navigate("Request")}
                            >
                                <Text>My Requests</Text>
                            </ListItem>


                            <ListItem
                                button
                                onPress={() => this.props.path.navigate("Post")}
                            >
                                <Text>Post requirenments</Text>
                            </ListItem>


                            <ListItem
                                button
                                onPress={() => this.props.path.navigate("Notification")}
                            >
                                <Text>Notification</Text>
                            </ListItem>

                            <ListItem
                                button
                                onPress={() => this.props.path.navigate("Setting")}
                            >
                                <Text>Setting</Text>
                            </ListItem>
                        </List>


                    </Content>
                </Container>

            </View>
        )
    }
}