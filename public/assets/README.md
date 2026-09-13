# Portfolio assets

Images and files used by the portfolio page. They come from the Claude Design
project (`assets/` folder) at:

https://claude.ai/design/p/2b59a3dc-d0a2-46a1-b43a-addd5fa3ca06

| File                          | Used by            | Notes                                            |
| ----------------------------- | ------------------ | ------------------------------------------------ |
| `nawaf.png`                   | Hero portrait      | 1024 × 1536 (2:3) — aspect ratio is fixed in CSS |
| `about-office.png`            | About section      | Full-width in its column                         |
| `zill-home.png`               | Zill feature       | App screenshot                                   |
| `zill-replies.png`            | Zill feature       | App screenshot                                   |
| `english-cert.png`            | Certificates grid  | Rendered on a white background                   |
| `certs/*.png`                 | Certificates grid  | Names listed in `src/data/portfolio.ts` (`certs`) |

A cert image that is missing from `certs/` renders as a placeholder tile (and
isn't clickable) — drop the PNG in with the matching name and rebuild.

Large files can't be pulled through the design MCP: `get_file` caps reads at
256 KiB, so anything bigger comes back truncated and has to be added by hand.
