import React, { useState } from "react";
import { View, Modal} from "react-native";
import { useSelector } from "react-redux";
import CheckOutBtn from "./CheckOutBtn";
import PlaceOrderLoading from "./PlaceOrderLoading";
import CheckOutModalContent from "./CheckOutModalContent";

export default function ViewCart({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const { items } = useSelector((state) => state.cart.selectedItems);
  const { name } = useSelector(state => state.cart.selectedRestaurant);

  const total = items.map((item) => Number(item.price.replace("$", ""))).reduce((prev, curr) => prev + curr, 0);

  const totalUSD = total.toLocaleString("en", {
    style: "currency",
    currency: "USD",
  });

  return (
    <React.Fragment>
      <Modal
        animationType="slide"
        visible={modalVisible}
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
      >
        <CheckOutModalContent 
          total={total} 
          totalUSD={totalUSD}
          navigation={navigation}
          items={items} 
          restaurantName={name} 
          setOrderPlacedLoading={(state) => setLoading(state)}
        />
      </Modal>

      <View
        style={{
          flex: 1,
          alignSelf: "center",
          justifyContent: "center",
          flexDirection: "row",
          position: "absolute",
          bottom: 70,
          zIndex: 999,
          padding: 0,
          margin: 0,
        }}
      >
        {total ? (
          <CheckOutBtn totalPrice={totalUSD} handleShowModal={() => setModalVisible(true)} />
        ) : (<></>)}
      </View>

      {loading ? <PlaceOrderLoading /> : <></>}
    </React.Fragment>
  );
}