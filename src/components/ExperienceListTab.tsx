import { ExperienceType } from '../common/types';
import { Tab, Typography } from '@mui/material';


const ExperienceListTab = ({ experience, id, selected }: { experience: ExperienceType, id: number, selected: any }) => {
    // Add state handling for showing selection

    return (
        <Tab label={experience.company} value={id} 
        sx={{ color: 'primary.contrastText', fontWeight: 'bold', fontSize: '1.25em' }} 
        />
    );
}

export default ExperienceListTab;