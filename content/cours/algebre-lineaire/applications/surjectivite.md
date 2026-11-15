---
title: Surjectivité
order: 6
---
Soit $f : E \to F$ une [[application|application]].
> [!definition] Définition
> $f$ est **surjective** si tout élément de $F$ a au moins un antécédent :
> $\forall y \in F,\ \exists x \in E,\ f(x) = y$.

>[!property] Remarque
> - $f$ est surjective $\iff f(E) = F$ (voir [[image-directe|image directe]]).
> - $f$ est surjective $\iff$ tout $y \in F$ a **au moins un** [[antecedent|antécédent]].
> - Si $E$ et $F$ sont finis et $f$ surjective, alors $|E| \geq |F|$ (voir [[cardinal|cardinal]]).

> [!tip] Méthode : étudier la surjectivité
> 1. Fixer $y \in F$ quelconque et résoudre $f(x) = y$ d'inconnue $x \in E$.
> 2. **Pour prouver** : trouver une solution $x \in E$ valable pour tout $y \in F$.
> 3. **Pour réfuter** : exhiber un $y \in F$ sans antécédent (le plus souvent, un $y$ hors de $f(E)$).
> 4. **Pour rendre surjective** : restreindre l'ensemble d'arrivée à $f(E)$.

### Exemples
- $x \mapsto x^2$ de $\mathbb{R}$ dans $\mathbb{R}$ n'est PAS surjective car $-1$ n'a pas d'antécédent, mais $x \mapsto x^2$ de $\mathbb{R}$ dans $\mathbb{R}_+$ l'est.
- $x \mapsto \sin(x)$ de $\mathbb{R}$ dans $[-1, 1]$ est surjective sans être injective : VRAI.
- Avec $f(\alpha)=\gamma$, $f(\beta)=\alpha$, $f(\gamma)=\delta$, $f(\delta)=\alpha$ de $E=\{\alpha,\beta,\gamma,\delta\}$ dans $E$:  
$f$ n'est PAS surjective car $\beta$ n'a pas d'antécédent : VRAI.