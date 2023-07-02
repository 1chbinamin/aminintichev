import Header from '../../components/Layouts/Header'
import { getData } from '../../graphql/api';
import { GET_BLOGS, GET_PAGE } from '../../graphql/queries';
import {
    destructureCollectionType, destructureCollectionTypeObject,
    destructureImageComponent
} from '../../utils/app';
import Seo from '../../components/Seo';
import PageLayout from '../../components/Layouts/PageLayout';
import Heading from '../../components/Heading';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Contact from '../../components/Contact';
import Footer from '../../components/Layouts/Footer';
import CardTwo from '../../components/Cards/CardTwo';
import HeroOne from '../../components/Heroes/HeroOne';
import NoContent from '../../components/NoContent';

const Blogs = ({ pageData, blogsData }) => {
    const router = useRouter();

    const { globalData } = pageData;
    const page = destructureCollectionTypeObject(pageData.data.pages, true);
    const { seo, blocks, alternates, localepages } = page;
    const { blogs: globalBlogs, pages, services, socials,
        regions, contactblock } = globalData;

    const { title: titleHeading, subtitle: subtitleHeading,
        slug: slugHeading, text: textHeading } = blocks[2];

    const { title: titleNoContent, text: textNoContent } = blocks[2];
    const blogs = destructureCollectionType(blogsData.blogs);

    return (
        <>
            <Seo seo={seo} alternates={alternates} />
            {
                blogs.length ? (
                    <>
                        <Header pages={pages} localepages={localepages} />
                        <HeroOne content={blocks.find(block => block.slug === `hero`)}
                            socialsRaw={socials} ctaLink={`#${slugHeading}`} />
                        <PageLayout>
                            <section id={slugHeading} className={`block_container`}>
                                <Heading title={titleHeading} subtitle={subtitleHeading} />
                                <div dangerouslySetInnerHTML={{ __html: textHeading }}
                                    className={`${textHeading ? `pb-6` : `hidden`}`} />
                                <div className={`overflow-x-auto overscroll-x-contain gap-6 
                            pb-6 md:pb-0 md:pr-0 md:w-full md:grid 
                            md:grid-cols-2 xl:grid-cols-3 md:gap-10 md:mt-7 lg:mt-14 
                            ${blogs.length >= 2 && `pr-[20%] w-screen flex`}`}>
                                    {
                                        blogs.map((blog, index) => {
                                            const { title, img, slug, description, dev } =
                                                destructureCollectionTypeObject(blog);
                                            const { url, alt } = destructureImageComponent(img);
                                            const text = router.locale === `en` ? `Read more` : `Verder lezen`;

                                            return (
                                                <Link href={`/blogs/${slug}`}
                                                    key={index} >
                                                    <a className={`min-w-[75vw] sm:min-w-[53vw] md:min-w-0`}>
                                                        <CardTwo imgUrl={url} title={title} text={text}
                                                            subtitle={description} slug={slug} alt={alt}
                                                            badge={dev && { bText: `dev` }} />
                                                    </a>
                                                </Link>
                                            )

                                        })
                                    }
                                </div>
                            </section>
                            <Contact content={contactblock} />
                            <Footer servicesRaw={services} blogsRaw={globalBlogs}
                                socialsRaw={socials} regionsRaw={regions} pagesRaw={pages} />
                        </PageLayout>
                    </>
                ) : <NoContent title={titleNoContent} text={textNoContent}
                    locale={router.locale} wholePage />
            }
        </>
    )
}

export default Blogs

export async function getStaticProps({ locale }) {
    const pageData = await getData(GET_PAGE, { "slug": "blogs", "locale": [locale] });
    const blogsData = await getData(GET_BLOGS, { locale: [locale] }, false);

    return {
        props: { pageData, blogsData },
    }
}