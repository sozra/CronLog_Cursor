import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { setNotificationHandler, scheduleNotification } from './utils/notifications';
import { getReflectionData, saveReflectionData } from './utils/storage';
import Notification from './components/Notification';
import ReflectionForm from './components/ReflectionForm';
import Chart from './components/Chart';
import './styles/global';

export default function App() {
  const [reflectionData, setReflectionData] = useState([]);

  useEffect(() => {
    setNotificationHandler();
    scheduleNotification();
    loadData();
  }, []);

  const loadData = async () => {
    const data = await getReflectionData();
    if (data) {
      setReflectionData(data);
    }
  };

  const handleSubmit = async (reflection) => {
    const newData = [...reflectionData, reflection];
    await saveReflectionData(newData);
    setReflectionData(newData);
  };

  return (
    <View style={styles.container}>
      <Notification />
      <ReflectionForm onSubmit={handleSubmit} />
      <Chart data={reflectionData} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
