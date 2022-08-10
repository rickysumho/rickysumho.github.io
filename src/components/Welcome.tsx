import { Card, CardContent, CardActions, Typography, IconButton, Container, Box } from '@mui/material';

const Welcome = () => {
    const info = {
        welcome: "hi! i'm ricky",
        title: 'aspiring keyboard presser',
        description: "I'm a sophomore at the University of Michigan studying Computer Science. I like making stuff."
    };

    return (
        <Container>
            <Box alignItems='center' justifyContent="center" sx={{margin: '100px'}}>
                <Typography variant='h1' color='primary.contrastText'><b>{info.welcome}</b></Typography>
                <Typography variant='h3' color='primary.contrastText' gutterBottom>{info.title}</Typography>
                <Typography paragraph color='primary.contrastText'>{info.description}</Typography>
            </Box>
        </Container>
    );
}

export default Welcome;