import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator} from "@react-navigation/bottom-tabs";

import CatStack from "./CatsStack";
import HistoryStack from "./HistoryStack";


const Tab = createBottomTabNavigator();

const Navigation = ()=>(
    <NavigationContainer>
        <Tab.Navigator>
            <Tab.Screen 
                name = "cat" 
                component = {CatStack} 
                options = {{ title: "Gatos" }}
            />
            <Tab.Screen 
                name="history" 
                component={HistoryStack} 
                options = {{ title: "Historial" }}
            />
        </Tab.Navigator>
    </NavigationContainer>
);

export default Navigation;