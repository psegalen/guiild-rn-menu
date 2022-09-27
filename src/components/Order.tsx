import React, { FC, useContext } from "react";
import { Button, FlatList, Text, View } from "react-native";
import { AppContext } from "../context/AppContext";

interface OrderLine {
  item: string;
  quantity: number;
}

const Order: FC = () => {
  const { currentOrder, removeFromOrder, sendOrder } =
    useContext(AppContext);
  const removeItemFromOrder = (item: string) => {
    removeFromOrder(item);
  };
  const order: OrderLine[] = Object.keys(currentOrder).map(
    (item) => ({ item, quantity: currentOrder[item] })
  );
  return (
    <View style={{ alignSelf: "stretch", paddingHorizontal: 16 }}>
      <Text
        style={{ fontSize: 20, fontWeight: "bold", marginTop: 48 }}
      >
        Order
      </Text>
      {order.map((line) => (
        <View
          key={`order_${line.item}`}
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingVertical: 16,
            borderBottomWidth: 2,
          }}
        >
          <Text style={{ flex: 1 }}>{line.item}</Text>
          <Text style={{ marginRight: 16 }}>{line.quantity}</Text>
          <Button
            title="Remove"
            onPress={() => removeItemFromOrder(line.item)}
          />
        </View>
      ))}
      <Button title="Send order" onPress={() => sendOrder()} />
    </View>
  );
};

export default Order;
