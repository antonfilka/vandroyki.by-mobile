import * as ImagePicker from 'expo-image-picker';
import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Card, Image, ScrollView, XStack, YStack } from 'tamagui';

export const ImagePickerItem = () => {
  const [images, setImages] = useState<string[] | null>(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsMultipleSelection: true,
      selectionLimit: 5,
      orderedSelection: true,
      quality: 0.5,
    });

    console.log(result);

    if (!result.canceled) {
      setImages((prev) => {
        if (prev) return [...prev, ...result.assets.map((asset) => asset.uri)];
        return null;
      });
    }
  };
  console.log(images);
  return (
    <YStack gap="$2" width="100%">
      <Button onPress={pickImage}>Pick an image from camera roll</Button>

      <ScrollView
        horizontal
        minHeight={135}
        maxHeight={250}
        width="100%"
        backgroundColor="$background"
        padding="$4"
        borderRadius="$4">
        <XStack gap="$3" height="100%" width="100%">
          {images?.length &&
            images.map((image) => (
              <Card key={image}>
                <Image source={{ uri: image }} style={styles.image} />
              </Card>
            ))}
        </XStack>
      </ScrollView>
    </YStack>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 100,
    height: 100,
  },
});
