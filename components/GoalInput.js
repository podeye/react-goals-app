import React, {useState} from 'react';
import {View, Text, Button, StyleSheet, TextInput, Modal} from 'react-native';

const GoalInput = props =>{
  const [enteredGoal, setEnteredGoal] = useState('');
  const goalInptHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = () =>{
    props.onAddGoal(enteredGoal);
    setEnteredGoal('');
  }
  const cancelModal = () =>{
    props.visible(false);
  }

  return ( 
    <Modal visible = {props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput 
        placeholder="Course Goal" 
        style={styles.input}
        onChangeText={goalInptHandler}
        value={enteredGoal}/>
      <View style={styles.side}>
        <View style={styles.button}>
          <Button title="ADD" onPress={()=>(
                addGoalHandler()
          )}/>
          </View>
          <View style={styles.button}>
          <Button title="Cancel" color='red' onPress={props.cancelModal}/>
          </View>
        </View>
      </View>
  </Modal>)
}

const styles = StyleSheet.create({
  inputContainer:{
    justifyContent:'center',
    alignItems:'center',
    flex:1,
  },
  input:{
    margin:1,
    width:'80%',
    padding:10,
    borderColor:'#000',
    borderWidth:1,
    marginBottom: 10,
  },
  side:{
    flexDirection:'row',
    justifyContent: 'space-between',
    width: '80%',
  },
  button:{
    width:'40%',
  }
})

export default GoalInput;