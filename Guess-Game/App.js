import { ImageBackground, SafeAreaView, StyleSheet } from "react-native";
import StartGameScreeen from "./screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import GameScreeen from "./screens/GameScreen";
import Colors from "./constants/Colors";
import GameOverScreeen from "./screens/GameOverScreen";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(true);
  const [guessRounds, setGuessRounds] = useState(0);

  const [fontsLoaded] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
    setGameIsOver(false);
  }

  function gameOverHandler(guessRoundsLength) {
    setGameIsOver(true);
    setGuessRounds(guessRoundsLength);
  }

  function startNewGameHandler() {
    setUserNumber(null);
    setGuessRounds(0);
  }
  let screen = <StartGameScreeen onPickNumber={pickedNumberHandler} />;

  if (userNumber) {
    screen = (
      <GameScreeen userNumber={userNumber} onGameOver={gameOverHandler} />
    );
  }
  if (gameIsOver && userNumber) {
    screen = (
      <GameOverScreeen
        userNumber={userNumber}
        roundsNumber={guessRounds}
        onStartGame={startNewGameHandler}
      />
    );
  }
  return (
    <>
      <StatusBar style="light" />
      <LinearGradient
        colors={[Colors.primary700, Colors.accent500]}
        style={styles.rootContainer}
      >
        <ImageBackground
          source={require("./assets/Images/background.png")}
          style={styles.rootContainer}
          imageStyle={styles.backgroundImage}
        >
          <SafeAreaView style={styles.rootContainer}>{screen}</SafeAreaView>
        </ImageBackground>
      </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
});
