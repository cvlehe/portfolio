function Header() {
  return (
    <header className="topbar">
      <div
        className="shell nav"
        role="navigation"
        aria-label="Primary navigation"
      >
        <a className="wordmark" href="#top" aria-label="Charles von Lehe, home">
          cv<span>l.</span>
        </a>
        <nav className="navlinks" aria-label="Sections">
          <a href="#work">Selected work</a>
          <a href="#approach">How I work</a>
          <a href="#experience">Experience</a>
          <a href="resume/">Résumé</a>
          <a href="#contact">Contact</a>
        </nav>
        <a
          className="btn small-cta"
          href="mailto:vonlehec@gmail.com?subject=Let's%20talk%20about%20engineering"
        >
          Get in touch <span aria-hidden="true">↗</span>
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <div className="hero">
      <div className="shell hero-grid">
        <div>
          <div className="eyebrow">Charles von Lehe / New York City</div>
          <h1>
            Great products. <em>Hard problems.</em> Thoughtful engineering.
          </h1>
          <p className="lede">
            I build consumer products where the experience has to feel
            effortless — even when the engineering isn't. My work spans crypto
            trading, payments, React Native, React, and the native platforms
            underneath.
          </p>
          <div className="hero-actions">
            <a className="btn" href="#work">
              Explore selected work{" "}
              <span className="mini-arrow" aria-hidden="true">
                ↘
              </span>
            </a>
            <a className="btn btn-outline" href="resume/">
              View résumé <span aria-hidden="true">↗</span>
            </a>
          </div>
          <p className="hero-note">
            Senior Software Engineer · product ownership · cross-platform
            architecture
          </p>
        </div>
        <div
          className="signal"
          aria-label="Illustrative diagram highlighting product engineering skills"
        >
          <div className="signal-head">
            <span>Product systems / 01</span>
            <span className="status">Built to ship</span>
          </div>
          <div className="signal-map">
            <div className="signal-tile">
              <div>
                <span className="kicker">Financial products</span>
                <strong>Crypto trading</strong>
              </div>
              <span className="signal-icon" aria-hidden="true">
                ↗
              </span>
            </div>
            <div className="signal-tile">
              <div>
                <span className="kicker">Commerce platforms</span>
                <strong>Payments & checkout</strong>
              </div>
              <span className="signal-icon" aria-hidden="true">
                ↔
              </span>
            </div>
            <div className="signal-tile">
              <div>
                <span className="kicker">Engineering foundations</span>
                <strong>React Native & React</strong>
              </div>
              <span className="signal-icon" aria-hidden="true">
                ⌘
              </span>
            </div>
          </div>
          <div className="signal-footer">
            <span>BUILD ACROSS BOUNDARIES</span>
            <span>2013 → NOW</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function Stats() {
  return (
    <div className="stats">
      <div className="shell stats-grid">
        <div className="stat">
          <strong>13+ years</strong>
          <p>Shipping software products</p>
        </div>
        <div className="stat">
          <strong>Fintech + commerce</strong>
          <p>Trading experiences and money movement</p>
        </div>
        <div className="stat">
          <strong>End-to-end</strong>
          <p>Architecture, implementation, rollout, iteration</p>
        </div>
      </div>
    </div>
  );
}

function Work() {
  return (
    <section id="work" aria-labelledby="work-title">
      <div className="shell">
        <div className="section-header">
          <div>
            <div className="eyebrow">Selected work / Case studies</div>
            <h2 id="work-title">What I've built.</h2>
          </div>
          <p className="section-blurb">
            Four examples of production work. The diagrams explain engineering
            boundaries and are illustrative — not actual application screenshots
            or internal architecture documents.
          </p>
        </div>
        <div className="case-grid">
          <article className="case case-purple">
            <div className="case-graphic">
              <div
                className="diagram compact"
                aria-label="Illustrative React Native trading app and native platform architecture"
              >
                <span className="node">
                  <small>Product</small>Trading app
                </span>
                <span className="connector" aria-hidden="true">
                  →
                </span>
                <span className="node">
                  <small>Shared UI</small>React Native
                </span>
                <span className="connector" aria-hidden="true">
                  ↔
                </span>
                <span className="node">
                  <small>Platforms</small>iOS / Android
                </span>
              </div>
            </div>
            <div className="case-body">
              <div className="case-meta">
                <span>01 / Gemini</span>
                <span>2018–2020</span>
              </div>
              <h3>Consumer crypto trading, built for mobile.</h3>
              <p>
                Worked on Gemini's production cryptocurrency trading app,
                delivering and maintaining React Native experiences and
                platform-specific features in a fast-moving financial product.
              </p>
              <div className="chips">
                <span className="chip">React Native</span>
                <span className="chip">TypeScript / JavaScript</span>
                <span className="chip">Swift</span>
                <span className="chip">Objective-C</span>
                <span className="chip">Java</span>
              </div>
              <details>
                <summary>Read the engineering story</summary>
                <div className="details-body">
                  <p>
                    <strong>Focus:</strong> Making complex financial
                    interactions approachable in a mobile product without losing
                    reliability or consistency across platforms.
                  </p>
                  <p>
                    <strong>Contribution:</strong> Built customer-facing
                    features and native iOS/Android components, coordinating
                    across product, design, backend, security, and platform
                    teams.
                  </p>
                  <p>
                    <strong>What shipped:</strong> Production mobile trading
                    experiences within the Gemini application. Promoted to
                    Senior Software Engineer during this tenure.
                  </p>
                </div>
              </details>
            </div>
          </article>
          <article className="case case-mint">
            <div className="case-graphic">
              <div
                className="diagram compact"
                aria-label="Illustrative payment reader integration architecture"
              >
                <span className="node">
                  <small>App</small>Payment flow
                </span>
                <span className="connector" aria-hidden="true">
                  →
                </span>
                <span className="node">
                  <small>Native bridge</small>Swift / Kotlin
                </span>
                <span className="connector" aria-hidden="true">
                  →
                </span>
                <span className="node">
                  <small>Device layer</small>Square SDK
                </span>
              </div>
            </div>
            <div className="case-body">
              <div className="case-meta">
                <span>02 / Squarespace · Acuity</span>
                <span>2020–Present</span>
              </div>
              <h3>Making in-person payments feel native.</h3>
              <p>
                Led a cross-platform Square Reader SDK integration for Acuity,
                bridging hardware discovery, connection states, and payment
                interactions into a cohesive React Native experience.
              </p>
              <div className="chips">
                <span className="chip">React Native</span>
                <span className="chip">TypeScript</span>
                <span className="chip">Swift / Kotlin</span>
                <span className="chip">Square Reader SDK</span>
              </div>
              <details>
                <summary>Read the engineering story</summary>
                <div className="details-body">
                  <p>
                    <strong>Problem:</strong> Hardware-driven payment workflows
                    introduce asynchronous state changes and platform-specific
                    SDK behavior that the shared app needs to handle cleanly.
                  </p>
                  <p>
                    <strong>Contribution:</strong> Built native modules and
                    cross-platform interactions for reader discovery, connection
                    and cancellation, reader status, Tap to Pay, and transaction
                    flows.
                  </p>
                  <p>
                    <strong>What shipped:</strong> In-person payment
                    capabilities within Acuity's mobile product, integrating
                    shared frontend UI with native payment functionality.
                  </p>
                </div>
              </details>
            </div>
          </article>
          <article className="case case-blue">
            <div className="case-graphic">
              <div
                className="diagram compact"
                aria-label="Illustrative appointment-to-payment customer journey"
              >
                <span className="node">
                  <small>Step 1</small>Appointment
                </span>
                <span className="connector" aria-hidden="true">
                  →
                </span>
                <span className="node">
                  <small>Step 2</small>Payment link
                </span>
                <span className="connector" aria-hidden="true">
                  →
                </span>
                <span className="node">
                  <small>Step 3</small>Collection
                </span>
              </div>
            </div>
            <div className="case-body">
              <div className="case-meta">
                <span>03 / Squarespace · Acuity</span>
                <span>2020–Present</span>
              </div>
              <h3>Payments that work beyond checkout.</h3>
              <p>
                Shipped customer-facing payment functionality across
                post-booking collection, payment links, saved cards, tipping,
                and checkout flows — making it easier for service businesses to
                get paid.
              </p>
              <div className="chips">
                <span className="chip">React Native</span>
                <span className="chip">Payments</span>
                <span className="chip">Checkout UX</span>
                <span className="chip">APIs / PHP</span>
              </div>
              <details>
                <summary>Read the engineering story</summary>
                <div className="details-body">
                  <p>
                    <strong>Problem:</strong> Service businesses don't collect
                    every payment at the moment an appointment is booked. The
                    app needs to support flexible, trustworthy payment journeys.
                  </p>
                  <p>
                    <strong>Contribution:</strong> Delivered customer-facing
                    checkout and post-booking payment improvements; drove a
                    deposit-only payment-link initiative and coordinated related
                    application/backend integration work.
                  </p>
                  <p>
                    <strong>Approach:</strong> Balance customer experience with
                    maintainable state handling, testing, and staged delivery.
                  </p>
                </div>
              </details>
            </div>
          </article>
          <article className="case case-gold">
            <div className="case-graphic">
              <div
                className="diagram compact"
                aria-label="Illustrative typed modal architecture"
              >
                <span className="node">
                  <small>Foundation</small>Typed registry
                </span>
                <span className="connector" aria-hidden="true">
                  →
                </span>
                <span className="node">
                  <small>Patterns</small>Sheet / Drawer
                </span>
                <span className="connector" aria-hidden="true">
                  →
                </span>
                <span className="node">
                  <small>App</small>Consistent UI
                </span>
              </div>
            </div>
            <div className="case-body">
              <div className="case-meta">
                <span>04 / Squarespace · Acuity</span>
                <span>Frontend architecture</span>
              </div>
              <h3>Reusable UI foundations that scale.</h3>
              <p>
                Helped evolve Acuity's React Native foundations with typed modal
                patterns, navigation improvements, and clearer state-management
                architecture for complex product flows.
              </p>
              <div className="chips">
                <span className="chip">TypeScript</span>
                <span className="chip">React Native</span>
                <span className="chip">Redux Toolkit</span>
                <span className="chip">Architecture</span>
              </div>
              <details>
                <summary>Read the engineering story</summary>
                <div className="details-body">
                  <p>
                    <strong>Problem:</strong> As a product grows, ad hoc UI
                    patterns increase the cost of changes and make complex flows
                    harder to reason about.
                  </p>
                  <p>
                    <strong>Contribution:</strong> Worked on a typed modal
                    system supporting full-screen and bottom-sheet
                    presentations, typed parameters, and stack-based state;
                    proposed calendar-state normalization through an
                    architectural decision record.
                  </p>
                  <p>
                    <strong>Beyond code:</strong> Facilitated React Native
                    knowledge-sharing and contributed design reviews and shared
                    engineering standards.
                  </p>
                </div>
              </details>
            </div>
          </article>
        </div>
        <div className="banner">
          <div>
            <strong>Cross-stack when the product needs it.</strong>
            <p>
              Alongside UI and native integrations, I've worked with PHP
              services, APIs, push messaging integrations, and system design to
              deliver complete user journeys.
            </p>
          </div>
          <a href="#approach">
            How I approach the work <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}

function Approach() {
  return (
    <section
      className="approach"
      id="approach"
      aria-labelledby="approach-title"
    >
      <div className="shell">
        <div className="section-header">
          <div>
            <div className="eyebrow">Working style / Principles</div>
            <h2 id="approach-title">I think beyond the screen.</h2>
          </div>
          <p className="section-blurb">
            The strongest frontend engineers understand the full product: the
            people using it, the systems behind it, and the team that will
            maintain it.
          </p>
        </div>
        <div className="approach-grid">
          <div className="principle">
            <div className="num">01 / OWNERSHIP</div>
            <h3>Start with the problem.</h3>
            <p>
              Turn ambiguous goals into a tractable technical plan. Make
              tradeoffs with product and design, then follow the work from
              implementation through rollout.
            </p>
          </div>
          <div className="principle">
            <div className="num">02 / DEPTH</div>
            <h3>Go where the bug lives.</h3>
            <p>
              Cross JavaScript, native iOS/Android, SDKs, network boundaries,
              and backend services when a feature requires it instead of
              stopping at the frontend boundary.
            </p>
          </div>
          <div className="principle">
            <div className="num">03 / LEVERAGE</div>
            <h3>Improve the next build.</h3>
            <p>
              Invest in typed interfaces, reusable UI, architectural decisions,
              reviews, and knowledge-sharing so the team can ship with
              confidence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-title">
      <div className="shell experience-grid">
        <div className="experience-left">
          <div className="eyebrow">Career / Experience</div>
          <h2 id="experience-title">A builder at every level.</h2>
          <p>
            From native mobile apps to fintech, payments, and cross-platform
            foundations, I've spent my career turning complex product ideas into
            software people can use.
          </p>
          <div className="lab">
            <div className="lab-label">Also exploring</div>
            <p>
              <strong style={{ color: "#fff" }}>SlicerMD</strong> — an
              independent Next.js project exploring AI-assisted diagnosis of 3D
              printing failures. Personal work in progress, not a shipped
              employer product.
            </p>
          </div>
        </div>
        <div className="experience-list">
          <div className="experience-item">
            <span className="years">2020 – Now</span>
            <div>
              <h3>Squarespace / Acuity</h3>
              <p>
                Senior Software Engineer · Payments, checkout, React Native
                architecture and cross-platform integrations.
              </p>
            </div>
          </div>
          <div className="experience-item">
            <span className="years">2018 – 2020</span>
            <div>
              <h3>Gemini</h3>
              <p>
                Software Engineer → Senior Software Engineer · Cryptocurrency
                trading app and mobile platform work.
              </p>
            </div>
          </div>
          <div className="experience-item">
            <span className="years">2017 – 2018</span>
            <div>
              <h3>WR1</h3>
              <p>
                Lead Developer · Led team delivery of iOS and Android
                application projects.
              </p>
            </div>
          </div>
          <div className="experience-item">
            <span className="years">2013 – 2017</span>
            <div>
              <h3>netGALAXY Studios</h3>
              <p>
                Software Engineer → Lead Developer · Shipped native applications
                and led client project delivery.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="contact" aria-labelledby="contact-title">
      <div className="shell">
        <div className="eyebrow">Let's build something excellent</div>
        <h2 id="contact-title">The next hard problem? I'm interested.</h2>
        <p>
          I enjoy teams that care deeply about product quality, make decisions
          quickly, and give engineers ownership of meaningful work.
        </p>
        <div className="actions">
          <a
            className="btn"
            href="mailto:vonlehec@gmail.com?subject=Let's%20talk%20about%20engineering"
          >
            Email me <span aria-hidden="true">↗</span>
          </a>
          <a className="btn btn-outline" href="resume/">
            View résumé <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <div className="shell footer-grid">
        <div>
          © <span suppressHydrationWarning>{new Date().getFullYear()}</span>{" "}
          Charles von Lehe · New York City
        </div>
        <div>
          Selected descriptions reflect individual contributions. Diagrams are
          illustrative, not proprietary implementation details.{" "}
          <a href="mailto:vonlehec@gmail.com">Get in touch</a>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <Header />
      <main id="top">
        <Hero />
        <Stats />
        <Work />
        <Approach />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
