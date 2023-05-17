import React from "react";
import { StatusBar, Text, View } from "react-native";
import Navigation from "./src/components/Navigation";
import { SafeAreaView } from "react-native-safe-area-context";

const App = () => {
  return (
    //backgroundColor : '#252422' pour safeareaview    justifyContent:'center' , alignItems:'center' ,
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        {/* #ea392f */}
        {/* animated={true} */}
        <StatusBar barStyle={"light-content"} backgroundColor={"#d1bd73"} />
        <Navigation />
      </View>
    </SafeAreaView>
  );
};

export default App;
