import React, { useState } from "react";
// import { Text } from 'react-native'
import { View } from "react-native";
import { Text, TextInput, Button } from "react-native-paper";
import { EnergieTotal, power_Total } from "./DcScreen";
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native";
// import { Button } from "react-native-paper";
import styles from "../components/Styles";
// let tension
// import { EnergieTotal } from "./DcScreen";
export let tension,
  capacity_batt_number,
  energie_panneau,
  nbre_panneau,
  panneauPower,
  soleil_number,
  Nbre_batt;
export const Resultat = ({ navigation }) => {
  tension = 0;
  {
    // selectionneur de tension
    if (power_Total > 0 && power_Total < 3000) {
      tension = 12;
    }
    if (power_Total >= 3000 && power_Total < 5000) {
      tension = 24;
    }
    if (power_Total >= 5000) {
      tension = 48;
    }
  }

  const [uco, setUco] = useState("0"); // U a ciruit-ouvert
  const [icc, setIcc] = useState("0"); // I de cc
  const [soleil, setSoleil] = useState("4");
  soleil_number = parseFloat(soleil);
  const [regulateur, setRegulateur] = useState("0");
  const [regu_current, setReg_current] = useState("0");
  const [capacity_batt, setCapacity_batt] = useState("1");
  capacity_batt_number = parseInt(capacity_batt);
  const [ubatt, setUbatt] = useState("12");
  const [time_work_batt, setTime_work_batt] = useState("0");
  const [panneauPow, setpanneauPow] = useState("10");
  panneauPower = parseInt(panneauPow);
  energie_panneau = soleil_number * panneauPow;

  // nbre_panneau = EnergieTotal / energie_panneau;
  // Nbre_batt = EnergieTotal / tension / capacity_batt_number;

  return (
    <ScrollView>
      <SafeAreaView>
        <View style={styles.container}>
          <View style={styles.autres}>
            <Text>Caracteristiques de votre panneau </Text>
          </View>
          <View>
            <TextInput
              mode="outlined"
              label="Puisssance du panneau"
              keyboardType="numeric"
              value={panneauPow}
              onChangeText={(t) => setpanneauPow(t)}
              right={<TextInput.Affix text="Watts" />}
            />
            {/* <TextInput
          mode="outlined"
          label="Tension a circuit ouvert"
          value={uco}
          onChangeText={(t) => setUco(t)}
          right={<TextInput.Affix text="Volts" />}
        />
        <TextInput
          mode="outlined"
          label="Courant de court-ciruit "
          value={icc}
          onChangeText={(t) => setIcc(t)}
          right={<TextInput.Affix text="A" />}
        /> */}
            {/* ensoillemnet */}

            <TextInput
              mode="outlined"
              label="Ensoleillement "
              keyboardType="numeric"
              value={soleil}
              onChangeText={(t) => setSoleil(t)}
              right={<TextInput.Affix text="Heures/jours" />}
            />
          </View>

          {/* <Text style={{ padding: 10 }}>Regulateur </Text>

      <TextInput
        mode="outlined"
        label="Tension max du regulateur"
        powerTotalboardType="numeric"
        value={regulateur}
        onChangeText={(t) => setRegulateur(t)}
        right={<TextInput.Affix text="Volts" />}
      />
      <TextInput
        powerTotalboardType="numeric"
        mode="outlined"
        label="Courant max du regulateur"
        value={regu_current}
        onChangeText={(t) => setReg_current(t)}
        right={<TextInput.Affix text="A" />}
      /> */}
          <View style={styles.autres}>
            <Text>Caracteristiques de la baterrie</Text>
          </View>

          <TextInput
            keyboardType="numeric"
            mode="outlined"
            label="Capacité de la baterrie"
            value={capacity_batt}
            onChangeText={(t) => setCapacity_batt(t)}
            right={<TextInput.Affix text="Ah" />}
          />
          <TextInput
            keyboardType="numeric"
            mode="outlined"
            label="Tension de la batterie"
            value={ubatt}
            onChangeText={(t) => setUbatt(t)}
            right={<TextInput.Affix text="Volts" />}
          />
          {/* <TextInput
        mode="outlined"
        label="Durrée de travail des baterries"
        value={time_work_batt}
        onChangeText={(t) => setTime_work_batt(t)}
        right={<TextInput.Affix text=" < 7 " />}
      /> */}
          <Button
            style={styles.padding}
            mode="elevated"
            onPress={() => {
              navigation.navigate("Resultat final");
            }}
          >
            Afficher le resultat
          </Button>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};
