import React, { useState } from "react";
import { TextInput, Checkbox, Button } from "react-native-paper";
import styles from "../components/Styles";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Text, View } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import { SafeAreaView } from "react-native";
import { ScrollView } from "react-native";
const Others = [
  { label: "Télévision", value: "1" },
  { label: "Ordinateur", value: "2" },
  { label: "Fer a repaser", value: "3" },
  { label: "Réchaud", value: "4" },
  { label: "Refrigerateur", value: "5" },
  { label: "Divers", value: "6" },
];
const Others2 = [
  { label: "Télévision", value: "1" },
  { label: "Ordinateur", value: "2" },
  { label: "Fer a repaser", value: "3" },
  { label: "Réchaud", value: "4" },
  { label: "Refrigerateur", value: "5" },
  { label: "Divers", value: "6" },
];
const Others3 = [
  { label: "Télévision", value: "1" },
  { label: "Ordinateur", value: "2" },
  { label: "Fer a repaser", value: "3" },
  { label: "Réchaud", value: "4" },
  { label: "Refrigerateur", value: "5" },
  { label: "Divers", value: "6" },
];
const Others4 = [
  { label: "Télévision", value: "1" },
  { label: "Ordinateur", value: "2" },
  { label: "Fer a repaser", value: "3" },
  { label: "Réchaud", value: "4" },
  { label: "Refrigerateur", value: "5" },
  { label: "Divers", value: "6" },
];
import {
  Energie_Total_Dc as Energie_Dc,
  puissance_Dc_Total as puissance_Dc,
  temps_Total_Dc as temps_Dc,
} from "../screens/Charge_Dc";
export let Temps_Total, Energie_AC, EnergieTotal, power_Total, powerTotal_Ac;
// export let Nbre_Panneau
export const puissanceL = [
  { label: "Lampe de 1 W", value: "1" },
  { label: "Lampe de 2 W", value: "2" },
  { label: "Lampe de 3 W", value: "3" },
  { label: "Lampe de 5 W", value: "4" },
  { label: "Lampe de 7 W", value: "5" },
  { label: "Lampe de 10 W", value: "6" },
];

export default function DcScreen({ navigation }) {
  const [tempsH, setTempsH] = useState("0");
  let tempsHr = parseFloat(tempsH);
  const [tempsOth, setTempsOth] = useState("0");
  let tempsOthe = parseFloat(tempsOth);
  const [tempsOth2, setTempsOth2] = useState("0");
  let tempsOth_2 = parseFloat(tempsOth2);
  const [tempsOth3, setTempsOth3] = useState("0");
  let tempsOth_3 = parseFloat(tempsOth3);
  const [tempsOth4, setTempsOth4] = useState("0");
  let tempsOth_4 = parseFloat(tempsOth4);
  const [quant1, setQuant1] = useState("0");
  let quant_1 = parseInt(quant1);
  const [quant2, setQuant2] = useState("0");
  let quant_2 = parseInt(quant2);
  const [quant3, setQuant3] = useState("0");
  let quant_3 = parseInt(quant3);
  const [quant4, setQuant4] = useState("0");
  let quant_4 = parseInt(quant4);
  const [lampe2, setLampe2] = useState("0");
  let lampe_2 = parseInt(lampe2);
  const [power1, setPower1] = useState("0");
  let power_1 = parseInt(power1);
  const [power2, setPower2] = useState("0");
  let power_2 = parseInt(power2);
  const [power3, setPower3] = useState("0");
  let power_3 = parseInt(power3);
  const [power4, setPower4] = useState("0");
  let power_4 = parseInt(power4);
  const [panneauPow, setpanneauPow] = useState("0");
  // panneauPower = parseInt(panneauPow);
  const [checked, setChecked] = useState(false);
  const [checked_2, setChecked_2] = useState(false);
  const [checked_3, setChecked_3] = useState(false);
  const [checked_4, setChecked_4] = useState(false);
  const [nomProjet, setNomprojet] = useState("");
  const [autres, setAutres] = useState(false);
  const [autres2, setAutres2] = useState(false);
  const [autres3, setAutres3] = useState(false);
  const [autres4, setAutres4] = useState(false);
  const [valueOth, setValueOth] = useState(null);
  const [valueOth2, setValueOth2] = useState(null);
  const [valueOth3, setValueOth3] = useState(null);
  const [valueOth4, setValueOth4] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const [value2, setValue2] = useState(null);
  const [isFocus2, setIsFocus2] = useState(false);
  const [uco, setUco] = useState("0"); // U a ciruit-ouvert
  let Uco_number = parseInt(uco);
  const [icc, setIcc] = useState("0"); // I de cc
  let Icc_number = parseInt(icc);
  const [soleil, setSoleil] = useState("0");
  let soleil_number = parseFloat(soleil);
  const [regulateur, setRegulateur] = useState("0");
  let regulateur_number = parseFloat(regulateur);
  const [regu_current, setReg_current] = useState("0");
  let regu_current_number = parseInt(regu_current);
  const [capacity_batt, setCapacity_batt] = useState("0");
  let capacity_batt_number = parseInt(capacity_batt);
  const [ubatt, setUbatt] = useState("0");
  let ubatt_number = parseInt(ubatt);
  const [time_work_batt, setTime_work_batt] = useState("0");
  let time_work_batt_number = parseInt(time_work_batt);

  // let tension = 0;
  let lampe = 0;
  let lampeP = parseInt(lampe);

  switch (value2) {
    case "1":
      lampeP = 1;
      break;
    case "2":
      lampeP = 2;
      break;
    case "3":
      lampeP = 3;
      break;
    case "4":
      lampeP = 5;
      break;
    case "5":
      lampeP = 7;
      break;
    case "6":
      lampeP = 10;
      break;

    default:
      break;
  }
  let lampesPower = lampe_2 * lampeP;
  let Others_1_Power = quant_1 * power_1;
  let Others_2_Power = power_2 * quant_2;
  let Others_3_Power = power_3 * quant_3;
  let Others_4_Power = power_4 * quant_4;
  // let
  powerTotal_Ac =
    lampesPower +
    Others_1_Power +
    Others_2_Power +
    Others_3_Power +
    Others_4_Power;
  let tempsTotal = tempsHr + tempsOthe + tempsOth_2 + tempsOth_3 + tempsOth_4;
  Temps_Total = parseFloat(tempsTotal + temps_Dc);
  //Energie

  //puissance total
  power_Total = powerTotal_Ac + puissance_Dc;
  let Energie = tempsTotal * powerTotal_Ac;
  let quinzieme = Energie * 0.15;
  Energie_AC = Energie + quinzieme;
  EnergieTotal = Energie_AC + Energie_Dc;
  return (
    <ScrollView decelerationRate="fast">
      <SafeAreaView>
        <View style={styles.container}>
          <View>
            <Text>
              Appareils a courant alternatif{" "}
            </Text>
            <Dropdown
              style={[styles.dropdown, isFocus && { borderColor: "blue" }]}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              inputSearchStyle={styles.inputSearchStyle}
              iconStyle={styles.iconStyle}
              data={puissanceL}
              search
              maxHeight={200}
              labelField="label"
              valueField="value"
              placeholder={!isFocus ? "Eclairage-Ac" : " ... "}
              searchPlaceholder="Chercher ..."
              value={value2}
              onFocus={() => setIsFocus2(true)}
              onChange={(item) => {
                setValue2(item.value);
                setIsFocus2(false);
              }}
            />
            <TextInput
              keyboardType="numeric"
              mode="outlined"
              label="Temps d'utilisation"
              value={tempsH}
              onChangeText={(t) => setTempsH(t)}
              right={<TextInput.Affix text="Heures/Jour" />}
            />
            <TextInput
              keyboardType="numeric"
              mode="outlined"
              label="Nombre des lampes"
              powerTotalboardType="numeric"
              value={lampe2}
              onChangeText={(t) => setLampe2(t)}
              right={<TextInput.Affix text="Lampes" />}
            />
          </View>
          <View style={styles.autres}>
            <Text>Autres Appareils</Text>
          </View>
          {/* Les autres appareils  */}
          <View>
            <Checkbox.Item
              label="Autres ..."
              uncheckedColor="blue"
              color="#d1bd73"
              status={checked ? "checked" : "unchecked"}
              onPress={() => {
                setChecked(!checked);
              }}
            />
          </View>

          <View>
            {checked && (
              <View style={styles.padding}>
                <Dropdown
                  style={[styles.dropdown, autres && { borderColor: "blue" }]}
                  placeholderStyle={styles.placeholderStyle}
                  selectedTextStyle={styles.selectedTextStyle}
                  inputSearchStyle={styles.inputSearchStyle}
                  iconStyle={styles.iconStyle}
                  data={Others}
                  search
                  maxHeight={200}
                  labelField="label"
                  valueField="value"
                  placeholder={!autres ? "Autres appareils ..." : " ..."}
                  searchPlaceholder="Chercher ..."
                  value={valueOth}
                  onFocus={() => setAutres(true)}
                  onBlur={() => setAutres(false)}
                  onChange={(element) => {
                    setValueOth(element.value);
                    setAutres(false);
                  }}
                />
                <TextInput
                  keyboardType="numeric"
                  mode="outlined"
                  label="Puissance"
                  value={power1}
                  onChangeText={(t) => setPower1(t)}
                  right={<TextInput.Affix text="Watts" />}
                />
                <TextInput
                  keyboardType="numeric"
                  mode="outlined"
                  label="Temps d'utilisation "
                  value={tempsOth}
                  onChangeText={(t) => setTempsOth(t)}
                  right={<TextInput.Affix text="Heures/Jour" />}
                />

                <TextInput
                  keyboardType="numeric"
                  mode="outlined"
                  label="Quantity"
                  value={quant1}
                  onChangeText={(t) => setQuant1(t)}
                  right={<TextInput.Affix text="" />}
                />
              </View>
            )}

            <View style={{ padding: 5, marginTop: 0 }}>
              <Checkbox.Item
                label="Autres ..."
                uncheckedColor="blue"
                color="#d1bd73"
                status={checked_2 ? "checked" : "unchecked"}
                onPress={() => {
                  setChecked_2(!checked_2);
                }}
              />
            </View>
            {checked_2 && (
              <View>
                {/* Deuxieme appareils */}
                <Dropdown
                  style={[styles.dropdown, autres2 && { borderColor: "blue" }]}
                  placeholderStyle={styles.placeholderStyle}
                  selectedTextStyle={styles.selectedTextStyle}
                  inputSearchStyle={styles.inputSearchStyle}
                  iconStyle={styles.iconStyle}
                  data={Others2}
                  search
                  maxHeight={300}
                  labelField="label"
                  valueField="value"
                  placeholder={!autres2 ? "Autres appareils ..." : " ..."}
                  searchPlaceholder="Chercher ..."
                  value={valueOth2}
                  onFocus={() => setAutres2(true)}
                  //onBlur={() => setAutres2(false)}
                  onChange={(element) => {
                    setValueOth2(element.value);
                    setAutres2(false);
                  }}
                />
                <TextInput
                  mode="outlined"
                  label="Puissance"
                  keyboardType="numeric"
                  value={power2}
                  onChangeText={(t) => setPower2(t)}
                  right={<TextInput.Affix text="Watts" />}
                />
                <TextInput
                  mode="outlined"
                  keyboardType="numeric"
                  label="Temps d'utilisation"
                  value={tempsOth2}
                  onChangeText={(t) => setTempsOth2(t)}
                  right={<TextInput.Affix text="Heures/Jour" />}
                />

                <TextInput
                  mode="outlined" //
                  label="Quantity"
                  keyboardType="numeric"
                  value={quant2}
                  onChangeText={(t) => setQuant2(t)}
                  right={<TextInput.Affix text="" />}
                />
              </View>
            )}

            <View style={{ padding: 5, marginTop: 0 }}>
              <Checkbox.Item
                label="Autres ..."
                uncheckedColor="blue"
                color="#d1bd73"
                status={checked_3 ? "checked" : "unchecked"}
                onPress={() => {
                  setChecked_3(!checked_3);
                }}
              />
            </View>

            {checked_3 && (
              <View>
                {/* 3 eme  */}
                <Dropdown
                  style={[styles.dropdown, autres3 && { borderColor: "blue" }]}
                  placeholderStyle={styles.placeholderStyle}
                  selectedTextStyle={styles.selectedTextStyle}
                  inputSearchStyle={styles.inputSearchStyle}
                  iconStyle={styles.iconStyle}
                  data={Others3}
                  search
                  maxHeight={300}
                  labelField="label"
                  valueField="value"
                  placeholder={!autres3 ? "Autres appareils ..." : " ..."}
                  searchPlaceholder="Chercher ..."
                  value={valueOth3}
                  onFocus={() => setAutres3(true)}
                  // onBlur={() => setAutres(false)}
                  onChange={(element) => {
                    setValueOth3(element.value);
                    setAutres3(false);
                  }}
                />

                <TextInput
                  mode="outlined"
                  label="Puissance"
                  keyboardType="numeric"
                  value={power3}
                  onChangeText={(t) => setPower3(t)}
                  right={<TextInput.Affix text="Watts" />}
                />
                <TextInput
                  mode="outlined"
                  keyboardType="numeric"
                  label="Temps d'utilisation"
                  value={tempsOth3}
                  onChangeText={(t) => setTempsOth3(t)}
                  right={<TextInput.Affix text="Heures/Jour" />}
                />

                <TextInput
                  mode="outlined"
                  label="Quantity"
                  keyboardType="numeric"
                  value={quant3}
                  onChangeText={(t) => setQuant3(t)}
                  right={<TextInput.Affix text="" />}
                />
              </View>
            )}
            <View style={{ padding: 5, marginTop: 0 }}>
              <Checkbox.Item
                label="Autres ..."
                uncheckedColor="blue"
                color="#d1bd73"
                status={checked_4 ? "checked" : "unchecked"}
                onPress={() => {
                  setChecked_4(!checked_4);
                }}
              />
            </View>
            {checked_4 && (
              <View>
                {/* 4 eme  */}
                <Dropdown
                  style={[styles.dropdown, autres4 && { borderColor: "blue" }]}
                  placeholderStyle={styles.placeholderStyle}
                  selectedTextStyle={styles.selectedTextStyle}
                  inputSearchStyle={styles.inputSearchStyle}
                  iconStyle={styles.iconStyle}
                  data={Others4}
                  search
                  maxHeight={300}
                  labelField="label"
                  valueField="value"
                  placeholder={!autres4 ? "Autres appareils ..." : " ..."}
                  searchPlaceholder="Chercher ..."
                  value={valueOth4}
                  onFocus={() => setAutres4(true)}
                  // onBlur={() => setAutres(false)}
                  onChange={(element) => {
                    setValueOth4(element.value);
                    setAutres4(false);
                  }}
                />

                <TextInput
                  mode="outlined"
                  label="Puissance"
                  keyboardType="numeric"
                  value={power4}
                  onChangeText={(t) => setPower4(t)}
                  right={<TextInput.Affix text="Watts" />}
                />
                <TextInput
                  mode="outlined"
                  keyboardType="numeric"
                  label="Temps d'utilisation"
                  value={tempsOth4}
                  onChangeText={(t) => setTempsOth4(t)}
                  right={<TextInput.Affix text="Heures/Jour" />}
                />

                <TextInput
                  mode="outlined"
                  label="Quantity"
                  keyboardType="numeric"
                  value={quant4}
                  onChangeText={(t) => setQuant4(t)}
                  right={<TextInput.Affix text="" />}
                />
              </View>
            )}
          </View>
          {/* </View> */}
          <Button
            icon
            mode="elevated"
            onPress={() => {
              navigation.navigate("Resultat");
            }}
            style={styles.button}
          >
            <Ionicons
              name={"play-forward-outline"}
              size={20}
              color={"#d1bd73"}
            />
            {"  "} Suivant
          </Button>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}
// styles
