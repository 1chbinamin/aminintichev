import React from 'react'
import BlockLayoutTwo from '../Layouts/BlockLayoutTwo'
import { Carousel } from "flowbite-react";
import Slide from '../Slide';
import {
    destructureCollectionType,
    destructureCollectionTypeObject,
    destructureImageComponent,
} from '../../utils/app';
import ButtonOne from '../Buttons/ButtonOne';

const Projects = ({ content, data }) => {
    const projects = destructureCollectionType(data);
    const { title, text, button, slug } = content;
    const { href, text: buttonText } = button[0];

    return (
        <BlockLayoutTwo title={title} slug={slug}>
            <div className={`md:basis-5/12`}>
                <h2>{title}</h2>
                <div dangerouslySetInnerHTML={{ __html: text }} />
                <ButtonOne href={href} text={buttonText} wFit />
            </div>
            <div className={`mt-10 md:mt-0 md:basis-7/12`}>
                <Carousel indicators={false}>
                    {
                        projects.map((project, index) => {
                            const { img } =
                                destructureCollectionTypeObject(project);
                            const { url, alt } = destructureImageComponent(img);

                            return (
                                <Slide key={index} image={{
                                    src: url,
                                    alt: alt
                                }} />
                            )
                        })
                    }
                </Carousel>
            </div>
        </BlockLayoutTwo>
    )
}

export default Projects