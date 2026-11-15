---
title: Ensemble des Parties
order: 8
---
Soit $E$ un [[definition-ensemble|ensemble]] fini.
> [!definition] Définition
> L'**ensemble des parties** de $E$, noté $\mathcal{P}(E)$, est l'[[definition-ensemble|ensemble]] dont les éléments sont tous les [[sous-ensembles|sous-ensembles]] de $E$ :
> $\mathcal{P}(E)=\{A \mid A \subset E\}$

>[!property] Remarque
> Le [[cardinal|cardinal]] de $\mathcal{P}(E)$ est $2^{|E|}$.

### Exemples
- $\varnothing \in \mathcal{P}(E)$ est VRAI car l'ensemble vide est inclus dans tout ensemble $E$.
- Si $E=\{a,b\}$, alors $\{a\} \in \mathcal{P}(E)$ est VRAI car $\{a\} \subset E$.

### Exemple Concret
Soit $E = \{a, b, c\}$. Alors :
$\mathcal{P}(E) = \left\{ \varnothing,\ \{a\},\ \{b\},\ \{c\},\ \{a,b\},\ \{a,c\},\ \{b,c\},\ \{a,b,c\} \right\}$

- $\{a\} \in \mathcal{P}(E)$ est VRAI car $\{a\} \subset E$.
- $a \in \mathcal{P}(E)$ est FAUX car $a$ n'est pas un sous-ensemble de $E$ (c'est un élément).