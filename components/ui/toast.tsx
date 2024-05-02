import { Toast as TToast, useToastController, useToastState } from '@tamagui/toast';
import { XStack, YStack } from 'tamagui';

import { Button } from '../Button';

export const Toast = () => {
  const toast = useToastController();

  return (
    <XStack space="$2" justifyContent="center">
      <Button
        onPress={() => {
          toast.show('Successfully saved!', {
            message: "Don't worry, we've got your data.",
          });
        }}>
        Show
      </Button>
      <CurrentToast />
    </XStack>
  );
};

const CurrentToast = () => {
  const currentToast = useToastState();

  if (!currentToast || currentToast.isHandledNatively) return null;
  return (
    <TToast
      key={currentToast.id}
      duration={currentToast.duration}
      enterStyle={{ opacity: 0, scale: 0.5, y: -25 }}
      exitStyle={{ opacity: 0, scale: 1, y: -20 }}
      y={0}
      opacity={1}
      scale={1}
      animation="100ms"
      viewportName={currentToast.viewportName}>
      <YStack>
        <TToast.Title>{currentToast.title}</TToast.Title>
        {!!currentToast.message && <TToast.Description>{currentToast.message}</TToast.Description>}
      </YStack>
    </TToast>
  );
};
