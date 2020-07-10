import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  View,
  FlatList,
  Button
} from "react-native";
import GoalList from './components/GoalList';
import GoalInput from './components/GoalInput';

export default function App() {
  
  const [listGoal, setListGoal] = useState([]);
  const [visible, setVisible]=useState(false)
  const adGoal = (Goal) => {
    setListGoal((listGoal) => [...listGoal, Goal]);
    setVisible(visible=> !visible)
  };
  //Take goal id as an argument
  const Delete=(  )=>{
       console.log("Item are deleted !")
  }
  const onModal=()=>{
    setVisible(visible=> !visible)
  }

  return (
    <View style={styles.main}>
      <Button title="Add New Goal" onPress={onModal}/>
      {visible==true?<GoalInput onAdGoal={adGoal} visible={visible} modal={onModal}/>:null}
     
      <FlatList
       keyExtractor={(item,index)=> index+"0"}
        data={listGoal}
        renderItem={(goal) => (<GoalList item={goal.item} onDelete={Delete}/>)}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  main: { padding: 30 }
});
