import { Link, Stack } from 'expo-router';
import { useTranslation } from 'react-i18next';
import { ScrollView, XStack, YStack } from 'tamagui';

import { Button } from '~/components/Button';
import { Container } from '~/components/Container';
import { PlaceListItemCard } from '~/components/placeListItemCard/placeListItemCard';

export default function Home() {
  const { t } = useTranslation();

  return (
    <>
      <Stack.Screen options={{ title: t('places.title') }} />
      <Container>
        <Link asChild href="/suggestPlace">
          <Button>{t('places.suggestButton')}</Button>
        </Link>
        <ScrollView width="100%" padding="$3" borderRadius="$3">
          <YStack flexWrap="wrap" alignItems="center" justifyContent="center" gap="$3">
            <XStack gap="$2">
              <PlaceListItemCard />
              <PlaceListItemCard />
            </XStack>
            <XStack gap="$2">
              <PlaceListItemCard />
              <PlaceListItemCard />
            </XStack>
            <XStack gap="$2">
              <PlaceListItemCard />
              <PlaceListItemCard />
            </XStack>
            <XStack gap="$2">
              <PlaceListItemCard />
              <PlaceListItemCard />
            </XStack>
          </YStack>
        </ScrollView>
      </Container>
    </>
  );
}
