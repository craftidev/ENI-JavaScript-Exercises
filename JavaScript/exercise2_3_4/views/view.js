import {
    handleListOfArticleSorting,
    handleFormSubmission,
    createListOfArticles
} from '../controllers/controller.js';

const listOfArticlesController = createListOfArticles();

export default function createExerciseView() {
    const output = document.createElement("div");
    const form = createForm();
    const displayResult = createDisplayResult();
    const listOfArticlesHTMLElement = document.createElement("ol");
    listOfArticlesHTMLElement.id = ("listOfArticlesHTMLElement");

    displayResult.appendChild(listOfArticlesHTMLElement);
    output.appendChild(form);
    output.appendChild(displayResult);

    renderListOfArticlesHTMLElement();

    return output;
}             

function renderListOfArticlesHTMLElement() {
    const listOfArticlesHTMLElement = document.querySelector("#listOfArticlesHTMLElement");

    if (listOfArticlesHTMLElement !== null) {
        listOfArticlesHTMLElement.innerHTML = "";

        for (const article of listOfArticlesController.getListOfArticles()) {
            const articleToHTML = article.toHTML();

            articleToHTML.onclick = () => {
                const userConfirm = confirm(
                    articleToHTML.firstElementChild.textContent +
                    " ------ Do you want to delete this entry?"
                    );
                    
                    if (userConfirm === true) {
                        articleToHTML.remove();
                        const index = articles.indexOf(article);
                        articles.splice(index, 1);
                    }
                };

            listOfArticlesHTMLElement.appendChild(articleToHTML);
        }
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
        handleFormSubmission(this, event, listOfArticlesController);
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
