---
title: Suite bornée
order: 2
---
Soit $(a_n)$ une [[suite]].
> [!definition] Définition
> - $(a_n)$ est **majorée** s'il existe $M \in \mathbb{R}$ tel que $a_n \leq M$ pour tout $n$.
> - $(a_n)$ est **minorée** s'il existe $m \in \mathbb{R}$ tel que $a_n \geq m$ pour tout $n$.
> - $(a_n)$ est **bornée** si elle est majorée et minorée, c'est-à-dire s'il existe $M$ tel que $|a_n| \leq M$ pour tout $n$.

> [!property] Remarque
> Si $(a_n)$ et $(b_n)$ sont bornées, alors $(a_n b_n)$ l'est aussi car $|a_n b_n| \leq M_a M_b$.  
> La réciproque est fausse.

### Exemples
- $\dfrac{n^2}{n^2+1}$ est majorée par $1$ car $n^2 \leq n^2 + 1$.
- $\dfrac{n^2+n}{n^2+1}$ est majorée par $2$ car $n \leq n^2 + 1$ donne $n^2 + n \leq 2(n^2 + 1)$.
- $\dfrac{n+3}{n^2+1} + \dfrac{n+4}{n^2+1} + \dots + \dfrac{2n+2}{n^2+1}$ comporte $n$ termes, tous $\leq \dfrac{2n+2}{n^2+1}$, donc la somme est $\leq \dfrac{n(2n+2)}{n^2+1} \leq 4$.
- $a_n = 1, 0, 2, 0, 3, 0, \dots$ et $b_n = 0, 1, 0, 2, 0, 3, \dots$ ne sont pas bornées mais $a_n b_n = 0$ l'est.
