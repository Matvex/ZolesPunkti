import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import ControlButton from "./ControlButton";

const ControlTab = (props) => {
  const [player0, setPlayer0] = useState(false);
  const [player1, setPlayer1] = useState(false);
  const [player2, setPlayer2] = useState(false);
  const [player3, setPlayer3] = useState(false);
  const [win, setWin] = useState(false);
  const [loose, setLoose] = useState(false);
  const [jani, setJani] = useState(false);
  const [bezst, setBezst] = useState(false);
  const [zole, setZole] = useState(false);
  const [active, setActive] = useState(false);

  const togglePlayer0Handler = () => {
    setPlayer0((prevPlayer0) => !prevPlayer0);
    setPlayer1(false);
    setPlayer2(false);
    setPlayer3(false);
  };

  const togglePlayer1Handler = () => {
    setPlayer0(false);
    setPlayer1((prevPlayer1) => !prevPlayer1);
    setPlayer2(false);
    setPlayer3(false);
  };

  const togglePlayer2Handler = () => {
    setPlayer0(false);
    setPlayer1(false);
    setPlayer2((prevPlayer2) => !prevPlayer2);
    setPlayer3(false);
  };

  const togglePlayer3Handler = () => {
    setPlayer0(false);
    setPlayer1(false);
    setPlayer2(false);
    setPlayer3((prevPlayer3) => !prevPlayer3);
  };

  const toggleWinHandler = () => {
    setWin((prevWin) => !prevWin);
    setLoose(false);
  };

  const toggleLooseHandler = () => {
    setLoose((prevLoose) => !prevLoose);
    setWin(false);
  };

  const submitHandler = () => {
    console.log(
      (parseInt(props.games[props.games.length - 1].id) + 1).toString()
    );
    debugger;
    var controls = {
      id: (parseInt(props.games[props.games.length - 1].id) + 1).toString(),
      player0: player0,
      player1: player1,
      player2: player2,
      player3: player3,
      win: win,
      loose: loose,
    };
    props.games.push(controls);
  };

  return (
    <View style={styles.control_container}>
      <View style={styles.control_row}>
        <ControlButton
          title="0"
          onPress={togglePlayer0Handler}
          value={player0}
        ></ControlButton>
        <ControlButton
          title="1"
          onPress={togglePlayer1Handler}
          value={player1}
        ></ControlButton>
        <ControlButton
          title="2"
          onPress={togglePlayer2Handler}
          value={player2}
        ></ControlButton>
        <ControlButton
          title="3"
          onPress={togglePlayer3Handler}
          value={player3}
        ></ControlButton>
        <ControlButton title="P"></ControlButton>
      </View>
      <View style={styles.control_row}>
        <ControlButton
          title="Vinne"
          onPress={toggleWinHandler}
          value={win}
        ></ControlButton>
        <ControlButton
          title="Zaude"
          onPress={toggleLooseHandler}
          value={loose}
        ></ControlButton>
      </View>
      <View style={styles.control_row}>
        <ControlButton title="Jaņi"></ControlButton>
        <ControlButton title="Bezstiks"></ControlButton>
        <ControlButton title="Zole"></ControlButton>
      </View>
      <View style={styles.control_row}>
        <ControlButton title="Gatavs" onPress={submitHandler}></ControlButton>
      </View>
    </View>
  );
};

export default ControlTab;

const styles = StyleSheet.create({
  control_container: {
    flex: 1,
  },
  control_row: {
    flexDirection: "row",
    flex: 1,
  },
});
