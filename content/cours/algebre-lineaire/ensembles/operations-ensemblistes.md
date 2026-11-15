---
title: Opérations Ensemblistes
order: 5
---

# Réunion
Soient $A,B \subset E$.

> [!definition] Définition
> La **réunion** de $A$ et $B$, notée $A \cup B$, contient les éléments qui appartiennent à $A$ ou à $B$ (ou aux deux) : $A \cup B = \{x \in E \mid (x \in A) \lor (x \in B)\}$.

### Exemples
- $\{1,2\} \cup \{2,3\}=\{1,2,3\}$ est VRAI car les éléments communs ne sont écrits qu'une fois dans l'[[definition-ensemble|ensemble]] réunion.
- $A \subset A \cup B$ est VRAI car tout élément de $A$ satisfait la condition d'appartenance à $A$ ou à $B$, qui est une [[operateurs-logiques#disjonction|disjonction]].

# Intersection
Soient $A,B \subset E$.

> [!definition] Définition
> L'**intersection** de $A$ et $B$, notée $A \cap B$, contient les éléments qui appartiennent à la fois à $A$ et à $B$ : $A \cap B = \{x \in E \mid (x \in A) \land (x \in B)\}$.
> Deux ensembles sont **disjoints** si leur intersection est l'[[definition-ensemble#ensemble-vide|ensemble vide]].

### Exemples
- $\{1,2\} \cap \{2,3\}=\{2\}$ est VRAI car $2$ est leur seul élément commun.
- $\{1,2\}$ et $\{3,4\}$ sont disjoints est VRAI car leur intersection est l'[[definition-ensemble#ensemble-vide|ensemble vide]].
- $\varnothing \cap A = \varnothing$ est VRAI car aucun élément n'appartient à l'[[definition-ensemble#ensemble-vide|ensemble vide]] : la [[operateurs-logiques#conjonction|conjonction]] des deux appartenances est toujours FAUSSE.

# Complémentaire
Soit $A \subset E$.

> [!definition] Définition
> Le **complémentaire** de $A$ dans $E$, noté $\complement_E A$, est l'[[definition-ensemble|ensemble]] des éléments de $E$ qui n'appartiennent pas à $A$ : $\complement_E A = \{x \in E \mid x \notin A\}$.
> Le complémentaire dépend toujours de l'ensemble de référence $E$.

### Exemples
- Si $E=\{1,2,3,4\}$ et $A=\{1,3\}$, alors $\complement_E A=\{2,4\}$ est VRAI car ce sont exactement les éléments de $E$ qui ne sont pas dans $A$.
- $\complement_E E=\varnothing$ est VRAI car aucun élément de $E$ ne se trouve en dehors de $E$.
- $\complement_{\{1,2\}} \{1\} = \{2\}$ alors que $\complement_{\{1,2,3\}} \{1\} = \{2,3\}$ : le même $A$ a deux complémentaires différents, ce qui montre que $E$ fait partie de la donnée.

# Différence
Soient $A,B \subset E$.

> [!definition] Définition
> La **différence** $A \setminus B$ est l'[[definition-ensemble|ensemble]] des éléments de $A$ qui ne sont pas dans $B$ : $A \setminus B = \{x \in E \mid (x \in A) \land (x \notin B)\}$.

### Exemples
- $\{1,2,3\} \setminus \{2,3,4\}=\{1\}$ est VRAI car $1$ est le seul élément du premier ensemble absent du second.
- $A \setminus B = A \cap \complement_E B$ est VRAI car ces deux ensembles contiennent exactement les éléments de $A$ qui ne sont pas dans $B$.
- $A \setminus A = \varnothing$ est VRAI car aucun élément de $A$ n'est absent de $A$.
- $\{1,2\} \setminus \{1,2,3\} = \varnothing$ alors que $\{1,2,3\} \setminus \{1,2\} = \{3\}$ : la [[operations-ensemblistes#différence|différence]] n'est pas symétrique, contrairement à la [[operations-ensemblistes#réunion|réunion]].
