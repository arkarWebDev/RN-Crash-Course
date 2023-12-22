import {
  StyleSheet,
  Image,
  View,
  TextInput,
  Button,
  Modal,
} from "react-native";
import { useState } from "react";
import React from "react";

const ContactInput = ({
  addContactHandler,
  isVisible,
  modalVisibleHandler,
}) => {
  const [nameInput, setNameInput] = useState("");
  const [phoneInput, setPhoneInput] = useState("");

  const nameInputHandler = (val) => {
    setNameInput(val);
  };

  const phoneInputHandler = (val) => {
    setPhoneInput(val);
  };

  const onPressHandler = () => {
    addContactHandler({
      id: Math.random().toString(),
      name: nameInput,
      number: phoneInput,
    });
    setNameInput("");
    setPhoneInput("");
    modalVisibleHandler();
  };

  const cancelHandler = () => {
    modalVisibleHandler();
  };

  return (
    <Modal visible={isVisible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          source={require("../assets/icon.png")}
          style={styles.imageContainer}
        />
        <TextInput
          placeholder="Name ..."
          style={styles.input}
          onChangeText={nameInputHandler}
          value={nameInput}
        />
        <TextInput
          placeholder="Phone ..."
          style={styles.input}
          onChangeText={phoneInputHandler}
          value={phoneInput}
        />
        <View style={styles.buttonContainer}>
          <Button title="Add Contact" onPress={onPressHandler} />
          <Button title="Cancel" onPress={cancelHandler} />
        </View>
      </View>
    </Modal>
  );
};

export default ContactInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    marginTop: 200,
    padding: 30,
    alignItems: "center",
  },
  input: {
    borderWidth: 2,
    borderColor: "#2196F3",
    padding: 8,
    marginBottom: 20,
    width: "100%",
  },
  buttonContainer: {
    gap: 20,
    flexDirection: "row-reverse",
  },
  imageContainer: {
    width: 80,
    height: 80,
    marginBottom: 20,
  },
});
