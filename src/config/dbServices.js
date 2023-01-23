import {database} from './firebaseConfig';
import { collection, getDocs } from "firebase/firestore"

//Criação dos metodos do bd Firebase.
export const getCollection = async (collectionName) => {
  try{
    let list = [];
    const data = await getDocs(collection(database, "contas"));
    data.forEach((doc) => {
      list.push(doc.data())
      });
      return list;
  }
  catch(e){
    console.log(e)
  }
}