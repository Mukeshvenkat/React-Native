import { ImageBackground, SafeAreaView, StyleSheet } from "react-native";
import StartGameScreeen from "./screens/StartGameScreen";
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from "react";
import GameScreeen from "./screens/GameScreen";
import Colors from "./constants/Colors";
import GameOverScreeen from "./screens/GameOverScreen";

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(true);

  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
    setGameIsOver(false);
  }

  function gameOverHandler() {
    setGameIsOver(true);
  }
  let screen = <StartGameScreeen onPickNumber={pickedNumberHandler} />

  if (userNumber) {
    screen = <GameScreeen userNumber={userNumber} onGameOver={gameOverHandler} />
  }
  if (gameIsOver && userNumber) {
    screen = <GameOverScreeen />
  }
  return (
    <LinearGradient colors={[Colors.primary700, Colors.accent500]} style={styles.rootContainer}>
      <ImageBackground source={require('./assets/Images/background.png')} style={styles.rootContainer} imageStyle={styles.backgroundImage}>
        <SafeAreaView style={styles.rootContainer}>{screen}</SafeAreaView>
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