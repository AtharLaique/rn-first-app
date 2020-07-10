import React from "react";
import { View, Text, StyleSheet ,TouchableOpacity} from "react-native";

const GoalList = (props) => {
  return (
    <TouchableOpacity onPress={props.onDelete}>
      <View>
      <Text style={styles.lisItem}>{props.item}</Text>
    </View>
    </TouchableOpacity>
    
  );
};
export default GoalList;
const styles = StyleSheet.create({
  lisItem: {
    padding: 20,
    backgroundColor: "#ccc",
    borderColor: "black",
    borderWidth: 2,
    margin: 10,
  },
});
