import React from "react";
import { View, SafeAreaView, ScrollView, Text } from "react-native";
import {
  power_Total,
  Temps_Total,
  EnergieTotal,
  powerTotal_Ac,
} from "./DcScreen";
import { capacity_batt_number, tension } from "./Resultat";
import styles from "../components/Styles";
import { soleil_number, panneauPower } from "./Resultat";
import { puissance_Dc_Total } from "./Charge_Dc";
// let capacite_utile = EnergieTotal / tension
export const Resultat_final = ({ navigation }) => {
  let puissance_pann = EnergieTotal / soleil_number;
  let power_tot = puissance_Dc_Total + powerTotal_Ac;
  let capacite_utile = EnergieTotal / tension;
  let quinzieme_Ac = (EnergieTotal / soleil_number) * 0.15;
  let puissance_Total_de_pann = quinzieme_Ac + puissance_pann;
  let n_batt = capacite_utile / capacity_batt_number;
  let n_pann = puissance_Total_de_pann / panneauPower;
  let capacite_batt = capacite_utile / 0.8;
  return (
    <ScrollView>
      <SafeAreaView>
        <View style={styles.center}>
          {/* <Text>{Energie_AC} et {Energie_Total_Dc}</Text> */}
          {/* <Text>
            Avec une puissance de {power_Total}{" "}
            {power_Total < 2 ? "Watt" : "Watts"} et un temps de{" "}
            {Temps_Total ? Temps_Total : "0"}{" "}
            {Temps_Total < 2 ? "Heure" : "Heures"}{" "}
          </Text> */}
          <Text>Consommation journalière : {EnergieTotal} Wh</Text>
          <Text>Pour cette installation vous aurez besoin de : </Text>
          {/* <Text>
            {/* {x ? Math.ceil(x) : "c'est vide "} Ah Qbatt  
            Capacité total (Q) : = {Math.ceil(capacite_batt)} Ah
            {/* {nbre_panneau.toFixed(2)} Panneaux de {panneauPower} Watts 
          </Text> */}
          <Text>
            1{")"} {Math.ceil(capacite_batt / capacity_batt_number)}{" "}
            {n_batt < 2 ? "batterie" : "batteries"} de {capacity_batt_number} Ah
          </Text>
          {/* <Text>Puissance panneau : </Text> */}
          <Text>
            {/* {soleil_number} %%% */}
            {/* {Math.round(EnergieTotal / soleil_number)} Watts {quinzieme_Ac}={" "} */}
            {/* puissance panneau = {Math.ceil(puissance_Total_de_pann)} Watts{" "} */}
            {/* <br /> */}2{")"} {Math.ceil(n_pann)}{" "}
            {n_pann < 2 ? "panneau" : "panneaux"} de {panneauPower} Watts
          </Text>
          <Text>Regulateur de :</Text>
          <Text>{Math.ceil(puissance_Total_de_pann / tension)} A</Text>

          <Text>Convertisseur :</Text>
          <Text>Puissance : {Math.ceil(power_tot / 0.8)} VA</Text>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};
