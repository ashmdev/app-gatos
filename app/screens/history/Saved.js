import React, { useState, useEffect } from "react";
import CatListItem from "../../components/CatListItem";

import { API_LOCAL, API_LOCAL_PORT, API_LOCAL_ENDPOINT } from "../../utils/api";

const Saved = ({ navigation }) => {

    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            fetch(`${API_LOCAL}:${API_LOCAL_PORT}${API_LOCAL_ENDPOINT}`, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
                .then((response) => response.json())
                .then((json) => setData(json.cats))
                .catch((error) => console.error(error))
                .finally(() => setLoading(false));
          });
          return unsubscribe;
    }, [navigation]);

    return (

        //muestro el historial de gatos
        <CatListItem procedure={() => console.log("gato del historial")} data={data} isLoading={isLoading} />
    )

}

export default Saved;