import React from 'react'
import {View,Text,Image} from 'react-native'
import { Icon } from "react-native-elements";
import { styles } from './../../Styles/Style'
import {CustomSidebarMenu } from './../../Components'

// import Icon from 'react-native-vector-icons/Feather'



export default class Home extends React.Component{

    static navigationOptions = {
      header:null,
      //   headerTitle: (
      //       <View style={{flex: 1,justifyContent:"center",alignItems:"center"}} >
      //           {/* <View style={{width:60,height:60,borderWidth:1,borderRadius:100,borderColor:"grey",backgroundColor:"white"}></View> */}
      //           <Image style={{width:40,height:40,borderRadius:100,backgroundColor:"white"}} source={require('../../Images/logo.png')}/>
      //       </View>
      //   ),
      //   headerTitleStyle: { 
      //   textAlign:"center", 
      //   flex:1 
      // },
      

      //   headerLeft: (
      //       <View style={styles.iconContainer}>
      //       {/* <Icon name="align-justify" /> */}
      //       {/* icon */}
      //     </View>
      //   ),
      //   headerRight: (
      //     <View style={styles.iconContainer}>
      //       <Icon type="ionicon" name={Platform.OS === "ios" ? "ios-more" : "md-more"} />
      //     </View>
      //   )
      };


    render(){
        return(
            <View style={{flex:1}}>
                <CustomSidebarMenu path={this.props.navigation}/>
            </View>
        )
    }
}