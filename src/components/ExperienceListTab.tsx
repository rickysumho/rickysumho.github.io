import { ExperienceType } from '../common/types';
import { Tab, Typography } from '@mui/material';

// CANNOT BE USED WITH MUI TABS. MUI TABS REQUIRE NATIVE TABS TO WORK

const ExperienceListTab = ({ experience, selected }: { experience: ExperienceType, selected: any }) => {
    // if selected then change backgroundColor to selected color

    return (
        <Tab label={experience.company} value={experience.id}
        sx={{ color: 'primary.contrastText', fontWeight: 'bold', fontSize: '1.25em' }} 
        />
    );
}

export default ExperienceListTab;