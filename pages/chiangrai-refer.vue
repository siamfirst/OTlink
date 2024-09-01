<template>

  <div class="flex min-h-full flex-col justify-center px-6 py-6 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <img class="mx-auto h-10 w-auto" src="/fourty_OT.png" alt="Your Company">
      <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Refer back</h2>
    </div>
    <nuxt-link to="/otworking">
        back </nuxt-link>
    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form @submit.prevent="referback" class="space-y-6">
        <div>
          <label for="text" class="block text-sm font-medium leading-6 text-gray-900">
            Name</label>
          <div class="mt-2">
            <input type="text"  v-model="namept"
              class="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
          </div>
        </div>
        <div>
          <label for="text" class="block text-sm font-medium leading-6 text-gray-900">
            Surname</label>
          <div class="mt-2">
            <input type="text" v-model="surnamept"
              class="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
          </div>
        </div>

        <label for="text" class="block text-sm font-medium leading-6 text-gray-900">
          Hospital</label>
        <select v-model="hospitalpt"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          <option v-for="i in hospitalname" v-bind:key="i.nameH" :value="i.val" >{{ i.nameH }}</option>
        </select>
        <label for="text" class="block text-sm font-medium leading-6 text-gray-900">
          Dx</label>
        <div>
          <select v-model="dxpt"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option v-for="d in hospitaldx" v-bind:key="d.name" :value="d.val" >{{ d.name }}</option>
          </select>
        </div>
        <div>
          <label class="block text-sm font-medium leading-6 text-gray-900">
            Tel.ผู้ปกครอง</label>
          <div class="mt-2">
            <input type="text" v-model="ownertelpt"
              class="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
          </div>
        </div>
        <div>
          <label class="block text-sm font-medium leading-6 text-gray-900">
            Refer paper</label>
          <div>
            <input type="file" @change="onFileChange">
          </div>
          <img v-if="urlimg != null" :src=urlimg alt="" class="w-20 h-24">
        </div>
        <div>
          {{ urlimg }}
        </div>

         <div>
          <label class="block text-sm font-medium leading-6 text-gray-900">
            Dr.note</label>
          <div class="mt-2">
            <textarea v-model="Drnote"
            class="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
            </textarea> 
            </div>
        </div>
        <div>
          <button type="submit"
            class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Refer</button>
        </div>
      </form>
    </div>
  </div>
  <!-- helloww-->
</template>


<script setup lang="ts">
import { useCurrentUser} from 'vuefire'
import { useDocument } from 'vuefire'
import { collection,doc,setDoc ,Timestamp, arrayUnion } from 'firebase/firestore'
import { useFirestore } from 'vuefire'
const db = useFirestore()



const namept = ref()
const surnamept = ref()
const hospitalpt = ref()
const dxpt = ref()
const ownertelpt = ref()
const urlimg = ref()
const Drnote = ref()
const date = ref()
const user = useCurrentUser().value?.email



//name val
const hospitalname = [
  {
    nameH: 'Chiang Rai Hospital',
    val: 'craih'
  }, {
    nameH: 'Maesai Hospital',
    val: 'msaih'
  }, {
    nameH: 'Maejan Hospital',
    val: 'mchh'
  }, {
    nameH: 'MaeLoa Hospital',
    val: 'mlh'
  }, {
    nameH: 'Somdetphayannasangwon Hospital',
    val: 'sdpyswh'
  }, {
    nameH: 'Phayamengrai Hospital',
    val: 'pymrh'
  }, {
    nameH: 'Phan Hospital',
    val: 'ph'
  },
  {
    nameH: 'Mae suai Hospital',
    val: 'msuaih'
  },
  {
    nameH: 'Wiangpapao Hospital',
    val: 'wpph'
  }, {
    nameH: 'Maephaluang Hospital',
    val: 'mfuh'
  }, {
    nameH: 'Maephaluang medical center ',
    val: 'centermfh'
  }, {
    nameH: 'Padad Hospital',
    val: 'pdh'
  }, {
    nameH: 'Turng Hospital',
    val: 'th'
  }, {
    nameH: 'Yupparat Chiang Khong Hospital',
    val: 'sdpyckh'
  }, {
    nameH: 'Wiang Kaen Hospital',
    val: 'wkh'
  }, {
    nameH: 'Doi Luang Hospital',
    val: 'dlh'
  }, {
    nameH: 'Chiang Rung Hospital',
    val: 'crungh'
  }, {
    nameH: 'Chiang Saen Hospital',
    val: 'csh'
  }, {
    nameH: 'Khun Tan Hospital',
    val: 'kth'
  }
]
const hospitaldx = [
  {
    name: 'ADHD',
    val: 'ADHD'
  },
  {
    name: 'Autistic',
    val: 'Autistic'
  },
  {
    name: 'Delay Devilopment',
    val: 'DD'
  },
  {
    name: 'Other from refer doc',
    val: 'Other'
  }

]
const onFileChange = async (e: any) => {
  var files = e.target.files || e.dataTransfer.files;
  if (!files.length) return;
  const { snapshot, downloadUrl, metadata } = await uploadFile(files[0]);
  console.log(snapshot, downloadUrl, metadata)
  urlimg.value = downloadUrl
}
//saveFile("","")

async function referback() {
  const docData = {
    Dr_note: Drnote.value,
    Dx:dxpt.value,
    Hospital:hospitalpt.value,
    Name:namept.value,
    OT_note:null,
    OT_note_date:Timestamp.fromDate(new Date()),
    Surname:surnamept.value,
    Tel:ownertelpt.value,
    date_refer:Timestamp.fromDate(new Date()),
    refer_paper:urlimg.value,
    user_email_hos: arrayUnion(user)
  }
 
  const OTRef= doc(collection(db,'pt'))
  await setDoc(OTRef,docData)
  .then(() => {
     namept.value = ''
 surnamept.value = ''
 hospitalpt.value = ''
 dxpt.value = ''
 ownertelpt.value = ''
 urlimg.value = ''
 Drnote.value = ''
      
      console.log('Successfully updated the record')
      window.location.reload()
    })
    .catch(error => {
      console.error('There was an error editing the record: ' + error)
    })
  //date.value = new Date()
//console.log('hospital name'+hospitalpt.value+'Dx : '+dxpt.value)
//console.log('data is: '+namept.value+surnamept.value+hospitalpt.value+dxpt.value+
//ownertelpt.value+urlimg.value+Drnote.value+date.value+user)
}
</script>