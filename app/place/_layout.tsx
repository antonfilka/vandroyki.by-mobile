import { Stack, useNavigation } from 'expo-router';

import { HeaderBackButton } from '~/components/HeaderBackButton';

const PlaceLayout = () => {
  const navigation = useNavigation();

  return (
    <Stack
      screenOptions={{
        headerLeft: () => <HeaderBackButton onPress={() => navigation.goBack()} />,
      }}
    />
  );
};

export default PlaceLayout;
