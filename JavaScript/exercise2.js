function exercise2() {
    let result = document.createElement("div");
    result.classList.add("form");
    
    let labelTitle = Object.assign(document.createElement("label"), { type: "text", for: "title" });
    let inputTitle = Object.assign(document.createElement("input"), { id: "title" });
    let labelAuthor = Object.assign(document.createElement("label"), { for: "author" });
    let inputAuthor = Object.assign(document.createElement("input"), { type: "text", id: "author" });
    let labelDate = Object.assign(document.createElement("label"), { for: "date" });
    let inputDate = Object.assign(document.createElement("input"), { type: "date", id: "date" });
    let inputSubmit = Object.assign(document.createElement("input"), { type: "submit" });
    let displayResult = document.createElement("ul");

    labelTitle.textContent = "Title: ";
    labelAuthor.textContent = "Author: ";
    labelDate.textContent = "Date: ";

    result.appendChild(labelTitle);
    result.appendChild(inputTitle);
    result.appendChild(labelAuthor);
    result.appendChild(inputAuthor);
    result.appendChild(labelDate);
    result.appendChild(inputDate);
    result.appendChild(inputSubmit);

    inputSubmit.onclick = function () {
        if(
            inputTitle.value.length == 0 ||
            inputAuthor.value.length == 0 ||
            inputDate.value.length == 0
        ) {
            alert("Some fields are empty.");
        }

        else {
            let li = Object.assign(document.createElement("li"), { style: "list-style-type: decimal;" });
            let title = document.createElement("h1");
            title.classList.add("title-in-decimal-list");
            let authorAndDate = document.createElement("p");

            title.textContent = inputTitle.value;
            authorAndDate.textContent = inputAuthor.value + ", " + inputDate.value;

            li.appendChild(title);
            li.appendChild(authorAndDate);

            displayResult.appendChild(li);

            li.onclick = function() {
                let userConfirm = confirm(
                    this.firstElementChild.textContent +
                    " ------ Do you want to delete this entry?"
                );
                if (userConfirm === true) {
                    displayResult.removeChild(this);
                }
            }

            result.appendChild(displayResult);
        }
    }

    return result;
}
