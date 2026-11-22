// Step 1: HTML Elements
const home = document.getElementById("home");
const exam = document.getElementById("exam");
const resultPage = document.getElementById("resultPage");

const startBtn = document.getElementById("startexam");
const input = document.getElementById("wordcount");
const answerInput = document.getElementById("answer");
const checkBtn = document.getElementById("check");
const nextBtn = document.getElementById("next");
const newExamBtn = document.getElementById("newExam");

const questionEl = document.getElementById("question");
const progressEl = document.getElementById("progress");
const resultEl = document.getElementById("result");
const scoreEl = document.getElementById("score");


const words = [
    { bangla: "দাঁত মাজা", english: "Brush" },
    { bangla: "গোসল করা", english: "Bathe" },
    { bangla: "চুল আঁচড়ানো", english: "Comb" },
    { bangla: "ভাঁজ করা", english: "Fold" },
    { bangla: "কাপড় ইস্ত্রি করা", english: "Iron" },
    { bangla: "ঝাড়ু দেওয়া", english: "Sweep" },
    { bangla: "মেঝে মোছা", english: "Mop" },
    { bangla: "ধুলো পরিষ্কার করা", english: "Dust" },
    { bangla: "সাজানো", english: "Arrange" },
    { bangla: "সাজসজ্জা করা", english: "Decorate" },
    { bangla: "প্রস্তুত করা", english: "Prepare" },
    { bangla: "সংগ্রহ করা", english: "Collect" },
    { bangla: "বহন করা", english: "Carry" },
    { bangla: "বেছে নেওয়া", english: "Pick" },
    { bangla: "ফেলে দেওয়া", english: "Drop" },
    { bangla: "ছুড়ে ফেলা", english: "Throw" },
    { bangla: "ধরা", english: "Catch" },
    { bangla: "ধাক্কা দেওয়া", english: "Push" },
    { bangla: "টানা", english: "Pull" },
    { bangla: "উপরে তোলা", english: "Lift" },
    { bangla: "ফিসফিস করে বলা", english: "Whisper" },
    { bangla: "চিৎকার করা", english: "Shout" },
    { bangla: "হাসা", english: "Laugh" },
    { bangla: "মুচকি হাসা", english: "Smile" },
    { bangla: "কাঁদা", english: "Cry" },
    { bangla: "অভিযোগ করা", english: "Complain" },
    { bangla: "পরামর্শ দেওয়া", english: "Suggest" },
    { bangla: "উপদেশ দেওয়া", english: "Advise" },
    { bangla: "সতর্ক করা", english: "Warn" },
    { bangla: "বর্ণনা করা", english: "Describe" },
    { bangla: "আলোচনা করা", english: "Discuss" },
    { bangla: "উল্লেখ করা", english: "Mention" },
    { bangla: "পুনরাবৃত্তি করা", english: "Repeat" },
    { bangla: "উচ্চারণ করা", english: "Pronounce" },
    { bangla: "অনুবাদ করা", english: "Translate" },
    { bangla: "পরিচয় করিয়ে দেওয়া", english: "Introduce" },
    { bangla: "জানানো", english: "Inform" },
    { bangla: "অনুরোধ করা", english: "Request" },
    { bangla: "ক্ষমা চাওয়া", english: "Apologize" },
    { bangla: "শুভেচ্ছা জানানো", english: "Greet" },
    { bangla: "বিশ্বাস করা", english: "Believe" },
    { bangla: "বিশ্বাস", english: "Believe" },
    { bangla: "অনুমান করা", english: "Guess" },
    { bangla: "কল্পনা করা", english: "Imagine" },
    { bangla: "উপলব্ধি করা", english: "Realize" },
    { bangla: "চিনতে পারা", english: "Recognize" },
    { bangla: "সিদ্ধান্ত নেওয়া", english: "Decide" },
    { bangla: "বেছে নেওয়া", english: "Choose" },
    { bangla: "তুলনা করা", english: "Compare" },
    { bangla: "পরীক্ষা করা", english: "Check" },
    { bangla: "লক্ষ্য করা", english: "Notice" },
    { bangla: "আবিষ্কার করা", english: "Discover" },
    { bangla: "সমাধান করা", english: "Solve" },
    { bangla: "অনুশীলন করা", english: "Practice" },
    { bangla: "পুনরায় পড়া", english: "Revise" },
    { bangla: "মুখস্থ করা", english: "Memorize" },
    { bangla: "মনোযোগ দেওয়া", english: "Focus" },
    { bangla: "একাগ্র হওয়া", english: "Concentrate" },
    { bangla: "উন্নতি করা", english: "Improve" },
    { bangla: "বিকাশ করা", english: "Develop" },
    { bangla: "সফল হওয়া", english: "Succeed" },
    { bangla: "উদ্বিগ্ন", english: "Nervous" },
    { bangla: "আত্মবিশ্বাসী", english: "Confident" },
    { bangla: "লাজুক", english: "Shy" },
    { bangla: "ভদ্র", english: "Polite" },
    { bangla: "অভদ্র", english: "Rude" },
    { bangla: "দয়ালু", english: "Kind" },
    { bangla: "সৎ", english: "Honest" },
    { bangla: "ধৈর্যশীল", english: "Patient" },
    { bangla: "অধৈর্য", english: "Impatient" },
    { bangla: "কৌতূহলী", english: "Curious" },
    { bangla: "ঈর্ষান্বিত", english: "Jealous" },
    { bangla: "গর্বিত", english: "Proud" },
    { bangla: "অপরাধবোধে ভোগা", english: "Guilty" },
    { bangla: "নিঃসঙ্গ", english: "Lonely" },
    { bangla: "অবাক", english: "Surprised" },
    { bangla: "হতাশ", english: "Disappointed" },
    { bangla: "বিব্রত", english: "Embarrassed" },
    { bangla: "শান্ত", english: ["Calm", "Quiet"] },
    { bangla: "গম্ভীর", english: "Serious" },
    { bangla: "বন্ধুত্বপূর্ণ", english: "Friendly" },
    { bangla: "সম্প্রতি", english: "Recently" },
    { bangla: "সম্প্রতি / কিছুদিন আগে", english: "Recently" },
    { bangla: "আজকাল", english: "Nowadays" },
    { bangla: "পূর্বে", english: "Previously" },
    { bangla: "অবশেষে", english: "Finally" },
    { bangla: "শেষ পর্যন্ত", english: "Eventually" },
    { bangla: "পরিশেষে", english: "Eventually" },
    { bangla: "কদাচিৎ", english: "Rarely" },
    { bangla: "খুব কম", english: "Seldom" },
    { bangla: "ঘন ঘন", english: "Frequently" },
    { bangla: "মাঝে মাঝে", english: "Occasionally" },
    { bangla: "প্রতিদিন", english: "Daily" },
    { bangla: "সাপ্তাহিক", english: "Weekly" },
    { bangla: "মাসিক", english: "Monthly" },
    { bangla: "চিরকাল", english: "Forever" },
    { bangla: "সাময়িকভাবে", english: "Temporarily" },
    { bangla: "সঙ্গে সঙ্গে", english: "Immediately" },
    { bangla: "এদিকে / ইতিমধ্যে", english: "Meanwhile" },
    { bangla: "যখনই", english: "Whenever" },
    { bangla: "ক্রয় করা", english: "Purchase" },
    { bangla: "বিক্রি করা", english: "Sell" },
    { bangla: "খরচ করা", english: "Spend" },
    { bangla: "সঞ্চয় করা", english: "Save" },
    { bangla: "দাম হওয়া", english: "Cost" },
    { bangla: "মূল্য", english: "Price" },
    { bangla: "সস্তা", english: "Cheap" },
    { bangla: "দামি", english: "Expensive" },
    { bangla: "ছাড়", english: "Discount" },
    { bangla: "দরদাম করা", english: "Bargain" },
    { bangla: "বদল করা", english: "Exchange" },
    { bangla: "ফেরত দেওয়া", english: "Return" },
    { bangla: "টাকা ফেরত", english: "Refund" },
    { bangla: "রসিদ", english: "Receipt" },
    { bangla: "নগদ টাকা", english: "Cash" },
    { bangla: "ভাংতি টাকা", english: "Change" },
    { bangla: "মানিব্যাগ", english: "Wallet" },
    { bangla: "ধার নেওয়া", english: "Borrow" },
    { bangla: "ধার দেওয়া", english: "Lend" },
    { bangla: "ঋণী থাকা", english: "Owe" },
    { bangla: "বালিশ", english: "Pillow" },
    { bangla: "কম্বল", english: "Blanket" },
    { bangla: "তোশক", english: "Mattress" },
    { bangla: "পর্দা", english: "Curtain" },
    { bangla: "তাক", english: "Shelf" },
    { bangla: "ড্রয়ার", english: "Drawer" },
    { bangla: "বালতি", english: "Bucket" },
    { bangla: "মগ", english: "Mug" },
    { bangla: "পানির কল", english: ["Tap", "Faucet"] },
    { bangla: "ঝাড়ু", english: "Broom" },
    { bangla: "ময়লার ঝুড়ি", english: "Dustbin" },
    { bangla: "তোয়ালে", english: "Towel" },
    { bangla: "টিস্যু", english: "Tissue" },
    { bangla: "কাঁচি", english: "Scissors" },
    { bangla: "সুই", english: "Needle" },
    { bangla: "সুতা", english: "Thread" },
    { bangla: "দড়ি", english: "Rope" },
    { bangla: "কৌটা", english: "Container" },
    { bangla: "ঢাকনা", english: "Lid" },
    { bangla: "ভ্রমণ", english: "Journey" },
    { bangla: "গন্তব্য", english: "Destination" },
    { bangla: "যানজট / যানবাহন চলাচল", english: "Traffic" },
    { bangla: "যাত্রী", english: "Passenger" },
    { bangla: "চালক", english: "Driver" },
    { bangla: "ভাড়া", english: "Fare" },
    { bangla: "পথ", english: "Route" },
    { bangla: "দিকনির্দেশনা", english: "Direction" },
    { bangla: "কাছাকাছি", english: "Nearby" },
    { bangla: "দূরবর্তী", english: "Faraway" },
    { bangla: "পার হওয়া", english: "Cross" },
    { bangla: "মোড় নেওয়া", english: "Turn" },
    { bangla: "পৌঁছানো", english: ["Reach", "Arrive"] },
    { bangla: "মিস করা", english: "Miss" },
    { bangla: "যানবাহনে ওঠা", english: "Board" },
    { bangla: "রওনা হওয়া", english: "Depart" },
    { bangla: "দেরি হওয়া", english: "Delay" },
    { bangla: "বাতিল করা", english: "Cancel" },
    { bangla: "সংরক্ষণ করা", english: "Reserve" },
    { bangla: "অনুসন্ধান করা", english: "Explore" },
    { bangla: "সুন্দর", english: "Beautiful" },
    { bangla: "কুৎসিত", english: "Ugly" },
    { bangla: "চালাক", english: "Clever" },
    { bangla: "বোকা", english: "Stupid" },
    { bangla: "সাহসী", english: "Brave" },
    { bangla: "দুর্বল", english: "Weak" },
    { bangla: "শক্তিশালী", english: "Strong" },
    { bangla: "মসৃণ", english: "Smooth" },
    { bangla: "অমসৃণ", english: "Rough" },
    { bangla: "ভারী", english: "Heavy" },
    { bangla: "হালকা", english: "Light" },
    { bangla: "খালি", english: "Empty" },
    { bangla: "পূর্ণ", english: "Full" },
    { bangla: "ভিড়পূর্ণ", english: "Crowded" },
    { bangla: "শান্ত", english: "Quiet" },
    { bangla: "কোলাহলপূর্ণ", english: "Noisy" },
    { bangla: "তাজা", english: "Fresh" },
    { bangla: "বাসি", english: "Stale" },
    { bangla: "একই রকম", english: "Similar" },
    { bangla: "সাধারণ", english: "Common" },
    { bangla: "অনুমতি দেওয়া", english: "Allow" },
    { bangla: "এড়িয়ে চলা", english: "Avoid" },
    { bangla: "গ্রহণ করা", english: "Accept" },
    { bangla: "প্রত্যাখ্যান করা", english: ["Reject", "Refuse"] },
    { bangla: "নির্ভর করা", english: "Depend" },
    { bangla: "আশা করা", english: "Expect" },
    { bangla: "বেশি পছন্দ করা", english: "Prefer" },
    { bangla: "সুপারিশ করা", english: "Recommend" },
    { bangla: "রক্ষা করা", english: "Protect" },
    { bangla: "প্রতিরোধ করা", english: "Prevent" },
    { bangla: "প্রয়োজন হওয়া", english: "Require" },
    { bangla: "প্রস্তাব দেওয়া", english: "Offer" },
    { bangla: "পরিচালনা করা", english: "Manage" },
    { bangla: "অপচয় করা", english: "Waste" },
    { bangla: "উপার্জন করা", english: "Earn" },
    { bangla: "ঘটা", english: "Happen" },
    { bangla: "দেখা দেওয়া", english: "Appear" },
    { bangla: "অদৃশ্য হওয়া", english: "Disappear" },
    { bangla: "চালিয়ে যাওয়া", english: "Continue" },
    { bangla: "মনে করিয়ে দেওয়া", english: "Remind" },
    { bangla: "প্রয়োজন", english: "Need" },
    { bangla: "চাই", english: "Want" },
    { bangla: "আছে / থাকা", english: "Have" },
    { bangla: "দেওয়া", english: "Give" },
    { bangla: "নেওয়া", english: "Take" },
    { bangla: "পাওয়া", english: "Get" },
    { bangla: "রাখা", english: "Keep" },
    { bangla: "তৈরি করা", english: "Make" },
    { bangla: "করা", english: "Do" },
    { bangla: "ব্যবহার করা", english: "Use" },
    { bangla: "জানা", english: "Know" },
    { bangla: "চিন্তা করা", english: "Think" },
    { bangla: "বোঝা", english: "Understand" },
    { bangla: "মনে রাখা", english: "Remember" },
    { bangla: "ভুলে যাওয়া", english: "Forget" },
    { bangla: "শেখা", english: "Learn" },
    { bangla: "শেখানো", english: "Teach" },
    { bangla: "চেষ্টা করা", english: "Try" },
    { bangla: "সাহায্য করা", english: "Help" },
    { bangla: "অপেক্ষা করা", english: "Wait" },
    { bangla: "ঘুম থেকে ওঠা", english: "Wake up" },
    { bangla: "ঘুমানো", english: "Sleep" },
    { bangla: "খাওয়া", english: "Eat" },
    { bangla: "পান করা", english: "Drink" },
    { bangla: "রান্না করা", english: "Cook" },
    { bangla: "ধোয়া", english: "Wash" },
    { bangla: "পরিষ্কার করা", english: "Clean" },
    { bangla: "পরিধান করা", english: "Wear" },
    { bangla: "পরিবর্তন করা", english: "Change" },
    { bangla: "খোলা", english: "Open" },
    { bangla: "বন্ধ করা", english: "Close" },
    { bangla: "শুরু করা", english: "Start" },
    { bangla: "শেষ করা", english: "Finish" },
    { bangla: "থামা", english: "Stop" },
    { bangla: "চলে যাওয়া", english: "Leave" },
    { bangla: "পৌঁছানো", english: ["Arrive", "Reach"] },
    { bangla: "হাঁটা", english: "Walk" },
    { bangla: "দৌড়ানো", english: "Run" },
    { bangla: "বসা", english: "Sit" },
    { bangla: "দাঁড়ানো", english: "Stand" },
    { bangla: "বলা", english: "Say" },
    { bangla: "কাউকে বলা", english: "Tell" },
    { bangla: "কথা বলা", english: "Speak" },
    { bangla: "আলাপ করা", english: "Talk" },
    { bangla: "জিজ্ঞাসা করা", english: "Ask" },
    { bangla: "উত্তর দেওয়া", english: "Answer" },
    { bangla: "ফোন করা / ডাকা", english: "Call" },
    { bangla: "জবাব দেওয়া", english: "Reply" },
    { bangla: "ব্যাখ্যা করা", english: "Explain" },
    { bangla: "মন দিয়ে শোনা", english: "Listen" },
    { bangla: "শুনতে পাওয়া", english: "Hear" },
    { bangla: "দেখানো", english: "Show" },
    { bangla: "দেখা করা", english: "Meet" },
    { bangla: "আমন্ত্রণ জানানো", english: "Invite" },
    { bangla: "একমত হওয়া", english: "Agree" },
    { bangla: "প্রত্যাখ্যান করা", english: ["Refuse", "Reject"] },
    { bangla: "প্রতিশ্রুতি দেওয়া", english: "Promise" },
    { bangla: "ভাগ করে নেওয়া", english: "Share" },
    { bangla: "ধন্যবাদ দেওয়া", english: "Thank" },
    { bangla: "খুশি", english: "Happy" },
    { bangla: "দুঃখিত", english: "Sad" },
    { bangla: "রাগান্বিত", english: "Angry" },
    { bangla: "ক্লান্ত", english: "Tired" },
    { bangla: "ব্যস্ত", english: "Busy" },
    { bangla: "অবসর / মুক্ত", english: "Free" },
    { bangla: "ভীত", english: "Afraid" },
    { bangla: "চিন্তিত", english: "Worried" },
    { bangla: "উচ্ছ্বসিত", english: "Excited" },
    { bangla: "বিরক্ত", english: "Bored" },
    { bangla: "ক্ষুধার্ত", english: "Hungry" },
    { bangla: "তৃষ্ণার্ত", english: "Thirsty" },
    { bangla: "অসুস্থ", english: "Sick" },
    { bangla: "অলস", english: "Lazy" },
    { bangla: "আরামদায়ক", english: "Comfortable" },
    { bangla: "যথেষ্ট", english: "Enough" },
    { bangla: "প্রায়", english: "Almost" },
    { bangla: "ইতিমধ্যে", english: "Already" },
    { bangla: "এখনও", english: "Still" },
    { bangla: "হয়তো", english: "Maybe" },
    { bangla: "সত্যিই", english: "Really" },
    { bangla: "আসলে", english: "Actually" },
    { bangla: "সাধারণত", english: "Usually" },
    { bangla: "হঠাৎ", english: "Suddenly" },
    { bangla: "অবিলম্বে", english: "Immediately" },
    { bangla: "একসঙ্গে", english: "Together" },
    { bangla: "একা", english: "Alone" },
    { bangla: "কোথাও", english: "Somewhere" },
    { bangla: "সর্বত্র", english: "Everywhere" },
    { bangla: "কিছুই না", english: "Nothing" },
    { bangla: "কিছু একটা", english: "Something" },
    { bangla: "যেকোনো কিছু", english: "Anything" },
    { bangla: "সবকিছু", english: "Everything" },
    { bangla: "গুরুত্বপূর্ণ", english: "Important" },
    { bangla: "কঠিন", english: "Difficult" },
    { bangla: "সহজ", english: "Easy" },
    { bangla: "সম্ভব", english: "Possible" },
    { bangla: "প্রয়োজনীয়", english: "Necessary" },
    { bangla: "ভিন্ন", english: "Different" },
    { bangla: "পাওয়া যায় / উপলব্ধ", english: "Available" },
    { bangla: "সুযোগ", english: "Opportunity" }
];



let questions = [];
let currentQuestion = 0;
let score = 0;
let answered = false;



function showPage(page) {
    home.style.display = page === "home" ? "block" : "none";
    exam.style.display = page === "exam" ? "flex" : "none";
    resultPage.style.display = page === "result" ? "block" : "none";
}


function shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}


function getAnswers(word) {
    return Array.isArray(word.english) ? word.english : [word.english];
}


function clean(text) {
    return text.trim().toLowerCase().replace(/\s+/g, " ");
}

showPage("home");
input.max = words.length;
input.placeholder = "Enter number (max " + words.length + ")";
input.focus();



function startExam() {
    const number = Number(input.value);

    if (!Number.isInteger(number) || number < 1) {
        alert("Please enter a valid number!");
        return;
    }
    if (number > words.length) {
        alert("Only " + words.length + " words are available!");
        return;
    }

    questions = shuffle(words).slice(0, number);
    currentQuestion = 0;
    score = 0;

    showPage("exam");
    showQuestion();
}

startBtn.addEventListener("click", startExam);



function showQuestion() {
    answered = false;

    questionEl.innerText = questions[currentQuestion].bangla;
    progressEl.innerText =
        "Question " + (currentQuestion + 1) + " of " + questions.length;

    answerInput.value = "";
    answerInput.readOnly = false;
    answerInput.focus();

    resultEl.innerText = "";
    checkBtn.style.display = "inline-block";
    nextBtn.style.display = "none";
}



function checkAnswer() {
    if (answered) return;

    const userAnswer = clean(answerInput.value);
    const answers = getAnswers(questions[currentQuestion]);

    if (userAnswer === "") {
        alert("Please write your answer!");
        return;
    }

    answered = true;

    const isCorrect = answers.some(function (a) {
        return clean(a) === userAnswer;
    });

    if (isCorrect) {
        score++;
        resultEl.innerText = "Correct Answer!";
        resultEl.style.color = "green";
    } else {
        resultEl.innerText = "Wrong! Correct answer: " + answers.join(" / ");
        resultEl.style.color = "red";
    }

    answerInput.readOnly = true;
    checkBtn.style.display = "none";
    nextBtn.style.display = "inline-block";
}

checkBtn.addEventListener("click", checkAnswer);



function nextQuestion() {
    currentQuestion++;

    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

nextBtn.addEventListener("click", nextQuestion);



function showResult() {
    showPage("result");
    scoreEl.innerText = "Your Score: " + score + " / " + questions.length;
}



newExamBtn.addEventListener("click", function () {
    input.value = "";
    showPage("home");
    input.focus();
});



document.addEventListener("keydown", function (e) {
    if (e.key !== "Enter") return;
    e.preventDefault();

    if (home.style.display !== "none") {
        startExam();
    } else if (exam.style.display !== "none") {
        if (answered) {
            nextQuestion();
        } else {
            checkAnswer();
        }
    } else if (resultPage.style.display !== "none") {
        newExamBtn.click();
    }
});