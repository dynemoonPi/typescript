
import { HasFormatter } from "../Interfaces/HasFornatter.js"
export class Invoice implements HasFormatter {
        
        details:string
        amount:number 
        client:string

    constructor(client:string, details:string, amount:number){

        this.client = client
        this.details = details
        this.amount= amount 

    }

   format(){
    return ( `Invoice: ${this.client},${this.details},${this.amount}`)
   }
}
