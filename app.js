(() => {
  "use strict";

  const CATS = window.CATEGORIES;
  const CAT = Object.fromEntries(CATS.map(c => [c.id, c]));
  const ALL_Q = CATS.flatMap(c => c.questions.map((q, i) => ({ ...q, id: `${c.id}:${i}`, cat: c.id })));
  const Q_BY_ID = Object.fromEntries(ALL_Q.map(q => [q.id, q]));
  const SECONDS = 20;
  const XP_PER_LEVEL = 150;
  const TITLES = ["Începător", "Curios", "Explorator", "Cunoscător", "Erudit", "Savant", "Enciclopedie vie"];
  const KEYS = ["A", "B", "C", "D"];

  // ---------- Storage (sigur, merge și fără localStorage) ----------
  const STORE_KEY = "catalog360-cg-v1";
  const defaults = () => ({
    xp: 0, streak: 0, lastDay: null, answered: 0, correct: 0, quizzes: 0, perfect: 0,
    perCat: {}, learned: {}, mistakes: [], daily: null, bestStreakInQuiz: 0
  });
  let S = defaults();
  try { S = { ...defaults(), ...JSON.parse(localStorage.getItem(STORE_KEY) || "{}") }; } catch (_) {}
  const save = () => { try { localStorage.setItem(STORE_KEY, JSON.stringify(S)); } catch (_) {} };

  // ---------- Utilitare ----------
  const $ = sel => document.querySelector(sel);
  const app = $("#app");
  const esc = s => String(s).replace(/[&<>"']/g, ch => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[ch]));
  const today = () => new Date().toLocaleDateString("sv-SE"); // YYYY-MM-DD local
  const dayDiff = (a, b) => Math.round((new Date(b) - new Date(a)) / 86400000);
  const shuffle = (arr, rnd = Math.random) => {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(rnd() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
    return a;
  };
  const seeded = seedStr => {
    let h = 2166136261;
    for (const ch of seedStr) h = Math.imul(h ^ ch.charCodeAt(0), 16777619);
    return () => { h ^= h << 13; h ^= h >>> 17; h ^= h << 5; return ((h >>> 0) % 100000) / 100000; };
  };
  const level = () => Math.floor(S.xp / XP_PER_LEVEL) + 1;
  const title = () => TITLES[Math.min(level() - 1, TITLES.length - 1)];
  const pct = (a, b) => (b ? Math.round((a / b) * 100) : 0);
  const catStats = id => S.perCat[id] || { answered: 0, correct: 0 };
  const learnedCount = id => CAT[id].lessons.filter((_, i) => S.learned[`${id}:${i}`]).length;
  const catProgress = id => {
    const c = CAT[id];
    const learned = learnedCount(id) / c.lessons.length;
    const st = catStats(id);
    const mastered = Math.min(st.correct / c.questions.length, 1);
    return Math.round((learned * 0.4 + mastered * 0.6) * 100);
  };

  function toast(msg) {
    const t = document.createElement("div");
    t.className = "toast"; t.textContent = msg; t.setAttribute("role", "status");
    document.body.appendChild(t);
    setTimeout(() => t.remove(), 2200);
  }

  function touchStreak() {
    const d = today();
    if (S.lastDay === d) return;
    S.streak = S.lastDay && dayDiff(S.lastDay, d) === 1 ? S.streak + 1 : 1;
    S.lastDay = d;
  }

  function addXp(n) {
    const before = level();
    S.xp += n;
    if (level() > before) toast(`🎉 Nivel nou: ${level()} – ${title()}!`);
  }

  function updateTop() {
    // Seria se pierde dacă a trecut mai mult de o zi
    if (S.lastDay && dayDiff(S.lastDay, today()) > 1) S.streak = 0;
    $("#streak").textContent = S.streak;
    $("#xp").textContent = S.xp;
  }

  // ---------- Temă ----------
  const THEME_KEY = "catalog360-theme";
  try { const t = localStorage.getItem(THEME_KEY); if (t) document.documentElement.dataset.theme = t; } catch (_) {}
  $("#themeBtn").addEventListener("click", () => {
    const cur = document.documentElement.dataset.theme
      || (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    const next = cur === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try { localStorage.setItem(THEME_KEY, next); } catch (_) {}
  });

  // ---------- Ecrane ----------
  function viewHome() {
    const lvlPct = ((S.xp % XP_PER_LEVEL) / XP_PER_LEVEL) * 100;
    const dailyDone = S.daily && S.daily.date === today();
    return `
      <div class="stack">
        <section class="card hero stack">
          <div>
            <p class="muted" style="margin:0">Nivel ${level()} · ${esc(title())}</p>
            <h1>Învață ceva nou azi! 🧠</h1>
            <div class="level-bar" aria-label="Progres nivel"><div style="width:${lvlPct}%"></div></div>
            <p class="muted" style="margin:.4rem 0 0;font-size:.85rem">${S.xp % XP_PER_LEVEL} / ${XP_PER_LEVEL} XP până la nivelul ${level() + 1}</p>
          </div>
          <div class="row">
            ${dailyDone
              ? `<span>✅ Provocarea zilei: <b>${S.daily.score}/5</b>. Revino mâine!</span>`
              : `<button class="btn light" data-act="daily">⚡ Provocarea zilei (5 întrebări)</button>`}
          </div>
        </section>

        <section class="row">
          <a class="btn primary" href="#/quiz">🎯 Quiz rapid</a>
          <a class="btn" href="#/invata">📖 Lecții</a>
          ${S.mistakes.length ? `<button class="btn" data-act="mistakes">🔁 Repetă greșelile (${S.mistakes.length})</button>` : ""}
        </section>

        <section>
          <h2>Categorii</h2>
          <div class="grid">
            ${CATS.map(c => `
              <a class="cat" href="#/invata/${c.id}" style="--c:${c.color}">
                <span class="ico">${c.icon}</span>
                <b>${esc(c.name)}</b>
                <div class="mini-bar"><div style="width:${catProgress(c.id)}%"></div></div>
                <small class="muted">${catProgress(c.id)}% stăpânit</small>
              </a>`).join("")}
          </div>
        </section>
      </div>`;
  }

  function viewLearnList() {
    return `
      <div class="stack">
        <div><h1>📖 Învață</h1><p class="muted">Alege o categorie și parcurge fișele scurte. Apoi testează-te cu un quiz.</p></div>
        <div class="grid">
          ${CATS.map(c => `
            <a class="cat" href="#/invata/${c.id}" style="--c:${c.color}">
              <span class="ico">${c.icon}</span>
              <b>${esc(c.name)}</b>
              <small class="muted">${learnedCount(c.id)}/${c.lessons.length} fișe învățate</small>
            </a>`).join("")}
        </div>
      </div>`;
  }

  let learnIdx = 0;
  function viewLearn(id) {
    const c = CAT[id];
    if (!c) return viewLearnList();
    learnIdx = Math.max(0, Math.min(learnIdx, c.lessons.length - 1));
    const L = c.lessons[learnIdx];
    const key = `${id}:${learnIdx}`;
    const isLast = learnIdx === c.lessons.length - 1;
    return `
      <div class="stack" style="--c:${c.color}">
        <div class="spread">
          <a href="#/invata" class="muted">← Înapoi</a>
          <span class="muted">${learnIdx + 1} / ${c.lessons.length}</span>
        </div>
        <h1>${c.icon} ${esc(c.name)}</h1>
        <article class="card flash stack">
          <h2>${esc(L.t)}</h2>
          <p>${esc(L.x)}</p>
        </article>
        <div class="dots">${c.lessons.map((_, i) =>
          `<i class="${i === learnIdx ? "on" : S.learned[`${id}:${i}`] ? "done" : ""}"></i>`).join("")}</div>
        <div class="row" style="justify-content:space-between">
          <button class="btn" data-act="prev" ${learnIdx === 0 ? "disabled" : ""}>← Anterior</button>
          ${isLast
            ? `<button class="btn primary" data-act="learned-quiz" data-cat="${id}">${S.learned[key] ? "" : "✓ "}Testează-te 🎯</button>`
            : `<button class="btn primary" data-act="learned-next">${S.learned[key] ? "Următorul →" : "✓ Am învățat →"}</button>`}
        </div>
      </div>`;
  }

  let quizSetup = { cat: "mix", n: 10 };
  function viewQuizSetup() {
    return `
      <div class="stack">
        <div><h1>🎯 Quiz</h1><p class="muted">Ai ${SECONDS} de secunde pentru fiecare întrebare. Răspunsurile rapide aduc XP bonus!</p></div>
        <section class="card stack">
          <h2>Categorie</h2>
          <div class="chips">
            <button class="chip ${quizSetup.cat === "mix" ? "on" : ""}" data-act="setcat" data-cat="mix">🎲 Toate</button>
            ${CATS.map(c => `<button class="chip ${quizSetup.cat === c.id ? "on" : ""}" data-act="setcat" data-cat="${c.id}">${c.icon} ${esc(c.name)}</button>`).join("")}
          </div>
          <h2>Număr de întrebări</h2>
          <div class="chips">
            ${[5, 10, 20].map(n => `<button class="chip ${quizSetup.n === n ? "on" : ""}" data-act="setn" data-n="${n}">${n}</button>`).join("")}
          </div>
          <button class="btn primary block" data-act="start">Începe quiz-ul</button>
        </section>
      </div>`;
  }

  // Starea quiz-ului curent (în memorie)
  let Q = null, timerId = null;

  function startQuiz(questions, label, mode = "normal") {
    Q = {
      label, mode,
      items: questions.map(q => {
        // Amestecăm variantele, păstrând răspunsul corect
        const order = shuffle([0, 1, 2, 3]);
        return { q, order, chosen: null, correct: false, time: 0 };
      }),
      i: 0, score: 0, xp: 0, combo: 0, bestCombo: 0, answered: false, left: SECONDS
    };
    touchStreak(); save(); updateTop();
    location.hash = "#/joc";
  }

  function viewPlay() {
    if (!Q) return viewQuizSetup();
    const it = Q.items[Q.i];
    const c = CAT[it.q.cat];
    const total = Q.items.length;
    return `
      <div class="stack">
        <div class="q-head">
          <span>${c.icon} ${esc(c.name)} · ${esc(Q.label)}</span>
          <span>Întrebarea <b>${Q.i + 1}</b>/${total} · Scor <b>${Q.score}</b></span>
        </div>
        <div class="timer ${Q.left <= 5 ? "low" : ""}" aria-hidden="true"><div id="tbar" style="width:${(Q.left / SECONDS) * 100}%"></div></div>
        <section class="card stack">
          <div class="spread"><p class="question" style="margin:0">${esc(it.q.q)}</p>
            <span class="pill" id="tleft" aria-label="Secunde rămase">⏱ ${Q.left}</span></div>
          <div class="answers">
            ${it.order.map((orig, k) => {
              let cls = "";
              if (Q.answered) {
                if (orig === it.q.c) cls = "right";
                else if (orig === it.chosen) cls = "wrong";
              }
              return `<button class="answer ${cls}" data-act="answer" data-orig="${orig}" ${Q.answered ? "disabled" : ""}>
                <span class="k">${KEYS[k]}</span>${esc(it.q.a[orig])}</button>`;
            }).join("")}
          </div>
          ${Q.answered ? `
            <div class="explain" role="status">
              <b>${it.correct ? "✅ Corect!" : it.chosen === -1 ? "⏰ Timpul a expirat!" : "❌ Greșit."}</b>
              ${Q.combo >= 3 && it.correct ? ` 🔥 ${Q.combo} la rând!` : ""}
              <div>${esc(it.q.e)}</div>
            </div>
            <button class="btn primary block" data-act="next">${Q.i + 1 < total ? "Următoarea →" : "Vezi rezultatul"}</button>` : ""}
        </section>
      </div>`;
  }

  function runTimer() {
    clearInterval(timerId);
    if (!Q || Q.answered) return;
    timerId = setInterval(() => {
      if (!Q || Q.answered || location.hash !== "#/joc") { clearInterval(timerId); return; }
      Q.left -= 1;
      const bar = $("#tbar"), tl = $("#tleft");
      if (bar) { bar.style.width = `${(Q.left / SECONDS) * 100}%`; bar.parentElement.classList.toggle("low", Q.left <= 5); }
      if (tl) tl.textContent = `⏱ ${Q.left}`;
      if (Q.left <= 0) { clearInterval(timerId); answer(-1); }
    }, 1000);
  }

  function answer(orig) {
    if (!Q || Q.answered) return;
    clearInterval(timerId);
    const it = Q.items[Q.i];
    it.chosen = orig;
    it.correct = orig === it.q.c;
    it.time = SECONDS - Q.left;
    Q.answered = true;

    const pc = S.perCat[it.q.cat] || (S.perCat[it.q.cat] = { answered: 0, correct: 0 });
    pc.answered++; S.answered++;
    if (it.correct) {
      pc.correct++; S.correct++;
      Q.score++; Q.combo++; Q.bestCombo = Math.max(Q.bestCombo, Q.combo);
      const gained = 10 + Math.ceil(Q.left / 4) + (Q.combo >= 3 ? 5 : 0);
      Q.xp += gained; addXp(gained);
      S.mistakes = S.mistakes.filter(id => id !== it.q.id);
    } else {
      Q.combo = 0;
      if (!S.mistakes.includes(it.q.id)) S.mistakes.push(it.q.id);
    }
    save(); updateTop(); render();
  }

  function next() {
    if (!Q) return;
    if (Q.i + 1 < Q.items.length) {
      Q.i++; Q.answered = false; Q.left = SECONDS;
      render(); runTimer();
    } else {
      finishQuiz();
    }
  }

  function finishQuiz() {
    S.quizzes++;
    if (Q.score === Q.items.length && Q.items.length >= 5) S.perfect++;
    S.bestStreakInQuiz = Math.max(S.bestStreakInQuiz, Q.bestCombo);
    if (Q.mode === "daily") { S.daily = { date: today(), score: Q.score }; addXp(20); Q.xp += 20; }
    save(); updateTop();
    location.hash = "#/rezultat";
  }

  function viewResult() {
    if (!Q) return viewHome();
    const total = Q.items.length;
    const p = pct(Q.score, total);
    const msg = p === 100 ? "Perfect! Ești o enciclopedie! 🏆" : p >= 70 ? "Foarte bine! 👏" : p >= 40 ? "Nu e rău – mai exersează! 💪" : "Fiecare greșeală e o lecție. Încearcă din nou! 📖";
    return `
      <div class="stack">
        <section class="card stack" style="text-align:center">
          <div class="score-ring">${Q.score}/${total}</div>
          <h2>${msg}</h2>
          <p class="muted" style="margin:0">+${Q.xp} XP · Cea mai lungă serie: ${Q.bestCombo} 🔥</p>
          <div class="row" style="justify-content:center">
            <button class="btn primary" data-act="again">Încă o dată</button>
            <a class="btn" href="#/">Acasă</a>
          </div>
        </section>
        <section class="card">
          <h2>Recapitulare</h2>
          ${Q.items.map(it => `
            <div class="review-item">
              <div class="spread"><b>${esc(it.q.q)}</b><span class="tag ${it.correct ? "ok" : "no"}">${it.correct ? "corect" : "greșit"}</span></div>
              <div class="muted">Răspuns corect: <b>${esc(it.q.a[it.q.c])}</b>${!it.correct && it.chosen >= 0 ? ` · tu: ${esc(it.q.a[it.chosen])}` : ""}</div>
            </div>`).join("")}
        </section>
      </div>`;
  }

  function badges() {
    const learnedTotal = Object.keys(S.learned).length;
    const allLessons = CATS.reduce((n, c) => n + c.lessons.length, 0);
    return [
      { b: "🌱", n: "Primul quiz", ok: S.quizzes >= 1 },
      { b: "📖", n: "10 fișe învățate", ok: learnedTotal >= 10 },
      { b: "🎓", n: "Toate fișele", ok: learnedTotal >= allLessons },
      { b: "🏆", n: "Quiz perfect", ok: S.perfect >= 1 },
      { b: "🔥", n: "Serie de 3 zile", ok: S.streak >= 3 },
      { b: "⚡", n: "5 corecte la rând", ok: S.bestStreakInQuiz >= 5 },
      { b: "💯", n: "100 de răspunsuri", ok: S.answered >= 100 },
      { b: "🧠", n: "Nivel 5", ok: level() >= 5 }
    ];
  }

  function viewStats() {
    return `
      <div class="stack">
        <div><h1>📊 Progresul tău</h1><p class="muted">Nivel ${level()} · ${esc(title())}</p></div>
        <div class="stat-grid">
          <div class="card stat"><b>${S.answered}</b><span>răspunsuri</span></div>
          <div class="card stat"><b>${pct(S.correct, S.answered)}%</b><span>precizie</span></div>
          <div class="card stat"><b>${S.quizzes}</b><span>quiz-uri</span></div>
        </div>
        <section class="card stack">
          <h2>Pe categorii</h2>
          ${CATS.map(c => {
            const st = catStats(c.id);
            return `<div style="--c:${c.color}">
              <div class="spread"><span>${c.icon} ${esc(c.name)}</span><small class="muted">${st.correct}/${st.answered} corecte · ${catProgress(c.id)}%</small></div>
              <div class="mini-bar"><div style="width:${catProgress(c.id)}%"></div></div>
            </div>`;
          }).join("")}
        </section>
        <section class="card stack">
          <h2>Insigne</h2>
          <div class="badges">${badges().map(x => `<div class="badge ${x.ok ? "" : "locked"}"><span class="b">${x.b}</span>${esc(x.n)}</div>`).join("")}</div>
        </section>
        <button class="btn" data-act="reset">Resetează progresul</button>
      </div>`;
  }

  // ---------- Router ----------
  function render() {
    const h = location.hash || "#/";
    const [, route, param] = h.split("/");
    let html, tab = "home";
    if (route === "invata") { html = param ? viewLearn(param) : viewLearnList(); tab = "invata"; }
    else if (route === "quiz") { html = viewQuizSetup(); tab = "quiz"; }
    else if (route === "joc") { html = viewPlay(); tab = "quiz"; }
    else if (route === "rezultat") { html = viewResult(); tab = "quiz"; }
    else if (route === "progres") { html = viewStats(); tab = "progres"; }
    else html = viewHome();
    app.innerHTML = html;
    document.querySelectorAll(".tabbar a").forEach(a => a.classList.toggle("active", a.dataset.tab === tab));
  }

  let lastRoute = "";
  window.addEventListener("hashchange", () => {
    const h = location.hash;
    if (h.startsWith("#/invata/") && lastRoute !== h) learnIdx = 0; // categorie nouă → prima fișă
    lastRoute = h;
    render();
    window.scrollTo(0, 0);
    if (h === "#/joc") runTimer(); else clearInterval(timerId);
  });

  // ---------- Acțiuni ----------
  app.addEventListener("click", e => {
    const el = e.target.closest("[data-act]");
    if (!el) return;
    const act = el.dataset.act;
    const route = (location.hash || "#/").split("/")[2];

    switch (act) {
      case "daily": {
        const rnd = seeded(today());
        startQuiz(shuffle(ALL_Q, rnd).slice(0, 5), "Provocarea zilei", "daily");
        break;
      }
      case "mistakes":
        startQuiz(shuffle(S.mistakes.map(id => Q_BY_ID[id]).filter(Boolean)).slice(0, 10), "Greșelile mele");
        break;
      case "prev": learnIdx--; render(); break;
      case "learned-next": {
        const k = `${route}:${learnIdx}`;
        if (!S.learned[k]) { S.learned[k] = true; addXp(5); touchStreak(); save(); updateTop(); }
        learnIdx++; render(); break;
      }
      case "learned-quiz": {
        const id = el.dataset.cat;
        const k = `${id}:${learnIdx}`;
        if (!S.learned[k]) { S.learned[k] = true; addXp(5); save(); updateTop(); }
        startQuiz(shuffle(CAT[id].questions.map((q, i) => ({ ...q, id: `${id}:${i}`, cat: id }))).slice(0, 10), "Test");
        break;
      }
      case "setcat": quizSetup.cat = el.dataset.cat; render(); break;
      case "setn": quizSetup.n = Number(el.dataset.n); render(); break;
      case "start": {
        const pool = quizSetup.cat === "mix" ? ALL_Q : ALL_Q.filter(q => q.cat === quizSetup.cat);
        startQuiz(shuffle(pool).slice(0, quizSetup.n), quizSetup.cat === "mix" ? "Mix" : "Quiz");
        break;
      }
      case "answer": answer(Number(el.dataset.orig)); break;
      case "next": next(); break;
      case "again": {
        const qs = shuffle(Q.items.map(it => it.q));
        startQuiz(qs, Q.label, Q.mode === "daily" ? "normal" : Q.mode);
        break;
      }
      case "reset":
        if (confirm("Sigur vrei să ștergi tot progresul?")) { S = defaults(); save(); updateTop(); render(); }
        break;
    }
  });

  // Tastatură în quiz: 1–4 / A–D pentru răspuns, Enter pentru următoarea
  document.addEventListener("keydown", e => {
    if (location.hash !== "#/joc" || !Q) return;
    const k = e.key.toUpperCase();
    const idx = "1234".includes(k) && k ? Number(k) - 1 : KEYS.indexOf(k);
    if (!Q.answered && idx >= 0 && idx < 4) answer(Q.items[Q.i].order[idx]);
    else if (Q.answered && e.key === "Enter") { e.preventDefault(); next(); }
  });

  updateTop();
  lastRoute = location.hash;
  if (location.hash === "#/joc" || location.hash === "#/rezultat") location.hash = "#/";
  render();
})();
