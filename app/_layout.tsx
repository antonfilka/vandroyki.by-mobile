import '../translation';

import { ToastProvider, ToastViewport } from '@tamagui/toast';
import { useFonts } from 'expo-font';
import { Stack, SplashScreen } from 'expo-router';
import React, { useEffect } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
import { TamaguiProvider } from 'tamagui';

import config from '../tamagui.config';

SplashScreen.preventAutoHideAsync();

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(drawer)',
};

export default function RootLayout() {
  const [loaded] = useFonts({
    Inter: require('@tamagui/font-inter/otf/Inter-Medium.otf'),
    InterBold: require('@tamagui/font-inter/otf/Inter-Bold.otf'),
  });

  const { left, top, right } = useSafeAreaInsets();

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) return null;

  return (
    <SafeAreaProvider>
      <TamaguiProvider config={config}>
        <ToastProvider burntOptions={{ from: 'bottom' }}>
          <GestureHandlerRootView style={{ flex: 1 }}>
            <ToastViewport flexDirection="column-reverse" top={top} left={left} right={right} />
            <Stack>
              <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
              <Stack.Screen name="suggestPlace" options={{ headerShown: false }} />
              <Stack.Screen name="place" options={{ headerShown: false }} />
              <Stack.Screen name="modal" options={{ title: 'Modal', presentation: 'modal' }} />
            </Stack>
          </GestureHandlerRootView>
        </ToastProvider>
      </TamaguiProvider>
    </SafeAreaProvider>
  );
}
