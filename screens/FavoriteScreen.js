import { useContext } from 'react';

import { CartContext } from './CartContext';
import { View, Text,TextInput, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function FavoriteScreen() {
  const { favoriteItems, removeFromFavorite } = useContext(CartContext);

  return (
    <FlatList
      data={favoriteItems}
      renderItem={({ item }) => (
              <View style={styles.cartItem}>
                <Image 
                  source={item.product.image} 
                  style={styles.productImage} 
                />
                <View >
                <Text style={styles.productName}>{item.product.name}</Text>
                <Text style={styles.productQuantity}>Description: {item.product.description}</Text>
                <View style={styles.counter}>
                  <TouchableOpacity onPress={() => setQuantity(q => Math.max(1, q - 1))}>
                    <Text style={styles.counterButton}>-</Text>
                  </TouchableOpacity>
                  <Text style={styles.quantity}>{quantity}</Text>
                  <TouchableOpacity onPress={() => setQuantity(q => q + 1)}>
                    <Text style={styles.counterButton}>+</Text>
                  </TouchableOpacity></View>
                <TouchableOpacity onPress={() => removeFromCart(item.product.id)}>
                  <Text style={styles.removeButton}>X </Text>
                  <Text style={styles.c}> {item.product.price}</Text><Text>$</Text>
                </TouchableOpacity>
                </View>
              </View>
            )}
      keyExtractor={item => item.id.toString()}
    />
  );
}
