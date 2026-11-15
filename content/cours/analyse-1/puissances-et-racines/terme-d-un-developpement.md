---
title: Terme d'un développement
order: 6
---
Soient $a, b \in \mathbb{R}^*$ et $n \in \mathbb{N}$ (voir [[puissances|puissances]]).
> [!property] Terme général
> Dans $(a + b)^n = \displaystyle\sum_{k=0}^{n} \binom{n}{k}\, a^{n-k} b^k$ (voir [[binome-de-newton|binôme de Newton]]), le **terme général** est $T_k = \binom{n}{k}\, a^{n-k} b^k$.  
> Pour trouver le terme en $x^m$ (le **terme constant** correspond à $m = 0$), on écrit $T_k$ comme un produit de coefficients et d'une puissance de $x$, puis on résout l'équation d'exposants pour trouver $k$.

> [!warning] Attention
> On regroupe d'abord les puissances de $x$ avec $x^p x^q = x^{p+q}$ et $\dfrac{1}{x^q} = x^{-q}$ ; le coefficient comprend aussi les puissances des constantes.

### Exemples
- Le terme en $x^6$ de $\left(x + \dfrac{2}{x}\right)^{10}$ est $180x^6$ car $T_k = \binom{10}{k}2^k x^{10-2k}$ vaut $x^6$ pour $k = 2$ et $\binom{10}{2}\,2^2 = 45 \cdot 4 = 180$.
- Le terme constant de $\left(\dfrac{x^2}{3} + \dfrac{2}{x^3}\right)^5$ est $\dfrac{40}{27}$ car $T_k = \binom{5}{k}\dfrac{2^k}{3^{5-k}}\,x^{10-5k}$ vaut $x^0$ pour $k = 2$ et $\binom{5}{2}\dfrac{2^2}{3^3} = \dfrac{40}{27}$.
