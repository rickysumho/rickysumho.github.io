import { ExperienceType } from '../common/types';
import { Tab, Typography, Box } from '@mui/material';


const ExperienceListPanel = ({ experiences, id }: { experiences: Array<ExperienceType>, id: number }) => {
    // Add state handling for showing selection

    const experienceObj: ExperienceType | undefined = experiences.find((experience) => experience.id === id);

    // Flexbox Container that holds both description and location image
    return (
        <Box display='flex' justifyContent='flex-start' alignItems='flex-start' >
            <Box sx={{ padding: '1.5em', minWidth: '25em' }}>
                <Typography color='primary.contrastText' fontSize='1.2em' fontWeight='bold'>{experienceObj ? experienceObj.company : 'Experience not found'}</Typography>
                <Typography color='primary.contrastText' fontSize='1em' fontWeight='bold'>{experienceObj ? experienceObj.title : 'Experience not found'}</Typography>
                <Typography color='primary.contrastText' fontSize='0.8em' gutterBottom>{experienceObj ? experienceObj.location : 'Experience not found'} | {experienceObj ? experienceObj.date : 'Experience not found'}</Typography>
                {experienceObj ? 
                (experienceObj.description.main.map((point: string, index: number) => 
                    (<Typography color='primary.contrastText' fontSize='0.9em' gutterBottom>{point}</Typography>))) :
                    (<Typography color='primary.contrastText' fontSize='0.9em' gutterBottom>Experience Not Found</Typography>)}
                <Typography color='primary.contrastText' gutterBottom>{experienceObj ? experienceObj.description.skills : 'Experience not found'}</Typography>
            </Box>
        </Box>
    );
}

export default ExperienceListPanel;