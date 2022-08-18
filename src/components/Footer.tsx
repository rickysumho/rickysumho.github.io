import { Container, Typography, Box } from '@mui/material';

const Footer = () => {
    return (
        <Box display='flex' justifyContent='center' alignItems='center' mb='2em'>
            <footer>
                <Typography color='primary.contrastText' fontSize='1em' align='center'>
                    Developed by Ricky Ho.
                </Typography>
                <Typography color='primary.contrastText' fontSize='0.9em' align='center'>
                    All rights reserved. &copy; {(new Date().getFullYear())}
                </Typography>
            </footer>
        </Box>
    );
}

export default Footer;