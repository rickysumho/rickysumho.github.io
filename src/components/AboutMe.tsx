import Jump from './Jump';
import RickyMCard from '../common/RickyMCard.jpg'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { Avatar, Box, Container, Typography, Icon, Grid } from '@mui/material';

const Skill = ({skill}: {skill: string}) => {
    return (
        // Add unique keys
        <Grid item xs={12} sm={6} md={4}>
            <Box display='flex'>
                <Icon><KeyboardArrowRightIcon sx={{ color: 'primary.contrastText' }} /></Icon>
                <Typography color='primary.contrastText' fontSize='1.2em' fontWeight='bold'>{skill}</Typography>
            </Box>
            
        </Grid>
    );
}

const AboutMe = () => {
    const info = {
        intro: 'I am a second-year student at the University of Michigan studying Computer Science. Most of my technical experience has been in the web development, but I have dabbled in mobile development and robotics.',
        skills: ['JavaScript 🖥️', 'Node.js 🟩', 'C++ 🤖', 'Python 🐍', 'TypeScript ⌨️', 'React.js 🧪', 'Java ☕', 'HTML & CSS 📚'],
        interests: 'In my free time, I love playing volleyball, reselling sneakers, and crypto investing.'
    }

    const avatarStyle = {
        minHeight: '15em', 
        maxHeight: '20em', 
        minWidth: '15em', 
        maxWidth: '20em', 
        borderRadius: '10px',
        boxShadow: 15
    };

    const boxStyle = {
        display: 'flex',
        justifyContent: 'space-between', 
        alignItems: 'flex-start',
        flexDirection: 'row',
        mb: '5em',
        mr: '2em'
    }

    return (
        <>
            <Jump name='About Me' emoji='🐈'/>
            <Container>
                <Box sx={boxStyle}>
                    <Box sx={{...boxStyle, flexDirection: 'column', mr: '5em'}}>
                        <Typography color='primary.contrastText' minWidth='20em' maxWidth='30em' fontSize='1.2em' gutterBottom>
                            {info.intro}
                        </Typography>
                        <Typography color='primary.contrastText' minWidth='20em' maxWidth='30em' fontSize='1.2em' gutterBottom>
                            &nbsp;
                        </Typography>
                        <Typography color='primary.contrastText' minWidth='20em' maxWidth='30em' fontSize='1.2em' gutterBottom>
                            Some of my curent skills include:
                        </Typography>
                        <Grid container spacing={2} mt='0.5em' mb='2em'>
                            {info.skills.map((skill) => (
                                <Skill skill={skill} />
                            ))}
                        </Grid>
                        <Typography color='primary.contrastText' minWidth='20em' maxWidth='30em' fontSize='1.2em' gutterBottom>
                            {info.interests}
                        </Typography>
                    </Box>
                    <Avatar alt='Ricky Ho' src={RickyMCard} variant='rounded' sx={avatarStyle} />
                </Box>
            </Container>
        </>
    );
}

export default AboutMe;