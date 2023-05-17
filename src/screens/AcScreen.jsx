import React, { useState } from "react";
import { View, Text, SafeAreaView, ScrollView } from "react-native";
import { Button, TextInput, Checkbox } from "react-native-paper";
export default function AcScreen({ navigation }) {
  const [puissance, setPuissance] = useState("0");
  const [puissance_Others, setPuissance_others] = useState("0");
  let puissance_Others_number = parseInt(puissance_Others);
  let puissance_number = parseInt(puissance);
  const [checked, setChecked] = useState(false);
  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <SafeAreaView>
          <View>
            <Text>Definir votre consommation mensuelle avec Elips</Text>
            <View style={{ flex: 1 }}>
              <TextInput
                mode="outlined"
                label="Puissance"
                value={puissance}
                onChangeText={(t) => setPuissance(t)}
              />
              <View>
                <Checkbox.Item
                
                  label="Puissance  ..."
                  uncheckedColor="blue"
                  color="violet"
                  status={checked ? "checked" : "unchecked"}
                  onPress={() => {
                    setChecked(!checked);
                  }}
                />
              </View>

              <View>
                {checked && (
                  <View>
                    <TextInput
                      mode="outlined"
                      label="Autres puissance"
                      value={puissance_Others}
                      onChangeText={(t) => setPuissance_others(t)}
                    />
                  </View>
                )}
              </View>
              <Button
                icon={""}
                mode="elevated"
                onPress={() => console.log(``)}
              ></Button>
            </View>
          </View>
        </SafeAreaView>
      </ScrollView>
    </View>
  );
}
