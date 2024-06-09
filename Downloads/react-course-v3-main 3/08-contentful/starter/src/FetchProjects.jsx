import {useState, useEffect} from 'react';
import { createClient } from 'contentful';

const client = createClient({
    space: '9x5gw0yklkz5',
    environment: 'master', // defaults to 'master' if not set
    accessToken: import.meta.env.VITE_API_KEY,
});


    export const useFetchProjects = () => {
        const [loading, setIsLoading] = useState(true);
        const [myProjects, setMyProjects] = useState([]);

        const getData = async () => {
            try {
                const response = await client.getEntries({content_type: 'myProjects'});
                const projects = response.items.map((project) => {
                    const title = project.fields.title;
                    const url = project.fields.url;
                    const id = project.sys.id;
                    const img = project.fields.image?.fields?.file?.url;
                    return {title, url, id, img}
                    });
                    setIsLoading(false);
                    setMyProjects(projects);
            } catch (error) {
                console.log(error);
                setIsLoading(false);
            }
        }

        useEffect(() => {
            getData();
        },[])
        return {loading, myProjects}
    }

