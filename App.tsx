import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  FlatList,
  SafeAreaView
} from 'react-native';

interface Props {}
interface State {
  todoValue: string
  memoValue: string
  todoList: { todo: string, memo: string }[]
}

export default class App extends Component<Props, State> {

  constructor(props: any) {
    super(props);

    this.state = {
      todoValue: "",
      memoValue: "",
      todoList: [],
    };
  };

  render(): React.ReactNode {
    const { todoValue, memoValue, todoList } = this.state;

    const onChangeTodoValue = (v: any) => this.setState({ todoValue: v });
    const onChangeMemoValue = (v: any) => this.setState({ memoValue: v });
    const setNewTodo = () => {
      const newList = todoList.concat({ todo: todoValue, memo: memoValue });
      this.setState({
        todoValue: "",
        memoValue: "",
        todoList: newList
      });
    };

    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.formGroup}>
          <Text style={styles.formLabel}>やること</Text>
          <TextInput
            style={styles.formControl}
            value={todoValue}
            placeholder="何かやること"
            onChangeText={onChangeTodoValue}
          />
        </View>
        <View style={styles.formGroup}>
          <Text style={styles.formLabel}>メモ</Text>
          <TextInput
            style={styles.formControl}
            value={memoValue}
            placeholder="何かメモ"
            onChangeText={onChangeMemoValue}
          />
        </View>
        <Button
          title="登録"
          onPress={setNewTodo}
        />
         <FlatList
          data={todoList}
          renderItem={({ item }) => {
            return (
              <View style={styles.listItem}>
                <Text>{item.todo}</Text>
                <Text>{item.memo}</Text>
              </View>
            );
          }}
          keyExtractor={item => item.todo}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  formGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  formLabel: {
    paddingRight: 16,
  },
  formControl: {
    height: 40,
    width: 160,
    padding: 8,
    borderColor: 'gray',
    borderWidth: 1
  },
  listItem: {
    height: 64,
    width: 200,
    marginBottom: 16,
    padding: 16,
    borderColor: 'gray',
    borderWidth: 1,
  }
});
