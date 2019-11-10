import React, { Component } from 'react';
import { Container, Header, Content, Card, CardItem, Body,Icon,Button  } from 'native-base';
import { View ,Text,Image,TouchableOpacity,StyleSheet} from 'react-native';

export default class Postcard extends Component {
 
  
  render() {
    return (
      <View   >
       <Card style={{flex:1}}  >
    
       <TouchableOpacity onPress={() => this.props.path.navigate("PostDetail")} >

          <CardItem header bordered style={styles.header}>
            <Image
                square
                style={{
                    height: 30,
                    width: 30,
                    marginRight:10,
                  }}
                  source={require('./../Images/user.png')} />
                          

              <Text>abdul qayooml</Text>
            </CardItem>
            <CardItem bordered >
              <Body >
                <Text style={{fontWeight:"bold",fontSize:15,color:"gray"}}>
                  3 unit of <Text style={{fontFamily:"courier",fontWeight:"bold",fontSize:18}}>A+ positve</Text>  blood required.
                </Text>


                <Text>
                 At Indus hospital for my friend
                </Text>

                <Text>
                  Urgency:urgent
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
          </TouchableOpacity>

 
  <View style={{flex: 1}}>
    <Text style={{textAlign: 'right',color:"grey"}}><Text>4 Volunteers <Text>10 Comments</Text> </Text></Text>
  </View>

      
            <CardItem footer bordered style={{justifyContent:"center",alignItems:"center"}} >
           
           <TouchableOpacity style={styles.btn} >
             <Text style={styles.name}>
               Volunteer
             </Text>
           </TouchableOpacity>

           <TouchableOpacity style={styles.btn}  onPress={() => this.props.path.navigate("PostDetail")}>
             <Text style={styles.name}>
               Comments
             </Text>
           </TouchableOpacity>


            </CardItem>
          </Card>
         </View>
       
    );
  }
}


const styles = StyleSheet.create({
  btn: {
    borderWidth:1,
    borderColor:"grey",
    width:"50%",
    borderColor:"grey",
    padding:6,
    margin:3,
    alignItems:"center",
    borderRadius:5,
    color:"gray",
  },
  name:{
    color:"grey",
    fontFamily:"courier",
    fontSize:17,
    fontWeight:"bold"
  },
  header:{
    backgroundColor:"rgb(255, 249, 249)"
  }

})