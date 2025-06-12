import { ContainerButtonProvider } from "./style"

type Props ={
    title: String;
    Type?: String;
}
export function Button({title}:Props){
    return(
        <>
        <ContainerButtonProvider>
            {title}
        </ContainerButtonProvider>
        </>
    )
}