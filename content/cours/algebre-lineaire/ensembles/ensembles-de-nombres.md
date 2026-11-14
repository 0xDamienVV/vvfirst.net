---
title: Ensembles Conventionnels
order: 2
---
Il existe des écritures spéciales pour parler d'ensembles utiles souvent utilisés.

# Ensembles de nombres
> [!definition] Définition
> - $\mathbb{P} = \{p\in\mathbb{N} : p\ge 2 \land \forall d\in\mathbb{N},\ (d\mid p \Rightarrow d=1 \lor d=p)\}$ est l'ensemble des **nombres premiers**.
> - $\mathbb{N} = \{0, 1, 2, \dots\}$ est l'ensemble des **entiers naturels**.
> - $\mathbb{Z} = \{a - b \mid a,\ b \in \mathbb{N}\}$ est l'ensemble des **entiers relatifs**.
> - $\mathbb{Q} = \{\frac{a}{b} \mid a \in \mathbb{Z},\ b \in \mathbb{N}^*\}$ est l'ensemble des **rationnels**.
> - $\mathbb{R} = \mathopen{]}-\infty,+\infty\mathclose{[}$ est l'ensemble des **réels**.
> - $\mathbb{C} = \{a + bi \mid a,\ b \in \mathbb{R} \}$ est l'ensemble des **complexes**.
> - $\mathbb{H} = \{a + bi + cj + dk \mid a,\ b,\ c,\ d \in \mathbb{R}\}$ est l'ensemble des **quaternions**.

> [!property] Propriété
> $\mathbb{P} \subset \mathbb{N} \subset \mathbb{Z} \subset \mathbb{Q} \subset \mathbb{R} \subset \mathbb{C} \subset \mathbb{H}$

> [!warning] Définitions provisoires
> Les définitions données ici sont intuitives.  
> Nous ne possédons pas encore les outils nécessaires pour construire rigoureusement $\mathbb{N}$ et $\mathbb{R}$.

# Notations Dérivés
> [!definition] Définition
> L'indice $+$ désigne les éléments positifs ou nuls, et l'indice $-$ les éléments négatifs ou nuls. L'exposant $+$ indique que l'on se restreint aux éléments positifs ou nuls; combiné avec l'astérisque $*$, qui enlève $0$, il désigne les éléments strictement positifs :
> - $\mathbb{R}_+ = \{x \in \mathbb{R} \mid x \geq 0\}$.
> - $\mathbb{R}_- = \{x \in \mathbb{R} \mid x \leq 0\}$.
> - $\mathbb{Z}_- = \{x \in \mathbb{Z} \mid x \leq 0\}$.
>
> Ces indices se combinent avec l'astérisque, qui retire $0$. Ainsi $\mathbb{R}_+^* = \{x \in \mathbb{R} \mid x > 0\}$ et $\mathbb{Z}_-^* = \mathbb{Z}_- \setminus \{0\}$.

### Exemples
- $-\frac{1}{2} \in \mathbb{Q}$ et $-\frac{1}{2} \notin \mathbb{Z}$ sont VRAIS car $-\frac{1}{2}$ est un quotient d'entiers mais n'est pas un entier.
- $\mathbb{R}_+^* = ]0,+\infty[$ est VRAI car ce sont exactement les réels strictement positifs.
- $\mathbb{Z}_-^* = \{-1,-2,\dots\}$ est VRAI car on a retiré zéro des entiers négatifs ou nuls.
