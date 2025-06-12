import styled from "styled-components";

export const Textarea = styled.textarea`
width: 100%;
border: 1px solid ${props => props.theme['gray-500']};
border-radius: 8px;
height: 60px;
padding: 1rem;
&::placeholder{
text-align: center;
}
`;