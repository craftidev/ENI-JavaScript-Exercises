import ListOfArticles from './models/ListOfArticles.js';
import createExerciseView from './views/view.js';
import handleListOfArticleSorting from './controllers/controller.js';
import handleFormSubmission from './controllers/controller.js';

// Entry point of exercise
export default function exercise2_3_4() {
    const result = createExerciseView();
    const listOfArticles = new ListOfArticles();
    result.querySelectorById("displayResult").appendChild(listOfArticles.display());

    // Event listeners
    result.querySelectorById("btnOrderByAuthor").onclick = function() {
        handleListOfArticleSorting(listOfArticles, "author");
    }

    result.querySelectorById("btnOrderByDate").onclick = function() {
        handleListOfArticleSorting(listOfArticles, "date");
    }

    result.querySelector(".form").onclick = function(event) {
        handleFormSubmission(this, event, listOfArticles);
    }

    return result;
}
