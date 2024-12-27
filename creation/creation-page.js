


const App = {

    $: {
       
        nameGroup: document.querySelector("#name-group"),

        descriptionInput: document.querySelector("#description-input"),
        descriptionBtn: document.querySelector("#description-btn"),

        ingrediantInput: document.querySelector("#ingrediant-input"),
        ingrediantBtn: document.querySelector("#ingrediant-btn"),
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
            this.reapplyName()

        },
    

    reapplyName() {
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

    }

}

App.init()