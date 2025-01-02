

const App = {
    
    $: {
        recipeBox: document.querySelector("#recipe-box"),
        searchBar: document.querySelector("#search-bar"),
        searchBtn: document.querySelector("#search-btn"),
        
        
        
        
    },

    init() {
        this.loadPage()
        this.recipeCheck()

        this.nameGrab()
        this.applyListeners()
    },

    recipeCheck() {
        if(localStorage.getItem("createRecipe") === "true" ) {
            console.log(localStorage.getItem("createRecipe"))
            const newRecipe = new Recipe();
            newRecipe.create();
            this.savePage();
            localStorage.setItem("createRecipe", null);
            
        }
            
    },

    nameGrab() {
    },
    
    applyListeners() {
        const deleteBtns = document.querySelectorAll(".delete-btn");
        
        deleteBtns.forEach((btn) => 
            btn.removeEventListener("click", (e) => {
                if(confirm("are you sure you want to delete?")){
                    const parent = btn.parentElement;
                    parent.parentElement.remove();
                    App.$.savePage();
                }
                
                
            }));
            deleteBtns.forEach((btn) => 
                btn.addEventListener("click", (e) => {
                    if(confirm("are you sure you want to delete?")){
                        const parent = btn.parentElement;
                        parent.parentElement.remove();
                        App.$.savePage();
                    }
                }));
                
                
                
                const starBtns = document.querySelectorAll(".star-btn")
                starBtns.forEach((btn) =>
                    btn.removeEventListener("click", this.starToggle));
                
                starBtns.forEach((btn) =>
                    btn.addEventListener("click", this.starToggle));
                
                
                const cards = document.querySelectorAll(".card");
                cards.forEach((card) =>
                    card.removeEventListener("click", this.cardClicked));
                cards.forEach((card) =>
                    card.addEventListener("click", this.cardClicked));
                
                
                const cardNames = document.querySelectorAll(".card-name")
                

                this.$.searchBtn.addEventListener("click", (e) => {
                    const value = App.$.searchBar.value;
                    console.log(cardNames);
                    cardNames.forEach(name => {
                        console.log(name);
                        const isVisible = name.innerHTML.includes(value)
                        name.parentElement.parentElement.classList.toggle("hide", !isVisible)
                    })
                    
           })
           
    },

    cardClicked(){ 
        console.log("card clicked")
    },

 
    
    
    savePage(){

        localStorage.setItem("pageData", App.$.recipeBox.innerHTML)

    },
    
    loadPage() {
        this.$.recipeBox.innerHTML = localStorage.getItem("pageData");
    },

}



function Recipe() {
    
        this.counter = localStorage.getItem("counterData")

        this.name = localStorage.getItem(`nameData${this.counter}`);
        this.prepDataHour = localStorage.getItem(`prepDataHour${this.counter}`);
        this.prepDataMins = localStorage.getItem(`prepDataMins${this.counter}`);
        this.cookDataHour = localStorage.getItem(`cookDataHour${this.counter}`);
        this.cookDataMins = localStorage.getItem(`cookDataMins${this.counter}`);
        this.servingData = localStorage.getItem(`servingData${this.counter}`);
        this.imgData = localStorage.getItem(`imgData${this.counter}`);
        

        
        this.card = document.createElement("div");
        this.card.id = `card${this.counter}`
        this.cardBottom = document.createElement('div')
        this.starBtn = document.createElement("i")
        this.xBtn = document.createElement("i")
        
        
        this.imgChanger = function(src) {
            if(src){
                return src
            }
            else {
                return "/food-wallpaper.png"
            }
        }
        
        this.prepTime = function(hour, min) {
            
            if((hour) && (min)){
                return  `<li>Prep time: ${hour} hours & ${min} mins </li>`
            }
        else if(hour) {
            return  `<li>Prep time: ${hour} hours </li>`
        }
        else if(min) {
            return  `<li>Prep time: ${min} mins </li>`
        }
        else{
            return ""
        }
    }

    this.cookTime = function(hour, min) {
        if((hour) && (min)){
            return  `<li>Cook time: ${hour} hours & ${min} mins </li>`
        }
        else if(hour) {
            return  `<li>Cook time: ${hour} hours </li>`
        }
        else if(min) {
            return  `<li>Cook time: ${min} mins </li>`
        }
        else{
            return ""
        }
    
    }

    this.servings = function(servings) {
        if(servings) {
            return `<li> Servings: ${servings} </li>`
        }
        else {
            return ""
        }
    }
    
    this.create = function(){
       
        this.card.classList.add("card")

        this.cardBottom.classList.add("card-bottom")
        this.starBtn.classList.add("fa-regular", "fa-star", "star-btn")
        this.xBtn.classList.add("fa-solid", "fa-x", "delete-btn") 

        this.cardBottom.appendChild(this.starBtn);
        this.cardBottom.appendChild(this.xBtn);
        
        this.card.innerHTML = ` <div class="card-name-block">
            <h4 class="card-name">${this.name}</h4>
            </div>
            <img id="img-preview" src=${this.imgChanger(this.imgData)} alt="" />
            <ul class="card-list">
            
            ${this.prepTime(this.prepDataHour, this.prepDataMins)}
           
            
            ${this.cookTime(this.cookDataHour, this.cookDataMins)}
            
            ${this.servings(this.servingData)}
            </ul>
            `
            this.card.appendChild(this.cardBottom);
            App.$.recipeBox.appendChild(this.card)
    }


    }

    
    App.init()

