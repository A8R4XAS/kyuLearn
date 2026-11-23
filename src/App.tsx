import { useState } from 'react'
import { PointInfoCard } from './components/PointInfoCard'
import { QuizBoard } from './components/QuizBoard'
import { acupuncturePoints } from './data/acupuncturePoints'

function App() {
  const [currentPointId, setCurrentPointId] = useState(acupuncturePoints[0].id)
  const [isRevealed, setIsRevealed] = useState(false)
  const [revealedPointIds, setRevealedPointIds] = useState<Set<string>>(
    () => new Set(),
  )
  const [questionNumber, setQuestionNumber] = useState(1)
  const currentPoint =
    acupuncturePoints.find((point) => point.id === currentPointId) ??
    acupuncturePoints[0]

  function selectPoint(id: string) {
    if (id === currentPointId) {
      if (!isRevealed) {
        setIsRevealed(true)
        setRevealedPointIds((previous) => new Set(previous).add(id))
      }
      return
    }

    setCurrentPointId(id)
    setIsRevealed(false)
  }

  function nextPoint() {
    const choices = acupuncturePoints.filter(
      (point) => point.id !== currentPointId,
    )
    const next = choices[Math.floor(Math.random() * choices.length)]
    setCurrentPointId(next.id)
    setIsRevealed(false)
    setQuestionNumber((number) => number + 1)
  }

  return (
    <main className="app-shell">
      <header className="topbar">
        <a aria-label="Meridian Startseite" className="brand" href="/">
          <span className="brand__mark" aria-hidden="true">M</span>
          <span>meridian<span className="brand__period">.</span></span>
        </a>
        <span className="topbar__tag">Lernmodus · Akupunktur</span>
      </header>

      <section className="quiz-layout">
        <div className="quiz-intro">
          <span className="eyebrow"><span className="eyebrow__dot" /> PUNKTE LERNEN</span>
          <h1>Finde den<br />richtigen Punkt.</h1>
          <p className="quiz-intro__copy">
            Ein kleiner Schritt zu mehr Orientierung. Tippe auf den markierten
            Punkt und lerne seine Bedeutung kennen.
          </p>
          <div className="quiz-progress" aria-live="polite">
            <div className="quiz-progress__label">
              <span>Dein Fortschritt</span>
              <span>{revealedPointIds.size} / {acupuncturePoints.length}</span>
            </div>
            <div
              aria-label={`${revealedPointIds.size} von ${acupuncturePoints.length} Punkten aufgedeckt`}
              className="quiz-progress__track"
              role="progressbar"
              aria-valuemax={acupuncturePoints.length}
              aria-valuemin={0}
              aria-valuenow={revealedPointIds.size}
            >
              <span
                className="quiz-progress__fill"
                style={{
                  width: `${(revealedPointIds.size / acupuncturePoints.length) * 100}%`,
                }}
              />
            </div>
            <span className="quiz-progress__question">Frage {questionNumber}</span>
          </div>
          <PointInfoCard isRevealed={isRevealed} point={currentPoint} />
          <button className="next-button" onClick={nextPoint} type="button">
            Nächster Punkt
            <span aria-hidden="true">↗</span>
          </button>
          <p className="quiz-intro__note">Nur zum Lernen · kein Ersatz für medizinischen Rat</p>
        </div>

        <div className="quiz-visual">
          <div className="quiz-visual__heading">
            <span>01 — KÖRPERKARTE</span>
            <span>TIPPE AUF DEN PUNKT</span>
          </div>
          <QuizBoard
            currentPointId={currentPointId}
            isRevealed={isRevealed}
            onSelectPoint={selectPoint}
            points={acupuncturePoints}
          />
          <div className="quiz-visual__footer">
            <span>SCHEMATISCHE DARSTELLUNG</span>
            <span>{String(acupuncturePoints.length).padStart(2, '0')} LERNPUNKTE</span>
          </div>
        </div>
      </section>

      <footer className="page-footer">
        <span>MERIDIAN — DEIN LERNRAUM</span>
        <span>PROTOTYP · 2026</span>
      </footer>
    </main>
  )
}

export default App
