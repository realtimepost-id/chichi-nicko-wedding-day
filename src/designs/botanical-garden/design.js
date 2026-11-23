const leaf = (r = 0, c = '#4f7a5a') => `<svg viewBox="0 0 120 220" aria-hidden="true" style="rotate:${r}deg" fill="none" stroke="${c}" stroke-width="1.3" stroke-linecap="round"><path d="M60 215C60 150 62 80 70 6"/>${[[190, -1], [158, 1], [126, -1], [94, 1], [62, -1], [30, 1]].map(([y, d]) => `<ellipse cx="${60 + d * 17}" cy="${y}" rx="17" ry="7" transform="rotate(${d * -32} ${60 + d * 17} ${y})" fill="${c}" fill-opacity=".16"/>`).join('')}</svg>`;
const wave = c => `<svg viewBox="0 0 400 40" preserveAspectRatio="none" aria-hidden="true" style="display:block;width:100%;height:34px"><path d="M0 40V18C60 0 120 0 200 18S340 36 400 12V40z" fill="${c}"/></svg>`;
module.exports = {
  order: 4, slug: 'botanical-garden', name: 'Botanical Garden', themeColor: '#2f4a3a',
  concept: 'Taman organik: hijau sage, foto bentuk blob, garis daun, polaroid miring & pembatas gelombang.',
  palette: ['#f7f4ea', '#dfe5d6', '#2f4a3a', '#c6785a', '#9aa88f'],
  fonts: 'family=EB+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Parisienne&family=Karla:wght@400;500;600',
  render: ({ inv, P, esc }) => {
    const [a, b] = inv.order.map(k => inv.couple[k]), cl = t => t.replace(/,$/, '');
    return `
<div id="cover" class="cv" data-open="up"><div class="cover-inner cv-in"><span class="lf l1" data-par=".1">${leaf(-14)}</span><span class="lf l2" data-par="-.1">${leaf(18, '#c6785a')}</span>
  <p class="ey">The Wedding of</p><div class="blob cvb"><div class="ph">${P.img(3, { loading: 'eager', sizes: '280px', pos: '50% 28%' })}</div></div>
  <h1 class="pn">${esc(a.nick)} &amp; ${esc(b.nick)}</h1><p class="dtt">22 Desember 2026</p>
  <p class="to">Kepada Yth.<br><b data-guest>Tamu Undangan</b></p>${P.open('Buka Undangan')}</div></div>

<header class="hero"><span class="lf l3" data-par=".12">${leaf(10)}</span><span class="lf l4" data-par="-.12">${leaf(-12, '#c6785a')}</span>
  <p class="ey" data-anim="fade">${esc(inv.copy.salam)}</p><h2 class="pn big" data-anim="rise">${esc(a.nick)}<br>&amp; ${esc(b.nick)}</h2>
  <div class="blob hb" data-anim="scale"><div class="ph">${P.img(4, { loading: 'eager', sizes: '(min-width:800px) 420px,80vw', pos: '50% 34%' })}</div></div>
  <p class="dtt" data-anim="rise">${esc(inv.events[0].dateText)}</p><div class="wv">${wave('#dfe5d6')}</div></header>

<main>
<section class="s sage tc"><p class="lead" data-anim="rise">${esc(inv.copy.intro)}</p><div data-anim="rise">${P.quote()}</div></section>
<div class="wv flip">${wave('#dfe5d6')}</div>

<section class="s tc"><h2 class="sec" data-anim="rise">Mempelai</h2><div class="cpg">${inv.order.map((k, i) => { const m = inv.couple[k]; return `<article data-anim="tilt" style="--r0:${i ? 6 : -6}deg;--d:${i * .15}s"><div class="blob pb b${i}"><div class="ph cutout">${P.person(k).replace(/^<div class="ph cutout ">|<\/div>$/g, '')}</div></div><h3 class="pn">${esc(m.name)}</h3><p class="r">${esc(m.role)} dari</p><p class="pp">${esc(m.parents)}</p></article>`; }).join('')}</div></section>

<section class="s dgreen tc"><h2 class="sec lt" data-anim="rise">Menuju Hari Bahagia</h2>${P.cd('cdg')}</section>

<section class="s tc"><h2 class="sec" data-anim="rise">Wedding Event</h2><div class="evg">${P.events()}</div><div class="calrow">${P.calAll()}</div>${P.map()}</section>

<section class="s sage"><h2 class="sec tc" data-anim="rise">Love Story</h2><ol class="path">${P.storyItems((s, i) => `<li data-anim="rise"><span class="lfn">${leaf(0, '#2f4a3a')}</span><b>${esc(s.label)}</b><p>${esc(cl(s.text))}</p></li>`)}</ol></section>

<section class="s tc"><h2 class="sec" data-anim="rise">Galeri</h2>${P.gallery('polas', { anim: 'tilt' })}</section>

<section class="s sage tc"><h2 class="sec" data-anim="rise">Wedding Gift</h2><p class="lead" data-anim="rise">${esc(inv.copy.giftNote)}</p>${P.gifts()}${P.address()}</section>
<section class="s tc"><h2 class="sec" data-anim="rise">RSVP</h2><p class="lead" data-anim="rise">${esc(inv.copy.rsvpNote)}</p><div class="box tl" data-anim="rise">${P.rsvp()}</div>${P.ticket()}</section>
<section class="s sage tc"><h2 class="sec" data-anim="rise">Buku Tamu</h2><div class="box tl" data-anim="rise">${P.wishes()}</div></section>
</main>
<footer class="foot tc"><span class="lf l5" data-par=".1">${leaf(-8, '#9ec0a8')}</span><p class="lead lt">${esc(inv.copy.closing)}</p><p class="ey lt">${esc(inv.copy.wassalam)}</p><h2 class="pn big lt">${esc(a.nick)} &amp; ${esc(b.nick)}</h2><p class="fam">${inv.copy.families.map(esc).join('<br>')}</p>${P.credit()}</footer>`;
  },
};
