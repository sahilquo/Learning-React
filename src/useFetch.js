import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isDataLoading, setDataLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);

    useEffect(() => {
        const abortController = new AbortController();

        setTimeout(() => {
            fetch(url, { signal: abortController.signal })
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
                    if (err.name === 'AbortError') {
                        console.log('Fetch Aborted Error');
                    } else {
                        setDataLoading(false);
                        setErrorMessage(err.message);
                    }
                });
        }, 1000);

        return () => {
            console.log('Cleanup');
            abortController.abort();
        }

    }, [url]);

    return { data, isDataLoading, errorMessage };
}

export default useFetch;