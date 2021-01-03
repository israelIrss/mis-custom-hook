import { useEffect, useRef, useState } from "react"
export const useFetch = (url) => {
    const isMountesd = useRef(true);
    const [state, setState] = useState({ data: null, loading: true, error: null });
    useEffect(() => {
        return () => {
            isMountesd.current = false;
        }
    }, [])
    useEffect(() => {
        setState({ data: null, loading: true, error: null })
        fetch(url)
            .then(resp => resp.json())
            .then(data => {

                if (isMountesd.current) {
                    setState({
                        loading: false,
                        error: null,
                        data
                    })
                } 
            })
    }, [url])
    return state

}
