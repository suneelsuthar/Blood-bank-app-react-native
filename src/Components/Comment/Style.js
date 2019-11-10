import { StyleSheet, PixelRatio } from 'react-native'

module.exports = StyleSheet.create({
  commentContainer: {
    padding: 5,
    flexDirection: 'row'
  },
  left: {
    padding: 5
  },
  image: {
    height: 30,
    width: 30,
    borderRadius: 40,
    marginRight:5,
  },
  right: {
    flex: 1,
    padding: 5
  },
  rightContent: {
    borderRadius: 10,
    padding: 10,
    backgroundColor: '#f1f3f6',

  },
  rightContentTop: {
    flexDirection: 'row'
  },

  name: {
    fontWeight: 'bold',
    paddingBottom: 5
  },
  
  
  inputSection: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    flex:1
  },
  submit: {
    padding: 10,
  },
  input: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
    color: '#424242',
  },
  
  
})