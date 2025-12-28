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