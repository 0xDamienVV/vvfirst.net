---
title: Cardinal
order: 7
---
Soit $A$ un [[definition-ensemble|ensemble]] fini.
> [!definition] Définition
> Le **cardinal** de $A$, noté $|A|$ ou $\operatorname{Card}(A)$, est son nombre d'éléments.

> [!property] Propriété
> Soient $E$ un ensemble fini et $A, B \subset E$.
> - $|\complement_E A| = |E| - |A|$.
> - $|A \cup B| = |A| + |B| - |A \cap B|$, donc $|A \cup B| = |A| + |B|$ si $A$ et $B$ sont disjoints.
> - $|A \setminus B| = |A| - |A \cap B|$.
> - $A \subset B \Rightarrow |A| \leq |B|$.

### Exemples
- $|\{a,b,c\}|=3$ est VRAI car cet ensemble contient trois éléments distincts.
- $|\varnothing|=0$ est VRAI car l'ensemble vide ne contient aucun élément.
- Si $|E|=11$ et $|A|=6$, alors $|\complement_E A|=5$ est VRAI car $E$ est la réunion disjointe de $A$ et de $\complement_E A$ (voir [[operations-ensemblistes|opérations ensemblistes]]).

> [!warning] Le cardinal est réservé aux ensembles finis
> Dans ce cours, la notation $|A|$ désigne un **nombre d'éléments** : elle n'est utilisée que si $A$ est un ensemble **fini**.  
> Pour un ensemble infini comme $\mathbb{N}$, $\mathbb{Z}$, $\mathbb{Q}$ ou $\mathbb{R}$, on n'écrit pas $|A| = n$ avec $n \in \mathbb{N}$.  
> Exprimer le cardinal d'ensembles infinis n'est pas au programme de ce cours.
