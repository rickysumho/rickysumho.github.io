import styled from 'styled-components';
import { ProjectType } from '../common/types'

const StyledCard = styled.div`
    position: relative;
    cursor: default;
    
    background-color: purple;
`;

const Header = styled.div`
`;

const Title = styled.h1`
`;

const Description = styled.h2`
`;

const Skills = styled.h3`
`;

const Project = ({ project }: { project: ProjectType }) => {
    return (
        <StyledCard>
            <Header />
            <Title>Hello</Title>
            <Description></Description>
            <Skills></Skills>
        </StyledCard>
    );
}

export default Project;