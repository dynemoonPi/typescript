import {Invoice} from './module/Invoice.js'
import { HasFormatter } from './Interfaces/HasFornatter.js'
import { Payment } from './module/Payment.js'
import { ListTamplet } from './module/ListTamplet.js'

let docOne:HasFormatter 
let docTwo:HasFormatter

docOne = new Invoice("Bushali", "music", 250)
docTwo = new Payment("Icnova", "weed", 100)

let docs : HasFormatter [] = []



const form = document.querySelector(".new-item-form") as HTMLFormElement

const type = document.querySelector("#type") as HTMLSelectElement 
const tofrom = document.querySelector("#tofrom") as HTMLInputElement
const details = document.querySelector("#details") as HTMLInputElement
const amount = document.querySelector("#amount") as HTMLInputElement

let ul = document.querySelector('ul')!
let list = new ListTamplet(ul)

form.addEventListener("submit",(e:Event) =>{

   e.preventDefault()
   let doc :HasFormatter
   if(type.value === "invoice"){
      doc = new Invoice(tofrom.value, details.value,amount.valueAsNumber)
   }
   else{
      doc = new Payment(tofrom.value,details.value,amount.valueAsNumber)
   }
   console.log(doc);
   
   list.render(doc, type.value, 'end')

})
