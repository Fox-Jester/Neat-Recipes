


const App = {
    
    $: {
        
        nameGroup: document.querySelector("#name-group"),
        
        
        descriptionGroup: document.querySelector("#description-group"),
        
        
        ingrediantInput: document.querySelector("#ingrediant-input"),
        ingrediantBtn: document.querySelector("#ingrediant-btn"),
        ingrediantList: document.querySelector("#ingrediant-list"),

        instructionArea: document.querySelector("#instruction-area"),
        instructionBtn: document.querySelector("#instruction-btn"),
        instructionList: document.querySelector("#instruction-list"),

        prepInput: document.querySelector("#prep-input"),
        prepBtn: document.querySelector("#prep-btn"),

        cookInput: document.querySelector("#cook-input"),
        cookBtn: document.querySelector("#cook-btn"),

        servingInput: document.querySelector("#serving-input"),
        servingBtn: document.querySelector("#serving-btn"),

        imgImput: document.querySelector("#img-imput"),
    },

    init(){
            this.applyName()
            this.applyDescription()
            this.applyIngrediants()
            this.applyInstructions()

        },
    

    applyName() {
        const nameInput = document.querySelector("#name-input")
        const nameBtn = document.querySelector("#name-btn")
        nameBtn.addEventListener("click", (e) => {
            if (nameInput.value !== null){
                nameBtn.remove();
                nameInput.remove();
                
                this.$.nameGroup.innerHTML = `<p class="input-text">${nameInput.value}</p> <button id="name-redo-btn" class="btn btn-primary redo-btn"><i class="fa-solid fa-rotate-right"></i></button>`

                const redoBtn = document.querySelector("#name-redo-btn");

                redoBtn.addEventListener("click", (e) => {
                    App.$.nameGroup.innerHTML = `<input type="text" id="name-input" class="input add-input"
                            placeholder="Add a Name"/> <button id="name-btn" class="btn btn-primary add-btn">ENTER</button>`
                    this.reapplyName()

                })

            }
        })

    },


    applyDescription() {
        const descriptionInput = document.querySelector("#description-input");
        const descriptionBtn = document.querySelector("#description-btn");
        descriptionBtn.addEventListener("click", (e) => {
            if (descriptionInput.value !== null){
                descriptionBtn.remove();
                descriptionInput.remove();
                
                this.$.descriptionGroup.innerHTML = `<p class="input-text">${descriptionInput.value}</p> <button id="description-redo-btn" 
                class="btn btn-primary redo-btn"><i class="fa-solid fa-rotate-right"></i></button>`

                const redoBtn = document.querySelector("#description-redo-btn");

                redoBtn.addEventListener("click", (e) => {
                    this.$.descriptionGroup.innerHTML = `<input type="text" id="description-input" class="input add-input"
                            placeholder="Quick description"/> <button id="description-btn" class="btn btn-primary add-btn">ENTER</button>`
                    this.reapplyDescription();

                })

            }
        })

    },


    applyIngrediants() {
        this.$.ingrediantBtn.addEventListener("click", (e) => {
            if (this.$.ingrediantInput !== null){
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
            if (this.$.instructionArea.value !== null){
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

    delete() {
        try {
            this.parentElement.remove()
        }
        catch(err){
            
        }
    }
   



}

App.init()