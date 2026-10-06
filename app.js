const admissions={
 business:[
 {student:'孔O齡',country:'CANADA',school:'University of Toronto',campus:'Mississauga campus',zh:'多倫多大學 · Mississauga 校區',program:'管理學系',en:'Management',ranks:['加拿大 No.1','全球 No.26']},
 {student:'孔O齡',country:'CANADA',school:'University of Toronto',campus:'Scarborough campus',zh:'多倫多大學 · Scarborough 校區',program:'藝術傳播管理系',en:'Visual and Performing Arts, Arts Management and Media',ranks:['加拿大 No.1','全球 No.26']},
 {student:'孔O齡',country:'CANADA',school:'University of British Columbia',campus:'Okanagan campus',zh:'英屬哥倫比亞大學 · Okanagan 校區',program:'文學院大一不分系',en:'Bachelor of Arts',ranks:['加拿大 No.2','全球 No.34']},
 {student:'郭O菡',country:'UNITED STATES',school:'University of Wisconsin–Madison',zh:'威斯康辛大學麥迪遜分校',program:'商學系',en:'Business',ranks:['全球 No.75']},
 {student:'郭O菡',country:'UNITED STATES',school:'Pennsylvania State University',zh:'美國賓州州立大學',program:'商業管理系',en:'Business Administration',ranks:['全球 No.84']}
 ],
 art:[
 {student:'陳O寧',country:'UNITED STATES',school:'Ringling College of Art and Design',zh:'瑞格林學院',program:'電腦動畫系',en:'Computer Animation',ranks:['全美動畫學院 No.1','全球 3D 動畫 No.1']},
 {student:'郭O岑',country:'UNITED STATES',school:'School of the Art Institute of Chicago',zh:'芝加哥藝術學院',program:'藝術領域',en:'',ranks:['全美藝術學院 No.4','全球藝術學院 No.9'],scholarship:'37,800'},
 {student:'郭O岑',country:'UNITED STATES',school:'California College of the Arts',zh:'加州藝術學院',program:'藝術領域',en:'',ranks:[],scholarship:'72,000'},
 {student:'郭O岑',country:'UNITED STATES',school:'School of Visual Arts',zh:'紐約視覺藝術學院',program:'動畫系',en:'BFA Animation Program',ranks:['全美藝術學院 No.10','全球藝術學院 No.25']}
 ],
 science:[
 {student:'樓O佳',country:'CANADA',school:'University of Toronto',campus:'St. George campus',zh:'多倫多大學 · St. George 校區',program:'心理學系',en:'Psychology',ranks:['加拿大 No.1','全球 No.26']},
 {student:'樓O佳',country:'CANADA',school:'McGill University',zh:'麥基爾大學',program:'心理學系',en:'Psychology',ranks:['加拿大 No.2','全球 No.32']},
 {student:'楊O棣',country:'UNITED STATES',school:'Pennsylvania State University',zh:'美國賓州州立大學',program:'獸醫與生物醫學科學系',en:'Veterinary and Biomedical Sciences',ranks:['全美公立大學 No.25']},
 {student:'楊O棣',country:'UNITED STATES',school:'University at Buffalo',zh:'紐約州立大學水牛城分校',program:'生物系',en:'Biology',ranks:['全美公立大學 No.38']}
 ]
};
const courses={
 '10':{title:'G10 · 建立學科與語言基礎',en:'FOUNDATION & EXPLORATION',local:['國文','數學','地理','公民','物理','地科','化學','生物','體育','生活科技','美術','音樂'],groups:[['語言課程',['English Composition']],['學科課程',['American History','Language Art I','Life Education','Musicology','Music Production','STEM','Club']],['檢定課程',['SAT Math']]]},
 '11':{title:'G11 · 深化探索與學術準備',en:'ACADEMICS & PREPARATION',local:['國文','數學','地理','公民','體育','家政','探究與實作','音樂','本土語言'],groups:[['語言課程',['English Composition']],['AP 學科課程',['AP Art History']],['學科課程',['American History','Anthropology','Theory of Knowledge','Language Art II','Film Studies','Life Education','Arts','Club']]]},
 '12':{title:'G12 · 整合所學，準備出發',en:'APPLICATION & TRANSITION',local:['國文','數學','體育','全民國防','健康護理','音樂'],groups:[['外師課程',['AP US Government Politics','AP English & Composition','AP Macroeconomics','AP Arts History','Film Studies','Theory of Knowledge','European History','Club']]]}
};
const pathways={
 '10':{title:'Self-Assessment<br>& Goal Setting',sub:'認識自己的興趣與方向，建立申請計畫與學習節奏。',items:['擬定申請計畫','提供選課建議','安排暑期活動','分析留學策略','追蹤在校成績','準備 IELTS 考試']},
 '11':{title:'Achieve<br>Academic Goals',sub:'聚焦學術目標與學校選擇，逐步備妥申請需要的材料。',items:['排定申請時程','建議大學名單','瞭解入學要求','撰寫留學文件','準備 SAT 考試']},
 '12':{title:'Cultural<br>Adaptation',sub:'完成申請、確認選擇，也為海外的學習與生活做好準備。',items:['確認申請學校','繳交申請資料','指導英文面試','追蹤申請結果','建議就讀學校','預備留學生活']}
};
const voices={
 uc:`<div class="voice-content uc-photo-story"><div class="uc-story-copy"><span class="quote-mark" aria-hidden="true">“</span><h3>同時兼顧多項課業，<br>也能從容面對全新的節奏。</h3><p>學姊分享，UC Davis 的 Quarter 學制每學季只有 10 週，課程進度很快。國際班的寫作課訓練，幫助她到美國後適應大量功課與 project，在短時間內完成有水準的作業。</p><p class="voice-attribution">UC DAVIS · 大一學姊分享摘要</p></div><aside class="voice-fact uc-fact-inline"><strong>55</strong><span>大一修得學分</span><p>「同時兼顧多項課業」<br>累積心態、抗壓性與寫作能力。</p><small>依學姊個人經驗，非一般修課標準</small></aside><img class="voice-photo voice-photo-uc" src="assets/image10.jpg" alt="UC Davis 學姊分享中的校園樂隊照片" width="2500" height="1667" loading="lazy"></div>`,
 rutgers:`<div class="voice-content"><div><span class="quote-mark" aria-hidden="true">“</span><h3>雙軌制打下的學科基礎，<br>到了大學，真的很有用。</h3><p>就讀 Rutgers Business School 的學姊特別提到數學基礎，以及 AP 課程帶來的準備。她也分享，修習 AP 課程有助於大學優先選課，增加選到心儀課程的機會。</p><p class="voice-highlight">第一學期獲得 Dean’s Letter（院長嘉許名單）。成績為全校前 10%–15%，並登錄於正式成績單。</p><p class="voice-attribution">RUTGERS BUSINESS SCHOOL · 學姊分享摘要</p></div><img class="voice-photo" src="assets/image11.jpg" alt="Rutgers 學姊照片" width="3129" height="5562" loading="lazy"></div>`,
 wisconsin:`<div class="voice-content"><div><span class="quote-mark" aria-hidden="true">“</span><h3>更獨立、更自信，<br>也用更開放的心態看世界。</h3><p>從 Wisconsin–Madison 商學院畢業的學姊回憶，AP 課與語言課讓她在多元文化與想法中學習。國際班經常以英文溝通與聽課的經驗，幫助她快速適應美國教授的教學方式。</p><p>她帶走的不只是課堂知識，也更理解世界的多元，學會獨立、自信，並以開放的心態面對世界。</p><p class="voice-attribution">WISCONSIN–MADISON · 大四學姊分享摘要</p></div><img class="voice-photo" src="assets/image13.jpg" alt="Wisconsin–Madison 商學院畢業學姊照片" width="1044" height="1566" loading="lazy"></div>`
};
function renderAdmissions(field){const panel=document.querySelector('#admissions-panel');panel.setAttribute('aria-labelledby',`field-${field}`);panel.innerHTML=admissions[field].map((x,i)=>`<article class="admission-card" style="animation-delay:${i*.04}s"><div class="admission-top"><span>${x.country}</span><span>高三 · ${x.student}</span></div><h3>${x.school}${x.campus?`<small>${x.campus}</small>`:''}</h3><p class="school-chinese">${x.zh}</p><p class="program">${x.program}</p>${x.en?`<p class="program-en">${x.en}</p>`:''}${x.ranks.length?`<div class="ranks">${x.ranks.map(r=>`<span>${r}</span>`).join('')}</div>`:''}${x.scholarship?`<p class="scholarship">獎學金 <strong>US$ ${x.scholarship}</strong></p>`:''}</article>`).join('')}
function renderCourse(grade){const c=courses[grade],panel=document.querySelector('#course-panel');panel.setAttribute('aria-labelledby',`grade-${grade}`);panel.innerHTML=`<div class="course-content"><div class="course-head"><h3>${c.title}</h3><span>${c.en}</span></div><div class="course-columns"><div><p class="track-title">中師課程</p><span class="course-label">校內必修</span><div class="course-list">${c.local.map(t=>`<span>${t}</span>`).join('')}</div></div><div><p class="track-title">外師課程</p>${c.groups.map(([label,list])=>`<span class="course-label">${label}</span><div class="course-list">${list.map(t=>`<span${t.startsWith('AP ')?' class="ap"':''}>${t}</span>`).join('')}</div>`).join('')}</div></div></div>`}
function renderPath(grade){const p=pathways[grade],panel=document.querySelector('#path-panel');panel.setAttribute('aria-labelledby',`path-${grade}`);panel.innerHTML=`<div class="path-content"><div><h3>${p.title}</h3><p class="path-sub">${p.sub}</p></div><ol class="path-checklist">${p.items.map((item,i)=>`<li><span>${String(i+1).padStart(2,'0')}</span>${item}</li>`).join('')}</ol></div>`}
function renderVoice(id){const p=document.querySelector('#voice-panel');p.setAttribute('aria-labelledby',`voice-${id}`);p.innerHTML=voices[id]}
function setupTabs(selector,property,render){const list=document.querySelector(selector);const tabs=[...list.querySelectorAll('[role=tab]')];const activate=button=>{tabs.forEach(t=>{const selected=t===button;t.setAttribute('aria-selected',String(selected));t.tabIndex=selected?0:-1});render(button.dataset[property])};tabs.forEach((t,i)=>{t.addEventListener('click',()=>activate(t));t.addEventListener('keydown',e=>{let index=null;if(e.key==='ArrowRight'||e.key==='ArrowDown')index=(i+1)%tabs.length;if(e.key==='ArrowLeft'||e.key==='ArrowUp')index=(i-1+tabs.length)%tabs.length;if(e.key==='Home')index=0;if(e.key==='End')index=tabs.length-1;if(index!==null){e.preventDefault();tabs[index].focus();activate(tabs[index])}})});render(tabs[0].dataset[property])}
setupTabs('.field-tabs','field',renderAdmissions);setupTabs('.grade-tabs','grade',renderCourse);setupTabs('.path-tabs','path',renderPath);setupTabs('.voice-tabs','voice',renderVoice);
const menuButton=document.querySelector('.menu-toggle'),mobileNav=document.querySelector('#mobile-nav');menuButton.addEventListener('click',()=>{const open=menuButton.getAttribute('aria-expanded')==='true';menuButton.setAttribute('aria-expanded',String(!open));menuButton.setAttribute('aria-label',open?'開啟導覽選單':'關閉導覽選單');mobileNav.hidden=open});mobileNav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{mobileNav.hidden=true;menuButton.setAttribute('aria-expanded','false');menuButton.setAttribute('aria-label','開啟導覽選單')}));document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!mobileNav.hidden){mobileNav.hidden=true;menuButton.setAttribute('aria-expanded','false');menuButton.focus()}});
const mediaDialog=document.querySelector('#media-dialog'),dialogImage=document.querySelector('#dialog-image'),dialogWrap=document.querySelector('#dialog-image-wrap');let previousFocus=null;function openPhoto(file,caption,rotated=false){previousFocus=document.activeElement;dialogImage.src=`assets/${file}`;dialogImage.alt=caption;document.querySelector('#media-title').textContent=caption;dialogWrap.classList.toggle('rotate',rotated);mediaDialog.showModal();document.body.style.overflow='hidden'}document.querySelectorAll('[data-photo]').forEach(b=>b.addEventListener('click',()=>openPhoto(b.dataset.photo,b.dataset.caption,b.dataset.rotate==='true')));const scheduleDialog=document.querySelector('#schedule-dialog');document.querySelector('#view-schedule').addEventListener('click',()=>{previousFocus=document.activeElement;scheduleDialog.showModal();document.body.style.overflow='hidden'});
document.querySelectorAll('dialog').forEach(d=>{d.querySelector('.close-dialog').addEventListener('click',()=>d.close());d.addEventListener('click',e=>{if(e.target===d){const r=d.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)d.close()}});d.addEventListener('close',()=>{document.body.style.overflow='';previousFocus?.focus()})});
const reduceMotion=window.matchMedia('(prefers-reduced-motion: reduce)').matches;if(!reduceMotion&&'IntersectionObserver'in window){document.documentElement.classList.add('js-motion');const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target)}}),{threshold:.08});document.querySelectorAll('.reveal').forEach(e=>observer.observe(e));const numbers=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){const target=Number(e.target.dataset.count),start=performance.now();function step(now){const t=Math.min((now-start)/900,1);e.target.textContent=Math.round(target*(1-Math.pow(1-t,3)));if(t<1)requestAnimationFrame(step)}requestAnimationFrame(step);numbers.unobserve(e.target)}}),{threshold:.9});document.querySelectorAll('[data-count]').forEach(e=>numbers.observe(e))}
let scrollTick=false;const progress=document.querySelector('.reading-progress');function updateScroll(){const total=document.documentElement.scrollHeight-innerHeight;progress.style.width=`${total>0?scrollY/total*100:0}%`;scrollTick=false}addEventListener('scroll',()=>{if(!scrollTick){requestAnimationFrame(updateScroll);scrollTick=true}},{passive:true});updateScroll();if('IntersectionObserver'in window){const navObserver=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){document.querySelectorAll('.desktop-nav a').forEach(a=>a.classList.toggle('active',a.hash===`#${e.target.id}`))}}),{rootMargin:'-15% 0px -65% 0px'});document.querySelectorAll('main section[id]').forEach(s=>navObserver.observe(s))}

/* Repeat complete measured units, leaving no uncovered viewport at any loop phase. */
function initializeInfiniteMarquee(){
 const strip=document.querySelector('.marquee');
 const track=strip?.querySelector('.marquee-track');
 const unit=track?.querySelector('.marquee-unit');
 if(!strip||!track||!unit)return;
 const motion=window.matchMedia('(prefers-reduced-motion: reduce)');
 const duration=35000;
 let animation=null,cycleWidth=0,queued=false;
 function refresh(){
  queued=false;
  const nextWidth=unit.getBoundingClientRect().width;
  const viewportWidth=strip.getBoundingClientRect().width;
  if(!(nextWidth>0&&viewportWidth>0))return;
  const required=Math.max(2,Math.ceil(viewportWidth/nextWidth)+1);
  while(track.children.length<required)track.append(unit.cloneNode(true));
  while(track.children.length>required)track.lastElementChild.remove();
  if(motion.matches||typeof track.animate!=='function'){
   animation?.cancel();animation=null;track.style.transform='none';
  }else if(!animation||Math.abs(nextWidth-cycleWidth)>0.01){
   const phase=animation?((Number(animation.currentTime)||0)%duration)/duration:0;
   animation?.cancel();track.style.transform='';
   animation=track.animate([{transform:'translate3d(0,0,0)'},{transform:`translate3d(-${nextWidth}px,0,0)`}],{duration,iterations:Infinity,easing:'linear'});
   animation.currentTime=phase*duration;
  }
  cycleWidth=nextWidth;
 }
 function requestRefresh(){if(!queued){queued=true;requestAnimationFrame(refresh)}}
 refresh();
 if('ResizeObserver'in window){const observer=new ResizeObserver(requestRefresh);observer.observe(strip);observer.observe(unit)}
 window.addEventListener('resize',requestRefresh,{passive:true});
 motion.addEventListener?.('change',requestRefresh);
 document.fonts?.ready.then(requestRefresh);
}
initializeInfiniteMarquee();

/* Carousel keeps each verified student photograph paired with its own experience. */
function initializeStudentCarousel(){
 const region=document.querySelector('#kv-carousel');if(!region)return;
 const slides=[...region.querySelectorAll('.kv-slide')],dots=[...region.querySelectorAll('[data-kv-index]')];
 const toggle=region.querySelector('#kv-toggle'),status=region.querySelector('#kv-status');
 const motion=window.matchMedia('(prefers-reduced-motion: reduce)');
 const hoverCapable=window.matchMedia('(hover: hover)');
 let current=0,requested=0,requestId=0,timer=null,userPaused=motion.matches,hovering=false;
 function clearTimer(){if(timer!==null){clearTimeout(timer);timer=null}}
 function syncToggle(){toggle.disabled=motion.matches;toggle.textContent=motion.matches?'手動':userPaused?'播放':'暫停';toggle.setAttribute('aria-label',motion.matches?'已依減少動態設定停用自動輪播':userPaused?'開始自動輪播':'暫停自動輪播')}
 function schedule(){clearTimer();syncToggle();if(!userPaused&&!motion.matches&&!document.hidden&&!hovering)timer=setTimeout(()=>show((current+1)%slides.length,false),8000)}
 async function show(index,manual){
  clearTimer();requested=(index+slides.length)%slides.length;const target=requested,token=++requestId;
  if(manual){userPaused=true;syncToggle()}
  const img=slides[target].querySelector('img');
  try{if(img.decode)await img.decode();else if(!img.complete)await new Promise((resolve,reject)=>{img.addEventListener('load',resolve,{once:true});img.addEventListener('error',reject,{once:true})});if(!img.naturalWidth)throw new Error('Image unavailable')}
  catch{if(token===requestId){userPaused=true;requested=current;status.textContent='這張照片暫時無法載入，請稍後再試。';schedule()}return}
  if(token!==requestId)return;
  slides.forEach((slide,i)=>{slide.hidden=i!==target;slide.setAttribute('aria-hidden',String(i!==target))});
  dots.forEach((dot,i)=>dot.setAttribute('aria-current',String(i===target)));
  current=target;status.textContent=manual?`第${target+1}位，共${slides.length}位：${slides[target].dataset.school}`:'';schedule();
 }
 dots.forEach((dot,i)=>dot.addEventListener('click',()=>show(i,true)));
 toggle.addEventListener('click',()=>{userPaused=!userPaused;if(!userPaused)hovering=false;schedule()});
 region.addEventListener('mouseenter',()=>{if(hoverCapable.matches){hovering=true;clearTimer()}});region.addEventListener('mouseleave',()=>{hovering=false;schedule()});
 region.addEventListener('focusin',event=>{clearTimer();if(event.target!==toggle){userPaused=true;syncToggle()}});region.addEventListener('focusout',event=>{if(!region.contains(event.relatedTarget))schedule()});
 region.addEventListener('keydown',event=>{if(event.key==='ArrowLeft'){event.preventDefault();show(requested-1,true)}else if(event.key==='ArrowRight'){event.preventDefault();show(requested+1,true)}});
 document.addEventListener('visibilitychange',schedule);
 motion.addEventListener?.('change',()=>{if(motion.matches)userPaused=true;schedule()});schedule();
}
initializeStudentCarousel();
