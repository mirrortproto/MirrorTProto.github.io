# mirrortproto.github.io

Enhanced mirror of the documentation sections of [core.telegram.org](https://core.telegram.org):
the **Telegram API**, the **MTProto protocol**, and the **TL schema**.
The site is built with [Eleventy](https://www.11ty.dev/) and published via GitHub Pages.

**Дата копии оригинального сайта / content snapshot date: `2026-08-23`** (3183 страницы / pages).

Каждая страница зеркала содержит ссылку на оригинал.

## Возможности / Features

- **Full-text search** over all pages (articles + constructor/method/type names) — a dedicated [search page](https://mirrortproto.github.io/search/) powered by [Pagefind](https://pagefind.app/) with a filter by section (Telegram API / MTProto / Schema); runs entirely in the browser. Hotkey `/` focuses the search box.
- **Anchors on every paragraph and heading** — hover a paragraph for the ¶ link, hover a heading for #.
- **Sidebar menu** with the pages of the current section + breadcrumbs on every page.
- **Three color themes**: system (default), light, dark — switcher in the header, choice persisted.
- **SEO & machine-readable**: `sitemap.xml`, `robots.txt`, canonical/OG/Twitter meta and JSON-LD
  breadcrumbs generated from the original page data; web manifest + SVG/PNG icons.
- **Accessibility**: semantic landmarks, skip-link, `aria-current`, `scope` on table headers,
  visible focus, `prefers-reduced-motion`, WCAG-AA link contrast.
- **Self-check**: `npm run check` validates links, h1/skip-link/canonical on every page,
  sitemap and robots.
- **Complete TL schema reference**: constructors, methods, types, methods by category, machine-readable JSON dumps.

## Требования / Requirements

- Node.js ≥ 18 (проверено на 24)
- npm

## Сборка / Build

```bash
npm install          # зависимости
npm run build        # собирает сайт в docs/ и строит поисковый индекс
```

Готовый сайт — в `docs/`. Локальный просмотр:

```bash
npx serve docs       # или любой статический сервер
npm run serve        # режим разработки: eleventy --serve → http://localhost:8080/
```

## Бэкап оригинала и конвейер / Backup & pipeline

Проект хранит полную копию скачанных страниц оригинала с датой снятия; **весь контент для сборки
извлекается только из бэкапа — сборка не обращается к сети**. Мета-описания и OG-теги страниц
генерируются из текста оригинала (первый абзац страницы), без добавления своего текста.

### Полная перегенерация сайта с нуля

```bash
# 1. Скачать свежую копию оригинала в backup/<дата>/ (единственный сетевой шаг).
#    Можно указать дату вручную: node tools/crawl.mjs 2026-12-31
npm run backup

# 2. Сгенерировать PNG-иконки (детерминированно, из кода):
npm run icons

# 3. Пересобрать сайт целиком из бэкапа:
npm run regenerate
#    = npm run extract   — очищает зеркальные каталоги в src/ (api/, mtproto/, schema/,
#                          constructor/, method/, type/ и т.д.), НЕ трогая служебные файлы
#                          (index.md, search.md, 404.md, css/, _includes/, _data/, иконки),
#                          и заново извлекает контент из backup/<последняя дата>/:
#                          HTML → markdown, заголовки, крошки, description из первого абзаца;
#    + npm run nav       — src/_data/nav.json (меню) и src/_data/site.json (дата бэкапа);
#    + npm run indexes   — индексные страницы /constructor/, /method/, /type/;
#    + npm run build     — eleventy (docs/) + поисковый индекс pagefind.
```

Старые бэкапы не удаляются; сборка всегда берёт последний по дате. После перегенерации
раздел «Полная структура сайта» ниже можно обновить командой:

```bash
node tools/print_structure.mjs
```

### Что делает каждый инструмент

| Скрипт | Назначение | Сеть |
|---|---|---|
| `tools/crawl.mjs` | снимает датированный бэкап `backup/<дата>/` (HTML + `manifest.json` с sha256) | да |
| `tools/extract.mjs` | извлекает контент из бэкапа в `src/` (markdown + front matter) | нет |
| `tools/gennav.mjs` | меню (`nav.json`) и дата бэкапа (`site.json`) | нет |
| `tools/genrefindexes.mjs` | алфавитные индексы конструкторов/методов/типов | нет |
| `tools/make_icons.py` | PNG-иконки (`icon-64.png`, `apple-touch-icon.png`) из кода | нет |
| `tools/print_structure.mjs` | список всех страниц для README | нет |
| `tools/verify.mjs` (`npm run check`) | самопроверка собранного сайта (ссылки, h1, meta, sitemap) | нет |

Готовый сайт — в `docs/`. Локальный просмотр:

```bash
npx serve docs       # или любой статический сервер
npm run serve        # режим разработки: eleventy --serve → http://localhost:8080/
```

## Публикация / GitHub Pages

1. `npm run build`
2. Закоммитьте изменения (включая `docs/` и `backup/`) в ветку `main`.
3. Settings → Pages → **Deploy from a branch**, ветка `main`, папка `/docs`.

Сайт будет доступен на [https://mirrortproto.github.io](https://mirrortproto.github.io).

## Структура репозитория / Repository layout

```
mirrortproto.github.io/
├── backup/
│   └── 2026-08-23/            # копия оригинала от 23.08.2026 (3183 страницы)
│       ├── manifest.json      # полный список страниц с sha256
│       ├── urls.txt
│       └── pages/             # сырые HTML-копии
├── docs/                      # собранный сайт (публикуется на GitHub Pages)
├── src/                       # исходники страниц (извлечены из бэкапа)
│   ├── _includes/layout.njk   # шаблон: шапка, меню, крошки, поиск, якоря
│   ├── _data/nav.json         # меню (генерируется: tools/gennav.mjs)
│   ├── css/style.css
│   ├── api/...                # раздел Telegram API
│   ├── mtproto/...            # раздел MTProto
│   ├── schema/...             # обзорные страницы схем + JSON-дампы
│   ├── constructor/...        # справочник конструкторов
│   ├── method/...             # справочник методов
│   ├── type/...               # справочник типов
│   └── index.md               # главная
├── tools/
│   ├── crawl.mjs              # снятие датированного бэкапа (сеть)
│   ├── extract.mjs            # извлечение контента из бэкапа (без сети)
│   ├── gennav.mjs             # меню + дата бэкапа
│   └── print_structure.mjs    # генерация списка страниц для README
├── eleventy.config.mjs        # конфигурация: якоря параграфов/заголовков, вывод в docs/
├── package.json               # скрипты: backup, extract, nav, build, serve, clean
└── README.md
```

## Полная структура сайта / Complete site structure

- **Главная** — `/` — Telegram API Documentation Mirror.
- **MTProto Protocol** — 23 страницы:
  - `/mtproto/` — MTProto Mobile Protocol
  - `/mtproto_v1/` — MTProto Mobile Protocol v.1.0 (DEPRECATED)
  - `/mtproto/auth_key/` — Creating an Authorization Key
  - `/mtproto/description/` — Mobile Protocol: Detailed Description
  - `/mtproto/description_v1/` — Mobile Protocol: Detailed Description (v.1.0, DEPRECATED)
  - `/mtproto/mtproto-transports/` — MTProto transports
  - `/mtproto/samples-auth_key/` — Auth key generation example
  - `/mtproto/security_guidelines/` — Security Guidelines for Client Developers
  - `/mtproto/security_guidelines_v1/` — Security Guidelines for Client Developers (v.1.0, DEPRECATED)
  - `/mtproto/serialize/` — Binary Data Serialization
  - `/mtproto/service_messages/` — Service Messages
  - `/mtproto/service_messages_about_messages/` — Service Messages about Messages
  - `/mtproto/TL/` — TL Language
  - `/mtproto/TL-abstract-types/` — Binary serialization and abstract TL types
  - `/mtproto/TL-combinators/` — Formal description of TL combinators
  - `/mtproto/TL-dependent/` — TL dependent types
  - `/mtproto/TL-formal/` — Formal TL declaration
  - `/mtproto/TL-optargs/` — Optional combinator parameters and their values
  - `/mtproto/TL-patterns/` — TL template types
  - `/mtproto/TL-polymorph/` — Polymorphism in TL
  - `/mtproto/TL-tl/` — TL schema for serialization of TL schemas
  - `/mtproto/TL-types/` — Type serialization
  - `/mtproto/transports/` — Transport protocols
- **Telegram API** — 130 страниц:
  - `/api/` — Telegram APIs
  - `/api/account-deletion/` — Account deletion
  - `/api/action-bar/` — Action bar
  - `/api/age-verification/` — Age verification
  - `/api/ai/` — AI features
  - `/api/animated-emojis/` — Animated Emojis
  - `/api/antispam/` — Native antispam system
  - `/api/auctions/` — Collectible gift auctions
  - `/api/auth/` — User Authorization
  - `/api/block/` — Blocked users
  - `/api/boost/` — Channel and supergroup boosts
  - `/api/bots/` — Working with bots
  - `/api/bots/ai/` — AI features for bots
  - `/api/bots/attach/` — Bot attachment menu and side menu entries
  - `/api/bots/bot-to-bot/` — Bot-to-bot communication
  - `/api/bots/buttons/` — Bot buttons
  - `/api/bots/commands/` — Bot commands
  - `/api/bots/connected-business-bots/` — Connected business bots
  - `/api/bots/games/` — HTML5 games
  - `/api/bots/guest-mode/` — Guest mode for bots
  - `/api/bots/ids/` — Bot API dialog IDs
  - `/api/bots/info/` — Edit bot information
  - `/api/bots/inline/` — Inline queries
  - `/api/bots/managed-bots/` — Managed bots
  - `/api/bots/menu/` — Bot menu button
  - `/api/bots/referrals/` — Affiliate programs
  - `/api/bots/verification/` — Third-party verification
  - `/api/bots/webapps/` — Mini Apps on Telegram
  - `/api/business/` — Telegram Business
  - `/api/calls/` — Phone calls
  - `/api/channel/` — Channels, supergroups, gigagroups and basic groups
  - `/api/colors/` — Accent colors
  - `/api/config/` — Client configuration
  - `/api/config.json/` — config.json (машиночитаемые данные)
  - `/api/contacts/` — Contact list
  - `/api/content-protection/` — Content protection
  - `/api/custom-emoji/` — Custom emojis
  - `/api/datacenter/` — Working with Different Data Centers
  - `/api/dice/` — Animated dice
  - `/api/discussion/` — Discussion groups
  - `/api/drafts/` — Message drafts
  - `/api/effects/` — Animated message effects
  - `/api/emoji-categories/` — Emoji categories
  - `/api/emoji-status/` — Emoji status
  - `/api/end-to-end/` — End-to-End Encryption, Secret Chats
  - `/api/end-to-end_v1/` — Secret chats, end-to-end encryption (v. 1.0, DEPRECATED)
  - `/api/end-to-end/group-calls/` — E2E Group Calls
  - `/api/end-to-end/pfs/` — Perfect Forward Secrecy
  - `/api/end-to-end/seq_no/` — Sequence numbers in Secret Chats
  - `/api/end-to-end/video-calls/` — End-to-End Encrypted Voice and Video Calls
  - `/api/end-to-end/voice-calls/` — End-to-End Encrypted Voice Calls
  - `/api/entities/` — Styled text with message entities
  - `/api/errors/` — Error handling
  - `/api/errors.json/` — errors.json (машиночитаемые данные)
  - `/api/factcheck/` — Fact checks
  - `/api/file-reference-generator/` — File reference generator
  - `/api/file-references/` — File references
  - `/api/file-references/db-schema/` — DB schema
  - `/api/file-references/incoming-traversers/` — Incoming file reference traversers
  - `/api/file-references/map-schema/` — File reference map file schema
  - `/api/file-references/outgoing-traversers/` — Outgoing file reference traversers
  - `/api/file-references/refresh-actions/` — Refresh actions
  - `/api/file-references/sources/` — File reference sources
  - `/api/files/` — Uploading and Downloading Files
  - `/api/folders/` — Dialog folders
  - `/api/forum/` — Forum topics
  - `/api/fragment/` — Fragment collectibles
  - `/api/gifs/` — Working with GIFs
  - `/api/gifts/` — Telegram Gifts
  - `/api/giveaways/` — Giveaways and gifts
  - `/api/group-calls/` — Group calls
  - `/api/import/` — Imported messages
  - `/api/invites/` — Invite links
  - `/api/invoking/` — Calling API Methods
  - `/api/layers/` — Layer changelog
  - `/api/links/` — Deep links
  - `/api/live-location/` — Live geolocation
  - `/api/mentions/` — Mentions and replies
  - `/api/min/` — Min constructors
  - `/api/monoforum/` — Direct messages to channels
  - `/api/nearby/` — Nearby users&chats
  - `/api/obtaining_api_id/` — Creating your Telegram Application
  - `/api/offsets/` — Pagination in the API
  - `/api/optimisation/` — Client-Side Optimization
  - `/api/paid-media/` — Paid media
  - `/api/paid-messages/` — Paid messages
  - `/api/passkeys/` — Passkey login
  - `/api/passport/` — Telegram passport
  - `/api/pattern/` — Pattern matching
  - `/api/payments/` — Payments API
  - `/api/peers/` — Peer database
  - `/api/pfs/` — Perfect Forward Secrecy
  - `/api/pin/` — Pinned messages
  - `/api/poll/` — Polls and quizzes
  - `/api/premium/` — Telegram Premium
  - `/api/privacy/` — Privacy settings
  - `/api/profile/` — User profiles
  - `/api/push-updates/` — Handling PUSH-notifications
  - `/api/qr-login/` — Login via QR code
  - `/api/rank/` — Rank
  - `/api/reactions/` — Message reactions
  - `/api/recent-actions/` — Admin log
  - `/api/recommend/` — Similar channels and bots
  - `/api/revenue/` — Channel and bot ad revenue
  - `/api/rights/` — Admin, banned, default rights
  - `/api/ringtones/` — Notification sounds
  - `/api/saved-messages/` — Saved messages
  - `/api/scheduled-messages/` — Scheduled messages
  - `/api/search/` — Search and filters
  - `/api/sponsored-messages/` — Sponsored messages
  - `/api/srp/` — Two-factor authentication
  - `/api/stars/` — Telegram Stars
  - `/api/stats/` — Channel statistics
  - `/api/stickers/` — Stickers and masks
  - `/api/stories/` — Telegram Stories
  - `/api/subscriptions/` — Star subscriptions
  - `/api/suggested-posts/` — Suggested posts
  - `/api/takeout/` — Takeout API
  - `/api/terms/` — Telegram API Terms of Service
  - `/api/themes/` — Telegram themes
  - `/api/threads/` — Message threads
  - `/api/todo/` — Checklists and to-do lists
  - `/api/top-rating/` — Top peer rating
  - `/api/transcribe/` — Voice message transcription
  - `/api/translation/` — Message translation
  - `/api/updates/` — Working with Updates
  - `/api/url-authorization/` — Seamless Telegram Login
  - `/api/views/` — Views and read metrics
  - `/api/wallpapers/` — Chat wallpapers
  - `/api/web-events/` — Web events
- **Schema (обзорные страницы)** — 7 страниц:
  - `/methods/` — Available methods (методы по категориям)
  - `/schema/` — Schema
  - `/schema/end-to-end/` — Current end-to-end TL-schema
  - `/schema/end-to-end-json/` — end-to-end-json (машиночитаемые данные)
  - `/schema/json/` — json (машиночитаемые данные)
  - `/schema/mtproto/` — Current MTProto TL-schema
  - `/schema/mtproto-json/` — mtproto-json (машиночитаемые данные)
- **Справочник схемы** — 3022 страницы: 1615 конструкторов (`/constructor/<имя>/`),
  787 методов (`/method/<имя>/`), 620 типов (`/type/<имя>/`); индексы:
  `/constructor/`, `/method/`, `/type/`.
- **Other** (ссылки в боковом меню и на главной, вне верхних разделов):
  - `/faq/` — Telegram FAQ для обычных пользователей (единственное исключение: страница
    скачана с telegram.org, а не с core.telegram.org; добавлена в бэкап вручную);
  - `/techfaq/` — FAQ for the Technically Inclined;
  - `/techfaq/mtproto_v1/` — FAQ for the Technically Inclined (MTProto v.1.0), «Advanced FAQ» оригинальной документации v1.

Итого: **3186 страниц** в копии от 23.08.2026 (включая три FAQ-страницы) + служебные страницы сайта.

## Права

Оригинальные тексты и схема принадлежат Telegram (core.telegram.org); каждая страница зеркала
ссылается на первоисточник. Машинные копии страниц хранятся в `backup/` с датой снятия и
контрольными суммами.
