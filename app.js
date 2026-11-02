// Logic điều khiển giao diện web ôn tập Sinh học 8 KNTT
// Hỗ trợ 3 phần trắc nghiệm chuẩn ma trận mới:
// - Phần 1: 12 câu nhiều lựa chọn (MCQ)
// - Phần 2: 4 câu đúng sai (mỗi câu gồm 4 lệnh hỏi a, b, c, d)
// - Phần 3: 4 câu trả lời ngắn (Short Answer)

let currentChapter = 7;
let currentLesson = null;
let quizState = {};

document.addEventListener("DOMContentLoaded", () => {
  initTabs();
  renderGrid();
  initModal();
});

function initTabs() {
  const tabs = document.querySelectorAll(".chapter-tab");
  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      currentChapter = parseInt(tab.dataset.chapter, 10);
      renderGrid();
    });
  });
}

function renderGrid() {
  const grid = document.getElementById("lesson-grid");
  grid.innerHTML = "";

  const filtered = LESSONS_DATA.filter(l => l.chapter === currentChapter);

  filtered.forEach(lesson => {
    const card = document.createElement("div");
    card.className = "lesson-card";

    const kwHtml = (lesson.keywords || [])
      .map(kw => `<span class="kw-tag">${kw}</span>`)
      .join("");

    card.innerHTML = `
      <div class="card-header">
        <div class="bai-num">BÀI ${lesson.id} · CHƯƠNG ${lesson.chapter}</div>
        <div class="bai-title">${lesson.title}</div>
      </div>
      <div class="card-body">
        <div class="card-keywords">${kwHtml}</div>
        <div class="card-actions">
          <button class="btn-theory" onclick="openTheory(${lesson.id})">📖 Lý thuyết</button>
          <button class="btn-quiz" onclick="openQuiz(${lesson.id})">✍️ Đề 20 câu</button>
        </div>
      </div>
    `;

    grid.appendChild(card);
  });
}

function openTheory(id) {
  const lesson = LESSONS_DATA.find(l => l.id === id);
  if (!lesson) return;

  const content = document.getElementById("modal-content");
  content.innerHTML = `
    <div class="theory-section">
      <div style="font-size: 0.85rem; font-weight:700; color:#388e3c; margin-bottom: 6px;">BÀI ${lesson.id}</div>
      <h2>${lesson.title}</h2>
      <div>${lesson.theory}</div>
      <div style="margin-top: 24px; text-align: center;">
        <button class="btn-quiz" style="padding: 10px 28px; font-size: 0.95rem;" onclick="openQuiz(${lesson.id})">
          ✍️ Làm bài trắc nghiệm 20 câu củng cố
        </button>
      </div>
    </div>
  `;
  showModal();
}

function openQuiz(id) {
  const lesson = LESSONS_DATA.find(l => l.id === id);
  if (!lesson) return;

  currentLesson = lesson;
  quizState = {
    part1: {}, // qIdx -> optIdx
    part2: {}, // qIdx -> { 0: bool, 1: bool, 2: bool, 3: bool }
    part3: {}  // qIdx -> { input: string, submitted: bool, correct: bool }
  };

  renderQuizUI();
  showModal();
}

function renderQuizUI() {
  const lesson = currentLesson;
  const content = document.getElementById("modal-content");
  const labels = ["A", "B", "C", "D"];

  // PHẦN 1: 12 CÂU NHIỀU LỰA CHỌN
  let p1Html = `<div class="quiz-type-title">PHẦN I: TRẮC NGHIỆM NHIỀU LỰA CHỌN (12 câu - Chọn 1 đáp án đúng)</div>`;
  lesson.part1.forEach((qItem, idx) => {
    const chosen = quizState.part1[idx];
    const isAnswered = chosen !== undefined;

    const optsHtml = qItem.opts.map((opt, oIdx) => {
      let optClass = "quiz-option";
      if (isAnswered) {
        optClass += " disabled";
        if (oIdx === qItem.a) optClass += " correct";
        else if (chosen === oIdx) optClass += " wrong";
      }
      return `
        <div class="${optClass}" onclick="selectPart1(${idx}, ${oIdx})">
          <span class="opt-label">${labels[oIdx]}</span>
          <span>${opt}</span>
        </div>
      `;
    }).join("");

    const expHtml = isAnswered ? `<div class="quiz-explain show">💡 <b>Giải thích:</b> ${qItem.exp}</div>` : "";

    p1Html += `
      <div class="quiz-question">
        <div class="question-text">Câu ${idx + 1}: ${qItem.q}</div>
        <div class="quiz-options">${optsHtml}</div>
        ${expHtml}
      </div>
    `;
  });

  // PHẦN 2: 4 CÂU ĐÚNG / SAI
  let p2Html = `<div class="quiz-type-title">PHẦN II: TRẮC NGHIỆM ĐÚNG/SAI (4 câu - Mỗi câu gồm 4 ý a, b, c, d)</div>`;
  lesson.part2.forEach((qItem, idx) => {
    const userAnswers = quizState.part2[idx] || {};

    let subRows = qItem.sub.map((subItem, sIdx) => {
      const subLabels = ["a", "b", "c", "d"];
      const userChoice = userAnswers[sIdx];
      const answered = userChoice !== undefined;

      let trueBtnClass = "btn-tf";
      let falseBtnClass = "btn-tf";

      if (userChoice === true) trueBtnClass += " active-true";
      if (userChoice === false) falseBtnClass += " active-false";

      let statusMsg = "";
      if (answered) {
        const isRight = (userChoice === subItem.a);
        statusMsg = isRight ? `<span style="color:#2e7d32; font-weight:700;">✓ Đúng</span>` : `<span style="color:#d32f2f; font-weight:700;">✗ Sai (Đáp án: ${subItem.a ? "Đúng" : "Sai"})</span>`;
      }

      return `
        <tr>
          <td style="width: 30px; font-weight: 700; text-align: center;">${subLabels[sIdx]})</td>
          <td>${subItem.text}</td>
          <td style="width: 140px; text-align: center;">
            <div class="tf-btn-group">
              <button class="${trueBtnClass}" onclick="selectPart2(${idx}, ${sIdx}, true)">Đúng</button>
              <button class="${falseBtnClass}" onclick="selectPart2(${idx}, ${sIdx}, false)">Sai</button>
            </div>
          </td>
          <td style="width: 130px; text-align: center; font-size: 0.8rem;">
            ${statusMsg}
          </td>
        </tr>
      `;
    }).join("");

    const expHtml = Object.keys(userAnswers).length === 4 ? `
      <div class="quiz-explain show" style="margin-top: 10px;">
        💡 <b>Giải thích chi tiết:</b> ${qItem.exp}
      </div>
    ` : "";

    p2Html += `
      <div class="quiz-question">
        <div class="question-text">Câu ${idx + 13}: ${qItem.statement}</div>
        <table class="tf-table">
          <thead>
            <tr>
              <th>Ý</th>
              <th>Phát biểu</th>
              <th>Học sinh chọn</th>
              <th>Kết quả</th>
            </tr>
          </thead>
          <tbody>
            ${subRows}
          </tbody>
        </table>
        ${expHtml}
      </div>
    `;
  });

  // PHẦN 3: 4 CÂU TRẢ LỜI NGẮN
  let p3Html = `<div class="quiz-type-title">PHẦN III: CÂU HỎI TRẢ LỜI NGẮN (4 câu - Nhập số hoặc cụm từ)</div>`;
  lesson.part3.forEach((qItem, idx) => {
    const qState = quizState.part3[idx] || { input: "", submitted: false };

    let resultHtml = "";
    if (qState.submitted) {
      if (qState.correct) {
        resultHtml = `<div class="short-result correct">✓ Chính xác! Đáp án đúng: <b>${qItem.a}</b></div>`;
      } else {
        resultHtml = `<div class="short-result wrong">✗ Chưa đúng! Đáp án chuẩn: <b>${qItem.a}</b> (Bạn trả lời: "${qState.input}")</div>`;
      }
      resultHtml += `<div class="quiz-explain show">💡 <b>Giải thích:</b> ${qItem.exp}</div>`;
    }

    p3Html += `
      <div class="quiz-question">
        <div class="question-text">Câu ${idx + 17}: ${qItem.q}</div>
        <div class="short-input-row">
          <input type="text" id="short-input-${idx}" class="short-input" placeholder="Nhập đáp án của em..." value="${qState.input}" ${qState.submitted ? "disabled" : ""} onkeypress="if(event.key==='Enter') submitPart3(${idx})" />
          <button class="short-submit-btn" onclick="submitPart3(${idx})" ${qState.submitted ? "disabled style='opacity:0.6'" : ""}>Kiểm tra</button>
        </div>
        ${resultHtml}
      </div>
    `;
  });

  // TỔNG HỢP KẾT QUẢ ĐIỂM
  const p1Done = Object.keys(quizState.part1).length;
  let p1Correct = 0;
  lesson.part1.forEach((q, i) => { if (quizState.part1[i] === q.a) p1Correct++; });

  let p2SubTotal = 0;
  let p2SubCorrect = 0;
  lesson.part2.forEach((q, i) => {
    const userAnswers = quizState.part2[i] || {};
    q.sub.forEach((sub, sIdx) => {
      if (userAnswers[sIdx] !== undefined) {
        p2SubTotal++;
        if (userAnswers[sIdx] === sub.a) p2SubCorrect++;
      }
    });
  });

  const p3Done = Object.keys(quizState.part3).filter(k => quizState.part3[k].submitted).length;
  let p3Correct = 0;
  lesson.part3.forEach((q, i) => { if (quizState.part3[i] && quizState.part3[i].correct) p3Correct++; });

  const totalQuestionsDone = p1Done + (p2SubTotal === 16 ? 4 : Math.floor(p2SubTotal / 4)) + p3Done;

  let finalBanner = "";
  if (p1Done === 12 && p2SubTotal === 16 && p3Done === 4) {
    // Tính theo thang điểm 10 chuẩn
    // Phần 1: 12 câu = 3.0 điểm (mỗi câu 0.25đ)
    const scoreP1 = p1Correct * 0.25;
    // Phần 2: 4 câu = 4.0 điểm (mỗi ý 0.25đ)
    const scoreP2 = p2SubCorrect * 0.25;
    // Phần 3: 4 câu = 3.0 điểm (mỗi câu 0.75đ)
    const scoreP3 = p3Correct * 0.75;
    const finalScore = (scoreP1 + scoreP2 + scoreP3).toFixed(2);

    finalBanner = `
      <div class="final-score">
        <h3>🎉 HOÀN THÀNH TOÀN BỘ 20 CÂU</h3>
        <p style="font-size: 1.25rem; font-weight:800; margin: 10px 0;">Tổng điểm: ${finalScore} / 10.0 điểm</p>
        <p>• Phần I (Nhiều lựa chọn): Đúng ${p1Correct}/12 câu (+${scoreP1.toFixed(2)}đ)</p>
        <p>• Phần II (Đúng/Sai): Đúng ${p2SubCorrect}/16 ý (+${scoreP2.toFixed(2)}đ)</p>
        <p>• Phần III (Trả lời ngắn): Đúng ${p3Correct}/4 câu (+${scoreP3.toFixed(2)}đ)</p>
        <button class="btn-restart" style="margin-top: 16px; background:#fff; color:#1b5e20;" onclick="openQuiz(${lesson.id})">
          🔄 Làm lại toàn bộ đề 20 câu
        </button>
      </div>
    `;
  }

  content.innerHTML = `
    <div class="quiz-section">
      <div style="font-size: 0.85rem; font-weight:700; color:#388e3c; margin-bottom: 4px;">ĐỀ ÔN TẬP 20 CÂU THEO MA TRẬN MỚI · BÀI ${lesson.id}</div>
      <h2>${lesson.title}</h2>
      <div class="quiz-score-bar">Tiến độ làm bài: P1: ${p1Done}/12 · P2: ${p2SubTotal}/16 ý · P3: ${p3Done}/4</div>
      ${p1Html}
      ${p2Html}
      ${p3Html}
      ${finalBanner}
    </div>
  `;
}

function selectPart1(qIdx, oIdx) {
  if (quizState.part1[qIdx] !== undefined) return;
  quizState.part1[qIdx] = oIdx;
  renderQuizUI();
}

function selectPart2(qIdx, sIdx, val) {
  if (!quizState.part2[qIdx]) quizState.part2[qIdx] = {};
  quizState.part2[qIdx][sIdx] = val;
  renderQuizUI();
}

function submitPart3(idx) {
  const inputEl = document.getElementById(`short-input-${idx}`);
  if (!inputEl) return;
  const rawVal = inputEl.value.trim();
  if (!rawVal) {
    alert("Vui lòng nhập câu trả lời trước khi kiểm tra!");
    return;
  }

  const lesson = currentLesson;
  const qItem = lesson.part3[idx];

  // Chuẩn hóa so sánh chuỗi (bỏ dấu cách thừa, chuyển về chữ thường)
  const normInput = rawVal.toLowerCase().replace(/\s+/g, " ");
  const normAns = String(qItem.a).toLowerCase().replace(/\s+/g, " ");

  // Cho phép so khớp nếu có các từ khóa đồng nghĩa
  let isCorrect = (normInput === normAns);
  if (!isCorrect && qItem.accept && Array.isArray(qItem.accept)) {
    isCorrect = qItem.accept.some(acc => normInput === String(acc).toLowerCase().trim());
  }

  quizState.part3[idx] = {
    input: rawVal,
    submitted: true,
    correct: isCorrect
  };

  renderQuizUI();
}

function showModal() {
  document.getElementById("modal-overlay").classList.remove("hidden");
  document.body.style.overflow = "hidden";
}

function hideModal() {
  document.getElementById("modal-overlay").classList.add("hidden");
  document.body.style.overflow = "auto";
}

function initModal() {
  const overlay = document.getElementById("modal-overlay");
  const closeBtn = document.getElementById("modal-close-btn");

  closeBtn.addEventListener("click", hideModal);
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) hideModal();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") hideModal();
  });
}
