import CheckBox from "@react-native-community/checkbox";
import { View, TextInput, Button, StyleSheet } from "react-native";

const CustomInput = ({
  placeholderProp,
  textItemProp,
  onChangeTextHandlerEvent,
  addItemToListEvent,
  isSelectProp,
  setIsSelectProp,
}) => {
  return (
    <View
      style={isSelectProp ? styles.checkInputCountainer : styles.inputContainer}
    >
      <CheckBox
        value={isSelectProp}
        onValueChange={setIsSelectProp}
        style={styles.checkbox}
      />
      <TextInput
        style={isSelectProp ? styles.strikethroughText : styles.textInput}
        placeholder={placeholderProp}
        onChangeText={onChangeTextHandlerEvent}
        value={textItemProp}
      />
      <Button title="Add" color="#841584" onPress={addItemToListEvent} />
    </View>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginBottom: 10,
  },
  textInput: {
    width: 200,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
  },
  checkInputCountainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginBottom: 10,
    backgroundColor: "#00FF40",
  },
  strikethroughText: {
    textDecorationLine: "line-through",
  },
  checkbox: {
    alignSelf: "center",
  },
});
