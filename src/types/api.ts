export type HeaderDataProps = {
    rolePosition: string
    openToWork: boolean
    companyEmployed: string
}

export type AboutMeDataProps = {
    title: string
    description: {
        html: string
    }
    photo: {
        url: string
    }
}

export type StackKnowledgeItemProps = {
    name: string
    percentageKnowledge: number
}

export type TechDataProps = {
    stackKnowledges: StackKnowledgeItemProps[]
}

export type JobsDataProps = {
    name: string
    url: string
    workbench: string
    image: {
        url: string
    }
}

export type PortfolioDataProps = {
    jobs: JobsDataProps[]
}

export type ContactMeItemProps = {
    socialUrl: string
    usernameSocial: String
    type: 'github' | 'linkedin' | 'dribbble' | 'behance' | 'whatsapp' | 'email' | 'instagram' | 'youtube' | 'vimeo'
}

export type ContactsDataProps = {
    contacts: ContactMeItemProps[]
}

export type LandingPageDataProps = {
    header: HeaderDataProps
    aboutMe: AboutMeDataProps
    tech: TechDataProps
    portfolio: PortfolioDataProps
    contactMe: ContactsDataProps
}