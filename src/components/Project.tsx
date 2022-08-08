import { Card, CardContent, CardActions, Typography, IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import PreviewIcon from '@mui/icons-material/Preview';
import { ProjectType } from '../common/types';

// const StyledCard = styled.div`
//     position: relative;
//     cursor: default;
//     font-family: Helvetica;
//     flex-direction: column;
//     border-radius: 16px;
//     padding: 2rem 1.75rem;
//     height: 100%;
//     background-color: steelblue;
// `;

// const StyledHeader = styled.div`
// `;

// const StyledIcon = styled.div`
//     background-color: green;
// `;

// const Icon = ({ link, img }: { link: string, img: string }) => {
//     return (
//         {link !== '' && (<a href={link}><img src={img} style={}></img></a>)}
//     );
// };

// const Header = ({ repo_link, demo_link }: { repo_link: string, demo_link: string }) => {
//     return (
//         <StyledHeader>
//             <Icon link={repo_link} img={github}></Icon>
//             <Icon link={demo_link} img={web}></Icon>
//         </StyledHeader>
//     );
// };

// const Title = styled.h1`
// `;

// const Description = styled.h3`
// `;

// const Skills = styled.h4`
// `;



const Project = ({ project }: { project: ProjectType }) => {
    return (
        <Card sx={{ minWidth: 275, maxWidth: 345, backgroundColor: 'primary.main', color: 'primary.contrastText' }}>
            <CardActions disableSpacing>
                {project.repo_link && (<IconButton href={project.repo_link}><GitHubIcon sx={{ color: 'primary.contrastText' }} /></IconButton>)}
                {project.demo_link && (<IconButton href={project.demo_link}><PreviewIcon sx={{ color: 'primary.contrastText' }} /></IconButton>)}
            </CardActions>
            <CardContent>
                <Typography variant='h5' gutterBottom>
                    <b>{project.title}</b>
                </Typography>
                <Typography paragraph>
                    {project.description}
                </Typography>
                <Typography paragraph>
                    {project.skills}
                </Typography>
            </CardContent>
        </Card>
    );
}

export default Project;