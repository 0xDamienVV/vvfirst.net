---
title: Équation et inéquation à paramètre
order: 4
---
Soit $m \in \mathbb{R}$.
> [!definition] Paramètre
> Un **paramètre** est un réel $m$ fixé qui intervient dans l'équation. Résoudre en $x$ « en fonction de $m$ », c'est donner l'ensemble solution **pour chaque valeur** de $m$.  
> On isole $x$ et on discute selon le [[signe-d-une-expression|signe]] et les **valeurs particulières** de l'expression par laquelle on divise.

> [!warning] Attention
> Diviser par une expression en $m$ qui peut être nulle ou négative impose de séparer les cas : on traite d'abord le cas nul, puis le signe.

### Exemples
- $mx - 4 = 2(x - m)$ s'écrit $(m - 2)x = -2(m-2)$ : si $m = 2$, $S = \mathbb{R}$ ; si $m \neq 2$, $S = \{-2\}$.
- $\dfrac{2}{m-1}x \leq x - \dfrac{1}{m-1}$ avec $m \neq 1$ se ramène à $(m-3)x \geq 1$ pour $m > 1$ et à $(m-3)x \leq 1$ pour $m < 1$ (on multiplie par $m - 1$) :
  - $m \in ]-\infty, 1[ \cup ]3, +\infty[$ : $S = \left[\dfrac{1}{m-3}, +\infty\right[$,
  - $m \in ]1, 3[$ : $S = \left]-\infty, \dfrac{1}{m-3}\right]$,
  - $m = 3$ : $S = \varnothing$.
- $\dfrac{4+m}{3-m}x \leq x + 2m + 1$ avec $m \neq 3$ est identique à $\dfrac{2m+1}{3-m}x \leq 2m+1$ car on soustrait $x$ ; on étudie le signe de $Q = \dfrac{2m+1}{3-m}$ :
  - $m \in ]-\infty, -\tfrac{1}{2}[ \cup ]3, +\infty[$ ($Q < 0$) : $S = [3 - m, +\infty[$,
  - $m \in ]-\tfrac{1}{2}, 3[$ ($Q > 0$) : $S = ]-\infty, 3 - m]$,
  - $m = -\tfrac{1}{2}$ : l'inéquation devient $0 \cdot x \leq 0$, donc $S = \mathbb{R}$.
