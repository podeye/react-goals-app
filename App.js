import React, {useState} from 'react';
import { 
  StyleSheet,
  View,
  Button,
  FlatList 
} from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
 
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

 

  const addGoalHandler = (goalTitle)=>{
    setCourseGoals(currentGoals => [...currentGoals, {key: Math.random().toString(), value: goalTitle}]);
    setIsAddMode(false);
  }

  const onDelete = (id) =>{
    setCourseGoals(currentGoals => {
      return currentGoals.filter(goal => goal.key !== id);
    })
  }

  const cancelModal = () =>{
    setIsAddMode('false');
  }

  return (
    <View style={styles.screen}>
      <Button title='Add New Goal' onPress={()=>setIsAddMode(true)}/>
      <GoalInput onAddGoal = {addGoalHandler} visible={isAddMode} cancelModal ={cancelModal}/>
     
      <FlatList data={courseGoals} renderItem={itemData=>
         <GoalItem 
          title={itemData.item.value}
          id={itemData.item.key} 
          onDelete={onDelete.bind(this,itemData.item.key)}/>}>
     
      </FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  screen:{
    padding:50,
  },

});
