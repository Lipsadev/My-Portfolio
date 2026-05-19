import Head from 'next/head';
import { useState, useEffect } from 'react';

const DATA = {
  skills: [
    {cat:'Languages',items:['JavaScript','Java','Python']},
    {cat:'Frontend',items:['React.js','HTML5','CSS3','Tailwind CSS','Bootstrap']},
    {cat:'Backend',items:['Node.js','Express.js','REST APIs','JWT Auth','Microservices']},
    {cat:'Database',items:['MongoDB','MySQL']},
    {cat:'DevOps & Tools',items:['Git','GitHub','Docker','Postman','VS Code','CI/CD']},
    {cat:'Other',items:['AI & LLM','OOPS','Responsive Design','API Integration']},
  ],
  projects: [
    {num:'01',title:'PawRescue',type:'Full-Stack Web App',desc:'Animal rescue & adoption platform with 3 microservices (Auth, Rescue, Communication). JWT auth, role-based access, React+Vite frontend with admin & volunteer dashboards. Multer+Cloudinary uploads, Nodemailer, real-time chat. Deployed on Render.',tags:['Node.js','Express','MongoDB','React','Microservices','JWT'],link:'#'},
    {num:'02',title:'Blog Application',type:'Web Publishing App',desc:'React + TypeScript blog app with reusable component architecture. TanStack Query for server-state, caching & query invalidation. Tailwind CSS + shadcn/ui, skeleton loaders, JSON Server REST API, Vite build.',tags:['React','TypeScript','TanStack Query','Tailwind','shadcn/ui'],link:'#'},
    {num:'03',title:'Learnify',type:'MAKAUT Educational Platform',desc:'Responsive academic resource platform with dark mode, content filtering, and bookmarking. Built with React.js, JavaScript, and Tailwind CSS using modular components and Git version control.',tags:['React.js','Tailwind CSS','JavaScript'],link:'#'},
  ],
  certs: [
    'Udemy – Full-Stack Web Developer',
    'AWS – Solutions Architecture Job Simulation | July 2025',
    'Tata iQ – Forage GenAI-Powered Data Analytics Simulation',
  ],
};

const AvatarSVG = () => (
  <svg viewBox="0 0 200 280" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',maxWidth:'320px',height:'auto'}}>
    <rect width="200" height="280" fill="#e8eaf6" rx="20"/>
    <ellipse cx="100" cy="95" rx="42" ry="46" fill="#f4c89a"/>
    <ellipse cx="100" cy="78" rx="44" ry="38" fill="#3d2c1e"/>
    <path d="M60 95 Q58 130 65 145 Q80 170 100 172 Q120 170 135 145 Q142 130 140 95" fill="#f4c89a"/>
    <rect x="55" y="168" width="90" height="80" rx="12" fill="#fff"/>
    <rect x="55" y="168" width="90" height="30" rx="6" fill="#4a3f8f"/>
    <ellipse cx="75" cy="178" rx="18" ry="22" fill="#f4c89a"/>
    <ellipse cx="125" cy="178" rx="18" ry="22" fill="#f4c89a"/>
    <path d="M72 192 Q100 198 128 192" stroke="#e8d5c4" strokeWidth="1.5" fill="none"/>
    <text x="100" y="220" textAnchor="middle" fontSize="11" fill="#4a3f8f" fontFamily="Inter,sans-serif" fontWeight="700">SHRISTI LIPSA</text>
    <text x="100" y="234" textAnchor="middle" fontSize="8" fill="#6c63b0" fontFamily="Inter,sans-serif">Full-Stack Developer</text>
  </svg>
);

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const go = (id) => { document.getElementById(id)?.scrollIntoView({behavior:'smooth'}); setMenuOpen(false); };
  const links = ['home','about','skills','projects','experience','contact'];

  return (<>
    <Head>
      <title>Shristi Lipsa – Full-Stack Developer</title>
      <meta name="description" content="Portfolio of Shristi Lipsa – Full-Stack MERN Developer, AI Enthusiast, B.Tech ECE 2026, Kolkata." />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@700;800;900&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet" />
    </Head>

    <style suppressHydrationWarning>{`
      *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
      :root{--p:#4a3f8f;--pm:#6c63b0;--pl:#8b83cc;--lv:#dde1f5;--lv2:#c8cef0;--dk:#2d2a4a;--mt:#6b6890;--bg:#f0f2fa;--w:#fff;--cb:rgba(106,99,176,0.15);--tg:rgba(74,63,143,0.1)}
      html{scroll-behavior:smooth}body{font-family:'Inter',sans-serif;background:var(--bg);color:var(--dk);overflow-x:hidden}
      a{text-decoration:none;color:inherit}button{border:none;cursor:pointer;font-family:'Inter',sans-serif}
      /* NAV */
      nav{position:fixed;top:0;left:0;right:0;z-index:200;display:flex;align-items:center;justify-content:space-between;padding:1.1rem 2.5rem;transition:all .3s}
      nav.sc{background:rgba(240,242,250,.9);backdrop-filter:blur(16px);box-shadow:0 1px 0 var(--cb)}
      .logo{font-family:'Nunito',sans-serif;font-weight:900;font-size:1.4rem;color:#fff}
      nav.sc .logo{color:var(--p)}
      .hbg{display:flex;flex-direction:column;gap:5px;background:none;padding:4px}
      .hbg span{display:block;width:26px;height:2px;background:#fff;border-radius:2px;transition:.3s}
      nav.sc .hbg span{background:var(--p)}
      .mob{display:none;position:fixed;inset:0;z-index:199;background:var(--p);flex-direction:column;align-items:center;justify-content:center;gap:1.8rem}
      .mob.open{display:flex}
      .mob button{background:none;color:#fff;font-size:1.4rem;font-weight:700;font-family:'Nunito',sans-serif;text-transform:capitalize}
      .mob .cls{position:absolute;top:1.5rem;right:2rem;font-size:2rem;color:#fff}
      /* HERO */
      #home{min-height:100vh;background:linear-gradient(155deg,#adb2e0 0%,#c8cef0 25%,#dde1f5 55%,#f0f2fa 100%);position:relative;overflow:hidden;display:flex;align-items:center;padding:0 3rem}
      .spots{position:absolute;top:0;left:0;right:0;height:240px;display:flex;justify-content:space-around;pointer-events:none}
      .spot{display:flex;flex-direction:column;align-items:center}
      .lh{width:46px;height:30px;background:linear-gradient(180deg,#555,#888);border-radius:5px 5px 10px 10px;box-shadow:0 4px 12px rgba(0,0,0,.2)}
      .lc{width:0;height:0;border-left:65px solid transparent;border-right:65px solid transparent;border-top:190px solid rgba(255,255,255,.1);margin-top:-2px;filter:blur(7px)}
      .lc.w{border-left-width:85px;border-right-width:85px;border-top-width:210px;border-top-color:rgba(255,255,255,.08)}
      .hc{position:relative;z-index:10;max-width:620px;margin-top:3rem}
      .hi{font-family:'Nunito',sans-serif;font-weight:900;font-size:2rem;color:#4a4870;margin-bottom:.2rem;opacity:0;animation:fu .7s .2s ease forwards}
      h1{font-family:'Nunito',sans-serif;font-weight:900;font-size:clamp(2.6rem,6vw,4rem);line-height:1.1;color:var(--dk);margin-bottom:.7rem;opacity:0;animation:fu .7s .35s ease forwards}
      .hr{font-size:.9rem;font-weight:600;letter-spacing:.2em;color:var(--mt);text-transform:uppercase;margin-bottom:1.2rem;opacity:0;animation:fu .7s .5s ease forwards}
      .hint{font-size:1rem;color:#5a577a;line-height:1.75;max-width:500px;margin-bottom:2rem;opacity:0;animation:fu .7s .62s ease forwards}
      .bp{display:inline-block;padding:.85rem 2.2rem;background:var(--p);color:#fff;border-radius:100px;font-weight:700;font-size:.95rem;font-family:'Nunito',sans-serif;transition:all .25s;box-shadow:0 4px 20px rgba(74,63,143,.35);opacity:0;animation:fu .7s .75s ease forwards}
      .bp:hover{transform:translateY(-3px);box-shadow:0 8px 30px rgba(74,63,143,.45);background:#5a4fa0}
      @keyframes fu{from{opacity:0;transform:translateY(22px)}to{opacity:1;transform:translateY(0)}}
      /* ABOUT */
      .ab{display:flex;align-items:center;gap:4rem;padding:6rem 3rem;max-width:1100px;margin:0 auto}
      .ab-img{flex:0 0 300px;display:flex;justify-content:center}
      .ab-txt .lbl{font-size:.78rem;font-weight:700;letter-spacing:.18em;text-transform:uppercase;color:var(--pm);margin-bottom:.6rem}
      .ab-txt h2{font-family:'Nunito',sans-serif;font-weight:900;font-size:2.4rem;color:var(--dk);margin-bottom:1rem}
      .ab-txt p{color:var(--mt);line-height:1.8;font-size:.95rem;margin-bottom:1.5rem;max-width:520px}
      .ab-meta{display:flex;flex-wrap:wrap;gap:.75rem;margin-bottom:2rem}
      .ab-badge{display:flex;align-items:center;gap:.4rem;font-size:.82rem;font-weight:600;color:var(--p);background:var(--tg);padding:.35rem .9rem;border-radius:100px;border:1px solid var(--cb)}
      .btn-cv{display:inline-flex;align-items:center;gap:.5rem;padding:.8rem 1.8rem;border:2px solid var(--p);border-radius:100px;color:var(--p);font-weight:700;font-size:.9rem;font-family:'Nunito',sans-serif;transition:all .25s;background:transparent}
      .btn-cv:hover{background:var(--p);color:#fff;transform:translateY(-2px)}
      /* SKILLS */
      .sk{background:var(--w);padding:5rem 3rem}
      .sk-in{max-width:1100px;margin:0 auto}
      .sk-cats{display:flex;flex-direction:column;gap:2rem}
      .sk-cat-name{font-size:.8rem;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:var(--pm);margin-bottom:.75rem}
      .sk-pills{display:flex;flex-wrap:wrap;gap:.6rem}
      .pill{padding:.55rem 1.2rem;border:2px solid var(--cb);border-radius:100px;font-size:.85rem;font-weight:600;color:var(--dk);background:#fff;transition:all .25s;cursor:default}
      .pill:hover{border-color:var(--p);color:var(--p);background:var(--tg);transform:translateY(-2px)}
      /* PROJECTS */
      .pj{background:var(--bg);padding:5rem 3rem}
      .pj-in{max-width:1100px;margin:0 auto}
      .pg{display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:1.5rem;margin-top:0}
      .pc{background:var(--w);border:1px solid var(--cb);border-radius:20px;padding:2rem;transition:all .3s;display:flex;flex-direction:column;gap:.8rem}
      .pc:hover{transform:translateY(-6px);box-shadow:0 16px 40px rgba(74,63,143,.12);border-color:rgba(74,63,143,.3)}
      .pn{font-family:'Nunito',sans-serif;font-weight:900;font-size:2rem;color:var(--lv2)}
      .pt{font-family:'Nunito',sans-serif;font-weight:800;font-size:1.1rem;color:var(--dk)}
      .ptp{font-size:.78rem;font-weight:600;color:var(--pm);text-transform:uppercase;letter-spacing:.1em}
      .pd{font-size:.87rem;color:var(--mt);line-height:1.65;flex:1}
      .ptags{display:flex;flex-wrap:wrap;gap:.45rem}
      .ptag{padding:.18rem .7rem;background:var(--tg);border-radius:100px;font-size:.73rem;font-weight:600;color:var(--p)}
      /* EXP + EDU */
      .ee{background:var(--w);padding:5rem 3rem}
      .ee-in{max-width:1100px;margin:0 auto;display:grid;grid-template-columns:1fr 1fr;gap:4rem}
      .el{display:flex;flex-direction:column;gap:0}
      .ei{padding:1.5rem 0;border-bottom:1px solid rgba(74,63,143,.1)}
      .ei:last-child{border-bottom:none}
      .ep{font-size:.78rem;font-weight:600;color:var(--pl);letter-spacing:.03em;margin-bottom:.25rem}
      .er{font-family:'Nunito',sans-serif;font-weight:800;font-size:1rem;color:var(--dk);margin-bottom:.15rem}
      .eo{font-size:.82rem;font-weight:600;color:var(--p);margin-bottom:.5rem}
      .ed{font-size:.85rem;color:var(--mt);line-height:1.65}
      /* CERTS */
      .ct{background:var(--bg);padding:4rem 3rem}
      .ct-in{max-width:1100px;margin:0 auto}
      .cl{display:flex;flex-direction:column;gap:1rem;margin-top:2rem}
      .ci{display:flex;align-items:center;gap:1rem;padding:1.1rem 1.5rem;background:var(--w);border:1px solid var(--cb);border-radius:14px;font-size:.9rem;font-weight:500;color:var(--dk);transition:all .25s}
      .ci:hover{border-color:var(--p);transform:translateX(4px)}
      .ci::before{content:'🏆';font-size:1.1rem}
      /* CONTACT */
      .cn{background:linear-gradient(135deg,#c8cef0 0%,#dde1f5 50%,#e8eaf8 100%);padding:6rem 3rem;text-align:center}
      .cn-in{max-width:580px;margin:0 auto}
      .clinks{display:flex;justify-content:center;flex-wrap:wrap;gap:1rem;margin-top:2rem}
      .cl2{display:flex;align-items:center;gap:.5rem;padding:.75rem 1.5rem;background:var(--w);border-radius:100px;font-size:.87rem;font-weight:600;color:var(--dk);transition:all .25s;box-shadow:0 2px 12px rgba(74,63,143,.1)}
      .cl2:hover{transform:translateY(-3px);box-shadow:0 8px 24px rgba(74,63,143,.2);color:var(--p)}
      footer{background:var(--p);color:rgba(255,255,255,.7);text-align:center;padding:1.5rem;font-size:.82rem}
      footer strong{color:#fff}
      .sec-lbl{font-size:.78rem;font-weight:700;letter-spacing:.18em;text-transform:uppercase;color:var(--pm);margin-bottom:.6rem}
      .sec-h{font-family:'Nunito',sans-serif;font-weight:900;font-size:clamp(1.7rem,3.5vw,2.4rem);color:var(--dk);margin-bottom:.7rem}
      .sec-s{color:var(--mt);font-size:.93rem;line-height:1.75;max-width:480px;margin-bottom:2.5rem}
      @media(max-width:768px){
        #home{padding:0 1.5rem}.hc{margin-top:5rem}
        .ab{flex-direction:column;gap:2rem;padding:4rem 1.5rem}.ab-img{flex:none}
        .sk,.pj,.ee,.ct,.cn{padding:4rem 1.5rem}.ee-in{grid-template-columns:1fr;gap:2rem}
        nav{padding:1rem 1.5rem}
      }
    `}</style>

    {/* MOBILE NAV */}
    <div className={`mob${menuOpen?' open':''}`}>
      <button className="cls" onClick={()=>setMenuOpen(false)}>✕</button>
      {links.map(id=><button key={id} onClick={()=>go(id)}>{id==='exp'?'Experience':id.charAt(0).toUpperCase()+id.slice(1)}</button>)}
    </div>

    {/* NAV */}
    <nav className={scrolled?'sc':''}>
      <div className="logo">SL.</div>
      <button className="hbg" onClick={()=>setMenuOpen(true)} aria-label="Menu"><span/><span/><span/></button>
    </nav>

    {/* HERO */}
    <section id="home">
      <div className="spots">
        <div className="spot" style={{marginTop:'-8px',transform:'rotate(-8deg)'}}><div className="lh"/><div className="lc"/></div>
        <div className="spot" style={{marginTop:'-12px'}}><div className="lh" style={{width:'54px',height:'34px'}}/><div className="lc w"/></div>
        <div className="spot" style={{marginTop:'-8px',transform:'rotate(8deg)'}}><div className="lh"/><div className="lc"/></div>
      </div>
      <div className="hc">
        <div className="hi">HI!</div>
        <h1>I am Shristi Lipsa</h1>
        <div className="hr">Full-Stack MERN Developer &amp; AI Enthusiast</div>
        <p className="hint">Building scalable web apps with MERN architecture, microservices, and a passion for clean, performant code. Based in Kolkata, India.</p>
        <a href="#projects" className="bp" onClick={e=>{e.preventDefault();go('projects')}}>Visit My Works</a>
      </div>
    </section>

    {/* ABOUT */}
    <div style={{background:'var(--w)'}}>
      <div className="ab" id="about">
        <div className="ab-img"><AvatarSVG/></div>
        <div className="ab-txt">
          <p className="lbl">Who Am I?</p>
          <h2>About Me</h2>
          <p>Full-stack developer specializing in MERN architecture — building scalable, secure web applications with microservices-based backends, RESTful APIs, and JWT authentication. I craft high-performance React interfaces and love turning complex problems into elegant solutions.</p>
          <div className="ab-meta">
            <span className="ab-badge">📍 Kolkata, WB, India</span>
            <span className="ab-badge">🎓 B.Tech ECE · 2026</span>
            <span className="ab-badge">🏛 CIEM, Kolkata</span>
          </div>
          <a href="mailto:shristilipsa@gmail.com" className="btn-cv">📄 Download CV</a>
        </div>
      </div>
    </div>

    {/* SKILLS */}
    <div className="sk" id="skills">
      <div className="sk-in">
        <p className="sec-lbl">What I work with</p>
        <h2 className="sec-h">Skills &amp; Tools</h2>
        <p className="sec-s">Technologies I use to build, ship, and scale products.</p>
        <div className="sk-cats">
          {DATA.skills.map(c=>(
            <div key={c.cat}>
              <p className="sk-cat-name">{c.cat}</p>
              <div className="sk-pills">{c.items.map(s=><span key={s} className="pill">{s}</span>)}</div>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* PROJECTS */}
    <div className="pj" id="projects">
      <div className="pj-in">
        <p className="sec-lbl">What I&apos;ve built</p>
        <h2 className="sec-h">Featured Projects</h2>
        <p className="sec-s">Real-world projects spanning full-stack development, education, and content platforms.</p>
        <div className="pg">
          {DATA.projects.map(p=>(
            <div key={p.title} className="pc">
              <div className="pn">{p.num}</div>
              <div className="pt">{p.title}</div>
              <div className="ptp">{p.type}</div>
              <div className="pd">{p.desc}</div>
              <div className="ptags">{p.tags.map(t=><span key={t} className="ptag">{t}</span>)}</div>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* EXPERIENCE + EDUCATION */}
    <div className="ee" id="experience">
      <div className="ee-in">
        <div>
          <p className="sec-lbl">Where I&apos;ve been</p>
          <h2 className="sec-h">Experience</h2>
          <div className="el">
            <div className="ei">
              <p className="ep">Internship</p>
              <p className="er">Human Resources Intern</p>
              <p className="eo">Centennial InfoTech</p>
              <p className="ed">Managed HR data using Microsoft Excel and Power BI, ensuring accuracy and automated reporting. Supported recruitment through data-driven insights and ATS tools while maintaining confidentiality.</p>
            </div>
          </div>
        </div>
        <div>
          <p className="sec-lbl">My Education</p>
          <h2 className="sec-h">Education</h2>
          <div className="el">
            <div className="ei">
              <p className="ep">2022 – 2026</p>
              <p className="er">B.Tech in Electronics &amp; Communication Engineering</p>
              <p className="eo">Calcutta Institute of Engineering and Management</p>
              <p className="ed">Kolkata, West Bengal, India. Focused on core ECE fundamentals alongside full-stack web development and AI/ML applications.</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* CERTIFICATIONS */}
    <div className="ct" id="certifications">
      <div className="ct-in">
        <p className="sec-lbl">Credentials</p>
        <h2 className="sec-h">Certifications</h2>
        <div className="cl">
          {DATA.certs.map(c=><div key={c} className="ci">{c}</div>)}
        </div>
      </div>
    </div>

    {/* CONTACT */}
    <div className="cn" id="contact">
      <div className="cn-in">
        <p className="sec-lbl">Let&apos;s work together</p>
        <h2 className="sec-h">Get In Touch</h2>
        <p style={{color:'var(--mt)',lineHeight:'1.75',fontSize:'.95rem'}}>Open to internships, full-time roles, freelance projects, and interesting collaborations. Let&apos;s build something great!</p>
        <div className="clinks">
          <a href="mailto:shristilipsa@gmail.com" className="cl2">📧 shristilipsa@gmail.com</a>
          <a href="https://www.linkedin.com/in/shristi-lipsa-261164257/" target="_blank" rel="noopener noreferrer" className="cl2">💼 LinkedIn</a>
          <a href="https://github.com/Lipsadev" target="_blank" rel="noopener noreferrer" className="cl2">🐙 GitHub</a>
        </div>
      </div>
    </div>

    <footer><p>Built with ♥ by <strong>Shristi Lipsa</strong> · 2026</p></footer>
  </>);
}
