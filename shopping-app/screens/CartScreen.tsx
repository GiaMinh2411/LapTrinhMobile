import {
    FlatList,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
  } from 'react-native';
  
  import { useDispatch, useSelector } from 'react-redux';
  
  import {
    addToCart,
    clearCart,
    removeFromCart,
    updateQuantity,
  } from '../store/cartSlice';
  
  import type { Product } from '../store/cartSlice';
  import type { AppDispatch, RootState } from '../store';
  
  // Dữ liệu sản phẩm mẫu, đơn vị USD giống tài liệu
  const PRODUCTS: Product[] = [
    {
      id: 1,
      name: 'Laptop',
      price: 1000,
    },
    {
      id: 2,
      name: 'Mouse',
      price: 25,
    },
    {
      id: 3,
      name: 'Keyboard',
      price: 120,
    },
  ];
  
  // Định dạng tiền
  const formatMoney = (value: number) => {
    return `$${value.toFixed(2)}`;
  };
  
  export default function CartScreen() {
    const dispatch = useDispatch<AppDispatch>();
  
    // Lấy danh sách sản phẩm từ Redux store
    const cartItems = useSelector(
      (state: RootState) => state.cart.items
    );
  
    // Tổng số lượng sản phẩm
    const totalQuantity = cartItems.reduce(
      (sum, item) => sum + item.quantity,
      0
    );
  
    // Tổng tiền = đơn giá x số lượng
    const totalPrice = cartItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
  
    // Nút chính luôn thêm Laptop để dễ kiểm tra
    // trường hợp thêm cùng sản phẩm nhiều lần
    const handleAddProduct = () => {
      dispatch(
        addToCart({
          id: 1,
          name: 'Laptop',
          price: 1000,
        })
      );
    };
  
    // Xóa một sản phẩm
    const handleRemoveProduct = (id: number) => {
      dispatch(removeFromCart(id));
    };
  
    // Tăng hoặc giảm số lượng
    const handleUpdateQuantity = (
      id: number,
      quantity: number
    ) => {
      dispatch(
        updateQuantity({
          id,
          quantity,
        })
      );
    };
  
    return (
      <View style={styles.container}>
        <Text style={styles.title}>GIỎ HÀNG</Text>
  
        <Text style={styles.subtitle}>
          Demo React Native và Redux Toolkit
        </Text>
  
        <FlatList
          style={styles.list}
          data={cartItems}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={styles.listContent}
          ListHeaderComponent={
            <View style={styles.catalog}>
              <Text style={styles.sectionTitle}>
                Sản phẩm mẫu
              </Text>
  
              {PRODUCTS.map((product) => (
                <View
                  key={product.id}
                  style={styles.productRow}
                >
                  <View style={styles.productInfo}>
                    <Text style={styles.productName}>
                      {product.name}
                    </Text>
  
                    <Text style={styles.price}>
                      {formatMoney(product.price)}
                    </Text>
                  </View>
  
                  <TouchableOpacity
                    style={styles.smallAddButton}
                    onPress={() => {
                      dispatch(addToCart(product));
                    }}
                  >
                    <Text style={styles.whiteText}>
                      Thêm vào giỏ
                    </Text>
                  </TouchableOpacity>
                </View>
              ))}
  
              <Text style={styles.cartHeading}>
                Giỏ của bạn ({totalQuantity} sản phẩm)
              </Text>
            </View>
          }
          ListEmptyComponent={
            <View style={styles.emptyBox}>
              <Text style={styles.emptyTitle}>
                Giỏ hàng đang trống
              </Text>
  
              <Text style={styles.emptyText}>
                Nhấn “Thêm vào giỏ” để thêm sản phẩm.
              </Text>
            </View>
          }
          renderItem={({ item }) => (
            <View style={styles.cartItem}>
              <View style={styles.itemHeader}>
                <View style={styles.productInfo}>
                  <Text style={styles.productName}>
                    {item.name}
                  </Text>
  
                  <Text style={styles.price}>
                    Đơn giá: {formatMoney(item.price)}
                  </Text>
                </View>
  
                <TouchableOpacity
                  style={styles.removeButton}
                  onPress={() => {
                    handleRemoveProduct(item.id);
                  }}
                >
                  <Text style={styles.removeText}>
                    Xóa
                  </Text>
                </TouchableOpacity>
              </View>
  
              <View style={styles.itemFooter}>
                <View style={styles.quantityRow}>
                  <TouchableOpacity
                    style={styles.quantityButton}
                    onPress={() => {
                      handleUpdateQuantity(
                        item.id,
                        item.quantity - 1
                      );
                    }}
                    accessibilityLabel={`Giảm số lượng ${item.name}`}
                  >
                    <Text style={styles.quantityButtonText}>
                      -
                    </Text>
                  </TouchableOpacity>
  
                  <Text style={styles.quantityText}>
                    {item.quantity}
                  </Text>
  
                  <TouchableOpacity
                    style={styles.quantityButton}
                    onPress={() => {
                      handleUpdateQuantity(
                        item.id,
                        item.quantity + 1
                      );
                    }}
                    accessibilityLabel={`Tăng số lượng ${item.name}`}
                  >
                    <Text style={styles.quantityButtonText}>
                      +
                    </Text>
                  </TouchableOpacity>
                </View>
  
                <Text style={styles.itemTotal}>
                  {formatMoney(item.price * item.quantity)}
                </Text>
              </View>
            </View>
          )}
        />
  
        <View style={styles.summary}>
          <View style={styles.summaryRow}>
            <Text style={styles.totalLabel}>
              Tổng thanh toán
            </Text>
  
            <Text style={styles.totalPrice}>
              {formatMoney(totalPrice)}
            </Text>
          </View>
  
          <Text style={styles.summaryNote}>
            Tổng số lượng: {totalQuantity}
          </Text>
  
          <View style={styles.buttonRow}>
            <TouchableOpacity
              style={styles.addButton}
              onPress={handleAddProduct}
            >
              <Text style={styles.whiteText}>
                + Thêm sản phẩm
              </Text>
            </TouchableOpacity>
  
            <TouchableOpacity
              style={[
                styles.clearButton,
                cartItems.length === 0 &&
                  styles.disabledButton,
              ]}
              disabled={cartItems.length === 0}
              onPress={() => {
                dispatch(clearCart());
              }}
            >
              <Text style={styles.whiteText}>
                Xóa giỏ
              </Text>
            </TouchableOpacity>
          </View>
  
          <Text style={styles.summaryNote}>
            Nút “+ Thêm sản phẩm” thêm Laptop.
          </Text>
        </View>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      width: '100%',
      maxWidth: 720,
      alignSelf: 'center',
      backgroundColor: '#F3F4F6',
      paddingHorizontal: 16,
      paddingTop: 16,
    },
  
    title: {
      fontSize: 26,
      fontWeight: '700',
      color: '#111827',
    },
  
    subtitle: {
      marginTop: 4,
      marginBottom: 16,
      fontSize: 14,
      color: '#6B7280',
    },
  
    list: {
      flex: 1,
    },
  
    listContent: {
      paddingBottom: 16,
    },
  
    catalog: {
      marginBottom: 12,
    },
  
    sectionTitle: {
      marginBottom: 8,
      fontSize: 18,
      fontWeight: '700',
      color: '#111827',
    },
  
    productRow: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#FFFFFF',
      borderRadius: 10,
      padding: 12,
      marginBottom: 8,
    },
  
    productInfo: {
      flex: 1,
      marginRight: 10,
    },
  
    productName: {
      fontSize: 16,
      fontWeight: '600',
      color: '#111827',
    },
  
    price: {
      marginTop: 4,
      fontSize: 14,
      color: '#6B7280',
    },
  
    smallAddButton: {
      backgroundColor: '#2563EB',
      paddingHorizontal: 12,
      paddingVertical: 10,
      borderRadius: 8,
    },
  
    whiteText: {
      color: '#FFFFFF',
      fontSize: 14,
      fontWeight: '600',
      textAlign: 'center',
    },
  
    cartHeading: {
      marginTop: 16,
      fontSize: 18,
      fontWeight: '700',
      color: '#111827',
    },
  
    emptyBox: {
      alignItems: 'center',
      backgroundColor: '#FFFFFF',
      padding: 24,
      borderRadius: 12,
    },
  
    emptyTitle: {
      fontSize: 16,
      fontWeight: '600',
      color: '#374151',
    },
  
    emptyText: {
      marginTop: 8,
      color: '#6B7280',
      textAlign: 'center',
    },
  
    cartItem: {
      backgroundColor: '#FFFFFF',
      borderRadius: 12,
      padding: 14,
      marginBottom: 10,
    },
  
    itemHeader: {
      flexDirection: 'row',
      alignItems: 'center',
    },
  
    removeButton: {
      backgroundColor: '#FEE2E2',
      paddingHorizontal: 14,
      paddingVertical: 8,
      borderRadius: 8,
    },
  
    removeText: {
      color: '#DC2626',
      fontWeight: '600',
    },
  
    itemFooter: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginTop: 14,
    },
  
    quantityRow: {
      flexDirection: 'row',
      alignItems: 'center',
    },
  
    quantityButton: {
      width: 36,
      height: 36,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#DBEAFE',
      borderRadius: 8,
    },
  
    quantityButtonText: {
      fontSize: 22,
      fontWeight: '600',
      color: '#1D4ED8',
    },
  
    quantityText: {
      minWidth: 42,
      textAlign: 'center',
      fontSize: 16,
      fontWeight: '600',
      color: '#111827',
    },
  
    itemTotal: {
      fontSize: 16,
      fontWeight: '700',
      color: '#2563EB',
    },
  
    summary: {
      backgroundColor: '#FFFFFF',
      padding: 16,
      borderRadius: 12,
      marginBottom: 12,
    },
  
    summaryRow: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
  
    totalLabel: {
      fontSize: 16,
      fontWeight: '600',
      color: '#111827',
      marginRight: 8,
    },
  
    totalPrice: {
      fontSize: 22,
      fontWeight: '700',
      color: '#2563EB',
    },
  
    summaryNote: {
      marginTop: 8,
      fontSize: 13,
      color: '#6B7280',
    },
  
    buttonRow: {
      flexDirection: 'row',
      marginTop: 14,
    },
  
    addButton: {
      flex: 1,
      backgroundColor: '#2563EB',
      paddingVertical: 13,
      paddingHorizontal: 8,
      borderRadius: 8,
      marginRight: 10,
    },
  
    clearButton: {
      backgroundColor: '#DC2626',
      paddingVertical: 13,
      paddingHorizontal: 16,
      borderRadius: 8,
    },
  
    disabledButton: {
      opacity: 0.4,
    },
  });