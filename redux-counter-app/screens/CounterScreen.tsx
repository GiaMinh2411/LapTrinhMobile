import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
  } from 'react-native';
  
  import { useDispatch, useSelector } from 'react-redux';
  
  import {
    increment,
    decrement,
  } from '../store/counterSlice';
  
  import type {
    AppDispatch,
    RootState,
  } from '../store';
  
  export default function CounterScreen() {
    const dispatch = useDispatch<AppDispatch>();
  
    const counter = useSelector(
      (state: RootState) => state.counter.value
    );
  
    return (
      <View style={styles.container}>
        <View style={styles.card}>
          <Text style={styles.title}>
            REDUX COUNTER
          </Text>
  
          <Text style={styles.description}>
            Ứng dụng tăng giảm số bằng Redux Toolkit
          </Text>
  
          <View style={styles.counterBox}>
            <Text style={styles.label}>
              Giá trị hiện tại
            </Text>
  
            <Text style={styles.value}>
              {counter}
            </Text>
          </View>
  
          <View style={styles.buttonRow}>
            <TouchableOpacity
              style={[
                styles.button,
                styles.decreaseButton,
              ]}
              onPress={() => dispatch(decrement())}
            >
              <Text style={styles.buttonText}>
                - Giảm
              </Text>
            </TouchableOpacity>
  
            <TouchableOpacity
              style={[
                styles.button,
                styles.increaseButton,
              ]}
              onPress={() => dispatch(increment())}
            >
              <Text style={styles.buttonText}>
                + Tăng
              </Text>
            </TouchableOpacity>
          </View>
  
          <Text style={styles.note}>
            Mỗi lần nhấn thay đổi 1 đơn vị.
          </Text>
        </View>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F3F4F6',
      padding: 20,
    },
  
    card: {
      width: '100%',
      maxWidth: 440,
      padding: 24,
      borderRadius: 20,
      backgroundColor: '#FFFFFF',
    },
  
    title: {
      fontSize: 26,
      fontWeight: '700',
      textAlign: 'center',
      color: '#111827',
    },
  
    description: {
      marginTop: 8,
      fontSize: 14,
      textAlign: 'center',
      color: '#6B7280',
    },
  
    counterBox: {
      alignItems: 'center',
      backgroundColor: '#EFF6FF',
      borderRadius: 16,
      padding: 24,
      marginTop: 28,
      marginBottom: 24,
    },
  
    label: {
      fontSize: 15,
      color: '#6B7280',
    },
  
    value: {
      marginTop: 8,
      fontSize: 72,
      fontWeight: '700',
      color: '#2563EB',
    },
  
    buttonRow: {
      flexDirection: 'row',
    },
  
    button: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 15,
      borderRadius: 10,
    },
  
    decreaseButton: {
      backgroundColor: '#DC2626',
      marginRight: 12,
    },
  
    increaseButton: {
      backgroundColor: '#2563EB',
    },
  
    buttonText: {
      fontSize: 18,
      fontWeight: '600',
      color: '#FFFFFF',
    },
  
    note: {
      marginTop: 18,
      fontSize: 13,
      textAlign: 'center',
      color: '#6B7280',
    },
  });