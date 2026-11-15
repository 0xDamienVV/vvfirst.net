---
title: Image directe
order: 2
---
Soit $f : E \to F$ une [[application|application]] et $A \subset E$ (voir [[sous-ensembles|sous-ensembles]]).
> [!definition] Définition
> L'**image directe** de $A$ par $f$ est :
> $f(A) = \{f(x) \mid x \in A\} \subset F$.

>[!property] Remarque
> - $f(E)$ s'appelle l'**image** de $f$, notée $\operatorname{Im}(f)$.
> - $f(A \cup B) = f(A) \cup f(B)$.
> - $f(A \cap B) \subset f(A) \cap f(B)$, sans égalité en général.

> [!tip] Méthode : calculer $f(A)$
> 1. **Ensemble fini** : calculer $f(x)$ pour chaque $x \in A$ et écrire l'ensemble **sans répétition**.
> 2. **Intervalle** : étudier les variations de $f$ sur $A$ et lire les valeurs prises (extrema, limites aux bornes).
> 3. **Alternative** : $y \in f(A) \iff$ l'équation $f(x) = y$ a au moins une solution $x \in A$.

### Exemples
- Si $f(\alpha)=\gamma$, $f(\beta)=\alpha$, $f(\gamma)=\delta$, $f(\delta)=\alpha$ et $A=\{\alpha,\beta,\delta\}$, alors $f(A)=\{\alpha,\gamma\}$ est VRAI : $|f(A)| = 2 < 3 = |A|$ car $\beta$ et $\delta$ ont la même image (voir [[cardinal|cardinal]]).
- Pour $f(x) = x^2$ sur $\mathbb{R}$, $f([-2, 1]) = [0, 4]$ est VRAI : le minimum $0$ est atteint à l'intérieur de l'intervalle et le maximum vient de $-2$, pas de $1$.
- Pour $f(x) = x^2$, $f(\{-1\} \cap \{1\}) = \varnothing$ mais $f(\{-1\}) \cap f(\{1\}) = \{1\}$ : l'inclusion $f(A \cap B) \subset f(A) \cap f(B)$ est STRICTE ici.

> [!warning] Attention
> $|f(A)| \leq |A|$ : l'image peut avoir moins d'éléments que $A$, jamais plus.
