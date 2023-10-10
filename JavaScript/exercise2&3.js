function Article(title, author, date) {
    this.title = title;
    this.author = author;
    this.date = date;
}

Article.prototype.toHTML = function () {
    let li = Object.assign(document.createElement("li"), { style: "list-style-type: decimal;" });
    let title = document.createElement("h1");
    title.classList.add("title-in-decimal-list");
    let authorAndDate = document.createElement("p");

    title.textContent = this.title;
    authorAndDate.textContent = this.author + ", " + this.date;

    li.appendChild(title);
    li.appendChild(authorAndDate);

    li.onclick = function() {
        let userConfirm = confirm(
            this.firstElementChild.textContent +
            " ------ Do you want to delete this entry?"
        );
        if (userConfirm === true) {
            displayResult.removeChild(this);
        }
    }
}

function exercise2_3() {
    let result = document.createElement("div")
    let form = document.createElement("form");
    form.classList.add("form");

    // Display element
    let displayResult = document.createElement("ul");

    // Form elements
    let labelTitle = Object.assign(document.createElement("label"),
        { type: "text", for: "title" });
    let inputTitle = Object.assign(document.createElement("input"),
        { type: "text", id: "title", name: "title", required: true });
    let labelAuthor = Object.assign(document.createElement("label"),
        { for: "author" });
    let inputAuthor = Object.assign(document.createElement("input"),
        { type: "text", id: "author", name: "author", required: true });
    let labelDate = Object.assign(document.createElement("label"),
        { for: "date" });
    let inputDate = Object.assign(document.createElement("input"),
        { type: "date", id: "date", name: "date", required: true });
    let inputSubmit = Object.assign(document.createElement("input"),
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

        // Checks not necessary because of 'required' in the input elements
        if(
            inputTitle.value.length == 0 ||
            inputAuthor.value.length == 0 ||
            inputDate.value.length == 0
        ) {
            alert("Some fields are empty.");
        }

        else {
            const newEntry = new Article(form.elements.title.value, form.elements.author.value, form.elements.date.value);
            displayResult.appendChild(newEntry.toHTML());
        }
    });

    result.appendChild(form);
    result.appendChild(displayResult);

    return result;
}
