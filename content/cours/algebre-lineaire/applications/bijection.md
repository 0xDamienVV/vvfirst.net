---
title: Bijection
order: 7
---
Soit $f : E \to F$ une [[application|application]].
> [!definition] Définition
> $f$ est **bijective** si elle est à la fois [[injectivite|injective]] et [[surjectivite|surjective]].  
> Alors tout $y \in F$ a **exactement un** antécédent, et l'**application réciproque** $f^{-1} : F \to E$ associe à $y$ cet unique antécédent.

> [!property] Propriété
> - $f$ est bijective $\Leftrightarrow$ tout $y \in F$ a exactement un [[antecedent|antécédent]].
> - Si $f$ est bijective, $f^{-1}(f(x)) = x$ pour tout $x \in E$ et $f(f^{-1}(y)) = y$ pour tout $y \in F$.
> - Si $E$ et $F$ sont finis et $f$ bijective, alors $|E| = |F|$.

Pour trouver $f^{-1}$, on résout $f(x)=y$ d'inconnue $x$ : l'unique solution est $f^{-1}(y)$.  
Si $f$ n'est pas bijective, on restreint l'ensemble de départ (injectivité) et l'ensemble d'arrivée (surjectivité).

### Exemples
- $x \mapsto x^2$ de $\mathbb{R}$ dans $\mathbb{R}$ n'est PAS bijective, mais l'est de $\mathbb{R}_+$ dans $\mathbb{R}_+$, de réciproque $y \mapsto \sqrt{y}$.
- $x \mapsto x^2+6x+7$ de $[-3, +\infty[$ dans $[-2, +\infty[$ est bijective, de réciproque $y \mapsto -3 + \sqrt{y+2}$ car $f(x)=y \iff (x+3)^2=y+2$ et $x+3 \geq 0$.
- $x \mapsto 2x+1$ de $\mathbb{R}$ dans $\mathbb{R}$ est bijective, de réciproque $y \mapsto \frac{y-1}{2}$ car $2x+1=y \iff x=\frac{y-1}{2}$.
