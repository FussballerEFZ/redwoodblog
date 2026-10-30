# Redwood Blog – M245 Aufgabe 7

Minimaler Blog, gebaut mit dem offiziellen [RedwoodJS-Tutorial](https://redwoodjs.com/docs/tutorial/foreword) im Rahmen von Modul 245, Aufgabe 7 („React-Frameworks vergleichen und bewerten“).

## Links

- **Repository:** https://github.com/FussballerEFZ/redwoodblog
- **Web (Render, Static Site):** https://redwoodblog-web-o7ve.onrender.com
- **API (Render, Web Service):** https://redwoodblog-api-jhdg.onrender.com/graphql
- **Dokumentation (Matrizen, Lighthouse, Takeaways):** Notion, Modul 245

## Funktionen

| Anforderung       | Umsetzung                                            |
| ----------------- | ---------------------------------------------------- |
| Liste der Beiträge | `/` (`HomePage` → `ArticlesCell`)                   |
| Detailansicht     | `/article/{id}` (`ArticlePage` → `ArticleCell`)      |
| Formular zum Anlegen | `/posts/new` (Scaffold, CRUD unter `/posts`)      |

## Tech-Stack

- RedwoodJS (React, GraphQL, Prisma)
- PostgreSQL (lokal via Docker, in Produktion Render Postgres)
- Deployment: Render Blueprint (`render.yaml`), Region Frankfurt, Free Plan

## Lokal starten

Voraussetzungen: Node.js 20, Yarn (via `corepack enable`), Docker.

```bash
docker compose up -d          # Postgres auf Port 5434
yarn install
yarn rw prisma migrate dev    # Tabellen anlegen
yarn rw dev                   # http://localhost:8910
```

Tests: `yarn rw test`

## Deployment (Render)

Das Projekt wird über `render.yaml` als Blueprint deployt:

- `redwoodblog-web`: Static Site, leitet `/.redwood/functions/*` an die API weiter
- `redwoodblog-api`: Node-Service mit Health-Check `/healthz`
- `redwoodblog-db`: Postgres-Datenbank

Kosten: alles im Free Plan, also 0 CHF. Auf dem Free Plan schläft die API nach Inaktivität ein; die erste Anfrage dauert dann bis zu etwa einer Minute.
