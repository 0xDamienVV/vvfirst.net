---
title: Suite monotone
order: 3
---
Soit $(a_n)$ une [[suite]] (voir aussi [[suite-bornee|suite bornée]]).
> [!definition] Définition
> - $(a_n)$ est **croissante** si $a_{n+1} \geq a_n$ pour tout $n$, **strictement croissante** si $a_{n+1} > a_n$.
> - $(a_n)$ est **décroissante** si $a_{n+1} \leq a_n$ pour tout $n$, **strictement décroissante** si $a_{n+1} < a_n$.
> - Elle est **monotone** si elle est croissante ou décroissante.

> [!property] Remarque
> Pour étudier la monotonie, on étudie le [[signe-d-une-expression|signe]] de $a_{n+1} - a_n$.

### Exemple
- $a_n = 1 - \dfrac{1}{n}$ est strictement croissante et $b_n = 1 + \dfrac{1}{n}$ strictement décroissante, avec $a_1 = 0 < b_1 = 2$, mais $b_n > a_n$ pour tout $n$ car $b_n - a_n = \dfrac{2}{n} > 0$.
