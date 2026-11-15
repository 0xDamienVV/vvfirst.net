---
title: Équation avec valeur absolue
order: 2
---
Soient $f$ et $g$ deux expressions réelles et $|\cdot|$ la [[valeur-absolue|valeur absolue]].
> [!property] Propriété
> $|f(x)| = g(x) \iff g(x) \geq 0 \ \text{et}\ \bigl(f(x) = g(x) \ \text{ou}\ f(x) = -g(x)\bigr)$  
> $|f(x)| = |g(x)| \iff f(x) = g(x) \ \text{ou}\ f(x) = -g(x)$

> [!warning] Attention
> La condition $g(x) \geq 0$ est **obligatoire** : sans elle on obtient des solutions qui ne conviennent pas.

### Exemples
- $|-x + 4| = -\dfrac{3}{x}$ impose $x < 0$. Alors $-x + 4 = -\dfrac{3}{x}$ donne $x = 2 \pm \sqrt{7}$ et $-x + 4 = \dfrac{3}{x}$ donne $x = 1$ ou $3$. Seule $2 - \sqrt{7}$ est négative : $S = \{2 - \sqrt{7}\}$.
- $|x^3 - 2x^2 - 4x + 3| = (x^2 + 1)(x - 3)$ impose $x \geq 3$. Le cas $+$ donne $x^2 - 5x + 6 = 0$, soit $x = 2$ ou $3$ ; le cas $-$ donne $x(2x^2 - 5x - 3) = 0$, soit $x = 0$, $3$ ou $-\dfrac{1}{2}$. Seule $3$ convient : $S = \{3\}$.
- $|3x - m + 6| = 3x - 3m$ impose $x \geq m$. Le cas $+$ donne $0 \cdot x = 6 + 2m$, soit $S_a = [m, +\infty[$ si $m = -3$ et $S_a = \varnothing$ sinon ; le cas $-$ donne $x = \dfrac{4m-6}{6}$, qui est $\geq m$ si et seulement si $m \leq -3$. Donc $S = \left\{\dfrac{4m-6}{6}\right\}$ si $m < -3$, $S = [-3, +\infty[$ si $m = -3$ et $S = \varnothing$ si $m > -3$.
- $|5x + 5| = x - m$ impose $x \geq m$. Les deux cas donnent $x = \dfrac{-5-m}{4}$ et $x = \dfrac{-5+m}{6}$, tous deux $\geq m$ si et seulement si $m \leq -1$. Donc $S = \left\{\dfrac{-5-m}{4}, \dfrac{-5+m}{6}\right\}$ si $m \leq -1$ et $S = \varnothing$ si $m > -1$.
- $|mx + m + 2| = x + 3$ impose $x \geq -3$ :
  - le cas $+$ donne $(m-1)x = 1 - m$, donc $x = -1$ si $m \neq 1$, et tout $x \geq -3$ si $m = 1$,
  - le cas $-$ donne $(m+1)x = -(m+5)$, donc $x = -\dfrac{m+5}{m+1}$ si $m \neq -1$, valable seulement pour $m < -1$ ou $m > 1$.

  Ainsi $S = \left\{-1, -\dfrac{m+5}{m+1}\right\}$ si $m < -1$ ou $m > 1$, $S = \{-1\}$ si $m \in [-1, 1[$, $S = [-3, +\infty[$ si $m = 1$.
