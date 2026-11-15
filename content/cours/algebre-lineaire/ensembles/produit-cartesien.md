---
title: Produit Cartésien
order: 9
---

# Couples
> [!definition] Définition
> Un **couple** $(a,b)$ est un élément ordonné composé d'une première coordonnée $a$ et d'une seconde coordonnée $b$.
> Deux couples sont égaux si et seulement si leurs coordonnées correspondantes sont égales : $(a,b)=(c,d) \Leftrightarrow (a=c) \land (b=d)$.

### Exemples
- $(1,2) = (1,2)$ est VRAI car les deux coordonnées coïncident.
- $(1,2) = (2,1)$ est FAUX car l'ordre compte dans un couple, contrairement à un [[definition-ensemble|ensemble]] où $\{1,2\} = \{2,1\}$.
- $\{1,2\} = \{2,1\}$ est VRAI alors que $(1,2) = (2,1)$ est FAUX : c'est la différence entre un [[definition-ensemble|ensemble]] et un couple.

# Produit cartésien
Soient $A,B$ des [[definition-ensemble|ensembles]].

> [!definition] Définition
> Le **produit cartésien** de $A$ par $B$, noté $A \times B$, est l'[[definition-ensemble|ensemble]] des **couples** dont la première coordonnée appartient à $A$ et la seconde à $B$ : $A \times B = \{(a,b) \mid a \in A,\ b \in B\}$.

> [!property] Propriété
> On note $E^2 = E \times E$ le produit cartésien d'un même [[definition-ensemble|ensemble]].
> Si $A$ et $B$ sont finis, le [[cardinal|cardinal]] de $A \times B$ est $|A| \cdot |B|$.

### Exemples
Soient $A = \{x, y, z\}$ et $B = \{1, 2\}$. Alors $A \times B = \{(x,1), (x,2), (y,1), (y,2), (z,1), (z,2)\}$.

- $(x,1) \in A \times B$ est VRAI car $x \in A$ et $1 \in B$.
- $(1,x) \in A \times B$ est FAUX car $1 \notin A$ : l'ordre des coordonnées est imposé par $A \times B$, et $B \times A$ est un autre ensemble.
- $A \times \varnothing = \varnothing$ est VRAI car aucun couple ne peut avoir de seconde coordonnée dans l'[[definition-ensemble#ensemble-vide|ensemble vide]].
