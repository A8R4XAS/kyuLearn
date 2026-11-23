export interface AcupuncturePoint {
  id: string
  code: string
  name: string
  meridian: string
  xPercent: number
  yPercent: number
  hint: string
}

export const acupuncturePoints: AcupuncturePoint[] = [
  {
    id: 'gv20',
    code: 'GV 20',
    name: 'Baihui',
    meridian: 'Lenkergefäß',
    xPercent: 50,
    yPercent: 11,
    hint: 'Am höchsten Punkt des Kopfes.',
  },
  {
    id: 'li11',
    code: 'LI 11',
    name: 'Quchi',
    meridian: 'Dickdarm',
    xPercent: 30,
    yPercent: 36,
    hint: 'Am äußeren Ende der Ellenbogenfalte.',
  },
  {
    id: 'li4',
    code: 'LI 4',
    name: 'Hegu',
    meridian: 'Dickdarm',
    xPercent: 24,
    yPercent: 49,
    hint: 'Auf dem Handrücken zwischen Daumen und Zeigefinger.',
  },
  {
    id: 'cv17',
    code: 'CV 17',
    name: 'Shanzhong',
    meridian: 'Konzeptionsgefäß',
    xPercent: 50,
    yPercent: 33,
    hint: 'Auf der Mitte des Brustbeins.',
  },
  {
    id: 'pc6',
    code: 'PC 6',
    name: 'Neiguan',
    meridian: 'Perikard',
    xPercent: 22,
    yPercent: 43,
    hint: 'Etwa drei Fingerbreit oberhalb der Handgelenksfalte.',
  },
  {
    id: 'st36',
    code: 'ST 36',
    name: 'Zusanli',
    meridian: 'Magen',
    xPercent: 43,
    yPercent: 74,
    hint: 'Unterhalb des Knies, seitlich neben dem Schienbein.',
  },
  {
    id: 'sp6',
    code: 'SP 6',
    name: 'Sanyinjiao',
    meridian: 'Milz',
    xPercent: 42,
    yPercent: 84,
    hint: 'Auf der Innenseite des Unterschenkels, oberhalb des Knöchels.',
  },
  {
    id: 'ki1',
    code: 'KI 1',
    name: 'Yongquan',
    meridian: 'Niere',
    xPercent: 45,
    yPercent: 96,
    hint: 'Im vorderen Drittel der Fußsohle.',
  },
]
