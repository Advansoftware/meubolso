import { View, Fab, Icon, FlatList, Text, Spacer, VStack, HStack,Box, Center, Heading } from "native-base";
import { useCallback, useEffect, useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { getCollection } from "../../config/dbServices";
import { StatusBar } from "react-native";

const Home = () => {
  const [dados, setDados] = useState<any>([]);
  const getData = useCallback(async()=>{
    try{
      let data = await getCollection('contas');
      setDados(data);
    }catch(e){
      console.log(e)
    }
  },[setDados]);

    useEffect(()=>{
      getData();
    },[getData]);
    console.log(dados)
  return(
    <Box>
      <StatusBar barStyle={"light-content"} backgroundColor="transparent" translucent/>

            <Box bg="success.700" w="100%" py={20}>
            <Heading color="text.50" textAlign={"center"}>Teste</Heading>
            </Box>

      <FlatList 
      data={dados}
      renderItem={({item}) => <Box py="3">
              <HStack space={[2, 3]} justifyContent="center">
              <Box w="97%" h="20" bg="muted.50" rounded="md" shadow={3} >
                <VStack>
                  <Text _dark={{
              color: "warmGray.50"
            }} color="coolGray.800" bold>
                    {item.descricao}
                  </Text>
                  <Text color="coolGray.600" _dark={{
              color: "warmGray.200"
            }}>
                    {item.status}
                  </Text>
                </VStack>
                <Spacer />
                <Text fontSize="xs" _dark={{
            color: "warmGray.50"
          }} color="coolGray.800" alignSelf="flex-start">
                  {item.data_pagamento}
                </Text>
                </Box>
              </HStack>
            </Box>}
      />
      <Fab shadow={3} size="sm" placement="bottom-right" 
      icon={<Icon color="white" as={AntDesign} name="plus" size="6" />}
      bg="secondary.600"/>
    </Box>
  );
}
export default Home;