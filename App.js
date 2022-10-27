import React, {useEffect, useState} from 'react';
import {SafeAreaView, Text} from 'react-native';
import CustomModule from './CustomModule';
const App = () => {
  const [deviceID, setDeviceID] = useState('');
  useEffect(() => {
    CustomModule.showToast();
    const getAndoridDeviceID = async () => {
      setDeviceID(await CustomModule.getDeviceID());
    };
    getAndoridDeviceID();
  }, []);
  return (
    <SafeAreaView style={{justifyContent: 'center', alignItems: 'center'}}>
      <Text
        style={{
          fontStyle: 'italic',
          fontWeight: 'bold',
          marginTop: 30,
        }}>
        NATIVE MODULES
      </Text>
      <Text
        style={{
          fontStyle: 'italic',
          fontWeight: 'bold',
          marginTop: 30,
        }}>
        {deviceID}
      </Text>
    </SafeAreaView>
  );
};

export default App;
