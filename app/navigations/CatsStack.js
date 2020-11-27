import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import List from "../screens/cats/List";
import Images from "../screens/cats/Images";

const Stack = createStackNavigator();
const CatsStack= ()=>(
    <Stack.Navigator>
        <Stack.Screen 
            name = "list"
            component = { List }
            options = {{ title: "Listar razas"}}
        />
        <Stack.Screen 
            name = "images"
            component = { Images }
            options = {{ title: "Imágenes"}}
        />
    </Stack.Navigator>
);
export default CatsStack;