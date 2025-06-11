import Image from "next/image";
import styled from "styled-components";

export const ContainerPostProvider = styled.div`
    display: grid;
    grid: 1;
`;
export const ContainerProfiler = styled.div`
    display: flex;
`;
export const ContainerImageProfiler = styled(Image)`
    width: 100;
`;
export const ContainerSectionProfiler = styled.section`
    display: grid;
`;
export const ContainerNameProfiler=styled.p`
    color: ${props=>props.theme['gray-100']};
    font-weight: 800;
`;
export const ContainerUserNameProfiler= styled.small`

`;


export const ContainerPostContent =styled.div``;
export const ContainerFlagsContent = styled.span``;
export const FlagsContent = styled.button``;
export const ContainerContentText = styled.p``;

export const ContainerPostOptions= styled.span``;
export const ContainerOption= styled.section``;
