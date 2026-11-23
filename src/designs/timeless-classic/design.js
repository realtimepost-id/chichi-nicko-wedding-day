const rule = `<svg viewBox="0 0 160 14" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1"><path d="M0 7h60M100 7h60"/><circle cx="80" cy="7" r="3"/><circle cx="68" cy="7" r="1.4" fill="currentColor"/><circle cx="92" cy="7" r="1.4" fill="currentColor"/></svg>`;
module.exports = {
  order: 5, slug: 'timeless-classic', name: 'Timeless Classic', themeColor: '#1f2a44',
  concept: 'Undangan cetak klasik: ivory & navy, bingkai ganda, tipografi serif formal, tata letak tertib.',
  palette: ['#faf7f2', '#e8e2d6', '#1f2a44', '#a98a52', '#3d4a6b'],
  fonts: 'family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Italianno',
  render: ({ inv, P, esc }) => {
    const [a, b] = inv.order.map(k => inv.couple[k]), cl = t => t.replace(/,$/, '');
    return `
<div id="cover" class="cv" data-open="down"><div class="cover-inner cv-in"><div class="card"><div class="card2">
  <p class="sm" data-anim="fade">The Wedding of</p>
  <div class="mat"><div class="cv-ph">${P.img(0, { loading: 'eager', sizes: '260px', pos: '50% 30%' })}</div></div>
  <h1 class="it">${esc(a.nick)} <span>&amp;</span> ${esc(b.nick)}</h1><div class="rl">${rule}</div>
  <p class="sm">${esc(inv.events[0].dateText.replace(', ', ' · '))}</p>
  <p class="to">Kepada Yth.<br><b data-guest>Tamu Undangan</b></p>${P.open('Buka Undangan')}</div></div></div></div>

<header class="hero tc"><p class="sm" data-anim="fade">${esc(inv.copy.salam)}</p><div class="mat big" data-anim="scale"><div class="hph">${P.img(4, { loading: 'eager', sizes: '(min-width:800px) 420px,80vw', pos: '50% 34%' })}</div></div>
  <h2 class="it xl" data-anim="rise">${esc(a.name)}<span>&amp;</span>${esc(b.name)}</h2><div class="rl">${rule}</div><p class="dd" data-anim="rise">${esc(inv.events[0].dateText)}</p></header>

<main>
<section class="s tc"><p class="body" data-anim="rise">${esc(inv.copy.intro)}</p><div class="rl">${rule}</div><div data-anim="fade">${P.quote()}</div></section>

<section class="s tc paper"><h2 class="h" data-anim="fade">Mempelai</h2><div class="cpl">${inv.order.map((k, i) => { const m = inv.couple[k]; return `<article data-anim="rise" style="--d:${i * .15}s"><div class="mat"><div class="pf">${P.person(k)}</div></div><h3>${esc(m.name)}</h3><p class="sm">${esc(m.role)} dari</p><p class="pp">${esc(m.parents)}</p></article>`; }).join('')}</div></section>

<section class="s tc dk"><h2 class="h" data-anim="fade">Menuju Hari Bahagia</h2>${P.cd('cdt')}</section>

<section class="s tc"><h2 class="h" data-anim="fade">Susunan Acara</h2><div class="evs">${P.events()}</div><div class="calrow">${P.calAll()}</div>${P.map()}</section>

<section class="s tc paper"><h2 class="h" data-anim="fade">Kisah Kami</h2><div class="stx">${P.storyItems((s, i) => `<p data-anim="rise" style="--d:${i * .08}s"><em>${esc(s.label)}</em><br>${esc(cl(s.text))}</p>`)}</div></section>

<section class="s tc"><h2 class="h" data-anim="fade">Galeri Foto</h2>${P.gallery('grid3', { anim: 'fade' })}</section>

<section class="s tc paper"><h2 class="h" data-anim="fade">Tanda Kasih</h2><p class="body" data-anim="rise">${esc(inv.copy.giftNote)}</p>${P.gifts()}${P.address()}</section>
<section class="s tc"><h2 class="h" data-anim="fade">Konfirmasi Kehadiran</h2><p class="body" data-anim="rise">${esc(inv.copy.rsvpNote)}</p><div class="box tl" data-anim="rise">${P.rsvp()}</div>${P.ticket()}</section>
<section class="s tc paper"><h2 class="h" data-anim="fade">Buku Tamu</h2><div class="box tl" data-anim="rise">${P.wishes()}</div></section>
</main>
<footer class="foot tc"><p class="body">${esc(inv.copy.closing)}</p><div class="rl">${rule}</div><p class="sm">${esc(inv.copy.wassalam)}</p><h2 class="it xl">${esc(a.nick)} <span>&amp;</span> ${esc(b.nick)}</h2><p class="fam">${inv.copy.families.map(esc).join('<br>')}</p>${P.credit()}</footer>`;
  },
};
