
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
        },
        
    applyInfo(){
        this.$.name = localStorage.getItem(`nameData${this.$.id}`)
        this.$.prepDataHour = localStorage.getItem(`prepDataHourData${this.$.id}`)
        this.$.prepDataMins = localStorage.getItem(`prepDataMinsData${this.$.id}`)
        this.$.cookDataHour = localStorage.getItem(`cookDataHourData${this.$.id}`)
        this.$.cookDataMins = localStorage.getItem(`cookDataMinsData${this.$.id}`)
        this.$.servingData = localStorage.getItem(`servingDataData${this.$.id}`)
        this.$.imgData = localStorage.getItem(`imgDataData${this.$.id}`)

        this.$.description = localStorage.getItem(`descriptionData${this.$.id}`)
        this.$.ingrediant = localStorage.getItem(`ingrediantData${this.$.id}`)
        this.$.instruction = localStorage.getItem(`instructionData${this.$.id}`)
    },

        log(){
            console.log(this.$.id);
            console.log(this.$.name);
           
       
        },

};

App.applyInfo()
App.log()


