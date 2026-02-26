/* ════════════════════════════════════════════════
   script.js — Warm Romantic Memory × Chulalongkorn
════════════════════════════════════════════════ */
'use strict';

/* ════ 1. SURVEY ════ */
const QUESTIONS = [
  { q: "เมื่อพบเจอสถานการณ์ที่ยากลำบาก คุณมักจะตอบสนองอย่างไร?", category: "อารมณ์พื้นฐาน", options: ["หายใจลึกๆ แล้วคิดก่อนตัดสินใจ", "รู้สึกกังวลแต่ก็ผ่านมาได้", "ขอความช่วยเหลือจากคนใกล้ชิด", "ต้องการเวลาอยู่คนเดียวก่อน"] },
  { q: "คุณรู้สึกอย่างไรเมื่อได้รับคำชมจากผู้อื่น?", category: "การรับรู้ตนเอง", options: ["ดีใจมากและรู้สึกมีแรงบันดาลใจ", "ขอบคุณแต่รู้สึกเกร็งนิดหน่อย", "ไม่แน่ใจว่าคำชมนั้นจริงหรือเปล่า", "รู้สึกอบอุ่นใจและอยากทำดีต่อไป"] },
  { q: "เมื่อเพื่อนมีปัญหา คุณมักจะทำอะไรเป็นอันดับแรก?", category: "ทักษะสังคม", options: ["รับฟังโดยไม่ตัดสิน", "พยายามหาทางแก้ปัญหาให้", "อยู่เป็นเพื่อนโดยไม่ต้องพูดอะไร", "แนะนำให้ปรึกษาผู้เชี่ยวชาญ"] },
  { q: "สภาพแวดล้อมแบบไหนที่ทำให้คุณมีความสุขที่สุด?", category: "สิ่งแวดล้อมอารมณ์", options: ["บรรยากาศเงียบสงบ ได้คิด", "มีคนรอบข้างที่รัก", "สถานที่ใหม่ๆ ที่ยังไม่เคยไป", "ที่บ้านคุ้นเคย อบอุ่น"] },
  { q: "คุณจัดการกับความล้มเหลวอย่างไร?", category: "การรับมือ", options: ["วิเคราะห์ว่าเกิดอะไรขึ้น แล้วเริ่มใหม่", "ต้องการเวลาเศร้าก่อนจะลุกขึ้น", "หาแรงจูงใจจากคนที่รักษ์", "มองว่าทุกความล้มเหลวสอนบางอย่าง"] },
  { q: "เวลาที่คุณรู้สึกเครียด คุณมักจะทำอะไร?", category: "การควบคุมอารมณ์", options: ["ฟังเพลงหรือดูหนัง", "ออกกำลังกายหรือเดิน", "คุยกับคนที่ไว้ใจ", "เขียนบันทึกหรือวาดรูป"] },
  { q: "คุณมองความสัมพันธ์ระหว่างคนอย่างไร?", category: "ทัศนคติสัมพันธภาพ", options: ["ต้องการเวลาและความพยายามร่วมกัน", "ควรเป็นไปตามธรรมชาติ", "การสื่อสารคือหัวใจสำคัญ", "ต้องมีพื้นที่ส่วนตัวของกันและกัน"] },
  { q: "คุณให้ความสำคัญกับสิ่งใดมากที่สุดในชีวิต?", category: "ค่านิยมหลัก", options: ["ครอบครัวและคนที่รัก", "ความสำเร็จในหน้าที่การงาน", "สุขภาพกายและใจที่ดี", "ประสบการณ์และการเรียนรู้"] },
  { q: "เมื่อต้องตัดสินใจสำคัญ คุณพึ่งพาอะไร?", category: "กระบวนการตัดสินใจ", options: ["ข้อมูลและการวิเคราะห์", "ความรู้สึกภายใน", "คำแนะนำจากคนที่เชื่อถือ", "ทั้งเหตุผลและความรู้สึกรวมกัน"] },
  { q: "คุณรู้สึกอย่างไรกับการเปลี่ยนแปลงในชีวิต?", category: "ความยืดหยุ่น", options: ["ตื่นเต้นและรอคอย", "กังวลแต่พร้อมปรับตัว", "ต้องการเตรียมพร้อมก่อน", "มองว่าทุกการเปลี่ยนแปลงมีเหตุผล"] },
  { q: "ถ้า AI บอกว่า 'คนคนนี้เหมาะสมกับคุณมากที่สุด' คุณจะ...", category: "❤️ คำถามพิเศษ", options: ["เชื่อและลองดู", "ขอข้อมูลเพิ่มเติมก่อน", "ตามใจหัวใจตัวเองก็พอ", "รอดูก่อนว่าคนนั้นเป็นยังไง"] }
];

/* ════ 2. NO TEXT ════ */
const NO_TEXTS = ["ไม่", "แน่ใจนะ", "ไม่คิดให้ดีก่อนหรอ", "คิดอีกทีเถอะ 😢", "ทำกันได้ลงคอ", "ฉันร้องไห้แล้วนะ 😭", "โอเคๆ", "ยอมแพ้แล้วนะ", "เอาแบบนี้จริงหรอ", "เคารพเองนะ", "ครั้งสุดท้ายแล้ว"];

/* ════════════════════════════════════════════════
   3. MEMORIES
   เพิ่ม/แก้รูปที่นี่ รองรับ 20-30 รูปได้สบาย
   src   = '' → ใช้ emoji  |  'photos/xxx.jpg' → ใช้รูปจริง
   date  = ข้อความวันที่หรือสถานที่ (optional)
════════════════════════════════════════════════ */
const MEMORIES = [
  { src: '', emoji: '🌸', caption: 'ครั้งแรกที่เจอกัน วันนั้นจำได้ไม่มีวันลืม', date: 'ครั้งแรก' },
  { src: '', emoji: '☕', caption: 'ทุกช่วงเวลาเล็กๆ ที่ได้อยู่ด้วยกัน', date: 'ช่วงเวลาดีๆ' },
  { src: '', emoji: '🌙', caption: 'คืนที่คุยกันไม่รู้จักเหนื่อย อยากให้มีอีกเรื่อยๆ', date: 'คืนดีๆ' },
  { src: '', emoji: '✨', caption: 'วันที่อยากให้หยุดเวลาไว้ตรงนั้นสักพัก', date: 'วันพิเศษ' },
  { src: '', emoji: '🎶', caption: 'เพลงที่ทำให้นึกถึงกันทุกครั้งที่ได้ยิน', date: 'เพลงของเรา', isSong: true },
  { src: '', emoji: '🌅', caption: 'ช่วงเวลายามเย็นที่อบอุ่นที่สุด', date: 'ยามเย็น' },
  { src: '', emoji: '🍜', caption: 'มื้อที่กินด้วยกัน อร่อยกว่าทุกมื้อเสมอ', date: 'มื้อพิเศษ' },
  { src: '', emoji: '🎠', caption: 'สถานที่ที่เราไปด้วยกัน แล้วอยากกลับไปอีก', date: 'สถานที่ของเรา' },
  
];

/* ════════════════════════════════════════════════
   CONFIG — แก้ชื่อที่นี่!
   proposerName = ชื่อคนที่ขอเป็นแฟน (คุณ)
════════════════════════════════════════════════ */
const PROPOSER_NAME = 'มาวิน';   // ← เปลี่ยนเป็นชื่อตัวเองได้เลย

/* ════ 4. STATE ════ */
let userName = '', currentQ = 0, selectedOpt = null, noCount = 0, yesScale = 1;
let scrollObs = null, memObs = null, activeCardIdx = 0;

/* ════ 5. LANDING ════ */
function startSurvey() {
  const inp = document.getElementById('name-input');
  const name = inp.value.trim();
  if (!name) {
    inp.focus(); inp.style.borderColor = '#DC1F74'; inp.style.boxShadow = '0 0 0 3px rgba(220,31,116,.15)';
    setTimeout(() => { inp.style.borderColor = ''; inp.style.boxShadow = ''; }, 1500); return;
  }
  userName = name; showPage('page-survey'); renderQuestion(0);
}
document.getElementById('name-input').addEventListener('keydown', e => { if (e.key === 'Enter') startSurvey(); });

/* ════ 6. SURVEY ════ */
function renderQuestion(idx) {
  const d = QUESTIONS[idx];
  document.getElementById('q-number').textContent = `ข้อ ${idx + 1} / ${QUESTIONS.length}`;
  document.getElementById('q-category').textContent = `หมวด: ${d.category}`;
  document.getElementById('question-text').textContent = d.q;
  document.getElementById('progress-fill').style.width = `${(idx / QUESTIONS.length) * 100}%`;
  const g = document.getElementById('options-grid'); g.innerHTML = '';
  d.options.forEach((o, i) => {
    const b = document.createElement('button'); b.className = 'option-btn'; b.textContent = o;
    b.onclick = () => selectOption(b, i); g.appendChild(b);
  });
  selectedOpt = null; document.getElementById('next-btn').disabled = true;
  const c = document.getElementById('survey-card');
  c.style.opacity = '0'; c.style.transform = 'translateY(12px)';
  requestAnimationFrame(() => { c.style.transition = 'opacity .35s ease,transform .35s ease'; c.style.opacity = '1'; c.style.transform = 'translateY(0)'; });
}
function selectOption(btn, idx) { document.querySelectorAll('.option-btn').forEach(b => b.classList.remove('selected')); btn.classList.add('selected'); selectedOpt = idx; document.getElementById('next-btn').disabled = false; }
function nextQuestion() { if (selectedOpt === null) return; currentQ++; currentQ >= QUESTIONS.length ? showProcessingOverlay() : renderQuestion(currentQ); }
function showProcessingOverlay() {
  document.getElementById('progress-fill').style.width = '100%';
  const ov = document.createElement('div'); ov.className = 'processing-overlay';
  ov.innerHTML = '<div class="spinner"></div><p>CU-Emotion AI กำลังวิเคราะห์ข้อมูล...</p>';
  document.body.appendChild(ov);
  setTimeout(() => { ov.remove(); initBridgePage(); showPage('page-bridge'); }, 2200);
}

/* ════════════════════════════════════════════════
   BRIDGE PAGE — เกริ่นนำทีละบรรทัด
════════════════════════════════════════════════ */
function initBridgePage() {
  /* ใส่ชื่อ */
  document.getElementById('bridge-from-name').textContent = PROPOSER_NAME;
  document.getElementById('bridge-to-name').textContent = userName;

  /* reset ทุก line กลับเป็น hidden */
  document.querySelectorAll('.bridge-line').forEach(l => {
    l.classList.remove('bl-show');
  });

  /* เริ่ม particle canvas */
  startParticles('bridge-canvas');
  spawnPetalsBridge();

  /* reveal ทีละบรรทัด ตาม data-delay (วินาที) */
  document.querySelectorAll('.bridge-line').forEach(line => {
    const delay = parseFloat(line.dataset.delay || 0) * 1000;
    setTimeout(() => line.classList.add('bl-show'), delay + 400);
  });
}

function spawnPetalsBridge() {
  const l = document.getElementById('bridge-petals');
  if (!l) return; l.innerHTML = '';
  for (let i = 0; i < 24; i++) {
    const p = document.createElement('div'); p.className = 'petal';
    const sz = 4 + Math.random() * 5;
    p.style.cssText = `left:${Math.random() * 100}%;width:${sz}px;height:${sz}px;animation-duration:${5 + Math.random() * 7}s;animation-delay:${Math.random() * 5}s;opacity:0;`;
    l.appendChild(p);
  }
}

function proceedToPropose() {
  stopParticles();
  initProposePage();
  showPage('page-propose');
}

/* ════ 7. PROPOSE ════ */
function initProposePage() {
  document.getElementById('propose-eyebrow').textContent = `ผลการวิเคราะห์ CU-Emotion AI สำหรับ ${userName}`;
  document.getElementById('propose-title').textContent = 'เป็นแฟนกับเรามั้ยครับ';
  document.getElementById('propose-subtitle').textContent = `ถ้าตกลงครั้งนี้มีข้อแม้ว่าห้ามเลิกกันต้องเข้าใจกัน\nใช้เหตุผลคุยกัน ✨\n\nแล้วเราจะดูแลเองแบบนี้ตลอดไป`;
  noCount = 0; yesScale = 1;
  const no = document.getElementById('btn-no'), yes = document.getElementById('btn-yes');
  no.textContent = NO_TEXTS[0]; no.className = 'btn-no';
  no.style.removeProperty('top'); no.style.removeProperty('left');
  yes.style.transform = 'scale(1)';
  spawnPetals(); initSparkleBtn(); startParticles('propose-canvas');
  initMusic();   // 🎵 เริ่มเพลงบรรเลงตั้งแต่หน้า propose
}
function handleNo() {
  const no = document.getElementById('btn-no'), yes = document.getElementById('btn-yes');
  noCount++;
  /* ครั้งสุดท้าย — ปุ่มหายไปเลย */
  if (noCount >= NO_TEXTS.length) {
    no.style.transition = 'opacity .5s ease, transform .5s ease';
    no.style.opacity = '0';
    no.style.transform = 'scale(0.5)';
    no.style.pointerEvents = 'none';
    setTimeout(() => { no.style.display = 'none'; }, 550);
    return;
  }
  /* เปลี่ยนข้อความ + ขยายปุ่ม YES — ปุ่มไม่ขยับไปไหน */
  no.textContent = NO_TEXTS[noCount];
  yesScale = Math.min(1 + noCount * .12, 2.5); yes.style.transform = `scale(${yesScale})`;
}
function handleYes() { stopParticles(); initFinalPage(); showPage('page-final'); startParticles('final-canvas'); }

/* ── petals ── */
function spawnPetals() {
  const l = document.getElementById('petals-layer'); if (!l) return; l.innerHTML = '';
  for (let i = 0; i < 28; i++) {
    const p = document.createElement('div'); p.className = 'petal'; const sz = 4 + Math.random() * 6;
    p.style.cssText = `left:${Math.random() * 100}%;width:${sz}px;height:${sz}px;animation-duration:${5 + Math.random() * 8}s;animation-delay:${Math.random() * 6}s;opacity:0;`;
    l.appendChild(p);
  }
}

/* ════ 8. SPARKLE ════ */
function initSparkleBtn() {
  const b = document.getElementById('btn-yes');
  b.removeEventListener('mousemove', onYM); b.removeEventListener('touchmove', onYT);
  b.addEventListener('mousemove', onYM); b.addEventListener('touchmove', onYT, { passive: true });
}
function onYM(e) { spawnSparkles(e.clientX, e.clientY, 4); }
function onYT(e) { const t = e.touches[0]; spawnSparkles(t.clientX, t.clientY, 4); }
function spawnSparkles(x, y, n) {
  for (let i = 0; i < n; i++) {
    const s = document.createElement('span'); const h = 15 + Math.random() * 30;
    s.style.cssText = `position:fixed;left:${x}px;top:${y}px;width:5px;height:5px;background:hsl(${h},80%,70%);border-radius:50%;pointer-events:none;z-index:999;transform:translate(-50%,-50%);animation:sparkle-fly .65s ease-out forwards;`;
    document.body.appendChild(s); const a = Math.random() * Math.PI * 2, d = 28 + Math.random() * 44;
    s.style.setProperty('--dx', `${Math.cos(a) * d}px`); s.style.setProperty('--dy', `${Math.sin(a) * d}px`);
    s.addEventListener('animationend', () => s.remove());
  }
}
(function () {
  if (document.getElementById('sk-st')) return;
  const st = document.createElement('style'); st.id = 'sk-st';
  st.textContent = '@keyframes sparkle-fly{0%{opacity:1;transform:translate(-50%,-50%) translate(0,0) scale(1);}100%{opacity:0;transform:translate(-50%,-50%) translate(var(--dx),var(--dy)) scale(0);}}';
  document.head.appendChild(st);
})();

/* ════ 9. PARTICLES ════ */
let pRAF = null, pActive = false;
function startParticles(id) {
  const cv = document.getElementById(id); if (!cv) return;
  const ctx = cv.getContext('2d'); pActive = true;
  const rz = () => { cv.width = window.innerWidth; cv.height = window.innerHeight; }; rz();
  window.addEventListener('resize', rz);
  const N = 50, pts = Array.from({ length: N }, () => mkPt(cv));
  function mkPt(c) { return { x: Math.random() * c.width, y: Math.random() * c.height, r: .8 + Math.random() * 2, dx: (Math.random() - .5) * .35, dy: -(0.15 + Math.random() * .5), life: Math.random(), max: .5 + Math.random() * .5 }; }
  function loop() {
    if (!pActive) return; ctx.clearRect(0, 0, cv.width, cv.height);
    pts.forEach(p => {
      p.life += .004; if (p.life > p.max) { Object.assign(p, mkPt(cv)); p.y = cv.height + 4; }
      p.x += p.dx; p.y += p.dy;
      const al = Math.sin((p.life / p.max) * Math.PI) * .55;
      ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(232,146,90,${al})`; ctx.fill();
    });
    pRAF = requestAnimationFrame(loop);
  }
  loop();
}
function stopParticles() { pActive = false; if (pRAF) cancelAnimationFrame(pRAF); }

/* ════ 10. FIREFLIES ════ */
function spawnFireflies() {
  const l = document.getElementById('firefly-layer'); if (!l) return; l.innerHTML = '';
  const cols = ['rgba(232,146,90,.8)', 'rgba(255,200,120,.8)', 'rgba(242,168,184,.7)'];
  for (let i = 0; i < 22; i++) {
    const f = document.createElement('div'); f.className = 'firefly';
    const sz = 2 + Math.random() * 2;
    const fx = (Math.random() - .5) * 120, fy = (Math.random() - .5) * 120;
    f.style.cssText = `
      left:${Math.random() * 100}%;top:${Math.random() * 100}%;
      width:${sz}px;height:${sz}px;
      background:${cols[Math.floor(Math.random() * cols.length)]};
      box-shadow:0 0 ${4 + Math.random() * 6}px ${cols[0]};
      animation-duration:${4 + Math.random() * 6}s;
      animation-delay:${Math.random() * 5}s;
    `;
    f.style.setProperty('--fx', fx + 'px'); f.style.setProperty('--fy', fy + 'px');
    l.appendChild(f);
  }
}

/* ════ 11. FINAL PAGE ════ */
function initFinalPage() {
  document.getElementById('final-headline').textContent = `${userName} ตอบรับแล้ว 🩷`;
  document.getElementById('final-subtext').textContent = `ขอบคุณที่ให้โอกาสนะ\nฉันสัญญาว่าจะดูแลเธอให้ดีที่สุด\nและจะอยู่เคียงข้างเสมอ ❤️`;
  spawnFireflies();
  buildMemoryCards();
  setupClosingObserver();
  /* music เริ่มตั้งแต่หน้า propose แล้ว */

  /* 🔒 ล็อค scroll จนกว่าจะพร้อมดูความทรงจำ */
  lockFinalScroll();
}

/* ════════════════════════════════════════════════
   MUSIC CONTROLLER
   - เล่นอัตโนมัติทันทีที่เข้าหน้า final
     (browser อนุญาตเพราะ user กด YES แล้ว = user interaction)
   - ปุ่ม toggle mute/unmute
   - fade-in/out เรียบ
════════════════════════════════════════════════ */
let musicFadeTimer = null;
let musicFadeTimer2 = null;  /* สำหรับ our-song fade */
let ourSongPlaying = false;
let userMutedMusic = false;  /* user กดปิดเพลงเอง? */

function initMusic() {
  const audio = document.getElementById('bg-music');
  const btn = document.getElementById('music-btn');
  if (!audio || !btn) return;

  /* volume เริ่มที่ 0 แล้วค่อย fade in */
  audio.volume = 0;

  /* พยายามเล่น — ถ้า browser บล็อก autoplay จะ catch แล้วรอ user กด */
  const playPromise = audio.play();
  if (playPromise !== undefined) {
    playPromise
      .then(() => {
        /* เล่นสำเร็จ → fade volume ขึ้น */
        fadeVolume(audio, 0, 0.55, 2000);
        btn.classList.add('music-ready');
        updateMusicBtn(false);
      })
      .catch(() => {
        /* browser บล็อก autoplay → แสดงปุ่มให้ user กดเอง */
        btn.classList.add('music-ready', 'is-muted');
        document.getElementById('music-label').textContent = 'แตะเพื่อเล่นเพลง';
        updateMusicBtn(true);
      });
  }
}

function toggleMusic() {
  const audio = document.getElementById('bg-music');
  const btn = document.getElementById('music-btn');
  if (!audio) return;

  if (audio.paused) {
    /* เริ่มเล่น → fade in */
    audio.play().then(() => {
      fadeVolume(audio, audio.volume, 0.55, 800);
      btn.classList.remove('is-muted');
      updateMusicBtn(false);
    }).catch(() => { });
  } else {
    /* หยุด → fade out แล้ว pause */
    fadeVolume(audio, audio.volume, 0, 600, () => { audio.pause(); });
    btn.classList.add('is-muted');
    updateMusicBtn(true);
  }
}

function updateMusicBtn(isMuted) {
  const label = document.getElementById('music-label');
  const iconPlay = document.querySelector('.icon-playing');
  const iconMuted = document.querySelector('.icon-muted');
  if (label) label.textContent = isMuted ? 'ปิดเพลง' : 'กำลังเล่น';
  if (iconPlay) iconPlay.style.display = isMuted ? 'none' : '';
  if (iconMuted) iconMuted.style.display = isMuted ? '' : 'none';
}

/* linear volume fade helper */
function fadeVolume(audio, from, to, durationMs, onDone) {
  clearInterval(musicFadeTimer);
  const steps = 30;
  const stepTime = durationMs / steps;
  const diff = (to - from) / steps;
  let current = from;
  audio.volume = Math.max(0, Math.min(1, from));

  musicFadeTimer = setInterval(() => {
    current += diff;
    audio.volume = Math.max(0, Math.min(1, current));
    if ((diff > 0 && current >= to) || (diff < 0 && current <= to)) {
      audio.volume = Math.max(0, Math.min(1, to));
      clearInterval(musicFadeTimer);
      if (onDone) onDone();
    }
  }, stepTime);
}

/* ════ 12. MEMORY — Apple-style vertical scroll gallery ════ */
let appleMemObs = null;
let appleProgressEl = null;
let songItemIdx = -1;  /* index ของ memory ที่เป็นเพลง */

function buildMemoryCards() {
  const list = document.getElementById('apple-mem-list');
  if (!list) return;
  list.innerHTML = '';

  MEMORIES.forEach((mem, i) => {
    const item = document.createElement('div');
    item.className = 'apple-mem-item';
    item.dataset.idx = i;
    if (mem.isSong) { item.classList.add('is-song-item'); songItemIdx = i; }

    /* visual background */
    const visual = document.createElement('div');
    visual.className = 'apple-mem-visual';

    if (mem.src) {
      const img = document.createElement('img');
      img.src = mem.src; img.alt = mem.caption; img.loading = 'lazy';
      visual.appendChild(img);
    } else {
      const emoji = document.createElement('span');
      emoji.className = 'apple-mem-emoji';
      emoji.textContent = mem.emoji;
      visual.appendChild(emoji);
    }

    /* text overlay */
    const text = document.createElement('div');
    text.className = 'apple-mem-text';

    const num = document.createElement('span');
    num.className = 'apple-mem-num';
    num.textContent = `Memory ${String(i + 1).padStart(2, '0')}`;

    const date = document.createElement('span');
    date.className = 'apple-mem-date';
    date.textContent = mem.date || '';

    const caption = document.createElement('h3');
    caption.className = 'apple-mem-caption';
    caption.textContent = mem.caption;

    text.appendChild(num);
    if (mem.date) text.appendChild(date);
    text.appendChild(caption);

    /* 🎵 Apple Music Now Playing Card */
    if (mem.isSong) {
      /* override: replace default text overlay with AM card */
      text.innerHTML = '';
      text.classList.add('am-wrapper');

      const label = document.createElement('span');
      label.className = 'am-label';
      label.textContent = 'เพลงของเรา';

      const card = document.createElement('div');
      card.className = 'am-card';
      card.id = 'am-card';

      /* album art */
      const art = document.createElement('div');
      art.className = 'am-art';
      const glow = document.createElement('div');
      glow.className = 'am-art-glow';
      art.appendChild(glow);
      if (mem.src) {
        const artImg = document.createElement('img');
        artImg.src = mem.src; artImg.alt = mem.caption;
        art.appendChild(artImg);
      } else {
        const artEmoji = document.createElement('span');
        artEmoji.className = 'am-art-emoji';
        artEmoji.textContent = mem.emoji;
        art.appendChild(artEmoji);
      }

      /* info */
      const info = document.createElement('div');
      info.className = 'am-info';
      info.innerHTML = `
        <span class="am-title">${mem.caption}</span>
        <span class="am-artist">เพลงที่เป็นของเราสองคน</span>
      `;

      /* controls */
      const controls = document.createElement('div');
      controls.className = 'am-controls';
      controls.innerHTML = `
        <button class="am-play-btn" id="am-play-btn" onclick="toggleOurSong()">
          <svg class="am-icon-play" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
          <svg class="am-icon-pause" viewBox="0 0 24 24" fill="currentColor" style="display:none"><path d="M6 4h4v16H6zm8 0h4v16h-4z"/></svg>
        </button>
        <div class="am-eq" id="am-eq">
          <span class="am-eq-bar"></span><span class="am-eq-bar"></span><span class="am-eq-bar"></span><span class="am-eq-bar"></span><span class="am-eq-bar"></span>
        </div>
        <span class="am-status" id="am-status">แตะเพื่อเล่น</span>
      `;

      card.appendChild(art);
      card.appendChild(info);
      card.appendChild(controls);

      text.appendChild(label);
      text.appendChild(card);
    }

    item.appendChild(visual);
    item.appendChild(text);
    list.appendChild(item);
  });

  /* build progress dots */
  buildAppleProgress();

  /* setup Intersection Observer for scroll-triggered reveal */
  setupAppleObserver();
}

function buildAppleProgress() {
  /* remove existing */
  const existing = document.querySelector('.apple-mem-progress');
  if (existing) existing.remove();

  appleProgressEl = document.createElement('div');
  appleProgressEl.className = 'apple-mem-progress';

  MEMORIES.forEach((_, i) => {
    const dot = document.createElement('span');
    dot.className = 'apple-prog-dot' + (i === 0 ? ' active' : '');
    dot.onclick = () => {
      const target = document.querySelectorAll('.apple-mem-item')[i];
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'center' });
    };
    appleProgressEl.appendChild(dot);
  });

  document.getElementById('page-final').appendChild(appleProgressEl);
}

function setupAppleObserver() {
  if (appleMemObs) appleMemObs.disconnect();

  const fin = document.getElementById('page-final');

  /* observer for in-view class toggle (animate in/out) */
  appleMemObs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      const idx = parseInt(e.target.dataset.idx);
      if (e.isIntersecting) {
        e.target.classList.add('in-view');
        updateAppleProgress(idx);

        /* 🎵 ถ้าเลื่อนถึง song item → crossfade ไป our-song */
        if (idx === songItemIdx) {
          crossfadeToOurSong();
        }
      } else {
        e.target.classList.remove('in-view');

        /* 🎵 ถ้าเลื่อนออกจาก song item → กลับไปเพลงบรรเลง */
        if (idx === songItemIdx && ourSongPlaying) {
          crossfadeToBgMusic();
        }
      }
    });
  }, { root: fin, threshold: 0.35 });

  document.querySelectorAll('.apple-mem-item').forEach(el => appleMemObs.observe(el));

  /* observer for progress bar visibility (show when inside mem-section) */
  const memSecObs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (appleProgressEl) {
        appleProgressEl.classList.toggle('visible', e.isIntersecting);
      }
    });
  }, { root: fin, threshold: 0.05 });

  const memSec = document.getElementById('mem-section');
  if (memSec) memSecObs.observe(memSec);
}

function updateAppleProgress(activeIdx) {
  if (!appleProgressEl) return;
  appleProgressEl.querySelectorAll('.apple-prog-dot').forEach((dot, i) => {
    dot.classList.toggle('active', i === activeIdx);
  });
}

/* ════ OUR-SONG crossfade ════ */
function crossfadeToOurSong() {
  if (userMutedMusic) return;
  const bg = document.getElementById('bg-music');
  const song = document.getElementById('our-song');
  if (!bg || !song) return;

  ourSongPlaying = true;
  updateSongBtn(true);

  /* fade out bg music */
  fadeVolumeAny(bg, bg.volume, 0, 800, musicFadeTimer, t => { musicFadeTimer = t; }, () => { bg.pause(); });

  /* fade in our song */
  song.volume = 0;
  song.play().then(() => {
    fadeVolumeAny(song, 0, 0.6, 800, musicFadeTimer2, t => { musicFadeTimer2 = t; });
  }).catch(() => { });
}

function crossfadeToBgMusic() {
  if (userMutedMusic) return;
  const bg = document.getElementById('bg-music');
  const song = document.getElementById('our-song');
  if (!bg || !song) return;

  ourSongPlaying = false;
  updateSongBtn(false);

  /* fade out our song */
  fadeVolumeAny(song, song.volume, 0, 800, musicFadeTimer2, t => { musicFadeTimer2 = t; }, () => { song.pause(); song.currentTime = 0; });

  /* fade in bg music */
  bg.volume = 0;
  bg.play().then(() => {
    fadeVolumeAny(bg, 0, 0.55, 800, musicFadeTimer, t => { musicFadeTimer = t; });
  }).catch(() => { });
}

function toggleOurSong() {
  const song = document.getElementById('our-song');
  if (!song) return;

  if (ourSongPlaying) {
    crossfadeToBgMusic();
  } else {
    crossfadeToOurSong();
  }
}

function updateSongBtn(isPlaying) {
  const btn = document.getElementById('am-play-btn');
  if (!btn) return;
  const iconPlay = btn.querySelector('.am-icon-play');
  const iconPause = btn.querySelector('.am-icon-pause');
  const eq = document.getElementById('am-eq');
  const status = document.getElementById('am-status');
  if (iconPlay) iconPlay.style.display = isPlaying ? 'none' : '';
  if (iconPause) iconPause.style.display = isPlaying ? '' : 'none';
  if (eq) eq.classList.toggle('playing', isPlaying);
  if (status) {
    status.textContent = isPlaying ? 'กำลังเล่น' : 'แตะเพื่อเล่น';
    status.classList.toggle('playing', isPlaying);
  }
}

/* generic fade helper (ไม่ใช้ global timer ร่วมกัน) */
function fadeVolumeAny(audio, from, to, durationMs, timerRef, setTimer, onDone) {
  clearInterval(timerRef);
  const steps = 25;
  const stepTime = durationMs / steps;
  const diff = (to - from) / steps;
  let current = from;
  audio.volume = Math.max(0, Math.min(1, from));

  const id = setInterval(() => {
    current += diff;
    audio.volume = Math.max(0, Math.min(1, current));
    if ((diff > 0 && current >= to) || (diff < 0 && current <= to)) {
      audio.volume = Math.max(0, Math.min(1, to));
      clearInterval(id);
      if (onDone) onDone();
    }
  }, stepTime);
  setTimer(id);
}

/* ── reveal utils ── */
function setupClosingObserver() {
  if (scrollObs) scrollObs.disconnect();
  const fin = document.getElementById('page-final');
  scrollObs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('mem-visible'); scrollObs.unobserve(e.target); } });
  }, { root: fin, threshold: .2 });
  document.querySelectorAll('.final-closing').forEach(el => {
    el.classList.add('mem-reveal'); scrollObs.observe(el);
  });
  /* also reveal intro */
  const introObs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('rv-visible'); introObs.unobserve(e.target); } });
  }, { root: fin, threshold: .15 });
  document.querySelectorAll('.mem-reveal').forEach(el => introObs.observe(el));
}

/* ════ 13. PAGE NAV ════ */
function showPage(id) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const t = document.getElementById(id); t.classList.add('active');
  /* 🔒 ล็อค scroll ทุกหน้า */
  document.documentElement.style.overflow = 'hidden';
  document.body.style.overflow = 'hidden';
  document.documentElement.style.touchAction = 'none';
  document.body.style.touchAction = 'none';
  t.style.overflow = 'hidden';
  id === 'page-final' ? (t.scrollTop = 0) : window.scrollTo(0, 0);
}

/* ════ 14. SCROLL LOCK — ล็อค scroll จนกว่าจะพร้อม ════ */
let scrollLockTimer = null;

function lockFinalScroll() {
  const fin = document.getElementById('page-final');
  if (!fin) return;

  /* ล็อค scroll */
  fin.style.overflow = 'hidden';

  /* ปลดล็อคอัตโนมัติหลัง 4 วินาที */
  clearTimeout(scrollLockTimer);
  scrollLockTimer = setTimeout(() => unlockFinalScroll(), 4000);

  /* หรือกด scroll-cue เพื่อปลดล็อคเร็วขึ้น */
  const cue = document.querySelector('.scroll-cue');
  if (cue) {
    cue.style.cursor = 'pointer';
    cue.onclick = () => unlockFinalScroll(true);
  }
}

function unlockFinalScroll(scrollToMem) {
  const fin = document.getElementById('page-final');
  if (!fin) return;
  clearTimeout(scrollLockTimer);

  /* body/html ยัง hidden อยู่ — ให้ page-final เป็นตัว scroll แทน */
  fin.style.overflow = 'auto';
  fin.style.height = '100vh';

  if (scrollToMem) {
    const memSec = document.getElementById('mem-section');
    if (memSec) {
      setTimeout(() => memSec.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100);
    }
  }
}