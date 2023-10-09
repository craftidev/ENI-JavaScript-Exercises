// Chapters array containing title and content
var chapters = [
    {
        title: "Task 0: Template for JS Exercises",
        content: exercise0,
    },
    {
        title: "Task 1: Count random generation",
        content: exercise1a,
    },
    {
        title: "Task 3: Sort alphabetically a string",
        content: exercise1b,
    },
    {
        title: "Task 4: Uppercase first letter of each word",
        content: exercise1c,
    },
    {
        title: "Task 5: Add dynamically formated text from HTML form",
        content: exercise2,
    },
    {
        title: "Task 6: ???",
        content: exercise3,
    },
    // Add new chapters here
];

// Populate menu items
var menuList = document.getElementById("menu-list");
chapters.forEach(function (chapter, index) {
    var li = document.createElement("li");
    li.classList.add("menu-element");

    var a = document.createElement("a");
    a.textContent = chapter.title;
    a.href = "#";
    a.id = index;
    a.onclick = function () {
        displayExercise(a.id);
    };

    li.appendChild(a);
    menuList.appendChild(li);
});

// Function to display content of exercise
function displayExercise(index) {
    var exerciseSpace = document.getElementById("exercises");

    if (typeof chapters[index].content === "function") {
        var result = chapters[index].content();
        if (typeof result === "string") {
            exerciseSpace.innerHTML = result;
        } else if (result instanceof Node && result.nodeType === Node.ELEMENT_NODE) {
            exerciseSpace.innerHTML = '';
            exerciseSpace.appendChild(result);
        } else {
            exerciseSpace.textContent = "Exercise executed. Check the console.";
        }
    } else {
        exerciseSpace.textContent = chapters[index].content;
    }
}

// Display first chapter by default
displayExercise(0);
