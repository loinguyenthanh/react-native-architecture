import React, { PropsWithChildren } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import { CoreText } from 'core/components';
import { TYPOGRAPHY } from 'core/foundation';

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    ...TYPOGRAPHY.h1,
  },
});

const Section: React.FC<
  PropsWithChildren<{
    title: string;
  }>
> = ({ children, title }) => (
  <View style={styles.sectionContainer}>
    <CoreText style={[styles.sectionTitle]}>{title}</CoreText>
    <CoreText style={[styles.sectionDescription]}>{children}</CoreText>
  </View>
);

const Main: React.FC = () => {
  return (
    <SafeAreaView>
      <StatusBar barStyle="light-content" />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View>
          <Section title="Step One">
            <CoreText bg-gold pink>
              Hello World
            </CoreText>
          </Section>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Main;
