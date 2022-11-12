import React from 'react';
import { View,StyleSheet } from 'react-native';

import { RoundedButton } from '../components/RoundedButton';

export const Timing = ({ onChangeTimer }) => (
  <>
    <View style={styles.timingButton}>
      <RoundedButton
        title="10"
        size={75}
        onPress={() => {
          onChangeTimer(10);
        }}
      />
    </View>
    <View style={styles.timingButton}>
      <RoundedButton
        title="15"
        size={75}
        onPress={() => {
          onChangeTimer(15);
        }}
      />
    </View>
    <View style={styles.timingButton}>
      <RoundedButton
        title="30"
        size={75}
        onPress={() => {
          onChangeTimer(30);
        }}
      />
    </View>
  </>
);

const styles = StyleSheet.create({
  timingButton: {
    flex: 1,
    alignItems:'center'
  },
});