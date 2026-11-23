const diamond = `<svg viewBox="0 0 120 16" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1"><path d="M0 8h48M72 8h48"/><path d="M60 1l7 7-7 7-7-7z" fill="currentColor"/></svg>`;
module.exports = {
  order: 3, slug: 'champagne-elegance', name: 'Champagne Elegance', themeColor: '#e9dcc3',
  concept: 'Simetris & mewah tenang: ivory-champagne, bingkai emas ganda, monogram, galeri carousel.',
  palette: ['#fbf8f1', '#e9dcc3', '#b08d4a', '#4b4338', '#d8c7a3'],
  fonts: 'family=Bodoni+Moda:ital,wght@0,400;0,500;0,700;1,400;1,500&family=Italiana&family=Montserrat:wght@300;400;500;600',
  render: ({ inv, P, esc }) => {
    const [a, b] = inv.order.map(k => inv.couple[k]), cl = t => t.replace(/,$/, ''), mono = `${a.nick[0]}<i>&amp;</i>${b.nick[0]}`;
    return `
<div id="cover" class="cv" data-open="fade"><div class="cover-inner cv-in"><div class="frame"><div class="frame2">
  <p class="kk" data-anim="track">The Wedding of</p>
  <div class="cv-ph">${P.img(0, { loading: 'eager', sizes: '280px', pos: '50% 30%' })}</div>
  <h1 class="nm">${esc(a.nick)}<span>&amp;</span>${esc(b.nick)}</h1>
  <p class="dt">22 · 12 · 2026</p><div class="orn">${diamond}</div>
  <p class="to">Kepada Yth.<br><b data-guest>Tamu Undangan</b></p>${P.open('Buka Undangan')}
</div></div></div></div>

<header class="hero"><div class="hf" data-anim="fade"><div class="hf-ph">${P.img(2, { loading: 'eager', sizes: '(min-width:800px) 460px,80vw', pos: '50% 32%' })}</div></div>
  <p class="kk" data-anim="track">${esc(inv.copy.salam)}</p><div class="mono" data-anim="scale">${mono}</div>
  <h2 class="nm2" data-anim="rise">${esc(a.name)}<span>&amp;</span>${esc(b.name)}</h2>
  <div class="orn">${diamond}</div><p class="dd" data-anim="rise">${esc(inv.events[0].dateText)}</p></header>

<main>
<section class="s tc"><p class="lead" data-anim="rise">${esc(inv.copy.intro)}</p><div class="orn">${diamond}</div><div data-anim="fade">${P.quote()}</div></section>

<section class="s tc"><h2 class="h" data-anim="track">Mempelai</h2>
  <div class="cpl">${inv.order.map((k, i) => { const m = inv.couple[k]; return `<article data-anim="rise" style="--d:${i * .15}s"><div class="ring">${P.person(k)}</div><h3>${esc(m.name)}</h3><p class="r">${esc(m.role)} dari</p><p class="pp">${esc(m.parents)}</p></article>`; }).join('')}</div></section>

<section class="s tc band"><h2 class="h" data-anim="track">Menuju Hari Bahagia</h2>${P.cd('cdc')}</section>

<section class="s tc"><h2 class="h" data-anim="track">Wedding Event</h2><div class="evs">${P.events()}</div><div class="calrow">${P.calAll()}</div>${P.map()}</section>

<section class="s tc band"><h2 class="h" data-anim="track">Love Story</h2>
  <ol class="vt">${P.storyItems((s, i) => `<li data-anim="rise"><span class="nd"></span><b>${esc(s.label)}</b><p>${esc(cl(s.text))}</p></li>`)}</ol></section>

<section class="gl"><h2 class="h tc" data-anim="track">Galeri</h2>${P.gallery('strip', { anim: 'fade' })}<p class="hint">Geser untuk melihat foto</p></section>

<section class="s tc"><h2 class="h" data-anim="track">Wedding Gift</h2><p class="lead" data-anim="rise">${esc(inv.copy.giftNote)}</p>${P.gifts()}${P.address()}</section>

<section class="s tc band"><h2 class="h" data-anim="track">RSVP</h2><p class="lead" data-anim="rise">${esc(inv.copy.rsvpNote)}</p><div class="box tl" data-anim="rise">${P.rsvp()}</div>${P.ticket()}</section>

<section class="s tc"><h2 class="h" data-anim="track">Buku Tamu</h2><div class="box tl" data-anim="rise">${P.wishes()}</div></section>
</main>
<footer class="foot"><div class="mono sm">${mono}</div><p class="lead">${esc(inv.copy.closing)}</p><div class="orn">${diamond}</div><p class="kk">${esc(inv.copy.wassalam)}</p><p class="fam">${inv.copy.families.map(esc).join('<br>')}</p>${P.credit()}</footer>`;
  },
};
