const courses = {
  foundation: {
    title: "Spoken English Foundation",
    meta: ["Beginner", "8 weeks", "Online + Offline", "Students"],
    body: "For learners who understand some English but freeze while speaking. You build a daily talking habit.",
    points: [
      "Week 1–2: Self-intro, daily life, 150 ready sentences",
      "Week 3–4: Questions, opinions, and thinking in English",
      "Week 5–6: Storytelling, phone talk, college situations",
      "Week 7–8: Fluency drills + personal correction report",
      "Outcome: speak about your day without long pauses",
    ],
  },
  professional: {
    title: "Professional English",
    meta: ["Working people", "6 weeks", "Mostly online", "Meetings & clients"],
    body: "Workplace English that sounds natural in stand-ups, client calls, and presentations.",
    points: [
      "Meetings: agree, disagree, and interrupt politely",
      "Emails that sound clear, not copied",
      "Client calls and status updates",
      "Short presentations with structure",
      "Outcome: you stop translating Hindi in your head at work",
    ],
  },
  interview: {
    title: "Interview English",
    meta: ["Job ready", "4 weeks", "1:1 or small group", "Mock interviews"],
    body: "Answer like a professional — not like a memorised paragraph.",
    points: [
      "Tell me about yourself, strengths, gaps — rebuilt",
      "HR + technical speaking frames",
      "Body language and pace",
      "3 recorded mock interviews with feedback",
      "Outcome: answers that sound like you, in clear English",
    ],
  },
  pronunciation: {
    title: "Pronunciation Clinic",
    meta: ["All levels", "4 weeks", "Sounds & stress", "Clarity"],
    body: "People should understand you the first time. This batch trains the mouth, not only the mind.",
    points: [
      "Vowel and consonant sounds that Indian speakers mix",
      "Word stress and sentence music",
      "Common word list from your job or college",
      "Daily 10-minute voice notes",
      "Outcome: clearer, more confident speech",
    ],
  },
  speaking: {
    title: "Public Speaking Lab",
    meta: ["Stage", "6 weeks", "Students + professionals", "Performance"],
    body: "From freezing on stage to holding a 3–5 minute talk with a beginning, middle, and end.",
    points: [
      "How to open a talk without panic",
      "Story structure and examples",
      "Voice, pause, and eye contact",
      "Weekly stage time (online or offline)",
      "Outcome: one polished talk you can actually deliver",
    ],
  },
};

const toggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".nav-links");
toggle.addEventListener("click", () => {
  const open = links.classList.toggle("open");
  toggle.setAttribute("aria-expanded", String(open));
});
links.querySelectorAll("a").forEach((a) =>
  a.addEventListener("click", () => links.classList.remove("open"))
);

const modal = document.getElementById("course-modal");
const modalContent = document.getElementById("modal-content");

document.querySelectorAll("[data-open]").forEach((btn) => {
  btn.addEventListener("click", () => {
    const data = courses[btn.dataset.open];
    if (!data) return;
    modalContent.innerHTML = `
      <div class="meta-row">${data.meta.map((m) => `<span>${m}</span>`).join("")}</div>
      <h3>${data.title}</h3>
      <p>${data.body}</p>
      <ul>${data.points.map((p) => `<li>${p}</li>`).join("")}</ul>
      <a class="btn btn-gold" href="https://wa.me/918077055669?text=${encodeURIComponent(
        "Hi Niel Sir, I want details for " + data.title
      )}">Ask about this batch</a>
    `;
    modal.showModal();
  });
});

document.getElementById("lead-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const form = new FormData(e.target);
  const text = `Hi Niel Sir, I am ${form.get("name")}. I am a ${form.get(
    "who"
  )}. I prefer ${form.get("mode")} classes. I want a Spoken English demo.`;
  window.location.href = `https://wa.me/918077055669?text=${encodeURIComponent(text)}`;
});
