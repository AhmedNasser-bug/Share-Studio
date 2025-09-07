document.addEventListener("DOMContentLoaded",function(){const t=document.getElementById("contact-form"),r=document.getElementById("form-status");function a(e,o,u,v){const c=u(e.value);return c?(e.classList.remove("border-accent-red"),o.classList.add("hidden"),e.removeAttribute("aria-invalid")):(e.classList.add("border-accent-red"),o.textContent=v,o.classList.remove("hidden"),e.setAttribute("aria-invalid","true")),c}function g(e){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)}function b(e){return e.trim().length>0}const l=document.getElementById("contact-name"),d=document.getElementById("contact-email"),m=document.getElementById("contact-message");l.addEventListener("blur",()=>{a(l,document.getElementById("name-error"),b,"Please enter your full name")}),d.addEventListener("blur",()=>{d.value&&a(d,document.getElementById("email-error"),g,"Please enter a valid email address")}),m.addEventListener("blur",()=>{a(m,document.getElementById("message-error"),e=>e.trim().length>=10,"Please provide at least 10 characters describing your project")}),t.addEventListener("submit",async function(e){e.preventDefault();const o=a(l,document.getElementById("name-error"),b,"Please enter your full name"),u=a(d,document.getElementById("email-error"),g,"Please enter a valid email address"),v=a(m,document.getElementById("message-error"),s=>s.trim().length>=10,"Please provide at least 10 characters describing your project"),c=document.getElementById("privacy-consent");if(!c.checked){r.innerHTML='<div class="bg-accent-red/20 border border-accent-red/40 text-accent-red px-4 py-3 rounded-lg">Please accept our Privacy Policy to continue.</div>',r.classList.remove("hidden"),c.focus();return}if(!o||!u||!v){r.innerHTML='<div class="bg-accent-red/20 border border-accent-red/40 text-accent-red px-4 py-3 rounded-lg">Please fix the errors above and try again.</div>',r.classList.remove("hidden");return}const n=t.querySelector('button[type="submit"]'),y=n.innerHTML;n.innerHTML=`
        <span class="flex items-center justify-center space-x-3">
          <svg class="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <span>Sending...</span>
        </span>
      `,n.disabled=!0;try{const s=new FormData(t),p={name:s.get("name"),email:s.get("email"),company:s.get("company"),budget:s.get("budget"),services:s.getAll("services[]"),message:s.get("message"),timestamp:new Date().toISOString()};await new Promise(i=>setTimeout(i,2e3)),n.innerHTML=`
          <span class="flex items-center justify-center space-x-3">
            <svg class="h-5 w-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span>Message Sent!</span>
          </span>
        `,r.innerHTML=`
          <div class="bg-green-400/20 border border-green-400/40 text-green-400 px-6 py-4 rounded-lg">
            <div class="flex items-center space-x-3">
              <svg class="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <div>
                <div class="font-semibold">Thank you for your message!</div>
                <div class="text-sm mt-1">We'll get back to you within 24 hours with next steps for your project.</div>
              </div>
            </div>
          </div>
        `,r.classList.remove("hidden"),setTimeout(()=>{t.reset(),n.innerHTML=y,n.disabled=!1,r.classList.add("hidden"),t.querySelectorAll(".border-accent-red").forEach(i=>{i.classList.remove("border-accent-red")}),t.querySelectorAll('[id$="-error"]').forEach(i=>{i.classList.add("hidden")})},5e3)}catch{n.innerHTML=y,n.disabled=!1,r.innerHTML=`
          <div class="bg-accent-red/20 border border-accent-red/40 text-accent-red px-6 py-4 rounded-lg">
            <div class="flex items-center space-x-3">
              <svg class="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <div>
                <div class="font-semibold">Failed to send message</div>
                <div class="text-sm mt-1">Please try again or contact us directly via email.</div>
              </div>
            </div>
          </div>
        `,r.classList.remove("hidden")}}),t.querySelectorAll("input, textarea, select").forEach(e=>{e.addEventListener("focus",()=>{e.parentElement.classList.add("ring-1","ring-accent-blue/30")}),e.addEventListener("blur",()=>{e.parentElement.classList.remove("ring-1","ring-accent-blue/30")}),e.addEventListener("mouseenter",()=>{e.matches(":focus")||(e.style.borderColor="#5c5c6b")}),e.addEventListener("mouseleave",()=>{!e.matches(":focus")&&!e.classList.contains("border-accent-red")&&(e.style.borderColor="#5c5c6b")})});function h(){const e=t.querySelector(".border-accent-red");e&&(e.scrollIntoView({behavior:"smooth",block:"center"}),e.focus())}t.addEventListener("submit",e=>{setTimeout(()=>{t.querySelector(".border-accent-red")&&h()},100)})});
