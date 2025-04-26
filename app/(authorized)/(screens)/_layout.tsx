import { Stack } from "expo-router";
import { ReactNode } from 'react';

export default function ScreenLayout() {
    return(
        <Stack>
            <Stack.Screen name="index" options={{ headerShown: false}}/>
            <Stack.Screen name="interest"/>
            <Stack.Screen name="profilegen"/>
            <Stack.Screen name="palcatched" options={{ headerShown: false}}/>
        </Stack>
    )
}