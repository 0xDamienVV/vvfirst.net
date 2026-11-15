---
title: Ordres de croissance
order: 3
---
> [!definition] Définition
> On range des fonctions par **ordre de croissance** (voir [[notation-asymptotique|notation asymptotique]]) : $f$ est placée avant $g$ si $f = \mathcal{O}(g)$, et on regroupe celles qui vérifient $f = \Theta(g)$.

> [!property] Règles
> - Une fonction constante ou bornée entre deux constantes est $\Theta(1)$.
> - On ne garde que le terme dominant, sans coefficient.
> - Pour $p < q$, $n^p$ est avant $n^q$ (voir [[proprietes-de-la-notation#puissances|puissances]]).

### Exemple
$n + 50$, $n\sqrt{n}$, $2n$, $100$, $10n^{0.1}$, $n^2$, $n^3 + n^2$, $n^3$, $n^{1.1}$, $|\sin n| + 1$, $n^{10}$ se rangent ainsi :

$\{100,\ |\sin n| + 1\}$, $10n^{0.1}$, $\{n + 50,\ 2n\}$, $n^{1.1}$, $n\sqrt{n}$, $n^2$, $\{n^3 + n^2,\ n^3\}$, $n^{10}$

car les exposants sont $0 < 0{,}1 < 1 < 1{,}1 < 1{,}5 < 2 < 3 < 10$ et $|\sin n| + 1 \in [1, 2]$.
