import { StyleSheet } from 'react-native';
import daisyUIConfig from './daisyui.config';

const { colors, fontFamily } = daisyUIConfig.themes[0];

const globalStyles = StyleSheet.create({
  text: {
    fontFamily: fontFamily.sans,
    color: colors.neutral,
  },
  primaryText: {
    fontFamily: fontFamily.sans,
    color: colors.primary,
  },
  secondaryText: {
    fontFamily: fontFamily.sans,
    color: colors.secondary,
  },
  accentText: {
    fontFamily: fontFamily.sans,
    color: colors.accent,
  },
});

export default globalStyles;
