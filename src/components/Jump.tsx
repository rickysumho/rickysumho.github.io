import { Typography, Container } from '@mui/material';


const Jump = ({name, emoji}: {name: string, emoji: string}) => {
    return (
        <Container>
            <Typography id={name} variant='h2' 
            color='primary.contrastText' 
            fontStyle='italic' fontWeight='bold' gutterBottom>
                {emoji} {name}
            </Typography>
        </Container>
    );
};

export default Jump;