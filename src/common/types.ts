export interface ProjectType {
    title: string;
    description: string;
    skills: string;
    repo_link?: string;
    demo_link?: string;
}

export interface ExperienceType {
    title: string;
    date: string;
    location: string;
    description: Array<string>;
    img_link: string;
} 