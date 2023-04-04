import About from '../components/Home/About'
import Header from '../components/Layouts/Header'
import Projects from '../components/Home/Projects'
import Seo from '../components/Seo'
import Testimonials from '../components/Home/Testimonials'
import PageLayout from '../components/Layouts/PageLayout'
import Blogs from '../components/Home/Blogs'
import Contact from '../components/Contact'
import Footer from '../components/Layouts/Footer'
import { GET_HOMEPAGE, GET_TECHS } from '../graphql/queries';
import { getData } from '../graphql/api';
import { destructureSingleType, 
  destructureCollectionType } from '../utils/app';
import Hero from '../components/Home/Hero'

const Index = ({ pageData, techData }) => {
  const { data, globalData } = pageData;
  const { blogs, navigation, services, socials,
    regions, contactblock } = globalData;
  const { homepage, projects, testimonials } = data;
  const techs = destructureCollectionType(techData.teches);

  const {
    seo,
    alternates,
    localepages,
    hero,
    about,
    projects: projectsHomepage,
    blogs: blogsHomepage,
    testimonials: testimonialsHomepage,
  } = destructureSingleType(homepage);

  return (
    <>
      <Seo seo={seo} alternates={alternates} />
      <div className={`md:bg-banner_image md:bg-no-repeat 
      md:bg-[center] md:bg-contain 2xl:bg-[center_-2rem] 
      3xl:bg-[center_-3rem]`}>
        <Header nav={navigation} localepages={localepages} />
        <Hero content={hero} socialsRaw={socials} />
      </div>
      <PageLayout>
        <About content={about} techs={techs}/>
        <Projects content={projectsHomepage} data={projects} />
        <Blogs content={blogsHomepage} data={blogs} />
        <Testimonials content={testimonialsHomepage} data={testimonials} />
        <Contact content={contactblock} />
        <Footer servicesRaw={services} blogsRaw={blogs}
          socialsRaw={socials} regionsRaw={regions} />
      </PageLayout>
    </>
  )
}

export default Index

export async function getStaticProps({ locale }) {
  const pageData = await getData(GET_HOMEPAGE, { locale: [locale] });
  const techData = await getData(GET_TECHS, { locale: [locale] }, false);

  return {
    props: { pageData, techData },
  }
}