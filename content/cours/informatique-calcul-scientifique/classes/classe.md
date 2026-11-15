---
title: Classe
order: 1
---
> [!definition] Définition
> Une **classe** regroupe des données (les **attributs**) et des [[fonction|fonctions]] (les **méthodes**). Un **objet** est une instance de la classe, créée par `NomClasse(...)`.
> - `__init__(self, ...)` est le **constructeur** : il initialise les attributs `self.x = ...`.
> - `self` désigne l'objet sur lequel la méthode est appelée : `obj.m(a)` exécute `m(obj, a)`.
> - `__str__(self)` retourne la chaîne affichée par `print(obj)`.

> [!warning] Attention
> Un attribut qui est une [[liste]] est **mutable** (voir [[mutabilite|mutabilité]]) : `self.contenu.append(...)` modifie la liste de l'objet, alors que `self.contenu = self.contenu[1:]` crée une **nouvelle** liste (un slice, voir [[indexage-avance|indexage avancé]]).

### Exemple
```python
class Boite:
    def __init__(self, contenu):
        self.contenu = contenu

    def ajouter(self, autre_boite):
        self.contenu.append(autre_boite.contenu[0])
        autre_boite.contenu = autre_boite.contenu[1:]
        return len(self.contenu)

    def __str__(self):
        return str(self.contenu)

b1 = Boite([1, 2])
b2 = Boite([3, 4, 5])
b1.ajouter(b2)   # b1 : [1, 2, 3], b2 : [4, 5]
b2.ajouter(b1)   # b2 : [4, 5, 1], b1 : [2, 3]
print(b1)        # [2, 3]
```
- `b1.ajouter(b2)` retourne `3` : une méthode peut modifier **deux** objets.
- `b2.ajouter(b1)` retire le premier élément de `b1`, d'où `b1 = [2, 3]` à la fin.
