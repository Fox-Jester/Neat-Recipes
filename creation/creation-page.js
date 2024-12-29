


const App = {

    $: {
       
        nameGroup: document.querySelector("#name-group"),

        
        descriptionGroup: document.querySelector("#description-group"),

     
        ingrediantList: document.querySelector("#ingrediant-list"),

        instructionArea: document.querySelector("#instruction-area"),
        instructionBtn: document.querySelector("#instruction-btn"),

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

        },
    

    applyName() {
        const nameInput = document.querySelector("#name-input")
        const nameBtn = document.querySelector("#name-btn")
        nameBtn.addEventListener("click", (e) => {
            if (nameInput.value !== null){
                nameBtn.remove();
                nameInput.remove();
                
                App.$.nameGroup.innerHTML = `<p class="input-text">${nameInput.value}</p> <button id="name-redo-btn" class="btn btn-primary redo-btn"><i class="fa-solid fa-rotate-right"></i></button>`

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
                
                App.$.descriptionGroup.innerHTML = `<p class="input-text">${descriptionInput.value}</p> <button id="description-redo-btn" 
                class="btn btn-primary redo-btn"><i class="fa-solid fa-rotate-right"></i></button>`

                const redoBtn = document.querySelector("#description-redo-btn");

                redoBtn.addEventListener("click", (e) => {
                    App.$.descriptionGroup.innerHTML = `<input type="text" id="description-input" class="input add-input"
                            placeholder="Quick description"/> <button id="description-btn" class="btn btn-primary add-btn">ENTER</button>`
                    this.reapplyDescription();

                })

            }
        })

    },


    applyIngrediants() {
        const ingrediantInput = document.querySelector("#ingrediant-input");
        const ingredantBtn =  document.querySelector("#ingrediant-btn");
        ingredantBtn.addEventListener("click", (e) => {
            if (ingrediantInput !== null){
                const wrapper = document.createElement("div")
                wrapper.classList.add("ingrediant-group");
                wrapper.innerHTML = `<p class="imput-text">${ingrediantInput.value}</p> <button class="btn  
                x-btn" ><i class="fa-solid fa-x"></i></i></button>`

                this.$.ingrediantList.appendChild(wrapper);
                ingrediantInput.value = "";
                    let xBtn = document.querySelectorAll(".x-btn")
                    xBtn.forEach((btn) => 
                        btn.removeEventListener("click", this.delete));
                    xBtn.forEach((btn) => 
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