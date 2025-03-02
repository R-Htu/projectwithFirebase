import {initializeApp} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import {getDatabase, ref, push} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSettings = {
    databaseURL: "https://playground-2c355-default-rtdb.firebaseio.com/"
}


const app = initializeApp(appSettings)
const database = getDatabase(app)
const moviesInDB = ref(database, "movies")

const userInput = document.getElementById('input-field');
const addbutton = document.getElementById('add-button');

addbutton.addEventListener('click', () => {
    let inputValue = userInput.value;
    push(moviesInDB, inputValue);
    console.log(`${userInput.value} added to database`);
    
})