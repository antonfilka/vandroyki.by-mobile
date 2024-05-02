import { Ionicons } from '@expo/vector-icons';
import { Link, Tabs } from 'expo-router';

import { HeaderButton } from '~/components/HeaderButton';

//https://ionic.io/ionicons
const DrawerLayout = () => (
  <Tabs
    screenOptions={{
      headerTitle: 'Vandroyki.by',
      headerShown: true,
      tabBarActiveTintColor: 'black',
    }}>
    <Tabs.Screen
      name="index"
      options={{
        title: 'Places',
        tabBarIcon: ({ size, color }) => <Ionicons name="map-outline" size={size} color={color} />,
        headerRight: () => (
          <Link href="/modal" asChild>
            <HeaderButton />
          </Link>
        ),
      }}
    />
    <Tabs.Screen
      name="events"
      options={{
        title: 'Events',
        headerTitle: 'Events',
        tabBarIcon: ({ size, color }) => (
          <Ionicons name="extension-puzzle-outline" size={size} color={color} />
        ),
      }}
    />
    <Tabs.Screen
      name="friends"
      options={{
        title: 'Friends',
        headerTitle: 'Friends',
        tabBarIcon: ({ size, color }) => (
          <Ionicons name="people-circle-outline" size={size} color={color} />
        ),
      }}
    />
    <Tabs.Screen
      name="profile"
      options={{
        title: 'Profile',
        headerTitle: 'Profile',
        tabBarIcon: ({ size, color }) => (
          <Ionicons name="person-circle-outline" size={size} color={color} />
        ),
      }}
    />
  </Tabs>
);

export default DrawerLayout;
