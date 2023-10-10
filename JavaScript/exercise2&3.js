// DTO
function Article(title, author, date) {
    this.title = title;
    this.author = author;
    this.date = date;
}

Article.prototype.toHTML = function () {
    const li = document.createElement("li");
    li.classList.add("li-article");
    const title = document.createElement("h1");
    title.classList.add("title-in-decimal-list");
    const authorAndDate = document.createElement("p");

    title.textContent = this.title;
    authorAndDate.textContent = this.author + ", " + this.date;

    li.appendChild(title);
    li.appendChild(authorAndDate);

    li.onclick = function() {
        const userConfirm = confirm(
            this.firstElementChild.textContent +
            " ------ Do you want to delete this entry?"
        );
        if (userConfirm === true) {
            this.remove();
        }
    }

    return li;
}

function ListOfArticles(list = []) {
    this.ol = document.createElement("ol");
    this.listOfArticles = list;
}

ListOfArticles.prototype.addElement = function(article) {
    this.listOfArticles.push(article);

    this.display();
}

ListOfArticles.prototype.display = function() {
    this.ol.innerHTML = "";

    for(let article of this.listOfArticles) {
        console.log(article);
        this.ol.appendChild(article);
    }

    return this.ol;
}

ListOfArticles.prototype.sortByAuthor = function(order) {
    if(order === "ascending") {
        this.sort((a, b) => a.author.localeCompare(b.author));
    } else {
        this.sort((a, b) => b.author.localeCompare(a.author));
    }

    this.display();
}

ListOfArticles.prototype.sortByDate = function(order) {
    if(order === "ascending") {
        this.sort((a, b) => a.date - b.date);
    } else {
        this.sort((a, b) => b.date - a.date);
    }

    this.display();
}

// Entry point of exercise
function exercise2_3() {
    const result = document.createElement("div")

    // Display elements
    const displayResult = document.createElement("div");
    const btnOrderByAuthor = document.createElement("button");
    const btnOrderByDate = document.createElement("button");
    const listOfArticles = new ListOfArticles();
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
            const newEntry = new Article(form.elements.title.value, form.elements.author.value, form.elements.date.value);
            listOfArticles.addElement(newEntry.toHTML());
        }
    });

    result.appendChild(form);
    result.appendChild(displayResult);

    return result;
}
