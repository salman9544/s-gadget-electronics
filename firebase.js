import { initializeApp } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-app.js";
import {
  getDatabase
} from "https://www.gstatic.com/firebasejs/12.4.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyBy7sOkm-69N6AcgsAkgsEKLY0i2N_KAEY",
  authDomain: "fir-gadget-electronics.firebaseapp.com",
  databaseURL: "https://fir-gadget-electronics-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "fir-gadget-electronics",
  storageBucket: "fir-gadget-electronics.firebasestorage.app",
  messagingSenderId: "404942913833",
  appId: "1:404942913833:web:f84951f34090d3fd8cb738"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { app, database };