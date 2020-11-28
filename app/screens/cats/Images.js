import React from "react";
import { ActivityIndicator } from "react-native";
import { View, Text, StyleSheet } from "react-native";

import { Image } from "react-native-elements";

//omponente que nuestra una imágen de la raza presionada
const Images = ({ route }) => {
    const { url } = route.params;
    return (
        <View style={styles.container}>
            {url ?
                (<Image
                    source={{ uri: url }}
                    style={styles.image}
                    PlaceholderContent={<ActivityIndicator />}
                />) :
                (<Text>Sin contenido</Text>)}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    image: {
        width: 300,
        height: 300
    }
});

export default Images;