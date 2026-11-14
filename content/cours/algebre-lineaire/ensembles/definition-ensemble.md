---
title: Ensembles
order: 1
---
> [!definition] Définition
> Un **ensemble** est une collection d'objets appelés ses **éléments**.  
> Si $x$ est un élément de $E$, on note $x \in E$; sinon, on note $x \notin E$.

### Exemples
- $2 \in \{1,2,3\}$ est VRAI car $2$ apparaît parmi les éléments de l'ensemble.
- $4 \notin \{1,2,3\}$ est VRAI car $4$ n'est pas un élément de cet ensemble.

> [!warning] Ordre et répétition
> Ni l'ordre des éléments ni leurs répétitions n'ont d'importance : $\{1, 2, 2\} = \{2, 1\}$.

# Ensemble vide
Soit $E$ un ensemble.
> [!definition] Définition
> L'**ensemble vide**, noté $\varnothing$, est l'ensemble qui ne contient aucun élément.

### Exemples
- $\varnothing = \{\varnothing\}$ est FAUX. Voir avertissement ci-dessous.
- $\varnothing \in \{\varnothing\}$ est VRAI car l'ensemble vide est l'unique élément de $\{\varnothing\}$.

> [!warning] $\varnothing$ et $\{\varnothing\}$
> $\varnothing$ ne contient aucun élément, tandis que $\{\varnothing\}$ contient un élément, qui est l'ensemble vide lui-même. Ainsi $\varnothing \neq \{\varnothing\}$.

# Définir un ensemble
## En extension
> [!definition] Définition
> Un ensemble est défini **en extension** lorsqu'on donne la liste de ses éléments entre accolades.

### Exemples
- $E = \{\alpha, \beta, \gamma, \delta\}$ est un ensemble à $4$ éléments.
- $A = \{3, 7, 11, 15, 19, \dots\}$ est défini en extension, et les pointillés sous-entendent que le motif « $+4$ » continue.

> [!warning] Notation dangereuse
> L'utilisation des pointillés $\dots$ est déconseillée car elle peut etre soumise à différentes interprétations.  
> Elle est toujours remplaçable par une autre notation plus rigoureuse avec les methodes données plus bas.

## En compréhension
Soient $E$ un ensemble et $P(x)$ un [[cours/algebre-lineaire/verite/enonce#prédicats|prédicat]] quelconque.
> [!definition] Définition
> Un ensemble est défini **en compréhension** lorsqu'on le décrit par une **propriété caractéristique** :  
> $\{x \in E \mid P(x)\}$ est l'ensemble des éléments $x$ de $E$ pour lesquels $P(x)$ est **VRAIE**.

### Exemples
- $\{3, 7, 11, 15, \dots\} = \{x \in \mathbb{N} \mid \exists k \in \mathbb{N},\ x = 4k + 3\}$ est VRAI car chaque terme vaut $3$ plus un multiple de $4$.
- $\{2, 5, 10, 17, 26, \dots\} = \{x \in \mathbb{N} \mid \exists k \in \mathbb{N}^*,\ x = k^2 + 1\}$ est VRAI car on ajoute $1$ aux carrés $1, 4, 9, 16, 25, \dots$
- $\{x \in \mathbb{R} \mid x \leq -1 \lor x \geq 2\}$ utilise une [[cours/algebre-lineaire/verite/operateurs-logiques#disjonction|disjonction]] comme propriété caractéristique.
