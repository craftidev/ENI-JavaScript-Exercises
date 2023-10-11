export default function handleListOfArticleSorting(listOfArticles, sortedBy) {
    if (sortedBy === "author") {
        listOfArticles.sortByAuthor();
    } else if (sortedBy === "date") {
        listOfArticles.sortByDate();
    }
}
