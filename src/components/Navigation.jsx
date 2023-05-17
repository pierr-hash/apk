import React from "react";
import { SafeAreaView, StatusBar } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import HomeScreen from "../screens/HomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import DcScreen from "../screens/DcScreen";
import AcScreen from "../screens/AcScreen";
import Charge_Dc from "../screens/Charge_Dc";
import { ScrollView } from "react-native-gesture-handler";
import { Resultat } from "../screens/Resultat";
import { Resultat_final } from "../screens/Resultat_final";
import { Charge_Ac } from "../screens/Ac/Charge_Ac";
import { Result_AC } from "../screens/Ac/Result";
// import { Charge_Ac } from "../screens/Ac/Charge_Ac";
const Tab = createNativeStackNavigator();
// const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Home">
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            statusBarHidden:true,   //nouveau
            headerShown:false,
            title: "Bienvenue",
            headerTitleAlign: "center",
            headerStyle: {
              backgroundColor: "#fad97f",
            },
            //
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
        <Tab.Screen
          name="Courant Alternatif"
          component={AcScreen}
          options={{
            title: "AC screen",
            headerTitleAlign: "center",
            headerStyle: {
              backgroundColor: "#fad97f",
            },
            //
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
        <Tab.Screen
          name="Courant Continu"
          component={DcScreen}
          options={{
            title: "Charge Alternatif",
            headerTitleAlign: "center",
            headerStyle: {
              backgroundColor: "#fad97f",
            },
            headerShown: true,
            //
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />

        <Tab.Screen
          name={"Resultat"}
          component={Resultat}
          options={{
            title: "Caracteristiques",
            headerTitleAlign: "center",
            headerStyle: {
              backgroundColor: "#fad97f",
            },
            //
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
        <Tab.Screen
          name="Charge_Dc"
          component={Charge_Dc}
          options={{
            title: "Charge  Continu",
            headerTitleAlign: "center",
            headerStyle: {
              backgroundColor: "#fad97f",
            },
            //
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
        <Tab.Screen
          name="Resultat final"
          component={Resultat_final}
          options={{
            title: "Resultat Dc",
            headerTitleAlign: "center",
            headerStyle: {
              backgroundColor: "#fad97f",
            },
            //
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
        <Tab.Screen
          name="Charge_Ac"
          component={Charge_Ac}
          options={{
            title: "Charge AC",
            headerTitleAlign: "center",
            headerStyle: {
              backgroundColor: "#fad97f",
            },
            //
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
        <Tab.Screen
          name="resultat_Ac"
          component={Result_AC}
          options={{
            title: "Consommation",
            headerTitleAlign: "center",
            headerStyle: {
              backgroundColor: "#fad97f",
            },
            //
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
