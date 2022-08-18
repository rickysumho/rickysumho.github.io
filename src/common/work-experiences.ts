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
             'Enhanced app user interface using React.js by fixing numerous UI bugs and restructuring setting forms'],
            skills: 'TypeScript, Node.js, React.js, PHP, Jira, Git'
        },
        img_link: 'https://lh3.googleusercontent.com/pw/AL9nZEUmlqQgjB8rEOmGkSi2BXYI3R8OvgPmDtE4OEy-jTBXr-q-xvJXRapP333vY3Hn24BUMTjpLEkkjkynkgs4SUU0kwpQhc6jBTHUgWy1Rzr0BO6Ax_6pkL7Z3UthpuyodMV8I182ItqZgif0eAt9GdKW=s500-no?authuser=0',
        id: 0
    },
    {
        title: 'Research Assistant',
        company: 'University of Michigan',
        date: '09/2021 - 04/2022',
        location: 'Ann Arbor, MI',
        description: {
            main: ['Developed the Android application, flight software, and interface for smart radiation detectors on drones',
            'Identified and implemented drone components, PX-4 hardware and software, collision avoidance sensors, and flight computers used in the final design of the drone',
            'Tested compatibility of 3 obstacle avoidance algorithms across 5 Raspberry PI OS builds on a Raspberry Pi 4'],
            skills: 'Java, PX-4, Linux'
        },
        img_link: 'https://lh3.googleusercontent.com/pw/AL9nZEX1z7vxrfmvQLqLagA2Z43EoBZBdWoHcuu0We6JN_fRDXtB2wg2tCOaZoRlAOEbEsw97MDKoacCx-VdNYOm8yw7Xi92L8LdC2hH_yPaoVGpbmG2-TE5p8iFoVFlHAvcr3KNndcrf0Cjwa0FHvOAVrCA=s500-no?authuser=0',
        id: 1
    },
    {
        title: 'CSSI: Online Participant',
        company: 'Google',
        date: '07/2021 - 08/2021',
        location: 'Remote',
        description: {
            main: ['Engaged in a 4-week intensive, project-based JavaScript and Firebase curriculum taught by Google engineers', 
            'Configured 4 coding projects in JavaScript by using concepts such as variables, data types, and functions', 
            'Delivered a collaborative final project presentation including a live demonstration to Google employees'],
            skills: 'JavaScript, Firebase, Git'
        },
        img_link: 'https://lh3.googleusercontent.com/pw/AL9nZEVojcnws1x3NuSnC31rEluTaMm2iIkxEL2MMMW4lTIc2zPMFONLJNqpCoahAhAcoDyq4gPKZxU6EjYgDFTfla-vSZUvF8dvlCKA8zSCvL9zmof2rIY70wi43dDvoVtCPem21sk6FmTLHYnulmHv4CiM=s500-no?authuser=0',
        id: 2
    },
    {
        title: 'iOS Developer Intern',
        company: 'Everyone Can Code',
        date: '07/2020 - 08/2020',
        location: 'Chicago, IL',
        description: {
            main: ['Engaged in a 6-week project-based, introductory iOS development course taught by software engineers in partnership with Asian Human Services', 
            'Created an app prototype of LaundryDrop that addresses social distancing in laundromats utilizing Swift and Xcode', 
            'Pitched app concept and design against 4 other teams to Apple engineers and judges'],
            skills: 'Swift, Xcode'
        },
        img_link: 'https://lh3.googleusercontent.com/pw/AL9nZEVyU4A4V1DW87vfoPUB3SK9OrOq_IaCoB7348e-Tm-_6NtMOUEj1awAR8Xd_if_ybaK_kTfJgW8Il_gcM6Hj-FlgX3elJozSAcnUrUT-2h_NocWNQ05ZYrAbobqYkHc14PTPUg476PTfFmaCCFfy-Ws=s500-no?authuser=0',
        id: 3
    },
];

export default workExperiences;