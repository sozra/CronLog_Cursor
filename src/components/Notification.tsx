import React, { useEffect, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useDaisyUI } from 'daisyui-react-native';
import { scheduleNotification } from '../utils/notifications';

const Notification = () => {
  const [timeInterval, setTimeInterval] = useState(30);
  const { styles } = useDaisyUI();

  useEffect(() => {
    scheduleNotification(timeInterval);
  }, [timeInterval]);

  const handleSetInterval = (newInterval: number) => {
    setTimeInterval(newInterval);
    scheduleNotification(newInterval);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>设置时间间隔</Text>
      <View style={styles.buttonGroup}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleSetInterval(15)}
        >
          <Text style={styles.buttonText}>15 分钟</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleSetInterval(30)}
        >
          <Text style={styles.buttonText}>30 分钟</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleSetInterval(60)}
        >
          <Text style={styles.buttonText}>1 小时</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Notification;
</Text>