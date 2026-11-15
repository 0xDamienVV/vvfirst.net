---
title: Dictionnaire
order: 2
---
> [!definition] Définition
> Un **dictionnaire** associe des **valeurs** à des **clés** : `d = {cle: valeur, ...}`. Les clés sont **uniques** et **non mutables** (voir [[mutabilite|mutabilité]]) (nombre, `str`, [[tuple]]) ; les valeurs sont quelconques.

> [!property] Opérations
> - `d[cle] = v` ajoute ou remplace une entrée, `d[cle]` la lit (erreur si absente), `d.get(cle)` retourne `None` si absente.
> - `d.pop(cle)` supprime l'entrée, `cle in d` teste la présence d'une clé.
> - `for c in d` et `d.keys()` parcourent les clés, `d.values()` les valeurs et `d.items()` les couples `(clé, valeur)`.

### Exemples
```python
d = {}
d["arbre"] = 0
d["pomme"] = 1
d["pomme"] = 10        # remplace la valeur
d.pop("pomme")
d1 = {}
for c in d:
    if c[0] == "a":      # clés commençant par "a"
        d1[c] = d[c]
```
- `d = {"nom": "Poirot", "notes": [4, 4.5]}` : `d["notes"].extend([5])` modifie la liste stockée dans le dictionnaire.
- `d.get("adresse")` vaut `None` si la clé est absente, alors que `d["adresse"]` provoque une erreur.
- Les clés associées à une valeur paire : `for c in d: if d[c] % 2 == 0: print(c)`.
