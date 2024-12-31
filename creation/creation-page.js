


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
        

        finishBtn: document.querySelector("#finish-btn"),
    },

    init(){
            this.applyName()
            this.applyDescription()
            this.applyIngrediants()
            this.applyInstructions()
            this.applyPrepTime()
            this.applyCookTime()
            this.applyServings()
            this.imgChange()
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


    applyName() {
        const nameInput = document.querySelector("#name-input")
        const nameBtn = document.querySelector("#name-btn")


        nameBtn.addEventListener("click", (e) => {
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
                    this.applyName()

                })

            }
        })

    },


    applyDescription() {
        const descriptionInput = document.querySelector("#description-input");
        const descriptionBtn = document.querySelector("#description-btn");
        descriptionBtn.addEventListener("click", (e) => {
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
                    this.applyDescription();

                })

            }
        })

    },


    applyIngrediants() {
        this.$.ingrediantBtn.addEventListener("click", (e) => {
            if (this.validator(this.$.ingrediantInput.value)){
                const wrapper = document.createElement("div")
                wrapper.classList.add("instruction-group");
                wrapper.innerHTML = `<p class="imput-text">${this.$.ingrediantInput.value}</p> <button class="btn  
                x-btn" ><i class="fa-solid fa-x"></i></i></button>`

                this.$.ingrediantList.appendChild(wrapper);
                this.$.ingrediantInput.value = "";
                    let xBtns = document.querySelectorAll(".x-btn")
                    xBtns.forEach((btn) => 
                        btn.removeEventListener("click", this.delete));
                    xBtns.forEach((btn) => 
                        btn.addEventListener("click", this.delete));
          

                
            }
        })
    },

    applyInstructions() {
        this.$.instructionBtn.addEventListener("click", (e) => {
            if (this.validator(this.$.instructionArea.value)){
                const wrapper = document.createElement("div")
                wrapper.classList.add("instruction-group");
                wrapper.innerHTML = `<li class="imput-text">${this.$.instructionArea.value}</li> <button class="btn  
                x-btn" ><i class="fa-solid fa-x"></i></i></button>`

                this.$.instructionList.appendChild(wrapper);
                this.$.instructionArea.value = "";
                    let xBtns = document.querySelectorAll(".x-btn")
                    xBtns.forEach((btn) => 
                        btn.removeEventListener("click", this.delete));
                    xBtns.forEach((btn) => 
                        btn.addEventListener("click", this.delete));
                }
            })
    },


    validator(value){
        const regex = /\S/;
        
        return regex.test(value);
        
    },

    delete() {
        try {
            this.parentElement.remove()
        }
        catch(err){
            
        }
    },

    applyPrepTime() {
        this.$.prepBtn.addEventListener("click", (e) => {
            if (this.validator(this.$.prepInputHour.value)){
                this.info.prepDataHour = this.$.prepInputHour.value;
            }
            if (this.validator(this.$.prepInputMins.value)){
                this.info.prepDataMins = this.$.prepInputMins.value;
            }

        })
    },

    applyCookTime() {
        this.$.cookBtn.addEventListener("click", (e) => {
            if(this.validator(this.$.cookInputHour.value)){
                this.info.cookDataHour = this.$.cookInputHour.value;
            }
            if(this.validator(this.$.cookInputMins.value)){
                this.info.cookDataMins = this.$.cookInputMins.value;
            }
        })
    },

    applyServings() {
        this.$.servingBtn.addEventListener("click", (e) => {
            if(this.validator(this.$.servingInput.value)){
                this.info.servingData = this.$.servingInput;
            }
        })
    },
    
    imgChange() {
        this.$.imgInput.onchange = () => {
            this.$.imagePreview.src = URL.createObjectURL(this.$.imgInput.files[0]);
        }
    },

    createRecipe() {
        this.$.finishBtn.addEventListener("click", (e) => {
            this.info.ingrediantData = this.$.ingrediantList.innerHTML;
            this.info.instructionData = this.$.instructionList.innerHTML;
            this.info.imgData = this.$.imagePreview.src;
            
        })

    }

}

App.init()