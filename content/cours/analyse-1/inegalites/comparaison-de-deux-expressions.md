---
title: Comparaison de deux expressions
order: 2
---
Soient $P(x)$ et $Q(x)$ deux expressions réelles.
> [!definition] Principe
> **Comparer** $P(x)$ et $Q(x)$, c'est étudier le **signe de la différence** : $P(x) > Q(x) \iff P(x) - Q(x) > 0$, et de même pour $<$ et $=$.  
> On étudie ce [[signe-d-une-expression|signe]] après avoir mis au même dénominateur ou **complété le carré**.

> [!property] Complétion du carré
> $x^2 + 2bx + c = (x + b)^2 + (c - b^2)$

### Exemples
- $x^2 + 6x > -5$ est identique à $(x+1)(x+5) > 0$, soit $x \in ]-\infty, -5[ \cup ]-1, +\infty[$, car $x^2 + 6x + 5 = (x+1)(x+5)$.
- $x^2 + 3 > -2x$ pour tout $x \in \mathbb{R}$ car $x^2 + 2x + 3 = (x+1)^2 + 2 > 0$.
- $\dfrac{1}{1-x} > \dfrac{1}{x}$ est identique à $\dfrac{2x - 1}{x(1-x)} > 0$, soit $x \in ]-\infty, 0[ \cup \left]\dfrac{1}{2}, 1\right[$, car on met au même dénominateur (avec $x \neq 0, 1$).
- Pour tout $x > -1$, $\dfrac{x}{x+1} < 1$ car $\dfrac{x}{x+1} - 1 = -\dfrac{1}{x+1} < 0$.
- Pour tout $x > 0$, $\dfrac{x^2 + 1}{x} \geq -2$ car $\dfrac{x^2+1}{x} + 2 = \dfrac{(x+1)^2}{x} \geq 0$.
