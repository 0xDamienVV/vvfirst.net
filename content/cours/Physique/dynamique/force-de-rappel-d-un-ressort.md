---
title: Force de rappel d'un ressort
order: 9
---
> [!definition] Loi de Hooke
> Un **ressort** de **longueur au repos** $\ell_0$ et de **constante de raideur** $k$ (en $\text{N m}^{-1}$), déformé de $\vec{d}$ (**allongement** si $\ell > \ell_0$, **compression** si $\ell < \ell_0$), exerce la **force de rappel** :
> $\vec{F} = -k\vec{d}$

> [!property] Remarque
> On écrit $\ell = \ell_0 + d$ avec $d \in \mathbb{R}$ : $d > 0$ pour un allongement et $d < 0$ pour une compression.

### Exemples
- Une masse $m$ suspendue à un ressort est en équilibre quand $mg = kd$, donc $d = \dfrac{mg}{k}$.
- Deux ressorts identiques en série avec deux masses $m_1$ (en haut) et $m_2$ (en bas) : $d_2 = \dfrac{m_2 g}{k}$ pour le ressort du bas et $d_1 = \dfrac{(m_1 + m_2)g}{k}$ pour celui du haut.
- Un bloc de masse $m$ et de hauteur $h$ maintenu entre le sol et un plafond à la hauteur $H$ par deux ressorts identiques : $d_1 + d_2 = H - 2\ell_0 - h$ et $k d_1 - k d_2 = -mg$ donnent $d_{1,2} = \dfrac{1}{2k}\bigl(k(H - 2\ell_0 - h) \mp mg\bigr)$, avec toujours $d_1 < d_2$.
