---
title: Équation irrationnelle
order: 1
---
Soient $f$ et $g$ deux expressions réelles (voir [[racines|racines]]).
> [!property] Propriété
> $\sqrt{f(x)} = g(x) \iff g(x) \geq 0 \ \text{et}\ f(x) = g(x)^2$

La condition $f(x) \geq 0$ est alors automatique, car $f(x) = g(x)^2$.

> [!warning] Attention
> Élever au carré crée des solutions parasites : on **vérifie toujours** que $g(x) \geq 0$.
> Si l'équation est un quotient, on exclut aussi les $x$ qui annulent le dénominateur (**domaine de définition**).

### Exemples
- $\sqrt{-x^2 - x + 6} = -(x+1)$ impose $x \leq -1$, puis $2x^2 + 3x - 5 = 0$ donne $x = 1$ ou $-\dfrac{5}{2}$. Seule $-\dfrac{5}{2}$ convient.
- $\dfrac{x - 2(1 + \sqrt{x-1})}{2x - \sqrt{x-1} - 5} = 1$ se résout avec $u = \sqrt{x-1} \geq 0$ : on obtient $u^2 + u - 2 = 0$, donc $u = 1$ (l'autre racine est négative) et $x = 2$.
- $\sqrt{2(x^2 + 1)} = x - m$ impose $x \geq m$, puis $x^2 + 2mx + 2 - m^2 = 0$, de discriminant $8(m^2 - 1)$. Pour $m \leq -1$ on trouve $x = -m \pm \sqrt{2(m^2-1)}$ (les deux valeurs sont $\geq m$) ; pour $m > -1$, $S = \varnothing$.
- $\dfrac{2x + \sqrt{x+2}}{x - \sqrt{x+2}} = 1$ a pour domaine $[-2, +\infty[ \setminus \{2\}$ car $x = \sqrt{x+2}$ est identique à $x \geq 0$ et $x^2 = x + 2$, soit $x = 2$. L'équation est identique à $2\sqrt{x+2} = -x$, qui impose $x \leq 0$, puis $4(x+2) = x^2$ donne $x = 2 \pm 2\sqrt{3}$. Seule $2 - 2\sqrt{3}$ est dans $[-2, 0]$ : $S = \{2 - 2\sqrt{3}\}$.
