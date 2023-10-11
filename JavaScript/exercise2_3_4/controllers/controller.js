import Article from './models/Article.js';

export default function handleListOfArticleSorting(listOfArticles, sortedBy) {
    if (sortedBy === "author") {
        listOfArticles.sortByAuthor();
    } else if (sortedBy === "date") {
        listOfArticles.sortByDate();
    }
}

export default function handleFormSubmission(form, event, listOfArticles) {
    event.preventDefault();
    const newEntry = new Article(form.elements.title.value, form.elements.author.value, form.elements.date.valueAsDate);
    listOfArticles.addElement(newEntry);
}
