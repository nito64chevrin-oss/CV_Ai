/* Basic interactivity: dark mode, carousel, filtering, contact form, visit counter, animations */
document.addEventListener('DOMContentLoaded',()=>{
  // Minimal JS: theme toggle (persistent), year and visit counter, small reveals
  const root = document.documentElement;
  const themeToggle = document.getElementById('themeToggle');
  const saved = localStorage.getItem('theme');
  if(saved === 'light') root.classList.add('light');

  themeToggle && themeToggle.addEventListener('click', ()=>{
    root.classList.toggle('light');
    const isLight = root.classList.contains('light');
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
    // accessibility + visual feedback
    themeToggle.setAttribute('aria-pressed', isLight ? 'true' : 'false');
    themeToggle.textContent = isLight ? '🌤' : '🌙';
  });

  // set initial aria state and icon
  if(themeToggle){
    const isLightInit = root.classList.contains('light');
    themeToggle.setAttribute('aria-pressed', isLightInit ? 'true' : 'false');
    themeToggle.textContent = isLightInit ? '🌤' : '🌙';
  }

  const yearEl = document.getElementById('year'); if(yearEl) yearEl.textContent = new Date().getFullYear();

  const visitCount = document.getElementById('visitCount');
  if(visitCount){
    const visits = (parseInt(localStorage.getItem('visits')||'0',10) + 1);
    localStorage.setItem('visits', visits);
    visitCount.textContent = visits;
  }

  // simple reveal on scroll
  const io = new IntersectionObserver((entries, obs)=>{
    entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('animate-in'); obs.unobserve(e.target); } });
  },{threshold:0.12});
  document.querySelectorAll('.reveal').forEach(el=>io.observe(el));

  // lightweight contact form save
  const form = document.getElementById('contactForm');
  if(form){
    const status = document.getElementById('formStatus');
    const submitBtn = document.getElementById('submitBtn');
    const nameField = form.querySelector('#name');
    const emailField = form.querySelector('#email');
    const messageField = form.querySelector('#message');
    const helpName = document.getElementById('help-name');
    const helpEmail = document.getElementById('help-email');
    const helpMessage = document.getElementById('help-message');

    const validEmail = v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
    const validate = ()=>{
      let ok = true;
      if(!nameField.value.trim()){ helpName.textContent = 'Le nom est requis.'; helpName.className='help error'; ok=false; } else { helpName.textContent=''; helpName.className='help'; }
      if(!validEmail(emailField.value)){ helpEmail.textContent = 'Email invalide.'; helpEmail.className='help error'; ok=false; } else { helpEmail.textContent=''; helpEmail.className='help'; }
      if(!messageField.value.trim()){ helpMessage.textContent = 'Écrivez un message.'; helpMessage.className='help error'; ok=false; } else { helpMessage.textContent=''; helpMessage.className='help'; }
      submitBtn.disabled = !ok;
      return ok;
    };

    [nameField,emailField,messageField].forEach(i=>i.addEventListener('input', validate));

    form.addEventListener('submit', e=>{
      e.preventDefault();
      if(!validate()) return;
      const data = {name:nameField.value, email:emailField.value, message:messageField.value};
      const msgs = JSON.parse(localStorage.getItem('messages')||'[]'); msgs.push({...data, date:new Date().toISOString()}); localStorage.setItem('messages', JSON.stringify(msgs));
      status && (status.textContent = 'Message sauvegardé localement. Merci !');
      form.reset();
      submitBtn.disabled = true;
    });
  }

  // project filtering (lightweight)
  const filterBtns = document.querySelectorAll('.filter');
  if(filterBtns.length){
    const projects = Array.from(document.querySelectorAll('.project'));
    const track = document.querySelector('.carousel-track');
    const prevBtn = document.querySelector('.carousel-btn.prev');
    const nextBtn = document.querySelector('.carousel-btn.next');

    let visibleIndex = 0; // index within visible items

    const getVisible = ()=> projects.filter(p=>p.style.display !== 'none');

    const updateVisible = ()=>{
      if(!track) return;
      const visible = getVisible();
      if(!visible.length){ track.style.transform = 'translateX(0)'; visibleIndex = 0; return; }
      visibleIndex = Math.max(0, Math.min(visibleIndex, visible.length - 1));
      const target = visible[visibleIndex];
      const offset = target.offsetLeft || 0;
      track.style.transform = `translateX(${ -offset }px)`;
    };

    const moveNext = ()=>{
      const visible = getVisible();
      if(visible.length <= 1) return;
      visibleIndex = Math.min(visibleIndex + 1, visible.length - 1);
      updateVisible();
    };
    const movePrev = ()=>{
      const visible = getVisible();
      if(visible.length <= 1) return;
      visibleIndex = Math.max(visibleIndex - 1, 0);
      updateVisible();
    };

    // wire prev/next buttons
    prevBtn && prevBtn.addEventListener('click', movePrev);
    nextBtn && nextBtn.addEventListener('click', moveNext);

    filterBtns.forEach(btn=>btn.addEventListener('click', ()=>{
      filterBtns.forEach(b=>b.classList.remove('active'));
      btn.classList.add('active');
      const f = btn.dataset.filter;
      projects.forEach(p=>{
        p.style.display = (f === 'all' || p.dataset.category === f) ? '' : 'none';
      });
      // reset to first visible item after filtering
      visibleIndex = 0;
      setTimeout(updateVisible, 60);
    }));
  }
});
