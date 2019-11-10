import React from 'react'
import { StyleSheet, View, Text, TextInput, Switch, Button, TouchableOpacity, Image, SafeAreaView, ScrollView } from 'react-native'
import { Item, Input, Picker } from 'native-base';
import Icon from 'react-native-vector-icons/Entypo'
import { select_Data } from './../../Store/Action/Main_action'

// import { Dropdown } from './../../Components'
import { connect } from 'react-redux'


data = {
    bloodGroup: ["Blood group", "A+ Positive", "B+ Positive", "O+ Positive", "A- Negative", "B- Negative", "O- Negative"],
    urgency: ["Urgent", "Within 5 hours", "Within 12 hours", "Within 24 hours", "Within 2 days", "Within week"],
    hospitals: ["Indus Hospital", "Zia uddin Hospital", "Agah Khan Hospital", "OMI", "Jinnah Hospital", "Holy Family Hospital"],
    relation: ["Father", "Mother", "Son", "Daughter", "Aunt", "Uncle", "Nephew", "Niece", "Friend", "Neighbour", "None"],
    status: ["Not fullfilled", "Completed"],
    country: ["Pakistan", "India", "Bangladesh", "Nepal", "Srilinka"],
    state: ["Sindh", "Panjab", "Balochistan", "KPK", "FATA"],
    city: ["Karachi", "Hyderabad", "Lahore", "Islamabad", "Dadu"]

}


class Post extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selected: "key0",
            next: true
        };
    }
    static navigationOptions = {
        title: 'Requirenment',
        headerTintColor: "white",
    headerStyle: {
      backgroundColor: 'rgb(183, 47, 47)'
    },
    };




    onValueChange(value) {
        alert(value)
        this.setState({
            [value]: value
        });

    }
    render() {
        let { bloodGroup, unit, urgency, hospitals, relation, next } = this.state
        console.log(this.state)
        return (
            <View style={styles.container} >
                {next ?




                    <View style={{ padding: 10 }}>
                        <Text style={styles.title}>Blood group:</Text>
                        <View style={{ borderWidth: 1, borderColor: 'rgb(206, 202, 202)', borderRadius: 3, marginBottom: "10%", height: 45, }}>
                            <Picker
                                mode="dropdown"
                                iosIcon={<Icon name="arrow-dropdown-circle" style={{ color: "#007aff", fontSize: 25 }} />}
                                style={{ width: undefined, color: "grey" }}
                                selectedValue={this.state.bloodGroup}
                                onValueChange={(value) => this.setState({ bloodGroup: value })}

                            >
                                {data.bloodGroup.map((val, i) => <Picker.Item label={val} value={val} />)}

                            </Picker>
                        </View>


                        <Text style={styles.title}>No. of Units required:</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="units"
                            type="number"
                            onChangeText={(e) => this.setState({ unit: e })}
                        />



                        <Text style={styles.title}>Urgency:</Text>
                        <View style={{ borderWidth: 1, borderColor: 'rgb(206, 202, 202)', borderRadius: 3, marginBottom: "10%", height: 45, }}>

                            <Picker
                                mode="dropdown"
                                iosHeader="Select your SIM"
                                iosIcon={<Icon name="arrow-dropdown-circle" style={{ color: "#007aff", fontSize: 25 }} />}
                                style={{ width: undefined, color: "grey" }}
                                selectedValue={this.state.urgency}
                                onValueChange={(value) => this.setState({ urgency: value })}

                            >

                                {data.urgency.map((val, i) => <Picker.Item label={val} value={val} />)}
                            </Picker>
                        </View>






                        <Text style={styles.title}>Hospital:</Text>
                        <View style={{ borderWidth: 1, borderColor: 'rgb(206, 202, 202)', borderRadius: 3, marginBottom: "10%", height: 45, }}>

                            <Picker
                                mode="dropdown"
                                iosIcon={<Icon name="arrow-dropdown-circle" style={{ color: "#007aff", fontSize: 25 }} />}
                                style={{ width: undefined, color: "grey" }}
                                selectedValue={this.state.hospitals}
                                onValueChange={(value) => this.setState({ hospitals: value })}
                            >
                                {data.hospitals.map((val, i) => <Picker.Item label={val} value={val} />)}

                            </Picker>
                        </View>



                        <Text style={styles.title}>Relation with patient:</Text>
                        <View style={{ borderWidth: 1, borderColor: 'rgb(206, 202, 202)', borderRadius: 3, marginBottom: "10%", height: 45, }}>

                            <Picker
                                mode="dropdown"
                                iosIcon={<Icon name="arrow-dropdown-circle" style={{ color: "#007aff", fontSize: 25 }} />}
                                style={{ width: undefined, color: "grey" }}
                                selectedValue={this.state.relation}
                                onValueChange={(value) => this.setState({ relation: value })}

                            >
                                {data.relation.map((val, i) => <Picker.Item label={val} value={val} />)}


                            </Picker>
                        </View>

                        {bloodGroup && unit && urgency && hospitals && relation ?

                            <Item rounded style={{ alignItems: "center", justifyContent: "center", padding: 15, backgroundColor: "rgb(183, 47, 47)" }} onPress={(data) => this.setState({ next: false })}>
                                <Text style={styles.next}>
                                    NEXT
                           <Icon name="arrow-long-right" style={{ marginLeft: 10 }} />
                                </Text>
                            </Item>
                            :


                            <Item disabled={true} rounded style={{ alignItems: "center", justifyContent: "center", padding: 15, backgroundColor: "grey" }} onPress={(data) => this.props.select_Data(this.state)}>
                                <Text disabled={true} style={styles.next}>
                                    NEXT
                           <Icon name="arrow-long-right" style={{ marginLeft: 10 }} />
                                </Text>
                            </Item>
                        }
                    </View> :

                    <View style={{ padding: 10,flex:1 }}>

                        <Text style={styles.title}>Country:</Text>
                        <View style={{ borderWidth: 1, borderColor: 'rgb(206, 202, 202)', borderRadius: 3, marginBottom: "10%", height: 45, }}>

                            <Picker
                                mode="dropdown"
                                iosIcon={<Icon name="arrow-dropdown-circle" style={{ color: "#007aff", fontSize: 25 }} />}
                                style={{ width: undefined, color: "grey" }}
                                selectedValue={this.state.relation}
                                onValueChange={(value) => this.setState({ country: value })}

                            >
                                {data.country.map((val, i) => <Picker.Item label={val} value={val} />)}

                            </Picker>
                        </View>




                        <Text style={styles.title}>State:</Text>
                        <View style={{ borderWidth: 1, borderColor: 'rgb(206, 202, 202)', borderRadius: 3, marginBottom: "10%", height: 45, }}>
                            <Picker
                                mode="dropdown"
                                iosIcon={<Icon name="arrow-dropdown-circle" style={{ color: "#007aff", fontSize: 25 }} />}
                                style={{ width: undefined, color: "grey" }}
                                selectedValue={this.state.relation}
                                onValueChange={(value) => this.setState({ state: value })}
                            >
                                {data.state.map((val, i) => <Picker.Item label={val} value={val} />)}
                            </Picker>
                        </View>



                        <Text style={styles.title}>City:</Text>
                        <View style={{ borderWidth: 1, borderColor: 'rgb(206, 202, 202)', borderRadius: 3, marginBottom: "10%", height: 45, }}>
                            <Picker
                                mode="dropdown"
                                iosIcon={<Icon name="arrow-dropdown-circle" style={{ color: "#007aff", fontSize: 25 }} />}
                                style={{ width: undefined, color: "grey" }}
                                selectedValue={this.state.relation}
                                onValueChange={(value) => this.setState({ city: value })}

                            >
                                {data.city.map((val, i) => <Picker.Item label={val} value={val} />)}
                            </Picker>
                        </View>

                        <Text style={styles.title}>Contact No:</Text>
                        <TextInput
                            style={styles.input}
                            secureTextEntry={true}
                            placeholder="Phone number"
                            onChangeText={(value) => this.setState({ contact: value })} />


                        <Text style={styles.title}>Additional Instruction:</Text>
                        <View style={styles.textAreaContainer} >
                            <TextInput
                                style={styles.textArea}
                                underlineColorAndroid="transparent"
                                placeholder="Type something"
                                placeholderTextColor="grey"
                                numberOfLines={10}
                                multiline={true}
                            />
                        </View>



                        <Item rounded style={{ alignItems: "center", justifyContent: "center", padding: 15, backgroundColor: "rgb(183, 47, 47)" }} onPress={(data) => this.props.select_Data(this.state)}>
                            <Text style={styles.next}>
                                POST
                                </Text>
                        </Item>

                    </View>}





            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
    },
    input: {
        borderWidth: 1,
        padding: 5,
        height: 45,
        borderColor: 'rgb(206, 202, 202)',
        borderRadius: 3,
        marginBottom: "7%",

    },
    title: {
        color: "grey",
        paddingBottom: 1,
        fontFamily: "courier",
        fontWeight: "bold"
    },
    next: {
        color: "white",
    },
    textAreaContainer: {
        borderColor: "grey",
        borderWidth: 1,
        padding: 5,
        marginBottom: "10%",
        borderRadius: 5,
        borderStyle: "dotted"
    },
    textArea: {
        height: 70,
        justifyContent: "flex-start"
    }


})



const mapStateToProps = state => {
    console.log("=============>", state)
    return {

    }
}

const mapDispatchToProps = dispatch => {
    return {
        select_Data: (data) => dispatch(select_Data(data)),
    }
}


export default connect(mapDispatchToProps, mapDispatchToProps)(Post)
