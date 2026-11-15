---
title: Notation asymptotique
order: 1
---
Soient $f$ et $g$ deux fonctions positives de $n \in \mathbb{N}$.
> [!definition] Définition
> - $f = \mathcal{O}(g)$ (**grand O**, borne supérieure) s'il existe $C, N > 0$ tels que $\forall n > N,\ f(n) \leq C \cdot g(n)$.
> - $f = \Omega(g)$ (**borne inférieure**) s'il existe $C, N > 0$ tels que $\forall n > N,\ f(n) \geq C \cdot g(n)$.
> - $f = \Theta(g)$ (**ordre exact**) s'il existe $C_1, C_2, N > 0$ tels que $\forall n > N,\ C_1 \cdot g(n) \leq f(n) \leq C_2 \cdot g(n)$.

Ces définitions utilisent des [[quantificateurs|quantificateurs]]. Intuitivement, $\mathcal{O}$ joue le rôle de $\leq$, $\Omega$ de $\geq$ et $\Theta$ de $=$, pour la **vitesse de croissance**.

> [!property] Remarque
> On ignore les coefficients et les termes d'ordre inférieur : $2n + 100 = \Theta(n)$.

### Exemples
- $2n + 100 = \Theta(n)$ car $n \leq 2n + 100 \leq 102n$ pour tout $n \geq 1$ : on prend $C_1 = 1$, $C_2 = 102$ et $N = 1$.
- $an + b = \Theta(n)$ pour $a, b > 0$ car $n \leq \dfrac{1}{a}(an + b)$ et $an + b \leq (a + b)n$ pour tout $n \geq 1$.
- $100n\sqrt{n} = \mathcal{O}(n^2)$ car $100n\sqrt{n} < Cn^2 \iff \sqrt{n} > \dfrac{100}{C}$ : on prend $C = 100$ et $N = 1$, ou $C = 1$ et $N = 10\,000$.
