
const App = {

    $: {
            id: localStorage.getItem("idData"),

            name: '',
            prepDataHour: '',
            prepDataMins: '',
            cookDataHour: '',
            cookDataMins: '',
            servingData: '',
            imgData: '',

            descriptionData: '',
            ingrediantData: '',
            instructionData: '',

            optionalContainer: document.querySelector(".optional-container"),
            imgSlot: document.querySelector("#view-img"),
            optionalList: document.querySelector(".optional-list"),
            descriptionText: document.querySelector(".description-text"),
            descriptionInput: document.querySelector("#description-input"),

            ingrediantContainer: document.querySelector("#ingrediant-container"),
            instructionContainer: document.querySelector("#instruction-container")
        },
        
    applyInfo(){
        console.log(this.$.id)
        this.$.name = localStorage.getItem(`nameData${this.$.id}`)
       
        this.$.ingrediantData = localStorage.getItem(`ingrediantData${this.$.id}`)
        this.$.instructionData = localStorage.getItem(`instructionData${this.$.id}`)

        this.$.prepDataHour = localStorage.getItem(`prepDataHour${this.$.id}`)
        this.$.prepDataMins = localStorage.getItem(`prepDataMins${this.$.id}`)
        
        this.$.cookDataHour = localStorage.getItem(`cookDataHour${this.$.id}`)
        this.$.cookDataMins = localStorage.getItem(`cookDataMins${this.$.id}`)
        this.$.servingData = localStorage.getItem(`servingData${this.$.id}`)
        this.$.imgData = localStorage.getItem(`imgData${this.$.id}`)
       
        this.$.descriptionData = localStorage.getItem(`descriptionData${this.$.id}`)
        console.log(localStorage.getItem(`descriptionData${this.$.id}`))
    },

    init() {
        this.applyInfo()
        this.optionalCheck()
        this.applyImg()
        this.optListCheck()
        this.applyOptList()
        this.applyDescript()
        this.optListChange()
        this.applyImgBuff()
        this.applyIngrediants()
        this.applyInstructions()
    },

    optionalCheck(){
        const options = [this.$.imgData, this.$.prepDataHour, this.prepDataMins, this.cookDataHour,
             this.$.cookDataMins, this.$.servingData, this.$.descriptionData];
        
        let counter = 0

        options.forEach(option => {
            
            if (option){
                counter++
            }
        });

        if(counter > 0){
            this.$.optionalContainer.classList.remove("hide");
         
        }
       
        
    },



    applyImg() {
        if (this.$.imgData){
            this.$.imgSlot.src = this.$.imgData;
        }
        else {
            this.$.imgSlot.remove()
        }

    },

    applyImgBuff(){
        const img = document.querySelector("#view-img")
        if(img){
            if(!(this.$.optionalList && this.$.descriptionText)){
                img.classList.toggle("img-buff");
            }
        }
    },

    applyDescript(){
        if(this.$.descriptionData){
            this.$.descriptionInput.innerHTML = this.$.descriptionData;
        }
        else{
            this.$.descriptionText.remove();
        }
    },

    optListCheck(){
        const options = [this.$.prepDataHour, this.$.prepDataMins, this.$.cookDataHour, 
            this.cookDataMins, this.$.servingData
        ]

        counter = 0

        options.forEach(option => {
            if (option){
                counter++
            }
        });

        if(counter > 0){
            this.$.optionalList.classList.remove("hide");
        }
        else{
            this.$.optionalList.remove()
        }
    },

    applyOptList(){
        const prepTime = this.findTime(this.$.prepDataHour, this.$.prepDataMins, 'Prep');
        const cookTime = this.findTime(this.$.cookDataHour, this.$.cookDataMins, 'Cook');
        const servings = this.findServings(this.$.servingData);
   
      console.log(this.$.cookDataHour)
      console.log(this.$.cookDataMins)



        if(prepTime){
            this.$.optionalList.appendChild(prepTime);
        }
        if(cookTime){
            
            this.$.optionalList.appendChild(cookTime);

        }
        if(servings){
            console.log(servings);
            this.$.optionalList.appendChild(servings);
        }

    },

    optListChange() {
        const optList = document.querySelector(".optional-list")
        if(!this.$.imgData && optList){
            optList.classList.add("flex-row");
            
        }
    },

    findTime(hour, min, name){
        const li = document.createElement("li")
            if((hour) && (min)){
                li.innerHTML = `${name} time: ${hour} hours & ${min} mins`
                return li
            }
            else if(hour) {
                li.innerHTML =  `${name} time: ${hour} hours`
                return li
            }
            else if(min) {
                li.innerHTML =  `${name} time: ${min} mins`
                return li
            }
            else{
                return ""
            }
        
        },

    findServings(servings){
        const li = document.createElement("li")
            if(servings) {
                li.innerHTML = `Servings: ${servings}`
                return li
            }
            else {
                return ""
            }
        
    },

    applyIngrediants(){
        this.$.ingrediantContainer.innerHTML = this.$.ingrediantData;
    },

    applyInstructions(){
        this.$.instructionContainer.innerHTML = this.$.instructionData;
    },
   

};

App.init()



