import { ExperienceType } from '../common/types';
import { Tab, Typography, Box } from '@mui/material';


const ExperienceListPanel = ({ experiences, selected }: { experiences: Array<ExperienceType>, selected: any }) => {
    // Add state handling for showing selection

    const experienceObj: ExperienceType | undefined = experiences.find((experience) => experience.id === selected);

    // Flexbox Container that holds both description and location image
    return (
        <Box display='flex' justifyContent='flex-start' alignItems='flex-start' >
            <Box sx={{ padding: '1.5em', minWidth: '25em' }}>
                <Typography key='company' color='primary.contrastText' fontSize='1.2em' fontWeight='bold'>{experienceObj ? experienceObj.company : 'Experience not found'}</Typography>
                <Typography key='title' color='primary.contrastText' fontSize='1em' fontWeight='bold'>{experienceObj ? experienceObj.title : 'Experience not found'}</Typography>
                <Typography key='location' color='primary.contrastText' fontSize='0.8em' gutterBottom>{experienceObj ? experienceObj.location : 'Experience not found'} | {experienceObj ? experienceObj.date : 'Experience not found'}</Typography>
                {experienceObj ? 
                (experienceObj.description.main.map((point: string, index: number) => 
                    (<Typography key={`desc-${index}`} color='primary.contrastText' fontSize='0.9em' gutterBottom>{point}</Typography>))) :
                    (<Typography key='no-desc' color='primary.contrastText' fontSize='0.9em' gutterBottom>Experience Not Found</Typography>)}
                <Typography key='skills' color='primary.contrastText' gutterBottom>{experienceObj ? experienceObj.description.skills : 'Experience not found'}</Typography>
            </Box>
        </Box>
    );
}

export default ExperienceListPanel;