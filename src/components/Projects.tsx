import { ProjectType } from '../common/types';
import Project from './Project';
import Jump from './Jump';
import { Grid, Container } from '@mui/material';

const Projects = ({ projects }: { projects: Array<ProjectType> }) => {
    return (
        <>
            <Jump name='Projects' emoji='🔨' />
            <Container>
                <Grid container direction='row' alignItems='center' justifyContent='center' spacing={2} columnSpacing={{ xs: 1, sm: 2, md: 1 }}>
                    {projects.map((project: ProjectType, index: number) => (
                        <Grid item key={index} xs={12} sm={6} md={4}>
                            <Project key={index} project={project} />
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </>
    );
}

export default Projects;