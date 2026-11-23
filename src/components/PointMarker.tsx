import type { AcupuncturePoint } from '../data/acupuncturePoints'

interface PointMarkerProps {
  point: AcupuncturePoint
  isCurrent: boolean
  isRevealed: boolean
  onSelect: (id: string) => void
}

export function PointMarker({
  point,
  isCurrent,
  isRevealed,
  onSelect,
}: PointMarkerProps) {
  return (
    <button
      aria-label={isCurrent ? 'Markierten Punkt aufdecken' : 'Diesen Punkt auswählen'}
      aria-pressed={isCurrent}
      className={`point-marker${isCurrent ? ' is-current' : ''}${isRevealed && isCurrent ? ' is-revealed' : ''}`}
      onClick={() => onSelect(point.id)}
      style={{ left: `${point.xPercent}%`, top: `${point.yPercent}%` }}
      type="button"
    >
      <span className="point-marker__dot" aria-hidden="true" />
    </button>
  )
}
