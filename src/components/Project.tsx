import { Box, Card, CardContent, CardActions, Typography, IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import PreviewIcon from '@mui/icons-material/Preview';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import { useState } from 'react';
import { ProjectType } from '../common/types';
import '@fontsource/poppins/400.css';

const Project = ({ project }: { project: ProjectType }) => {
    const normalState = {
        hovering: false,
        boxShadow: 0,
        minWidth: 275, 
        maxWidth: 500, 
        minHeight: 300,
        maxHeight: 350,
        backgroundColor: 'primary.main', 
        color: 'primary.contrastText', 
        borderRadius: '15px',
        transition: '0.3s'
    }
    
    const hoverState = {
        hovering: true,
        boxShadow: 15,
        minWidth: 275, 
        maxWidth: 500, 
        minHeight: 300,
        maxHeight: 350,
        backgroundColor: 'primary.light', 
        color: 'primary.contrastText', 
        borderRadius: '15px',
        transition: '0.3s'
    }
    
    const [hover, setHover] = useState(normalState);

    return (
        <Card sx={hover} 
        onMouseOver={() => setHover(hoverState)} 
        onMouseOut={() => setHover(normalState)} 
        raised={hover.hovering}>
            <Box display='flex'justifyContent='space-between'>
                <CardActions disableSpacing>
                    <IconButton disabled><AccountTreeIcon sx={{ color: 'primary.contrastText', fontSize: '1.5em'}} /></IconButton>
                </CardActions>
                <CardActions disableSpacing>
                    {project.repo_link && (<IconButton href={project.repo_link}><GitHubIcon sx={{ color: 'primary.contrastText' }} /></IconButton>)}
                    {project.demo_link && (<IconButton href={project.demo_link}><PreviewIcon sx={{ color: 'primary.contrastText' }} /></IconButton>)}
                </CardActions>
            </Box> 
            <CardContent>
                <Typography variant='h5' gutterBottom>
                    <b>{project.title}</b>
                </Typography>
                <Typography paragraph>
                    {project.description}
                </Typography>
                <Typography paragraph>
                    <b>Utilized: </b>{project.skills}
                </Typography>
            </CardContent>
        </Card>
    );
}

export default Project;