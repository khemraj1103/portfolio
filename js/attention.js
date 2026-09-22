(function(){
  const focusMap={
    home:[['Proof','index.html#proof'],['Solutions','index.html#solutions'],['Approach','index.html#approach'],['Work','index.html#work'],['Process','index.html#process'],['Start','contact.html']],
    about:[['Profile','about.html#profile'],['Capability','about.html#capability'],['Journey','about.html#journey'],['Outcomes','about.html#outcomes'],['Connect','contact.html']],
    services:[['Solutions','services.html#solutions'],['Stack','services.html#stack'],['Fit','services.html#fit'],['Start','contact.html']],
    seo:[['Signals','technical-seo.html#signals'],['Framework','technical-seo.html#framework'],['Validate','technical-seo.html#validate'],['Results','technical-seo.html#results'],['Start','contact.html']],
    performance:[['Bottlenecks','performance-optimization.html#bottlenecks'],['System','performance-optimization.html#system'],['Proof','performance-optimization.html#proof'],['Results','performance-optimization.html#results'],['Start','contact.html']],
    experience:[['Experience','website-branding.html#experience'],['Foundation','website-branding.html#foundation'],['Stack','website-branding.html#stack'],['Outcome','website-branding.html#outcome'],['Start','contact.html']],
    wordpress:[['Architecture','custom-wordpress-development.html#architecture'],['Build','custom-wordpress-development.html#build'],['Flow','custom-wordpress-development.html#flow'],['Quality','custom-wordpress-development.html#quality'],['Start','contact.html']],
    headless:[['Model','headless-wordpress.html#model'],['Layers','headless-wordpress.html#layers'],['Proof','headless-wordpress.html#proof'],['Fit','headless-wordpress.html#fit'],['Start','contact.html']],
    work:[['Projects','works.html#projects'],['Platforms','works.html#platforms'],['Approach','works.html#approach'],['Next','contact.html']],
    expertise:[['Toolkit','skills.html#toolkit'],['Layers','skills.html#layers'],['Fit','skills.html#fit'],['Value','skills.html#value'],['Start','contact.html']],
    contact:[['Brief','contact.html#brief'],['Process','contact.html#process'],['Start','contact.html#start']]
  };
  const nextMap={
    home:['proof','services','about','works','skills','contact','contact','contact','contact'],
    about:['about','about','about','works','contact','contact'], services:['services','skills','contact','contact','contact'],
    seo:['seo','seo','seo','seo','contact','contact'], performance:['performance','performance','performance','performance','contact','contact'],
    experience:['experience','experience','experience','experience','contact','contact'], wordpress:['wordpress','wordpress','wordpress','wordpress','contact','contact'],
    headless:['headless','headless','headless','headless','contact','contact'], work:['work','work','work','contact','contact'],
    expertise:['expertise','expertise','expertise','expertise','contact'], contact:['contact','contact','contact','contact']
  };
  const page=document.body.dataset.page||'home';
  const sections=[...document.querySelectorAll('main > section')];
  if(!sections.length)return;

  const clean=(s)=>s.replace(/\s+/g,' ').trim().replace(/[→—–].*$/,'').slice(0,32);
  sections.forEach((sec,i)=>{
    const heading=sec.querySelector('h2,h3,h1');
    const title=heading?clean(heading.textContent):`Section ${i+1}`;
    sec.dataset.sectionName=title;
    if(!sec.id)sec.id=`section-${i+1}`;
    sec.classList.add('attention-section');
  });


  // Build a persistent “page journey” so important sections are always one click away.
  const guide=document.createElement('aside'); guide.className='page-journey'; guide.setAttribute('aria-label','Page journey');
  const links=focusMap[page]||[];
  guide.innerHTML=`<button class="journey-toggle" type="button" aria-expanded="false"><span>Explore</span><i>+</i></button><div class="journey-panel"><small>PAGE JOURNEY</small><strong>Choose what you want to see</strong><div class="journey-links">${links.map((x,i)=>`<a href="${x[1]}" data-journey="${i}"><em>${String(i+1).padStart(2,'0')}</em><span>${x[0]}</span><b>↗</b></a>`).join('')}</div></div>`;
  document.body.appendChild(guide);
  const toggle=guide.querySelector('.journey-toggle'); toggle.addEventListener('click',()=>{const open=guide.classList.toggle('open');toggle.setAttribute('aria-expanded',open?'true':'false')});

  // Active section tracking creates a visual reading path, not a decorative animation.
  const navLinks=[...guide.querySelectorAll('.journey-links a')];
  const observer=new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        entry.target.classList.add('in-focus');
        const idx=sections.indexOf(entry.target);
        navLinks.forEach((a,j)=>a.classList.toggle('active',j===Math.min(idx,navLinks.length-1)));
      }
    });
  },{threshold:.18,rootMargin:'-12% 0px -48% 0px'});
  sections.forEach(s=>observer.observe(s));

  // Letter-by-letter section headings: the complete heading remains readable as it resolves.
  document.querySelectorAll('main h2, main h3').forEach((heading)=>{
    if(heading.children.length || heading.dataset.letterAnimated==='true') return;
    const text=heading.textContent.trim();
    if(!text) return;
    heading.dataset.letterAnimated='true';
    heading.setAttribute('aria-label',text);
    heading.classList.add('letter-title');
    heading.textContent='';
    [...text].forEach((char,index)=>{
      const span=document.createElement('span');
      span.className='letter';
      span.textContent=char===' ' ? '\u00a0' : char;
      span.style.setProperty('--letter-delay',`${Math.min(index*18,620)}ms`);
      heading.appendChild(span);
    });
  });
  const letterObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{
    if(entry.isIntersecting){entry.target.classList.add('letters-visible');letterObserver.unobserve(entry.target)}
  }),{threshold:.28,rootMargin:'0px 0px -12% 0px'});
  document.querySelectorAll('.letter-title').forEach(h=>letterObserver.observe(h));

  // Scroll-driven professional journey: centered airport stops with a flight path between them.
  const route=document.querySelector('.experience-route');
  const plane=route&&route.querySelector('.flight-plane');
  const timeline=document.querySelector('.timeline-agency');
  const travelCards=timeline?[...timeline.querySelectorAll('.timeline-card')]:[];
  let airportStops=[];
  travelCards.forEach((card,i)=>card.classList.add(i%2===0?'timeline-left':'timeline-right'));
  if(route&&travelCards.length){
    route.querySelectorAll('.route-label').forEach(x=>x.remove());
    travelCards.forEach((card,i)=>{
      const loc=card.querySelector('.timeline-location');
      const label=document.createElement('span'); label.className='route-label';
      const raw=loc?.textContent?.replace(/^[^A-Za-z]+/,'').trim()||'';
      const country=raw.split(',').slice(-1)[0].trim()||raw;
      label.innerHTML=`<i class="airport-dot" aria-hidden="true"></i><span>${country}</span>`;
      route.appendChild(label); airportStops.push(label);
    });
    const positionStops=()=>{
      const tr=timeline.getBoundingClientRect();
      travelCards.forEach((card,i)=>{
        const cr=card.getBoundingClientRect();
        const y=(cr.top+cr.height*.5)-tr.top;
        airportStops[i].style.top=`${Math.max(18,Math.min(tr.height-18,y))}px`;
      });
    };
    window.addEventListener('resize',positionStops); window.addEventListener('scroll',positionStops,{passive:true}); positionStops();
  }
  let currentStop=0;
  const updateFlight=()=>{
    if(!route||!plane||!timeline||!travelCards.length) return;
    const r=timeline.getBoundingClientRect();
    const focus=window.innerHeight*.55;
    let best=0,bestDistance=Infinity;
    travelCards.forEach((card,i)=>{const cr=card.getBoundingClientRect();const d=Math.abs((cr.top+cr.height*.5)-focus);if(d<bestDistance){bestDistance=d;best=i;}});
    currentStop=Math.max(0,Math.min(travelCards.length-1,best));
    const centers=travelCards.map(card=>{const cr=card.getBoundingClientRect();return (cr.top+cr.height*.5)-r.top;});
    let a=currentStop,b=currentStop;
    if(centers.length>1){
      if(currentStop<centers.length-1 && centers[currentStop+1]<focus-r.top) b=currentStop+1;
      else if(currentStop>0 && centers[currentStop-1]>focus-r.top) a=currentStop-1;
    }
    let targetY=centers[currentStop]||24, progress=0;
    const localFocus=focus-r.top;
    for(let i=0;i<centers.length-1;i++){
      const lo=Math.min(centers[i],centers[i+1]), hi=Math.max(centers[i],centers[i+1]);
      if(localFocus>=lo&&localFocus<=hi){a=i;b=i+1;progress=(localFocus-centers[i])/(centers[i+1]-centers[i]);break;}
    }
    if(a!==b){targetY=centers[a]+(centers[b]-centers[a])*Math.max(0,Math.min(1,progress));}
    const swing=Math.sin(Math.max(0,Math.min(1,progress))*Math.PI)*(a%2===0?34:-34);
    const x=swing;
    const angle=a!==b?(swing>0?12:-12):0;
    plane.style.top=`${targetY}px`;
    plane.style.left=`calc(50% + ${x}px)`;
    plane.style.setProperty('transform',`translate(-50%,-50%) rotate(${angle}deg)`,'important');
    plane.setAttribute('aria-valuenow',String(Math.round((currentStop/Math.max(1,travelCards.length-1))*100)));
    airportStops.forEach((stop,i)=>stop.classList.toggle('landed',i===currentStop));
  };
  if(route&&plane&&timeline){window.addEventListener('scroll',updateFlight,{passive:true});window.addEventListener('resize',updateFlight);updateFlight();}

  // Expand/collapse career cards; the default state stays concise and scannable.
  document.querySelectorAll('.experience-expand').forEach(button=>{
    button.addEventListener('click',()=>{
      const card=button.closest('.timeline-card');
      const details=card&&card.querySelector('.experience-details');
      if(!card||!details)return;
      const open=card.classList.toggle('expanded');
      button.setAttribute('aria-expanded',open?'true':'false');
      button.innerHTML=open?'Hide details <span>−</span>':'View details <span>+</span>';
    });
  });

  // Every page gets the same premium banner system, with page-specific meaning.
  // Existing right-side hero artwork is replaced so no page is left with the old/plain card.
  const bannerConfig={
    home:{label:'WEB ENGINEERING SYSTEM',title:'Build · Optimize · Scale',nodes:['WordPress','APIs','Performance','SEO'],footer:['ARCHITECT','BUILD','OPTIMIZE','SCALE']},
    about:{label:'CAREER & CAPABILITY',title:'13+ years of engineering',nodes:['13+ Years','50+ Projects','WordPress','Full Stack'],footer:['EXPERIENCE','ENGINEERING','SEO','DELIVERY']},
    services:{label:'SOLUTION ARCHITECTURE',title:'Requirement → solution',nodes:['Search','WordPress','Performance','Scale'],footer:['DISCOVER','ENGINEER','OPTIMIZE','SCALE']},
    seo:{label:'SEARCH SIGNALS',title:'Crawl · Understand · Rank',nodes:['Crawlability','Indexability','Schema','CWV'],footer:['CRAWL','INDEX','STRUCTURE','VALIDATE']},
    performance:{label:'PERFORMANCE LAB',title:'Measure → Optimize → Validate',nodes:['LCP','CLS','INP','Server'],footer:['MEASURE','OPTIMIZE','TEST','VALIDATE']},
    experience:{label:'WEB EXPERIENCE',title:'Design → Accessible UI',nodes:['Responsive','WCAG 2.1','SEO-ready','Maintainable'],footer:['DESIGN','BUILD','ACCESS','REFINE']},
    wordpress:{label:'WORDPRESS ENGINEERING',title:'Architecture around the requirement',nodes:['Themes','Plugins','APIs','WooCommerce'],footer:['MODEL','CODE','INTEGRATE','SHIP']},
    headless:{label:'HEADLESS ARCHITECTURE',title:'Content → API → React',nodes:['WordPress','REST / GraphQL','React.js','Cloud'],footer:['CONTENT','API','EXPERIENCE','DELIVER']},
    work:{label:'SELECTED DELIVERY',title:'International projects · real platforms',nodes:['Education','Finance','Insurance','Commerce'],footer:['DISCOVER','ENGINEER','DELIVER','IMPROVE']},
    expertise:{label:'TECHNICAL TOOLKIT',title:'Connected engineering layers',nodes:['PHP / MySQL','React.js','SEO','AWS'],footer:['BACKEND','FRONTEND','SEARCH','CLOUD']},
    contact:{label:'PROJECT START',title:'Challenge → Plan → Build',nodes:['Requirement','Architecture','Delivery','Growth'],footer:['CLARIFY','PLAN','BUILD','IMPROVE']}
  };
  const cfg=bannerConfig[page];
  if(cfg){
    const hero=document.querySelector('main > .page-hero, main > .service-hero, main > .hero');
    if(hero){
      hero.classList.add('page-banner','enhanced-banner');
      const grid=hero.querySelector('.page-hero-grid,.service-hero-grid,.hero-grid');
      if(grid){
        grid.classList.add('enhanced-banner-grid');
        // Remove every old right-hand hero visual so all pages use the same banner treatment.
        [...grid.children].slice(1).forEach(node=>node.remove());
        const visual=document.createElement('div');
        visual.className='enhanced-banner-visual reveal';
        visual.setAttribute('aria-label',cfg.title);
        visual.innerHTML=`
          <div class="eb-top"><span>${cfg.label}</span><b><i></i> LIVE SYSTEM</b></div>
          <div class="eb-stage">
            <div class="eb-scan"></div>
            <div class="eb-orbit eb-orbit-a"></div><div class="eb-orbit eb-orbit-b"></div>
            <div class="eb-core"><strong>${page==='about'?'13+':page==='work'?'50+':page==='expertise'?'STACK':'READY'}</strong><small>${page==='about'?'YEARS':page==='work'?'PROJECTS':page==='expertise'?'TECHNICAL LAYERS':'ENGINEERED'}</small></div>
            <div class="eb-nodes">${cfg.nodes.map((x,i)=>`<span class="eb-node eb-node-${i}"><i></i>${x}</span>`).join('')}</div>
          </div>
          <div class="eb-title">${cfg.title}</div>
          <div class="eb-line"><span></span></div>
          <div class="eb-footer">${cfg.footer.map(x=>`<span>${x}</span>`).join('')}</div>`;
        grid.appendChild(visual);
      }
    }
  }

})();


/* =========================================================
   V16 corrective layer
   - One global stagger choreography for all repeated content
   - Exact CV responsibility text is rendered by about.html
   - Career plane moves only between centered stops when cards cross 50% viewport
   - Every page receives a distinct banner visual based on page context
   ========================================================= */
(function(){
  const page=document.body.dataset.page||'home';

  /* GLOBAL STAGGER: every repeated content item gets one deterministic sequence. */
  const itemSelector=[
    '.metric','.service-card','.work-feature','.story','.process-step','.directory-card',
    '.expertise-card','.case-study','.highlight','.impact-card','.timeline-card',
    '.eco-row','.contact-point','.contact-card','.faq-item','.solution-card',
    '.feature-row','.tool','.stack-wall > span','.project-cloud > span',
    '.result-band > div','.capability','.next-card','.experience-card','.project-index-card','.skill-chip','.timeline-location','.timeline-meta','.case-facts'
  ].join(',');
  const groups=new Set();
  document.querySelectorAll('main .section, main > .hero, main > .page-hero').forEach(section=>{
    const items=[...section.querySelectorAll(itemSelector)].filter(el=>!el.closest('.timeline-card .experience-details'));
    if(items.length<2)return;
    // Use nearest repeated-item parent as the animation group.
    const parents=new Map();
    items.forEach(el=>{
      const p=el.parentElement;
      if(!parents.has(p))parents.set(p,[]);
      parents.get(p).push(el);
    });
    parents.forEach((list,parent)=>{
      if(list.length<2 || groups.has(parent))return;
      groups.add(parent);
      list.forEach((el,i)=>{
        el.classList.add('global-stagger-target');
        el.style.setProperty('--global-stagger-delay',`${i*200}ms`);
      });
      const show=()=>list.forEach(el=>el.classList.add('global-stagger-visible'));
      if(!('IntersectionObserver' in window)){show();return;}
      const io=new IntersectionObserver(entries=>{
        entries.forEach(entry=>{
          if(entry.isIntersecting){show();io.unobserve(entry.target);}
        });
      },{threshold:.08,rootMargin:'0px 0px -10% 0px'});
      io.observe(parent);
    });
  });

  /* CAREER FLIGHT: exact point-to-point movement at the viewport 50% line. */
  const route=document.querySelector('.experience-route');
  const timeline=document.querySelector('.timeline-agency');
  const plane=route&&route.querySelector('.flight-plane');
  const cards=timeline?[...timeline.querySelectorAll('.timeline-card')]:[];
  if(route&&timeline&&plane&&cards.length){
    const stops=[...route.querySelectorAll('.route-label')];
    let active=0,lastY=window.scrollY||0,lastDirection=1;
    const positionStops=()=>{
      const tr=timeline.getBoundingClientRect();
      cards.forEach((card,i)=>{
        const cr=card.getBoundingClientRect();
        const y=cr.top+cr.height/2-tr.top;
        if(stops[i])stops[i].style.top=`${Math.max(18,Math.min(tr.height-18,y))}px`;
      });
    };
    const moveToStop=(idx)=>{
      active=Math.max(0,Math.min(cards.length-1,idx));
      const tr=timeline.getBoundingClientRect();
      const cr=cards[active].getBoundingClientRect();
      const y=cr.top+cr.height/2-tr.top;
      // No interpolation, no sine wave, no left/right drift: the plane lands exactly on the point.
      plane.style.left='50%';
      plane.style.top=`${Math.max(18,Math.min(tr.height-18,y))}px`;
      // The plane points in the same direction as the user's scroll:
      // down = nose downward, up = nose upward. Rotation is transitioned,
      // so there is no flicker or sudden jump at a stop.
      const rotation=lastDirection>0?90:-90;
      plane.style.setProperty('transform',`translate(-50%,-50%) rotate(${rotation}deg)`,'important');
      plane.setAttribute('data-flight-direction',lastDirection>0?'down':'up');
      plane.setAttribute('aria-valuenow',String(Math.round(active/Math.max(1,cards.length-1)*100)));
      stops.forEach((s,i)=>s.classList.toggle('landed',i===active));
    };
    const updateBy50Percent=()=>{
      const midpoint=window.innerHeight*.5;
      const currentY=window.scrollY||0;
      const delta=currentY-lastY;
      if(Math.abs(delta)>0) lastDirection=delta>0?1:-1;
      const down=lastDirection>0;
      let candidate=active;
      if(down){
        cards.forEach((card,i)=>{
          const cr=card.getBoundingClientRect();
          const center=cr.top+cr.height/2;
          if(center<=midpoint)candidate=i;
        });
      }else{
        for(let i=0;i<cards.length;i++){
          const cr=cards[i].getBoundingClientRect();
          const center=cr.top+cr.height/2;
          if(center>=midpoint){candidate=i;break;}
        }
      }
      if(candidate!==active)moveToStop(candidate);
      else moveToStop(active);
      lastY=currentY;
    };
    window.addEventListener('resize',()=>{positionStops();moveToStop(active);});
    window.addEventListener('scroll',updateBy50Percent,{passive:true});
    positionStops();
    requestAnimationFrame(updateBy50Percent);
  }

  /* PAGE-SPECIFIC BANNER ART: intentionally different visual grammar per page. */
  const visualMap={
    home:{type:'architecture',label:'WEB ENGINEERING MAP',title:'WordPress → APIs → Performance → SEO',core:'BUILD',items:['Content','Application','Experience','Search']},
    about:{type:'journey',label:'CAREER JOURNEY',title:'13+ years across engineering layers',core:'13+',items:['Riyadh','Singapore','Indore','Full Stack']},
    services:{type:'pipeline',label:'SOLUTION PIPELINE',title:'Requirement → Architecture → Delivery',core:'FLOW',items:['DISCOVER','ARCHITECT','BUILD','SCALE']},
    seo:{type:'seo',label:'SEARCH VISIBILITY MAP',title:'Crawl → Index → Understand → Validate',core:'SEO',items:['CRAWL','INDEX','SCHEMA','CWV']},
    performance:{type:'performance',label:'PERFORMANCE LAB',title:'Measure → Optimize → Validate',core:'CWV',items:['LCP','CLS','INP','SERVER']},
    experience:{type:'browser',label:'WEB EXPERIENCE SYSTEM',title:'Responsive, accessible, maintainable UI',core:'UI',items:['RESPONSIVE','WCAG 2.1','SEMANTIC','MOBILE']},
    wordpress:{type:'wordpress',label:'WORDPRESS ENGINEERING',title:'Themes + Plugins + APIs + WooCommerce',core:'WP',items:['THEMES','PLUGINS','REST','GRAPHQL']},
    headless:{type:'headless',label:'HEADLESS CONTENT FLOW',title:'WordPress → API → React → Cloud',core:'API',items:['WORDPRESS','REST','GRAPHQL','REACT']},
    work:{type:'projects',label:'PROJECT LANDSCAPE',title:'International platforms across multiple industries',core:'50+',items:['EDUCATION','FINTECH','INSURANCE','ECOMMERCE']},
    expertise:{type:'stack',label:'TECHNICAL STACK',title:'Backend + Frontend + SEO + Cloud',core:'STACK',items:['PHP / MYSQL','REACT.JS','SEO','AWS']},
    contact:{type:'roadmap',label:'PROJECT ROADMAP',title:'Requirement → Plan → Build → Improve',core:'START',items:['BRIEF','PLAN','BUILD','IMPROVE']}
  };
  const cfg=visualMap[page];
  const hero=document.querySelector('main > .page-hero, main > .service-hero, main > .hero');
  const grid=hero&&hero.querySelector('.page-hero-grid,.service-hero-grid,.hero-grid');
  if(cfg&&hero&&grid){
    const old=grid.querySelector('.enhanced-banner-visual,.universal-banner-visual,.page-hero-visual,.hero-side-card,.engineering-panel,.contact-card,.solution-hero-visual,.work-hero-visual,.expertise-hero-visual');
    if(old)old.remove();
    hero.classList.add('context-banner',`context-${cfg.type}`);
    const visual=document.createElement('div');
    visual.className=`context-banner-visual context-art-${cfg.type}`;
    visual.setAttribute('role','img');visual.setAttribute('aria-label',cfg.title);
    visual.innerHTML=`<div class="cb-top"><span>${cfg.label}</span><b><i></i> ACTIVE</b></div><div class="cb-art"><div class="cb-gridlines"></div><div class="cb-core"><strong>${cfg.core}</strong><small>ENGINEERED</small></div><div class="cb-items">${cfg.items.map((x,i)=>`<span class="cb-item cb-item-${i}"><i></i>${x}</span>`).join('')}</div><div class="cb-connectors"></div></div><strong class="cb-title">${cfg.title}</strong><div class="cb-status"><span></span>PAGE CONTEXT <em>${String(cfg.items.length).padStart(2,'0')} SIGNALS</em></div>`;
    grid.appendChild(visual);
  }
})();
