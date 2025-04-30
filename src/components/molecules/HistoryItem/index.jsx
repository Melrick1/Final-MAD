import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HistoryItem = ({ name, type, date, time }) => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text>{type}</Text>
      </View>

      <View>
        <Text style={styles.date}>{date}</Text>
        <Text style={styles.date}>{time}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#90C89B', 
    padding: 10,
    marginBottom: 7,
  },
  textContainer: {
    flex: 1,
    marginLeft: 12,
  },
  name: {
    fontWeight: 'bold',
    marginBottom: 2,
  },
  date: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default HistoryItem;
