import Article from './models/Article.js';
import ListOfArticles from './models/ListOfArticles.js';

// Entry point of exercise
export default function exercise2_3_4() {
    const result = document.createElement("div")

    // Display elements
    const displayResult = document.createElement("div");
    const listOfArticles = new ListOfArticles();

    const btnOrderByAuthor = document.createElement("button");
    btnOrderByAuthor.textContent = "Order by author";
    btnOrderByAuthor.onclick = function() {
        listOfArticles.sortByAuthor();
    }

    const btnOrderByDate = document.createElement("button");
    btnOrderByDate.textContent = "Order by date";
    btnOrderByDate.onclick = function() {
        listOfArticles.sortByDate();
    }

    displayResult.appendChild(btnOrderByAuthor);
    displayResult.appendChild(btnOrderByDate);
    displayResult.appendChild(listOfArticles.display());

    // Form elements
    const form = document.createElement("form");
    form.classList.add("form");

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

    // Main event, submiting form
    form.addEventListener("submit", function(event) {
        event.preventDefault();

        // Checks unecessary because of 'required' in the input elements
        if(
            inputTitle.value.length == 0 ||
            inputAuthor.value.length == 0 ||
            inputDate.value.length == 0
        ) {
            alert("Some fields are empty.");
        }

        else {
            const newEntry = new Article(form.elements.title.value, form.elements.author.value, form.elements.date.valueAsDate);
            listOfArticles.addElement(newEntry);
        }
    });

    result.appendChild(form);
    result.appendChild(displayResult);

    return result;
}
