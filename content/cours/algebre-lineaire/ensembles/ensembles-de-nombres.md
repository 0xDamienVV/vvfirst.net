---
title: Ensembles Conventionnels
order: 3
---
Il existe des écritures spéciales pour désigner des [[definition-ensemble|ensembles]] souvent utilisés.

> [!definition] Définition
> - $\mathbb{N} = \{0, 1, 2, \dots\}$ est l'ensemble des **entiers naturels**.
> - $\mathbb{Z} = \{a - b \mid a,\ b \in \mathbb{N}\}$ est l'ensemble des **entiers relatifs**.
> - $\mathbb{Q} = \left\{\frac{a}{b} \mid a \in \mathbb{Z},\ b \in \mathbb{N}^*\right\}$ est l'ensemble des **rationnels**.
> - $\mathbb{R}$ est l'ensemble des **réels**, c'est-à-dire des nombres de la droite numérique.
> - $\mathbb{C} = \{a + bi \mid a,\ b \in \mathbb{R}\}$ est l'ensemble des **complexes**.
> - $\mathbb{H} = \{a + bi + cj + dk \mid a,\ b,\ c,\ d \in \mathbb{R}\}$ est l'ensemble des **quaternions**.

> [!property] Propriété
> $\mathbb{N} \subset \mathbb{Z} \subset \mathbb{Q} \subset \mathbb{R} \subset \mathbb{C} \subset \mathbb{H}$

### Exemples
- $\mathbb{N} \subset \mathbb{Z}$ est VRAI car tout entier naturel $n$ s'écrit $n - 0$ avec $n, 0 \in \mathbb{N}$.
- $\frac{1}{2} \in \mathbb{Q}$ et $\frac{1}{2} \notin \mathbb{Z}$ sont VRAIS car $\frac{1}{2}$ est un quotient d'entiers mais n'est pas un entier.

> [!warning] Définitions provisoires
> Les définitions données ici sont intuitives.  
> Nous ne possédons pas encore les outils nécessaires pour construire rigoureusement $\mathbb{N}$ et $\mathbb{R}$.

# Notations Dérivées
> [!definition] Définition
> L'indice $+$ désigne les éléments **positifs ou nuls**, et l'indice $-$ les éléments **négatifs ou nuls**.  
> L'exposant $*$ retire $0$ de l'[[definition-ensemble|ensemble]].  
> Les deux notations se combinent :
> - $\mathbb{R}_+ = \{x \in \mathbb{R} \mid x \geq 0\}$.
> - $\mathbb{R}_- = \{x \in \mathbb{R} \mid x \leq 0\}$.
> - $\mathbb{R}^* = \{x \in \mathbb{R} \mid x \neq 0\}$.
> - $\mathbb{R}_+^* = \{x \in \mathbb{R} \mid x > 0\}$ désigne les réels **strictement positifs**.
> - $\mathbb{R}_-^* = \{x \in \mathbb{R} \mid x < 0\}$ désigne les réels **strictement négatifs**.

### Exemples
- $0 \in \mathbb{R}_+$ et $0 \notin \mathbb{R}_+^*$ sont VRAIS car $0$ est positif ou nul mais n'est pas strictement positif.
- $\mathbb{Z}_-^* = \{-1,-2,\dots\}$ est VRAI car on a retiré $0$ des entiers négatifs ou nuls.

# Multiples et parité
> [!definition] Définition
> Soient $a, b \in \mathbb{Z}$.  
> $a$ est un **multiple** de $b$, ou $b$ **divise** $a$ (noté $b \mid a$), si $\exists k \in \mathbb{Z},\ a = bk$.  
> Un entier est **pair** s'il est multiple de $2$, et **impair** sinon.

> [!property] Propriété
> Un entier $n$ est impair si et seulement si $\exists k \in \mathbb{Z},\ n = 2k+1$.

### Exemples
- $12$ est un multiple de $6$ est VRAI car $12 = 6 \cdot 2$.
- $\{n \in \mathbb{N} \mid \exists k \in \mathbb{N},\ n = 6k\}$ est l'ensemble des multiples de $6$ dans $\mathbb{N}$ car il décrit exactement les entiers de la forme $6k$.
- Un entier à la fois multiple de $2$ et de $3$ est multiple de $6$ car $2$ et $3$ n'ont pas de diviseur commun autre que $1$.

# Nombres premiers
> [!definition] Définition
> $\mathbb{P} = \{p \in \mathbb{N} \mid p \geq 2 \land \forall d \in \mathbb{N},\ (d \mid p \Rightarrow d = 1 \lor d = p)\}$ est l'ensemble des **nombres premiers**.

### Exemple
- $1 \notin \mathbb{P}$ est VRAI car un nombre premier est supérieur ou égal à $2$.

# Scalaires
> [!definition] Définition
> Un **scalaire** est un nombre qui sert à multiplier un objet qui n'est pas un nombre.  
> Dans ces notes, les **scalaires** sont des éléments de $\mathbb{R}$, sauf mention contraire ; on précise alors l'[[definition-ensemble|ensemble]] de scalaires utilisé.
