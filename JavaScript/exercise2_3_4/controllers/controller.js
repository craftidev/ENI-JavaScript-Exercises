import Article from '../models/Article.js';
import ListOfArticles from '../models/ListOfArticles.js';
import renderListOfArticlesHTMLElement from '../views/view.js';
import { readLocalStorage, addItemLocalStorage, removeItemByIdLocalStorage } from '../services/localStorage.js';



export function createListOfArticles() {
    if (readLocalStorage() !== null) {
        return new ListOfArticles(readLocalStorage());
    } else {
        return new ListOfArticles();
    }
}

export function handleListOfArticleSorting(listOfArticles, sortedBy) {
    if (sortedBy === "author") {
        listOfArticles.sortByAuthor();
    } else if (sortedBy === "date") {
        listOfArticles.sortByDate();
    }

    renderListOfArticlesHTMLElement();
}

export function handleFormSubmission(form, event, listOfArticles) {
    event.preventDefault();
    const newEntry = new Article(
        generateUniqueId(),
        form.elements.title.value,
        form.elements.author.value,
        form.elements.date.valueAsDate
    );

    listOfArticles.addElement(newEntry);
    addItemLocalStorage(newEntry);

    renderListOfArticlesHTMLElement();
}

function generateUniqueId() {
    const timestamp = new Date().getTime();
    const randomId = Math.random().toString(36).substring(2, 4);

    return `${timestamp}-${randomId}`
}
