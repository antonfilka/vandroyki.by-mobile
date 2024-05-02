import { InternalizationExample } from 'components/InternalizationExample';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useTranslation } from 'react-i18next';
import { Platform } from 'react-native';

export default function Modal() {
  const { t } = useTranslation();

  return (
    <>
      <Stack.Screen options={{ title: t('settingsModal.title') }} />
      <InternalizationExample />
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </>
  );
}
