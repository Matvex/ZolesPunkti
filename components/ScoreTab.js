import React from "react";
import { StyleSheet, FlatList, View, Text } from "react-native";

const ScoreTab = (props) => {
  return (
    <View style={styles.score_container}>
      <FlatList
        data={props.games}
        renderItem={({ item }) => (
          <Text style={styles.text}>{item.player0 ? "1" : "0"}</Text>
        )}
      />
    </View>
  );
};

export default ScoreTab;

const styles = StyleSheet.create({
  score_container: {
    flex: 2,
  },
  score_row: {
    flexDirection: "row",
    flex: 1,
  },
  text: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    fontSize: 18,
  },
});
