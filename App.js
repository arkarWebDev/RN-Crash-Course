import { useState } from "react";
import { FlatList, StyleSheet, Button, View } from "react-native";

import ContactItem from "./components/contactItem";
import ContactInput from "./components/ContactInput";

export default function App() {
  const [contactList, setContactList] = useState([]);
  const [isVisible, setIsVisible] = useState(false);

  const addContactHandler = (contact) => {
    if (
      contact.name.trim().length === 0 ||
      contact.number.trim().length === 0
    ) {
      return;
    }
    setContactList((prev) => [...prev, contact]);
  };

  const removeContact = (id) => {
    setContactList((prev) => prev.filter((contact) => contact.id !== id));
  };

  const modalVisibleHandler = () => {
    setIsVisible((prev) => !prev);
  };

  return (
    <View style={styles.container}>
      <View style={styles.listContainer}>
        {/* <ScrollView>
          {contactList.map((contact) => (
            <View key={contact.id} style={styles.contactItem}>
              <Text style={styles.contactName}>name - {contact.name}</Text>
              <Text style={styles.contactNumber}>phone - {contact.number}</Text>
            </View>
          ))}
        </ScrollView> */}

        <FlatList
          data={contactList}
          renderItem={({ item }) => {
            return <ContactItem item={item} removeContact={removeContact} />;
          }}
          keyExtractor={(contact) => contact.id}
        />
      </View>
      <View>
        <Button title="Add new contact" onPress={modalVisibleHandler} />
        <ContactInput
          addContactHandler={addContactHandler}
          isVisible={isVisible}
          modalVisibleHandler={modalVisibleHandler}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
    flex: 1,
  },
  listContainer: {
    flex: 1,
  },
  modalContainer: {
    padding: 30,
  },
});
