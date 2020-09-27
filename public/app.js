import { Invoice } from './classes/Invoice.js';
import { Payment } from './classes/Payment.js';
import { ListTemplate } from './classes/ListTemplate.js';
const form = document.querySelector('.new-item-form');
// inputs
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
// list template instance 
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    list.render(doc, type.value, 'end');
});
const addUID = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
const docThree = {
    uid: 1,
    resourceName: 'person',
    data: { name: 'kobe' }
};
const docFour = {
    uid: 2,
    resourceName: 'shoppingList',
    data: ['bread', 'milk', 'toilet roll']
};
const docOne = {
    uid: 1,
    resourceType: 3,
    data: { title: 'name of the wind' }
};
const docTwo = {
    uid: 10,
    resourceType: 4,
    data: { name: 'yoshi' }
};
