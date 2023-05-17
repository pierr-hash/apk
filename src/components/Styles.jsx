import { Dimensions } from "react-native";
import { StyleSheet } from "react-native";
let windowwidth = Dimensions.get('window').width;
let haut = Dimensions.get('window').height
export default StyleSheet.create({
  container: {
    flex: 1,
    margin: 25,
  },
  center: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 100,
    padding: 30,
  },
  enter: {
    justifyContent: "center",
    alignItems: "center",
    // padding:20,
    marginVertical: 200,
    marginHorizontal: 20,
  },
  cont: {
    flex: 1,
    justifyContent: "center",
    marginVertical: 100,
    // padding: 8,
  },
  mathe: {
    margin: 10,
    padding: 22,
  },
  padding: {
    padding: 10,
  },
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    // width: "100%",
    // height: "100%",
  },
  button_acc: {
    padding: 1,
    width: windowwidth * 0.8,
  },
  button: {
    marginTop: 12,
  },
  ttl: {
    justifyContent: "space-around",
    alignItems: "center",
  },
  padding: {
    marginTop: 11,
  },
  accueill: {
    flexDirection: 'column',
    gap: 10,
    // width: windowwidth / 3,
    marginTop: 10,
    // padding: 10,
    justifyContent: "space-around",
    alignItems: "center",
  },
  tom: {
    padding: 1,
  },
  autres: {
    alignItems: "center",
    paddingTop: 12,
    paddingBottom: 10,
  },
  wrapper: {
    width: "80%",
  },
  check: {
    color: "#d1bd73",
  },
  input: {
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#bbb",
    paddingVertical: 10,
    borderRadius: 5,
    paddingHorizontal: 14,
  },
  link: {
    color: "blue",
  },
  text: {
    color: "white",
    margin: 6,
    fontSize: haut * 0.04,
    fontWeight: "bold",
    textAlign: "center",
    // fontSize: 16,
  },
  dropdown: {
    height: 50,

    backgroundColor: "transparent",
    borderBottomColor: "gray",
    borderBottomWidth: 0,
  },
  placeholderStyle: {
    fontSize: 18,
  },
  selectedTextStyle: {
    fontSize: 18,
  },
  iconStyle: {
    width: 25,
    height: 25,
  },
  inputSearchStyle: {
    height: 45,
    fontSize: 20,
    textTransform: "capitalize",
  },
  icon: {
    marginRight: 5,
  },
  selectedStyle: {
    borderRadius: 12,
  },
});
