import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Picker } from 'react-native-paper';

export default () => {

  const [selectedValue, setSelectedValue] = useState('');

  return (
    <View>
      <Text>Select a value:</Text>
      <Picker
        selectedValue={selectedValue}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="Option 1" value="option1" />
        <Picker.Item label="Option 2" value="option2" />
        <Picker.Item label="Option 3" value="option3" />
      </Picker>
      <Text>Selected Value: {selectedValue}</Text>
    </View>
  );
};

