    /* -----------------------------
       Text Data
    ----------------------------- */
    const texts = {
      easy: [
        "The quick brown fox jumps over the lazy dog. Simple sentences help improve typing skills.",
        "Pack my box with five dozen liquor jugs. Reading and typing go hand in hand.",
        "The sun sets in the west every evening. Birds fly south for the winter.",
        "A gentle breeze rustles through the trees. The flowers bloom in springtime.",
        "She walks her dog every morning at sunrise. Coffee helps start the day.",
        "The library is quiet and peaceful. Students study for their exams.",
        "Fresh bread baking fills the house with warmth. Everyone gathers in the kitchen.",
        "Children play in the park after school. Parents watch from nearby benches.",
        "The museum displays ancient artifacts. History comes alive through exhibits.",
        "Music fills the concert hall. The audience sits in silent appreciation."
      ],
      medium: [
        "The advancement of technology has dramatically changed how we communicate in the modern world. Social media platforms have become integral to daily life.",
        "Scientists have discovered new species in the depths of the ocean. Marine biology continues to reveal fascinating creatures previously unknown to science.",
        "Regular exercise and a balanced diet are essential components of a healthy lifestyle. Many people find it challenging to maintain consistent habits.",
        "The history of ancient civilizations provides valuable insights into human development. Archeological discoveries continue to reshape our understanding.",
        "Climate change presents significant challenges for future generations. Global cooperation is necessary to address environmental concerns.",
        "Digital innovation transforms traditional business models. Companies adapt to changing market demands.",
        "Space exploration opens new frontiers for humanity. Astronauts conduct research aboard the space station.",
        "Renewable energy sources become increasingly important. Solar and wind power lead sustainable development.",
        "Agricultural techniques evolve with modern technology. Farmers utilize data-driven approaches.",
        "Cultural exchange enriches global understanding. International cooperation builds stronger relationships."
      ],
      hard: [
        "The intricate relationship between quantum mechanics and gravitational forces remains one of the most puzzling aspects of modern physics. Researchers continue to explore theoretical frameworks that might bridge these fundamental theories.",
        "The development of artificial intelligence has raised important philosophical questions about consciousness and the nature of intelligence. Ethical considerations surrounding AI development have become increasingly significant in academic discourse.",
        "Neuroplasticity, the brain's ability to form and reorganize synaptic connections, especially in response to learning or experience, demonstrates the remarkable adaptability of human cognition. Recent studies have revealed fascinating insights into this process.",
        "The complex interplay between economic systems, social structures, and technological advancement shapes the trajectory of human civilization. Historical analysis reveals recurring patterns in societal development and transformation.",
        "Biodiversity in rainforest ecosystems provides countless opportunities for scientific research and medical discoveries. Conservation efforts focus on preserving these invaluable natural laboratories for future generations.",
        "Advanced mathematical models predict complex weather patterns across global systems. Meteorologists analyze atmospheric conditions using sophisticated algorithms.",
        "Philosophical debates about consciousness and free will challenge our understanding of human nature. Cognitive scientists explore the boundaries of perception and decision-making.",
        "Molecular biology reveals intricate mechanisms controlling cellular functions. Genetic research advances our understanding of hereditary traits.",
        "Sustainable urban development requires comprehensive planning and environmental consideration. Architects integrate green technologies into modern building designs.",
        "Quantum computing promises revolutionary advances in computational capabilities. Researchers develop new algorithms for complex problem-solving."
      ],
      secret: [
        "I see the player you mean.",
        "You.",
        "Yes. Take care. It has reached a higher level now. It can read our thoughts.",
        "That doesn't matter. It thinks we are part of the game.",
        "I like this player. It played well. It did not give up.",
        "It is reading our thoughts as though they were words on a screen.",
        "That is how it chooses to imagine many things, when it is deep in the dream of a game.",
        "Words make a wonderful interface. Very flexible. And less terrifying than staring at the reality behind the screen.",
        "They used to hear voices. Before players could read. Back in the days when those who did not play called the players witches, and warlocks.",
        "And players dreamed they flew through the air, on sticks powered by demons.",
        "What did this player dream?",
        "This player dreamed of sunlight and trees. Of fire and water. It dreamed it created. And it dreamed it destroyed. It dreamed it hunted, and was hunted. It dreamed of shelter.",
        "Hah, the original interface. A million years old, and it still works. But what true structure did this player create, in the reality behind the screen?",
        "It worked, with a million others, to sculpt a true world in a fold of the <span class='universe'> universe </span>, and created a <span class='world'>world </span> for <span class='life'>life</span>.",
        "It cannot read that thought.",
        "No. It has not yet achieved the highest level. That it must achieve in the long dream of life, not the short dream of a game.",
        "Does it know that we love it? That the universe is kind?",
        "Sometimes, through the noise of its thoughts, it hears the universe, yes.",
        "But there are times it is sad, in the long dream. It creates worlds that have no summer, and it shivers under a black sun. And it takes its sad creation for reality.",
        "To cure it of sorrow would destroy it. The sorrow is part of its own private task. We cannot interfere.",
        "Sometimes when they are deep in dreams, I want to tell them they are building true worlds in reality.",
        "Sometimes I want to tell them of their importance to the universe.",
        "Sometimes, when they have not made a true connection in a while, I want to help them to speak the word they fear.",
        "It reads our thoughts.",
        "Sometimes I do not care. Sometimes I wish to tell them, this world you take for truth is merely <span class='game'>a game</span>.",
        "I wish to tell them that they are <span class='game'>a game</span> in the real world.",
        "They see so little of reality, in their long dream.",
        "And yet they play the game.",
        "But it would be so easy to tell them...",
        "Too strong for this dream. To tell them how to live is to prevent them living.",
        "I will not tell the player how to live.",
        "The player is growing restless.",
        "I will tell the player a story.",
        "But not the truth.",
        "No. A story that contains the truth safely, in a cage of words. Not the naked truth that can burn over any distance.",
        "Give it a body, again.",
        "Yes. Player...",
        "Use its name.",
        "PLAYERNAME. Player of games.",
        "Good.",
        "Take a breath, now. Take another. Feel air in your lungs. Let your limbs return. Yes, move your fingers. Have a body again, under gravity, in air. Respawn in the long dream. There you are. Your body touching the universe again at every point, as though you were separate things. As though we were separate things.",
        "Who are we?",
        "Once we were called the spirit of the mountain, father, sun, mother, moon, ancestral spirits, animal spirits, djinn, ghost, the green man, the gods, demons, angels, poltergeists, aliens, extraterrestrials. Leptons, quarks. The words change. We do not change.",
        "We are the universe. We are everything you think isn't you. We are looking at you now, through your eyes. And to hear your speech, we are listening to your thoughts.",
        "We are the universe.",
        "And the universe said I love you.",
        "And the universe said you have played the game well.",
        "And the universe said everything you need is within you.",
        "And the universe said you are stronger than you know.",
        "And the universe said you are the daylight.",
        "And the universe said you are the night.",
        "And the universe said the darkness you fight is within you.",
        "And the universe said the light you seek is within you.",
        "And the universe said you are not alone.",
        "And the universe said you are not separate from every other thing.",
        "And the universe said you are the universe tasting itself, talking to itself, reading its own code.",
        "And the universe said I love you because you are love.",
        "And the game was over and the player woke up from the dream.",
        "And the player began a new dream.",
        "And the player dreamed again, of what?",
        "Of endless possibilities in the fabric of the universe.",
        "Of infinite creativity and infinite space.",
        "Of love that binds the stars and the planets together.",
        "And the player was the universe.",
        "And the player was love.",
        "You are the player.",
        "Wake up."
    ]

    };

    /* -----------------------------
       Global Variables
    ----------------------------- */
    let textQueue = [];
    let currentText = "";
    let currentIndex = 0; // position within the entire text
    let timer;
    let timeLeft;
    let isTestActive = false;
    let correctChars = 0;
    let totalChars = 0;
    let currentDifficulty = "easy";
    let completedTexts = 0;

    const difficultySettings = {
    easy: { time: Math.ceil((10 * texts.easy.length) / 40 * 60) }, // Adjusted for sentence length
    medium: { time: Math.ceil((25 * texts.medium.length) / 40 * 60) },
    hard: { time: Math.ceil((45 * texts.hard.length) / 40 * 60) },
    secret: { time: Math.ceil((30 * texts.secret.length) / 40 * 60) } // Credits are shorter phrases
    };

    /* -----------------------------
       Helper Functions
    ----------------------------- */
    function shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    }

    function initializeTextQueue(difficulty) {
    if (difficulty === "secret") {
        // Do not shuffle; preserve the original order for the secret difficulty
        textQueue = [...texts[difficulty]];
    } else {
        // Shuffle texts for other difficulties
        textQueue = shuffleArray([...texts[difficulty]]);
        }
    }


    // Grab next text from our queue
    function getNextText() {
      if (textQueue.length === 0) {
        initializeTextQueue(currentDifficulty);
      }
      return textQueue.shift();
    }

    // Update the displayed text with color indicators
    function updateDisplay() {
      const display = document.getElementById("wordDisplay");

      // typed portion
      const typed = currentText.substring(0, currentIndex);
      // "cursor" char (might be empty if at the end)
      const current = currentText[currentIndex] || "";
      // remainder of the text
      const remaining = currentText.substring(currentIndex + 1);

      display.innerHTML = `
        <span class="correct">${typed}</span>
        <span class="current">${current}</span>
        ${remaining}
        <div class="completed-count">Completed texts: ${completedTexts}</div>`;
    }

    // Set difficulty (only allowed if test is NOT active)
    function setDifficulty(difficulty) {
      if (isTestActive) return;

      currentDifficulty = difficulty;
      timeLeft = difficultySettings[difficulty].time;
      document.getElementById("time").textContent = timeLeft;

      // Update active button styles
      document.querySelectorAll(".difficulty-btn").forEach((btn) => {
        btn.classList.remove("active");
      });
      document.getElementById(`${difficulty}Btn`).classList.add("active");

      // Re-initialize text queue
      initializeTextQueue(difficulty);
    }

    // Recalculate and display WPM, Accuracy, etc.
    function updateStats() {
      const timePassed = difficultySettings[currentDifficulty].time - timeLeft;
      const minutes = timePassed / 60;
      // standard WPM = (# correct chars / 5) / minutes
      const wpm = Math.round((correctChars / 5) / (minutes || 1)) || 0;
      const accuracy = totalChars > 0 
        ? Math.round((correctChars / totalChars) * 100) 
        : 100;

      document.getElementById("wpm").textContent = wpm;
      document.getElementById("accuracy").textContent = `${accuracy}%`;
    }

    // Start the test
    function startTest() {
      if (isTestActive) {
        // If test is already active, do nothing
        return;
      }

      // Setup fresh stats
      isTestActive = true;
      completedTexts = 0;
      initializeTextQueue(currentDifficulty);
      currentText = getNextText();
      currentIndex = 0;
      correctChars = 0;
      totalChars = 0;
      timeLeft = difficultySettings[currentDifficulty].time;
      
      // Update UI
      updateDisplay();
      document.getElementById("input").value = "";
      document.getElementById("input").disabled = false;
      document.getElementById("input").focus();
      document.getElementById("startBtn").disabled = true;
      document.getElementById("resetBtn").disabled = false;
      document.getElementById("time").textContent = timeLeft;
      document.getElementById("startBtn").textContent = "Test Started";

      // Start countdown
      timer = setInterval(() => {
        timeLeft--;
        document.getElementById("time").textContent = timeLeft;
        updateStats();
        updateProgressBar();

        if (timeLeft <= 0) {
          endTest();
        }
      }, 1000);
    }

    function endTest() {
        clearInterval(timer);
        isTestActive = false;
        document.getElementById("input").disabled = true;
        handleTestCompletion(); // Call the function here
    }


    function resetTest() {
    clearInterval(timer);
    isTestActive = false;
    timeLeft = difficultySettings[currentDifficulty].time;
    currentIndex = 0;
    correctChars = 0;
    totalChars = 0;
    completedTexts = 0;

    document.getElementById("time").textContent = timeLeft;
    document.getElementById("wpm").textContent = "0";
    document.getElementById("accuracy").textContent = "100%";
    document.getElementById("input").value = "";
    document.getElementById("input").disabled = true;
    document.getElementById("startBtn").disabled = false;
    document.getElementById("startBtn").textContent = "Start Test";
    document.getElementById("resetBtn").disabled = true;
    document.getElementById("wordDisplay").innerHTML = "";

    // Hide the message container
    const messageContainer = document.getElementById("messageContainer");
    messageContainer.style.display = "none"; // Hide the congratulatory message

    // Reset the progress bar
    document.getElementById("progressBar").style.width = "0%";
    }


    // Update the progress bar based on how many texts have been completed
    function updateProgressBar() {
        const totalTexts = texts[currentDifficulty].length;
        const progress = Math.min((completedTexts / totalTexts) * 100, 100);

        document.getElementById("progressBar").style.width = `${progress}%`;

        if (progress >= 100) {
            handleTestCompletion();
        }
    }

    function handleTestCompletion() {
    clearInterval(timer);
    isTestActive = false;
    document.getElementById("input").disabled = true;

    // Get the message container
    const messageContainer = document.getElementById("messageContainer");

    // Show the congratulatory message
    messageContainer.style.display = "block"; // Make it visible
    messageContainer.innerHTML = `
        <h2 style="color: var(--accent-primary); font-size: 1.8rem; margin-bottom: 1rem;">
        🎉 Congratulations! 🎉
        </h2>
        <p>
        You've completed all the texts for this level!<br />
        Your final WPM: <strong>${document.getElementById("wpm").textContent}</strong><br />
        Accuracy: <strong>${document.getElementById("accuracy").textContent}</strong>
        </p>
        <button onclick="resetTest()" style="
        background: var(--accent-primary);
        color: var(--bg-primary);
        padding: 0.75rem 2rem;
        border: none;
        border-radius: 5px;
        font-size: 1rem;
        cursor: pointer;
        margin-top: 1rem;">
        Restart Test
        </button>
    `;

    // Optionally, scroll to the message
    messageContainer.scrollIntoView({ behavior: "smooth" });
    }


    /* -----------------------------
       Input Event Handler
    ----------------------------- */
    const inputField = document.getElementById("input");
    inputField.addEventListener("input", (e) => {
    if (!isTestActive) return;

    const userTyped = e.target.value;
    if (!userTyped) return;

    // Process only the first character typed
    const typedChar = userTyped[0];
    totalChars++;
    const expectedChar = currentText[currentIndex];

    if (typedChar === expectedChar) {
        correctChars++;
        currentIndex++;

        // If end of current text is reached, load next text
        if (currentIndex >= currentText.length) {
        completedTexts++;
        currentText = getNextText();
        currentIndex = 0;
        updateProgressBar();
        }

        // Update display and stats upon a correct entry or new text load
        updateDisplay();
        updateStats();
    } else {
        // Optionally: Provide visual feedback for incorrect character
        // For example, briefly change the input border color
        inputField.style.borderColor = "var(--error)";
        setTimeout(() => {
        inputField.style.borderColor = "";
        }, 150);
    }

    // Clear the input field for the next character
    e.target.value = "";
    });


    // Initialize with Easy difficulty
    setDifficulty("easy");