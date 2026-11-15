---
title: Inéquation avec valeur absolue
order: 3
---
Soient $f$ et $g$ deux expressions réelles et $r \in \mathbb{R}$ (voir [[valeur-absolue|valeur absolue]] et [[intervalles|intervalles]]).
> [!property] Propriété
> $|f(x)| < g(x) \iff -g(x) < f(x) < g(x)$  
> $|f(x)| > g(x) \iff f(x) > g(x) \ \text{ou}\ f(x) < -g(x)$  
> $|x - a| < r \iff x \in ]a - r, a + r[$ pour $r > 0$

Les inégalités larges ($\leq$, $\geq$) se traitent de la même façon.

> [!warning] Attention
> Si $g(x) \leq 0$, alors $|f(x)| < g(x)$ n'a aucune solution, et $|f(x)| > g(x)$ est vraie dès que les expressions sont définies.

### Exemples
- $|2x - 1| < m$ n'a aucune solution si $m \leq 0$ et a pour solution $\left]\dfrac{1 - m}{2}, \dfrac{1 + m}{2}\right[$ si $m > 0$.
- $\bigl|1 - |x - m|\bigr| \leq |x - m|$ est identique à $|x - m| \geq \dfrac{1}{2}$ car, en posant $t = |x - m| \geq 0$, $|1 - t| \leq t$ est identique à $-t \leq 1 - t \leq t$, soit $t \geq \dfrac{1}{2}$. Donc $S = \left]-\infty, m - \dfrac{1}{2}\right] \cup \left[m + \dfrac{1}{2}, +\infty\right[$.
- $|mx| \leq x + m$ est identique au système $(m-1)x \leq m$ et $(m+1)x \geq -m$ car $|f| \leq g \iff -g \leq f \leq g$. On discute le signe de $m - 1$ et $m + 1$ : $S = \varnothing$ si $m \leq -1$, $S = \left[-\dfrac{m}{m+1}, +\infty\right[$ si $-1 < m < 1$, $S = \left[-\dfrac{1}{2}, +\infty\right[$ si $m = 1$ et $S = \left[-\dfrac{m}{m+1}, \dfrac{m}{m-1}\right]$ si $m > 1$.
- $\left|\dfrac{x-1}{x+1}\right| < x - 1$ impose $x > 1$ ; alors $\dfrac{x-1}{x+1} < x - 1$ est vérifiée car $x + 1 > 1$, donc $S = ]1, +\infty[$.
- $|x^2 + 3x - 1| \geq x^2 + x + 1$ se ramène à $2x \geq 2$ ou $2x^2 + 4x \leq 0$ car $x^2 + x + 1 > 0$ : $S = [-2, 0] \cup [1, +\infty[$.
