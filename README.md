# kyuLearn

Ein schlankes, responsives Akupunkturpunkte-Quiz mit React, TypeScript und Vite.

## Lokal starten

```sh
npm install
npm run dev
```

Für einen Produktionsbuild:

```sh
npm run build
npm run preview
```

## Bild und Punkte anpassen

- Ersetze `public/acupuncture-body.svg` durch ein eigenes Bild. Passe bei Bedarf den `src`-Pfad in `src/components/QuizBoard.tsx` an.
- Ergänze oder bearbeite Punkte in `src/data/acupuncturePoints.ts`. Jeder Punkt enthält `id`, `code`, `name`, `meridian`, `xPercent`, `yPercent` und `hint`.
- `xPercent` und `yPercent` geben die Position relativ zum Bild an (0–100). Richte sie an der Bildgröße aus; die Marker bleiben so beim Skalieren an ihrer Position.

Die Beispielpunkte und Körpergrafik sind schematisch und dienen nur Lernzwecken.
