function exercise2() {
    let result = document.createElement("div");
    
    let inputTitle = Object.assign(document.createElement("input"), { type: "text" });
    let inputAuthor = Object.assign(document.createElement("input"), { type: "text" });
    let inputDate = Object.assign(document.createElement("input"), { type: "date" });
    let inputSubmit = Object.assign(document.createElement("input"), { type: "submit" });
    let displayResult = document.createElement("ul");

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

            result.appendChild(li);

            li.onclick = function() {
                let userConfirm = confirm(
                    this.firstElementChild.textContent +
                    " ------ Do you want to delete this entry?"
                );
                if (userConfirm === true) {
                    result.removeChild(this);
                }
            }
        }
    }

    result.appendChild(inputTitle);
    result.appendChild(inputAuthor);
    result.appendChild(inputDate);
    result.appendChild(inputSubmit);

    return result;
}
