import {
  TextInput,
  StyleSheet,
  View,
  Button,
  Modal,
  Image,
} from "react-native";
import { useState } from "react";
function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText("");
  }

  return (
    <Modal visible={props.isModalVisible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/goal.png")}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal!"
          value={enteredGoalText}
          onChangeText={goalInputHandler}
        />
        <View style={styles.buttonContainer}>
          <Button title="Add Goal" onPress={addGoalHandler} color="#5e0acc" />
          <Button title="Cancel" color="#f31282" onPress={props.onCancel} />
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    marginBottom: 24,
    padding: 16,
    backgroundColor: "#311b6b",
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 16,
  },
  textInput: {
    width: "100%",
    padding: 8,
    color: "#120438",
    borderColor: "#e4d0ff",
    borderWidth: 1,
    backgroundColor: "#e4d0ff",
    borderRadius: 6,
  },
  buttonContainer: {
    marginTop: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "60%",
  },
});

export default GoalInput;
