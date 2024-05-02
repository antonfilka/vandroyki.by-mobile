import * as Haptics from 'expo-haptics';
import { forwardRef } from 'react';
import { TouchableOpacity } from 'react-native';
import { Button as TButton, ButtonText, ButtonProps } from 'tamagui';

export const Button = forwardRef<TouchableOpacity, ButtonProps>(({ onPress, children }, ref) => {
  return (
    <TButton
      onPress={(e) => {
        onPress && onPress(e);
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
      }}>
      <ButtonText>{children}</ButtonText>
    </TButton>
  );
});
