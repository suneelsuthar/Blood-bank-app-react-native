import React from 'react'
import {TouchableOpacity} from 'react-native'
import { Container, Header, Content, Card, CardItem, Body, Text,Button, View } from 'native-base';

export default class Request extends React.Component{
    static navigationOptions = {
        title: 'My Requests',
        headerTintColor: "white",
    headerStyle: {
      backgroundColor: 'rgb(183, 47, 47)'
    },

      };


    render(){
        return(
            <Container>
                <TouchableOpacity onPress={()=>this.props.navigation.navigate("RequestDatail")}>          
                    <Card  >
            <CardItem onPress={()=>alert("working")}>
              <Body>
              <Text style={{fontWeight:"bold",fontSize:15,color:"gray"}}>
                 Required 3 unit of <Text style={{fontFamily:"courier",fontWeight:"bold",fontSize:18}}>A+ positve</Text>  blood at  Ziaudin hospital.
                </Text>

                <Text style={{color:"gray",fontWeight:"bold"}}>Status: Not fullfilled </Text>
              </Body>
            </CardItem>
          </Card>
          </TouchableOpacity>

      </Container>
        )
    }
}