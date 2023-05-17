import React from "react";
import { View, Text, Alert } from "react-native";
import styles from "../../components/Styles";
import {
  Energie_Ac_total,
  Puissance_Ac_Total,
  Temps_Ac_Total,
} from "./Charge_Ac";
import { ScrollView } from "react-native-gesture-handler";
export const Result_AC = () => {
  let kwh = Energie_Ac_total / 1000;
  let mensuelle_kwh = kwh * 30;
  let mensuellement_wh = Energie_Ac_total * 30;
  // function showAlert1() {
  //   Alert.alert("Alert Title", "My Alert Msg", [
  //     {
  //       text: "Cancel",
  //       onPress: () => console.log("Cancel Pressed"),
  //       style: "cancel",
  //     },
  //     { text: "OK", onPress: () => console.log("OK Pressed") },
  //   ]);
  // }
  // function showAlert2() {
  //   Alert.alert(
  //     "Alert Title",
  //     "My Alert Msg",
  //     [
  //       {
  //         text: "Ask me later",
  //         onPress: () => console.log("Ask me later pressed"),
  //       },
  //       {
  //         text: "Cancel",
  //         onPress: () => console.log("Cancel Pressed"),
  //         style: "cancel",
  //       },
  //       { text: "OK", onPress: () => console.log("OK Pressed") },
  //     ],
  //     { cancelable: false }
  //   );
  // }
  return (
    <ScrollView>
      <View style={styles.autres}>
        <Text>Consommation mensuelle </Text>
        <View style={styles.center}>
          <Text>
            {/* Temps : {Temps_Ac_Total} {Temps_Ac_Total < 2 ? "Heure" : "Heures"}{" "}
            et puissance {Puissance_Ac_Total} Watts{" "} */}
            {/* et {Energie_Ac_total} wh{" "} */}
            {/* {Energie_Ac_total > 1000 ? kwh.toFixed(2) : Energie_Ac_total}{" "}
            {Energie_Ac_total > 1000 ? "Kwh " : "Wh"} {"  "} */}
            Mensuellement vous consommez : {mensuelle_kwh} Kwh
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};
