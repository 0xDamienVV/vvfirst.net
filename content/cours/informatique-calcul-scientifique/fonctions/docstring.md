---
title: Docstring
order: 5
---
> [!definition] Définition
> Une **docstring** est une chaîne entre triples guillemets placée **immédiatement après** la ligne `def`. Elle décrit la [[fonction]], ses paramètres et sa valeur de retour, et s'affiche avec `help(nom_de_la_fonction)`.

### Exemple
```python
def aire_triangle(base, hauteur):
    """
    Calcule l'aire d'un triangle.

    Paramètres:
        base    : longueur de la base
        hauteur : hauteur du triangle

    Retourne:
        l'aire du triangle
    """
    return base * hauteur / 2

help(aire_triangle)
```
