import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

import { HEADER, CAT_API_URL, CAT_API_VERSION, CAT_API_KEY } from "../../utils/api";
import CatListItem from "../../components/CatListItem"

const List = () => {
    const navigation = useNavigation();

    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    //Petición al api público para traer el listado de razas de gatos
    useEffect(() => {
        fetch(`${CAT_API_URL}${CAT_API_VERSION}/breeds`, HEADER)
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }, []);

    //Recupero la foto de una raza a partir del id. Luego, muestro la imágen
    const onPress = async (cat) => {
        try {
            let response = await fetch(
                `${CAT_API_URL}${CAT_API_VERSION}/images/search?breed_ids=${cat.id}&include_breeds=true`, HEADER
            );
            const json = await response.json();
            const image = await json[0].url;
            console.log(image);
            await saveCatOnHistory(cat,image);
            navigation.navigate("images", { url: image });
        } catch (error) {
            console.error(error);
        }
    }

    //Guardo las razas visualizadas en el API Laravel
    const saveCatOnHistory = async (cat, image) => {
        try{
            fetch('http://192.168.0.31:8000/api/cats/', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    'X-API-KEY': CAT_API_KEY
                },
                body: JSON.stringify({
                    name: cat.name,
                    description: cat.description,
                    image: image
                })
            });

        }
        catch(error){
            console.error(error);
        }
    }

    return (
        //Muestro el listado de razas
        <CatListItem procedure={onPress} data={data} isLoading={isLoading} />
    );
}

export default List;