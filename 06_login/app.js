import {app} from `./firebase.js`
import { getAuth, createUserWithEmailSAndPassword} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";
const auth = getAuth(app);



const btnCrearCuenta=document.querySelector("#ntnCrearCuenta");
btnCrearCuenta.addEventListener(`click`,(e)=>{
e.preventDefault();
    const email=document.querySelector("#crearEmail").value;
    const password=document.querySelector("#crearPassword").value;
    console.log(email,password);

     const respuesta=await createUserWithEmailSAndPassword(auth, email, password)
     console.log(respuesta);
});
