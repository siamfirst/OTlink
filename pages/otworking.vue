<template>
    <div >
        {{ user?.displayName }} {{ user?.email }} |
        {{ opennewuser.admin }}
    </div>

    <div>
    <button @click="handleSignOut">Sign out</button>
</div>
<div class="flex flex-col">
    <nuxt-link to="/chiangrai-refer">refer to Chiang Rai Hospital</nuxt-link>
    <nuxt-link to="/login">Log in</nuxt-link>
    
</div>


<div class="w-full flex justify-center gap-2" v-if=opennewuser.admin >
  
  <button @click="showuserdialog" class="bg-transparent hover:bg-blue-500 text-blue-500 font-semibold hover:text-white  border border-blue-500 hover:border-transparent rounded px-2 py-2" >Show new user dialog</button> 
  <button @click="hinduserdialog" class="bg-transparent hover:bg-blue-500 text-blue-500 font-semibold hover:text-white  border border-blue-500 hover:border-transparent rounded px-2 py-2" >Hind new user dialog</button>
</div>
    <ul>
    <li v-for="todo in todos" :key="todo.id" class="pl-2 pt-2">
        <div class="max-w-sm w-full lg:max-w-full lg:flex">
  <div class="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" >
    <img :src="todo.refer_paper" alt="">
</div>
  <div class="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
    <div class="mb-8">
      <p class="text-sm text-gray-600 flex items-center">
        <svg class="fill-current text-gray-500 w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
        </svg>
        Members only
      </p>
      <div class="text-gray-900 font-bold text-xl mb-2">{{ todo.Name }} {{ todo.Surname }}</div>
      <p class="text-gray-700 text-base">Dx. {{ todo.Dx }}</p>
      <p class="text-gray-700 text-base">From Dr. {{ todo.Dr_note }}</p>
    </div>
    <div class="flex items-center">
      <img class="w-10 h-10 rounded-full mr-4" :src="todo.refer_paper"  alt="Avatar of Jonathan Reinink">
      <div class="text-sm">
        <p class="text-gray-900 leading-none">{{todo.date_refer}}</p>
        <p class="text-gray-600 leading-none">{{ todo.Tel}}</p>
      </div>
    </div>
  </div>
</div>
    </li>
  </ul>
</template>
<script setup lang="ts">

import { getAuth} from "firebase/auth";
import { useCurrentUser} from 'vuefire'
import { useCollection } from 'vuefire'
import { collection } from 'firebase/firestore'
import { useFirestore } from 'vuefire'
import { openuser } from '~/stores/user'

import { signOut } from 'firebase/auth'

const auth = getAuth()
const db = useFirestore()
const todos = useCollection(collection(db, 'pt'))
const user = useCurrentUser()
const opennewuser = openuser()

onMounted(() => {
  opennewuser.compairadmin(user?.value?.email)
}),

function showuserdialog() {
  opennewuser.showdialoguser()
}
function hinduserdialog(){
  opennewuser.hinddialoguser()
}
function handleSignOut(){
    signOut(auth)
}
</script>