import firebase from "firebase";
var contactfirebaseConfig = {
  apiKey: "AIzaSyCEc9mAVurAaOasP1gs7yWSKftzEBA50qo",
  authDomain: "iucee-bms-website-contact-form.firebaseapp.com",
  projectId: "iucee-bms-website-contact-form",
  storageBucket: "iucee-bms-website-contact-form.appspot.com",
  messagingSenderId: "343139575123",
  appId: "1:343139575123:web:61f9a5cb6df71a9c4d2da6"
};
// Initialize Firebase
var contactfirebaseApp = firebase.initializeApp(contactfirebaseConfig);
var db = contactfirebaseApp.firestore();
export { db };