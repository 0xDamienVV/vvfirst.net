---
title: Bijection
order: 7
---
Soit $f : E \to F$ une [[application|application]].
> [!definition] Définition
> $f$ est **bijective** si elle est à la fois [[injectivite|injective]] et [[surjectivite|surjective]].
> Alors tout $y \in F$ a **exactement un** antécédent, et l'**application réciproque** $f^{-1} : F \to E$ associe à $y$ cet unique antécédent.

>[!property] Remarque
> - $f^{-1} \circ f = \operatorname{id}_E$ et $f \circ f^{-1} = \operatorname{id}_F$.
> - Si $E$ et $F$ sont finis et $f$ bijective, alors $|E| = |F|$ (voir [[cardinal|cardinal]]).
> - Pour une bijection, $f^{-1}(\{y\})$ (image réciproque, voir [[image-reciproque|image réciproque]]) est le singleton formé de $f^{-1}(y)$.

> [!tip] Méthode : montrer qu'une application est bijective et trouver sa réciproque
> 1. Fixer $y \in F$ et résoudre $f(x) = y$ d'inconnue $x \in E$.
> 2. Si l'équation a **une unique solution** $x \in E$ pour tout $y \in F$, $f$ est bijective et $f^{-1}(y) = x$.
> 3. Sinon, **restreindre** l'ensemble de départ (pour l'injectivité) et l'ensemble d'arrivée (pour la surjectivité).
> 4. Vérifier le résultat : $f(f^{-1}(y)) = y$.

### Exemples
- $x \mapsto x^2$ de $\mathbb{R}$ dans $\mathbb{R}$ n'est PAS bijective, mais de $\mathbb{R}_+$ dans $\mathbb{R}_+$ elle l'EST, de réciproque $y \mapsto \sqrt{y}$ : VRAI (voir [[ensembles-de-nombres|ensembles de nombres]]).
- $x \mapsto x^2+6x+7$ de $[-3, +\infty[$ dans $[-2, +\infty[$ est bijective, de réciproque $y \mapsto -3 + \sqrt{y+2}$ : VRAI car $f(x)=y \iff (x+3)^2=y+2$ et $x+3 \geq 0$.
- $x \mapsto 2x+1$ de $\mathbb{R}$ dans $\mathbb{R}$ est bijective, de réciproque $y \mapsto \frac{y-1}{2}$ : VRAI.

> [!warning] Attention
> Ne pas confondre $f^{-1}(y)$ (réciproque, existe seulement si $f$ est bijective) et $\dfrac{1}{f(y)}$.
