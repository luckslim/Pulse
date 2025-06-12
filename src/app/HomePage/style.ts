import styled from "styled-components";
export const ContainerProvider = styled.div`
    display: flex;
    align-items: start;
    justify-content: space-around;
    margin-top: 2rem;
    padding: 1rem;
`;
export const ContainerFeed = styled.div`
    width: 40%;
    display: grid;
    justify-content: center;
    align-items: center;
    /* div{
        display: grid;
        grid: 1;
        padding: 1rem;
        gap: 1rem;
        span{
            display: flex;
            justify-content: space-between;
            align-items: center;
            section{
                display: flex;
                gap: 1rem;
            }
            button{
                background-color: ${props => props.theme['gray-900']};
                padding: 1rem;
                border: none;
                border-radius: 8px;
                font-weight: 800;
                cursor: pointer;
                &:hover{
                    opacity: calc(80%);
                }
            }
        }
    }
    section{
        display:grid;
        gap: 1rem;
        border:1px solid ${props=>props.theme['gray-600']};
        border-radius: 8px;
        padding: 1rem;
        div{
            display: flex;
            align-items: center;
            justify-content: space-between;
            img{
                width: 50px;
                border-radius: 8px;
            }
            span{
                display: grid;
                p{
                    color: ${props=>props.theme['gray-100']};
                    font-weight: 800;
                }
            }
        }
        span{
            display: flex;
            gap: 1rem;
        }
    } */
`;
export const ContainerSideBar = styled.div`
    display: grid;
    grid: 1;
    gap: 1rem;
    padding: 1rem;
`;
export const ContainerExplorer = styled.div`
    display: grid;
    grid: 1;
    gap: 1rem;
    justify-content: center;
    span{
        display: flex;
        align-items: center;
        gap: 1rem;
    }
    button{
        background-color: ${props => props.theme['gray-100']};
        border: none;
        padding: 0.2rem;
        color: ${props => props.theme['gray-900']};
        font-weight: 800;
        border-radius: 8px;
        }
`;
