---
title: Signe d'une expression
order: 1
---
Soit $P(x)$ une expression réelle (voir [[ensembles-de-nombres|ensembles de nombres]]).
> [!definition] Tableau de signes
> Le **tableau de signes** de $P(x)$ s'obtient ainsi :
> 1. **factoriser** $P$ (ou mettre au même dénominateur) pour obtenir un produit ou un quotient de facteurs simples,
> 2. placer les valeurs qui annulent chaque facteur (ou le dénominateur) sur une droite,
> 3. donner le signe de chaque facteur sur chaque [[intervalles|intervalle]], puis leur produit.

> [!property] Propriétés
> - Un facteur du type $(x - a)^2$ est positif ou nul : il ne change pas le signe.
> - Un quotient s'annule là où son numérateur s'annule, et n'est **pas défini** là où son dénominateur s'annule.

### Exemples
- $-x^3 - 2x^2 - x = -x(x+1)^2$ est négatif pour $x > 0$, positif pour $x < 0$ avec $x \neq -1$, et nul en $-1$ et $0$.
- $(x+3)^2 - x - 3 = (x+3)(x+2)$ est négatif sur $]-3, -2[$ et positif en dehors de $[-3, -2]$.
- $x - \dfrac{4}{x} = \dfrac{(x-2)(x+2)}{x}$ est négatif sur $]-\infty, -2[ \cup ]0, 2[$ et positif sur $]-2, 0[ \cup ]2, +\infty[$.
- $\dfrac{1}{x} - \dfrac{3}{x+1} = \dfrac{1 - 2x}{x(x+1)}$ est négatif sur $]-1, 0[ \cup \left]\dfrac{1}{2}, +\infty\right[$ et nul en $\dfrac{1}{2}$.
