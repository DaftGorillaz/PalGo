import React, {useState} from "react";
import {useAuthSession} from "@/providers/AuthProvider";
import Uuid from "expo-modules-core/src/uuid";
import {ReactNode} from "react";
import { SafeAreaView, View, ScrollView, Text, Image, TextInput, TouchableOpacity, Button, } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import {router} from "expo-router";

export default function Login(): ReactNode {
    const {signIn} = useAuthSession();
  const login = ():void => {
    const random: string = Uuid.v4();
    signIn(random);
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Login screen</Text>
      <Button title={"Login"} onPress={login} />
    </View>
  );
}
