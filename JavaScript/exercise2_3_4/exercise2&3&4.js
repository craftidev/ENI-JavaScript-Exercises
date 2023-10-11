import Article from './models/Article.js';
import ListOfArticles from './models/ListOfArticles.js';
import createExerciseView from './views/view.js';
import handleListOfArticleSorting from './controllers/controller.js';

// Entry point of exercise
export default function exercise2_3_4() {
    const result = createExerciseView();
    const listOfArticles = new ListOfArticles();

    // Event listeners
    result.querySelectorById("btnOrderByAuthor").onclick = function() {
        handleListOfArticleSorting(listOfArticles, "author");
    }

    result.querySelectorById("btnOrderByDate").onclick = function() {
        handleListOfArticleSorting(listOfArticles, "date");
    }

    // displayResult.appendChild(listOfArticles.display());


    // // Main event, submiting form
    // form.addEventListener("submit", function(event) {
    //     event.preventDefault();

    //     // Checks unecessary because of 'required' in the input elements
    //     if(
    //         inputTitle.value.length == 0 ||
    //         inputAuthor.value.length == 0 ||
    //         inputDate.value.length == 0
    //     ) {
    //         alert("Some fields are empty.");
    //     }

    //     else {
    //         const newEntry = new Article(form.elements.title.value, form.elements.author.value, form.elements.date.valueAsDate);
    //         listOfArticles.addElement(newEntry);
    //     }
    // });

    return result;
}
