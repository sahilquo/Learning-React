import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isDataLoading, setDataLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);

    useEffect(() => {
        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw Error('Somthing went Wrong, Please try after sometime.')
                }
                return response.json();
            })
            .then((data) => {
                console.log("Getting Data From server");
                setData(data);
                setDataLoading(false);
                setErrorMessage(null);
            })
            .catch((err) => {
                console.log(err.message);
                setDataLoading(false);
                setErrorMessage(err.message);
            })
    }, []);

    return { data, isDataLoading, errorMessage };
}

export default useFetch;