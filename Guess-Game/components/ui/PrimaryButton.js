import { Pressable, StyleSheet, Text, View } from "react-native";
import Colors from "../../constants/Colors";

function PrimaryButton({ children, onPress }) {
  const onPressHandler = () => {
    onPress();
  };

  return (
    <View style={styles.buttonOuterConatiner}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerConatiner, styles.pressed]
            : styles.buttonInnerConatiner
        }
        android_ripple={{ color: Colors.primary600 }}
        onPress={onPressHandler}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterConatiner: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
  },
  buttonInnerConatiner: {
    backgroundColor: Colors.primary500,
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  pressed: {
    opacity: 0.75,
  },
});
