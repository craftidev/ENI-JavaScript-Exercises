export function readLocalStorage() {
    const storedData = localStorage.getItem('listOfArticles');
    return JSON.parse(storedData);
}

export function addItemLocalStorage(article) {
    localStorage.setItem(`article-${article.id}`, JSON.stringify(article));
}

export function removeItemByIdLocalStorage(aritcleId) {
    const key = `article-${articleId}`;
    localStorage.removeItem(key);
}
