import { Invoice } from './module/Invoice.js';
import { Payment } from './module/Payment.js';
import { ListTamplet } from './module/ListTamplet.js';
var docOne;
var docTwo;
docOne = new Invoice("Bushali", "music", 250);
docTwo = new Payment("Icnova", "weed", 100);
var docs = [];
var form = document.querySelector(".new-item-form");
var type = document.querySelector("#type");
var tofrom = document.querySelector("#tofrom");
var details = document.querySelector("#details");
var amount = document.querySelector("#amount");
var ul = document.querySelector('ul');
var list = new ListTamplet(ul);
form.addEventListener("submit", function (e) {
    e.preventDefault();
    var doc;
    if (type.value === "invoice") {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    console.log(doc);
    list.render(doc, type.value, 'end');
});
