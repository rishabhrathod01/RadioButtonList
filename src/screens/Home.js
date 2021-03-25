import React from 'react';
import { Text } from 'react-native';
import { radioButtonListData } from '../mock/radioButtonListdata';
import OptionItem from '../components/OptionItem';
import RadioButtonList from '../components/RadioButtonList';

// 1. Data format to render Radio Button (maintained in state)
// 2. renderContent for All Radio Item
// 3. maintained state for selected radioButton Item
//

const lastId = radioButtonListData[radioButtonListData.length - 1].id;

const Home = () => {
  return (
    <RadioButtonList
      onSelectionChange={(id) => {
        console.log('CHANGED VALUE to', id);
      }}
      initialSelectedItemId={lastId}
      selectedId={'1'}>
      <OptionItem label="THis is label" color="red">
        <Text>this is co</Text>
      </OptionItem>

      <OptionItem>
        <Text>this is co</Text>
      </OptionItem>
      <OptionItem>
        <Text>this is co</Text>
      </OptionItem>
    </RadioButtonList>
  );
};

export default Home;
