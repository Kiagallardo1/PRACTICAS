import {app} from "./firebase2.js"
import {getAuth,createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";

const auth = getAuth(app);

const btnCrearCuenta=document.querySelector("#btnCrearCuenta");


btnCrearCuenta.addEventListener('click',async(e)=>{    
    e.preventDefault();
    const email=document.querySelector("#crearEmail");
    const password=document.querySelector("#crearPassword");
    console.log(email.value ,password.value);
    var myModalEI=document.getElementById('crearModal');
    var modal = bootstrap.Modal.getInstance(myModalEI)
    try{
        const respuesta=await createUserWithEmailAndPassword(auth,email.value,password.value)
        console.log(respuesta.user);
        Swal.fire({
            title: 'La cuenta se creo con exito',
            width: 600,
            padding: '3em',
            color: '#716add',
            background: '#fff url(/images/trees.png)',
            backdrop: `
            rgba(0,0,123,0.4)
            url("/images/nyan-cat.gif")
            left top
            no-repeat
            `
        })
        email.value='';
        password.value=''
        modal.hide();
    } catch(error){
        console.log(error.code);
        const code=error.code;
        if(code=='auth/invalid-email'){
            Swal.fire({
                title: 'Correo invalido',
                showClass: {
                popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
                }
            })
        } if(code=='auth/weak-password'){
            Swal.fire('Contraseña invalida')
        }if(code=='auth/email-already-in-use'){
            Swal.fire('Correo ya en uso')
        }

    }



 });