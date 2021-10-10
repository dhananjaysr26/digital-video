import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBnKtuIedaTSe9jdhmVzrjvATlI_8cFXOs",
  authDomain: "auth-developement-2c67f.firebaseapp.com",
  projectId: "auth-developement-2c67f",
  storageBucket: "auth-developement-2c67f.appspot.com",
  messagingSenderId: "426193453312",
  appId: "1:426193453312:web:350a922d5e4a82633e73e5"
  };
  const app = initializeApp(firebaseConfig)
  
export const auth = getAuth(app)
export default app;