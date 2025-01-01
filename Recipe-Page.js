

const App = {

    $: {
        recipeBox: document.querySelector("#recipe-box"),
        
        
    },

    init() {
        this.loadPage()
        console.log(localStorage.getItem("createRecipe"));
        this.recipeCheck()
       

    },

    recipeCheck() {
        if(localStorage.getItem("createRecipe")) {
            const newRecipe = new Recipe();
            newRecipe.create();
            newRecipe.applyListeners();
            this.savePage();
            localStorage.setItem("createRecipe", null);
            
        }
            
    },

    
    
    savePage() {
        localStorage.setItem("PageData", this.$.recipeBox.innerHTML);
    },
    
    loadPage() {
        
        this.$.recipeBox.innerHTML = localStorage.getItem("PageData");
    }
}



function Recipe() {
    
    
        this.name = localStorage.getItem("nameData");
        this.prepDataHour = localStorage.getItem("prepDataHour");
        this.prepDataMins = localStorage.getItem("prepDataMins");
        this.cookDataHour = localStorage.getItem("cookDataHour");
        this.cookDataMins = localStorage.getItem("cookDataMins");
        this.servingData = localStorage.getItem("servingData");
        this.imgData = localStorage.getItem("imgData");
        
        this.ingrediants = localStorage.getItem("ingrediantData");
        this.instructions = localStorage.getItem("instructionData");
        this.description = localStorage.getItem("descriptionData");
        
        this.card = document.createElement("div");
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
        this.applyListeners = function() {
            this.xBtn.addEventListener("click", (e) => {
                this.card.remove();
                App.savePage()
                this.Recipe = null;
            })
            this.card.addEventListener("click", (e) => {
                alert("Card Clicked!");
            })
            this.starBtn.addEventListener("click", (e) => {
                this.card.classList.toggle("stared")
            })

            
        }
    }

    App.init()
    