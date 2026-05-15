# juan-costa-portfolio
Um site que serve como um portifólio de sites e outros sistemas de automações feitos por mim



@import url('./animations.css');
@import url('./scrollbar.css');

body{
  background:#050816;
  overflow-x:hidden;
}

.grid-background{
  position:fixed;
  inset:0;

  background-image:
    linear-gradient(rgba(255,255,255,.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,.03) 1px, transparent 1px);

  background-size:40px 40px;

  z-index:-1;
}

.glow{
  box-shadow:
    0 0 20px rgba(77,163,255,.15),
    0 0 40px rgba(77,163,255,.08);
}

.glass{
  background:rgba(255,255,255,.04);
  border:1px solid rgba(255,255,255,.06);
  backdrop-filter:blur(14px);
}

.custom-cursor{
  width:20px;
  height:20px;

  border-radius:999px;

  position:fixed;

  background:#4da3ff;

  pointer-events:none;

  filter:blur(2px);

  z-index:9999;
}
.card,
.project-card,
.stack-card{
  transition:all .35s ease;
}

.card:hover,
.project-card:hover,
.stack-card:hover{

  transform:
    translateY(-8px)
    scale(1.01);

  box-shadow:
    0 0 30px rgba(77,163,255,.12);

}
/* =========================
   PROJECT CARDS
========================= */

.projects-grid{
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(320px,1fr));
  gap:30px;
}

.project-card{

  position:relative;

  background:
    rgba(255,255,255,.03);

  border:
    1px solid rgba(255,255,255,.06);

  border-radius:24px;

  padding:32px;

  overflow:hidden;

  backdrop-filter:blur(12px);

  transition:.4s ease;

  min-height:260px;

}

.project-card::before{

  content:"";

  position:absolute;

  inset:0;

  background:
    linear-gradient(
      180deg,
      rgba(77,163,255,.08),
      transparent
    );

  opacity:0;

  transition:.4s ease;

}

.project-card:hover{

  transform:
    translateY(-10px);

  border-color:
    rgba(77,163,255,.25);

  box-shadow:
    0 0 40px rgba(77,163,255,.10);

}

.project-card:hover::before{
  opacity:1;
}

.project-card h3{

  font-size:1.5rem;

  font-weight:800;

  margin-top:20px;
  margin-bottom:16px;

}

.project-card p{

  color:#9ca3af;

  line-height:1.8;

  margin-bottom:28px;

}

/* =========================
   BADGES
========================= */

.badge,
.badge-dev{

  display:inline-flex;

  align-items:center;

  padding:8px 14px;

  border-radius:999px;

  font-size:.75rem;

  font-weight:700;

  letter-spacing:1px;

}

.badge{

  background:
    rgba(77,163,255,.12);

  color:#4da3ff;

  border:
    1px solid rgba(77,163,255,.25);

}

.badge-dev{

  background:
    rgba(255,170,0,.10);

  color:#ffb347;

  border:
    1px solid rgba(255,170,0,.20);

}

/* =========================
   BUTTONS
========================= */

.project-buttons{

  display:flex;

  gap:14px;

  flex-wrap:wrap;

}

.project-buttons a{

  padding:12px 18px;

  border-radius:14px;

  background:
    rgba(255,255,255,.04);

  border:
    1px solid rgba(255,255,255,.08);

  color:white;

  font-weight:600;

  transition:.3s ease;

}

.project-buttons a:hover{

  background:#4da3ff;

  border-color:#4da3ff;

  transform:
    translateY(-3px);

  box-shadow:
    0 0 20px rgba(77,163,255,.25);

}
.section-title{

  font-size:2rem;

  font-weight:800;

  margin-bottom:20px;

}