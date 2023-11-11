// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import Login from "./views/Login";
import "./App.css";
import Screen from "./views/Screen";

// const firebaseConfig = {
//   apiKey: "AIzaSyDlSSZ3F8B_tvcJfaHX-YWQX1EdElbq7Cw",
//   authDomain: "yaya-dub.firebaseapp.com",
//   projectId: "yaya-dub",
//   storageBucket: "yaya-dub.appspot.com",
//   messagingSenderId: "770085437259",
//   appId: "1:770085437259:web:3d36373048a3222170f2ce",
//   measurementId: "G-LGM2V8K17V"
// };
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

function App() {
  return (
    <div className="App">
      <Screen/>
    </div>
  );
}

export default App;
