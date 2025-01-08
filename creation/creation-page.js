


const App = {
    
    $: {
        
        nameGroup: document.querySelector("#name-group"),
        cardName: document.querySelector("#card-name"),
        
        
        descriptionGroup: document.querySelector("#description-group"),
        
        
        ingrediantInput: document.querySelector("#ingrediant-input"),
        ingrediantBtn: document.querySelector("#ingrediant-btn"),
        ingrediantList: document.querySelector("#ingrediant-list"),

        instructionArea: document.querySelector("#instruction-area"),
        instructionBtn: document.querySelector("#instruction-btn"),
        instructionList: document.querySelector("#instruction-list"),

        prepInputHour: document.querySelector("#prep-input-hour"),
        prepInputMins: document.querySelector("#prep-input-mins"),
        prepBtn: document.querySelector("#prep-btn"),

        cookInputHour: document.querySelector("#cook-input-hour"),
        cookInputMins: document.querySelector("#cook-input-mins"),
        cookBtn: document.querySelector("#cook-btn"),

        servingInput: document.querySelector("#serving-input"),
        servingBtn: document.querySelector("#serving-btn"),

        imgInput: document.querySelector("#img-input"),
        imagePreview: document.querySelector("#img-preview"),

        prepList: document.querySelector("#prep-li"),
        cookList: document.querySelector("#cook-li"),
        servingsList: document.querySelector("#serving-li"),
        

        finishBtn: document.querySelector("#finish-btn"),

        counter: 0
    },

    init(){
            this.applyNameEL()
            this.applyDescriptionEL()
            this.applyIngrediantsEL()
            this.applyInstructionsEL()
            this.applyPrepTime()
            this.applyCookTime()
            this.applyServings()
            this.imgChange()
            this.createRecipe()
            this.counterUpdater()
        },

    counterUpdater(){
        if(localStorage.getItem("counterData")){
            this.$.counter = localStorage.getItem("counterData");
            console.log(localStorage.getItem("counterData"))
        }
    },

  
    
    info: {
        nameData: "",
        descriptionData: "",
        ingrediantData: "",
        instructionData: "",

        prepDataHour: "",
        prepDataMins: "",
        cookDataHour: "",
        cookDataMins: "",
        servingData: "",
        imgData: "",
        
    },
    
    infoSet(){
        this.$.counter++
        localStorage.setItem(`nameData${this.$.counter}`, this.info.nameData);
        localStorage.setItem(`descriptionData${this.$.counter}`, this.info.descriptionData);
        localStorage.setItem(`ingrediantData${this.$.counter}`, this.info.ingrediantData);
        localStorage.setItem(`instructionData${this.$.counter}`, this.info.instructionData);
        localStorage.setItem(`prepDataHour${this.$.counter}`, this.info.prepDataHour);
        localStorage.setItem(`prepDataMins${this.$.counter}`, this.info.prepDataMins);
        localStorage.setItem(`cookDataHour${this.$.counter}`, this.info.cookDataHour);
        localStorage.setItem(`cookDataMins${this.$.counter}`, this.info.cookDataMins);
        localStorage.setItem(`servingData${this.$.counter}`, this.info.servingData);
        localStorage.setItem(`imgData${this.$.counter}`, this.info.imgData);
        localStorage.setItem("counterData", this.$.counter);
    },

    ingredInfoSet(){
        const ingreds = document.querySelectorAll(".ingrediant")
        let string = ``
        ingreds.forEach(ingred => {
            string += `<li>${ingred.innerHTML}</li> `
        })
        
        return string
    },

    instructInfoSet(){
        const instructions = document.querySelectorAll(".instruction")
        let string = ``
        instructions.forEach(instruct => {
            string += `<li>${instruct.innerHTML}</li> `
        })
        
        return string
    },


    applyNameEL() {
        const nameInput = document.querySelector("#name-input")
        const nameBtn = document.querySelector("#name-btn")

        nameInput.addEventListener("keydown", (e) => {
            if (e.key === "Enter"){
                this.applyName()
            }
        })

        nameBtn.addEventListener("click", (e) => {
            this.applyName()
        })

    },

    applyName(){

        const nameInput = document.querySelector("#name-input")
        const nameBtn = document.querySelector("#name-btn")



        if (this.validator(nameInput.value)){
            this.$.cardName.innerHTML = nameInput.value;
            this.info.nameData = nameInput.value;
            nameBtn.remove();
            nameInput.remove();
            
            this.$.nameGroup.innerHTML = `<p class="input-text">${nameInput.value}</p> <button id="name-redo-btn" class="btn btn-primary redo-btn"><i class="fa-solid fa-rotate-right"></i></button>`

            const redoBtn = document.querySelector("#name-redo-btn");

            redoBtn.addEventListener("click", (e) => {
                App.$.nameGroup.innerHTML = `<input type="text" id="name-input" class="input add-input"
                        placeholder="Add a Name"/> <button id="name-btn" class="btn btn-primary add-btn">ENTER</button>`
                this.applyNameEL()

            })

        }
    },
    applyDescriptionEL() {
        const descriptionInput = document.querySelector("#description-input");
        const descriptionBtn = document.querySelector("#description-btn");

        descriptionInput.addEventListener("keydown", (e) => {
            if(e.key === "Enter"){
                this.applyDescription()

            }
        })

        descriptionBtn.addEventListener("click", (e) => {
            this.applyDescription()
        })

    },

    applyDescription(){

        const descriptionInput = document.querySelector("#description-input");
        const descriptionBtn = document.querySelector("#description-btn");

            if (this.validator(descriptionInput.value)){
                this.info.descriptionData = descriptionInput.value;
                descriptionBtn.remove();
                descriptionInput.remove();
                
                this.$.descriptionGroup.innerHTML = `<p class="input-text">${descriptionInput.value}</p> <button id="description-redo-btn" 
                class="btn btn-primary redo-btn"><i class="fa-solid fa-rotate-right"></i></button>`

                const redoBtn = document.querySelector("#description-redo-btn");

                redoBtn.addEventListener("click", (e) => {
                    this.$.descriptionGroup.innerHTML = `<input type="text" id="description-input" class="input add-input"
                            placeholder="Quick description"/> <button id="description-btn" class="btn btn-primary add-btn">ENTER</button>`
                    this.applyDescriptionEL();

                })

            }
        


    },

    applyIngrediantsEL() {

        this.$.ingrediantInput.addEventListener("keydown", (e) => {
            if (e.key === "Enter") {
                this.applyIngrediants()
            }
        })


        this.$.ingrediantBtn.addEventListener("click", (e) => {
            this.applyIngrediants()
        })
    },

    applyIngrediants(){


       
            if (this.validator(this.$.ingrediantInput.value)){
                const wrapper = document.createElement("div")
                wrapper.classList.add("instruction-group");
                wrapper.innerHTML = `<li class="ingrediant imput-text">${this.$.ingrediantInput.value}</li> <button class="btn  
                x-btn" ><i class="fa-solid fa-x"></i></i></button>`
                
                
                this.$.ingrediantList.appendChild(wrapper);
                this.$.ingrediantInput.value = "";
                let xBtns = document.querySelectorAll(".x-btn")
                xBtns.forEach((btn) => 
                    btn.removeEventListener("click", this.delete));
                xBtns.forEach((btn) => 
                    btn.addEventListener("click", this.delete));
                
          
                
            }
        


    },

    applyInstructionsEL() {

        this.$.instructionArea.addEventListener("keydown", (e) =>{
            if (e.key === "Enter") {
                this.applyInstructions();
                dk
                
            }
        })


        this.$.instructionBtn.addEventListener("click", (e) => {
            this.applyInstructions();
            })
    },


    applyInstructions(){

        
            if (this.validator(this.$.instructionArea.value)){
                const wrapper = document.createElement("div")
                wrapper.classList.add("instruction-group");
                wrapper.innerHTML = `<li class="instruction imput-text">${this.$.instructionArea.value}</li> <button class="btn  
                x-btn" ><i class="fa-solid fa-x"></i></button>`

                this.$.instructionList.appendChild(wrapper);
                this.$.instructionArea.value = "";
                    let xBtns = document.querySelectorAll(".x-btn")
                    xBtns.forEach((btn) => 
                        btn.removeEventListener("click", this.delete));
                    xBtns.forEach((btn) => 
                        btn.addEventListener("click", this.delete));
                }

             
           


    },

    validator(value){
        const regex = /\S/;
        return regex.test(value)
    },
    
    numValidator(num) {
        const regex = /^[1-9][0-9]*$/;
        return regex.test(num);
    },

    delete() {
        try {
            this.parentElement.remove()
        }
        catch(err){
            
        }
    },

    applyPrepTime() {
        const prepLi = App.$.prepList
        this.$.prepBtn.addEventListener("click", (e) => {
            if((App.numValidator(this.$.prepInputHour.value)) && (App.numValidator(this.$.prepInputMins.value))){
                this.info.prepDataHour = this.$.prepInputHour.value;
                this.info.prepDataMins = this.$.prepInputMins.value;

                prepLi.innerHTML = `Prep time: ${this.$.prepInputHour.value} hours & ${this.$.prepInputMins.value} mins`
                this.reveal(prepLi);
            }
            else if(this.numValidator(this.$.prepInputHour.value)){
                this.info.prepDataHour = this.$.prepInputHour.value;

                prepLi.innerHTML = `Prep time: ${this.$.prepInputHour.value} hours`
                this.reveal(prepLi);
            }
            else if(this.numValidator(this.$.prepInputMins.value)){
                this.info.prepDataMins = this.$.prepInputMins.value;

                prepLi.innerHTML = `Prep time: ${this.$.prepInputMins.value} mins`
                this.reveal(prepLi);
            }
            else{
                prepLi.classList.add("hide")
            }
            
          
        })
    },
    applyCookTime() {

        const cookLi = App.$.cookList
        this.$.cookBtn.addEventListener("click", (e) => {
            if((App.numValidator(this.$.cookInputHour.value)) && (App.numValidator(this.$.cookInputMins.value))){
                this.info.cookDataHour = this.$.cookInputHour.value;
                this.info.cookDataMins = this.$.cookInputMins.value;

                cookLi.innerHTML = `Cook time ${this.$.cookInputHour.value} hours & ${this.$.cookInputMins.value} mins`
                this.reveal(cookLi);
            }
            else if(this.numValidator(this.$.cookInputHour.value)){
                this.info.cookDataHour = this.$.cookInputHour.value;

                cookLi.innerHTML = `Cook time ${this.$.cookInputHour.value} hours`
                this.reveal(cookLi);
            }
            else if(this.numValidator(this.$.cookInputMins.value)){
                this.info.cookDataMins = this.$.cookInputMins.value;

                cookLi.innerHTML = `Cook time ${this.$.cookInputMins.value} mins`
                this.reveal(cookLi);
            }
            else{
                this.hide(cookLi)
            }
            
          
        })
    },
    
    applyServings() {
        const servingLi = App.$.servingsList
        this.$.servingBtn.addEventListener("click", (e) => {
            if(this.numValidator(this.$.servingInput.value)){
                this.info.servingData = this.$.servingInput.value;

                servingLi.innerHTML = `Servings: ${this.$.servingInput.value}`
                this.reveal(servingLi);
            }
            else{
                this.hide(servingLi)
            }
        })
    },

    reveal(target){
        if(target.classList.contains("hide")){
            target.classList.remove("hide")
        }

    },

    hide(target){
        if(!target.classList.contains("hide")){
            target.classList.add("hide")
        }
    },

    
    imgChange() {
        this.$.imgInput.onchange = () => {
            const fr = new FileReader();
            fr.readAsDataURL(this.$.imgInput.files[0]);
            
            fr.addEventListener('load', () => {
                const url = fr.result;
                this.$.imagePreview.src = url
                this.info.imgData = url;
            })
        }
    },

    createRecipe() {
        this.$.finishBtn.addEventListener("click", (e) => {
            this.info.ingrediantData = this.ingredInfoSet();
            this.info.instructionData = this.instructInfoSet();
            if(!this.info.nameData) {
                alert("Enter a name!");
                return;
            }
            if(!this.info.ingrediantData) {
                alert("Enter the ingrediants!");
                return;
            }
            if(!this.info.instructionData){
                alert("Enter the instructions!");
                return;
            }
            else {
                window.location.href = "/index.html";
                this.infoSet();
                localStorage.setItem("createRecipe", true);
            }
            
        })

    }

}

App.init()