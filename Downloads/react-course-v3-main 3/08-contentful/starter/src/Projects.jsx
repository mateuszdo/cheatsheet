import React from 'react'
import { useFetchProjects }  from './FetchProjects';

const Projects = () => {

    const {loading, myProjects} = useFetchProjects();
    //console.log(myProjects);

    if(loading) {
        return (
            <section className='projects'>
                <h2>Loading...</h2>
            </section>
        )
    }
    return (
        <section className='projects'>
                <div className="title">
                    <h2>My Projects</h2>
                    <div className="title-underline"></div>
                </div>
                <div className="projects-center">
                    {myProjects.map((item) => {
                        const {title, id, url, img} = item;
                        return (
                            <a href={url} key={id} rel='noreferre' target='_blank' className='project'>
                                <h5>{title}</h5>
                                <img src={img} className='img' alt={title}/>
                            </a>
                        )
                    })}
                </div>
        </section>
    )
}

export default Projects;