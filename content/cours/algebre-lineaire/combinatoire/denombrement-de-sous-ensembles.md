---
title: Dénombrement de Sous-Ensembles
order: 5
---
Soit $E$ un [[definition-ensemble|ensemble]] fini avec $|E| = n$.

>[!property] Résultats de base
> - Le nombre de [[sous-ensembles|sous-ensembles]] de $E$ à $k$ éléments est $\binom{n}{k}$ (voir [[coefficient-binomial|coefficient binomial]]).
> - Le nombre total de sous-ensembles est $|\mathcal{P}(E)| = 2^n$ (voir [[ensemble-des-parties|ensemble des parties]] et [[triangle-de-pascal|triangle de Pascal]]).

### Sous-ensembles avec contraintes
Soit $E = \{1, 2, \dots, n\}$.
- **Contenant un élément fixé** $a$ et de cardinal $k$ : on choisit les $k-1$ autres éléments parmi $n-1$, soit $\binom{n-1}{k-1}$.
- **Ne contenant pas** $a$ et de cardinal $k$ : $\binom{n-1}{k}$.
- **De cardinal pair** : $\sum_{k \text{ pair}} \binom{n}{k} = 2^{n-1}$ pour $n \geq 1$.
- **De cardinal impair** : $2^{n-1}$ également pour $n \geq 1$.

### Exemples
- Si $|E| = 5$, il y a $\binom{5}{2} = 10$ sous-ensembles à $2$ éléments.
- Si $|E| = 5$, il y a $\binom{4}{1} = 4$ sous-ensembles à $2$ éléments contenant $1$.
- Si $|E| = 4$, il y a $2^3 = 8$ sous-ensembles de cardinal pair : $\binom{4}{0}+\binom{4}{2}+\binom{4}{4} = 1+6+1 = 8$ est VRAI.
