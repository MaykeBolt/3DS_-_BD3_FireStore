import { collection, addDoc, getDocs } from 'https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js'

let alunoMayke = {
    nome: "Mayke",
    ra: "00028922"
}

let fbAddDocCbFn = (docRef) => {
    console.log("Document written with ID: ", docRef.id);
}

let fbAddDoc = async (fbDb, jsObj, strCollectionName, fbAddDocCbFn) => {
    try {
        const docRef = await addDoc(collection(fbDb, strCollectionName), jsObj);
        fbAddDocCbFn(docRef.id);
    } catch (error) {
        console.error("Error adding document: ", error);
    }
}

let fbListDocsCbFn = async (doc) => {
    console.log("Document ID: ", doc.id);
    console.log("Document data: ", doc.data());
}

let fbListDocs = async (fbDb, collectionName, fbListDocsCbFn) => {
    const querySnapshot = await getDocs(collection(fbDb, collectionName));
    querySnapshot.forEach((doc) => {
        console.log(doc);
    })
}

fbAddDoc(window.fbDb, alunoMayke, "alunos", fbAddDocCbFn);
fbListDocs(window.fbDb, "alunos");
