import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

interface Props {}
interface State {
  todoValue: string
}

export default class App extends Component<Props, State> {

  constructor(props: any) {
    super(props);

    this.state = {
      todoValue: ""
    };
  };

  render(): React.ReactNode {
    const { todoValue } = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.formGroup}>
          <Text style={styles.formLabel}>やること</Text>
          <TextInput
            style={styles.formControl}
            value={todoValue}
            placeholder="何かやること"
            onChangeText={v => this.setState({ todoValue: v })}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  formGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
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
  }
});
