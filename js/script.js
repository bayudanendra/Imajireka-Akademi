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
  const EN = {"AKADEMI":"ACADEMY","Beranda":"Home","Jelajahi":"Explore","Kelas":"Classes","Pertanyaan Umum":"FAQ","Program":"Programs","Mentor":"Mentor","03 / MENTOR":"03 / MENTOR","Dibimbing oleh":"Guided by","mentor":"mentors","yang tepat.":"who are the right fit.","Setiap kelas didampingi mentor berpengalaman di bidangnya.":"Every class is guided by an experienced mentor in their field.","(Teks placeholder — silakan ganti dengan profil mentor sebenarnya.)":"(Placeholder text — please replace with the real mentor profile.)","Nama Mentor 1":"Mentor Name 1","Nama Mentor 2":"Mentor Name 2","Nama Mentor 3":"Mentor Name 3","Spesialisasi / Bidang":"Specialty / Field","Deskripsi singkat pengalaman dan keahlian mentor ini. Ganti dengan bio asli.":"A short description of this mentor's experience and expertise. Replace with the real bio.","Cara Kami Belajar":"How We Learn","Karya Siswa":"Student Work","PERTANYAAN UMUM":"FAQ","Inggris":"English","Mulai Belajar":"Start Learning","PEMBELAJARAN KREATIF UNTUK MINDA YANG PENUH RASA INGIN TAHU":"CREATIVE LEARNING FOR CURIOUS MINDS","Punya ide?":"Have an idea?","Mari bikin jadi nyata.":"Let's make it real.","Imajireka Akademi adalah ruang belajar kreatif tempat anak-anak mengeksplorasi, belajar, dan membuat karya dengan bimbingan mentor.":"Imajireka Academy is a creative learning space where children explore, learn, and create with mentor guidance.","Lihat Video":"Watch Video","Kenalan dengan Mentor":"Meet the Mentor","Belajar · Buat":"Learn · Create","Ide-Ide Bagus":"Great Ideas","Brighter Future!":"A Brighter Future!","Dipercaya oleh":"Trusted by","Sekolah Kreatif":"Creative School","Rumah Anak":"Children’s House","KOMUNITAS":"COMMUNITY","SENI BALI":"BALI ARTS","Bali Kreatif":"Bali Creative","Komunitas":"Community","Orang Tua Hebat":"Great Parents","TEMUKAN":"DISCOVER","Tidak perlu langsung tahu jawabannya. Pilih rasa ingin tahu yang paling dekat denganmu.":"You don't need to know the answer right away. Choose the curiosity that feels closest to you.","Ide kecil":"A small idea","bisa jadi":"can become","karya besar!":"a great creation!","Menggambar":"Drawing","kamu":"your","Ilustrasi":"Illustration","Karakter, ilustrasi, cerita, dan dunia yang ada di kepalamu.":"Characters, illustrations, stories, and worlds from your imagination.","Jelajahi Ilustrasi":"Explore Illustration","Pikirkan":"Think about","Desain it.":"Design it.","Desain":"Design","Belajar membuat visual yang punya pesan dan karakter.":"Learn to create visuals with meaning and character.","Jelajahi Desain":"Explore Design","Bangun":"Build","Buat":"Create","Gabungkan ide, skill, dan proyek menjadi karya personal.":"Combine ideas, skills, and projects into personal creations.","Jelajahi Proyek":"Explore Projects","BERPIKIR":"THINK","BERKARYA":"CREATE","BERTUMBUH BERSAMA IMAJIREKA":"GROW WITH IMAJIREKA","BELAJAR":"LEARN","02 / FILOSOFI KAMI":"02 / OUR PHILOSOPHY","Belajar itu":"Learning should","seharusnya":"be","menyenangkan.":"fun.","Kami percaya anak tidak harus menunggu “jago” untuk mulai berkarya. Justru dari mencoba, bereksperimen, dan membuat kesalahanlah skill tumbuh.":"We believe children don’t have to wait until they are “good enough” to start creating. Skills grow through trying, experimenting, and making mistakes.","Mulai dari rasa penasaran dan temukan hal yang ingin kamu buat.":"Start with curiosity and discover what you want to create.","Bereksperimen":"Experiment","Coba berbagai cara, alat, warna, bentuk, dan ide tanpa takut salah.":"Try different methods, tools, colors, shapes, and ideas without being afraid of mistakes.","Ubah ide menjadi karya yang bisa dilihat, disentuh, dan dibanggakan.":"Turn ideas into creations that can be seen, touched, and celebrated.","Berkembang":"Grow","Dapatkan masukan, perbaiki, lalu tumbuh satu karya demi satu karya.":"Get feedback, improve, and grow one creation at a time.","IDE → PROSES → KARYA":"IDEAS → PROCESS → CREATION","Lihat bagaimana kami belajar":"See how we learn","KELAS":"CLASSES","04 / KELAS":"04 / CLASSES","Pemula":"Beginner","Profesional.":"Professional.","Belajar dari dasar sampai mahir,":"Learn from the basics to advanced skills,","tersedia dalam":"available in","3 Level.":"3 Levels.","Setiap karya":"Every great creation","besar dimulai dari":"starts with a small","langkah kecil.":"step.","“Belajar hari ini,":"“Learn today,","karya yang lebih baik":"create better work","esok hari.”":"tomorrow.”","MULAI":"START","Mulai":"Start","Dasar":"Basics","Kenali dasar-dasar ilustrasi dan temukan potensimu di dunia kreatif.":"Learn the fundamentals of illustration and discover your potential in the creative world.","Pengenalan iPad, Kuas, Lapisan & Bentuk Dasar Warna":"Introduction to iPad, Brushes, Layers & Basic Shapes and Colors","Anatomi Hewan & Manusia":"Animal & Human Anatomy","Anatomi Karakter Imajinatif":"Imaginative Character Anatomy","Ekspresi":"Expressions","Latar Belakang, Komposisi & Pencahayaan/Bayangan dasar":"Background, Composition & Basic Lighting/Shadows","Bercerita Visual":"Visual Storytelling","Animasi":"Animation","Karya Final":"Final Project","Lihat Detail Kelas":"View Class Details","Mulai perjalanan":"Start your creative","kreatifmu di sini.":"journey here.","TUMBUH":"GROW","Tumbuh":"Grow","Kembangkan skill, perluas imajinasimu, dan mulai menciptakan karya yang lebih hidup.":"Develop your skills, expand your imagination, and start creating more vibrant work.","Bentuk & Dasar Karakter + Perspektif Dasar":"Character Shapes & Basics + Basic Perspective","Proporsi & Anatomi":"Proportion & Anatomy","Gestur & Pose Karakter":"Character Gestures & Poses","Desain Karakter & Kostum":"Character Design & Costumes","Ekspresi Karakter":"Character Expressions","Latar Belakang, Pencahayaan & Bayangan":"Background, Lighting & Shadows","Sequential & Animasi":"Sequential Art & Animation","Wujudkan idemu":"Bring your ideas to life","dengan skill yang lebih luas.":"with broader skills.","MAHIR":"ADVANCED","Mahir":"Advanced","Kreatif":"Creative","Wujudkan karya terbaikmu, siap ke dunia profesional.":"Create your best work and get ready for the professional world.","Review & Eksplorasi Gaya":"Style Review & Exploration","Desain Karakter Original & Pendukung":"Original & Supporting Character Design","Anatomi & Gestur Karakter":"Character Anatomy & Gestures","Ekspresi & Akting Karakter":"Character Expressions & Acting","Perspektif & Pembangunan Dunia (Latar Belakang)":"Perspective & World Building (Background)","Review Karya & Pengenalan Industri":"Work Review & Industry Introduction","Siap melangkah":"Ready to step into","ke dunia profesional.":"the professional world.","Durasi kelas":"Class duration","8x Pertemuan / level":"8 sessions / level","Frekuensi":"Frequency","1x Pertemuan / minggu":"1 session / week","Durasi":"Duration","90 menit / pertemuan":"90 minutes / session","Pilihan Hari":"Day options","Sabtu atau Minggu":"Saturday or Sunday","Pilihan Waktu":"Time options","10.00 – 11.30":"10:00 – 11:30","13.00 – 14.30":"13:00 – 14:30","15.00 – 16.30":"15:00 – 16:30","Maksimal":"Maximum","8 Anak / kelas":"8 children / class","Daftar Sekarang":"Register Now","BERPIKIR • BERKARYA • BERTUMBUH BERSAMA IMAJIREKA":"THINK • CREATE • GROW WITH IMAJIREKA","05 / CARA KAMI BELAJAR":"05 / HOW WE LEARN","Dari ide":"From idea","creation.":"to creation.","Temukan ide.":"Find an idea.","Coba":"Try","Coba dan eksplorasi.":"Try and explore.","Masukan":"Feedback","Dengar, perbaiki.":"Listen and improve.","Jadikan karya.":"Turn it into a creation.","Tunjukkan":"Show it","Berani tunjukkan.":"Be brave enough to show it.","06 / PENGALAMAN":"06 / THE EXPERIENCE","Belajar bukan":"Learning isn’t","cuma":"just","tentang hasil.":"about the result.","Di Imajireka, proses belajar dibuat dekat, aktif, dan menyenangkan. Anak punya ruang untuk mencoba, bertanya, dan menemukan caranya sendiri.":"At Imajireka, learning is personal, active, and fun. Children have room to try, ask questions, and find their own way.","DI DALAM KELAS":"INSIDE THE CLASS","Belajar bersama,":"Learn together,","berkarya bersama.":"create together.","APA YANG TERJADI DI KELAS":"WHAT HAPPENS IN CLASS","Setiap pertemuan punya ruang untuk eksplorasi. Mentor hadir untuk mengarahkan, bukan mengambil alih proses kreatif anak.":"Every session creates room for exploration. Mentors guide children without taking over their creative process.","Lihat cara kami belajar":"See how we learn","Kelompok kecil":"Small groups","Lebih banyak ruang untuk bertanya, mencoba, dan mendapat perhatian mentor.":"More room to ask questions, experiment, and receive mentor attention.","Proyek praktik langsung":"Hands-on projects","Belajar lewat praktik nyata, dari ide pertama sampai karya selesai.":"Learn through real practice, from the first idea to the finished creation.","Masukan pribadi":"Personal feedback","Setiap karya mendapat arahan yang membantu anak berkembang dengan caranya sendiri.":"Every creation receives guidance that helps each child grow in their own way.","07 / KARYA SISWA":"07 / STUDENT WORK","Karya Siswa yang":"Student Work That","Menginspirasi.":"Inspires.","Setiap karya punya cerita. Lihat bagaimana ide-ide kecil tumbuh menjadi karya luar biasa bersama Imajireka.":"Every creation has a story. See how small ideas grow into extraordinary work with Imajireka.","Kreativitas":"Creativity","Tanpa Batas":"Without Limits","Semua":"All","Desain Karakter":"Character Design","Seni Digital":"Digital Art","Seni Konsep":"Concept Art","Bercerita":"Storytelling","Lainnya":"Other","oleh siswa Imajireka":"by an Imajireka student","Makhluk Mitologi":"Mythical Creature","Eksperimen Visual":"Visual Experiment","Cerita Kecil":"Little Story","Dunia Tenang":"Peaceful World","Eksplorasi Karakter":"Character Exploration","Mimpi Laut":"Ocean Dream","contoh karya siswa":"student work example","Lihat Semua Karya":"View All Work","Pratinjau karya siswa":"Student work preview","BERKEMBANG":"GROW","08 / PERJALANAN KREATIFMU":"08 / YOUR CREATIVE JOURNEY","Dari coba-coba":"From experimenting","jadi":"to becoming","percaya diri.":"confident.","Setiap anak punya titik awal yang berbeda. Di Imajireka, mereka belajar sedikit demi sedikit sampai berani membuat sesuatu dengan caranya sendiri.":"Every child has a different starting point. At Imajireka, they learn step by step until they are confident enough to create in their own way.","JELAJAHI":"EXPLORE","Coba dan temukan.":"Try and discover.","Mengenal alat, teknik, dan berbagai cara untuk mengekspresikan ide.":"Learn about tools, techniques, and different ways to express ideas.","BUAT":"CREATE","Mulai berkarya.":"Start creating.","Mengembangkan ide menjadi ilustrasi, karakter, dan proyek dengan caranya sendiri.":"Develop ideas into illustrations, characters, and projects in their own way.","PERCAYA DIRI":"CONFIDENCE","Berani menunjukkan.":"Dare to show.","Menyelesaikan karya, menerima masukan, dan percaya pada proses kreatifnya.":"Finish a creation, receive feedback, and trust the creative process.","MEMBUAT":"CREATING","Testimoni":"Testimonials","09 / TESTIMONI":"09 / TESTIMONIALS","Dengar cerita":"Hear stories","dari":"from","orang tua kami.":"our parents.","Cerita nyata dari orang tua dan mentor tentang bagaimana Imajireka membantu anak-anak berani mencoba dan berkarya.":"Real stories from parents and mentors on how Imajireka helps children feel brave enough to try and create.","Orang Tua Siswa, Level Mulai":"Parent of a Student, Beginner Level","Orang Tua Siswa, Level Tumbuh":"Parent of a Student, Growth Level","Orang Tua Siswa, Level Mahir":"Parent of a Student, Advanced Level","Mentor, Imajireka Akademi":"Mentor, Imajireka Academy","10 / Pertanyaan Umum":"10 / FAQ","Sebelum kamu":"Before you","Masih ada yang ingin kamu tahu? Kami sudah merangkum beberapa pertanyaan yang paling sering ditanyakan orang tua.":"Still have questions? We've summarized some of the questions parents ask most often.","Tidak menemukan jawaban?":"Can't find the answer?","Hubungi kami →":"Contact us →","PERLU DIKETAHUI":"GOOD TO KNOW","Ragu memilih":"Not sure which","kelas yang tepat?":"class is right for you?","Tenang. Kamu tidak harus langsung tahu semuanya. Kami bisa membantu menemukan titik mulai yang paling sesuai.":"Don't worry. You don't have to know everything right away. We can help you find the best starting point.","Tanya Mentor":"Ask a Mentor","Apakah cocok untuk anak yang baru mulai?":"Is it suitable for children who are just starting?","Ya. Pembelajaran dimulai dari fundamental dan disesuaikan dengan usia serta pengalaman peserta.":"Yes. Learning starts with the fundamentals and is adapted to each participant’s age and experience.","Apakah harus sudah bisa menggambar?":"Do they need to know how to draw already?","Tidak harus. Yang penting adalah rasa ingin tahu dan kemauan untuk mencoba. Skill akan berkembang bersama proses belajar.":"Not at all. What matters is curiosity and a willingness to try. Skills develop through the learning process.","Apakah belajar hanya teori?":"Is learning only about theory?","Tidak. Peserta belajar melalui praktik, latihan, eksplorasi, dan proyek yang dibuat secara bertahap.":"No. Participants learn through practice, exercises, exploration, and projects developed step by step.","Apakah ada masukan dari mentor?":"Do mentors provide feedback?","Ada. Mentor memberikan arahan dan masukan selama proses agar peserta memahami apa yang sudah baik dan apa yang bisa dikembangkan.":"Yes. Mentors provide guidance and feedback so participants understand what is working and what can be improved.","Bagaimana cara memilih tingkat yang cocok?":"How do I choose the right level?","Level dapat dipilih berdasarkan kemampuan dan pengalaman. Jika masih ragu, tim Imajireka dapat membantu menentukan titik mulai yang paling sesuai.":"The level can be chosen based on ability and experience. If you’re unsure, the Imajireka team can help find the best starting point.","Bagaimana jadwal kelasnya?":"What is the class schedule?","Kelas berlangsung satu kali seminggu dengan pilihan hari Sabtu atau Minggu dan beberapa pilihan waktu.":"Classes meet once a week, with Saturday or Sunday options and several available time slots.","11 / MARI BERKARYA":"11 / LET'S CREATE","Siap mulai":"Ready to start","berkarya?":"creating?","Ceritakan sedikit tentang anak dan minat kreatifnya. Kami akan membantu menemukan langkah pertama yang paling sesuai.":"Tell us a little about the child and their creative interests. We'll help find the best first step.","MULAI PERJALANAN KREATIF":"START YOUR CREATIVE JOURNEY","Ide kecil hari ini,":"A small idea today,","bisa jadi karya besar.":"can become something great.","Hubungi Imajireka untuk informasi kelas, jadwal, dan rekomendasi level.":"Contact Imajireka for class information, schedules, and level recommendations.","Chat melalui WhatsApp":"Chat on WhatsApp","Kirim Email":"Send Email","Respons cepat untuk pertanyaan kelas":"Quick responses to class questions","Lihat aktivitas dan karya siswa":"See student activities and work","LOKASI":"LOCATION","Tempat belajar dan berkarya bersama":"A place to learn and create together","Ruang belajar kreatif untuk anak-anak yang penuh rasa ingin tahu.":"A creative learning space for curious children.","BANTUAN":"HELP","Kontak":"Contact","MARI BICARA":"LET'S TALK","© 2026 Imajireka Akademi":"© 2026 Imajireka Academy","Bagian dari Ekosistem Kreatif Imajireka":"Part of the Imajireka Creative Ecosystem","Dibuat untuk anak-anak yang penuh rasa ingin tahu ✦":"Made for curious children ✦","Video Imajireka Akademi":"Imajireka Academy Video"}
;
  const ID = {"AKADEMI":"AKADEMI","START WITH YOU":"MULAI DARI DIRIMU","What do you":"Apa yang ingin kamu","want to make?":"buat?","Brighter Future!":"Masa Depan Lebih Cerah!","PHILOSOPHY":"FILOSOFI","by":"sambil","doing.":"berkarya.","From":"Dari","to":"ke","Professional.":"Profesional.","PROCESS":"PROSES","creation.":"karya.","STUDENT STORY":"CERITA SISWA","GALLERY":"GALERI","CTA":"AJAKAN","All":"Semua","Other":"Lainnya","Digital":"Digital","Sequential & Animasi":"Seni Sekuensial & Animasi","START PERJALANAN KREATIFMU":"MULAI PERJALANAN KREATIFMU","WHATSAPP":"WHATSAPP","INSTAGRAM":"INSTAGRAM","world!":"dunia!","it.":"itu.","Share!":"Bagikan!","start.":"mulai.","Design it.":"Desain itu."};
  const ATTR_EN = {"Imajireka": "Imajireka", "Indonesia": "Indonesia", "Dummy foto anak Imajireka Akademi 1": "Imajireka Academy child photo 1", "Dummy foto anak Imajireka Akademi 2": "Imajireka Academy child photo 2", "Dummy foto anak Imajireka Akademi 3": "Imajireka Academy child photo 3", "Dummy foto anak Imajireka Akademi 4": "Imajireka Academy child photo 4", "Belajar ilustrasi": "Learning illustration", "Belajar desain": "Learning design", "Membuat creative proyek": "Creating a creative project", "Anak belajar sambil membuat karya di Imajireka Akademi": "Child learning while creating at Imajireka Academy", "Aktivitas belajar Imajireka": "Imajireka learning activity", "Aktivitas belajar digital illustration": "Digital illustration learning activity", "Mentor mendampingi proses kreatif": "Mentor guiding the creative process", "Mentor mendampingi peserta belajar di Imajireka Akademi": "Mentor guiding a student at Imajireka Academy", "Barong Study karya siswa": "Barong Study student work", "Karya siswa Makhluk Mitologi": "Mythical Creature student work", "Karya siswa Eksperimen Visual": "Visual Experiment student work", "Karya siswa Cerita Kecil": "Little Story student work", "Karya siswa Dunia Hening": "Quiet World student work", "Karya siswa Eksplorasi Karakter": "Character Exploration student work"};
  const ARIA_EN = {"Imajireka Akademi": "Imajireka Academy", "Buka menu": "Open menu", "Lihat Barong Study": "View Barong Study", "Lihat Makhluk Mitologi": "View Mythical Creature", "Lihat Eksperimen Visual": "View Visual Experiment", "Lihat Cerita Kecil": "View Little Story", "Lihat Dunia Tenang": "View Peaceful World", "Lihat Eksplorasi Karakter": "View Character Exploration", "Lihat Mimpi Laut": "View Ocean Dream", "Tutup galeri": "Close gallery", "Tutup video": "Close video", "Putar video testimoni Kadek Ratih": "Play testimonial video from Kadek Ratih", "Putar video testimoni Made Wirawan": "Play testimonial video from Made Wirawan", "Putar video testimoni Ayu Puspita": "Play testimonial video from Ayu Puspita", "Putar video testimoni Kak Dimas": "Play testimonial video from Kak Dimas", "Putar video perkenalan Nama Mentor 1": "Play intro video for Mentor Name 1", "Putar video perkenalan Nama Mentor 2": "Play intro video for Mentor Name 2", "Putar video perkenalan Nama Mentor 3": "Play intro video for Mentor Name 3"};
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
      ? "Imajireka Academy — Your Ideas Start Here"
      : "Imajireka Akademi — Ide-Ide Kamu Dimulai di Sini";

    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", toEnglish
      ? "Imajireka Academy — a creative learning space for children and teenagers to explore ideas, learn skills, and create with mentor guidance."
      : "Imajireka Akademi — ruang belajar kreatif untuk anak dan remaja untuk mengeksplorasi ide, belajar skill, dan membuat karya dengan bimbingan mentor.");
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
      initLanguageSwitcher();
      initSwipeHints();
      initIpadHorizontalDrag();
      initScrollAnimations();
      initVideoModal();
      initGalleryLightbox();
      initTestimonialDragScroll();
    });
  } else {
    initLanguageSwitcher();
    initSwipeHints();
    initIpadHorizontalDrag();
    initScrollAnimations();
    initVideoModal();
    initGalleryLightbox();
    initTestimonialDragScroll();
  }
})();