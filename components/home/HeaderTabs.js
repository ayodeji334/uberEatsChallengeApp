import React, { useState } from "react";
import { View } from "react-native";
import HeaderBtn from "./HeaderBtn";

export default function HeaderTabs({ activeTab, setActiveTab}) {
  return (
    <View style={{ flexDirection: "row", alignSelf: "center" }}>
      <HeaderBtn
        text="Delivery"
        btnColor="black"
        textColor="white"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <HeaderBtn
        text="Pickup"
        btnColor="white"
        textColor="black"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
    </View>
  );
}