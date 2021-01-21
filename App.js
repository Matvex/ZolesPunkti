import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import ControlTab from "./components/ControlTab.js";
import ScoreTab from "./components/ScoreTab.js";

export default function App() {
  let gameList = {
    games: [
      {
        id: "0",
        player0: false,
        player1: false,
        player2: false,
        player3: false,
        win: false,
        loose: false,
      },
    ],
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.name_containerw}>
        <Text style={styles.name}>Elvis</Text>
        <Text style={styles.name}>Janis</Text>
        <Text style={styles.name}>Girts</Text>
        <Text style={styles.name}>Indars</Text>
        <Text style={styles.pule_name}>Pules</Text>
      </View>
      <ScoreTab games={gameList.games}></ScoreTab>
      <ControlTab games={gameList.games}></ControlTab>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
  },
  name_container: {
    height: 50,
    flexDirection: "row",
    backgroundColor: "yellow",
  },

  name: {
    flex: 2,
  },
  pule_name: {
    flex: 1,
  },
});
