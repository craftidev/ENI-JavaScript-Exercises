import exercise0 from './JavaScript/exercise0.js';
import exercise1a from './JavaScript/exercise1a.js';
import exercise1b from './JavaScript/exercise1b.js';
import exercise1c from './JavaScript/exercise1c.js';
import exercise2_3_4 from './JavaScript/exercise2_3_4/exercise2&3&4.js';
import exercise5 from './JavaScript/exercise5.js';

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
        title: "Task 5, 6 & 7: Add dynamically formated text from HTML form and sort article created using objects (MVC architecture)",
        content: exercise2_3_4,
    },
    {
        title: "Task 8: Calculate speed of typing",
        content: exercise5,
    }
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
