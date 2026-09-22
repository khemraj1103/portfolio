
/* V28: single 6-face 3D technology cube preloader + 3D page reveal. */
(()=>{
  const preloader=document.getElementById('site-preloader');
  if(!preloader) return;
  const cube=preloader.querySelector('.single-cube');
  const faces=[...preloader.querySelectorAll('.cube-face')];
  const assets={
    'WordPress':'assets/preloader-wordpress.svg','SEO':'assets/preloader-seo.svg','PHP':'assets/preloader-php.svg',
    'React':'assets/preloader-react.svg','Bug Fixes':'assets/preloader-bug.svg','Site Improvement':'assets/preloader-speed.svg'
  };
  const labels=Object.keys(assets);
  const shuffle=(arr)=>{const a=[...arr];for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;};
  const applyIcons=()=>{
    shuffle(labels).forEach((label,i)=>{
      const face=faces[i], img=face?.querySelector('img');
      if(!face||!img)return;
      face.style.setProperty('--face-accent',[ 'var(--teal)','var(--green)','var(--violet)','var(--blue)' ][i%4]);
      img.src=assets[label];
      img.alt='';
      face.setAttribute('aria-label',label);
    });
  };
  applyIcons();
  let swapTimer;
  const scheduleShuffle=()=>{
    const delay=520+Math.floor(Math.random()*760);
    swapTimer=window.setTimeout(()=>{applyIcons();scheduleShuffle();},delay);
  };
  scheduleShuffle();
  const reduced=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if(reduced){window.clearTimeout(swapTimer);swapTimer=null;}
  const dir=sessionStorage.getItem('kt-page-transition-direction');
  if(dir){
    document.body.classList.add(`page-from-${dir}`);
    const vars={top:['-12deg','0deg',0,0],bottom:['12deg','0deg',0,0],left:['0deg','-12deg',-20,0],right:['0deg','12deg',20,0]}[dir]||['0deg','0deg',0,0];
    document.body.style.setProperty('--reveal-rx',vars[0]);document.body.style.setProperty('--reveal-ry',vars[1]);
    document.body.style.setProperty('--enter-x',`${vars[2]}px`);document.body.style.setProperty('--enter-y',`${vars[3]}px`);
    sessionStorage.removeItem('kt-page-transition-direction');
  }
  let finished=false;
  const finish=()=>{if(finished)return;finished=true;if(swapTimer)window.clearTimeout(swapTimer);document.body.classList.add('page-transition-entering');if(reduced){preloader.classList.add('is-hidden');return;}window.setTimeout(()=>preloader.classList.add('is-hidden'),360);window.setTimeout(()=>document.body.classList.remove('page-transition-entering'),1100);};
  if(document.readyState==='complete')window.setTimeout(finish,90);else window.addEventListener('load',()=>window.setTimeout(finish,90),{once:true});
  window.setTimeout(finish,3200);
  window.addEventListener('pageshow',e=>{if(e.persisted){preloader.classList.add('is-hidden');document.body.classList.remove('page-transition-exit','page-transition-entering');finished=true;}});
  const directions=['top','bottom','left','right'];
  const isInternal=(a)=>{if(!a||!a.href||a.target==='_blank'||a.hasAttribute('download'))return false;if(a.origin!==location.origin)return false;if(a.protocol!=='http:'&&a.protocol!=='https:')return false;const u=new URL(a.href);if(u.pathname===location.pathname&&u.search===location.search&&u.hash)return false;return /\.html$/i.test(u.pathname)||u.pathname.endsWith('/');};
  document.addEventListener('click',e=>{if(e.defaultPrevented||e.button!==0||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey)return;const a=e.target.closest('a');if(!isInternal(a))return;const href=a.href,direction=directions[Math.floor(Math.random()*directions.length)];sessionStorage.setItem('kt-page-transition-direction',direction);e.preventDefault();if(reduced){location.href=href;return;}const exit={top:[0,24],bottom:[0,-24],left:[30,0],right:[-30,0]}[direction];document.body.style.setProperty('--exit-x',`${exit[0]}px`);document.body.style.setProperty('--exit-y',`${exit[1]}px`);document.body.classList.add('page-transition-exit');preloader.classList.remove('is-hidden');window.setTimeout(()=>{location.href=href},420);},true);
})();

document.documentElement.classList.add('js');
document.addEventListener('DOMContentLoaded',()=>{
 const body=document.body;
 const header=document.querySelector('.site-header');
 let headerRaf=0;
 const syncHeader=()=>{
   if(!header) return;
   const desktop=window.matchMedia('(min-width:700px)').matches;
   if(!desktop){
     header.style.removeProperty('--header-progress');
     header.style.removeProperty('--header-width');
     header.style.removeProperty('--header-height');
     header.style.removeProperty('--header-top');
     header.style.removeProperty('--header-pad');
     header.style.removeProperty('--header-gap');
     header.style.removeProperty('--header-radius');
     header.style.removeProperty('--logo-copy-width');
     header.style.removeProperty('--logo-copy-opacity');
     header.style.removeProperty('--logo-copy-x');
     header.style.removeProperty('--logo-size');
     header.classList.remove('is-scrolled');
     return;
   }

   // Desktop header: compact pill at the top, fully expanded at 25vh of scroll.
   // The header is fixed over the hero so the banner starts at the very top.
   const triggerDistance=Math.max(1,window.innerHeight*0.25);
   const rawProgress=Math.min(1,Math.max(0,(window.scrollY||0)/triggerDistance));
   // Smoothstep keeps the 0→25vh transition progressive without a sudden acceleration.
   const progress=rawProgress*rawProgress*(3-2*rawProgress);
   const viewport=window.innerWidth;
   const isTablet=viewport>=700&&viewport<=1200;
   const initialWidth=isTablet?Math.max(676,viewport-24):Math.min(920,Math.max(740,viewport-24));
   const width=initialWidth+(viewport-initialWidth)*progress;
   const copyWidth=viewport<900?180:viewport<1100?250:330;

   header.style.setProperty('--header-progress',progress.toFixed(4));
   header.style.setProperty('--header-width',`${width.toFixed(2)}px`);
   header.style.setProperty('--header-height',`${(60+18*progress).toFixed(2)}px`);
   header.style.setProperty('--header-top',`${(12*(1-progress)).toFixed(2)}px`);
   header.style.setProperty('--header-pad',`${(12+28*progress).toFixed(2)}px`);
   header.style.setProperty('--header-gap',`${(8-2*progress).toFixed(2)}px`);
   header.style.setProperty('--header-radius',`${Math.max(0,999*(1-progress)).toFixed(2)}px`);
   header.style.setProperty('--logo-copy-width',`${(copyWidth*progress).toFixed(2)}px`);
   header.style.setProperty('--logo-copy-opacity',progress.toFixed(4));
   header.style.setProperty('--logo-copy-x',`${(-8*(1-progress)).toFixed(2)}px`);
   header.style.setProperty('--logo-size',`${(50-2*progress).toFixed(2)}px`);
   header.classList.toggle('is-scrolled',progress>=1);
 };
 const requestHeaderSync=()=>{ if(headerRaf) return; headerRaf=requestAnimationFrame(()=>{headerRaf=0;syncHeader()}); };
 syncHeader(); window.addEventListener('scroll',requestHeaderSync,{passive:true}); window.addEventListener('resize',requestHeaderSync,{passive:true});

 // Mobile-only persistent contact actions.
 if(!document.querySelector('.mobile-sticky-actions')){
   const actions=document.createElement('div'); actions.className='mobile-sticky-actions'; actions.setAttribute('aria-label','Quick contact actions');
   actions.innerHTML='<a class="mobile-call" href="tel:+918425898382" aria-label="Call Khemraj Thakoor now"><span class="mobile-cta-icon" aria-hidden="true"><svg viewBox="0 0 24 24" focusable="false"><rect x="6" y="2.5" width="12" height="19" rx="2.5"></rect><circle cx="12" cy="18.5" r="1"></circle></svg></span> Call Now</a><a class="mobile-hire" href="contact.html" aria-label="Hire Khemraj Thakoor"><span aria-hidden="true">↗</span> Hire Me</a>';
   document.body.appendChild(actions); document.documentElement.classList.add('has-mobile-actions');
 }
 const menu=document.querySelector('.menu'),nav=document.querySelector('.nav-links');
 if(menu&&nav){menu.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',open?'true':'false')})}
 const drop=document.querySelector('.nav-dropdown'),parent=document.querySelector('.nav-parent');
 if(drop&&parent){parent.addEventListener('click',e=>{e.stopPropagation();const open=drop.classList.toggle('open');parent.setAttribute('aria-expanded',open?'true':'false')});document.addEventListener('click',()=>{drop.classList.remove('open');parent.setAttribute('aria-expanded','false')})}
 document.addEventListener('keydown',e=>{if(e.key==='Escape'){if(drop&&drop.classList.contains('open')){drop.classList.remove('open');parent?.setAttribute('aria-expanded','false');parent?.focus()}if(nav&&nav.classList.contains('open')){nav.classList.remove('open');menu?.setAttribute('aria-expanded','false');menu?.focus()}}});
 const page=body.dataset.page;document.querySelectorAll('[data-nav]').forEach(a=>{if(a.dataset.nav===page)a.classList.add('active')});
 // Make every reveal safe: visible by default, then animate when observed.
 const revealEls=document.querySelectorAll('.reveal');
 if('IntersectionObserver' in window){const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target)}}),{threshold:.08,rootMargin:'0px 0px -20px 0px'});revealEls.forEach(x=>observer.observe(x))}else revealEls.forEach(x=>x.classList.add('visible'));

 // Lightweight inline SVG icons for projects and technical capability cards.
 const siteIcons={
  php:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 9h5c2 0 3 1 3 3s-1 3-3 3H6v3H3V9Zm3 2v2h2c.7 0 1-.3 1-1s-.3-1-1-1H6Zm8-2h3c2 0 3 1 3 3v5h-3v-3h-2v3h-3V9Zm3 2v1h2v-1h-2Z"/></svg>',
  database:'<svg viewBox="0 0 24 24" aria-hidden="true"><ellipse cx="12" cy="5" rx="7" ry="3"/><path d="M5 5v7c0 1.7 3.1 3 7 3s7-1.3 7-3V5M5 12v7c0 1.7 3.1 3 7 3s7-1.3 7-3v-7"/></svg>',
  wordpress:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 5.5h16v13H4zM8 9v5m0 0 2-2 2 2 3-4 2 2"/><path d="M7 3.5v2M17 3.5v2"/></svg>',
  api:'<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="6" cy="12" r="2"/><circle cx="18" cy="6" r="2"/><circle cx="18" cy="18" r="2"/><path d="m8 11 8-4m-8 6 8 4"/></svg>',
  frontend:'<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="4" width="18" height="15" rx="2"/><path d="m8 10 2 2-2 2m4 0h4"/></svg>',
  seo:'<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="10.5" cy="10.5" r="6.5"/><path d="m16 16 5 5M7.5 10.5h6m-3-3v6"/></svg>',
  performance:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 17a8 8 0 1 1 16 0"/><path d="m12 12 4-4M7 19h10"/></svg>',
  cloud:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 18h11a4 4 0 0 0 .4-8A6 6 0 0 0 7 9a4.5 4.5 0 0 0 0 9Z"/></svg>',
  finance:'<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="5" width="16" height="14" rx="2"/><path d="M8 9h8M8 13h5M8 17h8"/></svg>',
  analytics:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 19V9m7 10V5m7 14v-7"/><path d="M3 19h18"/></svg>',
  ai:'<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="5" y="5" width="14" height="14" rx="3"/><path d="M9 9h6v6H9zM3 9h2m14 0h2M9 3v2m0 14v2"/></svg>',
  education:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m3 9 9-5 9 5-9 5-9-5Z"/><path d="M7 12v4c3 2 7 2 10 0v-4M21 10v5"/></svg>',
  commerce:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 8h16l-1 11H5L4 8Z"/><path d="M8 8a4 4 0 0 1 8 0M9 12h6"/></svg>',
  fitness:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 9v6m12-6v6M3 11v2m18-2v2M8 10h8v4H8z"/></svg>',
  insurance:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m12 3 8 3v5c0 5-3.3 8.5-8 10-4.7-1.5-8-5-8-10V6l8-3Z"/><path d="m9 12 2 2 4-4"/></svg>',
  waste:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 7h12l-1 13H7L6 7Zm3-3h6l1 3H8l1-3Z"/><path d="M9 11v5m6-5v5"/></svg>',
  project:'<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="4" width="16" height="16" rx="3"/><path d="M8 8h8M8 12h5M8 16h8"/></svg>'
 };
 window.siteIcons=siteIcons;
 document.querySelectorAll('.entity-icon[data-icon]').forEach(el=>{el.innerHTML=siteIcons[el.dataset.icon]||siteIcons.project});
 document.querySelectorAll('.experience-heading .entity-icon').forEach(el=>{const name=el.parentElement?.querySelector('h3')?.textContent?.trim().toLowerCase()||''; const key=name.includes('tutopiya')?'education':name.includes('rikal')?'commerce':name.includes('techera')?'wordpress':name.includes('galaxy')?'frontend':name.includes('bitcot')?'commerce':'project'; el.dataset.icon=key; el.innerHTML=siteIcons[key]||siteIcons.project;});
 const projectIcons={
  'The Chicago School':'education','Kansas Health Science Center':'education','Saybrook University':'education','Pacific Oaks College':'education','University of Western States':'education',
  'Finrails Bank':'finance','Signature Bank':'finance','OneLife Financial Group':'finance','North Risk Partners':'insurance','Dimond Bros Insurance':'insurance','SpiritHero':'commerce','Espresso Displays':'commerce','Studio Sweat onDemand':'fitness','Supreme Waste Network':'waste'
 };
 document.querySelectorAll('.project-cloud span').forEach(el=>{const key=projectIcons[el.textContent.trim()];if(key){const icon=document.createElement('i');icon.className='cloud-icon entity-icon';icon.innerHTML=siteIcons[key]||siteIcons.project;icon.setAttribute('aria-hidden','true');el.prepend(icon)}});

 // Cursor-position glow on cards.
 document.querySelectorAll('.service-card,.work-feature,.directory-card,.expertise-card,.case-study,.highlight,.experience-card,.capability,.next-card,.metric').forEach(card=>{
   card.addEventListener('pointermove',e=>{const r=card.getBoundingClientRect();card.style.setProperty('--mx',`${((e.clientX-r.left)/r.width)*100}%`);card.style.setProperty('--my',`${((e.clientY-r.top)/r.height)*100}%`)},{passive:true});
 });
 // Scroll progress indicator.
 const progress=document.createElement('div');progress.className='scroll-progress';document.body.appendChild(progress);
 const updateProgress=()=>{const max=document.documentElement.scrollHeight-window.innerHeight;progress.style.width=`${max>0?(window.scrollY/max)*100:0}%`};window.addEventListener('scroll',updateProgress,{passive:true});updateProgress();
 // Contact form -> mail client.
 const form=document.getElementById('contactForm');if(form){form.addEventListener('submit',e=>{e.preventDefault();const d=new FormData(form);const subject=encodeURIComponent('Portfolio enquiry: '+(d.get('type')||'Project'));const bodyText=`Name: ${d.get('name')}\nEmail: ${d.get('email')}\nCompany / Project: ${d.get('company')||'N/A'}\nProject type: ${d.get('type')}\n\nMessage:\n${d.get('message')}`;window.location.href=`mailto:khemraj143@gmail.com?subject=${subject}&body=${encodeURIComponent(bodyText)}`;const status=form.querySelector('.form-status');if(status)status.textContent='Opening your email client…'})}
});


document.addEventListener('DOMContentLoaded',()=>{
  const iconFor=(name)=>{
    const n=name.toLowerCase();
    if(n.includes('php'))return 'php';
    if(n.includes('mysql')||n.includes('sql')||n.includes('database'))return 'database';
    if(n.includes('wordpress')||n.includes('gutenberg')||n.includes('woocommerce')||n.includes('acf')||n.includes('meta box'))return 'wordpress';
    if(n.includes('react')||n.includes('javascript')||n.includes('frontend')||n.includes('html')||n.includes('css'))return 'frontend';
    if(n.includes('seo')||n.includes('schema')||n.includes('sitemap')||n.includes('canonical')||n.includes('crawl')||n.includes('index'))return 'seo';
    if(n.includes('aws')||n.includes('cloud')||n.includes('git')||n.includes('ci/cd')||n.includes('server'))return 'cloud';
    if(n.includes('performance')||n.includes('cache')||n.includes('core web')||n==='lcp'||n==='cls'||n==='inp')return 'performance';
    if(n.includes('api')||n.includes('graphql')||n.includes('webhook')||n.includes('cron'))return 'api';
    if(n.includes('analytics')||n.includes('search console')||n.includes('ahrefs')||n.includes('screaming'))return 'analytics';
    if(n.includes('ai')||n.includes('claude')||n.includes('copilot')||n.includes('amazon q')||n.includes('cursor'))return 'ai';
    return 'project';
  };
  document.querySelectorAll('.skill-chip').forEach(chip=>{
    const holder=chip.querySelector('.skill-chip-icon');
    if(!holder)return;
    const key=iconFor(chip.dataset.skill||chip.textContent);
    holder.innerHTML=(window.siteIcons&&window.siteIcons[key])?window.siteIcons[key]:'';
  });
});
