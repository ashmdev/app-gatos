import React from "react";
import { ScrollView, ActivityIndicator, StyleSheet } from "react-native";
import { ListItem } from "react-native-elements";

const CatListItem = ({ data, procedure, isLoading }) => {
    return (
        <ScrollView style={styles.container}>
            {isLoading ? <ActivityIndicator /> : (
                data.map((element, index) => (
                    <ListItem key={index} bottomDivider onPress={() => procedure(element)}>
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

export default CatListItem;