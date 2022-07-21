import { Button as ButtonNativeBase, IButtonProps, Heading } from 'native-base';

// typagem para tipo do botão
type Props = IButtonProps & {  //[props] propriedade estilizada title - [IButtonProps] propriedade padrão buttons ...res 
    title: string;
}


export function Button({ title, ...rest }: Props) { // [ title ] é um propriedade do componente button - {...rest} demais propriedades
  return (
    <ButtonNativeBase 
      bg="green.700"
      h={14}
      fontSize="sm"
      rounded="sm"
      _pressed={ {bg: "green.500"} }
      {...rest}
    >
      <Heading color="white" fontSize="sm">
        {title}
      </Heading>
    </ButtonNativeBase>
  );
}