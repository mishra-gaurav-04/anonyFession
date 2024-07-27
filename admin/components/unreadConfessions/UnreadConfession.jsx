import React from 'react'
import { TouchableOpacity, ImageBackground, ScrollView, View, Text, Button, Image, ViewComponent } from 'react-native';
import unreadConfessionStyles from "./unreadConfessionStyles";

export default UnreadConfess = (props) => {
    const {message, date, read, _id} = props.data;
    let splitDate = date.split(',');
    const [dt , time] = splitDate;
    return (
        <ImageBackground source={require('../../assets/images/ngl.jpg')} style={unreadConfessionStyles.confess} >
            <TouchableOpacity onPress={()=>props.togglePopup({message,dt,time, read, _id})}>
            <Image 
            source={require('../../assets/images/question.gif')}
            style={[{width:150},{height:120}]}
            >
            </Image>
            </TouchableOpacity>
            
            <View style={unreadConfessionStyles.timeView}>
            <Text style={[{color:'gold'},{fontFamily: "TiltNeon-Regular"}]}>{dt}</Text>
            <Text style={[{color:'gold'},{fontFamily: "TiltNeon-Regular"}]}>{time}</Text>          
            </View>
        </ImageBackground>
    );
  };