---
title: Ensemble des Parties
order: 8
---
Soit $E$ un [[definition-ensemble|ensemble]] fini.
> [!definition] Définition
> L'**ensemble des parties** de $E$, noté $\mathcal{P}(E)$, est l'[[definition-ensemble|ensemble]] dont les éléments sont tous les [[sous-ensembles|sous-ensembles]] de $E$ :  
> $\mathcal{P}(E)=\{A \mid A \subset E\}$

> [!property] Propriété
> Le [[cardinal|cardinal]] de $\mathcal{P}(E)$ est $|\mathcal{P}(E)| = 2^{|E|}$ (démontré dans le chapitre de combinatoire).

### Exemples
- $\varnothing \in \mathcal{P}(E)$ est VRAI car l'ensemble vide est inclus dans tout ensemble $E$.
- $\{a\} \in \mathcal{P}(\{a,b,c\})$ est VRAI car $\{a\} \subset \{a,b,c\}$.
- $a \in \mathcal{P}(\{a,b,c\})$ est FAUX car $a$ est un élément de $\{a,b,c\}$ et non un sous-ensemble.
- $\mathcal{P}(\{a,b\})=\{\varnothing, \{a\}, \{b\}, \{a,b\}\}$ a $4=2^2$ éléments car chaque élément de $\{a,b\}$ est soit dans le sous-ensemble, soit absent.
