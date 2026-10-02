document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".site-header");
  const toggle = document.querySelector(".menu-toggle");
  const mobile = document.querySelector(".mobile-nav");

  toggle?.addEventListener("click", () => {
    const open = mobile.classList.toggle("open");
    toggle.setAttribute("aria-expanded", open);
  });

  mobile?.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
    mobile.classList.remove("open");
    toggle?.setAttribute("aria-expanded", "false");
  }));

  document.querySelectorAll(".language-dropdown").forEach(drop => {
    const btn = drop.querySelector(".lang-btn");
    btn?.addEventListener("click", e => {
      e.stopPropagation();
      document.querySelectorAll(".language-dropdown").forEach(d => {
        if (d !== drop) d.classList.remove("open");
      });
      drop.classList.toggle("open");
      btn.setAttribute("aria-expanded", drop.classList.contains("open"));
    });
  });

  document.querySelectorAll(".nav-dropdown").forEach(drop => {
    const btn = drop.querySelector(".nav-dropdown-btn");
    btn?.addEventListener("click", e => {
      e.stopPropagation();
      document.querySelectorAll(".nav-dropdown").forEach(d => {
        if (d !== drop) d.classList.remove("open");
      });
      drop.classList.toggle("open");
      btn.setAttribute("aria-expanded", drop.classList.contains("open"));
    });
    drop.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
      drop.classList.remove("open");
      btn?.setAttribute("aria-expanded", "false");
    }));
  });

  document.addEventListener("click", () => {
    document.querySelectorAll(".language-dropdown").forEach(d => d.classList.remove("open"));
    document.querySelectorAll(".nav-dropdown").forEach(d => d.classList.remove("open"));
  });

  const navLinks = [...document.querySelectorAll(".desktop-nav a")];
  const targets = navLinks.map(link => ({
    link,
    target: document.querySelector(link.getAttribute("href"))
  })).filter(x => x.target);

  const updateActive = () => {
    const y = window.scrollY + (header?.offsetHeight || 78) + 80;
    let current = targets[0];
    targets.forEach(x => {
      if (x.target.offsetTop <= y) current = x;
    });
    navLinks.forEach(link => link.classList.toggle("active", link === current?.link));
    document.querySelectorAll(".nav-dropdown").forEach(drop => {
      const hasActiveChild = !!drop.querySelector(".nav-dropdown-menu a.active");
      drop.querySelector(".nav-dropdown-btn")?.classList.toggle("active", hasActiveChild);
    });
  };

  window.addEventListener("scroll", updateActive, {passive:true});
  updateActive();

  // Subtle header state on scroll.
  const updateHeader = () => {
    header?.classList.toggle("scrolled", window.scrollY > 20);
  };
  window.addEventListener("scroll", updateHeader, {passive:true});
  updateHeader();
});

/* ===== Imajireka Akademi — Indonesian / English language switcher ===== */
(function () {
  const EN = {
    "AKADEMI": "ACADEMY",
    "Beranda": "Home",
    "Jelajahi": "Explore",
    "Mentor": "Mentor",
    "Kelas": "Classes",
    "Karya Siswa": "Student Work",
    "Testimoni": "Testimonials",
    "Pertanyaan Umum": "FAQ",
    "Kontak": "Contact",
    "Indonesia": "Indonesia",
    "Inggris": "English",
    "Mulai Belajar": "Start Learning",
    "KURSUS DIGITAL ILUSTRASI & ANIMASI": "DIGITAL ILLUSTRATION & ANIMATION COURSES",
    "Belajar membuat": "Learn to make",
    "karya digital dari idemu.": "digital art from your own ideas.",
    "Anak dan remaja belajar ilustrasi digital dan animasi lewat praktik langsung, dibimbing mentor.": "Children and teens learn digital illustration and animation through hands-on practice, guided by mentors.",
    "Lihat Kelas": "View Classes",
    "Lihat Video": "Watch Video",
    "Akhir Pekan": "Weekends",
    "Sabtu · Minggu": "Saturday · Sunday",
    "Dari Dasar": "From the Basics",
    "Cocok untuk pemula": "Beginner-friendly",
    "01 / PILIHAN BIDANG": "01 / AREAS OF STUDY",
    "Apa yang ingin": "What do you",
    "kamu pelajari?": "want to learn?",
    "Tiga bidang yang dipelajari di kelas.": "Three areas you'll study in class.",
    "Ilustrasi": "Illustration",
    "Dari bentuk dasar dan anatomi sampai latar dan pencahayaan.": "From basic shapes and anatomy to backgrounds and lighting.",
    "Desain Karakter": "Character Design",
    "Merancang karakter lengkap dengan ekspresi, pose, dan kostum.": "Design characters with expressions, poses, and costumes.",
    "Animasi": "Animation",
    "Menggerakkan gambar dan menyusunnya menjadi cerita visual.": "Bring drawings to life and turn them into visual stories.",
    "DIGITAL": "DIGITAL",
    "Digital": "Digital",
    "•": "•",
    "ILUSTRASI": "ILLUSTRATION",
    "ANIMASI": "ANIMATION",
    "BELAJAR": "LEARN",
    "sambil": "by",
    "berkarya.": "doing.",
    "02 / PENDEKATAN": "02 / OUR APPROACH",
    "Belajar dengan": "Learn with",
    "praktik": "hands-on",
    "langsung.": "practice.",
    "Peserta tidak hanya mempelajari teori. Mereka langsung mencoba membuat karya dengan arahan mentor.": "Students don't just study theory. They start making work right away, guided by a mentor.",
    "Mulai dari rasa penasaran.": "Start with curiosity.",
    "Coba": "Try",
    "Tidak perlu takut salah. Mencoba adalah bagian dari belajar.": "No need to fear mistakes. Trying is part of learning.",
    "Buat": "Create",
    "Hasil latihan disusun menjadi satu karya utuh.": "Practice comes together as one complete piece.",
    "Kembangkan": "Improve",
    "Kemampuan tumbuh lewat masukan dan latihan.": "Skills grow through feedback and practice.",
    "03 / MENTOR": "03 / MENTORS",
    "Dibimbing": "Guided by",
    "para mentor.": "the mentors.",
    "Kenali mentor yang mendampingi peserta selama belajar.": "Meet the mentors who support students throughout their learning.",
    "Yuda Bento": "Yuda Bento",
    "Prema": "Prema",
    "Ngurah Yudha": "Ngurah Yudha",
    "Mendampingi peserta di kelas Imajireka Akademi.": "Supports students in Imajireka Academy classes.",
    "Kenali Mentor": "Meet the Mentor",
    "04 / KELAS": "04 / CLASSES",
    "Dari": "From",
    "Pemula": "Beginner",
    "sampai": "to",
    "Mahir.": "Advanced.",
    "Pilih sesuai kemampuan,": "Choose by skill level,",
    "tersedia dalam": "available in",
    "3 level.": "3 levels.",
    "LEVEL 01": "LEVEL 01",
    "LEVEL 02": "LEVEL 02",
    "LEVEL 03": "LEVEL 03",
    "MULAI": "START",
    "Mulai": "Start",
    "Dasar": "Basics",
    "Untuk pemula. Kenali alat digital, bentuk dasar, dan cara bercerita lewat gambar.": "For beginners. Get to know digital tools, basic shapes, and visual storytelling.",
    "Pengenalan iPad, Kuas, Layer, Bentuk Dasar & Warna": "Introduction to iPad, Brushes, Layers, Basic Shapes & Colors",
    "Anatomi Hewan & Manusia": "Animal & Human Anatomy",
    "Anatomi Karakter Imajinatif": "Imaginative Character Anatomy",
    "Ekspresi": "Expressions",
    "Latar Belakang, Komposisi, Pencahayaan & Bayangan Dasar": "Backgrounds, Composition, Basic Lighting & Shadows",
    "Bercerita Visual": "Visual Storytelling",
    "Karya Final": "Final Project",
    "Tanya Kelas Ini": "Ask About This Class",
    "TUMBUH": "GROW",
    "Tumbuh": "Grow",
    "Memperdalam ilustrasi karakter, dari proporsi dan pose sampai desain kostum.": "Go deeper into character illustration, from proportion and poses to costume design.",
    "Bentuk & Dasar Karakter + Perspektif Dasar": "Character Shapes & Basics + Basic Perspective",
    "Proporsi & Anatomi": "Proportion & Anatomy",
    "Gestur & Pose Karakter": "Character Gestures & Poses",
    "Desain Karakter & Kostum": "Character Design & Costumes",
    "Ekspresi Karakter": "Character Expressions",
    "Latar Belakang, Pencahayaan & Bayangan": "Backgrounds, Lighting & Shadows",
    "Gambar Berurutan & Animasi": "Sequential Art & Animation",
    "MAHIR": "ADVANCED",
    "Mahir": "Advanced",
    "Kreatif": "Creative",
    "Desain": "Design",
    "Membuat karakter orisinal dan dunianya, lalu mengenal industri.": "Create original characters and their worlds, then get to know the industry.",
    "Review & Eksplorasi Gaya": "Style Review & Exploration",
    "Desain Karakter Original & Pendukung": "Original & Supporting Character Design",
    "Anatomi & Gestur Karakter": "Character Anatomy & Gestures",
    "Ekspresi & Akting Karakter": "Character Expressions & Acting",
    "Perspektif & Pembangunan Dunia (Latar Belakang)": "Perspective & World Building (Backgrounds)",
    "Review Karya & Pengenalan Industri": "Work Review & Industry Introduction",
    "MULAI • TUMBUH • MAHIR": "START • GROW • ADVANCED",
    "05 / ALUR BELAJAR": "05 / LEARNING FLOW",
    "Dari dasar": "From the basics",
    "karya final.": "a finished piece.",
    "Kenali dasar": "Learn the basics",
    "Pelajari alat dan teknik dasar.": "Study the basic tools and techniques.",
    "Praktik": "Practice",
    "Latihan langsung, sedikit demi sedikit.": "Hands-on exercises, step by step.",
    "Arahan": "Guidance",
    "Mentor memberi masukan.": "Mentors give feedback.",
    "Perbaiki": "Refine",
    "Rapikan karya berdasarkan masukan.": "Polish the work based on feedback.",
    "Selesaikan": "Finish",
    "Tuntaskan sebagai karya final.": "Complete it as a final piece.",
    "06 / SUASANA KELAS": "06 / IN THE CLASSROOM",
    "Seperti apa": "What are",
    "kelasnya?": "classes like?",
    "Peserta bebas bertanya dan mencoba di setiap pertemuan.": "Students are free to ask questions and try things in every session.",
    "DI DALAM KELAS": "INSIDE THE CLASS",
    "Belajar bersama,": "Learn together,",
    "berkarya bersama.": "create together.",
    "PERAN MENTOR": "THE MENTOR'S ROLE",
    "Mentor memberi arahan dan masukan. Karya tetap dikerjakan sendiri oleh peserta.": "Mentors give direction and feedback. Students still do the work themselves.",
    "Lihat alur belajar": "See the learning flow",
    "Kelompok kecil": "Small groups",
    "Mentor lebih mudah memperhatikan tiap peserta.": "Mentors can give each student more attention.",
    "Proyek bertahap": "Step-by-step projects",
    "Latihan disusun berurutan hingga menjadi satu karya.": "Exercises build up in order until they become one finished piece.",
    "Masukan pribadi": "Personal feedback",
    "Arahan disesuaikan dengan kemampuan masing-masing.": "Guidance is matched to each student's level.",
    "07 / KARYA SISWA": "07 / STUDENT WORK",
    "Karya yang dibuat": "Work made by",
    "para peserta.": "students.",
    "Hasil latihan dan proyek selama belajar. Klik gambar untuk melihat lebih jelas.": "Exercises and projects from class. Click an image to see it up close.",
    "Barong Study": "Barong Study",
    "oleh siswa Imajireka": "by an Imajireka student",
    "Makhluk Mitologi": "Mythical Creature",
    "Seni Digital": "Digital Art",
    "Eksperimen Visual": "Visual Experiment",
    "Bercerita": "Storytelling",
    "Cerita Kecil": "Little Story",
    "Seni Konsep": "Concept Art",
    "Dunia Tenang": "Peaceful World",
    "Eksplorasi Karakter": "Character Exploration",
    "Mimpi Laut": "Ocean Dream",
    "KARYA PESERTA IMAJIREKA AKADEMI": "IMAJIREKA ACADEMY STUDENT WORK",
    "08 / HASIL BELAJAR": "08 / LEARNING OUTCOMES",
    "Setelah": "After",
    "mengikuti kelas.": "taking the class.",
    "Peserta belajar bertahap, dari mengenal alat sampai menyelesaikan karya sendiri.": "Students learn step by step, from getting to know the tools to finishing their own work.",
    "DASAR": "BASICS",
    "Mengenal alat digital.": "Getting to know digital tools.",
    "Memakai iPad, kuas, dan layer untuk menggambar.": "Using the iPad, brushes, and layers to draw.",
    "KARAKTER": "CHARACTERS",
    "Merancang karakter.": "Designing characters.",
    "Membuat karakter lengkap dengan ekspresi, pose, dan latar.": "Creating characters with expressions, poses, and backgrounds.",
    "KARYA": "FINAL WORK",
    "Menyelesaikan karya.": "Finishing a piece.",
    "Setiap level ditutup dengan satu karya final.": "Every level ends with one final piece.",
    "09 / TESTIMONI": "09 / TESTIMONIALS",
    "Cerita dari": "Stories from",
    "orang tua siswa.": "students' parents.",
    "Orang tua menceritakan pengalaman anak mereka belajar di Imajireka Akademi.": "Parents share their children's learning experience at Imajireka Academy.",
    "Mama Gianka": "Mama Gianka",
    "Mama Aozora": "Mama Aozora",
    "Mama Cello": "Mama Cello",
    "Papa Deva": "Papa Deva",
    "Orang Tua Siswa, Level Mulai": "Student's Parent, Start Level",
    "Orang Tua Siswa, Level Tumbuh": "Student's Parent, Grow Level",
    "Orang Tua Siswa": "Student's Parent",
    "10 / PERTANYAAN UMUM": "10 / FAQ",
    "Sebelum": "Before you",
    "mendaftar.": "sign up.",
    "Jawaban untuk pertanyaan yang sering diajukan orang tua.": "Answers to questions parents often ask.",
    "Pertanyaan lain?": "Other questions?",
    "Lihat kontak →": "See contact →",
    "BUTUH BANTUAN?": "NEED HELP?",
    "?": "?",
    "Ragu memilih": "Not sure which",
    "level?": "level to choose?",
    "Ceritakan minat dan pengalaman menggambar anak. Tim Imajireka akan membantu.": "Tell us about your child's interests and drawing experience. The Imajireka team will help.",
    "Tanya Level": "Ask About Levels",
    "Apakah cocok untuk anak yang baru mulai?": "Is it suitable for children who are just starting?",
    "Ya. Materi dimulai dari dasar dan disesuaikan dengan usia serta pengalaman peserta.": "Yes. Lessons start from the basics and are adapted to each student's age and experience.",
    "Apakah harus sudah bisa menggambar?": "Do they need to know how to draw already?",
    "Tidak. Yang dibutuhkan hanya rasa ingin tahu dan kemauan mencoba.": "No. All it takes is curiosity and a willingness to try.",
    "Apakah belajarnya hanya teori?": "Is it only theory?",
    "Tidak. Peserta langsung berlatih dan mengerjakan proyek secara bertahap.": "No. Students practice right away and work on projects step by step.",
    "Apakah ada masukan dari mentor?": "Do mentors give feedback?",
    "Ada. Mentor memberi masukan selama belajar, sehingga peserta tahu bagian mana yang perlu diperbaiki.": "Yes. Mentors give feedback along the way, so students know what to improve.",
    "Bagaimana memilih level yang cocok?": "How do I choose the right level?",
    "Sesuaikan dengan kemampuan dan pengalaman. Jika ragu, tim Imajireka bisa membantu menentukan.": "Choose based on skill and experience. If you're unsure, the Imajireka team can help.",
    "Bagaimana jadwal kelasnya?": "What is the class schedule?",
    "Kelas berlangsung seminggu sekali, hari Sabtu atau Minggu, dengan beberapa pilihan jam.": "Classes meet once a week on Saturday or Sunday, with several time slots to choose from.",
    "11 / KONTAK": "11 / CONTACT",
    "Siap mulai": "Ready to start",
    "belajar?": "learning?",
    "Hubungi Imajireka Akademi untuk informasi kelas dan pendaftaran.": "Contact Imajireka Academy for class information and registration.",
    "INFO & PENDAFTARAN": "INFO & REGISTRATION",
    "Tanya kelas,": "Ask about classes,",
    "jadwal, atau level.": "schedules, or levels.",
    "Ceritakan minat anak, lalu tim kami bantu memilih level.": "Tell us what your child enjoys, and our team will help choose a level.",
    "Hubungi Kami": "Contact Us",
    "WHATSAPP": "WHATSAPP",
    "+62 851-9081-8491": "+62 851-9081-8491",
    "Info kelas dan pendaftaran": "Class info and registration",
    "INSTAGRAM": "INSTAGRAM",
    "@imajireka": "@imajireka",
    "Aktivitas dan karya siswa": "Activities and student work",
    "LOKASI": "LOCATION",
    "Bali, Indonesia": "Bali, Indonesia",
    "Tanyakan alamat kelas lewat WhatsApp": "Ask for the class address via WhatsApp",
    "IMAJIREKA AKADEMI • BALI, INDONESIA": "IMAJIREKA ACADEMY • BALI, INDONESIA",
    "Kursus ilustrasi digital dan animasi untuk anak dan remaja.": "Digital illustration and animation courses for children and teens.",
    "BANTUAN": "HELP",
    "KONTAK": "CONTACT",
    "WhatsApp": "WhatsApp",
    "Email": "Email",
    "Instagram": "Instagram",
    "Facebook": "Facebook",
    "© 2026 PT. IMAJI DWI KARYA": "© 2026 PT. IMAJI DWI KARYA",
    "Imajireka Akademi": "Imajireka Academy",
    "Video Imajireka Akademi": "Imajireka Academy Video",
    "Video akan segera hadir di sini.": "The video will be available here soon.",
    "Pratinjau karya siswa": "Student work preview"
  };
  const ID = {};
  const ATTR_EN = {
    "Imajireka": "Imajireka",
    "Indonesia": "Indonesia",
    "Anak tersenyum sambil menunjuk ke atas": "Smiling child pointing upward",
    "Peserta menggambar di tablet": "Student drawing on a tablet",
    "Peserta menunjukkan hasil gambar digital": "Student showing a digital drawing",
    "Peserta belajar ilustrasi digital": "Student learning digital illustration",
    "Anak menggambar ilustrasi di tablet": "Child drawing an illustration on a tablet",
    "Peserta mendesain karakter di tablet": "Student designing a character on a tablet",
    "Peserta menunjukkan karya digital di tablet": "Student showing digital artwork on a tablet",
    "Peserta belajar sambil berkarya di Imajireka Akademi": "Student learning by making at Imajireka Academy",
    "Foto Yuda Bento": "Photo of Yuda Bento",
    "Foto Prema": "Photo of Prema",
    "Foto Ngurah Yudha": "Photo of Ngurah Yudha",
    "Peserta belajar di kelas Imajireka Akademi": "Student learning in an Imajireka Academy class",
    "Mentor mendampingi peserta di kelas": "Mentor supporting a student in class",
    "Mentor mendampingi peserta di kelas Imajireka Akademi": "Mentor supporting a student in an Imajireka Academy class",
    "Barong Study karya siswa": "Barong Study, student work",
    "Karya siswa Makhluk Mitologi": "Mythical Creature, student work",
    "Karya siswa Eksperimen Visual": "Visual Experiment, student work",
    "Karya siswa Cerita Kecil": "Little Story, student work",
    "Karya siswa Dunia Tenang": "Peaceful World, student work",
    "Karya siswa Eksplorasi Karakter": "Character Exploration, student work",
    "Karya siswa Mimpi Laut": "Ocean Dream, student work",
    "Video testimoni Mama Gianka, orang tua siswa Imajireka Akademi": "Testimonial video from Mama Gianka, parent of an Imajireka Academy student",
    "Video testimoni Mama Aozora, orang tua siswa Imajireka Akademi": "Testimonial video from Mama Aozora, parent of an Imajireka Academy student",
    "Video testimoni Mama Cello, orang tua siswa Imajireka Akademi": "Testimonial video from Mama Cello, parent of an Imajireka Academy student",
    "Video testimoni Papa Deva, orang tua siswa Imajireka Akademi": "Testimonial video from Papa Deva, parent of an Imajireka Academy student"
  };
  const ARIA_EN = {
    "Imajireka Akademi": "Imajireka Academy",
    "Buka menu": "Open menu",
    "Putar video perkenalan Yuda Bento": "Play intro video of Yuda Bento",
    "Putar video perkenalan Prema": "Play intro video of Prema",
    "Putar video perkenalan Ngurah Yudha": "Play intro video of Ngurah Yudha",
    "Lihat Barong Study": "View Barong Study",
    "Lihat Makhluk Mitologi": "View Mythical Creature",
    "Lihat Eksperimen Visual": "View Visual Experiment",
    "Lihat Cerita Kecil": "View Little Story",
    "Lihat Dunia Tenang": "View Peaceful World",
    "Lihat Eksplorasi Karakter": "View Character Exploration",
    "Lihat Mimpi Laut": "View Ocean Dream",
    "Putar video testimoni Mama Gianka": "Play testimonial video from Mama Gianka",
    "Putar video testimoni Mama Aozora": "Play testimonial video from Mama Aozora",
    "Putar video testimoni Mama Cello": "Play testimonial video from Mama Cello",
    "Putar video testimoni Papa Deva": "Play testimonial video from Papa Deva",
    "Tutup video": "Close video",
    "Tutup galeri": "Close gallery",
    "Navigasi geser kiri dan kanan": "Swipe left and right navigation",
    "Geser ke kiri": "Swipe left",
    "Geser ke kanan": "Swipe right"
  };
  const originals = new WeakMap();

  function normalize(value) {
    return String(value || "").replace(/\s+/g, " ").trim();
  }

  function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }

  function translateText(lang) {
    const dictionary = lang === "en" ? EN : ID;
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    const nodes = [];
    let node;
    while ((node = walker.nextNode())) nodes.push(node);

    nodes.forEach(textNode => {
      if (!originals.has(textNode)) originals.set(textNode, textNode.nodeValue);
      const original = originals.get(textNode);
      const key = normalize(original);
      if (!key) return;

      let translated = dictionary[key];
      if (!translated) {
        // Some labels are split by inline elements or contain non-breaking spaces.
        // Only match whole words/phrases (word-boundary-safe) so we never slice
        // into the middle of an unrelated word (e.g. "mentor" must not match "to").
        const match = Object.keys(dictionary)
          .sort((a, b) => b.length - a.length)
          .find(k => k && new RegExp(`(^|\\s)${escapeRegExp(k)}($|\\s)`).test(key));
        if (match) {
          const re = new RegExp(`(^|\\s)${escapeRegExp(match)}($|\\s)`);
          translated = key.replace(re, (_full, before, after) => before + dictionary[match] + after);
        }
      }
      if (translated && translated !== key) {
        const leading = String(original).match(/^\s*/)?.[0] || "";
        const trailing = String(original).match(/\s*$/)?.[0] || "";
        textNode.nodeValue = leading + translated + trailing;
      } else {
        textNode.nodeValue = original;
      }
    });
  }

  function translateAttributes(lang) {
    const toEnglish = lang === "en";
    document.querySelectorAll("[alt]").forEach(el => {
      if (!el.dataset.i18nAltOriginal) el.dataset.i18nAltOriginal = el.getAttribute("alt") || "";
      const original = el.dataset.i18nAltOriginal;
      el.setAttribute("alt", toEnglish ? (ATTR_EN[original] || original) : original);
    });

    document.querySelectorAll("[aria-label]").forEach(el => {
      if (!el.dataset.i18nAriaOriginal) el.dataset.i18nAriaOriginal = el.getAttribute("aria-label") || "";
      const original = el.dataset.i18nAriaOriginal;
      el.setAttribute("aria-label", toEnglish ? (ARIA_EN[original] || original) : original);
    });

    const title = document.querySelector("title");
    if (title) title.textContent = toEnglish
      ? "Imajireka Academy | Digital Illustration & Animation Courses"
      : "Imajireka Akademi | Kursus Digital Ilustrasi & Animasi";

    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", toEnglish
      ? "Imajireka Academy, digital illustration and animation courses for children and teens in Bali. Learn through hands-on practice with mentor guidance."
      : "Imajireka Akademi, kursus ilustrasi digital dan animasi untuk anak dan remaja di Bali. Belajar lewat praktik langsung dengan bimbingan mentor.");
  }

  function updateLanguageUI(lang) {
    const isEnglish = lang === "en";
    document.documentElement.lang = isEnglish ? "en" : "id";

    const current = document.querySelector(".lang-btn img");
    if (current) {
      current.src = isEnglish ? "assets/flags/england.svg" : "assets/flags/indonesia.svg";
      current.alt = isEnglish ? "English" : "Indonesia";
    }

    const buttons = document.querySelectorAll(".lang-menu button");
    buttons.forEach(btn => {
      const isIndonesianButton = btn.querySelector('img[src*="indonesia"]') !== null;
      btn.setAttribute("aria-pressed", String(isEnglish ? !isIndonesianButton : isIndonesianButton));
      const img = btn.querySelector("img");
      const label = isIndonesianButton
        ? (isEnglish ? "Indonesian" : "Indonesia")
        : (isEnglish ? "English" : "Inggris");
      // Keep the flag, but update the visible language name.
      if (img) {
        let textNode = Array.from(btn.childNodes).find(n => n.nodeType === Node.TEXT_NODE);
        if (textNode) textNode.nodeValue = " " + label;
      }
    });
  }

  function setLanguage(lang) {
    const language = lang === "en" ? "en" : "id";
    translateText(language);
    translateAttributes(language);
    updateLanguageUI(language);
    localStorage.setItem("imajireka-language", language);
  }

  function initLanguageSwitcher() {
    const menu = document.querySelector(".lang-menu");
    if (!menu) return;

    menu.querySelectorAll("button").forEach(btn => {
      btn.addEventListener("click", event => {
        event.preventDefault();
        event.stopPropagation();
        const img = btn.querySelector("img");
        const language = img && img.src.includes("/england.svg") ? "en" : "id";
        setLanguage(language);
        document.querySelector(".language-dropdown")?.classList.remove("open");
        document.querySelector(".lang-btn")?.setAttribute("aria-expanded", "false");
      });
    });

    setLanguage(localStorage.getItem("imajireka-language") || "id");
  }





  // Smooth section reveal on scroll. Elements animate only when they enter
  // the viewport and remain visible afterwards.
  function initScrollAnimations() {
    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const targets = [
      [".discover-heading", "scroll-reveal-left"],
      [".discover-card", "scroll-reveal"],
      [".philosophy-visual", "scroll-reveal-left"],
      [".philosophy-content", "scroll-reveal-right"],
      [".classes-ref-heading", "scroll-reveal-left"],
      [".classes-ref-card", "scroll-reveal"],
      [".process-heading", "scroll-reveal-left"],
      [".process-step", "scroll-reveal"],
      [".faq-item", "scroll-reveal"],
      [".contact", "scroll-reveal"],
      ["footer", "scroll-reveal"]
    ];

    const elements = [];
    targets.forEach(([selector, className]) => {
      document.querySelectorAll(selector).forEach((el, index) => {
        el.classList.add(className);
        if (className === "scroll-reveal") {
          el.style.transitionDelay = `${Math.min(index * 0.07, 0.35)}s`;
        }
        elements.push(el);
      });
    });

    // Generic fallback for major sections that don't have a specific selector.
    document.querySelectorAll("main > section").forEach(section => {
      if (!section.querySelector(".scroll-reveal, .scroll-reveal-left, .scroll-reveal-right")) {
        section.classList.add("scroll-reveal");
        elements.push(section);
      }
    });

    if (!("IntersectionObserver" in window)) {
      elements.forEach(el => el.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          obs.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.12,
      rootMargin: "0px 0px -8% 0px"
    });

    elements.forEach(el => observer.observe(el));
  }

  // Persistent left/right controls for every horizontal-scroll section on phone/iPad.
  function initSwipeHints() {
    const configs = [
      { parent: ".classes-reference", scroller: ".classes-ref-grid" },
      { parent: ".discover", scroller: ".discover-cards" },
      { parent: ".process", scroller: ".process-visual" }
    ];

    configs.forEach(({ parent, scroller }) => {
      const section = document.querySelector(parent);
      const track = section?.querySelector(scroller);
      if (!section || !track) return;

      let hint = section.querySelector(":scope > .swipe-hint");
      if (!hint) {
        hint = document.createElement("div");
        hint.className = "swipe-hint";
        hint.setAttribute("aria-label", "Navigasi geser kiri dan kanan");
        hint.innerHTML = `
          <button type="button" class="swipe-arrow swipe-arrow-left" aria-label="Geser ke kiri">
            <i class="fa-solid fa-chevron-left"></i>
          </button>
          <button type="button" class="swipe-arrow swipe-arrow-right" aria-label="Geser ke kanan">
            <i class="fa-solid fa-chevron-right"></i>
          </button>
        `;
        section.appendChild(hint);
      }

      const left = hint.querySelector(".swipe-arrow-left");
      const right = hint.querySelector(".swipe-arrow-right");

      // Arrows are visual indicators only. Horizontal movement is native
      // touch/trackpad scrolling; no JS scrollBy is used to avoid double/jumpy movement.

      // Keep the arrows visible at all times. They are directional guidance,
      // not a temporary notification that disappears after the first swipe.
      const update = () => {
        const hasOverflow = track.scrollWidth > track.clientWidth + 4;
        hint.classList.toggle("has-overflow", hasOverflow);
      };

      window.addEventListener("resize", update, { passive: true });
      requestAnimationFrame(update);
    });
  }



  // iPad: allow direct horizontal dragging in Chrome Device Toolbar and
  // mouse/trackpad environments, while preserving native vertical page scroll.
  // No wheel handler and no scrollBy() are used, so movement cannot double.
  function initIpadHorizontalDrag() {
    if (!window.matchMedia("(min-width: 768px) and (max-width: 1024px)").matches) return;

    const selectors = [".classes-ref-grid", ".discover-cards", ".process-visual"];
    selectors.forEach(selector => {
      document.querySelectorAll(selector).forEach(track => {
        if (track.dataset.horizontalDragReady === "1") return;
        track.dataset.horizontalDragReady = "1";

        let startX = 0;
        let startY = 0;
        let startScrollLeft = 0;
        let dragging = false;
        let decided = false;

        track.addEventListener("pointerdown", e => {
          if (e.pointerType === "touch" && e.isPrimary === false) return;
          startX = e.clientX;
          startY = e.clientY;
          startScrollLeft = track.scrollLeft;
          dragging = false;
          decided = false;
        }, { passive: true });

        track.addEventListener("pointermove", e => {
          if (!e.buttons && e.pointerType !== "touch") return;
          const dx = e.clientX - startX;
          const dy = e.clientY - startY;

          if (!decided) {
            if (Math.abs(dx) < 8 && Math.abs(dy) < 8) return;
            decided = true;
            dragging = Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 8;
            if (dragging) {
              try { track.setPointerCapture(e.pointerId); } catch (_) {}
              track.classList.add("is-pointer-dragging");
            }
          }

          if (!dragging) return;
          e.preventDefault();
          track.scrollLeft = startScrollLeft - dx;
        }, { passive: false });

        const stop = e => {
          if (dragging) {
            try { track.releasePointerCapture(e.pointerId); } catch (_) {}
            track.classList.remove("is-pointer-dragging");
          }
          dragging = false;
          decided = false;
        };

        track.addEventListener("pointerup", stop, { passive: true });
        track.addEventListener("pointercancel", stop, { passive: true });
        track.addEventListener("lostpointercapture", stop, { passive: true });
      });
    });
  }

  // Image popup / lightbox for the "Karya Siswa" gallery. Clicking (or
  // pressing Enter/Space on) a gallery thumbnail opens the same image,
  // uncropped, in an overlay. Uses event delegation on the mosaic so it
  // keeps working even if tiles are filtered/added later.
  function initGalleryLightbox() {
    const modal = document.getElementById("galleryLightbox");
    const mosaic = document.querySelector(".student-gallery-mosaic");
    if (!modal || !mosaic) return;

    const imageEl = modal.querySelector(".gallery-lightbox-image");
    const closeTriggers = modal.querySelectorAll("[data-lightbox-close]");
    const closeBtn = modal.querySelector(".gallery-lightbox-close");
    let lastFocused = null;

    function openLightbox(trigger) {
      if (!trigger || !imageEl) return;
      lastFocused = trigger;
      imageEl.src = trigger.currentSrc || trigger.src;
      imageEl.alt = trigger.alt || "";
      modal.setAttribute("aria-hidden", "false");
      document.body.classList.add("gallery-lightbox-open");
      document.addEventListener("keydown", onKeydown);
      closeBtn?.focus();
    }

    function closeLightbox() {
      if (modal.getAttribute("aria-hidden") === "true") return;
      modal.setAttribute("aria-hidden", "true");
      document.body.classList.remove("gallery-lightbox-open");
      document.removeEventListener("keydown", onKeydown);
      if (imageEl) {
        imageEl.src = "";
        imageEl.alt = "";
      }
      if (lastFocused && typeof lastFocused.focus === "function") {
        lastFocused.focus();
      }
    }

    function onKeydown(e) {
      if (e.key === "Escape") closeLightbox();
    }

    // Given any element inside a gallery tile (the thumbnail itself, or the
    // small round arrow button), find the actual <img> to show in the popup.
    function resolveTriggerImage(el) {
      if (el.matches(".gallery-lightbox-trigger")) return el;
      const tile = el.closest(".gallery-tile");
      return tile ? tile.querySelector(".gallery-lightbox-trigger") : null;
    }

    // Event delegation: one listener handles every current and future
    // ".gallery-lightbox-trigger" image, and every "[data-lightbox-open]"
    // arrow button, inside the mosaic.
    mosaic.addEventListener("click", e => {
      const el = e.target.closest(".gallery-lightbox-trigger, [data-lightbox-open]");
      if (!el) return;
      const image = resolveTriggerImage(el);
      if (image) openLightbox(image);
    });

    mosaic.addEventListener("keydown", e => {
      if (e.key !== "Enter" && e.key !== " ") return;
      const el = e.target.closest(".gallery-lightbox-trigger, [data-lightbox-open]");
      if (!el) return;
      e.preventDefault();
      const image = resolveTriggerImage(el);
      if (image) openLightbox(image);
    });

    closeTriggers.forEach(el => {
      el.addEventListener("click", closeLightbox);
    });
  }

  function initVideoModal() {
    const modal = document.getElementById("videoModal");
    if (!modal) return;

    const frame = modal.querySelector(".video-modal-frame");
    const openTriggers = document.querySelectorAll("[data-video-open]");
    const closeTriggers = modal.querySelectorAll("[data-video-close]");
    let lastFocused = null;

    const dialog = modal.querySelector(".video-modal-dialog");

    const defaultFrameData = {
      type: frame?.dataset.videoType,
      src: frame?.dataset.videoSrc,
      id: frame?.dataset.videoId,
      poster: frame?.dataset.videoPoster,
      ratio: frame?.dataset.videoRatio || "landscape"
    };

    function applyTriggerData(trigger) {
      if (!frame) return;
      const d = trigger?.dataset || {};
      frame.dataset.videoType = d.videoType || defaultFrameData.type || "";
      if (d.videoSrc) frame.dataset.videoSrc = d.videoSrc;
      else if (defaultFrameData.src) frame.dataset.videoSrc = defaultFrameData.src;
      else delete frame.dataset.videoSrc;

      if (d.videoId) frame.dataset.videoId = d.videoId;
      else if (defaultFrameData.id) frame.dataset.videoId = defaultFrameData.id;
      else delete frame.dataset.videoId;

      if (d.videoPoster) frame.dataset.videoPoster = d.videoPoster;
      else if (defaultFrameData.poster) frame.dataset.videoPoster = defaultFrameData.poster;
      else delete frame.dataset.videoPoster;

      const ratio = d.videoRatio || defaultFrameData.ratio || "landscape";
      if (dialog) dialog.classList.toggle("video-modal-dialog--portrait", ratio === "portrait");
    }

    function buildMedia() {
      if (!frame) return;
      const type = frame.dataset.videoType;
      const placeholder = frame.querySelector(".video-modal-placeholder");

      if (type === "youtube" && frame.dataset.videoId) {
        if (placeholder) placeholder.hidden = true;
        const iframe = document.createElement("iframe");
        iframe.src = "https://www.youtube.com/embed/" + frame.dataset.videoId +
          "?autoplay=1&mute=1&playsinline=1&rel=0";
        iframe.title = "Video Imajireka Akademi";
        iframe.allow = "autoplay; encrypted-media; picture-in-picture";
        iframe.allowFullscreen = true;
        frame.appendChild(iframe);
      } else if (type === "file" && frame.dataset.videoSrc) {
        if (placeholder) placeholder.hidden = true;
        const video = document.createElement("video");
        video.src = frame.dataset.videoSrc;
        if (frame.dataset.videoPoster) video.poster = frame.dataset.videoPoster;
        video.autoplay = true;
        video.muted = true;
        video.playsInline = true;
        video.controls = true;
        frame.appendChild(video);
        video.play().catch(() => {});
      }
    }

    function destroyMedia() {
      if (!frame) return;
      const media = frame.querySelector("iframe, video");
      if (media) media.remove();
      const placeholder = frame.querySelector(".video-modal-placeholder");
      if (placeholder) placeholder.hidden = false;
    }

    function openModal(trigger) {
      lastFocused = trigger || document.activeElement;
      applyTriggerData(trigger);
      modal.setAttribute("aria-hidden", "false");
      document.body.classList.add("video-modal-open");
      buildMedia();
      const closeBtn = modal.querySelector(".video-modal-close");
      if (closeBtn) closeBtn.focus();
      document.addEventListener("keydown", onKeydown);
    }

    function closeModal() {
      modal.setAttribute("aria-hidden", "true");
      document.body.classList.remove("video-modal-open");
      document.removeEventListener("keydown", onKeydown);
      destroyMedia();
      if (lastFocused && typeof lastFocused.focus === "function") {
        lastFocused.focus();
      }
    }

    function onKeydown(e) {
      if (e.key === "Escape") closeModal();
    }

    openTriggers.forEach(btn => {
      btn.addEventListener("click", () => openModal(btn));
    });

    closeTriggers.forEach(el => {
      el.addEventListener("click", closeModal);
    });
  }

  // Lets the testimonial row be dragged with a mouse too (not just touch),
  // which matters when someone tests "mobile" by simply narrowing a desktop
  // browser window and has no touchscreen or trackpad to swipe with.
  function initTestimonialDragScroll() {
    const track = document.getElementById("testimonialTrack");
    if (!track || track.dataset.dragReady === "1") return;
    track.dataset.dragReady = "1";

    let startX = 0;
    let startScrollLeft = 0;
    let dragging = false;
    let decided = false;
    let moved = false;

    track.addEventListener("pointerdown", e => {
      if (e.pointerType === "touch") return; // native touch scrolling handles this
      startX = e.clientX;
      startScrollLeft = track.scrollLeft;
      dragging = false;
      decided = false;
      moved = false;
    });

    track.addEventListener("pointermove", e => {
      if (e.pointerType === "touch") return;
      if (!e.buttons) return;
      const dx = e.clientX - startX;
      if (!decided) {
        if (Math.abs(dx) < 6) return;
        decided = true;
        dragging = true;
        try { track.setPointerCapture(e.pointerId); } catch (_) {}
        track.classList.add("is-dragging");
      }
      if (!dragging) return;
      moved = true;
      track.scrollLeft = startScrollLeft - dx;
    });

    const stop = e => {
      if (dragging) {
        try { track.releasePointerCapture(e.pointerId); } catch (_) {}
        track.classList.remove("is-dragging");
      }
      dragging = false;
      decided = false;
    };
    track.addEventListener("pointerup", stop);
    track.addEventListener("pointercancel", stop);
    track.addEventListener("pointerleave", stop);

    // Swallow the click that immediately follows a drag so it doesn't
    // accidentally open the video modal on the card underneath the cursor.
    track.addEventListener("click", e => {
      if (moved) {
        e.preventDefault();
        e.stopPropagation();
        moved = false;
      }
    }, true);
  }

  if (document.readyState === "loading") {

    document.addEventListener("DOMContentLoaded", () => {
      initSwipeHints();
      initLanguageSwitcher();
      initIpadHorizontalDrag();
      initScrollAnimations();
      initVideoModal();
      initGalleryLightbox();
      initTestimonialDragScroll();
    });
  } else {
    initSwipeHints();
    initLanguageSwitcher();
    initIpadHorizontalDrag();
    initScrollAnimations();
    initVideoModal();
    initGalleryLightbox();
    initTestimonialDragScroll();
  }
})();