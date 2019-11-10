import React from 'react'
import { Text, View, Image, TextInput,ScrollView } from 'react-native'
import { Container, Header, Content, Item, Input, Icon } from 'native-base';

import styles from './Style'

export default class Comment extends React.Component {
  render() {
    return (
      <View style={{flex:1}}>
        <View style={{flex:1}}>

        <View style={styles.commentContainer}>
          <Image source={require('../../Images/user.png')} style={styles.image} />
          <View style={styles.rightContent}>
            <Text> good workng! </Text>
          </View>
        </View>


        <View style={styles.commentContainer}>
          <Image source={require('../../Images/user.png')} style={styles.image} />
          <View style={styles.rightContent}>
            <Text> Awesome workng! </Text>
          </View>
        </View>


        <View style={styles.commentContainer}>
          <Image source={require('../../Images/user.png')} style={styles.image} />
          <View style={styles.rightContent}>
            <Text> outstanding workng! </Text>
          </View>
        </View>


        <View style={styles.commentContainer}>
          <Image source={require('../../Images/user.png')} style={styles.image} />
          <View style={styles.rightContent}>
            <Text> outstanding workng! </Text>
          </View>
        </View>


        <View style={styles.inputSection}>

          <Item style={{ borderTopWidth: 1, borderLeftWidth: 1, borderRightWidth: 1, borderRadius: 50, marginBottom: 5 }}>
            <Input placeholder='write comment....' style={{ fontSize: 12, paddingLeft: 15, height: 40 }} />
            <Icon name='checkmark-circle' />
          </Item>
        </View>
        </View>
      </View>

    )
  }
}
