---
title: Coefficient binomial
order: 2
---
Soient $n, k \in \mathbb{N}$ avec $0 \leq k \leq n$.
> [!definition] Définition
> Le **coefficient binomial** $\binom{n}{k}$ ("$k$ parmi $n$") est défini par :
> $\dbinom{n}{k} = \dfrac{n!}{k!\,(n-k)!}$ (voir [[factorielle|factorielle]]).

>[!property] Interprétation
> $\binom{n}{k}$ est le nombre de [[sous-ensembles|sous-ensembles]] à $k$ éléments d'un [[definition-ensemble|ensemble]] à $n$ éléments.
> Autrement dit, si $|E| = n$, il y a $\binom{n}{k}$ éléments de $\mathcal{P}(E)$ de [[cardinal|cardinal]] $k$ (voir [[ensemble-des-parties|ensemble des parties]]).

>[!property] Propriétés
> - $\binom{n}{0} = \binom{n}{n} = 1$
> - $\binom{n}{1} = \binom{n}{n-1} = n$
> - Symétrie : $\binom{n}{k} = \binom{n}{n-k}$
> - Relation de Pascal : $\binom{n}{k} + \binom{n}{k+1} = \binom{n+1}{k+1}$ (voir [[triangle-de-pascal|triangle de Pascal]])

### Exemples
- $\binom{5}{2} = 10$ est VRAI car $\dfrac{5!}{2!\,3!} = \dfrac{120}{12} = 10$.
- $\binom{4}{0} = 1$ est VRAI car il n'y a qu'un seul sous-ensemble à $0$ élément : $\varnothing$.
- $\binom{6}{2} = \binom{6}{4}$ est VRAI par symétrie.

### Preuve de la symétrie
$\binom{n}{n-k} = \dfrac{n!}{(n-k)!\,(n-(n-k))!} = \dfrac{n!}{(n-k)!\,k!} = \binom{n}{k}$.
