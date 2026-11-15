---
title: Intervalles
order: 3
---

Soient $a,b \in \mathbb{R}$ tels que $a \leq b$.

> [!definition] Définition
> Un **intervalle** est un [[definition-ensemble|ensemble]] de réels qui contient tous les réels situés entre deux de ses éléments.
> Les principaux intervalles délimités par $a$ et $b$ sont :
> - $\mathopen{[}a,b\mathclose{]} = \{x \in \mathbb{R} \mid a \leq x \leq b\}$, dit **fermé** ;
> - $\mathopen{]}a,b\mathclose{[} = \{x \in \mathbb{R} \mid a < x < b\}$, dit **ouvert** ;
> - $\mathopen{[}a,b\mathclose{[} = \{x \in \mathbb{R} \mid a \leq x < b\}$ et $\mathopen{]}a,b\mathclose{]} = \{x \in \mathbb{R} \mid a < x \leq b\}$, dits **semi-ouverts**.
>
> Les intervalles non bornés s'écrivent $\mathopen{]}-\infty,a\mathclose{[}$, $\mathopen{]}-\infty,a\mathclose{]}$, $\mathopen{]}a,+\infty\mathclose{[}$ ou $\mathopen{[}a,+\infty\mathclose{[}$.

> [!warning] Ne pas confondre intervalle et énumération
> La notation $\mathopen{[}1,3\mathclose{]}$ désigne l'[[definition-ensemble|ensemble]] des réels $x$ tels que $1 \leq x \leq 3$, et non pas $\{1,2,3\}$.

> [!warning] L'infini n'est jamais inclus
> $+\infty$ et $-\infty$ ne sont pas des nombres réels.
> Les intervalles non bornés utilisent donc toujours une borne ouverte en $+\infty$ ou $-\infty$ : on n'écrit jamais $\mathopen{[}a,+\infty\mathclose{]}$.

### Exemples
- $\mathopen{[}1,3\mathclose{]} = \{x \in \mathbb{R} \mid (x \geq 1) \land (x \leq 3)\}$ est VRAI car la [[operateurs-logiques#conjonction|conjonction]] des deux inégalités caractérise exactement les réels compris entre $1$ et $3$.
- $\mathopen{]}0,+\infty\mathclose{[} = \{x \in \mathbb{R} \mid x > 0\} = \mathbb{R}_+^*$ est VRAI car ce sont exactement les réels strictement positifs.
- $0 \in \mathopen{[}0,1\mathclose{[}$ et $1 \notin \mathopen{[}0,1\mathclose{[}$ sont VRAIS car $\mathopen{[}0,1\mathclose{[}$ contient sa borne gauche mais exclut sa borne droite.
- $\mathopen{[}1,3\mathclose{]} = \{1,2,3\}$ est FAUX car $\frac{3}{2} \in \mathopen{[}1,3\mathclose{]}$ alors que $\frac{3}{2} \notin \{1,2,3\}$ : un intervalle contient une infinité de réels, pas seulement ses bornes entières.
