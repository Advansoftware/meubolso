import { Text } from "native-base";
import { View } from "native-base";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore"; 

import database from '../../config/firebaseConfig';
const Home = () => {
  const [dados, setDados] = useState<any>([]);
      useEffect(()=>{
        let list:any = [];
      getDocs(collection(database, "contas")).then(result=>{
        result.forEach((doc) => {
          list.push(doc.data())
          });
      }).catch((e)=>console.log(e));
      setDados(list);
  },[]);

  console.log(dados)
  return(
    <View>
      <Text>Teste HOme</Text>
    </View>
  );
}
export default Home;