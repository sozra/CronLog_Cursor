import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeReflection = async (reflection: { activity: string; wasted: boolean; regrets: boolean; timestamp: number }) => {
  try {
    const storedReflections = await AsyncStorage.getItem('reflections');
    const reflections = storedReflections ? JSON.parse(storedReflections) : [];
    reflections.push(reflection);
    await AsyncStorage.setItem('reflections', JSON.stringify(reflections));
  } catch (error) {
    console.error('Error storing reflection:', error);
  }
};

export const getReflections = async () => {
  try {
    const storedReflections = await AsyncStorage.getItem('reflections');
    return storedReflections ? JSON.parse(storedReflections) : [];
  } catch (error) {
    console.error('Error getting reflections:', error);
    return [];
  }
};

export const clearReflections = async () => {
  try {
    await AsyncStorage.removeItem('reflections');
  } catch (error) {
    console.error('Error clearing reflections:', error);
  }
};
