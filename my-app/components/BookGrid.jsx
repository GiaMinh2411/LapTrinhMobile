import React from 'react';
import { View, StyleSheet } from 'react-native';
import BookCard from './BookCard';


const BOOKS = [
  { id: '1', title: 'Đắc Nhân Tâm', author: 'Dale Carnegie', price: '80.000đ', discount: '-20%', isNew: false, image: 'https://salt.tikicdn.com/cache/w1200/ts/product/7e/14/df/7679db4e1e8c18683e390c50406d28d0.jpg' },
  { id: '2', title: 'Nhà Giả Kim', author: 'Paulo Coelho', price: '65.000đ', discount: null, isNew: true, image: 'https://salt.tikicdn.com/cache/w1200/ts/product/45/3b/fc/aa81d0a534b45706ae1eee1e344e80d9.jpg' },
  { id: '3', title: 'Tội Ác Và Hình Phạt', author: 'Fyodor Dostoevsky', price: '120.000đ', discount: '-15%', isNew: false, image: 'https://salt.tikicdn.com/cache/w1200/ts/product/67/6f/a6/5e7300c14b711e550e58f00dbfb8f29d.jpg' },
  { id: '4', title: 'Hoàng Tử Bé', author: 'Antoine de Saint-Exupéry', price: '50.000đ', discount: null, isNew: false, image: 'https://salt.tikicdn.com/cache/w1200/ts/product/00/3e/ee/81198f3da97e0996841e75525530d952.jpg' },
  { id: '5', title: 'Lược Sử Loài Người', author: 'Yuval Noah Harari', price: '150.000đ', discount: '-10%', isNew: true, image: 'https://salt.tikicdn.com/cache/w1200/ts/product/88/4d/ab/bc965b3ddf3bc42ef6bdfd8ce52d0b5f.jpg' },
];

const BookGrid = () => {
  return (
    <View style={styles.gridContainer}>
      {BOOKS.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
});

export default BookGrid;