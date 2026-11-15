---
title: Paramètres
order: 3
---

# Paramètre par défaut
> [!definition] Définition
> Un paramètre avec une **valeur par défaut** (`def f(x, y = 1)`) est optionnel. Les paramètres obligatoires s'écrivent **avant** les paramètres optionnels.

### Exemple
- `def vol_pave(x1, x2, x3 = 1): return x1 * x2 * x3` : `vol_pave(2, 3, 4)` vaut `24` et `vol_pave(2, 3)` vaut `6`, mais `vol_pave(2)` produit une erreur car `x2` manque.

# Nombre variable d'arguments
> [!definition] Définition
> Un paramètre précédé d'une étoile, `def f(s, *extra)`, reçoit dans le [[tuple]] `extra` tous les arguments positionnels en trop (zéro ou plus).

### Exemple
- `def nb(*args): return len(args)` : `nb(1, 2, 3)` vaut `3` et `nb()` vaut `0`.
- `def f(s, *extra)` appelée par `f(-10, 1, -2)` donne `s = -10` et `extra = (1, -2)`.
- `def f(*args): return {i: args[i] for i in range(len(args))}` appelée avec `f(3, 5)` vaut `{0: 3, 1: 5}`.

# Arguments nommés
> [!definition] Définition
> On peut passer un argument par son **nom** : `f(r = 2, h = 3)`. L'ordre n'a alors plus d'importance, mais un argument positionnel ne peut pas suivre un argument nommé.

### Exemples
Avec `def vol_cylindre(h, r = 1)` :
- `vol_cylindre(3, 2)`, `vol_cylindre(r = 2, h = 3)`, `vol_cylindre(3)`, `vol_cylindre(h = 3)` et `vol_cylindre(2, r = 3)` sont corrects.
- `vol_cylindre(r = 3)` produit une erreur car `h` n'est pas fourni.
- `def f(x, y = 1, z = "blah")` : `f(1, "blih")` affiche `1 blih blah` car le deuxième argument positionnel va dans `y`.
