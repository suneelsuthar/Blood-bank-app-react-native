import React from 'react'
import { Container, Header, Content, Button, ListItem, Text, Icon, Left, Body, Right, Switch } from 'native-base';
import VectorIcon from 'react-native-vector-icons/FontAwesome5'
import LogouIcon from 'react-native-vector-icons/MaterialCommunityIcons'





export default class Setting extends React.Component{
    static navigationOptions = {
        title: 'Setting',
        headerTintColor: "white",
        headerStyle: {
          backgroundColor: 'rgb(183, 47, 47)'
        }
      };
   
    render(){
        return(
            <Container>
            <Content>
              <ListItem icon>
                <Left>
                  <Button style={{ backgroundColor: "#007AFF" }}>
                    <VectorIcon name="user-edit" />
                  </Button>
                </Left>
                <Body>
                  <Text>Wi-Fi</Text>
                </Body>
                <Right>
                  <Icon active name="arrow-forward" />
                </Right>
              </ListItem>
             
              <ListItem icon>
                <Left>
                  <Button style={{ backgroundColor: "#007AFF" }}>
                  <VectorIcon name="edit" />

                  </Button>
                </Left>
                <Body>
                  <Text>Change password</Text>
                </Body>
                <Right>
                  <Icon active name="arrow-forward" />
                </Right>
              </ListItem>



               <ListItem icon>
                <Left>
                  <Button style={{ backgroundColor: "#007AFF" }}>
                  <LogouIcon name="logout-variant" />

                  </Button>
                </Left>
                <Body>
                  <Text>Logout</Text>
                </Body>
                <Right>
                  <Icon active name="arrow-forward" />
                </Right>
              </ListItem>



            </Content>
          </Container>
        )
    }
}