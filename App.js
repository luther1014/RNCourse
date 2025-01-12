import { useState } from "react";
import { StyleSheet, View, Button, TextInput, FlatList } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  function addGoalHandler(enteredGoalText) {
    if (enteredGoalText.length > 3) {
      setCourseGoals((prev) => [
        ...prev,
        { text: enteredGoalText, id: Math.random().toString() },
      ]);
    }
  }
  function onDeleteHandler(goalId) {
    setCourseGoals((prev) => prev.filter((goal) => goal.id !== goalId));
  }
  return (
    <View style={styles.appContainer}>
      <GoalInput onAddGoal={addGoalHandler} />

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
            return <GoalItem item={itemData.item} onDelete={onDeleteHandler} />;
          }}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 48,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    flex: 4,
  },
});
