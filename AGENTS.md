# Repository Guidelines

## Project Structure & Module Organization
This repository is a pure static website for ClutchReframe Clips.
- Root pages: `index.html` (landing), `privacy.html`, `terms.html`.
- Static asset: `og-image.png` (social preview image).
- Deployment/config files: `CNAME`, `.nojekyll`, `riot.txt`.
- Documentation: `docs/` (domain setup and Riot submission notes).

Keep changes focused on these root HTML pages and update related legal/config files when copy, URLs, or platform requirements change.

## Build, Test, and Development Commands
There is no build pipeline, package manager, or framework.
- `python -m http.server 8080`  
  Start a local server for preview at `http://localhost:8080`.
- `rg --files`  
  Quick inventory of tracked files before editing.
- `curl -I http://localhost:8080/privacy.html`  
  Spot-check that key pages return `200 OK` while testing locally.

## Coding Style & Naming Conventions
- Use 4-space indentation in HTML/CSS.
- Keep page-specific CSS inline inside each page’s `<style>` block (current project pattern).
- Reuse existing CSS variables (for example `--cyan`, `--purple`, `--bg`) before introducing new theme tokens.
- Keep filenames lowercase and descriptive (`privacy.html`, `terms.html`).
- Preserve consistent metadata across pages: canonical URL, Open Graph/Twitter tags, and brand naming.

## Testing Guidelines
Automated tests are not configured; use manual verification per change:
- Load `index.html`, `privacy.html`, `terms.html`, and `riot.txt` locally.
- Check responsive behavior around the 768px breakpoint.
- Verify nav/footer links and policy URLs are correct.
- For content/legal updates, confirm wording is synchronized between page body and metadata.

## Commit & Pull Request Guidelines
History favors short, direct commit messages (often concise Chinese phrases) describing the actual change. Follow the same style:
- One logical change per commit.
- Clear action-oriented summary (for example, “更新隐私政策文案” or “Fix hero section spacing”).

For PRs, include:
- What changed and why.
- Affected files/pages.
- Screenshots for UI/layout updates (desktop + mobile).
- Any domain/config implications (`CNAME`, `riot.txt`, policy URLs).

## Security & Configuration Tips
- Never commit secrets or private keys.
- Keep `CNAME` exactly aligned with the production domain.
- Treat `riot.txt` as verification-critical; update carefully and only when required by Riot.
