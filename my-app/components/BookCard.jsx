import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const BookCard = ({ book }) => {
  return (
    <View style={styles.card}>
      <View style={styles.imageContainer}>
        {}
        <Image 
          source={{ uri: book.image }} 
          style={styles.coverImage} 
          resizeMode="cover" 
        />
        
        {}
        {(book.discount || book.isNew) && (
          <View style={[styles.badge, book.isNew ? styles.badgeNew : styles.badgeDiscount]}>
            <Text style={styles.badgeText}>{book.discount || 'MỚI'}</Text>
          </View>
        )}
      </View>
      
      <Text style={styles.title} numberOfLines={2}>{book.title}</Text>
      <Text style={styles.author} numberOfLines={1}>{book.author}</Text>
      <Text style={styles.price}>{book.price}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '48%', 
    marginBottom: 16,
    flexDirection: 'column',
  },
  imageContainer: {
    position: 'relative',
    width: '100%',
    aspectRatio: 3/4,
    marginBottom: 8,
  },
  coverImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    borderRadius: 8,
  },
  badge: {
    position: 'absolute',
    top: 6,
    left: 6,
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
    zIndex: 1,
  },
  badgeDiscount: { backgroundColor: '#ef4444' }, 
  badgeNew: { backgroundColor: '#f59e0b' },     
  badgeText: { color: 'white', fontSize: 10, fontWeight: 'bold' },
  title: { fontWeight: 'bold', fontSize: 14, marginBottom: 4 },
  author: { fontSize: 12, color: 'gray', marginBottom: 8 },
  price: { fontSize: 14, color: 'indigo', fontWeight: 'bold', marginTop: 'auto' },
});

export default BookCard;