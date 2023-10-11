export default class Article {
    constructor(id, title, author, date) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.date = date;
    }

    toHTML() {
        const li = document.createElement("li");
        li.classList.add("li-article");
        const title = document.createElement("h1");
        title.classList.add("title-in-decimal-list");
        const authorAndDate = document.createElement("p");

        const year = this.date.getFullYear();
        const month = String(this.date.getMonth() + 1).padStart(2, '0');
        const day = String(this.date.getDate()).padStart(2, '0');
        const formatedDate = `${year}-${month}-${day}`;

        title.textContent = this.title;
        authorAndDate.textContent = this.author + ", " + formatedDate;

        li.appendChild(title);
        li.appendChild(authorAndDate);

        return li;
    }
}
