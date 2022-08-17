import { Container, Box, Tabs, Card } from '@mui/material';
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
        backgroundColor: 'primary.main',
        borderRadius: '15px'
    };

    // Pass in change select function, if click one
    // it changes local button state

    const [selected, setSelected] = useState(0);

    const changeSelect = (event: SyntheticEvent, selectedIdx: number) => {
        setSelected(selectedIdx);
    };
    
    return (
        <>
            <Jump name='experiences' emoji='👾' />
            <Container>
                <Box display='flex' justifyContent='flex-start' alignItems='center'>
                    <Box sx={boxStyle}>
                        <Tabs orientation='vertical' textColor='primary' value={selected} onChange={changeSelect} sx={{ width: '25em' }} >
                            {experiences.map((experience: ExperienceType) => (
                                <ExperienceListTab experience={experience} id={experience.id} selected={selected} />
                            ))}
                        </Tabs>
                    </Box>
                    <Box sx={{ backgroundColor: 'primary.main', borderRadius: '15px' }}>
                        <ExperienceListPanel experiences={experiences} id={selected} />
                    </Box>
                </Box>
            </Container>
        </>
    );
}

export default Experiences;