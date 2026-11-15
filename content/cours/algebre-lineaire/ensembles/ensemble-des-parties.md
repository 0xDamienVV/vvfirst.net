---
title: Ensemble des Parties
order: 8
---
Soit $E$ un ensemble.
> [!definition] Définition
> L'**ensemble des parties** de $E$, noté $\mathcal{P}(E)$, est l'ensemble dont les éléments sont tous les sous-ensembles de $E$ :
> $\mathcal{P}(E)=\{A \mid A \subset E\}$

>[!property] Remarque
> $\mathcal{P}(E)$ contient toujours $2^{|E|}$ éléments.

### Exemples
- $\varnothing \in \mathcal{P}(E)$ est VRAI car l'ensemble vide est inclus dans tout ensemble $E$.
- Si $E=\{a,b\}$, alors $\{a\} \in \mathcal{P}(E)$ est VRAI car $\{a\} \subset E$.

### Exemple Concret
Soit $E = \{a, b, c\}$. Alors :
$\mathcal{P}(E) = \left\{ \varnothing,\ \{a\},\ \{b\},\ \{c\},\ \{a,b\},\ \{a,c\},\ \{b,c\},\ \{a,b,c\} \right\}$

- $\{a\} \in \mathcal{P}(E)$ est VRAI car $\{a\} \subset E$.
- $a \in \mathcal{P}(E)$ est FAUX car $a$ n'est pas un sous-ensemble de $E$ (c'est un élément).