const flower = (c = 'currentColor') => `<svg viewBox="0 0 100 100" aria-hidden="true"><g fill="${c}">${[0, 72, 144, 216, 288].map(a => `<ellipse cx="50" cy="27" rx="12" ry="23" transform="rotate(${a} 50 50)" opacity=".85"/>`).join('')}</g><circle cx="50" cy="50" r="8" fill="#fff" opacity=".75"/></svg>`;
const sprig = `<svg viewBox="0 0 200 40" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.1" stroke-linecap="round"><path d="M4 20h192"/><path d="M60 20c6-12 14-12 20 0M60 20c6 12 14 12 20 0M120 20c6-12 14-12 20 0M120 20c6 12 14 12 20 0"/><circle cx="100" cy="20" r="4" fill="currentColor"/></svg>`;
module.exports = {
  order: 1, slug: 'blooming-romance', name: 'Blooming Romance', themeColor: '#f4dcd8',
  concept: 'Romantis lembut: lengkung arch, krem & blush rose, script anggun, kelopak yang melayang.',
  palette: ['#fbf5ef', '#f4dcd8', '#b4505e', '#4a2c32', '#9aa88f'],
  fonts: 'family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,400;1,500&family=Pinyon+Script&family=Jost:wght@300;400;500;600',
  render: ({ inv, P, esc }) => {
    const [a, b] = inv.order.map(k => inv.couple[k]), cl = t => t.replace(/,$/, '');
    return `
<div id="cover" class="cv" data-open="iris"><div class="cover-inner cv-in">
  <span class="fl f1" data-par=".12">${flower('#e7b3ba')}</span><span class="fl f2" data-par="-.08">${flower('#f0cfc9')}</span><span class="fl f3" data-par=".18">${flower('#d98d98')}</span>
  <p class="cv-k">The Wedding of</p>
  <div class="cv-arch"><div class="ph">${P.img(2, { loading: 'eager', sizes: '300px', pos: '50% 30%' })}</div></div>
  <h1 class="script cv-n">${esc(a.nick)} <i>&amp;</i> ${esc(b.nick)}</h1>
  <p class="cv-d">22 · 12 · 2026</p>
  <p class="cv-to">Kepada Yth. Bapak/Ibu/Saudara/i<br><b data-guest>Tamu Undangan</b></p>
  ${P.open('Buka Undangan')}
</div></div>

<header class="hero" id="home">
  <span class="fl f4" data-par=".1">${flower('#e9bcc2')}</span><span class="fl f5" data-par="-.14">${flower('#f2d3cd')}</span>
  <p class="eyebrow" data-anim="fade">Kami Mengundang Anda</p>
  <h2 class="script hero-n" data-anim="rise">${esc(a.nick)}<br><i>&amp;</i> ${esc(b.nick)}</h2>
  <div class="hero-arch" data-anim="scale"><div class="ph">${P.img(1, { loading: 'eager', sizes: '(min-width:760px) 420px, 80vw', pos: '50% 38%' })}</div></div>
  <p class="hero-date" data-anim="rise">${esc(inv.events[0].dateText)}</p>
  <div class="sprig" data-anim="fade">${sprig}</div>
</header>

<main>
<section class="s intro" id="salam"><p class="eyebrow" data-anim="fade">${esc(inv.copy.salam)}</p>
  <p class="lead" data-anim="rise">${esc(inv.copy.intro)}</p>
  <div data-anim="rise">${P.quote()}</div></section>

<section class="s couple" id="mempelai"><h2 class="sec script" data-anim="rise">Mempelai</h2>
  <div class="cp-grid">${inv.order.map((k, i) => { const m = inv.couple[k]; return `
    <article class="cp cp${i}" data-anim="rise" style="--d:${i * .15}s"><div class="cp-arch">${P.person(k)}</div>
      <h3 class="script cp-n">${esc(m.name)}</h3><p class="cp-r">${esc(m.role)} dari</p><p class="cp-p">${esc(m.parents)}</p></article>`; }).join('<span class="amp script" aria-hidden="true">&amp;</span>')}</div></section>

<section class="s cdwrap" id="hitung"><p class="eyebrow" data-anim="fade">Menuju Hari Bahagia</p>${P.cd('cdb')}</section>

<section class="s events" id="acara"><h2 class="sec script" data-anim="rise">Wedding Event</h2>
  <div class="ev-grid">${P.events()}</div><div class="calrow" data-anim="fade">${P.calAll()}</div>${P.map()}</section>

<section class="s story" id="kisah"><h2 class="sec script" data-anim="rise">Love Story</h2>
  <ol class="tl">${P.storyItems((s, i) => `<li data-anim="${i % 2 ? 'right' : 'left'}"><span class="dot">${flower('#b4505e')}</span><b>${esc(s.label)}</b><p>${esc(cl(s.text))}</p></li>`)}</ol></section>

<section class="s gallery" id="galeri"><h2 class="sec script" data-anim="rise">Our Moments</h2>${P.gallery('gal mason', { anim: 'rise' })}</section>

<section class="s gift" id="hadiah"><h2 class="sec script" data-anim="rise">Wedding Gift</h2><p class="lead" data-anim="fade">${esc(inv.copy.giftNote)}</p>${P.gifts()}${P.address()}</section>

<section class="s rsvp" id="rsvp"><h2 class="sec script" data-anim="rise">RSVP</h2><p class="lead" data-anim="fade">${esc(inv.copy.rsvpNote)}</p><div class="box" data-anim="rise">${P.rsvp()}</div>${P.ticket()}</section>

<section class="s wish" id="ucapan"><h2 class="sec script" data-anim="rise">Buku Tamu</h2><p class="lead" data-anim="fade">Tuliskan ucapan dan doa terbaik Anda untuk kami.</p><div class="box" data-anim="rise">${P.wishes()}</div></section>
</main>
<footer class="foot"><span class="fl f6" data-par=".1">${flower('#e9bcc2')}</span><p class="lead">${esc(inv.copy.closing)}</p><p class="eyebrow">${esc(inv.copy.wassalam)}</p>
  <h2 class="script fn">${esc(a.nick)} &amp; ${esc(b.nick)}</h2><p class="fam">${inv.copy.families.map(esc).join('<br>')}</p>${P.credit()}</footer>`;
  },
};
