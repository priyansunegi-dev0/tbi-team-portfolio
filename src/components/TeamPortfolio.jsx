import { useState, useEffect, useRef } from "react";

// ── Data ──────────────────────────────────────────────────────────────────────

const ANMOL_TASKS = [
  { label: "React Architecture & Component Design", branch: "feature/frontend-architecture" },
  { label: "UI/UX Implementation with Tailwind CSS", branch: "feature/ui-ux-design" },
  { label: "Responsive Design & Mobile Optimization", branch: "feature/responsive-design" },
  { label: "API Integration & State Management", branch: "feature/api-integration" },
  { label: "Database Schema Design & Optimization", branch: "feature/database-design" },
  { label: "Performance Optimization & Code Splitting", branch: "feature/performance-optimization" },
  { label: "Component Library & Design System", branch: "feature/component-library" },
  { label: "Animation & Micro-interactions", branch: "feature/animations" },
];

const PRIYANSU_TASKS = [
  { label: "Node.js + Express Server Setup", branch: "feature/backend-setup" },
  { label: "MongoDB Atlas + Mongoose", branch: "feature/db-connect" },
  { label: "Projects & Contact APIs", branch: "feature/projects-api" },
  { label: "Authentication & Security Implementation", branch: "feature/auth-security" },
  { label: "API Testing & Documentation", branch: "feature/api-testing" },
  { label: "Render Deployment & Monitoring", branch: "feature/deploy-backend" },
  { label: "Database Performance Optimization", branch: "feature/db-optimization" },
  { label: "Backend Architecture & Scaling", branch: "feature/backend-architecture" },
];

const TECH_STACK = [
  { icon: "⚛️", name: "React + Vite", purpose: "Frontend architecture with component-based design and fast HMR", owner: "a" },
  { icon: "🎨", name: "Tailwind CSS", purpose: "Utility-first CSS for responsive design and rapid UI development", owner: "a" },
  { icon: "🛡️", name: "Node + Express", purpose: "RESTful API server with routing and middleware architecture", owner: "p" },
  { icon: "🍃", name: "MongoDB Atlas", purpose: "Cloud NoSQL database with optimized schema design", owner: "both" },
  { icon: "▲", name: "Vercel", purpose: "Zero-config frontend deployment with Edge network optimization", owner: "both" },
  { icon: "🚀", name: "Render", purpose: "Backend deployment with auto-scaling web services", owner: "p" },
  { icon: "🐙", name: "GitHub", purpose: "Version control, PRs, branch protection rules", owner: "both" },
  { icon: "📋", name: "GitHub Projects", purpose: "Kanban board for Agile task management", owner: "both" },
  { icon: "🔧", name: "React Router", purpose: "Client-side routing and navigation architecture", owner: "a" },
  { icon: "📦", name: "Axios", purpose: "HTTP client for API integration and state management", owner: "a" },
  { icon: "🎯", name: "Framer Motion", purpose: "Animation library for smooth UI transitions", owner: "a" },
  { icon: "🔐", name: "JWT Auth", purpose: "Token-based authentication and security implementation", owner: "p" },
  { icon: "📊", name: "Postman", purpose: "API testing, documentation and collaboration", owner: "p" },
];

const TIMELINE = [
  { day: "01", label: "Architecture",
    anmol: { text: "React component architecture + Tailwind design system + responsive grid setup", branch: "feature/frontend-architecture" },
    priyansu: { text: "Node.js + Express server + MongoDB Atlas cluster + Mongoose connection", branch: "feature/backend-setup" }},
  { day: "02", label: "Core",
    anmol: { text: "UI/UX implementation with Tailwind CSS + React Router + component library", branch: "feature/ui-ux-design" },
    priyansu: { text: "Projects REST API (GET/POST/DELETE), Contact form backend route", branch: "feature/projects-api" }},
  { day: "03", label: "Integration",
    anmol: { text: "API integration with Axios + state management + responsive mobile optimization", branch: "feature/api-integration" },
    priyansu: { text: "Database schema design + API optimization + error handling", branch: "feature/database-design" }},
  { day: "04", label: "Polish",
    anmol: { text: "Performance optimization + code splitting + animation with Framer Motion", branch: "feature/performance-optimization" },
    priyansu: { text: "Frontend UI testing + API documentation + deployment preparation", branch: "feature/ui-testing" }},
  { day: "05", label: "Deploy",
    anmol: { text: "Vercel frontend deployment + environment variables + production optimization", branch: "feature/deploy-frontend" },
    priyansu: { text: "Render backend deployment + MongoDB production config + API testing", branch: "feature/deploy-backend" }},
  { day: "06", label: "Ship",
    anmol: { text: "Final UI review + performance testing + README documentation", branch: null },
    priyansu: { text: "Final API testing + deployment verification + screenshots", branch: null }},
];

const PROJECTS = [
  {
    title: "Hackathon Collab Project",
    description: "A collaborative hackathon project built with team members featuring real-time features and modern tech stack.",
    tech: ["React", "Node.js", "MongoDB", "Socket.io", "JWT Auth"],
    github: "https://github.com/priyansunegi-dev0/hackathon-collab",
    preview: "https://hackathon-collab.vercel.app",
    status: "Live"
  },
  {
    title: "Team Portfolio",
    description: "This portfolio website showcasing our team collaboration and project management skills with modern UI/UX.",
    tech: ["React", "Vite", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/priyansunegi-dev0/tbi-team-portfolio",
    preview: "https://tbi-team-portfolio.vercel.app",
    status: "Live"
  },
  {
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with payment integration and admin dashboard.",
    tech: ["React", "Node.js", "MongoDB", "Stripe API", "JWT Auth"],
    github: "https://github.com/priyansunegi-dev0/ecommerce-platform",
    preview: "https://ecommerce-demo.vercel.app",
    status: "Development"
  }
];

const WORKFLOW_STEPS = [
  { num: "01", name: "Branch", desc: "Create feature branch from develop. Never commit directly to main." },
  { num: "02", name: "Commit", desc: "Follow prefix format: feat: fix: style: chore: for clean history." },
  { num: "03", name: "Push", desc: "Push feature branch to GitHub. Open Pull Request with description and screenshots." },
  { num: "04", name: "Review", desc: "Teammate reviews code. CI checks must pass. At least 1 approval required to merge." },
  { num: "05", name: "Merge", desc: "Merge into develop first. When stable, PR from develop to main triggers deploy." },
];

const KANBAN_COLS = [
  { title: "Backlog", cards: [
    { text: "Advanced Authentication System", who: "p" },
    { text: "Real-time Analytics Dashboard", who: "a" },
    { text: "Mobile App Development", who: "both" },
    { text: "Performance Monitoring Setup", who: "p" },
  ]},
  { title: "To Do", cards: [
    { text: "Component Library Documentation", who: "a" },
    { text: "API Rate Limiting Implementation", who: "p" },
    { text: "Progressive Web App Features", who: "a" },
    { text: "Database Indexing Optimization", who: "p" },
    { text: "UI/UX Accessibility Improvements", who: "a" },
  ]},
  { title: "In Progress", cards: [
    { text: "Advanced Animations Library", who: "a" },
    { text: "Payment Gateway Integration", who: "p" },
    { text: "Real-time Notifications", who: "both" },
    { text: "Automated Testing Pipeline", who: "both" },
  ]},
  { title: "In Review", cards: [
    { text: "Security Audit & Penetration Testing", who: "p" },
    { text: "Cross-browser Compatibility", who: "a" },
    { text: "Load Balancing Configuration", who: "p" },
    { text: "SEO Optimization", who: "a" },
  ]},
  { title: "Done", cards: [
    { text: "React Architecture Setup", who: "a" },
    { text: "Express Server Configuration", who: "p" },
    { text: "MongoDB Database Design", who: "both" },
    { text: "Tailwind CSS Implementation", who: "a" },
    { text: "REST API Development", who: "p" },
    { text: "Authentication System", who: "p" },
    { text: "Responsive Design", who: "a" },
    { text: "Deployment Pipeline", who: "both" },
  ]},
];

const YAML_CODE = `<span class="c"># Triggered on every push to main</span>
<span class="k">name:</span> <span class="v">Deploy Frontend</span>

<span class="k">on:</span>
  <span class="k">push:</span>
    <span class="k">branches:</span> <span class="v">[main]</span>

<span class="k">jobs:</span>
  <span class="k">deploy:</span>
    <span class="k">runs-on:</span> <span class="v">ubuntu-latest</span>
    <span class="k">steps:</span>
      <span class="k">- uses:</span> <span class="v">actions/checkout@v3</span>

      <span class="k">- name:</span> <span class="v">Install dependencies</span>
        <span class="k">run:</span> <span class="v">cd client && npm install</span>

      <span class="k">- name:</span> <span class="v">Build React app</span>
        <span class="k">run:</span> <span class="v">cd client && npm run build</span>

      <span class="k">- name:</span> <span class="v">Deploy to GitHub Pages</span>
        <span class="k">uses:</span> <span class="v">peaceiris/actions-gh-pages@v3</span>
        <span class="k">with:</span>
          <span class="k">github_token:</span> <span class="v">\${{ secrets.GITHUB_TOKEN }}</span>
          <span class="k">publish_dir:</span> <span class="v">./client/dist</span>`;

// ── Hooks ─────────────────────────────────────────────────────────────────────

function useBreakpoint() {
  const get = () => {
    const w = window.innerWidth;
    if (w < 480) return "xs";
    if (w < 768) return "sm";
    if (w < 1024) return "md";
    return "lg";
  };
  const [bp, setBp] = useState(get);
  useEffect(() => {
    const onResize = () => setBp(get());
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);
  return bp;
}

function useFadeIn() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.08 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return [ref, visible];
}

function useCursor() {
  const [pos, setPos] = useState({ x: -200, y: -200 });
  const [ring, setRing] = useState({ x: -200, y: -200 });
  const ringRef = useRef({ x: -200, y: -200 });
  const mouse = useRef({ x: -200, y: -200 });
  useEffect(() => {
    const onMove = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      setPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", onMove);
    let raf;
    const animate = () => {
      ringRef.current.x += (mouse.current.x - ringRef.current.x) * 0.12;
      ringRef.current.y += (mouse.current.y - ringRef.current.y) * 0.12;
      setRing({ x: ringRef.current.x, y: ringRef.current.y });
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);
    return () => { window.removeEventListener("mousemove", onMove); cancelAnimationFrame(raf); };
  }, []);
  return { pos, ring };
}

// ── Sub-components ────────────────────────────────────────────────────────────

function FadeIn({ children, delay = 0 }) {
  const [ref, visible] = useFadeIn();
  return (
    <div ref={ref} style={{
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0)" : "translateY(24px)",
      transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
    }}>
      {children}
    </div>
  );
}

function SectionHeader({ num, title, isMobile }) {
  return (
    <FadeIn>
      <div style={{ display: "flex", alignItems: "center", gap: isMobile ? "0.75rem" : "1.5rem", marginBottom: isMobile ? "1.75rem" : "3rem" }}>
        <span style={{ fontSize: "0.65rem", color: "#a78bfa", letterSpacing: "0.2em", border: "1px solid #2a2a3a", padding: "0.3rem 0.6rem", flexShrink: 0 }}>{num}</span>
        <h2 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: isMobile ? "1.5rem" : "clamp(1.8rem,4vw,3rem)", letterSpacing: "-0.03em", color: "#e8e8f0" }}>{title}</h2>
        {!isMobile && <div style={{ flex: 1, height: 1, background: "#2a2a3a", maxWidth: 200 }} />}
      </div>
    </FadeIn>
  );
}

function OwnerBadge({ owner }) {
  const map = {
    a: { bg: "rgba(127,255,178,0.1)", color: "#7fffb2", label: "Anmol" },
    p: { bg: "rgba(255,107,107,0.1)", color: "#ff6b6b", label: "Priyansu" },
    both: { bg: "rgba(167,139,250,0.1)", color: "#a78bfa", label: "Both" },
  };
  const s = map[owner];
  return (
    <span style={{ fontSize: "0.6rem", letterSpacing: "0.1em", textTransform: "uppercase", padding: "0.2rem 0.6rem", borderRadius: 999, display: "inline-block", background: s.bg, color: s.color, marginTop: "0.5rem" }}>
      {s.label}
    </span>
  );
}

function KanbanCard({ text, who }) {
  const accentMap = { a: "#7fffb2", p: "#ff6b6b", both: "#a78bfa" };
  const assigneeMap = { a: "Anmol", p: "Priyansu", both: "Both" };
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "#16161f", border: `1px solid ${hovered ? accentMap[who] + "55" : "#2a2a3a"}`,
        borderRadius: 6, padding: "0.75rem 1rem 0.75rem 1.4rem",
        fontSize: "0.7rem", lineHeight: 1.5, color: "#e8e8f0",
        position: "relative", overflow: "hidden",
        transform: hovered ? "translateY(-2px)" : "none",
        transition: "all 0.2s",
      }}
    >
      <span style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 3, background: accentMap[who] }} />
      {text}
      <div style={{ fontSize: "0.55rem", letterSpacing: "0.1em", textTransform: "uppercase", marginTop: "0.4rem", color: accentMap[who] }}>
        {assigneeMap[who]}
      </div>
    </div>
  );
}

function MobileMenu({ open, onClose }) {
  const links = ["Team", "Stack", "Timeline", "Workflow", "Kanban"];
  return (
    <div style={{
      position: "fixed", inset: 0, zIndex: 200,
      background: "rgba(10,10,15,0.97)", backdropFilter: "blur(16px)",
      display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "2rem",
      opacity: open ? 1 : 0, pointerEvents: open ? "auto" : "none",
      transition: "opacity 0.25s",
    }}>
      <button onClick={onClose} style={{ position: "absolute", top: "1.5rem", right: "1.5rem", background: "none", border: "1px solid #2a2a3a", color: "#6b6b88", padding: "0.5rem 0.85rem", borderRadius: 6, fontSize: "1rem", cursor: "pointer" }}>✕</button>
      {links.map(link => (
        <a key={link} href={`#${link.toLowerCase()}`} onClick={onClose} style={{
          fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: "2.2rem",
          color: "#e8e8f0", textDecoration: "none", letterSpacing: "-0.03em", transition: "color 0.2s",
        }}
          onMouseEnter={e => e.target.style.color = "#7fffb2"}
          onMouseLeave={e => e.target.style.color = "#e8e8f0"}
        >{link}</a>
      ))}
      <span style={{ fontSize: "0.65rem", color: "#6b6b88", letterSpacing: "0.15em", textTransform: "uppercase", marginTop: "1rem" }}>7-Day Sprint</span>
    </div>
  );
}

// ── App ───────────────────────────────────────────────────────────────────────

export default function TeamPortfolio() {
  const { pos, ring } = useCursor();
  const bp = useBreakpoint();
  const [menuOpen, setMenuOpen] = useState(false);

  const isMobile = bp === "xs" || bp === "sm";   // < 768
  const isTablet = bp === "md";                   // 768–1023
  const isDesktop = bp === "lg";                  // 1024+

  const px = isMobile ? "1.25rem" : isTablet ? "2rem" : "3rem";
  const secPy = isMobile ? "3.5rem" : isTablet ? "4.5rem" : "5rem";

  const globalCSS = `
    @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800&family=DM+Mono:ital,wght@0,400;0,500;1,400&family=Fraunces:ital,opsz,wght@0,9..144,300;1,9..144,400&display=swap');
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    html, body, #root { background: #0a0a0f !important; color: #e8e8f0; min-height: 100vh; scroll-behavior: smooth; }
    body { cursor: none; overflow-x: hidden; }
    a { cursor: none; }
    button { cursor: pointer; }
    pre .k { color: #7fffb2; }
    pre .v { color: #ff6b6b; }
    pre .c { color: #6b6b88; }
    ::-webkit-scrollbar { width: 4px; height: 4px; }
    ::-webkit-scrollbar-track { background: #0a0a0f; }
    ::-webkit-scrollbar-thumb { background: #2a2a3a; border-radius: 99px; }
    @keyframes floatA { 0%,100%{transform:translate(0,0)} 50%{transform:translate(30px,20px)} }
    @keyframes floatB { 0%,100%{transform:translate(0,0)} 50%{transform:translate(-20px,-30px)} }
  `;

  // Tech grid columns
  const techCols = isMobile ? "1fr 1fr" : "repeat(3,1fr)";
  // Workflow grid columns
  const flowCols = isMobile ? "1fr 1fr" : isTablet ? "repeat(3,1fr)" : "repeat(5,1fr)";

  return (
    <div style={{ background: "#0a0a0f", color: "#e8e8f0", fontFamily: "'DM Mono',monospace", minHeight: "100vh", overflowX: "hidden", cursor: "none" }}>
      <style dangerouslySetInnerHTML={{ __html: globalCSS }} />

      {/* Cursor — desktop only */}
      {isDesktop && <>
        <div style={{ position: "fixed", width: 12, height: 12, background: "#7fffb2", borderRadius: "50%", pointerEvents: "none", zIndex: 9999, left: pos.x, top: pos.y, transform: "translate(-50%,-50%)", mixBlendMode: "difference" }} />
        <div style={{ position: "fixed", width: 40, height: 40, border: "1px solid #7fffb250", borderRadius: "50%", pointerEvents: "none", zIndex: 9998, left: ring.x, top: ring.y, transform: "translate(-50%,-50%)" }} />
      </>}

      {/* Noise texture */}
      <div style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: 9997, opacity: 0.35, backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E")` }} />

      {/* Mobile menu overlay */}
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />

      {/* ════════════ NAV ════════════ */}
      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, padding: `1.1rem ${px}`, display: "flex", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #2a2a3a", background: "rgba(10,10,15,0.9)", backdropFilter: "blur(14px)" }}>
        <a href="#" style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: isMobile ? "0.9rem" : "1.1rem", letterSpacing: "-0.02em", color: "#e8e8f0", textDecoration: "none" }}>
          <span style={{ color: "#a78bfa" }}>PORTFOLIO</span>
        </a>

        {!isMobile && (
          <ul style={{ display: "flex", gap: isTablet ? "1.25rem" : "2rem", listStyle: "none" }}>
            {["Team", "Stack", "Timeline", "Workflow", "Kanban"].map(link => (
              <li key={link}>
                <a href={`#${link.toLowerCase()}`} style={{ color: "#6b6b88", textDecoration: "none", fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase", transition: "color 0.2s" }}
                  onMouseEnter={e => e.target.style.color = "#e8e8f0"}
                  onMouseLeave={e => e.target.style.color = "#6b6b88"}
                >{link}</a>
              </li>
            ))}
          </ul>
        )}

        {isMobile
          ? <button onClick={() => setMenuOpen(true)} style={{ background: "none", border: "1px solid #2a2a3a", color: "#e8e8f0", padding: "0.45rem 0.8rem", borderRadius: 6, fontSize: "1rem" }}>☰</button>
          : <span style={{ fontSize: "0.65rem", padding: "0.3rem 0.8rem", border: "1px solid #2a2a3a", borderRadius: 999, color: "#a78bfa", letterSpacing: "0.08em" }}>7-Day Sprint</span>
        }
      </nav>

      {/* ════════════ HERO ════════════ */}
      <section style={{ minHeight: "100vh", display: "flex", alignItems: "center", padding: `${isMobile ? "7rem" : "8rem"} ${px} 4rem`, position: "relative", overflow: "hidden" }}>
        {/* Grid bg */}
        <div style={{ position: "absolute", inset: 0, opacity: 0.22, backgroundImage: "linear-gradient(#2a2a3a 1px,transparent 1px),linear-gradient(90deg,#2a2a3a 1px,transparent 1px)", backgroundSize: "60px 60px", WebkitMaskImage: "radial-gradient(ellipse at 50% 50%,black 20%,transparent 80%)", maskImage: "radial-gradient(ellipse at 50% 50%,black 20%,transparent 80%)" }} />
        {/* Glow blobs */}
        <div style={{ position: "absolute", width: isMobile ? 280 : 600, height: isMobile ? 280 : 600, background: "radial-gradient(circle,rgba(127,255,178,0.09) 0%,transparent 70%)", top: -80, left: -80, pointerEvents: "none", animation: "floatA 8s ease-in-out infinite" }} />
        <div style={{ position: "absolute", width: isMobile ? 240 : 500, height: isMobile ? 240 : 500, background: "radial-gradient(circle,rgba(255,107,107,0.07) 0%,transparent 70%)", bottom: -60, right: -60, pointerEvents: "none", animation: "floatB 10s ease-in-out infinite" }} />

        <div style={{ position: "relative", zIndex: 1, maxWidth: 1100, margin: "0 auto", width: "100%" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", fontSize: "0.7rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#a78bfa", marginBottom: "1.5rem" }}>
            <span style={{ display: "block", width: 20, height: 1, background: "#a78bfa" }} />
            Full Stack Team Portfolio
          </div>

          <h1 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: isMobile ? "2.6rem" : isTablet ? "4.5rem" : "clamp(3.5rem,8vw,7rem)", lineHeight: 0.95, letterSpacing: "-0.04em", marginBottom: "1.25rem" }}>
            <span style={{ display: "block" }}>
              <span style={{ color: "#7fffb2" }}>Anmol</span> + <span style={{ color: "#ff6b6b" }}>Priyansu</span>
            </span>
            <span style={{ display: "block", fontFamily: "'Fraunces',serif", fontWeight: 300, fontStyle: "italic", color: "#6b6b88", fontSize: isMobile ? "1.3rem" : "0.7em", letterSpacing: "-0.02em", marginTop: "0.25rem" }}>
              building the web, together
            </span>
          </h1>

          <p style={{ maxWidth: 500, fontSize: isMobile ? "0.78rem" : "0.85rem", lineHeight: 1.8, color: "#6b6b88", marginBottom: "2.5rem" }}>
            A 7-day full stack sprint simulating real industry workflows — Git branching, PRs, Agile Kanban, CI/CD, and deployment to production.
          </p>

          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            {[{ href: "#team", label: "Meet the Team →", primary: true }, { href: "#timeline", label: "View Timeline", primary: false }].map(btn => (
              <a key={btn.label} href={btn.href} style={{
                display: "inline-flex", alignItems: "center", padding: isMobile ? "0.7rem 1.2rem" : "0.85rem 1.75rem",
                fontFamily: "'DM Mono',monospace", fontSize: "0.75rem", letterSpacing: "0.05em",
                textDecoration: "none", borderRadius: 4, transition: "all 0.2s",
                background: btn.primary ? "#7fffb2" : "transparent",
                color: btn.primary ? "#0a0a0f" : "#e8e8f0",
                border: btn.primary ? "none" : "1px solid #2a2a3a",
              }}
                onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; if (btn.primary) e.currentTarget.style.background = "#5ff0a0"; else e.currentTarget.style.borderColor = "#e8e8f0"; }}
                onMouseLeave={e => { e.currentTarget.style.transform = "none"; if (btn.primary) e.currentTarget.style.background = "#7fffb2"; else e.currentTarget.style.borderColor = "#2a2a3a"; }}
              >{btn.label}</a>
            ))}
          </div>

          {/* Stats */}
          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr 1fr" : "repeat(4,auto)", gap: isMobile ? "1.25rem 2rem" : "3rem", marginTop: isMobile ? "3rem" : "5rem", paddingTop: "2rem", borderTop: "1px solid #2a2a3a", width: "fit-content" }}>
            {[["7", "Days Sprint"], ["22+", "Feature Branches"], ["2", "Deployments"], ["5", "Tech Layers"]].map(([n, l]) => (
              <div key={l}>
                <div style={{ fontFamily: "'Syne',sans-serif", fontSize: isMobile ? "1.5rem" : "2rem", fontWeight: 800, color: "#e8e8f0", letterSpacing: "-0.04em" }}>{n}</div>
                <div style={{ fontSize: "0.62rem", color: "#6b6b88", letterSpacing: "0.1em", textTransform: "uppercase", marginTop: "0.2rem" }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════ TEAM ════════════ */}
      <section id="team" style={{ padding: `${secPy} ${px}`, maxWidth: 1200, margin: "0 auto" }}>
        <SectionHeader num="01" title="The Team" isMobile={isMobile} />
        <FadeIn>
          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: 2, background: "#2a2a3a", border: "1px solid #2a2a3a", borderRadius: 8, overflow: "hidden" }}>
            {[
              { accent: "#7fffb2", role: "Frontend Lead + DevOps", name: "Anmol", desc: "Owns the client-side universe — from React architecture to CI/CD pipelines and Vercel deployment. Brings the UI to life and keeps the delivery system running.", mutual: ["API Integration", "Database Design", "Deployment Strategy"], tasks: ANMOL_TASKS, skills: [["React", true], ["Tailwind CSS", true], ["Vite", true], ["Axios", false], ["Vercel", false], ["GitHub Actions", false]] },
              { accent: "#ff6b6b", role: "Backend Lead + Database", name: "Priyansu", desc: "Masters the server and data layer — building RESTful APIs, wiring MongoDB Atlas, and deploying production backend on Render with proper security configs.", mutual: ["Frontend Performance", "Error Handling", "API Documentation"], tasks: PRIYANSU_TASKS, skills: [["Node.js", true], ["Express", true], ["MongoDB", true], ["Mongoose", false], ["Render", false], ["Postman", false]] },
            ].map(({ accent, role, name, desc, mutual, tasks, skills }) => (
              <div key={name} style={{ background: "#16161f", padding: isMobile ? "1.75rem 1.25rem" : "3rem", position: "relative", transition: "background 0.3s" }}
                onMouseEnter={e => e.currentTarget.style.background = "#1a1a25"}
                onMouseLeave={e => e.currentTarget.style.background = "#16161f"}
              >
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: accent }} />
                <div style={{ fontSize: "0.65rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#6b6b88", marginBottom: "0.75rem" }}>{role}</div>
                <div style={{ fontFamily: "'Syne',sans-serif", fontSize: isMobile ? "1.75rem" : "2.2rem", fontWeight: 800, letterSpacing: "-0.04em", marginBottom: "0.5rem", color: accent }}>{name}</div>
                <p style={{ fontSize: "0.78rem", lineHeight: 1.8, color: "#6b6b88", marginBottom: "1.5rem" }}>{desc}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "1.5rem", paddingBottom: "1rem", borderBottom: "1px solid #2a2a3a" }}>
                  {mutual.map(m => (
                    <span key={m} style={{ fontSize: "0.62rem", padding: "0.25rem 0.6rem", borderRadius: 999, background: accent + "15", color: accent, border: `1px solid ${accent}55`, letterSpacing: "0.05em" }}>🤝 {m}</span>
                  ))}
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem", marginBottom: "1.5rem" }}>
                  {tasks.map(t => (
                    <div key={t.label} style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem", fontSize: "0.75rem", color: "#e8e8f0" }}>
                      <div style={{ width: 6, height: 6, borderRadius: "50%", background: accent, flexShrink: 0, marginTop: "0.35rem" }} />
                      <div style={{ flex: 1 }}>
                        {t.label}
                        {isMobile && <div style={{ fontSize: "0.58rem", color: "#6b6b88", background: "#111118", padding: "0.1rem 0.45rem", borderRadius: 3, display: "inline-block", marginTop: "0.25rem", marginLeft: "0rem" }}>{t.branch}</div>}
                      </div>
                      {!isMobile && <span style={{ fontSize: "0.6rem", color: "#6b6b88", background: "#111118", padding: "0.15rem 0.5rem", borderRadius: 3, whiteSpace: "nowrap", flexShrink: 0 }}>{t.branch}</span>}
                    </div>
                  ))}
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                  {skills.map(([s, hi]) => (
                    <span key={s} style={{ fontSize: "0.65rem", padding: "0.3rem 0.75rem", borderRadius: 999, border: `1px solid ${hi ? accent : "#2a2a3a"}`, color: hi ? accent : "#6b6b88" }}>{s}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </section>

      {/* ════════════ TECH STACK ════════════ */}
      <section id="stack" style={{ padding: `${secPy} ${px}`, maxWidth: 1200, margin: "0 auto" }}>
        <SectionHeader num="02" title="Tech Stack" isMobile={isMobile} />
        <FadeIn>
          <div style={{ display: "grid", gridTemplateColumns: techCols, gap: 1, background: "#2a2a3a", border: "1px solid #2a2a3a", borderRadius: 8, overflow: "hidden" }}>
            {TECH_STACK.map(t => (
              <div key={t.name} style={{ background: "#16161f", padding: isMobile ? "1.1rem" : "2rem", display: "flex", flexDirection: "column", gap: "0.4rem", transition: "background 0.2s" }}
                onMouseEnter={e => e.currentTarget.style.background = "#111118"}
                onMouseLeave={e => e.currentTarget.style.background = "#16161f"}
              >
                <div style={{ fontSize: isMobile ? "1.2rem" : "1.5rem", marginBottom: "0.25rem" }}>{t.icon}</div>
                <div style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: isMobile ? "0.8rem" : "1rem", color: "#e8e8f0" }}>{t.name}</div>
                {!isMobile && <div style={{ fontSize: "0.7rem", color: "#6b6b88", lineHeight: 1.6 }}>{t.purpose}</div>}
                <OwnerBadge owner={t.owner} />
              </div>
            ))}
          </div>
        </FadeIn>
      </section>

      {/* ════════════ TIMELINE ════════════ */}
      <section id="timeline" style={{ padding: `${secPy} ${px}`, maxWidth: 1200, margin: "0 auto" }}>
        <SectionHeader num="03" title="7-Day Execution" isMobile={isMobile} />
        <FadeIn>
          <div style={{ border: "1px solid #2a2a3a", borderRadius: 8, overflow: "hidden" }}>
            {TIMELINE.map((row, i) => (
              <div key={row.day} style={{ borderBottom: i < TIMELINE.length - 1 ? "1px solid #2a2a3a" : "none" }}>
                {isMobile ? (
                  /* Mobile: stacked cards */
                  <div>
                    <div style={{ background: "#111118", padding: "0.7rem 1rem", display: "flex", alignItems: "center", gap: "0.75rem", borderBottom: "1px solid #2a2a3a" }}>
                      <span style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: "1.1rem", color: "#a78bfa" }}>{row.day}</span>
                      <span style={{ fontSize: "0.58rem", color: "#6b6b88", letterSpacing: "0.08em", textTransform: "uppercase" }}>{row.label}</span>
                    </div>
                    {[["Anmol", row.anmol, "#7fffb2"], ["Priyansu", row.priyansu, "#ff6b6b"]].map(([who, data, color], j) => (
                      <div key={who} style={{ background: "#16161f", padding: "0.9rem 1.1rem", borderBottom: j === 0 ? "1px solid #2a2a3a" : "none" }}>
                        <div style={{ fontSize: "0.58rem", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "0.35rem", color }}>{who}</div>
                        <div style={{ fontSize: "0.73rem", lineHeight: 1.6, color: "#e8e8f0" }}>{data.text}</div>
                        {data.branch && <span style={{ display: "inline-block", fontSize: "0.58rem", background: "#111118", padding: "0.15rem 0.5rem", borderRadius: 3, color: "#6b6b88", marginTop: "0.35rem" }}>{data.branch}</span>}
                      </div>
                    ))}
                  </div>
                ) : (
                  /* Tablet/Desktop: 3-col grid */
                  <div style={{ display: "grid", gridTemplateColumns: isTablet ? "80px 1fr 1fr" : "100px 1fr 1fr" }}>
                    <div style={{ background: "#111118", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "1.5rem 0.75rem", borderRight: "1px solid #2a2a3a" }}>
                      <span style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: "1.4rem", color: "#a78bfa" }}>{row.day}</span>
                      <span style={{ fontSize: "0.55rem", color: "#6b6b88", letterSpacing: "0.08em", textTransform: "uppercase", textAlign: "center" }}>{row.label}</span>
                    </div>
                    {[["Anmol", row.anmol, "#7fffb2"], ["Priyansu", row.priyansu, "#ff6b6b"]].map(([who, data, color], j) => (
                      <div key={who} style={{ background: "#16161f", padding: "1.25rem 1.5rem", fontSize: "0.75rem", lineHeight: 1.6, color: "#e8e8f0", borderRight: j === 0 ? "1px solid #2a2a3a" : "none" }}>
                        <div style={{ fontSize: "0.6rem", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "0.5rem", color }}>{who}</div>
                        {data.text}
                        {data.branch && <div><span style={{ display: "inline-block", fontSize: "0.6rem", background: "#111118", padding: "0.15rem 0.5rem", borderRadius: 3, color: "#6b6b88", marginTop: "0.4rem" }}>{data.branch}</span></div>}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </FadeIn>
      </section>

      {/* ════════════ PROJECTS ════════════ */}
      <section id="projects" style={{ padding: `${secPy} ${px}`, maxWidth: 1200, margin: "0 auto" }}>
        <SectionHeader num="04" title="Our Projects" isMobile={isMobile} />
        <FadeIn>
          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)", gap: "1.5rem" }}>
            {PROJECTS.map((project, index) => (
              <div key={index} style={{
                background: "#16161f",
                border: "1px solid #2a2a3a",
                borderRadius: 12,
                padding: "1.5rem",
                transition: "all 0.3s ease",
                cursor: "pointer"
              }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.border = "1px solid #a78bfa";
                  e.currentTarget.style.boxShadow = "0 8px 32px rgba(167, 139, 250, 0.1)";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.border = "1px solid #2a2a3a";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1rem" }}>
                  <h3 style={{ 
                    fontFamily: "'Syne', sans-serif", 
                    fontWeight: 700, 
                    fontSize: "1.1rem", 
                    color: "#e8e8f0",
                    margin: 0
                  }}>
                    {project.title}
                  </h3>
                  <span style={{
                    background: project.status === "Live" ? "#10b981" : "#f59e0b",
                    color: "#ffffff",
                    padding: "0.25rem 0.75rem",
                    borderRadius: 999,
                    fontSize: "0.65rem",
                    fontWeight: 600,
                    textTransform: "uppercase",
                    letterSpacing: "0.05em"
                  }}>
                    {project.status}
                  </span>
                </div>
                
                <p style={{ 
                  fontSize: "0.8rem", 
                  color: "#6b6b88", 
                  lineHeight: 1.6, 
                  marginBottom: "1rem" 
                }}>
                  {project.description}
                </p>
                
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "1.25rem" }}>
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} style={{
                      background: "#111118",
                      color: "#a78bfa",
                      padding: "0.25rem 0.75rem",
                      borderRadius: 6,
                      fontSize: "0.65rem",
                      fontWeight: 500,
                      border: "1px solid #2a2a3a"
                    }}>
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div style={{ display: "flex", gap: "0.75rem" }}>
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      flex: 1,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "0.5rem",
                      background: "#2a2a3a",
                      color: "#e8e8f0",
                      padding: "0.75rem 1rem",
                      borderRadius: 8,
                      fontSize: "0.75rem",
                      fontWeight: 500,
                      textDecoration: "none",
                      transition: "all 0.2s ease",
                      border: "1px solid #2a2a3a"
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.background = "#3a3a4a";
                      e.currentTarget.style.color = "#a78bfa";
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.background = "#2a2a3a";
                      e.currentTarget.style.color = "#e8e8f0";
                    }}
                  >
                    <span>🐙</span> GitHub
                  </a>
                  <a 
                    href={project.preview}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      flex: 1,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "0.5rem",
                      background: "#a78bfa",
                      color: "#ffffff",
                      padding: "0.75rem 1rem",
                      borderRadius: 8,
                      fontSize: "0.75rem",
                      fontWeight: 500,
                      textDecoration: "none",
                      transition: "all 0.2s ease",
                      border: "1px solid #a78bfa"
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.background = "#8b5cf6";
                      e.currentTarget.style.transform = "translateY(-1px)";
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.background = "#a78bfa";
                      e.currentTarget.style.transform = "translateY(0)";
                    }}
                  >
                    <span>🚀</span> Live Demo
                  </a>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </section>

      {/* ════════════ WORKFLOW ════════════ */}
      <section id="workflow" style={{ padding: `${secPy} ${px}`, maxWidth: 1200, margin: "0 auto" }}>
        <SectionHeader num="05" title="Git Workflow" isMobile={isMobile} />
        <FadeIn>
          <div style={{ display: "grid", gridTemplateColumns: flowCols, gap: 1, background: "#2a2a3a", border: "1px solid #2a2a3a", borderRadius: 8, overflow: "hidden", marginBottom: "1.5rem" }}>
            {WORKFLOW_STEPS.map(step => (
              <div key={step.num} style={{ background: "#16161f", padding: isMobile ? "1.25rem 1rem" : "2rem 1.5rem", transition: "background 0.2s" }}
                onMouseEnter={e => e.currentTarget.style.background = "#111118"}
                onMouseLeave={e => e.currentTarget.style.background = "#16161f"}
              >
                <div style={{ fontFamily: "'Syne',sans-serif", fontSize: isMobile ? "1.8rem" : "3rem", fontWeight: 800, color: "#2a2a3a", lineHeight: 1, marginBottom: "0.75rem", letterSpacing: "-0.06em" }}>{step.num}</div>
                <div style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: isMobile ? "0.8rem" : "0.85rem", color: "#e8e8f0", marginBottom: "0.4rem" }}>{step.name}</div>
                <div style={{ fontSize: isMobile ? "0.65rem" : "0.7rem", color: "#6b6b88", lineHeight: 1.6 }}>{step.desc}</div>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* YAML block */}
        <FadeIn delay={150}>
          <div style={{ background: "#16161f", border: "1px solid #2a2a3a", borderRadius: 8, padding: isMobile ? "1.25rem 1rem" : "2rem 2.5rem", overflowX: "auto" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.25rem", paddingBottom: "1rem", borderBottom: "1px solid #2a2a3a" }}>
              <div style={{ display: "flex", gap: 6 }}>
                {["#ff5f57", "#febc2e", "#28c840"].map(c => <span key={c} style={{ width: 12, height: 12, borderRadius: "50%", background: c, display: "block", flexShrink: 0 }} />)}
              </div>
              <span style={{ fontSize: "0.68rem", color: "#6b6b88" }}>.github/workflows/deploy.yml</span>
            </div>
            <pre style={{ fontFamily: "'DM Mono',monospace", fontSize: isMobile ? "0.65rem" : "0.78rem", lineHeight: 1.8, color: "#e8e8f0", overflowX: "auto" }}
              dangerouslySetInnerHTML={{ __html: YAML_CODE }}
            />
          </div>
        </FadeIn>
      </section>

      {/* ════════════ KANBAN ════════════ */}
      <section id="kanban" style={{ padding: `${secPy} ${px}`, maxWidth: 1200, margin: "0 auto" }}>
        <SectionHeader num="05" title="Kanban Board" isMobile={isMobile} />
        <FadeIn>
          {/* Legend */}
          <div style={{ display: "flex", gap: "1.25rem", flexWrap: "wrap", marginBottom: "1.25rem" }}>
            {[["#7fffb2", "Anmol"], ["#ff6b6b", "Priyansu"], ["#a78bfa", "Both"]].map(([c, l]) => (
              <div key={l} style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.7rem", color: "#6b6b88" }}>
                <div style={{ width: 8, height: 8, borderRadius: "50%", background: c }} />{l}
              </div>
            ))}
          </div>

          {/* Scrollable board on small screens */}
          <div style={{ overflowX: "auto", paddingBottom: "0.5rem" }}>
            <div style={{ display: "grid", gridTemplateColumns: `repeat(5,${isMobile ? "190px" : isTablet ? "1fr" : "1fr"})`, gap: "0.85rem", minWidth: isMobile ? "990px" : "auto" }}>
              {KANBAN_COLS.map(col => (
                <div key={col.title}>
                  <div style={{ fontSize: "0.62rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#6b6b88", padding: "0.7rem 1rem", background: "#111118", border: "1px solid #2a2a3a", borderRadius: "6px 6px 0 0", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    {col.title}
                    <span style={{ background: "#2a2a3a", padding: "0.1rem 0.4rem", borderRadius: 999, fontSize: "0.58rem" }}>{col.cards.length}</span>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", marginTop: "0.5rem" }}>
                    {col.cards.map(card => <KanbanCard key={card.text} {...card} />)}
                  </div>
                </div>
              ))}
            </div>
          </div>
          {isMobile && (
            <p style={{ fontSize: "0.62rem", color: "#6b6b88", textAlign: "center", marginTop: "0.75rem", letterSpacing: "0.08em" }}>← swipe to see all columns →</p>
          )}
        </FadeIn>
      </section>

      {/* ════════════ FOOTER ════════════ */}
      <footer style={{ borderTop: "1px solid #2a2a3a", padding: `2rem ${px}`, display: "flex", flexDirection: isMobile ? "column" : "row", alignItems: isMobile ? "flex-start" : "center", justifyContent: "space-between", gap: "0.75rem", maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ fontSize: "0.73rem", color: "#6b6b88" }}>
          Built by <span style={{ color: "#e8e8f0" }}>Anmol</span> + <span style={{ color: "#e8e8f0" }}>Priyansu</span> · 7-Day Sprint · React + Node + MongoDB
        </div>
        <div style={{ fontSize: "0.7rem", color: "#6b6b88", fontFamily: "'Fraunces',serif", fontStyle: "italic" }}>
          ship fast, ship together.
        </div>
      </footer>
    </div>
  );
}
