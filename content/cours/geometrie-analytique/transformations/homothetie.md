---
title: Homothétie
order: 3
---
Soient $\Omega$ un point et $k \in \mathbb{R}^*$.
> [!definition] Définition
> L'**homothétie** de centre $\Omega$ et de rapport $k$, notée $h_{\Omega, k}$, associe à $M$ le point $M'$ tel que $\overrightarrow{\Omega M'} = k\,\overrightarrow{\Omega M}$ (voir [[multiplication-par-un-scalaire|multiplication par un scalaire]]).  
> Expression analytique : $\begin{cases} x' = kx + (1-k)\,x_\Omega \\ y' = ky + (1-k)\,y_\Omega \end{cases}$

>[!property] Remarque
> - Si $k \neq 1$, le centre $\Omega$ est le seul point fixe.
> - $\overrightarrow{M'N'} = k\,\overrightarrow{MN}$ : les distances sont multipliées par $|k|$.
> - L'image d'une droite est une droite parallèle (confondue si elle passe par $\Omega$).
> - $k = -1$ est la **symétrie centrale** : $\Omega$ est le milieu de $[MM']$.

### Exemples
- $\begin{cases} x' = -3x + 4 \\ y' = -3y - 8 \end{cases}$ est $h_{\Omega, -3}$ avec $\Omega(1,-2)$ car c'est le point fixe ($x = -3x + 4$ et $y = -3y - 8$).
- $h_{B,2}$ avec $B(1,-3)$ s'écrit $\begin{cases} x' = 2x - 1 \\ y' = 2y + 3 \end{cases}$, et l'image de $d : 2x + y = 1$ est $2x + y = 3$.
- Pour un segment $[AB]$ de milieu $I$ et de longueur $4$, $h_{I,\alpha}(A)$ est le milieu de $[BI]$ si $\alpha = -\tfrac{1}{2}$.
