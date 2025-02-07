const questions = [
    { question: "ما هو أول مسجد بني في الإسلام؟", answers: ["المسجد الحرام", "مسجد قباء", "المسجد النبوي"], correct: 1 },
    { question: "كم عدد الصلوات المفروضة في اليوم؟", answers: ["ثلاث صلوات", "خمس صلوات", "سبع صلوات"], correct: 1 },
    { question: "من هو خاتم الأنبياء؟", answers: ["موسى عليه السلام", "عيسى عليه السلام", "محمد صلى الله عليه وسلم"], correct: 2 },
    { question: "ما هي السورة التي تعدل ثلث القرآن؟", answers: ["سورة الفاتحة", "سورة الإخلاص", "سورة البقرة"], correct: 1 },
    { question: "كم عدد أركان الإسلام؟", answers: ["خمسة", "ستة", "أربعة"], correct: 0 },
    { question: "ما هو الركن الأول من أركان الإسلام؟", answers: ["الصلاة", "الشهادتان", "الحج"], correct: 1 },
    { question: "في أي شهر يصوم المسلمون؟", answers: ["رجب", "شعبان", "رمضان"], correct: 2 },
    { question: "كم عدد سور القرآن الكريم؟", answers: ["114", "110", "120"], correct: 0 },
    { question: "ما هي أطول سورة في القرآن الكريم؟", answers: ["سورة آل عمران", "سورة البقرة", "سورة النساء"], correct: 1 },
    { question: "ما هو اسم والدة النبي محمد صلى الله عليه وسلم؟", answers: ["آمنة بنت وهب", "خديجة بنت خويلد", "حفصة بنت عمر"], correct: 0 }
];

let currentLevel = parseInt(localStorage.getItem("currentLevel") || "0");

// Check if all levels are completed
if (currentLevel >= questions.length) {
    alert("🎉 Félicitations ! Vous avez complété tous les niveaux ! 🎉");
    localStorage.setItem("currentLevel", "0"); // Reset progress
    window.location.href = "index.html"; // Redirect to main menu
}

const questionText = document.getElementById("question-text");
const option1 = document.getElementById("option1");
const option2 = document.getElementById("option2");
const option3 = document.getElementById("option3");

const currentQuestion = questions[currentLevel];
questionText.innerText = currentQuestion.question;
option1.innerText = currentQuestion.answers[0];
option2.innerText = currentQuestion.answers[1];
option3.innerText = currentQuestion.answers[2];


function checkAnswer(selectedIndex) {
    if (selectedIndex === currentQuestion.correct) {
        localStorage.setItem("currentLevel", currentLevel + 1);
        if(currentLevel + 1 >= questions.length){
            alert("🎉 Félicitations ! Vous avez complété tous les niveaux ! 🎉");
            localStorage.setItem("currentLevel","0");
            window.location.href = "index.html";
        } else {
                 window.location.href = "winpage.html";
               }
    }
     else {
        window.location.href = "lostpage.html";
    }
}
option1.addEventListener("click", () => checkAnswer(0));
option2.addEventListener("click", () => checkAnswer(1));
option3.addEventListener("click", () => checkAnswer(2));
