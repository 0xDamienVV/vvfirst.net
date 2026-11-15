---
title: Opérations Ensemblistes
order: 4
---
# Réunion
Soient $E$ un [[definition-ensemble|ensemble]] et $A,B \subset E$.
> [!definition] Définition
> La **réunion** de $A$ et $B$, notée $A \cup B$, contient les éléments qui appartiennent à $A$ ou à $B$ (ou aux deux) :  
> $A \cup B = \{x \in E \mid x \in A \lor x \in B\}$

### Exemples
- $\{1,2\} \cup \{2,3\}=\{1,2,3\}$ est VRAI car les éléments communs ne sont écrits qu'une fois dans l'[[definition-ensemble|ensemble]] réunion.
- $A \subset A \cup B$ est VRAI car tout élément de $A$ satisfait la condition d'appartenance à $A$ ou à $B$, qui est une [[cours/algebre-lineaire/verite/operateurs-logiques#disjonction|disjonction]].

# Intersection
Soient $E$ un [[definition-ensemble|ensemble]] et $A,B \subset E$.
> [!definition] Définition
> L'**intersection** de $A$ et $B$, notée $A \cap B$, contient les éléments qui appartiennent à la fois à $A$ et à $B$ :  
> $A \cap B = \{x \in E \mid x \in A \land x \in B\}$  
> Deux ensembles sont **disjoints** si leur intersection est l'[[definition-ensemble#ensemble-vide|ensemble vide]].

### Exemples
- $\{1,2\} \cap \{2,3\}=\{2\}$ est VRAI car $2$ est leur seul élément commun.
- $\{1,2\}$ et $\{3,4\}$ sont disjoints est VRAI car leur intersection est l'[[definition-ensemble#ensemble-vide|ensemble vide]].

# Complémentaire
Soient $E$ un [[definition-ensemble|ensemble]] et $A \subset E$.
> [!definition] Définition
> Le **complémentaire** de $A$ dans $E$, noté $\complement_E A$, est l'[[definition-ensemble|ensemble]] des éléments de $E$ qui n'appartiennent pas à $A$ :  
> $\complement_E A = \{x \in E \mid x \notin A\}$  
> Le **complémentaire** dépend de l'ensemble de référence $E$.

### Exemples
- Si $E=\{1,2,3,4\}$ et $A=\{1,3\}$, alors $\complement_E A=\{2,4\}$ est VRAI car ce sont exactement les éléments de $E$ qui ne sont pas dans $A$.
- $\complement_E E=\varnothing$ est VRAI car aucun élément de $E$ ne se trouve en dehors de $E$.
- Si $D=\{n \in \mathbb{N} \mid \exists k \in \mathbb{N},\ n=3k\}$, alors $\complement_{\mathbb{N}} D=\{n \in \mathbb{N} \mid \forall k \in \mathbb{N},\ n\neq 3k\}$ est VRAI car le complémentaire est décrit par la [[cours/algebre-lineaire/verite/quantificateurs#négation-des-quantificateurs|négation]] de la propriété caractéristique.
- Si $A=\{1,2,3\}$, $B=\{3,4\}$, $C=\{1,5\}$ dans $\mathbb{N}$, alors $\complement_{\mathbb{N}}(A \cup C) \cap B=\{4\}$ est VRAI car $3 \in A$ est exclu et $4 \notin A \cup C$.

# Différence
Soient $E$ un [[definition-ensemble|ensemble]] et $A,B \subset E$.
> [!definition] Définition
> La **différence** $A \setminus B$ est l'[[definition-ensemble|ensemble]] des éléments de $A$ qui ne sont pas dans $B$ :  
> $A \setminus B = \{x \in E \mid x \in A \land x \notin B\}$

### Exemples
- $\{1,2,3\} \setminus \{2,3,4\}=\{1\}$ est VRAI car $1$ est le seul élément du premier ensemble absent du second.
- $A \setminus B = A \cap \complement_E B$ est VRAI car ces deux ensembles contiennent exactement les éléments de $A$ qui ne sont pas dans $B$.
