import React, {useState} from 'react';
import {Text, View, StyleSheet, TextInput, Pressable} from 'react-native';

const App: () => Node = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  const [nameDisplay, setNameDisplay] = useState('');
  const [ageDisplay, setAgeDisplay] = useState('');

  const displayData = () => {
    setNameDisplay(name);
    setAgeDisplay(age);
  };

  const displayDataClear = () => {
    setName('');
    setAge('');
  };

  const displayOke = () => {
    displayDataClear();
    displayData();
  };

  return (
    <View style={styles.container}>
      <Text>Enter Name: </Text>
      <TextInput
        style={styles.input}
        placeholder="e.g mujak"
        value={name}
        onChangeText={val => setName(val)}
      />
      <Text>Enter Age: </Text>
      <TextInput
        style={styles.input}
        keyboardType="decimal-pad"
        placeholder="e.g 10"
        value={age}
        onChangeText={val => setAge(val)}
      />
      <Pressable
        onPress={() => {
          displayOke();
        }}
        style={({pressed}) => [
          {
            backgroundColor: pressed ? '#666464' : '#454ad9',
          },
          styles.wrapperCustom,
        ]}>
        <Text style={styles.textButton}>Press Me Please</Text>
      </Pressable>
      <View style={styles.body}>
        <Text style={styles.font}>Name : {nameDisplay} </Text>
        <Text style={styles.font}>Age : {ageDisplay} th </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  buttonContainer: {
    marginTop: 20,
  },
  input: {
    borderWidth: 1,
    color: '#000',
    width: 200,
    padding: 10,
    margin: 10,
  },
  body: {
    borderWidth: 1,
    width: 200,
    height: 100,
    marginTop: 50,
    fontWeight: 'bold',
  },
  font: {
    fontWeight: 'bold',
    fontSize: 15,
    paddingVertical: 10,
    marginLeft: 10,
  },
  textButton: {
    color: '#fff',
    fontWeight: '400',
    fontSize: 16,
  },
  wrapperCustom: {
    // borderRadius: 8,
    padding: 10,
    borderRadius: 20,
    shadowColor: '#0000',
    shadowOpacity: 0.23,
    shadowRadius: 3,
    elevation: 5,
  },
});

export default App;
