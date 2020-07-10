import React, { useState } from "react";
import {View,StyleSheet,  TextInput, Button,Modal} from 'react-native';
const  GoalInput=(props)=> {
    const Goal = useState("");
    return (
      <Modal visible={props.visible} >
            <View style={styles.form}>
        <TextInput
          placeholder="Course Goal"
          style={styles.input}
          onChangeText={(text) => Goal[1](text)}
          value={Goal[0]}
        />
        <Button title="Add" onPress={props.onAdGoal.bind(this,Goal[0])}  />
      </View>
      </Modal>
      
    )
}
export default  GoalInput;
const styles=StyleSheet.create({
    form: {
        flex:1,
        justifyContent: "center",
        alignItems: "center",
      },
      input: {
        borderColor: "black",
        borderWidth: 2,
        padding: 10,
        marginBottom: 5,
        width: "80%",
      }
})