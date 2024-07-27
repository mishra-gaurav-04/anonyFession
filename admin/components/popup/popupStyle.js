import { StyleSheet } from "react-native";

export default popupStyles = StyleSheet.create({
    popupBox:{
        zIndex: 99,
        position: 'absolute',
        top: 200,
        backgroundColor: '#0c0c1d',
        borderRadius: 26,
        borderWidth: 2,
        borderColor: 'gold',
        width: 320,
        minHeight: 300,
        maxHeight: 400,
        display: "flex",
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10
    },
    timeView:{
        width: 294,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    textView:{
        textAlign: 'center',
        fontSize: 26,
        color: 'white'
    },
    closePopup:{
        backgroundColor: 'slategrey',
        paddingHorizontal: 30,
        paddingVertical: 5,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: 'aqua'
    }
}) 