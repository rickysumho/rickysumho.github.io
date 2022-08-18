import { Container, Box, Tabs, Tab, Card } from '@mui/material';
import { ExperienceType } from '../common/types';
import { useState, SyntheticEvent } from 'react';
import ExperienceListTab from './ExperienceListTab';
import ExperienceListPanel from './ExperienceListPanel';
import Jump from './Jump';

const Experiences = ({ experiences }: { experiences: Array<ExperienceType> }) => {
    const boxStyle = {
        display: 'flex',
        justifyContent: 'space-between', 
        alignItems: 'center',
        flexDirection: 'row',
        minWidth: '250px',
        maxWidth: '300px',
    };

    // Pass in change select function, if click one
    // it changes local button state

    const [selected, setSelected] = useState(0);

    const changeSelect = (event: SyntheticEvent, newSelected: number) => {
        setSelected(newSelected);
    };
    
    return (
        <>
            <Jump name='experiences' emoji='👾' />
            <Container>
                <Box display='flex' justifyContent='space-between' margin='2em' mb='35em'>
                    <Box key='tabs' margin='1em'>
                        <Tabs orientation='vertical' textColor='secondary' value={selected} onChange={changeSelect} sx={{ width: '25em' }} 
                        TabIndicatorProps={{ style: {backgroundColor: '#839dc0'} }}>
                            {experiences.map((experience: ExperienceType) => (
                                <Tab label={experience.company} value={experience.id} key={experience.id} 
                                sx={{ color: 'primary.contrastText', fontWeight: 'bold', fontSize: '1.25em' }} />
                            ))}
                        </Tabs>
                    </Box>
                    <Box key='panel' margin='1em' sx={{ backgroundColor: 'primary.main', borderRadius: '15px' }}>
                        <ExperienceListPanel experiences={experiences} selected={selected} />
                    </Box>
                </Box>
            </Container>
        </>
    );
}

export default Experiences;