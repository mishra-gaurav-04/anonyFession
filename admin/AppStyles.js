import { StyleSheet } from "react-native"

export default styles = StyleSheet.create({
  main: {
    backgroundColor: '#0c0c1d',
    height: "100%",
    width: "100%",
    justifyContent: 'flex-start',
    alignItems: "center",
  },
  heading: {
    color: 'gold',
    fontFamily: "TiltNeon-Regular",
    fontSize: 30,
    borderBottomWidth: 1,
    borderBottomColor: 'gold'
  },
  loader: {
    fontSize: 10
  },
  loaderWrapper: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "70%",
    gap: 10
  }
})