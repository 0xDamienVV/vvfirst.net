---
title: Position des racines
order: 3
---
Soit $P(x) = ax^2 + bx + c$ avec $a \neq 0$ et $\alpha \in \mathbb{R}$.
> [!property] Propriété
> - $\alpha$ est **strictement entre** deux racines $x_1 < x_2$ de $P$ si et seulement si $a\,P(\alpha) < 0$.
> - $\alpha$ est **strictement à l'extérieur** des racines (de $P$ avec $\Delta > 0$) si et seulement si $a\,P(\alpha) > 0$.

> [!property] Racine entre deux valeurs
> Si $P(\alpha)\,P(\beta) < 0$, alors $P$ a une racine **entre** $\alpha$ et $\beta$.

> [!property] Deux racines du même côté de $\alpha$
> Si $\Delta > 0$ : $x_1, x_2 < \alpha \iff a\,P(\alpha) > 0$ et $x_S < \alpha$, et $x_1, x_2 > \alpha \iff a\,P(\alpha) > 0$ et $x_S > \alpha$, où $x_S = -\dfrac{b}{2a}$ est l'abscisse du sommet. Pour inclure $\alpha$ ($x_1, x_2 \leq \alpha$), on remplace $a\,P(\alpha) > 0$ par $a\,P(\alpha) \geq 0$.

Ces conditions découlent du [[trinome-du-second-degre#signe|signe du trinôme]] : $P$ a le signe de $-a$ entre les racines.

### Exemples
- Si $a < 0$, $\Delta > 0$, $P(1) > 0$ et $P(-1) < 0$, alors $-1 < x_1 < 1 < x_2$ car $P(1) > 0$ et $a < 0$ donnent $1$ entre les racines, et $P(-1) < 0$ donne $-1$ à l'extérieur, donc à gauche de $x_1$ (la racine entre $-1$ et $1$ est $x_1$).
- Si $a > 0$ et $x_1 < -1 < x_2 < 0$, alors $\Delta > 0$, $P(-1) < 0$ et $\dfrac{c}{a} = x_1x_2 > 0$ (voir [[relations-de-viete|relations de Viète]]) car $x_1 < 0$ et $x_2 < 0$.
- $(m-1)x^2 - 2(m+1)x + 2m - 1 = 0$ a deux racines avec $-6 < x_1 < 4 < x_2$ si $m \in \left]1, \tfrac{5}{2}\right[$, car on exige $4$ entre les racines et $-6$ à l'extérieur (donc à gauche de $x_1$) :
  - $P(4) = 10m - 25$ et $P(-6) = 50m - 25$,
  - $a = m - 1 > 0$ : $P(4) < 0$ et $P(-6) > 0$ donnent $\tfrac{1}{2} < m < \tfrac{5}{2}$, soit $m \in \left]1, \tfrac{5}{2}\right[$,
  - $a = m - 1 < 0$ : $P(4) > 0$ et $P(-6) < 0$ donnent $m > \tfrac{5}{2}$ et $m < \tfrac{1}{2}$, impossible.
