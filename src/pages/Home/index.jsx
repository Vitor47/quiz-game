import React, { useState, useContext } from "react";
import { Platform } from "react-native";

import { useNavigation } from "@react-navigation/native";

import { AuthContext } from "../../contexts/auth";

export default function Home() {
  const navigation = useNavigation();
  const { signIn } = useContext(AuthContext);

  function handleLogin() {
    signIn(email, password);
  }
  return (
    <>
      <CustomSubmitButton
        activeOpacity={0.8}
        onPress={handleLogin}
        text="Login"
      />
    </>
  );
}
