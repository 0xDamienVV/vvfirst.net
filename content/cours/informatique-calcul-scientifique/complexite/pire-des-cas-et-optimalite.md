---
title: Pire des cas et optimalité
order: 5
---

# Pire des cas
> [!definition] Définition
> Le [[temps-de-parcours|temps de parcours]] **au pire des cas** est le plus grand temps de parcours sur toutes les entrées de taille $n$. Il peut différer du temps sur certaines instances.

### Exemples
- `my_max`, `my_sum` et `my_count` (voir [[algorithmes-sur-les-listes|algorithmes sur les listes]]) parcourent toujours toute la liste : leur temps est $\Theta(n)$ pour toute entrée.
- `my_index(L, x)` s'arrête dès que `x` est trouvé : temps constant si `x` est en tête, mais $\Theta(n)$ au pire des cas (`x` absent ou en fin de liste).
- `my_pop(L, i)` (voir [[decalage-des-elements|décalage des éléments]]) déplace $n - i - 1$ éléments : constant si $i$ est proche de $n - 1$, $\Theta(n)$ au pire des cas ($i = 0$) ; de même pour `my_insert`.
- `my_remove(L, x)` est $\Theta(n)$ pour toute position de `x`, car on parcourt jusqu'à `x` puis on décale le reste.

# Optimalité
> [!definition] Définition
> Un algorithme est **optimal** si aucun algorithme ne résout le même problème avec un meilleur temps de parcours (asymptotiquement). Une **borne inférieure** $\Omega(\cdot)$ vaut pour tout algorithme.

### Exemples
- `my_max`, `my_sum`, `my_count` sont optimaux : on ne peut pas connaître le maximum sans regarder tous les éléments.
- `my_index` est optimal au pire des cas pour une liste quelconque.
- Une borne inférieure triviale pour multiplier deux matrices $n \times n$ est $\Omega(n^2)$ car il faut au moins lire les $2n^2$ éléments.
- `my_pop` et `my_insert` ne sont pas nécessairement optimaux : le temps linéaire en milieu de liste est un **choix de conception** des listes Python, qui garantit un temps constant pour `L[i]`, `append` et `pop()`.
