import { Center, Spinner } from 'native-base'; //[center] - mantenho elementos no centro [ Spner]- objeto skin icone mobimento loading

export function Loading(){
    return(
        <Center flex={1} bg="gray.700">
            <Spinner color="secundary.700" />
        </Center>
         
    );
}
