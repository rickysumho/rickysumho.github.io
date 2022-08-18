import { ExperienceType } from '../common/types';
import { Tab, Typography } from '@mui/material';


const ExperienceListTab = ({ experience, id, selected }: { experience: ExperienceType, id: number, selected: any }) => {
    // if selected then change backgroundColor to selected color

    return (
        <Tab label={experience.company} value={id}
        sx={{ color: 'primary.contrastText', fontWeight: 'bold', fontSize: '1.25em' }} 
        />
    );
}

export default ExperienceListTab;