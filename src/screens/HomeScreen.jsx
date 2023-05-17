import React, { useState } from "react";
import { Text, View } from "react-native";
import { Button } from "react-native-paper";
import { ScrollView, ImageBackground } from "react-native";
import { SafeAreaView } from "react-native";
import styles from "../components/Styles";
import back from "../../assets/page.jpg";
import Styles from "../components/Styles";
import { Dimensions } from "react-native";

const HomeScreen = ({ navigation }) => {
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const [theme, setTheme] = useState("light");
  const [input, setInput] = useState("enter value");
  const [number, onChangeNumber] = useState("");
  const [checked, setChecked] = useState(false);
  const [visible, setVisible] = useState(false);
  const [text, setText] = useState("");
  const [da, setDa] = useState(1);
  const [data, setData] = useState(1);

  return (
    <ImageBackground source={back} style={styles.background}>
      <ScrollView>
        <SafeAreaView>
          <View style={styles.cont}>
            {/* enter */}
            {/* <View style={styles.container}> */}
            <View style={styles.tom}>
              <Text style={styles.text}>
                Ellips la base de vos calculs solaires{" "}
              </Text>
              <Text style={styles.text}>
                Faites vos calculs avec l'application Ellips
              </Text>
              <Text style={styles.text}>
                Un calcul exact pour un resultat exact , Car Ellips est une
                touche de proffesionnels experimenter{" "}
              </Text>
              <View style={styles.accueill}>
                {/*  */}
                <Button
                  style={Styles.button_acc}
                  mode="elevated"
                  onPress={() => {
                    navigation.navigate("Charge_Dc");
                  }}
                >
                  Courant Continu
                </Button>
                <Button
                  style={Styles.button_acc}
                  mode="elevated"
                  onPress={() => {
                    navigation.navigate("Charge_Ac");
                  }}
                >
                  Courant Alternatif
                </Button>
              </View>
            </View>
            {/* </View> */}
          </View>
        </SafeAreaView>
      </ScrollView>
    </ImageBackground>
  );
};

export default HomeScreen;
