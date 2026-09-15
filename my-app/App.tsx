import React from 'react';
import { StyleSheet, View, ScrollView, SafeAreaView, Text } from 'react-native';
import Header from './components/Header';
import CategoryChips from './components/CategoryChips';
import BookGrid from './components/BookGrid';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {}
      <Header />

      {}
      <ScrollView 
        style={styles.scrollArea}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <CategoryChips />
        <BookGrid />
      </ScrollView>

      {}
      <View style={styles.fab}>
        <Text style={styles.fabIcon}>🛒</Text>
        <View style={styles.badge}>
          <Text style={styles.badgeText}>4</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 40,
  },
  scrollArea: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 80,
  },
  fab: {
    position: 'absolute',
    bottom: 24,
    right: 20,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: 'indigo',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  fabIcon: { fontSize: 24, color: 'white' },
  badge: {
    position: 'absolute',
    top: 0,
    right: 0,
    backgroundColor: 'red',
    borderRadius: 10,
    minWidth: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeText: { color: 'white', fontSize: 10, fontWeight: 'bold' }
});