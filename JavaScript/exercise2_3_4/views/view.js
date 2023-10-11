export default function createExerciseView() {
    const result = document.createElement("div");

    const displayResult = createDisplayResult();
    const form = createForm();

    result.appendChild(form);
    result.appendChild(displayResult);

    return result;
}

function createDisplayResult() {
    const displayResult = document.createElement("div");

    const btnOrderByAuthor = document.createElement("button");
    btnOrderByAuthor.textContent = "Order by author";

    const btnOrderByDate = document.createElement("button");
    btnOrderByDate.textContent = "Order by date";

    displayResult.appendChild(btnOrderByAuthor);
    displayResult.appendChild(btnOrderByDate);

    return displayResult;
}

function createForm() {
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

        return form;
}
