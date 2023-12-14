import {
  StyleSheet,
  FlatList,
  Text,
  View,
  TextInput,
  Button,
  Modal,
} from "react-native";
import { useState } from "react";
import CustomModal from "./components/CustomModal";
import CustomInput from "./components/CustomInput";
import Checkbox from "expo-checkbox";

export default function App() {
  const [textItem, setTextItem] = useState("");
  const [itemList, setItemList] = useState([]);
  const [itemSelectedToDelete, setItemSelectedToDelete] = useState({});
  const [modalVisible, setModalVisible] = useState(false);

  const onChangeTextHeadler = (text) => {
    setTextItem(text);
  };

  const addItemToList = () => {
    setItemList((prevState) => [
      ...prevState,
      { id: Math.random().toString(), value: textItem, isSelected: false },
    ]);
    setTextItem("");
  };

  const renderListItem = ({ item }) => (
    <View
      style={item.isSelected ? styles.checkInputCountainer : styles.itemList}
    >
      <Checkbox
        value={item.isSelected}
        onValueChange={(newValue) => onCheckboxChangeHandler(item.id, newValue)}
        style={styles.checkbox}
      />
      <Text>{item.value}</Text>
      <Button title="x" onPress={() => onSelectItemHandler(item.id)} />
    </View>
  );

  const onSelectItemHandler = (id) => {
    setModalVisible(!modalVisible);
    setItemSelectedToDelete(itemList.find((item) => item.id === id));
  };

  const onDeleteItemHandler = () => {
    setItemList(itemList.filter((item) => item.id !== itemSelectedToDelete.id));
    setModalVisible(!modalVisible);
  };

  const onCheckboxChangeHandler = (id, newValue) => {
    setItemList((prevList) =>
      prevList.map((item) =>
        item.id === id ? { ...item, isSelected: newValue } : item
      )
    );
  };

  return (
    <>
      <View style={styles.container}>
        <CustomInput
          placeholderProp="Igrense una tarea"
          textItemProp={textItem}
          onChangeTextHandlerEvent={onChangeTextHeadler}
          addItemToListEvent={addItemToList}
        />
        <FlatList
          data={itemList}
          renderItem={renderListItem}
          keyExtractor={(item) => item.id}
        />
      </View>
      <CustomModal
        animationTypeProp="slide"
        isVisibleProp={modalVisible}
        itemSelectedProp={itemSelectedToDelete}
        onDeleteItemHandlerEvent={onDeleteItemHandler}
        setModalVisibleEvent={setModalVisible}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 30,
  },
  itemList: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    margin: 10,
    backgroundColor: "#a2d2ff",
    borderRadius: 10,
  },
  checkInputCountainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginBottom: 10,
    backgroundColor: "#00FF40",
  },
  checkbox: {
    alignSelf: "center",
  },
  strikethroughText: {
    textDecorationLine: "line-through",
  },
});
