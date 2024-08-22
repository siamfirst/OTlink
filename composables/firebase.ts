// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage, ref, uploadString, getDownloadURL, getMetadata } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA-nRkLSjc2YD2uVoQSw_qTm9WSXnqQyIQ",
  authDomain: "ot-link-58d76.firebaseapp.com",
  projectId: "ot-link-58d76",
  storageBucket: "ot-link-58d76.appspot.com",
  messagingSenderId: "687468469404",
  appId: "1:687468469404:web:98dcfb0896e426c296e159",
  measurementId: "G-XXSFSX4EFT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const storage = getStorage(app);

export const saveFile = async (fullPath: any, file: any) => {

  const storageRef = ref(storage, fullPath)
  const snapshot = await uploadString(storageRef, file, "data_url")

  if (snapshot) {
    const downloadUrl = await getDownloadURL(snapshot.ref)
    const metadata = await getMetadata(storageRef)
    return { snapshot, downloadUrl, metadata }
  }
  //test upload
  /**
    const storageRef = ref(storage,"test.txt")
  const message4 = 'data:text/plain;base64,5b6p5Y+344GX44G+44GX44Gf77yB44GK44KB44Gn44Go44GG77yB';
uploadString(storageRef, message4, 'data_url').then((snapshot) => {
  console.log('Uploaded a data_url string!');
});
   */

};

export const uploadFile = async (file) => {
  return await new Promise(function (resolve, reject) {
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = async (e) => {
      const result = reader.result;
      const { snapshot, downloadUrl, metadata } = await saveFile('images/' + file.name, result);
      if (snapshot) {
        resolve({ snapshot, downloadUrl, metadata })
      } else {
        reject()
      }
      //console.log(snapshot,downloadUrl,metadata)
    }
  })
}



