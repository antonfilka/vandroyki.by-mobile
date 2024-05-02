import { Stack, usePathname } from 'expo-router';
import { H1, ScrollView, View, YStack } from 'tamagui';

import { Container } from '~/components/Container';

interface PlaceProps {}
export default function Place(props: PlaceProps) {
  const data = usePathname();
  return (
    <View>
      <Stack.Screen options={{ title: data }} />
      <Container>
        <ScrollView width="100%" padding="$3" borderRadius="$3">
          <YStack flexWrap="wrap" alignItems="center" justifyContent="center" gap="$3">
            <H1> Place description {JSON.stringify(data)}</H1>
          </YStack>
        </ScrollView>
      </Container>
    </View>
  );
}
