import { Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';
import { Button, Card, H2, Paragraph, XStack, Image } from 'tamagui';

export const PlaceListItemCard = () => {
  return (
    <Link asChild href="/place/1">
      <Card elevate size="$2" borderRadius="$3" width="50%" overflow="hidden">
        <Card.Header padded>
          <H2>Minsk</H2>
          <Paragraph>Now available</Paragraph>
        </Card.Header>
        <Card.Footer padded padding="$3">
          <XStack flex={1} />
          <Button borderRadius="$5" size="$1.5" backgroundColor="white">
            <Ionicons name="heart-outline" />
          </Button>
        </Card.Footer>
        <Card.Background>
          <Image
            resizeMode="contain"
            alignSelf="center"
            height="100%"
            opacity={0.5}
            source={{
              width: 400,
              height: 400,
              uri: 'https://content.r9cdn.net/rimg/dimg/b6/c4/2a4d0e8a-city-9524-166a64199e6.jpg?width=1366&height=768&xhint=1361&yhint=1023&crop=true',
            }}
          />
        </Card.Background>
      </Card>
    </Link>
  );
};
