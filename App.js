import React, {useEffect, useState} from 'react';
import {Platform, SafeAreaView, Text} from 'react-native';
import CustomModule from './CustomModule';
const App = () => {
  const [deviceID, setDeviceID] = useState('');
  useEffect(() => {
    if (Platform.OS === 'android') {
      CustomModule.showToast('Hello Android Native Module', message => {
        console.log(message);
      });
      const getAndoridDeviceID = async () => {
        setDeviceID(await CustomModule.getDeviceID());
      };
      getAndoridDeviceID();
    }
  }, []);
  return (
    <SafeAreaView style={{justifyContent: 'center', alignItems: 'center'}}>
      <Text
        style={{
          fontStyle: 'italic',
          fontWeight: 'bold',
          marginTop: 30,
          color: 'red',
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
