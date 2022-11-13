import { gql } from "graphql-request";

export const GET_LANDING_PAGE = gql`
    fragment header on LandingPage {
        header {
            rolePosition
            openToWork
            companyEmployed
        }
    }

    fragment aboutMe on LandingPage {
        aboutMe {
            title
            description {
                html
            }
            photo {
                url
            }
        }
    }

    fragment jobs on LandingPage {
        portfolio {
            jobs {
                name
                workbench
                url
                image {
                    url
                }
            }
        }
    }

    fragment tech on LandingPage {
        tech {
            stackKnowledges(where: {activeTech: true}) {
                name
                percentageKnowledge      
            }
        }
    }

    fragment contactMe on LandingPage {
        contactMe {
            contacts {
                socialUrl
                usernameSocial
                type
            }
        }
    }

    query getLandingPages {
        landingPages {
            ...header
            ...aboutMe
            ...tech  
            ...jobs  
            ...contactMe    
        }
    }
`