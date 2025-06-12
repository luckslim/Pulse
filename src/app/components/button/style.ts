import styled from "styled-components";

export const ContainerButtonProvider = styled.button`
    padding:0.8rem;
    background-color: ${props => props.theme['gray-900']};
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-weight: 800;
    &:hover{
        background-color: ${props => props.theme['gray-700']};
    }
`;