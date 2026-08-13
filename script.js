const courses = {
  beginner: {
    title: "Start Speaking",
    meta: ["Beginner", "2 months", "₹4,500", "Online + Offline"],
    body: "Daily English. Simple sentences. You become a confident beginner speaker.",
    points: [
      "Self-intro and daily conversation",
      "Think in English, not translate",
      "Live correction in every class",
      "Online and offline batches",
    ],
    wa: "Hi Niel Sir, I want the 2 month Beginner batch for ₹4,500.",
  },
  fluency: {
    title: "Fluency",
    meta: ["Most chosen", "4 months", "₹8,000", "Conversation + work"],
    body: "Speak in college, interviews, and work without freezing.",
    points: [
      "Longer conversations and opinions",
      "Interview and meeting English",
      "Grammar inside speaking",
      "Weekly speaking review",
    ],
    wa: "Hi Niel Sir, I want the 4 month Fluency batch for ₹8,000.",
  },
  mastery: {
    title: "Spoken Mastery",
    meta: ["Complete", "6 months", "₹11,000", "Full path"],
    body: "Pronunciation, interviews, and public speaking — the complete path.",
    points: [
      "Everything in Beginner + Fluency",
      "Pronunciation and clarity",
      "Public speaking practice",
      "Professional English for work",
    ],
    wa: "Hi Niel Sir, I want the 6 month Spoken Mastery batch for ₹11,000.",
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

document.getElementById("intro-video").addEventListener("click", () => {
  modalContent.innerHTML = `
    <div class="video-modal">
      <img src="images/niel-portrait.jpeg" alt="Niel Sir intro placeholder" />
      <div class="meta-row"><span>Demo template</span><span>Intro video</span></div>
      <h3>Intro video yahan aayegi</h3>
      <p>Yahan Niel Sir ka short intro / funnel video lagega. Abhi yeh placeholder hai — real video aate hi play ho jayega.</p>
      <a class="btn btn-gold" href="https://wa.me/918077055669?text=${encodeURIComponent(
        "Hi Niel Sir, I want to join after the intro."
      )}">WhatsApp now</a>
    </div>
  `;
  modal.showModal();
});

document.querySelectorAll("[data-open]").forEach((btn) => {
  btn.addEventListener("click", () => {
    const data = courses[btn.dataset.open];
    if (!data) return;
    modalContent.innerHTML = `
      <div class="meta-row">${data.meta.map((m) => `<span>${m}</span>`).join("")}</div>
      <h3>${data.title}</h3>
      <p>${data.body}</p>
      <ul>${data.points.map((p) => `<li>${p}</li>`).join("")}</ul>
      <a class="btn btn-gold" href="https://wa.me/918077055669?text=${encodeURIComponent(data.wa)}">Join this batch</a>
    `;
    modal.showModal();
  });
});

const row = document.getElementById("voices-row");
const dots = document.getElementById("voice-dots");
if (row && dots) {
  const cards = [...row.querySelectorAll("figure")];
  cards.forEach((_, i) => {
    const d = document.createElement("span");
    if (i === 0) d.classList.add("on");
    dots.appendChild(d);
  });
  row.addEventListener("scroll", () => {
    const i = Math.round(row.scrollLeft / cards[0].offsetWidth);
    dots.querySelectorAll("span").forEach((d, n) => d.classList.toggle("on", n === i));
  }, { passive: true });
}

document.getElementById("lead-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const form = new FormData(e.target);
  const text = `Hi Niel Sir, I am ${form.get("name")}. I am a ${form.get(
    "who"
  )}. I want ${form.get("course")}.`;
  window.location.href = `https://wa.me/918077055669?text=${encodeURIComponent(text)}`;
});
