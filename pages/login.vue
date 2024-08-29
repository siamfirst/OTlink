<template>
<div>
  {{ user?.displayName }} {{ user?.email }}
</div>
  <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <img class="mx-auto h-10 w-auto" src="/fourty_OT.png" alt="Your Company">
      <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Login to your account</h2>
    </div>

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form @submit.prevent="sendlogin" class="space-y-6">
        <div>
          <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
          <div class="mt-2">
            <input type="text" v-model="uname"
              class="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
          </div>
        </div>

        <div>
          <div class="flex items-center justify-between">
            <label for="password" class=" block text-sm font-medium leading-6 text-gray-900">Password</label>
            <div class="text-sm">
              <a class="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
            </div>
          </div>
          <div class="mt-2">
            <input type="text" v-model="upass"
              class="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
          </div>
        </div>
        <div>
          <button type="submit"
            class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Login</button>
        </div>
      </form>
   
      <p class="mt-10 text-center text-sm text-gray-500">
        This website for OT member (Chiang Rai). <br> Contact : OT department of Chiang Rai Hospital.
      </p>
      <div v-if=showsiguptext.adduser>
        <button  @click="Signup">
          Sign up click here
        </button>
       
      </div>

    </div>
  </div>

</template>

<script setup lang="ts">

import { getAuth, createUserWithEmailAndPassword ,signInWithEmailAndPassword } from "firebase/auth";
import { useCurrentUser} from 'vuefire'
import { openuser } from '~/stores/user'
const user = useCurrentUser()
const auth = getAuth();
const router = useRouter()
const uname = ref()
const upass = ref()
const showsiguptext = openuser()

/**
 async function signInWithGoogle(){
  const userCred = await signInWithPopup(auth ,new GoogleAuthProvider())
.then(()=> router.replace('/'))
}
 */
 function sendlogin() {
  signInWithEmailAndPassword(auth,uname.value,upass.value)
  .then((userCredential) => {
    // Signed up 
   // const user = userCredential.user;
    // ...
    if (user?.value?.email !=null) {
      navigateTo('/otworking')
    } else {
      window.alert("email or pass was wrong")
      navigateTo('/login')
    }
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
  window.alert('User name is :'+uname.value + '  and Password is : '+ upass.value)
}

function Signup(){
  createUserWithEmailAndPassword(auth,uname.value,upass.value)
  .then((userCredential) => {
    // Signed up 
   // const user = userCredential.user;
    // ...
    if (user?.value?.email !=null) {
      navigateTo('/otworking')
    } else {
      navigateTo('/login')
    }
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
}



</script>

