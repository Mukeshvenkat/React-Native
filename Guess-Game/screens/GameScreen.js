import { Alert, FlatList, StyleSheet, Text, View, useWindowDimensions } from "react-native";
import Title from "../components/ui/Title";
import { useEffect, useState } from "react";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";
import { Ionicons } from "@expo/vector-icons";
import GuessLogItem from "../components/game/GuessLogItem";

function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

let minBoundary = 1;
let maxBoundary = 100;

function GameScreeen({ userNumber, onGameOver }) {
  const initialGuess = generateRandomBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [guessRounds, setGuessRounds] = useState([initialGuess]);
  const { height, width } = useWindowDimensions();
  function nextGuessHandler(direction) {
    if (
      (direction === "lower" && currentGuess < userNumber) ||
      (direction === "higher" && currentGuess > userNumber)
    ) {
      Alert.alert("Dondt Lie!", "You know that is wrong...", [
        { text: "Sorry!", style: "cancel" },
      ]);
      return;
    }
    if (direction === "lower") {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }

    const newRndNumber = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess
    );
    setCurrentGuess(newRndNumber);
    setGuessRounds((prevRounds) => [newRndNumber, ...prevRounds]);
  }

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver(guessRounds.length);
    }
  }, [currentGuess, userNumber, onGameOver]);

  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, []);

  let content = <>
    <NumberContainer>{currentGuess}</NumberContainer>
    <Card>
      <InstructionText style={styles.instructionText}>
        Higher or Lower?
      </InstructionText>
      <View style={styles.buttonViewContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
            <Ionicons name="md-remove" size={24} color="white" />
          </PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={nextGuessHandler.bind(this, "higher")}>
            <Ionicons name="md-add" size={24} color="white" />
          </PrimaryButton>
        </View>
      </View>
    </Card>
  </>

  if (width > 500) {
    content = <>
      <View style={styles.buttonsContainerWide}>
        <View style={styles.buttonViewContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
              <Ionicons name="md-remove" size={24} color="white" />
            </PrimaryButton>
          </View>
          <NumberContainer>{currentGuess}</NumberContainer>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "higher")}>
              <Ionicons name="md-add" size={24} color="white" />
            </PrimaryButton>
          </View>
        </View>
      </View>
    </>;
  }
  const guessRoundsLength = guessRounds.length;
  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      {content}
      <View style={styles.listContainer}>
        <FlatList
          data={guessRounds}
          renderItem={(itemData) => (
            <GuessLogItem
              roundsNumber={guessRoundsLength - itemData.index}
              guessNumber={itemData.item}
            />
          )}
          keyExtractor={(item) => item}
        />
      </View>
    </View>
  );
}

export default GameScreeen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
  instructionText: {
    marginBottom: 12,
  },
  buttonViewContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
  buttonsContainerWide: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  listContainer: {
    flex: 1,
    padding: 16,
  },
});
