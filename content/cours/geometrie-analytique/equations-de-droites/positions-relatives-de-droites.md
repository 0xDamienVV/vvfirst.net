---
title: Positions relatives de droites
order: 3
---
Soient $d : ax + by = c$ et $d' : a'x + b'y = c'$ deux droites de $\mathbb{R}^2$.
> [!definition] Trois cas
> - **Sécantes** (un seul point commun) si $ab' - a'b \neq 0$.
> - **Parallèles disjointes** si $ab' - a'b = 0$ et que les équations ne sont pas proportionnelles.
> - **Confondues** si $(a', b', c')$ est proportionnel à $(a, b, c)$.

Le critère $ab' - a'b = 0$ exprime la [[colinearite-en-coordonnees|colinéarité]] des vecteurs normaux.

>[!property] Perpendiculaires
> Dans un repère **orthonormé**, $d$ et $d'$ sont perpendiculaires si et seulement si $aa' + bb' = 0$ ([[orthogonalite|orthogonalité]] des vecteurs normaux).

### Exemples
- $x + 3y = 7$ et $2x - y = 1$ sont sécantes car $1 \cdot (-1) - 2 \cdot 3 = -7 \neq 0$.
- $2x - 4y = 7$ et $\begin{cases} x = \tfrac{1}{2} - t \\ y = 1 + 2t \end{cases}$ (donc $2x + y = 2$) sont perpendiculaires car $2 \cdot 2 + (-4)\cdot 1 = 0$.
- $x + 2y = 1$ et $2x + 4y = 3$ sont parallèles disjointes car $1 \cdot 4 - 2 \cdot 2 = 0$ et $(2, 4, 3)$ n'est pas proportionnel à $(1, 2, 1)$.
