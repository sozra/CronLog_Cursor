import { DaisyUIReactNativeConfig } from 'daisyui-react-native';

const daisyUIConfig: DaisyUIReactNativeConfig = {
  themes: [
    {
      name: 'default',
      colors: {
        primary: '#3B82F6',
        secondary: '#9333EA',
        accent: '#F59E0B',
        neutral: '#9CA3AF',
      },
      fontFamily: {
        sans: 'System',
        serif: 'Georgia',
        mono: 'Menlo',
      },
    },
  ],
};

export default daisyUIConfig;
