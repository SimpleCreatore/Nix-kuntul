const storyParts = [
    {
        text: "You find yourself at the edge of a dark forest. Do you wish to enter?",
        options: [
            { text: "Yes, enter the forest.", next: 1 },
            { text: "No, stay at the edge.", next: 2 }
        ]
    },
    {
        text: "As you step into the forest, eerie sounds surround you. Suddenly, a wolf appears! What do you do?",
        options: [
            { text: "Fight the wolf.", next: 3 },
            { text: "Run away.", next: 4 }
        ]
    },
    {
        text: "You decide to stay at the edge. After a while, you see a village in the distance. Do you want to go there?",
        options: [
            { text: "Yes, head to the village.", next: 5 },
            { text: "No, keep exploring the forest.", next: 1 }
        ]
    },
    {
        text: "You bravely fight the wolf and emerge victorious! You gain experience. What would you like to do next?",
        options: [
            { text: "Explore deeper into the forest.", next: 1 },
            { text: "Return to the village.", next: 5 }
        ]
    },
    {
        text: "You run away and escape the wolf, but now you are lost. What will you do?",
        options: [
            { text: "Try to find your way back.", next: 2 },
            { text: "Search for another path.", next: 1 }
        ]
    },
    {
        text: "You arrive in the village and meet a wise old man who offers you guidance. What will you ask?",
        options: [
            { text: "Tell me about the forest.", next: 6 },
            { text: "What adventures await me?", next: 7 }
        ]
    },
    {
        text: "The old man explains that the forest is filled with danger but also treasures. You feel a surge of excitement! What will you do next?",
        options: [
            { text: "Head back to the forest.", next: 1 },
            { text: "Stay in the village to gather supplies.", next: 5 }
        ]
    },
    {
        text: "He tells you of legendary beasts and hidden treasures waiting to be discovered. The adventure is calling you!",
        options: [
            { text: "Set out on an adventure!", next: 1 },
            { text: "Thank the old man and stay a while.", next: 5 }
        ]
    }
];

let currentPart = 0;

function updateStory() {
    const storyText = document.getElementById("story-text");
    const optionsDiv = document.getElementById("options");
    storyText.innerText = storyParts[currentPart].text;
    optionsDiv.innerHTML = ""; // Clear previous options

    storyParts[currentPart].options.forEach(option => {
        const button = document.createElement("button");
        button.innerText = option.text;
        button.onclick = () => {
            currentPart = option.next;
            logMessage(`You chose: ${option.text}`);
            updateStory();
        };
        optionsDiv.appendChild(button);
    });
}

function logMessage(message) {
    const log = document.getElementById("game-log");
    log.innerHTML += `<p>${message}</p>`;
    log.scrollTop = log.scrollHeight; // Scroll to the bottom
}

// Initialize the story
updateStory();
