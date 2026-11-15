---
title: Produit Cartésien
order: 9
---

Cette page définit les couples et le [[produit-cartesien|produit cartésien]] de deux [[definition-ensemble|ensembles]].

# Couples
> [!definition] Définition
> Un **couple** $(a,b)$ est un élément ordonné composé d'une première coordonnée $a$ et d'une seconde coordonnée $b$.
> Deux couples sont égaux si et seulement si leurs coordonnées correspondantes sont égales : $(a,b)=(c,d) \Leftrightarrow (a=c) \land (b=d)$.

# Produit cartésien
Soient $A,B$ des [[definition-ensemble|ensembles]].

> [!definition] Définition
> Le **produit cartésien** de $A$ par $B$, noté $A \times B$, est l'[[definition-ensemble|ensemble]] des **couples** dont la première coordonnée appartient à $A$ et la seconde à $B$ :
> $$A \times B = \{(a,b) \mid a \in A,\ b \in B\}$$

> [!property] Propriété
> On note $E^2 = E \times E$ le produit cartésien d'un même [[definition-ensemble|ensemble]].
> Si $A$ et $B$ sont finis, le [[cardinal|cardinal]] de $A \times B$ est $|A| \cdot |B|$.

### Exemples
Soient $A = \{x, y, z\}$ et $B = \{1, 2\}$. Alors :
$$A \times B = \{(x,1),\ (x,2),\ (y,1),\ (y,2),\ (z,1),\ (z,2)\}$$

- $(x,1) \in A \times B$ est VRAI car $x \in A$ et $1 \in B$.
- $(1,x) \in A \times B$ est FAUX car $1 \notin A$.
