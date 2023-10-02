import { StyleSheet, Text, View } from "react-native";

function GoalItem(props) {
  return (
    <View style={styles.goalItemContainer}>
      <Text style={styles.goalText}>{props.text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  goalItemContainer: {
    margin: 8,
    padding: 8,
    borderRadius: 8,
    backgroundColor: "#5e0acc",
  },
  goalText: {
    color: "white",
  }
});
export default GoalItem;
