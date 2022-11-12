import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { colors } from '../utils/colors';
import { fontSizes, spacing } from '../utils/sizes';

export const FocusHistory = ({ history }) => {
  if(!history || !history.length)
    return <Text style={styles.title}>Seems like you havent focussed on anything yet!</Text>;

  const renderItem = ({item}) => <Text style={styles.item}>- {item}</Text>

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Things you have focussed on today:</Text>
      <FlatList renderItem={renderItem} data={history} />
    </View>
  );
};

const styles = StyleSheet.create({

  container:{
    padding: spacing.m,
    flex:1

  },
  title: {
    color: colors.white,
    fontSize: fontSizes.m,
    fontWeight: 'bold',
  },
  item:{
    color: colors.white,
    fontSize: fontSizes.m,
    paddingTop: spacing.sm

  },
});
