import { HasFormatter } from "../Interfaces/HasFornatter";

export class Payment implements HasFormatter{

      private recipient:string
      private details:string
      private amount:number

    constructor(recipient:string, details:string, amount:number){

        this.recipient = recipient
        this.details = details
        this.amount = amount

    }

    format(): string {
        return `recipient: ${this.recipient}, ${this.details}, ${this.amount}`
    }

} 