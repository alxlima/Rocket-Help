import { NativeBaseProvider, StatusBar } from 'native-base'; // importo biblioteca icons confi. Expo-Cli - https://docs.nativebase.io/install-expo
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';// importa font Roboto - instalado na aplicação

import { THEME } from './src/styles/theme'; // importo a estilização cor/fonts de thema nativeBase persolalizado ao projeto. 
import { SignIn } from './src/screens/SignIn';
import { Loading } from './src/components/Loading';

export default function App() {
  const [fontsLoaded] = useFonts({Roboto_400Regular, Roboto_700Bold});

  return (
     <NativeBaseProvider theme={THEME}>
      < StatusBar
        barStyle="light-content" 
        backgroundColor="transparent"
        translucent
       />

       { fontsLoaded ? <SignIn /> : <Loading />}
       
     </NativeBaseProvider>
  );
}
