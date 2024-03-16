let showbtn = document.querySelector(".btn-show");
let menu = document.querySelector(".menu");
let close = document.querySelector(".clos");
let form = document.querySelector(".thname");
let main = document.querySelector(".prods");





let products = [
  {
    title: "Кабачки",
    price: 20000,
  },  
  {
    title: "Баклажаны",
    price: 32000,
  },  
  {
    title: "Бананы",
    price: 25000,
  },  
  {
    title: "Огурцы",
    price: 40000,
  },  
  {
    title: "Манго",
    price: 500000,
  },  
  {
    title: "Ананас",
    price: 40000,
  },  
  {
    title: "Пиёз",
    price: 6000,
  },  
  {
    title: "Картошка",
    price: 5000,
  },  
  {
    title: "Сабзи для плов",
    price: 4000,
  },  
];  

function prodap(products) {
  main.innerHTML = "";
  for (let item of products) {
    let block = document.createElement("div");
    let h1 = document.createElement("h1");
    let p = document.createElement("p");

    h1.textContent = item.title;
    p.textContent = item.price + " $";
    block.classList.add("block");
    p.classList.add("h3");
    block.append(h1, p);

    main.append(block);
  }  
}  

prodap(products);

showbtn.onclick = () => {
  menu.style.right = "0";
};  
close.onclick = () => {
  menu.style.right = "-100%";
};  

form.onsubmit = (e) => {
  e.preventDefault();
let inputt = form.querySelector('input[name="title"]');
  let inpprice = form.querySelector('input[name="price"]');

  let obj = {
    title: inputt.value,
    price: parseInt(inpprice.value),
  };  

  products.push(obj);
  prodap(products);
};  

