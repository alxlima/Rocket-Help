//import { View, Text } from 'react-native';// este formato  uso elementos nativos e componente padrão 
import { useState } from 'react';
import { VStack, Heading, Icon , useTheme } from 'native-base'; // importo biblioteca icons confi. Expo-Cli - https://docs.nativebase.io/install-expo 
import { Envelope, Key, SelectionSlash } from 'phosphor-react-native';
                                                                                             
import Logo from '../assets/logo_primary.svg'; 

// import de componente
import { Input } from '../components/Input';
import { Button } from '../components/Button';


export function SignIn(){
    const [ name, setName ] = useState('');
    const [ password, setPassword ] = useState('');

    const { colors } = useTheme();

    // testar valores de passagem status change informações dos imputs.
    function handleSignIn(){
        console.log(name,password);
    }
    
    return (
        <VStack flex={1} alignItems="center" bg="gray.600" px={8} pt={24}>
            <Logo />
            <Heading color="gray.100" fontSize="xl" mt={20} mb={6}>
                Acesse sua Conta 🔐
            </Heading>

            <Input 
               mb={4}
               placeholder="E-mail"
               InputLeftElement={<Icon as={ <Envelope color={colors.gray[300]}/>} ml={4}/>}
               onChangeText={setName}
             />
            <Input 
              mb={8}
              placeholder="Senha"
              InputLeftElement={<Icon as={ <Key color={colors.gray[300]}/>} ml={4}/>}
              secureTextEntry
              onChangeText={setPassword}
            />

            <Button 
             //mt={2}
             title="Entrar" 
             w="full"
            // onPress={handleSignIn} //Testar informações dos imputs.
             />
                 
        </VStack>
    )
}

  // [VStack] -empilho elementos na vertical 