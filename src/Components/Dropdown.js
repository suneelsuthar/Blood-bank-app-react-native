import React, { Component } from "react";
import {Icon, Picker } from "native-base";
import { View } from "react-native";
import {connect} from 'react-redux'
import {select_Data} from './../Store/Action/Main_action'
// import { Dropdown } from ".";

class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: "key0"
    };
  }
  onValueChange(value) {
    this.setState({
      selected: value
    });
  }

  static getDerivedStateFromProps (props,state){
    props.select_Data(state)
  }

  render() {
      console.log(this.props.data)
    return (
        <View style={{ borderWidth:1,borderColor:'rgb(206, 202, 202)',borderRadius:3,marginBottom:"10%",height:45,}}>      
            <Picker
              mode="dropdown"
              iosHeader="Select your SIM"
              iosIcon={<Icon name="arrow-dropdown-circle" style={{ color: "#007aff", fontSize: 25 }} />}
              style={{ width: undefined,color:"grey" }}
              selectedValue={this.state.selected}
              onValueChange={this.onValueChange.bind(this)}
            >
                
              <Picker.Item label="Blood group" value="key0 "/>
              <Picker.Item label="A Positive " value="A Positive" />
              <Picker.Item label=" B Positive " value="B Positive" />
              <Picker.Item label="O Positive " value="O Positive" />
              <Picker.Item label="A Negative " value="A Negative" />
              <Picker.Item label="B Negative  " value="B Negative" />
              <Picker.Item label="O Negative  " value="O Negative" />

            </Picker>
            </View>
 
         
    );
  }
}


const mapStateToProps = state => {
    console.log("=============>",state)
    return {
      
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
        select_Data: (data) => dispatch(select_Data(data)),
    }
  }


  export default connect(mapDispatchToProps,mapDispatchToProps)(Dropdown)

