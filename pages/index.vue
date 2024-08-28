<template>
<NuxtPage/>
<div>
    <button @click="handleSignOut">Sign out</button>
</div>
<div class="flex flex-col">
    <nuxt-link to="/chiangrai-refer">refer to Chiang Rai Hospital</nuxt-link>
    <nuxt-link to="/login">Log in</nuxt-link>
    <nuxt-link to="/otworking">work space</nuxt-link>
</div>

<div>
    {{ user?.displayName }},{{ user?.email }}
</div>
</template>

<script setup lang="ts">
import { signOut } from 'firebase/auth'

const auth = useFirebaseAuth()
const user = useCurrentUser()
function handleSignOut(){
    signOut(auth)
}
</script>

<style>

</style>