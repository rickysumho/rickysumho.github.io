import { ExperienceType } from './types'

// export interface ExperienceType {
//     title: string;
//     date: string;
//     location: string;
//     description: Array<string>;
//     img_link: string;
// } 


const workExperiences: Array<ExperienceType> = [
    {
        title: 'Software Developer Intern',
        company: 'Cars.com',
        date: '06/2022 - 08/2022',
        location: 'Chicago, IL',
        description: {
            main: ['Implemented a LaunchDarkly feature flag for a fuzzy trade-in search by creating a feature flag status API in PHP',
             'Improved visitor lookup matching using Node.js by upgrading same-visitor detection backend logic', 
             'Enhanced app user interface using React.js by fixing numerous UI bugs and restructuring setting forms',
             'Collaborated in a 10-person team following a Scrum agile software development methodology using Jira'],
            skills: 'PHP and stuff'
        },
        img_link: 'https://images.unsplash.com/photo-1587402092301-725e37c70fd8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHVwcHklMjBkb2d8ZW58MHx8MHx8&w=1000&q=80',
        id: 0
    },
    {
        title: 'Software Developer Intern',
        company: 'Trojan',
        date: '06/2022 - 08/2022',
        location: 'Chicago, IL',
        description: {
            main: ['Collab in a scummy team', 'Broke multiple records in non productivity', 'Drove Car into Cars.com'],
            skills: 'PHP and stuff'
        },
        img_link: 'https://images.unsplash.com/photo-1587402092301-725e37c70fd8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHVwcHklMjBkb2d8ZW58MHx8MHx8&w=1000&q=80',
        id: 1
    },
    {
        title: 'Software Developer Intern',
        company: 'Google',
        date: '06/2022 - 08/2022',
        location: 'Chicago, IL',
        description: {
            main: ['Collab in a scummy team', 'Broke multiple records in non productivity', 'Drove Car into Cars.com'],
            skills: 'PHP and stuff'
        },
        img_link: 'https://images.unsplash.com/photo-1587402092301-725e37c70fd8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHVwcHklMjBkb2d8ZW58MHx8MHx8&w=1000&q=80',
        id: 2
    },
];

export default workExperiences;