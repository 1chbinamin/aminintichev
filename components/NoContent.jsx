import Image from 'next/image'
import { useRouter } from 'next/router';
import React from 'react'
import voidImg from "../public/images/void.svg";

const NoContent = ({ title, text, locale, imgOnly }) => {
    const router = useRouter();

    if (imgOnly) {
        return (
            <Image src={voidImg} objectFit={`cover`}
                alt={locale === `en` ? `Person looking at the void.` :
                    `Persoon die naar de leegte kijkt.`} width={360} height={378} />
        )
    }

    return (
        <div className={`flex flex-col h-full justify-center`}>
            <main className={`w-9/12 max-w-8xl m-auto text-center`}>
                <div className={`pt-7 px-5 sm:pt-4 sm:px-2`}>
                    <Image src={voidImg} objectFit={`cover`}
                        alt={locale === `en` ? `Person looking at the void.` :
                            `Persoon die naar de leegte kijkt.`} width={360} height={378} />
                </div>
                <div className={`text-center my-14`}>
                    <h1 className={`text-4xl mb-5`}>
                        {title}
                    </h1>
                    <div dangerouslySetInnerHTML={{ __html: text }} />
                    <button type="button"
                        className={`p-3 relative before:ease-linear block 
                    sm:inline-block text-dark bg-theme uppercase 
                    font-bold sm:p-4 before:absolute before:top-0 before:left-0 
                    transition-all ease-linear sm:shadow-bold_r hover:shadow-zero 
                    before:origin-left hover:before:bg-dark before:bottom-0 
                    before:right-0 before:-z-10 before:bg-theme 
                    before:transition-all before:scale-x-0 hover:before:scale-x-100 
                    z-10 hover:text-white text-sm shadow-bold_r_md 
                    sm:text-base mt-7 w-full sm:w-fit sm:px-20`}
                        onClick={() => router.back()}>
                        {locale === `en` ? `Go Back` : `Keer terug`}
                    </button>
                </div>
            </main>
        </div>
    )
}

export default NoContent