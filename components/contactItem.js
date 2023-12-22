import { View, Text, StyleSheet, Button } from "react-native";
import React from "react";

const contactItem = ({ item, removeContact }) => {
  const deleteHandler = () => {
    removeContact(item.id);
  };

  return (
    <View style={styles.contactItem}>
      <Text style={styles.contactName}>name - {item.name}</Text>
      <Text style={styles.contactNumber}>phone - {item.number}</Text>
      <Button title="delete" color="#FA3118" onPress={deleteHandler} />
    </View>
  );
};

export default contactItem;

const styles = StyleSheet.create({
  contactItem: {
    padding: 10,
    marginBottom: 12,
    backgroundColor: "#2196F3",
    borderRadius: 8,
  },
  contactName: {
    fontSize: 18,
    color: "#ffffff",
    fontWeight: "500",
  },
  contactNumber: {
    fontSize: 16,
    color: "white",
    marginBottom: 10,
  },
});
