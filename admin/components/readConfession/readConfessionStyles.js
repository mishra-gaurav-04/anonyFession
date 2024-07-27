import { StyleSheet } from "react-native"

export default readConfessionStyles = StyleSheet.create({
  confession:{
    width: 295,
    height: 150,
    backgroundColor: '#087acc',
    margin: 15,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: 'aqua',
    overflow: "hidden",
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 5
  },
  timeView:{
    width: 294,
    height: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: "space-between",
    alignItems: 'center',
    paddingHorizontal: 20,
    borderTopWidth: 1,
    borderTopColor: 'gold'

  },
  confessionBox:{
    width: 295,
    height: 110,
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems:'center',
    overflow: 'hidden'
  },
  confessHeading:{
    textAlign: 'center',
    fontSize: 10,
    fontFamily: 'TiltNeon-Regular',
    color: 'white',
    textTransform: 'uppercase'
  },
  viewBtn:{
    backgroundColor: 'blue',
    paddingHorizontal: 10,
    borderRadius: 6,

  }
  })