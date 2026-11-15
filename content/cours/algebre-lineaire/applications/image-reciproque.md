---
title: Image réciproque
order: 3
---
Soit $f : E \to F$ une [[application|application]] et $B \subset F$ (voir [[sous-ensembles|sous-ensembles]]).
> [!definition] Définition
> L'**image réciproque** de $B$ par $f$ est :
> $f^{-1}(B) = \{x \in E \mid f(x) \in B\} \subset E$.

>[!property] Remarque
> - $f(f^{-1}(B)) = B \cap f(E)$.
> - $f^{-1}(B \cup C) = f^{-1}(B) \cup f^{-1}(C)$ et $f^{-1}(B \cap C) = f^{-1}(B) \cap f^{-1}(C)$.
> - $f^{-1}(B) = \varnothing \iff B \cap f(E) = \varnothing$.

> [!tip] Méthode : calculer $f^{-1}(B)$
> 1. Traduire la définition : $x \in f^{-1}(B) \iff f(x) \in B$.
> 2. **Ensemble fini** : parcourir tous les $x \in E$ et garder ceux dont l'image est dans $B$.
> 3. **Intervalle $B$** : résoudre l'inéquation $f(x) \in B$ (par exemple $a \leq f(x) \leq b$).
> 4. **$B$ = singleton $\{y\}$** : résoudre l'équation $f(x) = y$.
> 5. Intersecter les solutions avec l'ensemble de départ $E$.

### Exemples
- Avec $f(\alpha)=\gamma$, $f(\beta)=\alpha$, $f(\gamma)=\delta$, $f(\delta)=\alpha$ et $A=\{\alpha,\beta,\delta\}$, $f^{-1}(A)=\{\beta,\gamma,\delta\}$ est VRAI : $\gamma \in f^{-1}(A)$ alors que $\gamma \notin A$ (les deux ensembles ne vivent pas au même endroit).
- Pour $f(x)=x^2$ sur $\mathbb{R}$, $f^{-1}([-4,-1]) = \varnothing$ est VRAI car un carré n'est jamais négatif.
- Pour $f(x)=x^2$ sur $\mathbb{R}$, $f^{-1}(\{4\}) = \{-2, 2\}$ est VRAI : l'image réciproque d'un singleton peut avoir deux éléments.
- Pour $f(x)=x^2$, $f(f^{-1}([-1,4])) = [0,4] \neq [-1,4]$ est VRAI car $f(f^{-1}(B)) = B \cap f(E)$.

> [!warning] Attention
> La notation $f^{-1}(B)$ existe **même si $f$ n'est pas bijective** : ce n'est pas l'application réciproque (voir [[bijection|bijection]]).
