export default class ListOfArticles {
    constructor(listOfArticles = []) {
        this.ol = document.createElement("ol");
        this.listOfArticles = listOfArticles;
        this.orderByAuthorAscend = true;
        this.orderByDateAscend = true;
    }

    addElement(article) {
        this.listOfArticles.push(article);

        this.display();
    }

    display() {
        this.ol.innerHTML = "";

        for (let article of this.listOfArticles) {
            const articleToHTML = article.toHTML();

            articleToHTML.onclick = () => {
                const userConfirm = confirm(
                    articleToHTML.firstElementChild.textContent +
                    " ------ Do you want to delete this entry?"
                );

                if (userConfirm === true) {
                    articleToHTML.remove();
                    const index = this.listOfArticles.indexOf(article);
                    this.listOfArticles.splice(index, 1);
                }
            };

            this.ol.appendChild(articleToHTML);
        }

        return this.ol;
    }

    sortByAuthor() {
        if (this.orderByAuthorAscend) {
            this.listOfArticles.sort((a, b) => a.author.localeCompare(b.author));
            this.orderByAuthorAscend = false;
        } else {
            this.listOfArticles.sort((a, b) => b.author.localeCompare(a.author));
            this.orderByAuthorAscend = true;
        }

        this.display();
    }

    sortByDate() {
        if (this.orderByDateAscend) {
            this.listOfArticles.sort((a, b) => a.date - b.date);
            this.orderByDateAscend = false;
        } else {
            this.listOfArticles.sort((a, b) => b.date - a.date);
            this.orderByDateAscend = true;
        }

        this.display();
    }
}
