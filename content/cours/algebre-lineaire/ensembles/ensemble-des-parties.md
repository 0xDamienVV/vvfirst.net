---
title: Ensemble des Parties
order: 8
---

Soit $E$ un [[definition-ensemble|ensemble]].

> [!definition] Définition
> L'**ensemble des parties** de $E$, noté $\mathcal{P}(E)$, est l'[[definition-ensemble|ensemble]] dont les éléments sont tous les [[sous-ensembles|sous-ensembles]] de $E$ : $\mathcal{P}(E) = \{A \mid A \subset E\}$.

> [!property] Propriété
> Si $E$ est fini, le [[cardinal|cardinal]] de $\mathcal{P}(E)$ est $2^{|E|}$.

### Exemples
- $\varnothing \in \mathcal{P}(E)$ est VRAI car l'[[definition-ensemble#ensemble-vide|ensemble vide]] est inclus dans tout [[definition-ensemble|ensemble]] $E$.
- Si $E=\{a,b\}$, alors $\{a\} \in \mathcal{P}(E)$ est VRAI car $\{a\} \subset E$.
- $a \in \mathcal{P}(E)$ est FAUX car $a$ n'est pas un [[sous-ensembles|sous-ensemble]] de $E$ : c'est un élément.

## Exemple concret
Soit $E = \{a, b, c\}$. Alors $\mathcal{P}(E) = \{\varnothing, \{a\}, \{b\}, \{c\}, \{a,b\}, \{a,c\}, \{b,c\}, \{a,b,c\}\}$.

### Remarques
- $|\mathcal{P}(E)| = 8 = 2^3$ est VRAI car $E$ possède $3$ éléments et chaque élément est choisi ou non.
- $\{\varnothing\} \in \mathcal{P}(E)$ est FAUX car $\{\varnothing\}$ est un ensemble qui contient l'[[definition-ensemble#ensemble-vide|ensemble vide]], or $E$ ne contient que $a$, $b$ et $c$.
