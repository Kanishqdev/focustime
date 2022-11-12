import { React, useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
} from 'react-native';
import Constants from 'expo-constants';
import { colors } from './src/utils/colors';
import { Focus } from './src/features/Focus';
import { Timer } from './src/features/Timer';
import { FocusHistory } from './src/features/FocusHistory';

export default function App() {
  const [subject, setSubject] = useState(null);
  const [focusHistory, setFocusHistory] = useState([]);

  return (
    <SafeAreaView style={styles.container}>
      {!subject ? (
        <>
          <Focus addSubject={setSubject} />
          <FocusHistory history={focusHistory} />
        </>
      ) : (
        <Timer
          focusSubject={subject}
          onCancelSubject={() => {
            setSubject(null);
          }}
          onTimerEnd={(returnSubject) =>
            setFocusHistory([...focusHistory, returnSubject])
          }
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: colors.seaBlue,
  },
});
