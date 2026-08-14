# Portfolio assets

Drop these five PNGs here, exactly as named. They come from the Claude Design
project (`assets/` folder) at:

https://claude.ai/design/p/2b59a3dc-d0a2-46a1-b43a-addd5fa3ca06

| File               | Used by            | Notes                                    |
| ------------------ | ------------------ | ---------------------------------------- |
| `nawaf.png`        | Hero portrait      | 1024 × 1536 (2:3) — aspect ratio is fixed in CSS |
| `about-office.png` | About section      | Full-width in its column                 |
| `zill-home.png`    | Zill feature       | App screenshot                           |
| `zill-replies.png` | Zill feature       | App screenshot                           |
| `english-cert.png` | Education section  | Rendered on a white background           |

They could not be pulled through the design MCP: `get_file` caps reads at
256 KiB and every one of these exceeds it, so they come back truncated.
