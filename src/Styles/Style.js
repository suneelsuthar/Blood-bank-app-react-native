import{
    StyleSheet
  } from 'react-native';
  
  export const styles = StyleSheet.create({
    name:{
    fontSize: 44,
    fontFamily:"cursive",
    textAlign:'center',
    fontWeight:"bold",
    marginBottom:"8%",
    color:"rgb(198, 0, 0)",

    },
    container:{
    padding:10,
    flex: 1,
    // justifyContent: 'center',
    paddingTop:75
    },
    username:{
        padding:10,
        marginBottom:10,
        height:45,
        borderWidth:1,
        borderColor:'rgb(206, 202, 202)',
        borderRadius:3,
    },
    login:{
        padding:15,
        backgroundColor:"rgb(33, 150, 243)",
        borderRadius:3,
        
    },
  
    seperator:{
        borderBottomWidth:1,
        borderColor:'rgb(206, 202, 202)',
        marginTop:20
    },
    iconContainer: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        width: 120
      }


 })