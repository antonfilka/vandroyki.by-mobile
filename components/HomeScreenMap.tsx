import * as Haptics from 'expo-haptics';
import { forwardRef } from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import MapView from 'react-native-maps';
import { Button as TButton, ButtonText, ButtonProps } from 'tamagui';

export const HomeScreenMap = forwardRef<TouchableOpacity, ButtonProps>(
  ({ onPress, children }, ref) => {
    return <MapView style={styles.map} />;
  }
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});
