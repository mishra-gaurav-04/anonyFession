import React, { useEffect } from 'react'
import { View, Text, TouchableOpacity, ScrollView} from 'react-native';
import styles from './popupStyle'

const Popup = (props) => {
    const {dt, time, message, read, _id} = props.data;

    useEffect(()=>{
        read ? console.log('Message already read.'): props.markRead(_id)
    },[])
  return (
    <View style={styles.popupBox}>
        <View style={styles.timeView}>
            <Text style={{color:'gold',fontFamily: "TiltNeon-Regular", fontSize: 15}}>{dt}</Text>
            <Text style={{color:'aqua',fontFamily: "TiltNeon-Regular", fontSize: 15}}>Confession</Text>
            <Text style={{color:'gold',fontFamily: "TiltNeon-Regular", fontSize: 15}}>{time}</Text>          
            </View>
        <ScrollView>
        <Text style={styles.textView}>{message}</Text>
        </ScrollView>
        <TouchableOpacity style={styles.closePopup} onPress={()=>props.togglePopup()}>
            <Text style={{fontSize: 16, color: 'orange'}}>CLOSE</Text>
        </TouchableOpacity>
    </View>
  )
}

export default Popup