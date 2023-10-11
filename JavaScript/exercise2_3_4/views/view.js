import ListOfArticles from '../models/ListOfArticles.js';
import {
    handleFormSubmission,
    handleListOfArticleSorting,
    handleRemoveArticle,
    updateListOfArticles
} from '../controllers/controller.js';

let listOfArticlesController;

export function createExerciseView() {
    listOfArticlesController = updateListOfArticles();

    const output = document.createElement("div");
    const form = createForm();
    const displayResult = createDisplayResult();
    const listOfArticlesHTMLElement = document.createElement("ol");
    listOfArticlesHTMLElement.id = ("listOfArticlesHTMLElement");

    displayResult.appendChild(listOfArticlesHTMLElement);
    output.appendChild(form);
    output.appendChild(displayResult);

    // Wait for the DOM to load before rendering the list of articles.
    setTimeout(() => {
        renderListOfArticlesHTMLElement();
    }, 0);

    return output;
}         

export function renderListOfArticlesHTMLElement(listOfArticles) {
    const listOfArticlesHTMLElement = document.querySelector("#listOfArticlesHTMLElement");
    listOfArticlesHTMLElement.innerHTML = "";

    if (!listOfArticles) {
        listOfArticlesController = updateListOfArticles();
        listOfArticles = listOfArticlesController;
    }

    for (const article of listOfArticles.getListOfArticles()) {
        const articleToHTML = article.toHTML();
        articleToHTML.id = article.getId();

        articleToHTML.onclick = () => {
            handleRemoveArticle(article);
        };

        listOfArticlesHTMLElement.appendChild(articleToHTML);
    }
}

function createDisplayResult() {
    const displayResult = document.createElement("div");

    const btnOrderByAuthor = document.createElement("button");
    btnOrderByAuthor.textContent = "Order by author";
    btnOrderByAuthor.onclick = function() {
        handleListOfArticleSorting(listOfArticlesController, "author");
    }

    const btnOrderByDate = document.createElement("button");
    btnOrderByDate.textContent = "Order by date";
    btnOrderByDate.onclick = function() {
        handleListOfArticleSorting(listOfArticlesController, "date");
    }

    displayResult.appendChild(btnOrderByAuthor);
    displayResult.appendChild(btnOrderByDate);

    return displayResult;
}

function createForm() {
    const form = document.createElement("form");
    form.classList.add("form");
    form.addEventListener("submit", function (event) {
        handleFormSubmission(this, event);
    });

    const labelTitle = Object.assign(document.createElement("label"),
        { type: "text", for: "title" });
    const inputTitle = Object.assign(document.createElement("input"),
        { type: "text", id: "title", name: "title", required: true });
    const labelAuthor = Object.assign(document.createElement("label"),
        { for: "author" });
    const inputAuthor = Object.assign(document.createElement("input"),
        { type: "text", id: "author", name: "author", required: true });
    const labelDate = Object.assign(document.createElement("label"),
        { for: "date" });
    const inputDate = Object.assign(document.createElement("input"),
        { type: "date", id: "date", name: "date", valueAsDate: new Date(), required: true });
    const inputSubmit = Object.assign(document.createElement("input"),
        { type: "submit" });

        labelTitle.textContent = "Title: ";
        labelAuthor.textContent = "Author: ";
        labelDate.textContent = "Date: ";

        form.appendChild(labelTitle);
        form.appendChild(inputTitle);
        form.appendChild(labelAuthor);
        form.appendChild(inputAuthor);
        form.appendChild(labelDate);
        form.appendChild(inputDate);
        form.appendChild(inputSubmit);

        return form;
}
