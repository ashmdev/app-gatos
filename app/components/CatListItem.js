import React from "react";
import { ScrollView, ActivityIndicator, StyleSheet } from "react-native";
import { ListItem, Avatar } from "react-native-elements";

//componente reutilizable. Muestra las razas traidas desde el api 
//público y desde el api de historial.
const CatListItem = ({ data, procedure, isLoading }) => {

    return (
        <ScrollView style={styles.container}>
            {isLoading ? <ActivityIndicator /> : (
                data.map((element, index) => (
                    <ListItem key={index} bottomDivider onPress={()=>procedure(element)}>
                        {element.image && <Avatar source={{uri: element.image}} /> }
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