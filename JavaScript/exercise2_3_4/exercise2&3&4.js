import ListOfArticles from './models/ListOfArticles.js';
import createExerciseView from './views/view.js';
import { handleListOfArticleSorting, handleFormSubmission } from './controllers/controller.js';

// Entry point of exercise
export default function exercise2_3_4() {
    const result = createExerciseView();
    const listOfArticles = new ListOfArticles();
    result.querySelector("#displayResult").appendChild(listOfArticles.display());

    // Event listeners
    result.querySelector("#btnOrderByAuthor").onclick = function() {
        handleListOfArticleSorting(listOfArticles, "author");
    }

    result.querySelector("#btnOrderByDate").onclick = function() {
        handleListOfArticleSorting(listOfArticles, "date");
    }

    result.querySelector("#form").addEventListener("submit", function (event) {
        handleFormSubmission(this, event, listOfArticles);
    });

    return result;
}
