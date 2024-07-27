import React from 'react'
import { TouchableOpacity, View, Text,} from 'react-native';
import styles from "./readConfessionStyles";

export default ReadConfession = (props) => {
  const {message, date, read, _id} = props.data;
  let splitDate = date.split(',');
  const [dt , time] = splitDate;
  return (
  <View style={styles.confession}>
    <View style={styles.confessionBox}>
      <Text style={styles.confessHeading}>GPC CONFESS</Text>
      <TouchableOpacity
      onPress={()=>props.togglePopup({message,dt,time, read, _id})}
      >
      <Text style={[{color:'orange', fontSize: 22,fontFamily: "TiltNeon-Regular"},]}>{message}</Text>
      </TouchableOpacity>
    </View>
    <View style={readConfessionStyles.timeView}>
      <Text style={[{color:'gold'},{fontFamily: "TiltNeon-Regular"}]}>{dt}</Text>
      <Text style={[{color:'gold'},{fontFamily: "TiltNeon-Regular"}]}>{time}</Text>          
    </View>
  </View>)
}