---
title: Injectivité
order: 5
---
Soit $f : E \to F$ une [[application|application]].
> [!definition] Définition
> $f$ est **injective** si deux éléments distincts de $E$ ont des images distinctes :
> $\forall x, x' \in E,\ f(x) = f(x') \Rightarrow x = x'$

>[!property] Remarque
> - $f$ est injective $\iff$ tout $y \in F$ a **au plus un** [[antecedent|antécédent]].
> - Si $E$ et $F$ sont finis et $f$ injective, alors $|E| \leq |F|$.
> - Si $f$ est injective, $|f(A)| = |A|$ pour tout $A \subset E$.

> [!tip] Méthode : étudier l'injectivité
> 1. **Pour prouver** : prendre $x, x' \in E$ avec $f(x) = f(x')$, transformer l'égalité (factoriser) et conclure $x = x'$.
> 2. **Pour réfuter** : exhiber **deux éléments distincts** ayant la même image (contre-exemple).
> 3. **Pistes de contre-exemple** : symétrie ($f(-x)=f(x)$), périodicité, sommet d'une parabole.
> 4. **Pour rendre injective** : restreindre l'ensemble de départ (par exemple à $\mathbb{R}_+$ au lieu de $\mathbb{R}$).

### Exemples
- $x \mapsto x^2$ n'est PAS injective sur $\mathbb{R}$ car $f(-1) = f(1) = 1$, mais elle EST injective sur $\mathbb{R}_+$.
- $x \mapsto x^2+6x+7$ n'est PAS injective sur $\mathbb{R}$ car $f(-4) = f(-2) = 3$ (symétrie autour de $-3$).
- $x \mapsto \sin(x)$ n'est PAS injective sur $\mathbb{R}$ car $\sin(0) = \sin(2\pi)$ (périodicité).
- Avec $f(\alpha)=\gamma$, $f(\beta)=\alpha$, $f(\gamma)=\delta$, $f(\delta)=\alpha$, $f$ n'est PAS injective car $f(\beta)=f(\delta)$.