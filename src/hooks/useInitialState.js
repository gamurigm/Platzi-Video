import {useState, useEffect} from 'react'

const API = 'http://localhost:3000/initalState'

const useInitialState =() => {
    const [ videos, setVideos] = useState({
        'mylist': [],
        'trends': [],
        'originals':[],
    });
    useEffect(()=>{
        fetch(API)
        .then(response => response.json())
        .then(data => setVideos(data));
    }, []);

    return videos;
}

export default useInitialState;