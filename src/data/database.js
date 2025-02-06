import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, doc, getDoc, query, where, addDoc, setDoc, writeBatch, documentId} from "firebase/firestore";
import products from "./data"
const firebaseConfig = {
  apiKey: "AIzaSyBogK3ASFzpZlEuf7-67HJ9lUy-CqylKfc",
  authDomain: "react-ecommerce-daf74.firebaseapp.com",
  projectId: "react-ecommerce-daf74",
  storageBucket: "react-ecommerce-daf74.firebasestorage.app",
  messagingSenderId: "383981906865",
  appId: "1:383981906865:web:008f71f20a270c35d6ab90"
};

const app = initializeApp(firebaseConfig);


const db = getFirestore(app);

export default async function getAsyncData() { 
  const collectionRef = collection(db, "products"); 
  const productsSnapshot = await getDocs(collectionRef) 
  console.log(productsSnapshot)

  const documentsData = productsSnapshot.docs.map( doc => { 
    const fullData = doc.data()
    fullData.id = doc.id;
    return fullData;
    }
  )  

  return documentsData;
 }


export async function getAsyncItemById(itemID) { 
  const docRef = doc(db, "products",itemID )
  const docSnapshot = await getDoc(docRef);
  const docData = docSnapshot.data();
  return docData;
 }

export async function getAsyncItemsByCategory(catID) {
  const productsColRef = collection(db, "products");
  const q = query(productsColRef, where("category", "==", catID))

  const productsSnapshot = await getDocs(q)
  console.log(productsSnapshot)

  const documentsData = productsSnapshot.docs.map( doc => { 
    const fullData = doc.data()
    fullData.id = doc.id;
    return fullData;
    }
  )  
  return documentsData;
 }

 export async function exportProductsToDB(){
    for(let item of products){    
        delete item.id;
        const docID = await addDoc( collection(db, "products"), item)
       
    }
 }

export async function exportProductsWithBatch(){
  const batch = writeBatch(db)

  products.forEach( item => {
    const itemid = `${item.id}`;
    delete item.id
    const newDoc = doc(db, "products", `item-${itemid}`);
    batch.set(newDoc, item)
  });

  const commitRes = await batch.commit()
  console.log("Commit de products completo", commitRes)
}

export async function createBuyOrder(orderData){
  console.log(orderData);
  const newOrderDoc = 
    await addDoc(collection(db, "orders"), orderData); 

  return newOrderDoc.id
}


export async function createBuyOrderWithStockUpdate(order){
 
  const orderRef = collection(db, "order");
  const productsRef = collection(db, "products");

  const batch = writeBatch(db);

  const arrayIds = order.items.map((item) => item.id);
  
  const q = query(productsRef, where(documentId(), "in", arrayIds));
  const querySnaphot = await getDocs(q);
  const docsToUpdate = querySnaphot.docs;

  
  let itemsSinStock = [];

  docsToUpdate.forEach((doc) => {
   
    let { stock } = doc.data();


    let itemInCart = order.items.find((item) => item.id === doc.id);
    let countInCart = itemInCart.count;

    let newStock = stock - countInCart;

    if (newStock < 0) {
 
      itemsSinStock.push(doc.id);
    }
     else {
          batch.update(doc.ref, { stock: newStock });
      }
  });
  
  const itemsSinStockString = itemsSinStock.map( item => item.title ).join(", ");
  
  if (itemsSinStock.length >= 1){
    throw new Error(`Stock no disponible para los productos ${itemsSinStockString}`);    
  }
  else {
    await batch.commit();
  
    let newOrder = await addDoc(orderRef, order);
    return newOrder.id;
 }
}

export async function updateStock(){

}