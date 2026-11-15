---
title: Binôme de Newton
order: 5
---
Soient $a, b \in \mathbb{R}$ et $n \in \mathbb{N}$.
> [!property] Théorème
> $(a+b)^n = \displaystyle\sum_{k=0}^{n} \binom{n}{k}\, a^{n-k}\, b^{k}$

Les coefficients sont ceux de la ligne $n$ du [[triangle-de-pascal|triangle de Pascal]] (voir aussi [[notation-somme|notation somme]]).

> [!property] Conséquences
> - En posant $a = b = 1$ : $\sum_{k=0}^{n} \binom{n}{k} = 2^n$.
> - En posant $a = 1$, $b = -1$ (pour $n \geq 1$) : $\sum_{k=0}^{n} (-1)^k \binom{n}{k} = 0$.
> - Donc la somme des coefficients d'indice pair est égale à celle des coefficients d'indice impair, et vaut $2^{n-1}$.

### Exemples
- $(a+b)^3 = a^3 + 3a^2b + 3ab^2 + b^3$ est VRAI car ce sont les coefficients $1,3,3,1$ de la ligne $3$ du triangle.
- Le coefficient de $x^2$ dans $(1+x)^5$ est $\binom{5}{2} = 10$ car $x^2$ correspond à $k=2$.

# Extraction d'un coefficient
Le **terme général** de $(u+v)^n$ est $\binom{n}{k}\,u^{n-k}\,v^{k}$.  
Pour trouver le coefficient de $x^m$ :
- on écrit le terme général avec $u$ et $v$ en fonction de $x$ ;
- on simplifie la puissance de $x$, qui dépend de $k$ ;
- on cherche les valeurs entières $k \in \{0,\dots,n\}$ pour lesquelles cette puissance vaut $m$ (il peut y en avoir plusieurs, ou aucune).

### Exemples
- Le coefficient de $x^3$ dans $(2+x)^5$ est $\binom{5}{3}\,2^{2} = 40$ car le terme en $x^3$ correspond à $k=3$.
- Le coefficient de $x^3$ dans $\left(2x+\frac{1}{x}\right)^6$ est $0$ car le terme général est $\binom{6}{k}2^{6-k}x^{6-2k}$ et $6-2k=3$ n'a pas de solution entière.
- Le coefficient de $x^7$ dans $(2x+x^5)^3-(1-x)^9$ est $48$ car $\binom{3}{2}(2x)^2x^5=12x^7$ et $-\binom{9}{7}(-x)^7=36x^7$ : on traite séparément chaque terme de la différence.

> [!warning] Attention aux signes et aux constantes
> Si $v=-x$, alors $v^k=(-1)^kx^k$.  
> De même, dans $(2x+1)^n$, la constante $2$ est élevée à la puissance **avec** $x$ : $(2x)^{n-k}=2^{n-k}x^{n-k}$.
