import { Text, Button, IButtonProps, useTheme, CircularProgress } from 'native-base';
import { useState } from 'react';

type Props = IButtonProps & {
    title: string;
    isActive?: boolean;
    type: 'open' | 'closed';
}

export function Filter ({ title, isActive=false, type, ...rest }: Props) {
  const { colors } = useTheme();

  const colorType = type === 'open' ? colors.secondary[700] : colors.green[300];
  
  return (
    <Button
     variant="outline"
     borderWidth={ isActive ? 1 : 0}
     borderColor={colorType}
     bgColor="gray.600"
     flex={1}
     size="sm"
     {...rest}
    >
        <Text color={isActive ? colorType : "gray.300"} fontSize="xs" textTransform="uppercase">
            {title}
        </Text>

    </Button>
  );
}


// variant="outline" - removo o prenchimento de cor fundo botão filtro..e mantenho uma linha de contorno borda.
// borderWidth={ isActive ? 1 : 0} - é condicional se estiver ativo borda= 1 senão = 0.
// flex={1}>- ocupo todo espaco disponivel da tela.