---
title: Binôme de Newton
order: 4
---
Soient $a, b \in \mathbb{R}$ et $n \in \mathbb{N}$.
> [!definition] Théorème
> $(a+b)^n = \displaystyle\sum_{k=0}^{n} \binom{n}{k}\, a^{n-k}\, b^{k}$

Les coefficients sont ceux de la ligne $n$ du [[triangle-de-pascal|triangle de Pascal]].

>[!property] Conséquences
> - En posant $a = b = 1$ : $\sum_{k=0}^{n} \binom{n}{k} = 2^n$.
> - En posant $a = 1$, $b = -1$ (pour $n \geq 1$) : $\sum_{k=0}^{n} (-1)^k \binom{n}{k} = 0$.
> - Donc la somme des coefficients d'indice pair est égale à celle des coefficients d'indice impair, et vaut $2^{n-1}$.

### Exemples
- $(a+b)^3 = a^3 + 3a^2b + 3ab^2 + b^3$ est VRAI (ligne $3$ du triangle : $1,3,3,1$).
- Le coefficient de $x^2$ dans $(1+x)^5$ est $\binom{5}{2} = 10$.
- Le coefficient de $x^3$ dans $(2+x)^5$ est $\binom{5}{3}\,2^{2} = 40$.

### Extraction de coefficients
Pour trouver le coefficient d'un terme $x^m$ dans $(a+bx)^n$, on identifie le terme $k = m$ : $\binom{n}{m}\, a^{n-m}\, b^{m}$.

> [!warning] Attention
> L'indice $k$ porte sur $b$ : le terme en $b^k$ a pour coefficient $\binom{n}{k}$, pas $\binom{n}{n-k}$ à confondre avec $a^k$  
>(même valeur par symétrie, mais l'exposant à repérer est celui de la variable).
