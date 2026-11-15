---
title: Récurrence
order: 4
---
Soit $P(n)$ une propriété qui dépend de $n \in \mathbb{N}^*$.
> [!definition] Récurrence
> Le **raisonnement par récurrence** permet de montrer $\forall n \in \mathbb{N}^*,\ P(n)$ (voir [[quantificateurs|quantificateurs]]) en deux étapes :
> 1. **Initialisation** : vérifier $P(1)$.
> 2. **Hérédité** : montrer que $P(n) \Rightarrow P(n+1)$ pour tout $n$ (voir [[implications-remarquables|implications remarquables]]).

> [!warning] Attention
> Sans l'initialisation, l'hérédité seule ne prouve rien.

### Exemples
- $A_n = \sum_{k=0}^{n-1} r^k = \dfrac{1 - r^n}{1 - r}$ pour $r \neq 1$ : pour $n = 1$, $A_1 = 1 = \dfrac{1 - r}{1 - r}$ ; si $A_n$ est vraie, $A_{n+1} = \dfrac{1 - r^n}{1 - r} + r^n = \dfrac{1 - r^{n+1}}{1 - r}$.
- La somme des $n$ premiers entiers impairs vaut $n^2$ : $A_1 = 1$ ; si $A_n = n^2$, $A_{n+1} = n^2 + (2n+1) = (n+1)^2$.
- $a_{n+1} = 3 - \dfrac{2}{a_n}$ avec $a_1 = 3$ donne $a_2 = \dfrac{7}{3}$, $a_3 = \dfrac{15}{7}$, d'où $a_n = \dfrac{2^{n+1} - 1}{2^n - 1}$. Hérédité : $a_{n+1} = 3 - \dfrac{2(2^n - 1)}{2^{n+1} - 1} = \dfrac{2^{n+2} - 1}{2^{n+1} - 1}$.
- $A_n = 4 + 8 + \dots + 4n = 2n(n+1)$ : pour $n = 1$, $A_1 = 4 = 2 \cdot 1 \cdot 2$ ; si $A_n = 2n(n+1)$, $A_{n+1} = 2n(n+1) + 4(n+1) = 2(n+1)(n+2)$.
