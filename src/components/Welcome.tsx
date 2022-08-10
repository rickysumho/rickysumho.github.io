import { Card, CardContent, CardActions, Typography, IconButton, Container, Box } from '@mui/material';

const Welcome = () => {
    // const info = {
    //     welcome: `hi! i'm ${() => <b>ricky</b>} 😸`,
    //     title: 'aspiring keyboard presser',
    //     description: "I'm a student at the University of Michigan studying Computer Science. I like making stuff."
    // };

    return (
        <Container>
            <Box alignItems='center' justifyContent="center" sx={{margin: '5em'}}>
                <Typography variant='h1' color='primary.contrastText'><b>hi! i'm ricky 😸</b></Typography>
                <Typography variant='h3' color='primary.contrastText' fontStyle='italic' gutterBottom>aspiring keyboard presser</Typography>
                <Typography paragraph color='primary.contrastText'>I'm a student at the University of Michigan studying Computer Science. I like making stuff.</Typography>
            </Box>
        </Container>
    );
}

export default Welcome;