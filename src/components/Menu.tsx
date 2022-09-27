import React, { FC, useContext, useState } from "react";
import { Button, Text, TextInput, View } from "react-native";
import { AppContext } from "../context/AppContext";

const Menu: FC = () => {
  const [menuTitle, setMenuTitle] = useState("");
  const { menuItems, addToMenu, addToOrder, removeFromMenu } =
    useContext(AppContext);
  const addMenuItem = () => {
    addToMenu(menuTitle);
    setMenuTitle("");
  };
  const addItemToOrder = (item: string) => {
    addToOrder(item);
  };
  const removeItemFromMenu = (item: string) => {
    removeFromMenu(item);
  };
  return (
    <View style={{ alignSelf: "stretch", paddingHorizontal: 16 }}>
      <Text
        style={{
          fontSize: 20,
          fontWeight: "bold",
          marginTop: 48,
        }}
      >
        Menu
      </Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <TextInput
          style={{
            borderWidth: 1,
            marginRight: 16,
            flex: 1,
            paddingHorizontal: 8,
          }}
          placeholder="New menu item"
          value={menuTitle}
          onChangeText={(txt) => setMenuTitle(txt)}
        />
        <Button title="Add" onPress={addMenuItem} />
      </View>
      {menuItems.map((mi) => (
        <View
          key={mi}
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingVertical: 16,
            borderBottomWidth: 2,
          }}
        >
          <Text style={{ flex: 1 }}>{mi}</Text>
          <View style={{ marginRight: 8 }}>
            <Button title="Add" onPress={() => addItemToOrder(mi)} />
          </View>
          <Button
            title="Remove"
            onPress={() => removeItemFromMenu(mi)}
          />
        </View>
      ))}
    </View>
  );
};

export default Menu;
