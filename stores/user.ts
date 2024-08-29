import { defineStore } from "pinia";

export const openuser = defineStore({
    id:'openuser',
    state:()=>{
        return {
            adduser:false as boolean,
            admin:false as boolean
        }
    },
    actions:{

        compairadmin(email:any){
            if (email=="ot.rehab.crh@gmail.com") {
                this.admin= true
            }else{
                this.admin=false
            }
        },
        showdialoguser(){
            this.adduser = true
        },
        hinddialoguser(){
            this.adduser = false
        }

    }
})