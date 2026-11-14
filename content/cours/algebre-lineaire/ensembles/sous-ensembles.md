---
title: Sous-Ensembles
order: 4
---
# Inclusion
Soient $A,B \subset E$.
> [!definition] Définition
> On dit que $A$ est un **sous-ensemble** de $E$, ou que $A$ est **inclus** dans $E$, et on note $A \subset E$, si tout élément de $A$ appartient à $E$ :
> $A \subset B \Leftrightarrow \forall x \in E,\ (x \in A \Rightarrow x \in B)$
> En particulier, $A$ est inclus dans $E$ si chaque élément de $A$ appartient à $E$.

> [!property] Propriété
> Pour tout ensemble $E$: $\varnothing \subset E$ ainsi que $E \subset E$.

### Exemples
- $\{1,2\} \subset \{1,2,3\}$ est VRAI car chaque élément du premier ensemble appartient au second.
- $\varnothing \subset E$ est VRAI car il n'existe aucun élément de $\varnothing$ qui puisse contredire l'inclusion.

> [!warning] $\in$ et $\subset$
> $x \in A$ met en relation un élément $x$ avec un ensemble $A$.  
> $A \subset B$ met en relation deux ensembles et signifie que chaque élément de $A$ appartient à $B$.

# Égalité d'ensembles
Soient $A,B \subset E$.
> [!definition] Définition
> Les ensembles $A$ et $B$ sont égaux, noté $A=B$, si et seulement s'ils ont les mêmes éléments :
> $A=B \Leftrightarrow \forall x \in E,\ (x \in A \Leftrightarrow x \in B)$

> [!property] Propriété
> Pour démontrer que $A=B$, il suffit de prouver les deux inclusions $A \subset B \land B \subset A$. C'est le raisonnement par **double inclusion**.

### Exemples
- $\{1,2\}=\{2,1\}$ est VRAI car l'ordre d'énumération ne change pas les éléments de l'ensemble.
- $\{x \in \mathbb{R} \mid x \geq 0\}=\mathbb{R}_+$ est VRAI car les deux ensembles contiennent exactement les réels positifs ou nuls.
