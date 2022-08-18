import { ExperienceType } from '../common/types';
import { Avatar, Typography, Box, Icon } from '@mui/material';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

const ExperienceListPanel = ({ experiences, selected }: { experiences: Array<ExperienceType>, selected: any }) => {
    const avatarStyle = {
        minHeight: '15em', 
        maxHeight: '15em', 
        minWidth: '15em', 
        maxWidth: '15em', 
        margin: '1em',
        borderRadius: '10px',
        boxShadow: 15
    };

    const DescriptionDetailBox = ({ point, index}: {point: string, index: number}) => {
        return (
            <Box display='flex' flexDirection='row' flexWrap='nowrap'>
                <Icon><ArrowRightIcon sx={{ color: 'primary.contrastText' }} /></Icon>
                <Typography key={`desc-${index}`} color='primary.contrastText' fontSize='0.9em' gutterBottom>{point}</Typography>
            </Box>
        );
    };

    const experienceObj: ExperienceType | undefined = experiences.find((experience) => experience.id === selected);
    const placeholderImg: string = 'https://upload.wikimedia.org/wikipedia/en/5/5a/Black_question_mark.png';
    // Flexbox Container that holds both description and location image
    return (
        <Box display='flex' justifyContent='flex-start' alignItems='center' padding='1.5em'>
            <Box sx={{ minWidth: '25em', maxWidth: '30em' }}>
                <Typography key='company' color='primary.contrastText' fontSize='1.2em' fontWeight='bold'>{experienceObj ? experienceObj.company : 'Experience not found'}</Typography>
                <Typography key='title' color='primary.contrastText' fontSize='1em' fontWeight='bold'>{experienceObj ? experienceObj.title : 'Experience not found'}</Typography>
                <Typography key='location' color='primary.contrastText' fontSize='0.8em' gutterBottom>{experienceObj ? experienceObj.location : 'Experience not found'} | {experienceObj ? experienceObj.date : 'Experience not found'}</Typography>
                {experienceObj ? 
                (experienceObj.description.main.map((point: string, index: number) => 
                    (<DescriptionDetailBox point={point} index={index} />))) :
                    (<Typography key='no-desc' color='primary.contrastText' fontSize='0.9em' gutterBottom>Experience Not Found</Typography>)}
                <Typography key='skills' color='primary.contrastText' gutterBottom><b>Utilized: </b> {experienceObj ? experienceObj.description.skills : 'Experience not found'}</Typography>
            </Box>
            <Avatar alt='Internship location' 
            src={experienceObj ? experienceObj.img_link : placeholderImg} variant='rounded' 
            sx={avatarStyle} />
        </Box>
    );
}

export default ExperienceListPanel;