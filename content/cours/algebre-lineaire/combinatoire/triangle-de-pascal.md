---
title: Triangle de Pascal
order: 3
---
> [!definition] Relation de Pascal
> Pour $0 \leq k < n$ :
> $\dbinom{n}{k} + \dbinom{n}{k+1} = \dbinom{n+1}{k+1}$

Le **triangle de Pascal** range les [[coefficient-binomial|coefficients binomiaux]] : la ligne $n$ contient $\binom{n}{0}, \binom{n}{1}, \dots, \binom{n}{n}$.
Par la relation de Pascal, chaque coefficient est la somme des deux coefficients situés au-dessus de lui.

| $n$ | coefficients |
|---|---|
| 0 | 1 |
| 1 | 1 1 |
| 2 | 1 2 1 |
| 3 | 1 3 3 1 |
| 4 | 1 4 6 4 1 |

### Preuve de la relation de Pascal
$\binom{n}{k} + \binom{n}{k+1} = \dfrac{n!}{k!\,(n-k)!} + \dfrac{n!}{(k+1)!\,(n-k-1)!} = \dfrac{n!\,(k+1) + n!\,(n-k)}{(k+1)!\,(n-k)!} = \dfrac{n!\,(n+1)}{(k+1)!\,(n-k)!} = \binom{n+1}{k+1}$.

>[!property] Somme d'une ligne
> $\displaystyle\sum_{k=0}^{n} \binom{n}{k} = 2^n$.
> C'est le [[cardinal|cardinal]] de $\mathcal{P}(E)$ pour $|E| = n$ (voir [[ensemble-des-parties|ensemble des parties]]) : chaque [[sous-ensembles|sous-ensemble]] a un cardinal $k$ compris entre $0$ et $n$.

### Exemples
- $\binom{4}{1} + \binom{4}{2} = \binom{5}{2}$ est VRAI car $4 + 6 = 10$.
- Ligne $4$ : $1+4+6+4+1 = 16 = 2^4$ est VRAI.
