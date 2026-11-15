---
title: Ensembles
order: 1
---
> [!definition] Définition
> Un **ensemble** est une collection d'objets appelés ses **éléments**.
> On doit pouvoir savoir sans ambiguité si un élément est dans un ensemble ou non.
> Si $x$ est un élément de $E$, on note $x \in E$; sinon, on note $x \notin E$.

### Exemples
- $2 \in \{1,2,3\}$ est VRAI car $2$ apparaît parmi les éléments de l'ensemble.
- $4 \notin \{1,2,3\}$ est VRAI car $4$ n'est pas un élément de cet ensemble.

> [!warning] Ordre et répétition
> Ni l'ordre des éléments ni leurs répétitions n'ont d'importance : $\{1, 2, 2\} = \{2, 1\}$.

# Ensemble Vide
> [!definition] Définition
> L'**ensemble vide**, noté $\varnothing$, est l'ensemble qui ne contient aucun élément.

### Exemples
- $\varnothing = \{\varnothing\}$ est FAUX car $\varnothing$ ne contient aucun élément alors que $\{\varnothing\}$ en contient un.
- $\varnothing \in \{\varnothing\}$ est VRAI car l'ensemble vide est l'unique élément de $\{\varnothing\}$.

# Définir Un Ensemble
## En Extension
> [!definition] Définition
> Un ensemble est défini **en extension** lorsqu'on donne la liste de ses éléments entre accolades.

### Exemples
- $E = \{\alpha, \beta, \gamma, \delta\}$ est un ensemble à $4$ éléments.
- $A = \{3, 7, 11, 15, 19, \dots\}$ est défini en extension car on liste ses éléments, et les pointillés sous-entendent que le motif « $+4$ » continue.

> [!warning] Notation dangereuse
> L'utilisation des pointillés $\dots$ est déconseillée car elle peut être soumise à différentes interprétations.  
> Elle est toujours remplaçable par une écriture [[definition-ensemble#en-compréhension|en compréhension]], plus rigoureuse.

## En Compréhension
Soient $E$ un ensemble et $P(x)$ un [[cours/algebre-lineaire/verite/enonce#prédicats|prédicat]] quelconque.
> [!definition] Définition
> Un ensemble est défini **en compréhension** lorsqu'on le décrit par une **propriété caractéristique** :  
> $\{x \in E \mid P(x)\}$ est l'ensemble des éléments $x$ de $E$ pour lesquels $P(x)$ est **VRAIE**.

### Exemples
- $\{x \in \{1,2,3,4,5,6\} \mid x \text{ est pair}\} = \{2,4,6\}$ est VRAI car $2$, $4$ et $6$ sont les seuls éléments pairs de $\{1,2,3,4,5,6\}$.
- $\{x \in \{1,2,3,4\} \mid x > 2\} = \{3,4\}$ est VRAI car $3$ et $4$ sont les seuls éléments strictement supérieurs à $2$.
- $\{x \in \{-2,-1,0,1,2\} \mid x^2 = 1\} = \{-1,1\}$ est VRAI car $(-1)^2 = 1^2 = 1$ et aucun autre élément ne vérifie l'égalité.
- $\{x \in \{1,2,3,4,5\} \mid x \leq 2 \lor x \geq 4\} = \{1,2,4,5\}$ est VRAI car la [[cours/algebre-lineaire/verite/operateurs-logiques#disjonction|disjonction]] garde les éléments satisfaisant au moins une des deux conditions.
