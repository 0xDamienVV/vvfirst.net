---
title: Ensembles Conventionnels
order: 2
---

> [!definition] Définition
> - $\mathbb{P} = \{p \in \mathbb{N} \mid (p \geq 2) \land (\forall d \in \mathbb{N},\ (d \mid p \Rightarrow (d = 1 \lor d = p)))\}$ est l'ensemble des **nombres premiers**.
> - $\mathbb{N} = \{0, 1, 2, \dots\}$ est l'ensemble des **entiers naturels**.
> - $\mathbb{Z} = \{a - b \mid a,\ b \in \mathbb{N}\}$ est l'ensemble des **entiers relatifs**.
> - $\mathbb{Q} = \left\{\frac{a}{b} \mid a \in \mathbb{Z},\ b \in \mathbb{Z}^*\right\}$ est l'ensemble des **rationnels**.
> - $\mathbb{R} = \mathopen{]}-\infty,+\infty\mathclose{[}$ est l'ensemble des **réels**.
> - $\mathbb{C} = \{a + bi \mid a,\ b \in \mathbb{R}\}$ est l'ensemble des **complexes**.
> - $\mathbb{H} = \{a + bi + cj + dk \mid a,\ b,\ c,\ d \in \mathbb{R}\}$ est l'ensemble des **quaternions**.

> [!property] Propriété
> $\mathbb{P} \subset \mathbb{N} \subset \mathbb{Z} \subset \mathbb{Q} \subset \mathbb{R} \subset \mathbb{C} \subset \mathbb{H}$

### Exemples
- $\mathbb{N} \subset \mathbb{Z}$ est VRAI car tout entier naturel $n$ s'écrit $n - 0$ avec $n, 0 \in \mathbb{N}$.
- $\frac{1}{2} \in \mathbb{Q}$ et $\frac{1}{2} \notin \mathbb{Z}$ sont VRAIS car $\frac{1}{2}$ est un quotient d'entiers mais n'est pas un entier.
- $1 \notin \mathbb{P}$ est VRAI car un nombre premier est supérieur ou égal à $2$, alors que $2 \in \mathbb{P}$.
- $0 \in \mathbb{N}$ est VRAI car $\mathbb{N}$ contient $0$, contrairement à ce que suggère parfois l'usage courant du mot « naturel ».

> [!warning] Définitions provisoires
> Les définitions données ici sont intuitives.
> Nous ne possédons pas encore les outils nécessaires pour construire rigoureusement $\mathbb{N}$ et $\mathbb{R}$.

# Notations dérivées
> [!definition] Définition
> L'indice $+$ désigne les éléments positifs ou nuls, et l'indice $-$ les éléments négatifs ou nuls.
> L'exposant $^*$ retire $0$ de l'[[definition-ensemble|ensemble]].
> Les deux notations se combinent :
> - $\mathbb{R}_+ = \{x \in \mathbb{R} \mid x \geq 0\}$ ;
> - $\mathbb{R}_- = \{x \in \mathbb{R} \mid x \leq 0\}$ ;
> - $\mathbb{R}^* = \mathbb{R} \setminus \{0\}$ ;
> - $\mathbb{R}_+^* = \{x \in \mathbb{R} \mid x > 0\}$, les réels **strictement positifs** ;
> - $\mathbb{R}_-^* = \{x \in \mathbb{R} \mid x < 0\}$, les réels **strictement négatifs**.

### Exemples
- $\mathbb{R}_+^* = \mathopen{]}0,+\infty\mathclose{[}$ est VRAI car ce sont exactement les réels strictement positifs, comme l'indique la définition d'un [[intervalles|intervalle]] ouvert.
- $\mathbb{Z}_-^* = \{-1,-2,\dots\}$ est VRAI car on a retiré $0$ des entiers négatifs ou nuls par la [[operations-ensemblistes#différence|différence]] $\mathbb{Z}_- \setminus \{0\}$.
- $0 \in \mathbb{R}_+$ et $0 \notin \mathbb{R}_+^*$ sont VRAIS car $0$ est positif ou nul mais n'est pas strictement positif.
- $0 \in \mathbb{Z}^*$ est FAUX car l'exposant $^*$ retire $0$ de l'[[definition-ensemble|ensemble]], alors que $0 \in \mathbb{Z}$ est VRAI.
