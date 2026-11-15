---
title: Sous-Ensembles
order: 2
---
Soient $A$ et $B$ deux [[definition-ensemble|ensembles]].
> [!definition] Définition
> On dit que $A$ est un **sous-ensemble** de $B$, ou que $A$ est **inclus** dans $B$, et on note $A \subset B$, si tout élément de $A$ appartient à $B$ :  
> $A \subset B \Leftrightarrow \forall x,\ (x \in A \Rightarrow x \in B)$  
> On note $A \not\subset B$ si $A$ n'est pas inclus dans $B$.

> [!property] Propriété
> - Pour tout [[definition-ensemble|ensemble]] $E$ : $\varnothing \subset E$ ainsi que $E \subset E$.
> - $A \not\subset B \Leftrightarrow \exists x \in A,\ x \notin B$ (voir [[cours/algebre-lineaire/verite/quantificateurs#négation-des-quantificateurs|négation des quantificateurs]]).

### Exemples
- $\{1,2\} \subset \{1,2,3\}$ est VRAI car chaque élément du premier ensemble appartient au second.
- $\varnothing \subset E$ est VRAI car il n'existe aucun élément de $\varnothing$ qui puisse contredire l'[[cours/algebre-lineaire/verite/operateurs-logiques#implication|implication]], qui est vraie par vacuité.
- $\{1,4\} \not\subset \{1,2,3\}$ est VRAI car $4$ appartient au premier ensemble sans appartenir au second.

> [!warning] $\in$ et $\subset$ sont différents
> $x \in A$ met en relation un élément $x$ avec un ensemble $A$.  
> $A \subset B$ met en relation deux ensembles et signifie que chaque élément de $A$ appartient à $B$.

# Égalité d'ensembles
Soient $A$ et $B$ deux [[definition-ensemble|ensembles]].
> [!definition] Définition
> Les ensembles $A$ et $B$ sont **égaux**, noté $A=B$, si et seulement s'ils ont les mêmes éléments :  
> $A=B \Leftrightarrow \forall x,\ (x \in A \Leftrightarrow x \in B)$

> [!property] Propriété
> Pour démontrer que $A=B$, il suffit de prouver les deux inclusions : $A = B \equiv (A \subset B) \land (B \subset A)$.  
> C'est le raisonnement par **double inclusion**.

### Exemples
- $\{1,2\}=\{2,1\}$ est VRAI car l'ordre d'énumération ne change pas les éléments de l'ensemble.
- $\{1,2\} = \{1,2,3\}$ est FAUX car $3$ appartient au second ensemble sans appartenir au premier, donc la double inclusion échoue.
