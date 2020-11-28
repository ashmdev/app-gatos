import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "react-native-elements";

import CatStack from "./CatsStack";
import HistoryStack from "./HistoryStack";


const Tab = createBottomTabNavigator();

const Navigation = () => (
    <NavigationContainer>
        <Tab.Navigator
            initialRouteName="Home"
            tabBarOptions={{
                inactiveTintColor: "#646464",
                activeTintColor: "#00a680",
            }}
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color }) => screenOptions(route, color),
                navigationOptions: ({ navigation }) => ({
                    tabBarOnPress: (scene, jumpToIndex) => {
                        console.log('onPress:', scene.route);
                        jumpToIndex(scene.index);
                    }
                })
            })}
        >
            <Tab.Screen
                name="cats"
                component={CatStack}
                options={{ title: "Gatos" }}
            />
            <Tab.Screen
                name="history"
                component={HistoryStack}
                options={{ title: "Historial" }}
            />
        </Tab.Navigator>
    </NavigationContainer>
);

const screenOptions = (route, color) => {
    let iconName;
    switch (route.name) {
        case "cats":
            iconName = "cat";
            break;
        case "history":
            iconName = "history";
            break;
        default:
            break;
    }
    return (
        <Icon type="material-community" name={iconName} size={22} color={color} />
    );
};

export default Navigation;