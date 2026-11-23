import type { AcupuncturePoint } from '../data/acupuncturePoints'
import { PointMarker } from './PointMarker'

interface QuizBoardProps {
  points: AcupuncturePoint[]
  currentPointId: string
  isRevealed: boolean
  onSelectPoint: (id: string) => void
}

export function QuizBoard({
  points,
  currentPointId,
  isRevealed,
  onSelectPoint,
}: QuizBoardProps) {
  return (
    <div className="quiz-board">
      <div className="quiz-board__image-wrap">
        <img
          alt="Stilisierte Vorderansicht eines menschlichen Körpers"
          className="quiz-board__body"
          draggable="false"
          src="/acupuncture-body.svg"
        />
        {points.map((point) => (
          <PointMarker
            isCurrent={point.id === currentPointId}
            isRevealed={isRevealed && point.id === currentPointId}
            key={point.id}
            onSelect={onSelectPoint}
            point={point}
          />
        ))}
      </div>
      <p className="quiz-board__caption">Vorderansicht · Punkte schematisch</p>
    </div>
  )
}
