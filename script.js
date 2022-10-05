// chiedere a user: 
//  nome
//  cognome    
//  fav_col
//  età
//  genera pwd: nomecognomefav_coletà


let nome = prompt("Qual è il tuo nome ?");
let cognome = prompt("Qual è il tuo cognome ?");
let colore = prompt("Qual è il tuo colore preferito ?");
let eta = prompt("Qual è la tua età ?");
let password = nome + cognome + colore + eta ;


let result = password.toLowerCase()

document.getElementById("result").innerHTML = result;