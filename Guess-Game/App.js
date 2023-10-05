import { ImageBackground, StyleSheet, View } from "react-native";
import StartGameScreeen from "./screens/StartGameScreen";
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  return (
    <LinearGradient colors={['#4e0329', '#ddb52f']} style={styles.rootContainer}>
      <ImageBackground source={require('./assets/Images/background.png')} style={styles.rootContainer} imageStyle={styles.backgroundImage}>
        <StartGameScreeen />
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