export default class ListOfArticles {
    constructor(listOfArticles = []) {
        this.listOfArticles = listOfArticles;
        this.orderByAuthorAscend = true;
        this.orderByDateAscend = true;
    }

    addElement(article) {
        this.listOfArticles.push(article);
    }

    sortByAuthor() {
        if (this.orderByAuthorAscend) {
            this.listOfArticles.sort((a, b) => a.author.localeCompare(b.author));
            this.orderByAuthorAscend = false;
        } else {
            this.listOfArticles.sort((a, b) => b.author.localeCompare(a.author));
            this.orderByAuthorAscend = true;
        }
    }

    sortByDate() {
        if (this.orderByDateAscend) {
            this.listOfArticles.sort((a, b) => a.date - b.date);
            this.orderByDateAscend = false;
        } else {
            this.listOfArticles.sort((a, b) => b.date - a.date);
            this.orderByDateAscend = true;
        }
    }

    getListOfArticles() {
        return this.listOfArticles;
    }
}
