import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useDaisyUI } from 'daisyui-react-native';

interface ReflectionFormProps {
  onSubmit: (reflection: { activity: string; wasted: boolean; regrets: boolean }) => void;
}

const ReflectionForm: React.FC<ReflectionFormProps> = ({ onSubmit }) => {
  const [activity, setActivity] = useState('');
  const [wasted, setWasted] = useState(false);
  const [regrets, setRegrets] = useState(false);
  const { styles } = useDaisyUI();

  const handleSubmit = () => {
    onSubmit({ activity, wasted, regrets });
    setActivity('');
    setWasted(false);
    setRegrets(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>记录反思</Text>
      <TextInput
        style={styles.input}
        onChangeText={setActivity}
        value={activity}
        placeholder="在这里记录你的活动"
      />
      <View style={styles.checkboxGroup}>
        <TouchableOpacity
          style={styles.checkbox}
          onPress={() => setWasted(!wasted)}
        >
          <Text style={styles.checkboxText}>浪费时间？</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.checkbox}
          onPress={() => setRegrets(!regrets)}
        >
          <Text style={styles.checkboxText}>有遗憾？</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={styles.submitButton}
        onPress={handleSubmit}
      >
        <Text style={styles.submitButtonText}>提交</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ReflectionForm;
</Text>