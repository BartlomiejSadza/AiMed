# AI MED

Landing page koła naukowego AI MED AGH.

## Wymagania

- `Node.js 22` (zgodnie z CI)
- `npm` (lub inny package manager do Node.js)

## Instalacja i uruchomienie

```bash
npm install
npm run dev
```

> Warto pamiętać, że `npm run dev` uruchamia stronę w wersji deweloperskiej, jedynie do celów testowych.

### Dodatkowe komendy (po instalacji)

- `npm run build` buduje stronę pod deployment.
- `npm run preview` uruchamia lokalny serwer do podglądu zbudowanej strony (jedynie po `npm run build`).
- `npm run test` uruchamia testy ilościowe w watch mode, czekając na zmiany kodu.
- `npm run test:run` uruchamia testy ilościowe jednokrotnie.
- `npm run lint` sprawdza kod pod kątem błędów i niespójności.
- `npm run format:check` sprawdza, czy kod jest sformatowany zgodnie z ustalonym stylem.
- `npm run format` formatuje kod zgodnie z ustalonym stylem.

## Zasada pracy zespołowej

1. Utwórz branch od aktualnego `main`.
2. Wprowadź zmiany i przetestuj lokalnie.
3. Pushnij branch na zdalne repo.
4. Otwórz PR do `main`.
5. Po review i zielonym CI merguj PR.

## Najczęstsze problemy

- Brak `node_modules` lub błąd typu command not found:

  ```bash
  npm install
  ```

- Niewłaściwa wersja Node:

  ```bash
  node -v
  ```

  Użyj `Node 22`, potem ponownie uruchom `npm install`.

- Błędy po zmianie zależności:

  ```bash
  rm -rf node_modules package-lock.json
  npm install
  ```

  Usuń folder `node_modules` i plik `package-lock.json`, a następnie ponownie zainstaluj zależności.
