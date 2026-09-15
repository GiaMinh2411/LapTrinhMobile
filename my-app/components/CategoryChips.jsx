import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CATEGORIES = ['Văn học', 'Kinh tế', 'Thiếu nhi', 'Kỹ năng sống', 'Truyện tranh', 'Ngoại ngữ', 'Lịch sử'];

const CategoryChips = () => {
  return (
    <View style={styles.chipContainer}>
      {CATEGORIES.map((cat, index) => (
        <View key={index} style={styles.chip}>
          <Text style={styles.chipText}>{cat}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  chipContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    padding: 16,
  },
  chip: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'indigo',
    width: 'auto',
  },
  chipText: {
    color: 'indigo',
  }
});

export default CategoryChips;