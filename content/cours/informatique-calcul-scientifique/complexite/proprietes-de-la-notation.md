---
title: Propriétés de la notation
order: 2
---
Soient $f$, $g$, $h$ des fonctions positives de $n$.

# Dualité de O et Ω
> [!property] Propriété
> $f = \Omega(g) \iff g = \mathcal{O}(f)$

### Exemple
- $f(n) \geq C\,g(n)$ équivaut à $g(n) \leq \dfrac{1}{C}f(n)$ : on passe de $C$ à $C' = \dfrac{1}{C}$ avec le même $N$.

# Caractérisation de Θ
> [!property] Propriété
> $f = \Theta(g) \iff f = \mathcal{O}(g) \text{ et } f = \Omega(g)$

### Exemple
- Si $f = \mathcal{O}(g)$ avec $(C_2, N_2)$ et $f = \Omega(g)$ avec $(C_1, N_1)$, alors $C_1 g \leq f \leq C_2 g$ pour $n > \max(N_1, N_2)$.

# Transitivité
> [!property] Propriété
> $f = \mathcal{O}(g)$ et $g = \mathcal{O}(h) \implies f = \mathcal{O}(h)$

### Exemple
- Si $f \leq C_1 g$ et $g \leq C_2 h$ pour $n > \max(N_1, N_2)$, alors $f \leq C_1 C_2 h$.  
  On en déduit que $T_\ell(n) = \Theta(n)$ est $\mathcal{O}(T_s(n))$ avec $T_s(n) = \Theta(n^2)$, car $n = \mathcal{O}(n^2) = \mathcal{O}(T_s)$.

# Puissances
Soient $p < q$ deux rationnels strictement positifs.
> [!property] Propriété
> $n^p = \mathcal{O}(n^q)$ et $n^q \neq \mathcal{O}(n^p)$

### Exemple
- $n^p \leq n^q$ pour $n \geq 1$ donne le premier point. Si $n^q \leq C n^p$ pour tout $n > N$, alors $n^{q-p} \leq C$, ce qui est impossible car $n^{q-p} \to +\infty$ (voir [[limite-infinie|limite infinie]]).

# Polynômes
> [!property] Propriété
> Si $f(n) = a_d n^d + \dots + a_1 n + a_0$ avec $a_d > 0$, alors $f = \Theta(n^d)$.

### Exemple
- $\dfrac{f(n)}{n^d} \to a_d$, donc pour $n$ grand, $\dfrac{a_d}{2} n^d < f(n) < \dfrac{3a_d}{2} n^d$.  
  Par exemple $n^3 + n^2 = \Theta(n^3)$.
