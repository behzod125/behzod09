// const tbody = document.querySelector('tbody')
// fetch('https://jsonplaceholder.typicode.com/comments')
//   .then(res => res.json())
//   .then(req => req.forEach(element => {
//     tbody.innerHTML += `
//     <tr>
//   <ul class="list-group">
//   <li class="list-group-item">${element.id}An item</li>
//   <li class="list-group-item">${element.name}A second item</li>
//   <li class="list-group-item">${element.body}A third item</li>

// </ul>
//     </tr>
//   `

//   }))

const data = [
    {
      card_image:`<img src="./img/1.jpg">`,
      card_title:"Card dinner",
      card_text:"DINER Some quick example text to build on the card title and make up the bulk of the card's content."
    },
    {
        card_image:`<img src="./img/3.png">`,
        card_title:"Card anor",
        card_text:"ANOR eng foydali meva bulib uni ham sharbati ajoyib u turli hil kasalliklarda davo. "
      },
      {
        card_image:`<img src="./img/4.jpg">`,
        card_title:"Card olma",
        card_text:"OLMA Some quick example text to build on the card title and make up the bulk of the card's content."
      },
      {
      card_image:`<img src="./img/istockphoto-1400057530-1024x1024.jpg">`,
        card_title:"Card banan",
        card_text:"BANAN Some quick example text to build on the card title and make up the bulk of the card's content."
      },
      {

        card_image:`<img src="./img/qulupnay.jpg">`,
        card_title:"Card qulupnay",
        card_text:"QULUPNAY Some quick example text to build on the card title and make up the bulk of the card's content."
      },
      {
        
        card_image:`<img src="./img/11.jpg">`,
        card_title:"Card kacos",
        card_text:"CAKOS Some quick example text to build on the card title and make up the bulk of the card's content."
      }
]



const card = document.querySelector(".card")
data.forEach((element)=>{

    card.innerHTML += `
    <div class="green">
       <div> ${element.card_image} </div>
      <div class="card-body">
        <h5 class="card-title">${element.card_title}</h5>
        <p class="card-text">${element.card_text}</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
    
    `
})



class User {
   constructor(name, surname, age, adres){
    this.name = name,
    this.surname = surname
    this.age = age
    this.adres = adres
   }
   dificullt(){
    return this.age * 4
  }
}


class Us extends User {
  constructor(name,surname, years, username){
    super(name, surname)
    this.years = years,
    this.username = username
  }
  logger() {
    return(`mening ismim ${this.name} mening familyam ${this.surname} mening yoshi ${this.years} mening username ${this.username}`)
  }
}
const myuser = new Us("Behzod","Farmoqulov","15yosh","RT")
console.log(myuser.logger());




class name {
  constructor(ismi,familyasi,yoshi,manzili) {
    this.ismi = ismi
    this.familyasi = familyasi 
    this.yoshi = yoshi 
    this.manzili = manzili
    
  }
  sangs(){
  return this.age * 4  
  }
}

class familyasini extends name{
  constructor(ismi,familyasi,buyi,username, manzili){
    super(ismi , familyasi)
    this.ismi = ismi,
    this.familyasi = familyasi,
    this.buyibuyi= buyi,
    this.username = username
    }
  ogg(){
    return(`uning ismi ${this.ismi} uning familyasi ${this.familyasi} uning buyi ${this.buyibuyi} uning user name ${   this.username}`)
  }
}

const myname = new familyasini("diyor","jumanov","1,80","user")
console.log( myname.ogg());

