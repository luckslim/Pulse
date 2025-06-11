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
    grid: 1;
    div{
        display: grid;
        grid: 1;
        padding: 1rem;
        gap: 1rem;
        textarea{
            width: 100%;
            border: 1px solid ${props => props.theme['gray-500']};
            border-radius: 8px;
            height: 60px;
            padding: 1rem;
            &::placeholder{
                text-align: center;
            }
        }
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
`;
export const ContainerSideBar = styled.div`
    display: grid;
    grid: 1;
    gap: 1rem;
    padding: 1rem;
    div{
        display: grid;
        gap: 0.3rem;
        section{
            display: flex;
            align-items: center;
            gap:1rem;
            img{
                width: 50px;
                border-radius: 8px;
            }
            span{
                p{
                    color: ${props => props.theme['gray-100']};
                    font-weight: 800;
                }
                small{
                    color:${props => props.theme['gray-400']};
                }
            }
        }
        button{
            padding:0.5rem;
            background-color: ${props => props.theme['gray-900']};
            border: none;
            border-radius: 8px;
            cursor: pointer;
            font-weight: 800;
            &:hover{
                background-color: ${props => props.theme['gray-700']};
            }

        }
    }
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
