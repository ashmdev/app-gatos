import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

import { HEADER, CAT_API_URL, CAT_API_VERSION } from "../../utils/api";
import CatListItem from "../../components/CatListItem"

const List = () => {
    const navigation = useNavigation();

    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(`${CAT_API_URL}${CAT_API_VERSION}/breeds`, HEADER)
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }, []);

    const onPress = async (cat) => {
        try {
            let response = await fetch(
                `${CAT_API_URL}${CAT_API_VERSION}/images/search?breed_ids=${cat.id}&include_breeds=true`, HEADER
            );
            const json = await response.json();
            const image = await json[0].url;
            console.log(image);
            navigation.navigate("images", { url: image });
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <CatListItem procedure={onPress} data={data} isLoading={isLoading} />
    );
}

export default List;