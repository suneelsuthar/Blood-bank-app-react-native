import React, { Component } from 'react';
import { Container, Header, Content, Card, CardItem, Body, Icon, Button, List, ListItem } from 'native-base';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import Comment from './../../Components/Comment/Comment'
export default class Postcard extends Component {

  static navigationOptions = {
    title: 'My Requests',
    headerTintColor: "white",
headerStyle: {
  backgroundColor: 'rgb(183, 47, 47)'
},

  };


  render() {
    return (
      <View style={{ flex: 1 }}>
        <ScrollView>
          <Card  >


            <CardItem header bordered style={styles.header}>
              <Image
                square
                style={{
                  height: 30,
                  width: 30,
                  marginRight: 10,
                }}
                source={require('./../../Images/user.png')} />


              <Text>abdul qayooml</Text>
            </CardItem>
            <CardItem bordered >
              <Body >
                <Text style={{ fontWeight: "bold", fontSize: 15, color: "gray" }}>
                  3 unit of <Text style={{ fontFamily: "courier", fontWeight: "bold", fontSize: 18 }}>A+ positve</Text>  blood required.
                </Text>


                <Text>
                  Units required:<Text>3</Text>
                </Text>

                <Text>
                  Still required:<Text>1</Text>
                </Text>

                <Text>
                  Blood group:<Text>B+ positve</Text>
                </Text>

                <Text>
                  Location:<Text>karachi, sindh, Pakistan</Text>
                </Text>

                <Text>
                  Hospital:<Text>Indus Hospital</Text>
                </Text>

                <Text>
                  Urgency:<Text>Urgent</Text>
                </Text>

                <Text>
                  Relation with patient:<Text>Neighbour</Text>
                </Text>



                <Text>
                  Contact:03312732389
                </Text>

                <Text>
                  Additional instructions:call me when you reach hospital
                </Text>


                <Text>
                  Volunteers up till now:5
                </Text>

                <Text>
                  Current requirenment:2
                </Text>

              </Body>
            </CardItem>

          </Card>
          <ListItem>
            <Text style={{ color: "grey", fontWeight: "bold", fontSize: 18 }}>Volunteers</Text>
          </ListItem>




          {/* Volunteers box */}
          <Card  >
            <CardItem onPress={() => alert("working")}>
              <Body>
                <Text style={{ fontWeight: "bold", fontSize: 15, color: "gray" }}>
                  Rehan uddin <Text style={{ fontFamily: "courier", fontWeight: "bold", fontSize: 18 }}>O+ positve</Text>
                </Text>
                <Text style={{ color: "gray", fontWeight: "bold" }}>Exchange donation </Text>

                <CardItem footer bordered style={{ justifyContent: "center", alignItems: "center", marginTop: 10 }} >
                  <TouchableOpacity style={styles.btn} >
                    <Text style={styles.name}>
                      Donated
                  </Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.btn}>
                    <Text style={styles.name}>
                      Not Donated
                  </Text>
                  </TouchableOpacity>
                </CardItem>
              </Body>
            </CardItem>
          </Card>



          <Card  >
            <CardItem onPress={() => alert("working")}>
              <Body>
                <Text style={{ fontWeight: "bold", fontSize: 15, color: "gray" }}>
                  Rehan uddin <Text style={{ fontFamily: "courier", fontWeight: "bold", fontSize: 18 }}>O+ positve</Text>
                </Text>
                <Text style={{ color: "gray", fontWeight: "bold" }}>Exchange donation </Text>

                <CardItem footer bordered style={{ justifyContent: "center", alignItems: "center", marginTop: 10 }} >
                  <TouchableOpacity style={styles.btn} >
                    <Text style={styles.name}>
                      Donated
                  </Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.btn}>
                    <Text style={styles.name}>
                      Not Donated
                  </Text>
                  </TouchableOpacity>
                </CardItem>
              </Body>
            </CardItem>
          </Card>



          <Card  >
            <CardItem onPress={() => alert("working")}>
              <Body>
                <Text style={{ fontWeight: "bold", fontSize: 15, color: "gray" }}>
                  Rehan uddin <Text style={{ fontFamily: "courier", fontWeight: "bold", fontSize: 18 }}>O+ positve</Text>
                </Text>
                <Text style={{ color: "gray", fontWeight: "bold" }}>Exchange donation </Text>

                <CardItem footer bordered style={{ justifyContent: "center", alignItems: "center", marginTop: 10 }} >
                  <TouchableOpacity style={styles.btn} >
                    <Text style={styles.name}>
                      Donated
                  </Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.btn}>
                    <Text style={styles.name}>
                      Not Donated
                  </Text>
                  </TouchableOpacity>
                </CardItem>
              </Body>
            </CardItem>
          </Card>


          <ListItem>
            <Text style={{ color: "grey", fontWeight: "bold", fontSize: 18 }}>Comments</Text>
          </ListItem>
          <Comment />
        </ScrollView>
      </View>

    );
  }
}




const styles = StyleSheet.create({
  btn: {
    borderWidth: 1,
    borderColor: "grey",
    width: "50%",
    borderColor: "grey",
    padding: 6,
    alignItems: "center",
    color: "gray",
  },
  name: {
    color: "grey",
    fontFamily: "courier",
    fontSize: 17,
    fontWeight: "bold"
  },
  header: {
    backgroundColor: "rgb(255, 249, 249)"
  },
  List: {
    marginBottom: 5,
  }

})