import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet
} from 'react-native';

interface Props {
  label: string | ""
  value: string | ""
  placeholder: string | ""
  onChangeText: any
}

export default class FormInput extends Component<Props> {

  render(): React.ReactNode {
    const {
      label,
      value,
      placeholder,
      onChangeText
    } = this.props;
    return (
      <View style={styles.formGroup}>
        <Text style={styles.formLabel}>{label}</Text>
        <TextInput
          style={styles.formControl}
          value={value}
          placeholder={placeholder}
          onChangeText={v => onChangeText(v)}
        />
      </View>
    );
  };
};
  
const styles = StyleSheet.create({
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
  }
});