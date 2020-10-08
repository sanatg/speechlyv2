import * as React from 'react';
import { Text, View, StyleSheet,Image,TextInput,TouchableOpacity,Alert} from 'react-native';
import {Header} from 'react-native-elements';
import * as Speech from 'expo-speech';

 export default class App extends React.Component {
   constructor(){
  super();
  this.state = {
    text:'',

  }
}
render(){
  return (
    <View>
      <Header
    centerComponent = {{text:'Speechly',style:{color:'#ffffff',fontSize:45,fontWeight:'bold'}}}/>

    <TextInput
    style = {{
borderWidth:2,
borderRadius:5,
justifyContent:'center',
width:250,
height:50,
marginTop:200,
alignSelf:'center',
}}
    placeholder = {"Enter Your Word"}
    onChangeText = {text =>{
      this.setState({
        text:text
      })

    }}
    value = {this.state.text}
     />
   <TouchableOpacity style={{
     justifyContent: 'center',
    backgroundColor:'#0f3057',
    width: '50%',
    height: 55,
    alignSelf: 'center',
    padding: 10,
    marginTop: 40,
    borderWidth: 2,
    borderColor:"#0f3057",
    borderRadius:15,
    marginBottom:10,

     }} onPress={()=>{
       var letter = this.state.text = this.state.text;
       letter?(
          Speech.speak(this.state.text)
       ):Alert.alert("You haven't entered anything yet")}}>

        <Text style = {{color:'white',textAlign:'center'}}>Translate</Text>
        </TouchableOpacity>

</View>
  );
}
}
