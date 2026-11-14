# Board Direction | Official Digital Color Guide

**Brand:** BOARD DIRECTION  
**Brand line:** RECENTER YOUR WHY.  
**Source:** *Board Direction Official Color Guide*, supplied November 14, 2026, two pages.  
**Status:** Official color standard. This is a faithful text reference to the supplied guide, not a replacement for its original PDF layout.

Use these exact values in future Board Direction website, email, presentation, and digital asset work. For print, the CMYK values below are **approximations**, and final colors must be checked with a physical press proof.

## Primary palette

| Name | HEX | RGB | Approximate CMYK | Existing CSS token | Intended use |
| --- | --- | --- | --- | --- | --- |
| White | `#FFFFFF` | 255, 255, 255 | 0, 0, 0, 0 | `--white` | Page backgrounds and negative space |
| Soft Gray | `#F5F6F5` | 245, 246, 245 | 0, 0, 0, 4 | `--soft` | Subtle section backgrounds |
| Charcoal | `#30383C` | 48, 56, 60 | 20, 7, 0, 76 | `--ink` | Titles, headings, and primary content |
| Brand Teal | `#24776E` | 36, 119, 110 | 70, 0, 8, 53 | `--teal` | Brand mark, calls to action, links, and accents |

## Supporting website colors

| Name | HEX | Existing CSS token |
| --- | --- | --- |
| Deep Charcoal | `#293136` | `--ink-deep` |
| Body Gray | `#626A6D` | `--body` |
| Dark Teal | `#1D5F57` | `--teal-dark` |
| Border Gray | `#E2E7E4` | `--line` |

## Exact utility colors in the website CSS

| Use | HEX | Guide's description |
| --- | --- | --- |
| Selection | `#D9EDE8` | Selected text background |
| Focus Ring | `#7DADA6` | Keyboard focus indicator |
| Outline Hover | `#EDF5F2` | Outline button hover background |
| Image Fallback | `#ECF0ED` | Boardroom image fallback surface |
| Input Border | `#D0D9D5` | Form field border |
| Form Note | `#737D7B` | Small form guidance text |
| Form Success | `#EFF6F3` | Successful form status surface |
| Footer Copy | `#71797B` | Footer small-print typography |

## Usage rules from the guide

- The **primary CTA** uses a Brand Teal fill (`#24776E`) and White text (`#FFFFFF`).
- The **outline CTA** uses a White fill (`#FFFFFF`) and Brand Teal text (`#24776E`).
- Use Charcoal for headings and primary content, and Body Gray for supporting copy.
- **Do not** use light border colors as body text.
- **Do not** place Brand Teal text on Charcoal.
- **Do not** use supporting gray for primary calls to action.
- Use exact HEX or RGB values for screen output.
- **No official Pantone match is specified.** The guide's CMYK equivalents are approximate.

### Accessibility: approved text pairings

The source guide labels each of these as **AA**:

| Text / background pairing | Contrast ratio in guide | Rating in guide |
| --- | ---: | --- |
| Charcoal on White | 11.95:1 | AA |
| Body Gray on White | 5.52:1 | AA |
| White on Brand Teal | 5.33:1 | AA |
| White on Dark Teal | 7.43:1 | AA |

These are the values stated in the supplied guide, not a new contrast audit. Do not infer that unlisted color combinations are approved.

## Existing website assets and application

- Approved arrow brand-mark SVG: [`../../assets/images/board-direction-mark-24776e.svg`](../../assets/images/board-direction-mark-24776e.svg).
- Current website design tokens and element styles: [`../../assets/css/style.css`](../../assets/css/style.css).
- The PDF features the Board Direction arrow-in-square mark, wordmark, and the line “RECENTER YOUR WHY.”
- Example headings in the guide use dark text; the teal accent is used for category labels and the brand mark.
- The color guide **does not specify** an official font family, type scale, grid, spacing system, logo clear space, or broader editorial voice. Do not invent those as official brand requirements.

## Reference for future work

Before adding colors or styling Board Direction assets, check this file and [`colors.json`](colors.json). Preserve the supplied brand palette and usage constraints. Changes to these standards should be deliberate and traceable to a revised official guide.

*Reference extracted from the user-provided two-page official guide, dated 14 NOV 2026.*
