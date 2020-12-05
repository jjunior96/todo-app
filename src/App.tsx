/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-sparse-arrays */
import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  StatusBar,
} from 'react-native';

import Layout from './components/Layout';
import Title from './components/Title';

interface ItemTodoProps {
  text: string;
  completed: boolean;
}

export default function App() {
  const [value, setValue] = useState<string>('');
  const [toDoList, setToDos] = useState<ItemTodoProps[]>([]);
  const [error, showError] = useState<Boolean>(false);

  const handleSubmit = (): void => {
    if (value.trim()) {
      setToDos([...toDoList, {text: value, completed: false}]);
    } else {
      showError(true);
    }
    setValue('');
  };

  const removeItem = (index: number): void => {
    const newToDoList = [...toDoList];
    newToDoList.splice(index, 1);
    setToDos(newToDoList);
  };

  const toggleComplete = (index: number): void => {
    const newToDoList = [...toDoList];
    newToDoList[index].completed = !newToDoList[index].completed;
    setToDos(newToDoList);
  };

  return (
    <>
      <StatusBar barStyle="light-content" />
      <Layout>
        <Title text="Todo List" />
        <View style={styles.inputWrapper}>
          <TextInput
            placeholder="Insira uma nova tarefa..."
            placeholderTextColor="#737373"
            value={value}
            onChangeText={(e) => {
              setValue(e);
              showError(false);
            }}
            style={styles.inputBox}
          />

          <Button title="Adicionar" onPress={handleSubmit} />
        </View>
        {error && <Text style={styles.error}>Insira alguma tarefa...</Text>}
        {/* <Text style={styles.subtitle}>Suas tarefas :</Text> */}
        {toDoList.length === 0 && (
          <Text style={styles.subtitle}>Nenhuma tarefa disponível</Text>
        )}
        {toDoList.map((toDo: ItemTodoProps, index: number) => (
          <View style={styles.listItem} key={`${index}_${toDo.text}`}>
            <Text
              style={[
                styles.task,
                {textDecorationLine: toDo.completed ? 'line-through' : 'none'},
                ,
              ]}>
              {toDo.text}
            </Text>
            <Button
              title={toDo.completed ? 'Completado' : 'Completar'}
              onPress={() => toggleComplete(index)}
            />
            <Button
              title="X"
              onPress={() => {
                removeItem(index);
              }}
              color="crimson"
            />
          </View>
        ))}
      </Layout>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 35,
    alignItems: 'center',
  },
  inputWrapper: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  inputBox: {
    width: 200,
    borderColor: 'purple',
    borderRadius: 8,
    borderWidth: 2,
    paddingLeft: 8,
  },
  subtitle: {
    fontSize: 20,
    marginBottom: 20,
    color: '#737373',
  },
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginBottom: 10,
  },
  addButton: {
    alignItems: 'flex-end',
    backgroundColor: '#737373',
    color: '#737373',
  },
  task: {
    width: 200,
    color: '#737373',
    fontSize: 20,
  },
  error: {
    color: 'red',
  },
});
