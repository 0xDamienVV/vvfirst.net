---
title: Inéquation irrationnelle
order: 2
---
Soient $f$ et $g$ deux expressions réelles (voir [[equation-irrationnelle|équation irrationnelle]]).
> [!property] Propriété
> $\sqrt{f(x)} < g(x) \iff f(x) \geq 0,\ g(x) > 0 \ \text{et}\ f(x) < g(x)^2$  
> $\sqrt{f(x)} > g(x) \iff \bigl(g(x) < 0 \ \text{et}\ f(x) \geq 0\bigr) \ \text{ou}\ \bigl(g(x) \geq 0 \ \text{et}\ f(x) > g(x)^2\bigr)$

Les inégalités larges se traitent de la même façon.

### Exemples
- $\sqrt{4 - x^2} \geq x$ a pour domaine $[-2, 2]$. Pour $x < 0$ tout $x \in [-2, 0[$ convient car une racine est positive. Pour $x \geq 0$, on élève au carré : $4 - x^2 \geq x^2$ donne $x \leq \sqrt{2}$. Donc $S = [-2, \sqrt{2}]$.
- $x - 3 > \sqrt{x^2 + 3x}$ impose $x > 3$, puis $x^2 + 3x < (x-3)^2$ donne $9x < 9$, donc $x < 1$. Les conditions sont incompatibles : $S = \varnothing$.
- $\sqrt{\dfrac{x^2(2x-5)}{2(x+1)}} \geq 2 - x$ : le radicande est positif si $x < -1$, $x \geq \dfrac{5}{2}$ ou $x = 0$.
  - Pour $x > 2$ le second membre est négatif : tout $x \geq \dfrac{5}{2}$ convient.
  - Pour $x \leq 2$ on élève au carré : pour $x < -1$ cela donne $x^2 \leq 8$, donc $x \in [-2\sqrt{2}, -1[$ ; $x = 0$ ne convient pas.

  Donc $S = [-2\sqrt{2}, -1[ \cup \left[\dfrac{5}{2}, +\infty\right[$.
