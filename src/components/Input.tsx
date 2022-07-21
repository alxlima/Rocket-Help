import { Input as NativeBaseInput, IInputProps } from 'native-base'; // Input as reomeado, para NativeBaseInput, distinguir nome da function input
                                                                     // IInputProps - import tipagens de imput de propriedade {Rest}
export function Input({...rest} :IInputProps ) { //[rest]-pego propriedades e incluo particularidades, caso precise ajustar o componente
  return (
    <NativeBaseInput 
     bg="gray.700"
     h={14}
     size="md"
     borderWidth={0}
     fontSize="md"
     fontFamily="body"
     color="white"
     placeholderTextColor="gray.300"
     _focus={{
        borderWidth: 1,
        borderColor: "green.500", 
        bg: "gray.700"
      } }
     {...rest}
    />
    
  );
}