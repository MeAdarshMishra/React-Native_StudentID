import * as React from 'react';
import { Text, View, StyleSheet,Image } from 'react-native';
import Constants from 'expo-constants';

export default function App() {
  return (
    <View style={styles.container}>
    <View style ={styles.profile}>
    <Text style ={{margin:20, fontSize:22,fontWeight:'bold',color:'red'}}>
    ID CARD
    </Text>
    <Image source = {require('./assets/AdarshMishra.png')}style={styles.pic}/>
    <Text style ={{margin:20, fontSize:18,fontWeight:'bold',color:'white'}}>
    Student 
    </Text>
      </View>
      <View style={styles.details}>
      <View style={styles.items}>
      <Text style={{flex:.8,fontSize:20,color:'orange',fontWeight:'bold'}}>
      Name:
      </Text>
      <Text style={{fontSize:20,color:'black'}}>
      Adarsh Mishra
      </Text>
      
      </View>
      <View style={styles.items}>
      <Text style={{flex:.6,fontSize:18,color:'orange',fontWeight:'bold'}}>
      Designation:
      </Text>
      <Text style={{fontSize:18,color:'black'}}>
      Student
      </Text>
      
      </View>
      <View style={styles.items}>
      <Text style={{flex:.8,fontSize:19,color:'orange',fontWeight:'bold'}}>
      Department:
      </Text>
      <Text style={{fontSize:18,color:'black'}}>
      Computer Science
      </Text>
      </View>
      <View style={styles.items}>
      <Text style={{flex:.7,fontSize:20,color:'orange',fontWeight:'bold'}}>
      Student ID:
      </Text>
      <Text style={{fontSize:20,color:'black'}}>
      GLAAD1234
      </Text>
      
      </View>
      </View>
      </View>
  );
}
const styles =StyleSheet.create({
  container:{
    flex : 1,
    paddingTop:Constants.statusBarHeight,
  },
  profile:{
    flex:.4,
    backgroundColor:'grey',
    justifyContent:'center',
    alignItems:'center'
  },
  details:{
    flex :.6,
    backgroundColor:'white'
  },
    pic:{
      width:100,
      height:100,
      borderRadius:100
    },
    items:{
      borderBottomWidth:2,borderBottomColor:'black',flex:.25,
      flexDirection:'row',alignItems:'center',paddingHorizontal:10
         
    }
});