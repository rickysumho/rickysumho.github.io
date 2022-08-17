export interface ProjectType {
    title: string;
    description: string;
    skills: string;
    repo_link?: string;
    demo_link?: string;
}


interface ExperienceDescription {
    main: Array<string>;
    skills: string;
}
export interface ExperienceType {
    title: string;
    company: string;
    date: string;
    location: string;
    description: ExperienceDescription;
    img_link: string;
    id: number;
} 