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

> Warto pamietac, ze `npm run dev` uruchamia strone w wersji deweloperskiej, jedynie do celow testowych.

### Dodatkowe komendy (po instalacji)

- `npm run build` buduje strone pod deployment.
- `npm run test` uruchamia testy ilosciowe w watch mode, czekajac na zmiany kodu.
- `npm run test:run` uruchamia testy ilosciowe jednokrotnie.
- `npm run lint` sprawdza kod pod katem bledow i niespojnosci.
- `npm run format:check` sprawdza, czy kod jest sformatowany zgodnie z ustalonym stylem.
- `npm run format` formatuje kod zgodnie z ustalonym stylem.

## Zasada pracy zespolowej

1. Utworz branch od aktualnego `main`.
2. Wprowadz zmiany i przetestuj lokalnie.
3. Pushnij branch na zdalne repo.
4. Otworz PR do `main`.
5. Po review i zielonym CI merguj PR.

## Najczestsze problemy

- Brak `node_modules` lub blad typu command not found:

  ```bash
  npm install
  ```

- Niewlasciwa wersja Node:

  ```bash
  node -v
  ```

  Uzyj `Node 22`, potem ponownie uruchom `npm install`.

- Bledy po zmianie zaleznosci:

  ```bash
  rm -rf node_modules package-lock.json
  npm install
  ```

  Usun folder `node_modules` i plik `package-lock.json`, a nastepnie ponownie zainstaluj zaleznosci.
