<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Reality Check + Discipline Tracker</title>
    <meta name="description" content="Test your discipline with reality checks and track your habits. Prove you're disciplined.">
    <meta name="keywords" content="discipline tracker, reality check, habit tracker, productivity">
    <link rel="stylesheet" href="style.css">
    <script src="script.js" defer></script>
    <!-- AdSense Placeholder -->
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX" crossorigin="anonymous"></script>
</head>
<body>
    <header>
        <h1>Reality Check + Discipline Tracker</h1>
        <p>अगर लगता है कि आप disciplined हैं, तो proof दीजिए।</p>
        <nav>
            <button id="nav-tests">Reality Checks</button>
            <button id="nav-trackers">Trackers</button>
            <button id="nav-dashboard">Dashboard</button>
        </nav>
    </header>
    <main>
        <!-- AdSense Banner Placeholder -->
        <div id="ad-banner" class="ad-placeholder">
            <!-- AdSense code here -->
        </div>
        
        <section id="tests" class="active">
            <h2>Reality Check Tests</h2>
            <div id="test-list">
                <button class="test-btn" data-test="discipline">Discipline Consistency Test</button>
                <button class="test-btn" data-test="study">Study Focus Test</button>
                <button class="test-btn" data-test="workout">Workout Discipline Test</button>
                <button class="test-btn" data-test="phone">Phone Usage Test</button>
                <button class="test-btn" data-test="routine">Daily Routine Test</button>
            </div>
            <div id="test-container" style="display:none;">
                <h3 id="test-title"></h3>
                <div id="questions"></div>
                <button id="submit-test">Submit</button>
                <div id="result" style="display:none;">
                    <p id="score"></p>
                    <p id="message"></p>
                </div>
            </div>
        </section>
        
        <section id="trackers">
            <h2>Habit & Routine Trackers</h2>
            <div id="tracker-list">
                <div class="tracker" data-tracker="study">
                    <h3>Study Routine Tracker</h3>
                    <div class="tasks"></div>
                    <p class="progress">Completion: <span class="percent">0%</span></p>
                    <p class="streak">Streak: <span class="streak-count">0</span> days</p>
                </div>
                <div class="tracker" data-tracker="gym">
                    <h3>Gym / Workout Tracker</h3>
                    <div class="tasks"></div>
                    <p class="progress">Completion: <span class="percent">0%</span></p>
                    <p class="streak">Streak: <span class="streak-count">0</span> days</p>
                </div>
                <div class="tracker" data-tracker="phone">
                    <h3>Phone Usage Control Tracker</h3>
                    <div class="tasks"></div>
                    <p class="progress">Completion: <span class="percent">0%</span></p>
                    <p class="streak">Streak: <span class="streak-count">0</span> days</p>
                </div>
                <div class="tracker" data-tracker="goals">
                    <h3>Daily Goals Tracker</h3>
                    <div class="tasks"></div>
                    <p class="progress">Completion: <span class="percent">0%</span></p>
                    <p class="streak">Streak: <span class="streak-count">0</span> days</p>
                </div>
                <div class="tracker" data-tracker="habits">
                    <h3>Habits Tracker</h3>
                    <div class="tasks"></div>
                    <p class="progress">Completion: <span class="percent">0%</span></p>
                    <p class="streak">Streak: <span class="streak-count">0</span> days</p>
                </div>
            </div>
        </section>
        
        <section id="dashboard">
            <h2>Dashboard</h2>
            <div id="overall-progress">
                <h3>Overall Discipline Score</h3>
                <div class="progress-bar">
                    <div class="progress-fill" id="overall-score-bar"></div>
                </div>
                <p id="overall-score-text">0%</p>
            </div>
            <div id="test-scores">
                <h3>Test Scores</h3>
                <ul id="scores-list"></ul>
            </div>
            <div id="tracker-progress">
                <h3>Tracker Completions</h3>
                <ul id="progress-list"></ul>
            </div>
            <p class="motivation">You can do better. Keep pushing!</p>
            <button id="share-btn">Share Your Progress</button>
        </section>
    </main>
    <footer>
        <p>&copy; 2023 Reality Check Tracker. Built for self-improvement.</p>
    </footer>
</body>
</html>
/* Mobile-first responsive design */
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f4f4f4;
    color: #333;
    line-height: 1.6;
}

header {
    background-color: #007bff;
    color: white;
    padding: 1rem;
    text-align: center;
}

nav {
    margin-top: 1rem;
}

nav button {
    background: none;
    border: 1px solid white;
    color: white;
    padding: 0.5rem 1rem;
    margin: 0 0.5rem;
    cursor: pointer;
    border-radius: 5px;
}

nav button:hover {
    background-color: white;
    color: #007bff;
}

main {
    padding: 1rem;
    max-width: 800px;
    margin: 0 auto;
}

.ad-placeholder {
    background-color: #ddd;
    height: 90px;
    margin-bottom: 1rem;
    text-align: center;
    line-height: 90px;
    color: #666;
}

section {
    display: none;
}

section.active {
    display: block;
}

.test-btn, #submit-test {
    display: block;
    width: 100%;
    padding: 1rem;
    margin: 0.5rem 0;
    background-color: #28a745;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

.test-btn:hover, #submit-test:hover {
    background-color: #218838;
}

.tracker {
    border: 1px solid #ccc;
    padding: 1rem;
    margin: 1rem 0;
    border-radius: 5px;
}

.tasks {
    margin-bottom: 1rem;
}

.task {
    display: flex;
    align-items: center;
    margin: 0.5rem 0;
}

.task input {
    margin-right: 0.5rem;
}

.progress-bar {
    background-color: #e9ecef;
    border-radius: 5px;
    height: 20px;
    margin: 0.5rem 0;
}

.progress-fill {
    background-color: #007bff;
    height: 100%;
    border-radius: 5px;
    width: 0%;
}

.motivation {
    font-style: italic;
    color: #dc3545;
    margin: 1rem 0;
}

#share-btn {
    background-color: #17a2b8;
    color: white;
    border: none;
    padding: 1rem;
    width: 100%;
    border-radius: 5px;
    cursor: pointer;
}

#share-btn:hover {
    background-color: #138496;
}

footer {
    text-align: center;
    padding: 1rem;
    background-color: #007bff;
    color: white;
}

/* Responsive adjustments */
@media (min-width: 768px) {
    nav button {
        display: inline-block;
    }
    
    .test-btn {
        width: auto;
        display: inline-block;
        margin: 0.5rem;
    }
    
    .tracker {
        display: inline-block;
        width: calc(50% - 1rem);
        margin: 0.5rem;
        vertical-align: top;
    }
}
// Data structures
const tests = {
    discipline: {
        title: "Discipline Consistency Test",
        questions: [
            { q: "Do you stick to your plans even when tired?", options: ["Always", "Often", "Sometimes", "Rarely"], scores: [100, 75, 50, 25] },
            { q: "How often do you procrastinate?", options: ["Never", "Rarely", "Sometimes", "Often"], scores: [100, 75, 50, 25] },
            // Add more questions as needed
        ]
    },
    study: {
        title: "Study Focus Test",
        questions: [
            { q: "Do you study without distractions?", options: ["Always", "Often", "Sometimes", "Rarely"], scores: [100, 75, 50, 25] },
            // Similar structure
        ]
    },
    workout: {
        title: "Workout Discipline Test",
        questions: [
            { q: "Do you exercise regularly?", options: ["Daily", "4-5 times/week", "2-3 times/week", "Rarely"], scores: [100, 75, 50, 25] },
        ]
    },
    phone: {
        title: "Phone Usage Test",
        questions: [
            { q: "How much time do you spend on your phone daily?", options: ["<1 hour", "1-2 hours", "2-4 hours", ">4 hours"], scores: [100, 75, 50, 25] },
        ]
    },
    routine: {
        title: "Daily Routine Test",
        questions: [
            { q: "Do you follow a consistent daily routine?", options: ["Always", "Often", "Sometimes", "Rarely"], scores: [100, 75, 50, 25] },
        ]
    }
};

const messages = {
    high: "You're on the right track. Keep it up!",
    medium: "There's room for improvement. You can do better.",
    low: "Honesty is key. Reflect and adjust."
};

const trackers = {
    study: ["Study 1 hour", "Review notes", "Complete assignment"],
    gym: ["Warm-up", "Main workout", "Cool-down"],
    phone: ["Limit to 1 hour", "No social media after 8pm", "Put phone away during meals"],
    goals: ["Wake up early", "Eat healthy", "Read 30 mins"],
    habits: ["Meditate", "Journal", "Hydrate"]
};

// Load data from localStorage
let testScores = JSON.parse(localStorage.getItem('testScores')) || {};
let trackerData = JSON.parse(localStorage.getItem('trackerData')) || {};

// Navigation
document.querySelectorAll('nav button').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('section').forEach(sec => sec.classList.remove('active'));
        document.getElementById(btn.id.replace('nav-', '')).classList.add('active');
        updateDashboard();
    });
});

// Test functionality
document.querySelectorAll('.test-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const test = btn.dataset.test;
        loadTest(test);
    });
});

function loadTest(testKey) {
    const test = tests[testKey];
    document.getElementById('test-title').textContent = test.title;
    const questionsDiv = document.getElementById('questions');
    questionsDiv.innerHTML = '';
    test.questions.forEach((q, i) => {
        const div = document.createElement('div');
        div.innerHTML = `<p>${q.q}</p>`;
        q.options.forEach((opt, j) => {
            div.innerHTML += `<label><input type="radio" name="q${i}" value="${j}"> ${opt}</label><br>`;
        });
        questionsDiv.appendChild(div);
    });
    document.getElementById('test-list').style.display = 'none';
    document.getElementById('test-container').style.display = 'block';
}

document.getElementById('submit-test').addEventListener('click', () => {
    const testKey = document.getElementById('test-title').textContent.replace(' Test', '').toLowerCase().replace(' ', '');
    const test = tests[testKey];
    let totalScore = 0;
    test.questions.forEach((q, i) => {
        const selected = document.querySelector(`input[name="q${i}"]:checked`);
        if (selected) {
            totalScore += q.scores[parseInt(selected.value)];
        }
    });
    const avgScore = Math.round(totalScore / test.questions.length);
    testScores[testKey] = avgScore;
    localStorage.setItem('testScores', JSON.stringify(testScores));
    
    let msg;
    if (avgScore >= 75) msg = messages.high;
    else if (avgScore >= 50) msg = messages.medium;
    else msg = messages.low;
    
    document.getElementById('score').textContent = `Score: ${avgScore}%`;
    document.getElementById('message').textContent = msg;
    document.getElementById('result').style.display = 'block';
    updateDashboard();
});

// Tracker functionality
document.querySelectorAll('.tracker').forEach(tracker => {
    const key = tracker.dataset.tracker;
    if (!trackerData[key]) trackerData[key] = { tasks: {}, streak: 0 };
    const tasksDiv = tracker.querySelector('.tasks');
    trackers[key].forEach(task => {
        const div = document.createElement('div');
        div.className = 'task';
        div.innerHTML = `<input type="checkbox" id="${key}-${task}"> <label for="${key}-${task}">${task}</label>`;
        tasksDiv.appendChild(div);
        const checkbox = div.querySelector('input');
        checkbox.addEventListener('change', () => {
            trackerData[key].tasks[task] = checkbox.checked;
            updateTrackerProgress(key);
            localStorage.setItem('trackerData', JSON.stringify(trackerData));
        });
        if (trackerData[key].tasks[task]) checkbox.checked = true;
    });
    updateTrackerProgress(key);
});

function updateTrackerProgress(key) {
    const tracker = document.querySelector(`[data-tracker="${key}"]`);
    const tasks = trackers[key];
    const completed = tasks.filter(t => trackerData[key].tasks[t]).length;
    const percent = Math.round((completed / tasks.length) * 100);
    tracker.querySelector('.percent').textContent = `${percent}%`;
    tracker.querySelector('.progress-fill').style.width = `${percent}%`;
    
    // Simple streak logic (assuming daily reset, but for demo, increment if all done)
    if (percent === 100) {
        trackerData[key].streak++;
    } else {
        trackerData[key].streak = 0;
    }
    tracker.querySelector('.streak-count').textContent = trackerData[key].streak;
}

// Dashboard
function updateDashboard() {
    // Overall score
    const scores = Object.values(testScores);
    const avgScore = scores.length ? Math.round(scores.reduce((a,b)=>a+b)/scores.length) : 0;
    document.getElementById('overall-score-bar').style.width = `${avgScore}%`;
    document.getElementById('overall-score-text').textContent = `${avgScore}%`;
    
    // Test scores list
    const scoresList = document.getElementById('scores-list');
    scoresList.innerHTML = '';
    Object.keys(testScores).forEach(key => {
        const li = document.createElement('li');
        li.textContent = `${key.charAt(0).toUpperCase() + key.slice(1)}: ${testScores[key]}%`;
        scoresList.appendChild(li);
    });
    
    // Tracker progress list
    const progressList = document.getElementById('progress-list');
    progressList.innerHTML = '';
    Object.keys(trackerData).forEach(key => {
        const percent = Math.round((Object.values(trackerData[key].tasks).filter(Boolean).length / trackers[key].length) * 100);
        const li = document.createElement('li');
        li.textContent = `${key.charAt(0).toUpperCase() + key.slice(1)}: ${percent}%`;
        progressList.appendChild(li);
    });
}

// Share button
document.getElementById('share-btn').addEventListener('click', () => {
    const text = `My discipline score: ${document.getElementById('overall-score-text').textContent}. Check yours at [URL]`;
    navigator.share ? navigator.share({ text }) : alert('Share: ' + text);
});

// Initial load
updateDashboard();
