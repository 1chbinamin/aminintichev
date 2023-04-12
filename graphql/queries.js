import { gql } from "@apollo/client";

// Data that is (mostly) used everywhere in the website (footer, etc)

const GET_GLOBAL = gql`
  query Global($locale: I18NLocaleCode) {
    localePages {
      data {
        attributes {
          name
          flag {
            image {
              data {
                attributes {
                  url
                }
              }
            }
          }
          locale
        }
      }
    }
    pages(locale: $locale) {
      data {
        attributes {
          title
          href
        }
      }
    }
    blogs(
      locale: $locale
      filters: { showcase: { eq: true } }
      sort: "date:desc"
    ) {
      data {
        attributes {
          title
          img {
            image {
              data {
                attributes {
                  url
                }
              }
            }
            objectFit
            width
            height
            alt
          }
          date
          slug
        }
      }
    }
    services(locale: $locale) {
      data {
        attributes {
          title
          showcase
          icon {
            name
            brands
          }
        }
      }
    }
    socials {
      data {
        attributes {
          title
          href
          icon {
            name
            brands
          }
        }
      }
    }
    regions(locale: $locale) {
      data {
        attributes {
          name
          slug
          showcase
        }
      }
    }
    contactblock(locale: $locale) {
      data {
        attributes {
          title
          text
          button {
            href
            text
            external
          }
        }
      }
    }
  }
`;

// Data that is used for specific pages

const GET_HOMEPAGE = gql`
  query Homepage($locale: I18NLocaleCode) {
    homepage(locale: $locale) {
      data {
        attributes {
          localepages {
            locale_link {
              data {
                attributes {
                  name
                  flag {
                    image {
                      data {
                        attributes {
                          url
                        }
                      }
                    }
                  }
                }
              }
            }
            href
            locale
          }
          alternates {
            href
            hreflang
          }
          seo {
            title
            description
            canonical
          }
          hero {
            title
            text
            img {
              image {
                data {
                  attributes {
                    url
                  }
                }
              }
              objectFit
              width
              height
              alt
            }
            button {
              href
              text
              external
            }
          }
          about {
            title
            subtitle
            text
            img {
              image {
                data {
                  attributes {
                    url
                  }
                }
              }
              objectFit
              width
              height
              alt
            }
            button {
              href
              text
              external
            }
          }
          projects {
            title
            slug
            text
            button {
              href
              text
              external
            }
          }
          blogs {
            title
            slug
            text
            button {
              href
              text
              external
            }
          }
          testimonials {
            title
            slug
            text
          }
        }
      }
    }
    projects(locale: $locale, filters: { showcase: { eq: true } }) {
      data {
        attributes {
          img {
            image {
              data {
                attributes {
                  url
                }
              }
            }
            alt
          }
        }
      }
    }
    testimonials(locale: $locale) {
      data {
        attributes {
          letter
          name
          review
          backgroundColor
        }
      }
    }
  }
`;

const GET_ABOUTPAGE = gql`
  query Aboutpage($locale: I18NLocaleCode) {
    aboutpage(locale: $locale) {
      data {
        attributes {
          alternates {
            href
            hreflang
          }
          localepages {
            locale_link {
              data {
                attributes {
                  name
                  flag {
                    image {
                      data {
                        attributes {
                          url
                        }
                      }
                    }
                  }
                }
              }
            }
            href
            locale
          }
          seo {
            title
            description
            canonical
          }
          hero {
            title
            subtitle
            text
            img {
              image {
                data {
                  attributes {
                    url
                  }
                }
              }
              objectFit
              width
              height
              alt
            }
            button {
              href
              text
              external
            }
          }
          expertise {
            title
            subtitle
            text
            slug
          }
          who {
            title
            subtitle
            text
            slug
            summary
            img {
              image {
                data {
                  attributes {
                    url
                  }
                }
              }
              objectFit
              width
              height
              alt
            }
            button {
              href
              text
              external
            }
          }
          why {
            title
            subtitle
            slug
            text
            summary
            img {
              image {
                data {
                  attributes {
                    url
                  }
                }
              }
              objectFit
              width
              height
              alt
            }
          }
          what {
            title
            subtitle
            slug
            text
            subBlock {
              title
              text
            }
          }
        }
      }
    }
  }
`;

const GET_PROJECTSPAGE = gql`
  query Projectspage($locale: I18NLocaleCode) {
    projectspage(locale: $locale) {
      data {
        attributes {
          alternates {
            href
            hreflang
          }
          localepages {
            locale_link {
              data {
                attributes {
                  name
                  flag {
                    image {
                      data {
                        attributes {
                          url
                        }
                      }
                    }
                  }
                }
              }
            }
            href
            locale
          }
          seo {
            title
            description
            canonical
          }
          hero {
            title
            text
            img {
              image {
                data {
                  attributes {
                    url
                  }
                }
              }
              objectFit
              width
              height
              alt
            }
            button {
              href
              text
              external
            }
            slug
          }
          top {
            title
            slug
            subtitle
          }
          all {
            title
            slug
            subtitle
          }
        }
      }
    }
  }
`;

const GET_BLOGSPAGE = gql`
  query Blogspage($locale: I18NLocaleCode) {
    blogspage(locale: $locale) {
      data {
        attributes {
          alternates {
            href
            hreflang
          }
          localepages {
            locale_link {
              data {
                attributes {
                  name
                  flag {
                    image {
                      data {
                        attributes {
                          url
                        }
                      }
                    }
                  }
                }
              }
            }
            href
            locale
          }
          seo {
            title
            description
            canonical
          }
          hero {
            title
            text
            img {
              image {
                data {
                  attributes {
                    url
                  }
                }
              }
              objectFit
              width
              height
              alt
            }
            button {
              href
              text
              external
            }
            slug
          }
          top {
            title
            slug
            subtitle
          }
          all {
            title
            slug
            subtitle
          }
          noBlogs {
            title
            text
          }
        }
      }
    }
  }
`;

const GET_CONTACTPAGE = gql`
  query Contactpage($locale: I18NLocaleCode) {
    contactpage(locale: $locale) {
      data {
        attributes {
          alternates {
            href
            hreflang
          }
          localepages {
            locale_link {
              data {
                attributes {
                  name
                  flag {
                    image {
                      data {
                        attributes {
                          url
                        }
                      }
                    }
                  }
                }
              }
            }
            href
            locale
          }
          seo {
            title
            description
            canonical
          }
          hero {
            title
            text
            img {
              image {
                data {
                  attributes {
                    url
                  }
                }
              }
              objectFit
              width
              height
              alt
            }
            button {
              href
              text
              external
            }
            slug
          }
          form {
            title
            slug
            subtitle
            text
          }
          successMessage {
            title
            text
            backgroundColor
          }
          clientErrorMessage {
            title
            text
            backgroundColor
          }
          serverErrorMessage {
            title
            text
            backgroundColor
          }
        }
      }
    }
  }
`;

const GET_CLIENT_ERRORPAGE = gql`
  query ClientErrorPage($locale: I18NLocaleCode) {
    clientErrorpage(locale: $locale) {
      data {
        attributes {
          alternates {
            href
            hreflang
          }
          seo {
            title
            description
            canonical
          }
          block {
            title
            text
            img {
              image {
                data {
                  attributes {
                    url
                  }
                }
              }
              width
              height
              objectFit
              alt
            }
            button {
              href
              text
              external
            }
          }
        }
      }
    }
  }
`;

const GET_SERVER_ERRORPAGE = gql`
  query ServerErrorPage($locale: I18NLocaleCode) {
    serverErrorpage(locale: $locale) {
      data {
        attributes {
          alternates {
            href
            hreflang
          }
          seo {
            title
            description
            canonical
          }
          block {
            title
            text
            img {
              image {
                data {
                  attributes {
                    url
                  }
                }
              }
              width
              height
              objectFit
              alt
            }
            button {
              href
              text
              external
            }
          }
        }
      }
    }
  }
`;

// Collection data

const GET_PAGE = gql`
query Pages($locale: I18NLocaleCode, $slug: String) {
  pages(locale: $locale, filters: { slug: { eq: $slug } }) {
    data {
      attributes {
        title
        href
        slug
        seo {
          title
          description
          canonical
        }
        alternates {
          hreflang
          href
        }
        localepages {
          locale
          href
          locale_link {
            data {
              attributes {
                name
                flag {
                  image {
                    data {
                      attributes {
                        url
                      }
                    }
                  }
                }
              }
            }
          }
        }
        blocks {
          __typename
          ... on ComponentLayoutsBlockNormalMedium {
            title
            slug
            subtitle
            text
            img {
              objectFit
              width
              height
              alt
              image {
                data {
                  attributes {
                    url
                  }
                }
              }
            }
          }
          ... on ComponentLayoutsBlockNormal {
            title
            slug
            subtitle
            text
            button {
              href
              text
              label
              external
            }
            img {
              objectFit
              width
              height
              alt
              image {
                data {
                  attributes {
                    url
                  }
                }
              }
            }
          }
          ... on ComponentLayoutsBlockNormalSmall {
            title
            slug
            subtitle
            text
          }
        }
      }
    }
  }
}
`;

const GET_SERVICES = gql`
  query Services($locale: I18NLocaleCode) {
    services(locale: $locale) {
      data {
        attributes {
          title
          text
          showcase
          backgroundColor
          icon {
            name
            brands
          }
        }
      }
    }
  }
`;

const GET_PROJECTS = gql`
  query Projects($locale: I18NLocaleCode) {
    projects(locale: $locale) {
      data {
        id
        attributes {
          alternates {
            href
            hreflang
          }
          seo {
            title
            description
            canonical
          }
          title
          slug
          description
          img {
            image {
              data {
                attributes {
                  url
                }
              }
            }
            alt
          }
          showcase
          locale
        }
      }
    }
  }
`;

const GET_BLOGS = gql`
  query Blogs($locale: I18NLocaleCode) {
    blogs(locale: $locale) {
      data {
        attributes {
          alternates {
            href
            hreflang
          }
          seo {
            title
            description
            canonical
          }
          title
          slug
          description
          img {
            image {
              data {
                attributes {
                  url
                }
              }
            }
            alt
          }
          text
          showcase
          locale
        }
      }
    }
  }
`;

const GET_REGIONS = gql`
  query Regions($locale: I18NLocaleCode) {
    regions(locale: $locale) {
      data {
        id
        attributes {
          name
          slug
          seo {
            title
            description
            canonical
          }
          alternates {
            hreflang
            href
          }
          hero {
            title
            text
            button {
              href
              text
              label
              external
            }
            img {
              image {
                data {
                  attributes {
                    url
                  }
                }
              }
              width
              height
              alt
              objectFit
            }
          }
          contents {
            title
            subtitle
            text
            button {
              href
              text
              label
              external
            }
            slug
            summary
            img {
              image {
                data {
                  attributes {
                    url
                  }
                }
              }
              width
              height
              alt
              objectFit
            }
            position
          }
          locale
        }
      }
    }
  }
`;

const GET_TESTIMONIALS = gql`
query Pages($locale: I18NLocaleCode) {
  testimonials(locale: $locale) {
    data {
      attributes {
        name
        letter
        review
        backgroundColor
      }
    }
  }
}
`;

const GET_TECHS = gql`
query Techs {
  teches {
    data {
      attributes {
        name
        img {
          image {
            data {
              attributes {
                url
              }
            }
          }
          objectFit
          width
          height
          alt
        }
      }
    }
  }
}
`;

const GET_PROJECT = gql`
  query Projects($locale: I18NLocaleCode, $slug: String) {
    projects(locale: $locale, filters: { slug: { eq: $slug } }) {
      data {
        id
        attributes {
          alternates {
            href
            hreflang
          }
          localepages {
            locale_link {
              data {
                attributes {
                  name
                  flag {
                    image {
                      data {
                        attributes {
                          url
                        }
                      }
                    }
                  }
                }
              }
            }
            href
            locale
          }
          seo {
            title
            description
            canonical
          }
          title
          slug
          description
          descriptionText
          technologiesText
          technologies {
            name
            image {
              image {
                data {
                  attributes {
                    url
                  }
                }
              }
              objectFit
              width
              height
              alt
            }
          }
          img {
            image {
              data {
                attributes {
                  url
                }
              }
            }
            objectFit
            width
            height
            alt
          }
          imgTwo {
            image {
              data {
                attributes {
                  url
                }
              }
            }
            objectFit
            width
            height
            alt
          }
          link
          showcase
          locale
        }
      }
    }
  }
`;

const GET_BLOG = gql`
  query Blogs($locale: I18NLocaleCode, $slug: String) {
    blogs(locale: $locale, filters: { slug: { eq: $slug } }) {
      data {
        attributes {
          alternates {
            href
            hreflang
          }
          localepages {
            locale_link {
              data {
                attributes {
                  name
                  flag {
                    image {
                      data {
                        attributes {
                          url
                        }
                      }
                    }
                  }
                }
              }
            }
            href
            locale
          }
          seo {
            title
            description
            canonical
          }
          title
          slug
          description
          img {
            image {
              data {
                attributes {
                  url
                  formats
                }
              }
            }
            objectFit
            width
            height
            alt
          }
          text
          showcase
          date
        }
      }
    }
  }
`;

const GET_REGION = gql`
  query Regions($locale: I18NLocaleCode, $slug: String) {
    regions(locale: $locale, filters: { slug: { eq: $slug } }) {
      data {
        id
        attributes {
          name
          slug
          seo {
            title
            description
            canonical
          }
          localepages {
            locale_link {
              data {
                attributes {
                  name
                  flag {
                    image {
                      data {
                        attributes {
                          url
                        }
                      }
                    }
                  }
                }
              }
            }
            href
            locale
          }
          alternates {
            hreflang
            href
          }
          hero {
            title
            text
            button {
              href
              text
              label
              external
            }
            img {
              image {
                data {
                  attributes {
                    url
                  }
                }
              }
              width
              height
              alt
              objectFit
            }
          }
          contents {
            title
            subtitle
            text
            button {
              href
              text
              label
              external
            }
            slug
            summary
            img {
              image {
                data {
                  attributes {
                    url
                  }
                }
              }
              width
              height
              alt
              objectFit
            }
            position
          }
          locale
        }
      }
    }
  }
`;

const GET_LOCALES = gql`
  query Locales {
    i18NLocales {
      data {
        attributes {
          code
        }
      }
    }
  }
`;

export {
  GET_GLOBAL,
  GET_HOMEPAGE,
  GET_ABOUTPAGE,
  GET_PROJECTSPAGE,
  GET_BLOGSPAGE,
  GET_CONTACTPAGE,
  GET_CLIENT_ERRORPAGE,
  GET_SERVER_ERRORPAGE,
  GET_PAGE,
  GET_SERVICES,
  GET_PROJECTS,
  GET_BLOGS,
  GET_REGIONS,
  GET_TESTIMONIALS,
  GET_TECHS,
  GET_PROJECT,
  GET_BLOG,
  GET_REGION,
  GET_LOCALES,
};
