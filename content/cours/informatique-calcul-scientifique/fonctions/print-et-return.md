---
title: print et return
order: 2
---
> [!definition] Différence
> - `print` (voir [[fonction]]) **affiche** une valeur à l'écran et ne la rend pas disponible au reste du programme.
> - `return` **retourne** une valeur que l'appelant peut stocker et réutiliser.

> [!warning] Attention
> `print` ajoute un espace entre ses arguments et un retour à la ligne final. Pour imiter un affichage avec une chaîne, il ne faut donc pas de `\n` après la dernière ligne.

### Exemple
- `afficher_a(n)` affiche les lignes `i x 3 = 3i` pour `i` de `1` à `n`. La fonction `texte_a(n)` qui retourne la chaîne équivalente est :
  ```python
  def texte_a(n):
      s = ""
      for i in range(1, n + 1):
          s += str(i) + " x 3 = " + str(3 * i)
          if i < n:
              s += "\n"
      return s
  ```
  car `print(texte_a(n))` ajoute lui-même le dernier `\n`.
