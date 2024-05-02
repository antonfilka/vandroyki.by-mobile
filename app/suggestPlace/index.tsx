import { Stack } from 'expo-router';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Button,
  Form,
  H1,
  H4,
  Input,
  Label,
  ScrollView,
  Spinner,
  TextArea,
  View,
  XStack,
  YStack,
} from 'tamagui';

import { SelectCity } from './components/selectCity';

import { Container } from '~/components/Container';
import { ImagePickerItem } from './components/imagePicker';

interface PlaceProps {}
export default function SuggestPlace(props: PlaceProps) {
  const { t } = useTranslation();

  const [status, setStatus] = useState<'off' | 'submitting' | 'submitted'>('off');

  useEffect(() => {
    if (status === 'submitting') {
      const timer = setTimeout(() => setStatus('off'), 2000);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [status]);

  return (
    <View>
      <Stack.Screen options={{ title: t('suggestPlace.title') }} />
      <Container>
        <ScrollView width="100%" borderRadius="$3" minHeight={900}>
          <Form
            alignItems="center"
            minWidth={300}
            gap="$3"
            onSubmit={() => setStatus('submitting')}
            borderRadius="$4"
            padding="$3">
            <YStack gap="$2" flex={1} width="100%">
              <XStack alignItems="center" space="$2">
                <Input flex={1} id="title" placeholder="Title.." />
              </XStack>
              <XStack alignItems="center" space="$2">
                <SelectCity native />
              </XStack>
              <XStack alignItems="center" space="$2">
                <TextArea flex={1} placeholder="Enter description..." rows={10} height="$11" />
              </XStack>
              <XStack alignItems="center" space="$2">
                <ImagePickerItem />
              </XStack>
              <Form.Trigger asChild disabled={status !== 'off'}>
                <Button icon={status === 'submitting' ? () => <Spinner /> : undefined}>
                  Submit
                </Button>
              </Form.Trigger>
            </YStack>
          </Form>
        </ScrollView>
      </Container>
    </View>
  );
}
