// Chapters array containing title and content
var chapters = [
    {
        title: "Task 0: Template for JS Exercises",
        content: exercise0,
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
        } else {
            exerciseSpace.textContent = "Exercise executed. Check the console.";
        }
    } else {
        exerciseSpace.textContent = chapters[index].content;
    }
}

// Display first chapter by default
displayExercise(0);
