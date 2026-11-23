import type { AcupuncturePoint } from '../data/acupuncturePoints'

interface PointInfoCardProps {
  point: AcupuncturePoint
  isRevealed: boolean
}

export function PointInfoCard({ point, isRevealed }: PointInfoCardProps) {
  return (
    <section aria-live="polite" className={`info-card${isRevealed ? ' is-revealed' : ''}`}>
      {isRevealed ? (
        <>
          <div className="info-card__eyebrow">
            <span>{point.code}</span>
            <span>{point.meridian}</span>
          </div>
          <h2>{point.name}</h2>
          <p>{point.hint}</p>
        </>
      ) : (
        <>
          <span className="info-card__eyebrow">Deine Frage</span>
          <h2>Welcher Punkt ist markiert?</h2>
          <p>Tippe auf den hervorgehobenen Punkt, um die Antwort zu sehen.</p>
        </>
      )}
    </section>
  )
}
