///////////all drinks
const loadDrinks = (name,sm) =>{
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${name}`)
    .then(res => res.json())
    .then(data => display(data,sm))
}
 const display = (data,sm) =>{
   const container = document.getElementById('container');
   const d = document.getElementById('show-btn');
   d.classList.add('d-none');
   container.innerText='';
   const arrayLength = data.drinks.length;
   //console.log(a)
   console.log(arrayLength)
   if(sm!=true && arrayLength >6){
    data.drinks = data.drinks.slice(0,6);
    const d = document.getElementById('show-btn');
    d.classList.remove('d-none');
   }
   
    data.drinks.forEach(i => {
       //console.log(i) 
      // const container = document.getElementById('container')
       const drinDiv = document.createElement('div')
       drinDiv.classList.add('col')
       drinDiv.innerHTML =`
       <div class="card p-5 mb-5">
                <div class="d-flex justify-content-center align-items-center">
                    <div>
                        <img src="${i.strDrinkThumb }" class="w-75" alt="...">
                        <p><span class="fw-bolder">Source: </span>Amazon</p>
                    </div>
                <div class="card-body">
                  <p><span class="fw-bolder">Drink Name: </span>${i.strDrink
                  }</p>
                  <p><span class="fw-bolder">Key Ingredient: </span>${i.strIngredient1}</p>
                  <p><span class="fw-bolder">Tag: </span>${i.strTags
                  }</p>
                  
                </div>
                </div> 
                <button onclick="showDetails(${i.idDrink})" type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal">
 See Details
</button>
              </div>
       `
        container.appendChild(drinDiv);

    });
 }
 

 const search = () =>{
    const s = document.getElementById('search-field').value;
    loadDrinks(s);
 }
 const showAll = () =>{
    const s = document.getElementById('search-field').value;
    const sm = true;
    loadDrinks(s,sm);
    
 }
 const allDrinks = () =>{
    loadDrinks('c');
 }
 
 loadDrinks('a');
 const showDetails = id =>{
    console.log(id)
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
    .then(res => res.json())
    .then(data => display2(data.drinks))
   
 }
 const display2 = id =>{
    console.log(id[0].strDrinkThumb)
    document.getElementById('exampleModalLabel').innerText = id[0].strDrink;
    const img = document.getElementById('modal-body')
    img.innerHTML =`
    <img src="${id[0].strDrinkThumb }" class="w-75" alt="...">
     `
 }
 