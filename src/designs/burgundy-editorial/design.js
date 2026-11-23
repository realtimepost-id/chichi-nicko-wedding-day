module.exports = {
  order: 2, slug: 'burgundy-editorial', name: 'Burgundy Editorial', themeColor: '#4a0d1c',
  concept: 'Sampul majalah: tipografi raksasa, burgundy dalam, garis emas tipis, galeri geser horizontal.',
  palette: ['#4a0d1c', '#f3e9df', '#c9a36b', '#1d0a0f', '#7a1f33'],
  fonts: 'family=Playfair+Display:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&family=DM+Sans:wght@300;400;500;600',
  render: ({ inv, P, esc }) => {
    const [a, b] = inv.order.map(k => inv.couple[k]), cl = t => t.replace(/,$/, '');
    const tick = `<span>${inv.events.map(e => esc(e.title)).join(' &nbsp;·&nbsp; ')} &nbsp;·&nbsp; 22.12.2026 &nbsp;·&nbsp; TRENGGALEK &nbsp;·&nbsp; </span>`;
    return `
<div id="cover" class="cv" data-open="wipe">${P.img(1, { loading: 'eager', cls: 'cv-bg', sizes: '100vw', pos: '50% 40%' })}<div class="cv-shade"></div>
<div class="cover-inner cv-in"><p class="cv-top"><span>The Wedding Edition</span><span>No. 22.12.26</span></p>
  <h1 class="cv-n"><span>${esc(a.nick)}</span><i>&amp;</i><span>${esc(b.nick)}</span></h1>
  <div class="cv-bot"><p class="cv-to">Kepada Yth.<br><b data-guest>Tamu Undangan</b></p>${P.open('Buka Undangan')}</div></div></div>

<header class="hero"><div class="hero-ph" data-anim="wipe">${P.img(2, { loading: 'eager', sizes: '(min-width:900px) 45vw, 100vw', pos: '50% 33%' })}</div>
  <div class="hero-tx"><p class="kick" data-anim="fade">${esc(inv.copy.salam)}</p><h2 data-anim="rise">${esc(a.name.split(' ')[0])}<br><i>dan</i> ${esc(b.name.split(' ')[0])}</h2>
  <p class="hero-p" data-anim="rise">${esc(inv.copy.intro)}</p><p class="hero-d" data-anim="rise">${esc(inv.events[0].dateText)}</p></div></header>
<div class="marq" aria-hidden="true"><div>${tick.repeat(6)}</div></div>

<main>
<section class="s qt"><div data-anim="rise">${P.quote()}</div></section>

<section class="s cpl"><p class="lab" data-anim="fade">— Mempelai</p>
${inv.order.map((k, i) => { const m = inv.couple[k]; return `<article class="spread ${i ? 'rev' : ''}"><div class="sp-ph" data-anim="wipe">${P.person(k)}<b class="num">0${i + 1}</b></div><div class="sp-tx" data-anim="rise"><h3>${esc(m.name)}</h3><p class="r">${esc(m.role)} dari</p><p class="pp">${esc(m.parents)}</p></div></article>`; }).join('')}</section>

<section class="s dk cdw"><p class="lab" data-anim="fade">— Hitung Mundur</p>${P.cd('cdx')}</section>

<section class="s evs"><p class="lab" data-anim="fade">— Wedding Event</p><div class="ev-list">${P.events()}</div><div class="calrow">${P.calAll()}</div>${P.map()}</section>

<section class="s dk story"><p class="lab" data-anim="fade">— Love Story</p><div class="cols">${P.storyItems((s, i) => `<p data-anim="rise" style="--d:${i * .1}s"><b>${esc(s.label)}</b>${esc(cl(s.text))}</p>`)}</div></section>

<section class="gals"><p class="lab pad" data-anim="fade">— Galeri</p>${P.gallery('hs hscroll', { anim: 'fade' })}<p class="hint">Geser untuk melihat foto →</p></section>

<section class="s dk gift"><p class="lab" data-anim="fade">— Wedding Gift</p><p class="lede" data-anim="rise">${esc(inv.copy.giftNote)}</p>${P.gifts()}${P.address()}</section>

<section class="s rsv"><p class="lab" data-anim="fade">— RSVP</p><p class="lede" data-anim="rise">${esc(inv.copy.rsvpNote)}</p><div class="frm" data-anim="rise">${P.rsvp()}</div>${P.ticket()}</section>

<section class="s dk wsh"><p class="lab" data-anim="fade">— Buku Tamu</p><div class="frm" data-anim="rise">${P.wishes()}</div></section>
</main>
<footer class="foot"><p class="lede">${esc(inv.copy.closing)}</p><h2>${esc(a.nick)} <i>&amp;</i> ${esc(b.nick)}</h2><p class="fam">${inv.copy.families.map(esc).join(' · ')}</p><p class="kick">${esc(inv.copy.wassalam)}</p>${P.credit()}</footer>`;
  },
};
