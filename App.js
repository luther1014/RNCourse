import { useState } from "react";
import { StyleSheet, View, Button, TextInput, FlatList } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
import { StatusBar } from "react-native";

export default function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [courseGoals, setCourseGoals] = useState([]);

  function addGoalHandler(enteredGoalText) {
    if (enteredGoalText.length > 3) {
      setCourseGoals((prev) => [
        ...prev,
        { text: enteredGoalText, id: Math.random().toString() },
      ]);
      handleModalVisibility();
    }
  }
  function onDeleteHandler(goalId) {
    setCourseGoals((prev) => prev.filter((goal) => goal.id !== goalId));
  }
  function handleModalVisibility() {
    setIsModalVisible((prev) => !prev);
  }
  return (
    <>
      <StatusBar style="auto" />
      <View style={styles.appContainer}>
        <Button
          onPress={handleModalVisibility}
          title="Add New Goal"
          color="#8891f8"
        />
        <GoalInput
          onAddGoal={addGoalHandler}
          isModalVisible={isModalVisible}
          onCancel={handleModalVisibility}
        />

        <View style={styles.goalsContainer}>
          {/* <ScrollView>
          {courseGoals &&
            courseGoals.map((goal) => (
              <View style={styles.goalItem} key={goal}>
                <Text style={styles.goalText}>{goal}</Text>
              </View>
            ))}
        </ScrollView> */}
          <FlatList
            data={courseGoals}
            renderItem={(itemData) => {
              return (
                <GoalItem item={itemData.item} onDelete={onDeleteHandler} />
              );
            }}
            keyExtractor={(item) => item.id}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 64,
    paddingHorizontal: 16,
    backgroundColor: "#000",
  },
  goalsContainer: {
    flex: 4,
  },
});
