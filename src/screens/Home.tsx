import { useState} from 'react';
import { HStack, IconButton, VStack, useTheme, Text, Heading, FlatList} from 'native-base';
import { SignOut } from 'phosphor-react-native';

import  Logo from '../assets/logo_secondary.svg';
import { Filter } from '../components/Filter';
import { Order, OrderProps } from '../components/Order'; 

export function Home() {
  const [statusSelected, setStatusSelected] = useState<'open'|'closed'>('open'); 
  const [ orders, setOrders ] = useState<OrderProps[]>([{
    id: '123',
    patrimony: '123456',
    when: '18/07/2022 ás 10:00',
    status: 'open'  
   }]);

  const { colors } = useTheme();

  return (
    <VStack flex={1} pb={6} bg="gray.700"> 
      <HStack
        w="full"
        justifyContent="space-between"
        alignItems="center"
        bg="gray.600"
        pt={12}
        pb={5}
        px={6}
        >
        
        <Logo />

        <IconButton 
          icon={ <SignOut size={26} color={colors.gray[300]}/> }
        />


      </HStack>

        <VStack flex={1} px={6}>
            <HStack w="full" mt={8} mb={4} justifyContent="space-between" alignItems="center">
                <Heading color="gray.100">💬 | Meus Chamados </Heading>
                  <Text color="gray.200">
                    3
                  </Text>
            </HStack>  

            {/* <HStack space={3} mb={8}>
                <Filter 
                 type="open"
                 title="em andamento"
                 onPress={() => setStatusSelected('open')} 
                 isActive={statusSelected ==='open'}
                />

                <Filter 
                 type="closed"
                 title="finalizados"
                 onPress={() => setStatusSelected('closed')} 
                 isActive={statusSelected ==='closed'}
                />
            </HStack> */}

            {/* <FlatList
              data={orders}
              keyExtractor={item => item.id}
              renderItem={( {item} ) => <Order data={item} />}
            /> */}

        </VStack>
        
    </VStack>
  );
}



// flex={1}>- ocupo todo espaco disponivel da tela.
// <HStack> - import componente 'native-base', e coloco cada elemento um do lado do outro. (Cabeçalho tela home).
// <VStack> - import componente 'native-base', e empilho elementos na vertical 
// IconButton - é padrão do native-base - basicamente é um icone que é um botão
// onPress={() => setStatusSelected('open')} - padrão de função quando recebe parametro.
// isActive={statusSelected ==='open'} - evento que retorno qual estilo do botão filtro esta ativo
// [FlatList] - import componente 'native-base', para rederizar listas
// keyExtractor - propriedade de identificador unico, exempo. id unico
