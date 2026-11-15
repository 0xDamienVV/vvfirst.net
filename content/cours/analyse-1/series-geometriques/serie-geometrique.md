---
title: Série géométrique
order: 2
---
Soit $r \in \mathbb{R}$ avec $|r| < 1$ (voir [[valeur-absolue|valeur absolue]] et [[suite-geometrique|suite géométrique]]).
> [!property] Somme d'une série géométrique
> $\displaystyle\sum_{k=0}^{\infty} r^k = \lim_{n \to \infty}\dfrac{1 - r^n}{1 - r} = \dfrac{1}{1 - r}$  
> Plus généralement, la somme d'une suite géométrique de premier terme $u$ et de raison $r$ est $\dfrac{u}{1 - r}$.

La suite $r^n$ tend vers $0$ car $|r| < 1$ (voir [[croissances-comparees|croissances comparées]]).

### Exemples
- $1 + \dfrac{1}{3} + \dfrac{1}{9} + \dots = \dfrac{1}{1 - 1/3} = \dfrac{3}{2}$.
- $1 - \dfrac{1}{2} + \dfrac{1}{4} - \dots = \dfrac{1}{1 + 1/2} = \dfrac{2}{3}$ car la raison est $-\dfrac{1}{2}$.
- $\sqrt{2} + \dfrac{\sqrt{2}}{\pi} + \dfrac{\sqrt{2}}{\pi^2} + \dots = \dfrac{\sqrt{2}}{1 - 1/\pi} = \dfrac{\sqrt{2}\,\pi}{\pi - 1}$.
- $\dfrac{1}{25} + \dfrac{1}{125} + \dots = \dfrac{1/25}{1 - 1/5} = \dfrac{1}{20}$.
- $-2p^4 + 2p^5 - 2p^6 + \dots = \dfrac{-2p^4}{1 + p}$ pour $0 < p < 1$ car la raison est $-p$.
- Une balle lancée à $h_1 = 5$ m rebondit à $h_{k+1} = 0{,}81\,h_k$. Une chute de hauteur $h$ dure $\sqrt{2h/g} = \sqrt{h/5}$ s, donc le cycle $k$ dure $2\sqrt{p^{k-1}} = 2 \cdot 0{,}9^{k-1}$ s et le temps total vaut $\dfrac{2}{1 - 0{,}9} = 20$ s.
- Dans un carré de côté $a$, le carré inscrit a pour côté $\dfrac{a\sqrt{10}}{4}$, donc une aire multipliée par $\dfrac{5}{8}$. L'aire grisée à l'étape $n$ est $A_n = a^2\sum_{k=0}^{n-1}\left(-\dfrac{5}{8}\right)^k = a^2\,\dfrac{1 - (-5/8)^n}{13/8}$, qui tend vers $\dfrac{8}{13}a^2$.
