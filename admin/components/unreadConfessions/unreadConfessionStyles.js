import { StyleSheet } from "react-native"

export default unreadConfessionStyles = StyleSheet.create({
    confess: {
        width: 295,
        height: 150,
        backgroundColor: 'black',
        margin: 15,
        borderRadius: 20,
        borderWidth: 2,
        borderColor: 'aqua',
        overflow: "hidden",
        justifyContent: 'center',
        alignItems: 'center'
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
    }

  })