:root {
  --bg: #f7f6f2;
  --panel: #ffffff;
  --panel-soft: #eef3ef;
  --panel-alt: #f2efe7;
  --line: #e3e4dc;
  --text: #17231d;
  --muted: #5d6c68;
  --green: #0f5a47;
  --green-deep: #0a3f34;
  --green-soft: #dfeee8;
  --gold: #c89d4c;
  --gold-soft: #f5ebd4;
  --purple: #6a59b8;
  --purple-soft: #ece7ff;
  --shadow: 0 18px 35px rgba(14, 39, 32, 0.08);
}

* { box-sizing: border-box; }

html { scroll-behavior: smooth; }

body {
  margin: 0;
  font-family: "Manrope", sans-serif;
  color: var(--text);
  background: var(--bg);
  line-height: 1.6;
}

a { text-decoration: none; color: inherit; }

button, input {
  font: inherit;
}

img { max-width: 100%; display: block; }

.container {
  width: min(1160px, calc(100% - 40px));
  margin: 0 auto;
}

.topbar {
  background: var(--green-deep);
  color: rgba(255, 255, 255, 0.8);
  font-size: 12px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.topbar-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 42px;
  gap: 18px;
}

.site-header {
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(15, 90, 71, 0.08);
  position: sticky;
  top: 0;
  z-index: 30;
}

.nav-wrap {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 78px;
  gap: 16px;
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  font-weight: 800;
}

.brand-mark {
  display: grid;
  place-items: center;
  width: 42px;
  height: 42px;
  background: linear-gradient(135deg, var(--green), #1c7c60);
  border-radius: 12px;
  color: white;
  font-size: 0.8rem;
  letter-spacing: 0.08em;
}

.brand-text {
  font-size: clamp(1.1rem, 1.5vw, 1.55rem);
  letter-spacing: -0.05em;
  font-family: "Playfair Display", serif;
}

.brand-text span {
  color: var(--green);
}

.nav {
  display: flex;
  align-items: center;
  gap: 22px;
  color: var(--muted);
  font-weight: 700;
  font-size: 0.9rem;
}

.nav a {
  transition: color 0.2s ease;
}

.nav a:hover,
.nav a.active {
  color: var(--green);
}

.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 0;
  border-radius: 999px;
  padding: 0.9rem 1.4rem;
  font-weight: 800;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.button:hover {
  transform: translateY(-1px);
}

.button-primary {
  background: linear-gradient(135deg, var(--green), #1a7c60);
  box-shadow: 0 12px 25px rgba(15, 90, 71, 0.2);
  color: white;
}

.button-dark {
  background: var(--text);
  color: white;
}

.nav-button {
  padding-inline: 1.2rem;
}

.menu-toggle {
  display: none;
  width: 44px;
  height: 44px;
  border: 1px solid var(--line);
  background: white;
  border-radius: 12px;
  padding: 0;
  cursor: pointer;
}

.menu-toggle span {
  display: block;
  width: 20px;
  height: 2px;
  background: var(--green);
  margin: 5px auto;
  border-radius: 999px;
}

.hero {
  padding: 82px 0 78px;
  background:
    radial-gradient(circle at top right, rgba(15, 90, 71, 0.12), transparent 25%),
    linear-gradient(180deg, #f8f7f3, #f3f5f0 58%, #f6f5f2);
}

.hero-grid {
  display: grid;
  grid-template-columns: 1.08fr 0.92fr;
  gap: 58px;
  align-items: center;
}

.eyebrow {
  margin: 0 0 1rem;
  color: var(--green);
  font-size: 0.76rem;
  font-weight: 800;
  letter-spacing: 0.15em;
  text-transform: uppercase;
}

.eyebrow-dark {
  color: var(--green);
}

.hero-copy-wrap h1,
.section-heading h2,
.schedule-copy h2,
.subscribe-wrap h2,
.about-wrap h2 {
  margin: 0;
  letter-spacing: -0.06em;
  font-family: "Playfair Display", serif;
  line-height: 1.04;
}

.hero-copy-wrap h1 {
  font-size: clamp(3rem, 5vw, 5.2rem);
  max-width: 560px;
}

.hero-copy {
  max-width: 620px;
  margin-top: 1.2rem;
  color: var(--muted);
  font-size: 1.12rem;
}

.hero-actions {
  display: flex;
  align-items: center;
  gap: 1.3rem;
  margin-top: 2rem;
}

.text-link {
  color: var(--green);
  font-weight: 800;
}

.hero-metrics {
  list-style: none;
  padding: 0;
  margin: 2.2rem 0 0;
  display: flex;
  gap: 1.8rem;
  flex-wrap: wrap;
}

.hero-metrics li {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  min-width: 120px;
}

.hero-metrics strong {
  font-size: 1.2rem;
  color: var(--green-deep);
}

.hero-metrics span {
  color: var(--muted);
  font-size: 0.8rem;
}

.hero-card {
  background: linear-gradient(180deg, #ffffff, #f4faf6);
  border: 1px solid rgba(15, 90, 71, 0.08);
  border-radius: 26px;
  padding: 1.3rem;
  box-shadow: var(--shadow);
}

.card-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 800;
  color: var(--muted);
  font-size: 0.74rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.status-pill {
  display: inline-flex;
  align-items: center;
  background: var(--green-soft);
  color: var(--green);
  border-radius: 999px;
  padding: 0.42rem 0.6rem;
}

.status-pill::before {
  content: "";
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--green);
  display: inline-block;
  margin-right: 0.45rem;
}

.featured-result {
  background: linear-gradient(180deg, #eef8f1, #e6f1eb);
  border-radius: 22px;
  padding: 1.5rem 1.2rem 1.2rem;
  margin-top: 1rem;
}

.result-label {
  margin: 0 0 1rem;
  color: var(--green);
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  font-size: 0.72rem;
}

.big-balls,
.balls {
  display: flex;
  gap: 0.7rem;
  flex-wrap: wrap;
}

.big-balls span,
.balls span {
  display: grid;
  place-items: center;
  width: 52px;
  height: 52px;
  border-radius: 50%;
  background: white;
  border: 2px solid rgba(15, 90, 71, 0.08);
  font-weight: 800;
  color: var(--green-deep);
  box-shadow: inset 0 0 0 1px rgba(15, 90, 71, 0.04);
}

.big-balls span {
  width: 58px;
  height: 58px;
  font-size: 1.1rem;
}

.result-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
  color: var(--muted);
  font-size: 0.74rem;
}

.mini-stats {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;
  margin-top: 1.1rem;
}

.mini-stats div {
  background: white;
  border: 1px solid var(--line);
  border-radius: 16px;
  padding: 0.95rem 1rem;
}

.mini-stats span {
  display: block;
  color: var(--muted);
  font-size: 0.75rem;
}

.mini-stats strong {
  display: block;
  margin-top: 0.35rem;
}

.results-section {
  padding: 88px 0 36px;
}

.section-heading {
  display: flex;
  justify-content: space-between;
  align-items: end;
  gap: 20px;
  margin-bottom: 2rem;
}

.section-heading h2,
.schedule-copy h2,
.subscribe-wrap h2,
.about-wrap h2 {
  font-size: clamp(2.2rem, 3vw, 3.1rem);
}

.date-picker {
  display: inline-flex;
  align-items: center;
  gap: 0.8rem;
  background: rgba(255, 255, 255, 0.75);
  border: 1px solid var(--line);
  border-radius: 999px;
  padding: 0.7rem 1rem 0.7rem 1.1rem;
  color: var(--muted);
  font-weight: 700;
}

.date-picker input {
  border: 1px solid var(--line);
  border-radius: 10px;
  background: white;
  padding: 0.5rem 0.7rem;
  color: var(--text);
}

.results-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.3rem;
}

.result-card {
  background: white;
  border: 1px solid var(--line);
  border-radius: 22px;
  padding: 1.35rem 1.2rem 1.1rem;
  box-shadow: 0 8px 18px rgba(14, 39, 32, 0.02);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.result-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 18px 32px rgba(14, 39, 32, 0.08);
}

.result-card.featured {
  border-color: rgba(15, 90, 71, 0.18);
  background: linear-gradient(180deg, #ffffff, #f4faf6);
}

.card-topline {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--muted);
  font-size: 0.7rem;
  font-weight: 800;
  letter-spacing: 0.09em;
  text-transform: uppercase;
}

.tag {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.38rem 0.7rem;
  border-radius: 999px;
  font-size: 0.62rem;
}

.tag-green { background: var(--green-soft); color: var(--green); }
.tag-gold { background: var(--gold-soft); color: #7e651f; }
.tag-purple { background: var(--purple-soft); color: var(--purple); }

.result-card h3 {
  margin: 1.2rem 0 1rem;
  font-size: 1.6rem;
  letter-spacing: -0.05em;
  font-family: "Playfair Display", serif;
}

.balls span {
  width: 44px;
  height: 44px;
  font-size: 0.8rem;
}

.card-footer {
  margin-top: 1.2rem;
  padding-top: 1rem;
  border-top: 1px solid var(--line);
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  color: var(--muted);
  font-size: 0.75rem;
}

.copy-btn {
  border: 0;
  background: transparent;
  color: var(--green);
  padding: 0;
  font-weight: 800;
  cursor: pointer;
}

.schedule-section {
  background: linear-gradient(180deg, #f7f0df, #f4f5ee);
  padding: 90px 0;
}

.schedule-grid {
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: 2rem;
  align-items: center;
}

.schedule-copy p:last-child {
  color: var(--muted);
  margin-top: 1rem;
  max-width: 480px;
}

.schedule-list {
  background: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(15, 90, 71, 0.08);
  border-radius: 24px;
  padding: 1rem 1.2rem;
}

.schedule-item {
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 1rem;
  align-items: center;
  padding: 1rem 0.2rem;
  border-bottom: 1px solid var(--line);
}

.schedule-item:last-child {
  border-bottom: 0;
}

.schedule-icon {
  width: 48px;
  height: 48px;
  display: grid;
  place-items: center;
  border-radius: 14px;
  color: white;
  font-size: 1.2rem;
}

.icon-green { background: linear-gradient(135deg, #1d7a5f, #0f5a47); }
.icon-gold { background: linear-gradient(135deg, #d2a65d, #bf8b38); }
.icon-purple { background: linear-gradient(135deg, #7d6ed2, #6250b8); }

.schedule-item strong {
  display: block;
  font-size: 1rem;
}

.schedule-item small {
  color: var(--muted);
  font-size: 0.78rem;
}

.schedule-item em {
  font-style: normal;
  font-size: 0.82rem;
  font-weight: 800;
  color: var(--green-deep);
}

.subscribe-section {
  background: #e7efe8;
  padding: 76px 0;
}

.subscribe-wrap {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.8rem;
}

.subscribe-form {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  flex-wrap: wrap;
  position: relative;
}

.subscribe-form input {
  width: min(360px, 100%);
  min-height: 52px;
  border: 1px solid rgba(15, 90, 71, 0.2);
  border-radius: 999px;
  padding: 0 1.2rem;
  background: white;
}

.form-status {
  width: 100%;
  color: var(--green);
  font-size: 0.8rem;
  font-weight: 700;
  min-height: 1rem;
}

.about-section {
  padding: 88px 0 62px;
}

.about-wrap {
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: 2rem;
  align-items: center;
}

.about-wrap p:last-child {
  color: var(--muted);
  max-width: 620px;
  font-size: 1.03rem;
}

.site-footer {
  background: var(--green-deep);
  color: rgba(255, 255, 255, 0.8);
  padding: 1.75rem 0;
}

.footer-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}

.footer-brand {
  color: white;
}

.footer-inner p {
  margin: 0;
  font-size: 0.82rem;
}

.footer-links {
  display: flex;
  align-items: center;
  gap: 1rem;
  font-weight: 700;
}

@media (max-width: 900px) {
  .hero-grid,
  .schedule-grid,
  .about-wrap,
  .results-grid {
    grid-template-columns: 1fr;
  }

  .results-grid {
    gap: 1rem;
  }

  .subscribe-wrap,
  .footer-inner,
  .section-heading {
    flex-direction: column;
    align-items: flex-start;
  }

  .hero {
    padding-top: 60px;
  }
}

@media (max-width: 720px) {
  .menu-toggle {
    display: block;
  }

  .nav {
    position: absolute;
    left: 20px;
    right: 20px;
    top: 88px;
    background: rgba(255, 255, 255, 0.96);
    border: 1px solid var(--line);
    border-radius: 18px;
    box-shadow: var(--shadow);
    padding: 1rem;
    display: none;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.8rem;
  }

  .nav.open {
    display: flex;
  }

  .hero-actions,
  .hero-metrics {
    flex-direction: column;
    align-items: flex-start;
  }

  .big-balls span,
  .balls span {
    width: 42px;
    height: 42px;
  }

  .topbar-inner {
    flex-direction: column;
    justify-content: center;
    text-align: center;
    padding: 0.55rem 0;
  }

  .subscribe-form {
    width: 100%;
  }

  .subscribe-form input {
    width: 100%;
  }
}
