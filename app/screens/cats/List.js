import React, { useState, useEffect } from "react";
import { ScrollView, ActivityIndicator, StyleSheet } from "react-native";
import { ListItem } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

import { HEADER, CAT_API_URL, CAT_API_VERSION } from "../../utils/api";

const List = () => {
    const navigation = useNavigation();

    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [image, setImage] = useState("");

    useEffect(() => {
        fetch(`${CAT_API_URL}${CAT_API_VERSION}/breeds`, HEADER)
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }, []);

    const onPress = async (cat) => {
        fetch(`${CAT_API_URL}${CAT_API_VERSION}/images/search?breed_ids=${cat.id}&include_breeds=true`, HEADER)
            .then((response) => response.json())
            .then((json) => setImage(json[0].url))
            .catch((error) => console.error(error))

        navigation.navigate("images", { url: image });
    }

    return (
        <ScrollView style={styles.container}>
            {isLoading ? <ActivityIndicator /> : (
                data.map((element, index) => (
                    <ListItem key={index} bottomDivider onPress={() => onPress(element)}>
                        <ListItem.Content>
                            <ListItem.Title>{element.name}</ListItem.Title>
                            <ListItem.Subtitle style={styles.listItemSubtitle}>{element.description}</ListItem.Subtitle>
                        </ListItem.Content>
                    </ListItem>
                ))
            )}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    listItemSubtitle: {
        textAlign: "justify"
    }
});

export default List;