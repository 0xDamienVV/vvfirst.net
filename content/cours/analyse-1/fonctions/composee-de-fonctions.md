---
title: Composée de fonctions
order: 4
---
Soient $f$ et $g$ deux [[fonction-reelle|fonctions réelles]].
> [!definition] Définition
> La **composée** $g \circ f$ est la fonction $x \mapsto g(f(x))$, définie pour $x$ dans le domaine de $f$ tel que $f(x)$ est dans celui de $g$ (voir [[composition|composition]]).

> [!warning] Attention
> En général $g \circ f \neq f \circ g$.

### Exemples
- Pour $A(x) = E(x)$ et $a(x) = \sqrt{16 - x^2}$ : $A \circ a(x) = E\left(\sqrt{16 - x^2}\right)$, définie sur $[-4, 4]$.
- Pour $B(x) = x - \dfrac{\pi}{2}$ et $b(x) = \sin x$ : $B \circ b(x) = \sin x - \dfrac{\pi}{2}$ et $b \circ B(x) = \sin\left(x - \dfrac{\pi}{2}\right)$, qui sont deux fonctions différentes.
