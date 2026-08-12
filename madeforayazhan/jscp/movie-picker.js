// ============================================================
//  СПИСОК ФИЛЬМОВ — можно менять/добавлять здесь.
//  poster: путь к картинке постера (положи файл в image/movies/)
// ============================================================
const MOVIE_LIST = [
    { title: 'Полночное солнце', poster: 'image/movies/midnight-sun.jpg' },
    { title: 'Заклятие', poster: 'image/movies/conjuring.jpg' },
    { title: 'Новый Человек-паук', poster: 'image/movies/spiderman.jpg' },
    { title: 'Интерстеллар', poster: 'image/movies/interstellar.jpg' },
    { title: 'Судзумэ, закрывающая двери', poster: 'image/movies/suzume.jpg' },
];

// ============================================================
//  ТЕМЫ ДЛЯ ОБЩЕНИЯ — 50 вопросов x 20 вариантов подачи = 1000 тем
// ============================================================
const TOPIC_QUESTIONS = [
    'Какое твоё самое яркое воспоминание о нас?',
    'Если бы мы могли телепортироваться куда угодно прямо сейчас, куда бы ты меня забрал(а)?',
    'Что тебе нравится во мне больше всего?',
    'Какая наша совместная привычка стала твоей любимой?',
    'О чём ты чаще всего думаешь перед сном?',
    'Если бы у нас был один день без забот, как бы мы его провели?',
    'Какой момент нашего знакомства ты бы хотел(а) пережить снова?',
    'Что для тебя значит "дом"?',
    'Какую мечту ты ещё не рассказал(а) мне?',
    'Если бы мы завели питомца, кто бы это был?',
    'Какая песня напоминает тебе обо мне?',
    'Что из того, что я делаю, заставляет тебя улыбаться?',
    'Куда бы ты хотел(а) поехать вместе в следующем году?',
    'Какой самый смешной момент был у нас за последнее время?',
    'Если бы ты мог(ла) изменить один день в прошлом, какой бы выбрал(а)?',
    'Что тебя вдохновляет больше всего?',
    'Какая наша будущая традиция кажется тебе самой крутой?',
    'Если бы мы сняли фильм про нашу историю, как бы он назывался?',
    'Что ты чувствуешь, когда мы вместе молчим?',
    'Какой подарок от меня ты запомнишь навсегда?',
    'Если бы можно было заморозить один момент из нашей жизни — какой?',
    'Что тебе больше всего хочется, чтобы я знал(а) о тебе?',
    'Какая твоя самая смелая мечта?',
    'Если бы у нас была суперсила на двоих, какая?',
    'Что нас связывает сильнее всего?',
    'Какой день недели напоминает тебе обо мне?',
    'Если бы мы жили в другой эпохе, в какой?',
    'Какую традицию из детства ты хотел(а) бы сохранить у нас?',
    'Что заставляет тебя чувствовать себя в безопасности рядом со мной?',
    'Какая мелочь в отношениях для тебя самая важная?',
    'Если бы мы открыли своё дело вместе, чем бы занимались?',
    'Какой комплимент ты хотел(а) бы слышать чаще?',
    'Что бы ты хотел(а) попробовать вместе, но ещё не решился(ась) предложить?',
    'Какой момент за последний месяц был самым романтичным?',
    'Если бы мы могли пригласить любого человека на ужин, кого бы выбрал(а)?',
    'Какая книга или фильм лучше всего описывает наши отношения?',
    'Что делает тебя счастливым(ой) в обычный будний день?',
    'Если бы нужно было описать меня одним словом, какое бы выбрал(а)?',
    'Какой самый смелый поступок ты бы совершил(а) ради меня?',
    'Что ты чувствуешь, когда я обнимаю тебя?',
    'Какая наша будущая поездка мечты?',
    'Если бы у нас была капсула времени, что бы мы туда положили?',
    'Какой урок из прошлого помог тебе понять, чего ты хочешь?',
    'Что бы ты хотел(а), чтобы мы делали каждый вечер?',
    'Какая моя привычка тебя больше всего умиляет?',
    'Если бы можно было исполнить одно желание вместе — какое?',
    'Какой сюрприз ты бы хотел(а) получить от меня?',
    'Что для тебя означает настоящая близость?',
    'Какое качество ты больше всего ценишь в наших отношениях?',
    'Если бы мы могли начать всё сначала, изменил(а) бы ты что-то?'
];

const TOPIC_WRAPPERS = [
    '💭 {q}',
    '🎲 Тема дня: {q}',
    '✨ {q}',
    '🔥 Горячий вопрос: {q}',
    '🌙 Ночная тема: {q}',
    '💗 {q}',
    '🎯 Подумай: {q}',
    '☕ За чашкой чая: {q}',
    '🌟 {q}',
    '📌 Тема для разговора: {q}',
    '💫 {q}',
    '🍷 Романтичный вопрос: {q}',
    '🎬 Как в кино: {q}',
    '🌈 {q}',
    '💌 Вопрос от сердца: {q}',
    '🕯️ Тихий вечер: {q}',
    '🧩 Загадка вечера: {q}',
    '🎀 {q}',
    '🌸 Нежная тема: {q}',
    '⭐ Просто спроси: {q}'
];

const ALL_TOPICS = TOPIC_WRAPPERS.flatMap(w => TOPIC_QUESTIONS.map(q => w.replace('{q}', q)));

(function () {
    const movieHeartBtn = document.getElementById('movieHeartBtn');
    const movieModal = document.getElementById('movieModal');
    const movieModalClose = document.getElementById('movieModalClose');
    const movieModalTitle = document.getElementById('movieModalTitle');
    const movieGrid = document.getElementById('movieGrid');
    const movieSelectSection = document.getElementById('movieSelectSection');
    const roseTransition = document.getElementById('roseTransition');
    const roseTransitionText = document.getElementById('roseTransitionText');
    const roseCanvas = document.getElementById('roseCanvas');
    const topicsSection = document.getElementById('topicsSection');
    const topicCard = document.getElementById('topicCard');
    const topicRerollBtn = document.getElementById('topicRerollBtn');
    const topicsCounter = document.getElementById('topicsCounter');

    if (!movieHeartBtn || !movieModal || !movieGrid) return;

    // ---------- Показать кнопку-сердечко ПОСЛЕ эффекта "сердечки с фотами" ----------
    function revealMovieHeartBtn() {
        movieHeartBtn.classList.add('visible');
    }

    // startHeartEffect() в ui.js запускается сразу после того, как книжка долистана до конца
    // (конфетти + салют + летящие фото-сердечки). Показываем кнопку чуть позже этого момента.
    if (typeof window.startHeartEffect === 'function') {
        const originalStartHeartEffect = window.startHeartEffect;
        window.startHeartEffect = function () {
            originalStartHeartEffect.apply(this, arguments);
            setTimeout(revealMovieHeartBtn, 3500);
        };
    } else {
        // fallback, если функция не найдена — не блокируем сайт, показываем через таймер
        setTimeout(revealMovieHeartBtn, 8000);
    }

    // ---------- Шаг 1: выбор фильма ----------
    function renderMovies() {
        movieGrid.innerHTML = '';
        MOVIE_LIST.forEach((movie, index) => {
            const card = document.createElement('div');
            card.className = 'movie-card';
            card.dataset.index = index;
            card.innerHTML = `
                <img class="movie-poster" src="${movie.poster}" alt="${movie.title}">
                <div class="movie-title">${movie.title}</div>
            `;
            card.addEventListener('click', () => chooseMovie(index, card));
            movieGrid.appendChild(card);
        });
    }

    function chooseMovie(index, card) {
        document.querySelectorAll('.movie-card').forEach(c => c.classList.remove('selected'));
        card.classList.add('selected');
        const movie = MOVIE_LIST[index];
        try { localStorage.setItem('chosenMovie', JSON.stringify(movie)); } catch (e) {}

        setTimeout(() => goToRoseTransition(movie), 350);
    }

    // ---------- Шаг 2: переход — падающие белые розы ----------
    let roseCtx = null;
    let roseAnimId = null;
    let petals = [];
    let usePetalImage = false;
    const petalImg = new Image();
    petalImg.onload = () => { usePetalImage = true; };
    petalImg.onerror = () => { usePetalImage = false; };
    petalImg.src = 'image/petal.png'; // при желании положи сюда свою PNG розу — подключится автоматически

    function resizeRoseCanvas() {
        if (!roseCanvas) return;
        roseCanvas.width = roseCanvas.clientWidth;
        roseCanvas.height = roseCanvas.clientHeight;
    }

    function makePetal(randomY) {
        return {
            x: Math.random() * roseCanvas.width,
            y: randomY ? Math.random() * roseCanvas.height : -20,
            size: 10 + Math.random() * 14,
            speed: 0.7 + Math.random() * 1.4,
            drift: (Math.random() - 0.5) * 1.2,
            angle: Math.random() * Math.PI * 2,
            spin: (Math.random() - 0.5) * 0.05,
            sway: Math.random() * Math.PI * 2,
        };
    }

    function drawVectorPetal(p) {
        roseCtx.save();
        roseCtx.translate(p.x, p.y);
        roseCtx.rotate(p.angle);
        const grad = roseCtx.createRadialGradient(0, 0, 1, 0, 0, p.size);
        grad.addColorStop(0, 'rgba(255,255,255,0.98)');
        grad.addColorStop(0.6, 'rgba(255,235,242,0.9)');
        grad.addColorStop(1, 'rgba(255,182,213,0.55)');
        roseCtx.fillStyle = grad;
        roseCtx.beginPath();
        roseCtx.moveTo(0, -p.size);
        roseCtx.bezierCurveTo(p.size * 0.8, -p.size * 0.6, p.size * 0.8, p.size * 0.6, 0, p.size);
        roseCtx.bezierCurveTo(-p.size * 0.8, p.size * 0.6, -p.size * 0.8, -p.size * 0.6, 0, -p.size);
        roseCtx.fill();
        roseCtx.restore();
    }

    function animateRoses() {
        if (!roseCtx) return;
        roseCtx.clearRect(0, 0, roseCanvas.width, roseCanvas.height);
        for (const p of petals) {
            p.sway += 0.02;
            p.y += p.speed;
            p.x += p.drift + Math.sin(p.sway) * 0.6;
            p.angle += p.spin;

            if (p.y > roseCanvas.height + 20) {
                Object.assign(p, makePetal(false));
            }

            if (usePetalImage && petalImg.complete && petalImg.naturalWidth) {
                roseCtx.save();
                roseCtx.translate(p.x, p.y);
                roseCtx.rotate(p.angle);
                roseCtx.drawImage(petalImg, -p.size / 2, -p.size / 2, p.size, p.size);
                roseCtx.restore();
            } else {
                drawVectorPetal(p);
            }
        }
        roseAnimId = requestAnimationFrame(animateRoses);
    }

    function startRoses() {
        resizeRoseCanvas();
        roseCtx = roseCanvas.getContext('2d');
        petals = [];
        const count = Math.max(24, Math.floor((roseCanvas.width * roseCanvas.height) / 12000));
        for (let i = 0; i < count; i++) petals.push(makePetal(true));
        if (roseAnimId) cancelAnimationFrame(roseAnimId);
        animateRoses();
    }

    function stopRoses() {
        if (roseAnimId) {
            cancelAnimationFrame(roseAnimId);
            roseAnimId = null;
        }
    }

    function goToRoseTransition(movie) {
        movieModalTitle.textContent = '🌹 ' + movie.title;
        movieSelectSection.style.display = 'none';
        roseTransition.classList.add('active');
        roseTransitionText.textContent = `Отличный выбор — «${movie.title}» 🌹`;
        startRoses();

        setTimeout(() => {
            roseTransition.classList.remove('active');
            stopRoses();
            goToTopics();
        }, 2800);
    }

    // ---------- Шаг 3: рандомайзер тем ----------
    let topicBag = [];

    function refillBag() {
        topicBag = ALL_TOPICS.map((_, i) => i);
        for (let i = topicBag.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [topicBag[i], topicBag[j]] = [topicBag[j], topicBag[i]];
        }
    }

    function nextTopic() {
        if (topicBag.length === 0) refillBag();
        const idx = topicBag.pop();
        topicCard.textContent = ALL_TOPICS[idx];
        topicsCounter.textContent = `Тем в запасе: ${ALL_TOPICS.length}`;
    }

    function goToTopics() {
        movieModalTitle.textContent = '💬 Тема для разговора';
        topicsSection.classList.add('active');
        nextTopic();
    }

    if (topicRerollBtn) topicRerollBtn.addEventListener('click', nextTopic);

    // ---------- Открытие / закрытие модалки ----------
    function resetModalState() {
        movieModalTitle.textContent = '🎬 Выбери кино';
        movieSelectSection.style.display = 'block';
        roseTransition.classList.remove('active');
        topicsSection.classList.remove('active');
        document.querySelectorAll('.movie-card').forEach(c => c.classList.remove('selected'));
        stopRoses();
    }

    function openMovieModal() {
        resetModalState();
        movieModal.style.display = 'block';
    }

    function closeMovieModal() {
        movieModal.style.display = 'none';
        stopRoses();
    }

    movieHeartBtn.addEventListener('click', openMovieModal);
    if (movieModalClose) movieModalClose.addEventListener('click', closeMovieModal);
    window.addEventListener('click', (e) => {
        if (e.target === movieModal) closeMovieModal();
    });
    window.addEventListener('resize', () => {
        if (roseTransition.classList.contains('active')) resizeRoseCanvas();
    });

    renderMovies();
})();
