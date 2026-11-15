---
title: Mutabilité
order: 3
---
> [!definition] Définition
> Un objet est **mutable** s'il peut être modifié sur place ([[liste]]) et **immuable** sinon (nombre, `str`, [[tuple]]).  
> Avec des objets mutables, `L1 = L` ne copie pas la liste : les deux noms désignent **le même objet** (alias).

> [!property] Copies
> - `L.copy()` ou `L[:]` (voir [[indexage-avance|indexage avancé]]) crée une **copie superficielle** : la liste est nouvelle, mais ses éléments mutables sont partagés.
> - `L1 = L + L2` et `L * k` ont le même comportement pour les éléments mutables.

> [!warning] Attention
> Un tuple est immuable mais peut contenir une liste, que l'on peut modifier : pour `t = ([1, 2], [3, 4])`, `t[0] = [1, 2, 5]` provoque une erreur, mais `t[0].append(5)` est accepté.

### Exemples
- `L = [10, 20, 30]; L1 = L.copy(); L1[1] = 50; L.append(40)` : `L1` et `L` évoluent indépendamment car les éléments sont des entiers immuables.
- `L = [[10], [20], [30]]; L1 = L.copy(); L[0].append(40)` modifie aussi `L1[0]` car la copie partage les sous-listes ; `L1[1] = 50` ne change que `L1`.
- `L = [[1]]; L1 = L * 2; L[0].pop()` donne `L1 = [[], []]` car les deux éléments de `L1` sont la **même** sous-liste.
- Pour deux listes `L = [[1, 2], [3, 4]]` et `L1 = L.copy()`, `L[1].insert(1, 5)` modifie `L1[1]` et `L.insert(1, 6)` ne modifie pas `L1`.
