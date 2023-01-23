import { View, Fab, Icon, FlatList, Text, Spacer, VStack, HStack,Box } from "native-base";
import { useCallback, useEffect, useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { getCollection } from "../../config/ApiServices";

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
      <FlatList 
      data={dados}
      renderItem={({item}) => <Box borderBottomWidth="1"  borderColor="muted.800" pl={["0", "4"]} pr={["0", "5"]} py="2">
              <HStack space={[2, 3]} justifyContent="space-between">
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