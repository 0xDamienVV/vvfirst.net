---
title: Affichage avec print
order: 6
---

# Paramètres sep et end
> [!definition] Définition
> Les paramètres **`sep`** et **`end`** de `print(a, b, sep = s, end = e)` (voir [[print-et-return]]) : elle affiche `a` et `b` séparés par `s` (par défaut un espace), puis termine par `e` (par défaut `"\n"`).

### Exemples
- `print("a", "b", "c", "d", sep = "-")` affiche `a-b-c-d`.
- `print("Comment", end = " ")` suivi de `print("ça", end = " ")` affiche `Comment ça ` sur une seule ligne.
- `print("a", "b", sep = "!", end = "?")` puis `print("c", "d", sep = "?", end = "!")` affiche `a!b?c?d!`.
- `print("a", "b", "c", "d", sep = "", end = "e")` affiche `abcde`.

# Caractères spéciaux
> [!definition] Définition
> Dans une chaîne, `\n` est un retour à la ligne, `\t` une tabulation, `\\` un backslash, `\"` une double quote et `\'` une simple quote.

### Exemples
- `print("Ceci\nest\nune\nphrase.")` affiche quatre lignes avec un seul appel.
- `print('\t\t"puisque c\'est ainsi"')` affiche deux tabulations puis la citation.
- `print("¯\\_(ツ)_/¯")` affiche le « shrug » car le backslash doit être doublé.
- Un rectangle d'étoiles (voir [[boucles-imbriquees|boucles imbriquées]]) de `lignes` lignes et `colonnes` colonnes :
  ```python
  for i in range(lignes):
      for j in range(colonnes):
          print("*", end = " ")
      print()
  ```
