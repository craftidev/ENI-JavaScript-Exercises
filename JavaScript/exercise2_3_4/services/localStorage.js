export function readLocalStorage() {
    const storedData = getAllItemsWithPrefix("article-");

    return storedData;
}

export function addItemLocalStorage(article) {
    localStorage.setItem(`article-${article.getId()}`, JSON.stringify(article));
}

export function removeItemLocalStorage(article) {
    const key = `article-${article.getId()}`;
    localStorage.removeItem(key);
}

function getAllItemsWithPrefix(prefix) {
    const items = [];
    
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);

        if (key.startsWith(prefix)) {
        const item = JSON.parse(localStorage.getItem(key));
        items.push(item);
        }
    }

    return items;
}
