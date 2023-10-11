import Article from '../models/Article.js';
import ListOfArticles from '../models/ListOfArticles.js';
import { readLocalStorage, addItemLocalStorage, removeItemByIdLocalStorage } from '../services/localStorage.js';

const listOfArticles = new ListOfArticles();

export function createListOfArticles() {
    if (readLocalStorage(listOfArticles) !== null) {
        listOfArticles = new ListOfArticles(readLocalStorage());
    }

    return listOfArticles;
}

export function handleListOfArticleSorting(listOfArticles, sortedBy) {
    if (sortedBy === "author") {
        listOfArticles.sortByAuthor();
    } else if (sortedBy === "date") {
        listOfArticles.sortByDate();
    }
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
}

function generateUniqueId() {
    const timestamp = new Date().getTime();
    const randomId = Math.random().toString(36).substring(2, 4);

    return `${timestamp}-${randomId}`
}
