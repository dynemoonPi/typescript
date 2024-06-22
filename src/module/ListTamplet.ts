import { HasFormatter } from "../Interfaces/HasFornatter.js";


export class ListTamplet{
    
           constructor(private Container: HTMLUListElement){}
        
    render(item:HasFormatter,heading:string, pos:'start'|'end'){
        const li = document.createElement('li')
        const h4 = document.createElement('h4')
        h4.innerText = heading;
        li.append(h4)

        const p = document.createElement('p')
        p.innerText =item.format()
        li.append(p);

        if(pos ==='start'){
            this.Container.append(li)
        }else{
            this.Container.append(li)
        }
    }


}