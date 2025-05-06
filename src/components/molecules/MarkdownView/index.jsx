import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MarkdownView = ({ markdown }) => {
  const lines = markdown.split('\n');

  const markdownParser = (line, idx) => {
    // Heading level 2
    if (line.startsWith('## ')) {
      return <Text key={idx} style={styles.h2}>{line.slice(3)}</Text>;
    }
    // Heading level 3
    if (line.startsWith('### ')) {
      return <Text key={idx} style={styles.h3}>{line.slice(4)}</Text>;
    }
    // Bold field: **- Label :** Value
    const boldField = line.match(/^\*\*\s*-\s*(.+?)\s*:\s*\*\*\s*(.*)$/);
    if (boldField) {
      const [, label, value] = boldField;
      return (
        <Text key={idx} style={styles.text}>
          <Text style={styles.bold}>{label}:</Text>
          {value ? ` ${value}` : ''}
        </Text>
      );
    }

    // Bullet item
    const bulletMatch = line.match(/^\*\s+(.+)/);
    if (bulletMatch) {
      return (
        <View key={idx} style={styles.bulletContainer}>
          <Text style={styles.bullet}>{'\u2022'}</Text>
          <Text style={styles.bulletText}>{bulletMatch[1]}</Text>
        </View>
      );
    }

    // Empty line spacer
    if (line.trim() === '') {
      return <View key={idx} style={{ height: 8 }} />;
    }
    // Regular text
    return <Text key={idx} style={styles.text}>{line}</Text>;
  };

  return (
    <View style={styles.container}>
      {lines.map(markdownParser)}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  h2: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  h3: {
    fontSize: 20,
    fontWeight: '600',
    marginVertical: 6,
  },
  text: {
    fontSize: 16,
    marginVertical: 4,
    lineHeight: 24,
  },
  bold: {
    fontWeight: 'bold',
  },
  bulletContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginVertical: 2,
    paddingLeft: 16,
  },
  bullet: {
    fontSize: 16,
    lineHeight: 22,
    marginRight: 8,
  },
  bulletText: {
    fontSize: 16,
    flex: 1,
    lineHeight: 22,
  },
});

export default MarkdownView;