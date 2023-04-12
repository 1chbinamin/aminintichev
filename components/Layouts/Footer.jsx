import React from 'react'
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import Icon from './../Icon'
import Link from 'next/link'
import { useRouter } from 'next/router';
import { destructureCollectionType, destructureCollectionTypeObject } from '../../utils/app'
import ButtonThree from '../Buttons/ButtonThree';

const Footer = ({ servicesRaw, blogsRaw, socialsRaw, regionsRaw }) => {
    const router = useRouter();
    const { locale } = router;

    const services = destructureCollectionType(servicesRaw);
    const blogs = destructureCollectionType(blogsRaw);
    const socials = destructureCollectionType(socialsRaw);
    const regions = destructureCollectionType(regionsRaw);

    return (
        <footer className={`bg-dark p-10 w-screen left-[calc(-50vw+50%)] 
        relative md:p-12 z-30`}>
            <div className={`justify-between gap-10 sm:gap-12 grid 
            grid-cols-2 md:gap-16 md:flex max-w-8xl mx-auto lg:px-16`}>
                <div className={`text_light_all`}>
                    <h2 className={`text-xl mb-2`}>
                        Socials
                    </h2>
                    <ul>
                        {
                            socials.map((social, index) => {
                                const { href, icon, title } =
                                    destructureCollectionTypeObject(social);
                                const { name, brands } = icon;
                                const iconRef = brands ? fab[name] : fas[name];

                                return (
                                    <li className={`pt-2`} key={index}>
                                        <a href={href}
                                            rel="noreferrer" target="_blank"
                                            className={`lg:text-base`}>
                                            <div className={`flex items-center gap-1`}>
                                                <div className={`w-6 h-5 flex items-center justify-start`}>
                                                    <Icon icon={iconRef} />
                                                </div>
                                                <span className={`lg:text-base transition-all hover:text-theme`}>
                                                    {title}
                                                </span>
                                            </div>
                                        </a>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div className={`text_light_all`}>
                    <h2 className={`text-xl mb-2`}>
                        Links
                    </h2>
                    <ul>
                        <li className={`pt-2`}>
                            <Link href={`/`}>
                                <a className={`flex items-center gap-1`}>
                                    <div className={`w-6 h-5 flex items-center 
                                justify-start`}>
                                        <Icon icon={fas["faHouse"]} size={`sm`} />
                                    </div>
                                    <span className={`lg:text-base transition-all hover:text-theme`}>
                                        Home
                                    </span>
                                </a>
                            </Link>
                        </li>
                        <li className={`pt-2`}>
                            <Link href={`/about`}>
                                <a className={`flex items-center gap-1`}>
                                    <div className={`w-6 h-5 flex items-center 
                                justify-start`}>
                                        <Icon icon={fas["faCircleUser"]} size={`sm`} />
                                    </div>
                                    <span className={`lg:text-base transition-all hover:text-theme`}>
                                        {locale === `en` ? `About` : `Over`}
                                    </span>
                                </a>
                            </Link>
                        </li>
                        <li className={`pt-2`}>
                            <Link href={`/projects`}>
                                <a className={`flex items-center gap-1`}>
                                    <div className={`w-6 h-5 flex items-center 
                                justify-start`}>
                                        <Icon icon={fas["faImage"]} size={`sm`} />
                                    </div>
                                    <span className={`lg:text-base transition-all hover:text-theme`}>
                                        {locale === `en` ? `Projects` : `Projecten`}
                                    </span>
                                </a>
                            </Link>
                        </li>
                        <li className={`pt-2`}>
                            <Link href={`/blogs`}>
                                <a className={`flex items-center gap-1`}>
                                    <div className={`w-6 h-5 flex items-center 
                                justify-start`}>
                                        <Icon icon={fas["faBookmark"]} size={`sm`} />
                                    </div>
                                    <span className={`lg:text-base transition-all hover:text-theme`}>
                                        Blogs
                                    </span>
                                </a>
                            </Link>
                        </li>
                        <li className={`pt-2`}>
                            <Link href={`/pricing`}>
                                <a className={`flex items-center gap-1`}>
                                    <div className={`w-6 h-5 flex items-center 
                                justify-start`}>
                                        <Icon icon={fas["faMoneyBill"]} size={`sm`} />
                                    </div>
                                    <span className={`lg:text-base transition-all hover:text-theme`}>
                                        {locale === `en` ? `Pricing` : `Prijzen`}
                                    </span>
                                </a>
                            </Link>
                        </li>
                        <li className={`pt-2`}>
                            <Link href={`/contact`}>
                                <a className={`flex items-center gap-1`}>
                                    <div className={`w-6 h-5 flex items-center 
                                justify-start`}>
                                        <Icon icon={fas["faAddressBook"]} size={`sm`} />
                                    </div>
                                    <span className={`lg:text-base transition-all hover:text-theme`}>
                                        Contact
                                    </span>
                                </a>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className={`col-span-2 sm:col-span-1 border-t border-b hidden
                border-t-white border-b-white py-8 sm:py-0 sm:border-none sm:block`}>
                    <h2 className={`text-xl mb-2 text-light`}>
                        {locale === `en` ? `Services` : `Diensten`}
                    </h2>
                    <ul className={`text_light_all grid grid-cols-2 gap-x-7 
                    items-center sm:block`}>
                        {
                            services.map((service, index) => {
                                const { title, showcase } = destructureCollectionTypeObject(service);

                                return (
                                    <li className={`pt-2`} key={index}>
                                        <span className={`lg:text-base ${!showcase && `hidden`}`}>
                                            {title}
                                        </span>
                                    </li>
                                )
                            })
                        }
                    </ul>
                    <div className={`md:mt-4`}>
                        <ButtonThree href={`/about`} color={`text_theme_all`}
                            text={locale === `en` ? `About me` : `Over mij`} />
                    </div>
                </div>
                <div className={`col-span-2 sm:col-span-1 ${!blogs.length && `hidden`}`}>
                    <h2 className={`text-xl mb-2 text-light`}>
                        {locale === `en` ? `Latest blogs` : `Laatste blogs`}
                    </h2>
                    <ul className={`text_light_all`}>
                        {
                            blogs.map((blog, index) => {
                                const { title, slug } = destructureCollectionTypeObject(blog);

                                return (
                                    <li className={`pt-2`} key={index}>
                                        <Link href={`/blogs/${slug}`}>
                                            <a className={`lg:text-base transition-all 
                                            hover:text-theme`}>
                                                {title}
                                            </a>
                                        </Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                    <div className={`md:mt-4`}>
                        <ButtonThree href={`/blogs`} color={`text_theme_all`}
                            text={locale === `en` ? `More blogs` : `Meer blogs`} />
                    </div>
                </div>
                <div className={`text_light_all`}>
                    <h2 className={`text-xl mb-2`}>
                        {locale === `en` ? `Regions` : `Regio's`}
                    </h2>
                    <ul>
                        {
                            regions.map((region, index) => {
                                const { name, showcase, slug } = destructureCollectionTypeObject(region);

                                return (
                                    <li className={`pt-2 ${!showcase && `hidden`}`} key={index}>
                                        <Link href={`/regions/${slug}`}>
                                            <a className={`lg:text-base transition-all 
                                            hover:text-theme`}>
                                                {name}
                                            </a>
                                        </Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer