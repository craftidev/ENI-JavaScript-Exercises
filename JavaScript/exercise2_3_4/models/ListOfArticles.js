import Article from '../models/Article.js';

export default class ListOfArticles {
    constructor(listOfArticles = []) {
        this.listOfArticles = [];
        this.orderByAuthorAscend = true;
        this.orderByDateAscend = true;

        for (const article of listOfArticles) {
            this.addElement(article);
        }
    }

    addElement(article) {
        if (article instanceof Article) {
            this.listOfArticles.push(article);
        } else {
            throw new Error("Invalid article object");
        }
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
