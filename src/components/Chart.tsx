import React from 'react';
import { View, Text } from 'react-native';
import { LineChart } from 'react-native-svg-charts';
import { useDaisyUI } from 'daisyui-react-native';

interface ChartProps {
  data: Array<{ activity: string; wasted: boolean; regrets: boolean }>;
}

const Chart: React.FC<ChartProps> = ({ data }) => {
  const { styles } = useDaisyUI();

  const wastedData = data.map((item) => (item.wasted ? 1 : 0));
  const regretsData = data.map((item) => (item.regrets ? 1 : 0));

  return (
    <View style={styles.chartContainer}>
      <Text style={styles.chartTitle}>时间分析</Text>
      <View style={styles.chart}>
        <LineChart
          style={styles.lineChart}
          data={wastedData}
          svg={{ stroke: 'rgba(255, 0, 0, 0.8)' }}
          contentInset={{ top: 20, bottom: 20 }}
        />
        <LineChart
          style={styles.lineChart}
          data={regretsData}
          svg={{ stroke: 'rgba(0, 0, 255, 0.8)' }}
          contentInset={{ top: 20, bottom: 20 }}
        />
      </View>
      <View style={styles.legend}>
        <View style={styles.legendItem}>
          <View style={[styles.legendColor, { backgroundColor: 'rgba(255, 0, 0, 0.8)' }]} />
          <Text style={styles.legendText}>浪费时间</Text>
        </View>
        <View style={styles.legendItem}>
          <View style={[styles.legendColor, { backgroundColor: 'rgba(0, 0, 255, 0.8)' }]} />
          <Text style={styles.legendText}>遗憾</Text>
        </View>
      </View>
    </View>
  );
};

export default Chart;
</Text>