import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Saved from "../screens/history/Saved";


const Stack = createStackNavigator();

const HistoryStack = () => (
    <Stack.Navigator>
        <Stack.Screen
            name="saved"
            component={Saved}
            options={{ title: "Historial" }}
        />
    </Stack.Navigator>
);

export default HistoryStack;