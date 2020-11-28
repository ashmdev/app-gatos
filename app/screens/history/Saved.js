import React, { useState, useEffect } from "react";
import CatListItem from "../../components/CatListItem"


const Saved = () => {


    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {
        //hago una petición al api laravel para traer el historial
        fetch("http://192.168.0.31:8000/api/cats/", {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .then((response) => response.json())
            .then((json) => setData(json.cats))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }, []);

    return (

        //muestro el historial de gatos
        <CatListItem procedure={() => console.log("gato del historial")} data={data} isLoading={isLoading} />
    )

}

export default Saved;