---
title: Limite infinie
order: 6
---
Soit $(a_n)$ une [[suite]].
> [!definition] Limite infinie
> $(a_n)$ **tend vers $+\infty$**, noté $\lim\limits_{n \to \infty} a_n = +\infty$, si
> $\forall A \in \mathbb{R},\ \exists N \in \mathbb{N}^*,\ n \geq N \Rightarrow a_n > A$
>
> De même, $\lim a_n = -\infty$ si $\forall A,\ \exists N,\ n \geq N \Rightarrow a_n < A$.

> [!property] Remarques
> - On peut se limiter à $A > 0$ (pour $+\infty$) ou à $A < 0$ (pour $-\infty$) : la définition est équivalente.
> - Une suite qui tend vers $\pm\infty$ **diverge** : elle n'a pas de limite réelle (voir [[limite-d-une-suite|limite d'une suite]]).

### Exemples
- $n^2 - 10n \to +\infty$ car $n^2 - 10n > A \iff n > 5 + \sqrt{25 + A}$, donc $N > 5 + \sqrt{25 + A}$ convient.
- $\dfrac{n^2}{2n+2} \to +\infty$ car, pour $A > 0$, $\dfrac{n^2}{2n+2} > A \iff n^2 - 2An - 2A > 0$ (de discriminant $4A(A+2) > 0$), donc $N > A + \sqrt{A^2 + 2A}$ convient.
- $A_n = 2n(n+1) \to +\infty$ car $2n(n+1) > A \iff 2n^2 + 2n - A > 0$, donc $N > \dfrac{-1 + \sqrt{1 + 2A}}{2}$ convient.
