
//*-------Масиви та методи масивів----------*/

const clients = ["Mango", "Poly", "Ajax"];
console.table(clients);
console.table(clients[0]);
console.table(clients[1]);
console.table(clients[2]);

/*--------перезапис елементів масиву-----------------*/
clients[0] = "Kiwi";
clients[1] = "Pango";
console.table(clients);