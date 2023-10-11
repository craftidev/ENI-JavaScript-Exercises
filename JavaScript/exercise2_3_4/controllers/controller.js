import Article from '../models/Article.js';
import ListOfArticles from '../models/ListOfArticles.js';
import {
    addItemLocalStorage,
    readLocalStorage,
    removeItemLocalStorage
} from '../services/localStorage.js';
import { renderListOfArticlesHTMLElement } from '../views/view.js';

export function updateListOfArticles() {
    const localStorageData = readLocalStorage();
    const listOfArticles = new ListOfArticles();

    if (localStorageData !== null) {
        for (const article of localStorageData) {
            listOfArticles.addElement(
                new Article(
                    article.id,
                    article.title,
                    article.author,
                    new Date(article.date)
                )
            );
        }
    }

    return listOfArticles;
}

export function handleListOfArticleSorting(listOfArticles, sortedBy) {
    if (sortedBy === "author") {
        listOfArticles.sortByAuthor();
    } else if (sortedBy === "date") {
        listOfArticles.sortByDate();
    }

    renderListOfArticlesHTMLElement(listOfArticles);
}

export function handleFormSubmission(form, event) {
    event.preventDefault();
    const newEntry = new Article(
        generateUniqueId(),
        form.elements.title.value,
        form.elements.author.value,
        form.elements.date.valueAsDate
    );

    addItemLocalStorage(newEntry);

    renderListOfArticlesHTMLElement();
}

export function handleRemoveArticle(article) {
    const articleToHTML = document.getElementById(article.getId());
    const userConfirm = confirm(
        articleToHTML.firstElementChild.textContent +
        " ------ Do you want to delete this entry?"
        );
        
    if (userConfirm === true) {
        removeItemLocalStorage(article);
        renderListOfArticlesHTMLElement();
    }
}

function generateUniqueId() {
    const timestamp = new Date().getTime();
    const randomId = Math.random().toString(36).substring(2, 4);

    return `${timestamp}-${randomId}`
}
