import { ImageBackground, StyleSheet, View } from "react-native";
import StartGameScreeen from "./screens/StartGameScreen";
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from "react";
import GameScreeen from "./screens/GameScreen";

export default function App() {
  const [userNumber, setUserNumber] = useState();

  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
  }
  let screen = <StartGameScreeen onPickNumber={pickedNumberHandler} />

  if (userNumber) {
    screen = <GameScreeen />
  }
  return (
    <LinearGradient colors={['#4e0329', '#ddb52f']} style={styles.rootContainer}>
      <ImageBackground source={require('./assets/Images/background.png')} style={styles.rootContainer} imageStyle={styles.backgroundImage}>
        {screen}
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1
  },
  backgroundImage: {
    opacity: 0.15
  }
});