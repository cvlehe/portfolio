const resumeUrl = "../Charles_von_Lehe_Resume.pdf";

export default function ResumePage() {
  return (
    <>
      <header className="topbar">
        <div
          className="shell nav"
          role="navigation"
          aria-label="Primary navigation"
        >
          <a
            className="wordmark"
            href="../"
            aria-label="Charles von Lehe, portfolio home"
          >
            cv<span>l.</span>
          </a>
          <nav className="navlinks" aria-label="Sections">
            <a href="../#work">Selected work</a>
            <a href="../#experience">Experience</a>
            <a href="../#contact">Contact</a>
          </nav>
          <a className="btn small-cta" href={resumeUrl} download>
            Download PDF <span aria-hidden="true">↓</span>
          </a>
        </div>
      </header>
      <main className="resume-page">
        <section className="resume-intro" aria-labelledby="resume-title">
          <div className="shell resume-header">
            <div className="resume-copy">
              <div className="eyebrow">Charles von Lehe / Résumé</div>
              <h1 id="resume-title">Résumé.</h1>
              <p>Read it here, open the PDF in its own tab, or save a copy.</p>
            </div>
            <div className="resume-actions">
              <a className="btn btn-outline" href="../">
                <span aria-hidden="true">←</span> Back to portfolio
              </a>
              <a className="btn" href={resumeUrl} download>
                Download PDF <span aria-hidden="true">↓</span>
              </a>
            </div>
          </div>
        </section>
        <section className="resume-viewer-section" aria-label="Résumé preview">
          <div className="shell">
            <div className="resume-viewer">
              <iframe src={resumeUrl} title="Charles von Lehe résumé PDF" />
            </div>
            <p className="resume-fallback">
              If the preview is unavailable on your device,{" "}
              <a href={resumeUrl} target="_blank" rel="noopener noreferrer">
                open the PDF in a new tab
              </a>
              .
            </p>
          </div>
        </section>
      </main>
      <footer>
        <div className="shell footer-grid">
          <div>
            © <span suppressHydrationWarning>{new Date().getFullYear()}</span>{" "}
            Charles von Lehe · New York City
          </div>
          <div>
            <a href="../">Back to portfolio</a>
          </div>
        </div>
      </footer>
    </>
  );
}
