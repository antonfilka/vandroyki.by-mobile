import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button, StyleSheet, View } from 'react-native';

export const InternalizationExample = () => {
  const { t, i18n } = useTranslation();

  const toggleLanguage = (locale: 'en' | 'ru') => {
    i18n.changeLanguage(locale);
  };
  return (
    <>
      <View style={styles.content}>
        <Button title={t('button.russian')} onPress={() => toggleLanguage('ru')} />
        <Button title={t('button.english')} onPress={() => toggleLanguage('en')} />
      </View>
    </>
  );
};

export const styles = StyleSheet.create({
  content: { gap: 20, padding: 20 },
});
