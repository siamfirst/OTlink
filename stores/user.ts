import { defineStore } from "pinia";

export const openuser = defineStore({
    id:'openuser',
    state:()=>{
        return {
            adduser:false as boolean
        }
    },
    actions:{
        showdialoguser(){
            this.adduser = true
        },
        hinddialoguser(){
            this.adduser = false
        }

    }
})