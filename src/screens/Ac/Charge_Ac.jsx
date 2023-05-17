import React, { useState } from "react";
import { Dropdown } from "react-native-element-dropdown";
import { Text, View, TouchableOpacity } from "react-native";
import { puissanceL } from "../DcScreen";
import Ionicons from "react-native-vector-icons/Ionicons";
export let lampeP_Ac = 0;
// import styles from "../../components/Styles";
import styles from "../../components/Styles";
import { TextInput, Checkbox, Button } from "react-native-paper";
import { Others_1, Others_2 } from "../Charge_Dc";
// import { ScrollView } from "react-native-web";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native";
export let Puissance_Ac_Total, Energie_Ac_total, Temps_Ac_Total;
export const Charge_Ac = ({ navigation }) => {
  const [isFocus, setIsFocus] = useState(false);
  const [tempsLampe_Dc, settempsLampe_Dc] = useState("0");
  let time_eclaire = parseFloat(tempsLampe_Dc);
  const [eclairage_Dc, setEclairage_Dc] = useState("1");
  let eclaire_dc = parseInt(eclairage_Dc);
  const [checked, setChecked] = useState(false);
  const [checked_2, setChecked_2] = useState(false);
  const [checked_3, setChecked_3] = useState(false);
  const [value, setValue] = useState(null);
  const [autres, setAutres] = useState(false);
  const [valueOth, setValueOth] = useState(null);
  const [power1, setPower1] = useState("0");
  let power_1 = parseInt(power1);
  const [tempsOth, setTempsOth] = useState("0");
  let time_1 = parseFloat(tempsOth);
  const [quant1_Dc, setQuant1_Dc] = useState("1");
  let quant1 = parseInt(quant1_Dc);
  const [power2, setPower2] = useState("0");
  let power_2 = parseInt(power2);
  let quant_1 = parseInt(quant1_Dc);
  const [power3, setPower3] = useState("0");
  let power_3 = parseInt(power3);
  const [tempsOth2, setTempsOth2] = useState("0");
  let time_2 = parseFloat(tempsOth2);
  const [quant2_Dc, setQuant2_Dc] = useState("1");
  const [tempsOth3, setTempsOth3] = useState("0");
  let time_3 = parseFloat(tempsOth3);
  // const [quant2_Dc, setQuant2_Dc] = useState("1");
  let quant_2 = parseInt(quant2_Dc);
  const [autres2, setAutres2] = useState(false);
  const [quant3_Dc, setQuant3_Dc] = useState("1");
  let quant_3 = parseInt(quant3_Dc);
  const [autres3, setAutres3] = useState(false);
  const [valueOth2, setValueOth2] = useState(null);
  switch (value) {
    case "1":
      lampeP_Ac = 1;
      break;
    case "2":
      lampeP_Ac = 2;
      break;
    case "3":
      lampeP_Ac = 3;
      break;
    case "4":
      lampeP_Ac = 5;
      break;
    case "5":
      lampeP_Ac = 7;
      break;
    case "6":
      lampeP_Ac = 10;
      break;
    default:
      lampeP_Ac = 0;
      break;
  }
  let powerLampe = eclaire_dc * lampeP_Ac;
  let power1_tot = power_1 * quant1;
  let power2_tot = power_2 * quant_2;
  let power3_tot = power_3 * quant_3;
  Puissance_Ac_Total = powerLampe + power1_tot + power2_tot + power3_tot;
  Temps_Ac_Total = time_eclaire + time_1 + time_2 + time_3;
  let Energie = Puissance_Ac_Total * Temps_Ac_Total;
  let quinzieme = Energie * 0.1;
  Energie_Ac_total = Energie + quinzieme;
  return (
    <ScrollView>
      <SafeAreaView>
        <View style={styles.container}>
          <View style={styles.autres}>
            <Text>Consommation Alternatif </Text>
          </View>
          <View>
            <Dropdown
              style={[
                {
                  /*styles.dropdown*/
                },
                isFocus && { borderColor: "blue" },
              ]}
              // placeholderStyle={styles.placeholderStyle}
              // selectedTextStyle={styles.selectedTextStyle}
              // inputSearchStyle={styles.inputSearchStyle}
              // iconStyle={styles.iconStyle}
              data={puissanceL}
              search
              maxHeight={200}
              labelField="label"
              valueField="value"
              placeholder={!isFocus ? "Eclairage-Ac" : " ... "}
              searchPlaceholder="Chercher ..."
              value={value}
              onFocus={() => setIsFocus(true)}
              onChange={(item) => {
                setValue(item.value);
                setIsFocus(false);
              }}
            />
            {/* <Text>{lampeP_Ac}</Text> */}

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
            )}
            <Checkbox.Item
              label="Autres ..."
              uncheckedColor="blue"
              color="#d1bd73"
              status={checked_2 ? "checked" : "unchecked"}
              onPress={() => {
                setChecked_2(!checked_2);
              }}
            />
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
          <View>
            <Checkbox.Item
              label="Autres ..."
              uncheckedColor="blue"
              color="#d1bd73"
              status={checked_3 ? "checked" : "unchecked"}
              onPress={() => {
                setChecked_3(!checked_3);
              }}
            />
            {checked_3 && (
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
                  mode="outlined" //
                  label="Quantity"
                  keyboardType="numeric"
                  value={quant3_Dc}
                  onChangeText={(t) => setQuant3_Dc(t)}
                  right={<TextInput.Affix text="" />}
                />
              </View>
            )}
          </View>
          {/* <TouchableOpacity
          onPress={() => {
            navigation.navigate("resultat_Ac");
          }}
        >
          <Ionicons name={"play-forward-outline"} size={20} color={"blue"} />
          <Text>suivant</Text>
        </TouchableOpacity> */}
          <Button
            mode="elevated"
            onPress={() => {
              navigation.navigate("resultat_Ac");
            }}
            style={styles.button}
          >
            <Ionicons
              name={"play-forward-outline"}
              size={20}
              color={"#d1bd73"}
            />{" "}
            {"  "}
            Resultat
          </Button>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};
