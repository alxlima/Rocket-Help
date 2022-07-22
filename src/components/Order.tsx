import { Box, HStack, Text, useTheme, VStack} from 'native-base';

// typagem ordens propriedades
export type OrderProps = {
    id: string;
    patrimony: string;
    when: string;
    status: 'open' | 'closed';
}

//typagemm de propriedades
type Props = {
  data: OrderProps;
}

export function Order({ data, ...rest}: Props) {
    const { colors } = useTheme();

    const statusColor = data.status === 'open' ? colors.secondary[700] : colors.green[300];  

        return (
            <HStack
                bg="gray.600"
                mb={4}
                alignItems="center"
                justifyContent="space-beteween"
                rounded="sm"
                overflow="hidden"
            >
              {/* <Box h="full" w={2} bg={statusColor}/>

              <VStack flex={1} w={5} ml={5}>
                 <Text color="white" fontSize="md">
                    Patrimônio {data.patrimony}
                 </Text>
              </VStack>  */}
            </HStack>
        );
}
