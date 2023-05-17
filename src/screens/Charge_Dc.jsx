import React, { useState } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import styles from "../components/Styles";
import { Text, TextInput, Checkbox, Button } from "react-native-paper";
// import styles from "../components/Styles";
import { View, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-navigation";
import { Dropdown } from "react-native-element-dropdown";
import { puissanceL } from "./DcScreen";
import { ScrollView } from "react-native-gesture-handler";
import Styles from "../components/Styles";
export const Others_1 = [
  { label: "Télévision", value: "1" },
  { label: "Ordinateur", value: "2" },
  { label: "Fer a repaser", value: "3" },
  { label: "Réchaud", value: "4" },
  { label: "Refrigerateur", value: "5" },
  { label: "Divers", value: "6" },
];
export const Others_2 = [
  { label: "Télévision", value: "1" },
  { label: "Ordinateur", value: "2" },
  { label: "Fer a repaser", value: "3" },
  { label: "Réchaud", value: "4" },
  { label: "Refrigerateur", value: "5" },
  { label: "Divers", value: "6" },
];

export let puissanceTotal_Dc,
  temps_Total_Dc,
  Energie_Total_Dc,
  puissance_Dc_Total,
  lampeP_Dc;

export default function Charge_Dc({ navigation }) {
  const [tempsLampe_Dc, settempsLampe_Dc] = useState("0");
  let time_eclaire = parseFloat(tempsLampe_Dc);
  const [autres, setAutres] = useState(false);
  const [valueOth, setValueOth] = useState(null);
  const [power1, setPower1] = useState("0");
  let power_1 = parseInt(power1);
  const [tempsOth, setTempsOth] = useState("0");
  let time_1 = parseFloat(tempsOth);
  const [quant1_Dc, setQuant1_Dc] = useState("1");
  let quant_1 = parseInt(quant1_Dc);
  const [autres2, setAutres2] = useState(false);
  const [valueOth2, setValueOth2] = useState(null);
  const [power2, setPower2] = useState("0");
  let power_2 = parseInt(power2);
  const [tempsOth2, setTempsOth2] = useState("0");
  let time_2 = parseFloat(tempsOth2);
  const [quant2_Dc, setQuant2_Dc] = useState("1");
  let quant_2 = parseInt(quant2_Dc);

  const [eclairage_Dc, setEclairage_Dc] = useState("1");
  let eclaire_dc = parseInt(eclairage_Dc);
  const [isFocusL_Dc, setIsFocusL_Dc] = useState(false);
  const [valueL_Dc, setValueL_Dc] = useState(null);
  const [checked_Dc, setChecked_Dc] = useState(false);
  const [checked_2, setChecked_2] = useState(false);

  lampeP_Dc = 0;
  switch (valueL_Dc) {
    case "1":
      lampeP_Dc = 1;
      break;
    case "2":
      lampeP_Dc = 2;
      break;
    case "3":
      lampeP_Dc = 3;
      break;
    case "4":
      lampeP_Dc = 5;
      break;
    case "5":
      lampeP_Dc = 7;
      break;
    case "6":
      lampeP_Dc = 10;
      break;
    default:
      break;
  }

  let lampe_power = parseInt(lampeP_Dc);
  let x = lampe_power * eclaire_dc;
  let y = power_1 * quant_1;
  let z = power_2 * quant_2;
  puissance_Dc_Total = x + y + z;
  temps_Total_Dc = time_eclaire + time_1 + time_2;

  //Energie Dc
  Energie_Total_Dc = puissance_Dc_Total * temps_Total_Dc;

  return (
    <ScrollView decelerationRate="fast">
      <SafeAreaView>
        <View style={styles.container}>
          {/* <ScrollView> */}
          {/* style={styles.container} */}
          <View>
            <Text>
              Appareils que vous utiliser directement sur vos batteries
            </Text>
            <View>
              <Dropdown
                style={[
                  {
                    /*styles.dropdown*/
                  },
                  isFocusL_Dc && { borderColor: "blue" },
                ]}
                data={puissanceL}
                search
                maxHeight={200}
                labelField="label"
                valueField="value"
                placeholder={!isFocusL_Dc ? "Eclairage-Dc" : " ... "}
                searchPlaceholder="Chercher ..."
                value={valueL_Dc}
                onFocus={() => setIsFocusL_Dc(true)}
                onChange={(item) => {
                  setValueL_Dc(item.value);
                  setIsFocusL_Dc(false);
                }}
              />
              <TextInput
                mode="outlined"
                keyboardType="numeric"
                label="Temps d'utilisation"
                value={tempsLampe_Dc}
                onChangeText={(t) => settempsLampe_Dc(t)}
                right={<TextInput.Affix text="Heures/Jour" />}
              />
              <TextInput
                mode="outlined"
                label="Nombre des lampes Dc"
                keyboardType="numeric"
                value={eclairage_Dc}
                onChangeText={(t) => setEclairage_Dc(t)}
                right={<TextInput.Affix text="Lampes" />}
              />
            </View>
            <View>
              <View style={styles.autres}>
                <Text>Autres charges</Text>
              </View>
              <View>
                <Checkbox.Item
                  label="Autres ..."
                  uncheckedColor="blue"
                  color="#d1bd73"
                  status={checked_Dc ? "checked" : "unchecked"}
                  onPress={() => {
                    setChecked_Dc(!checked_Dc);
                  }}
                />
              </View>

              {/* Others  */}

              {checked_Dc && (
                <View style={styles.padding}>
                  <View>
                    <Dropdown
                      // style={[styles.dropdown, autres && { borderColor: "blue" }]}
                      // placeholderStyle={styles.placeholderStyle}
                      // selectedTextStyle={styles.selectedTextStyle}
                      // inputSearchStyle={styles.inputSearchStyle}
                      // iconStyle={styles.iconStyle}
                      data={Others_1}
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
                      mode="outlined"
                      label="Puissance"
                      keyboardType="numeric"
                      value={power1}
                      onChangeText={(t) => setPower1(t)}
                      right={<TextInput.Affix text="Watts" />}
                    />

                    <TextInput
                      mode="outlined"
                      keyboardType="numeric"
                      label="Temps d'utilisation "
                      value={tempsOth}
                      onChangeText={(t) => setTempsOth(t)}
                      right={<TextInput.Affix text="Heures/Jour" />}
                    />

                    <TextInput
                      mode="outlined"
                      label="Quantity"
                      keyboardType="numeric"
                      value={quant1_Dc}
                      onChangeText={(t) => setQuant1_Dc(t)}
                      right={<TextInput.Affix text="" />}
                    />
                  </View>
                </View>
              )}
              <View>
                <View>
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
                      style={[
                        // styles.dropdown,
                        autres2 && { borderColor: "blue" },
                      ]}
                      placeholderStyle={styles.placeholderStyle}
                      selectedTextStyle={styles.selectedTextStyle}
                      inputSearchStyle={styles.inputSearchStyle}
                      iconStyle={styles.iconStyle}
                      data={Others_2}
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
                      value={quant2_Dc}
                      onChangeText={(t) => setQuant2_Dc(t)}
                      right={<TextInput.Affix text="" />}
                    />
                  </View>
                )}
              </View>
            </View>
            <View>
              {/* <Button onPress={() => console.log(nombre_lampe_CC + " w")}>
                Click 
              </Button> */}
            </View>
            {/* <Button icon={{ name:'home', color:'blue'}} mode="elevated" onPress={() => navigation.navigate("Courant Continu")}>
              suivant
               name="information-circle-outline" 
            </Button> */}
            {/* <TouchableOpacity
              onPress={() => {
                navigation.navigate("Courant Continu");
              }}
            >
              <Ionicons
                name={"play-forward-outline"}
                size={20}
                color={"blue"}
              />
              {/* <Icon name="home" size={40} color="blue" />  
              <Text>suivant</Text>
            </TouchableOpacity> */}
            <Button
              mode="elevated"
              onPress={() => {
                navigation.navigate("Courant Continu");
              }}
              style={styles.button}
            >
              <Ionicons
                name={"play-forward-outline"}
                size={20}
                color={"#d1bd73"}
              />{" "}
              {"  "}
              Suivant
            </Button>
          </View>
          {/* </ScrollView> */}
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}
