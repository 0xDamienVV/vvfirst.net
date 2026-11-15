---
title: Coefficient Binomial
order: 2
---
Soient $n, k \in \mathbb{N}$ avec $0 \leq k \leq n$.
> [!definition] Définition
> Le **coefficient binomial** $\binom{n}{k}$ ou « $k$ parmi $n$ » est défini par :
> $\dbinom{n}{k} = \dfrac{n!}{k!\,(n-k)!}$

>[!property] Interprétation
> $\binom{n}{k}$ est le nombre de [[sous-ensembles|sous-ensembles]] à $k$ éléments d'un [[definition-ensemble|ensemble]] à $n$ éléments.
> Autrement dit, si $|E| = n$, il y a $\binom{n}{k}$ éléments dans $\mathcal{P}(E)$ de [[cardinal|cardinal]] $k$ (voir [[ensemble-des-parties|ensemble des parties]]).

>[!property] Propriétés
> - $\binom{n}{0} = \binom{n}{n} = 1$ car il n'y a qu'une seule façon de ne sélectionner aucun élément (l'ensemble vide) ou de tous les prendre.  
> - $\binom{n}{1} = \binom{n}{n-1} = n$ car choisir $1$ élément parmi $n$ donne $n$ possibilités, tout comme en choisir $n-1$.  
> - $\binom{n}{k} = \binom{n}{n-k}$ car choisir les $k$ éléments à garder revient exactement à choisir les $n-k$ éléments à écarter.


### Exemples
- $\binom{5}{2} = 10$ est VRAI car $\dfrac{5!}{2!\,3!} = \dfrac{120}{12} = 10$.
- $\binom{4}{0} = 1$ est VRAI car il n'y a qu'un seul sous-ensemble à $0$ élément : $\varnothing$.
- $\binom{6}{2} = \binom{6}{4}$ est VRAI par symétrie.