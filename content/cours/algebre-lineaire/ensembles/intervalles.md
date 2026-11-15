---
title: Intervalles
order: 3
---
Soient $a,b \in \mathbb{R}$ tels que $a \leq b$.
> [!definition] Définition
> Un **intervalle** est un sous-ensemble de $\mathbb{R}$ qui contient tous les réels situés entre deux de ses éléments.  
> Les principaux intervalles délimités par $a$ et $b$ sont :
> - $\mathopen{[}a,b\mathclose{]} = \{x \in \mathbb{R} \mid a \leq x \leq b\}$, dit **fermé**.
> - $\mathopen{]}a,b\mathclose{[} = \{x \in \mathbb{R} \mid a < x < b\}$, dit **ouvert**.
> - $\mathopen{[}a,b\mathclose{[} = \{x \in \mathbb{R} \mid a \leq x < b\}$ et $\mathopen{]}a,b\mathclose{]} = \{x \in \mathbb{R} \mid a < x \leq b\}$, dits **semi-ouverts**.
>
> Les intervalles non bornés s'écrivent par exemple $\mathopen{]}-\infty,a\mathclose{[}$, $\mathopen{]}-\infty,a\mathclose{]}$, $\mathopen{]}a,+\infty\mathclose{[}$ ou $\mathopen{[}a,+\infty\mathclose{[}$.

> [!warning] Les intervalles sont des sous-ensembles de $\mathbb{R}$
> La notation $\mathopen{[}1,3\mathclose{]}$ désigne le [[sous-ensembles|sous-ensemble]] des réels $x$ tels que $1 \leq x \leq 3$, et non pas $\{1,2,3\}$.  

> [!warning] L'infini n'est jamais inclus
> $+\infty$ et $-\infty$ ne sont pas des nombres réels.  
> Les intervalles non bornés utilisent donc toujours une borne ouverte en $+\infty$ ou $-\infty$.

### Exemples
- $\mathopen{[}1,3\mathclose{]} = \{x \in \mathbb{R} \mid x \geq 1 \land x \leq 3\}$ est VRAI car la [[cours/algebre-lineaire/verite/operateurs-logiques#conjonction|conjonction]] des deux inégalités caractérise exactement les réels compris entre $1$ et $3$.
- $\mathopen{]}-\infty,-1\mathclose{]} \cup \mathopen{[}2,+\infty\mathclose{[} = \{x \in \mathbb{R} \mid x \leq -1 \lor x \geq 2\}$ est VRAI car la [[cours/algebre-lineaire/verite/operateurs-logiques#disjonction|disjonction]] décrit les deux morceaux de la [[operations-ensemblistes#réunion|réunion]].
- $\mathopen{]}0,+\infty\mathclose{[}$ est un intervalle ouvert non borné est VRAI car il contient tous les réels strictement positifs sans borne supérieure.
- $\mathopen{[}1,3\mathclose{]} \subset \mathbb{N}$ est FAUX car $\frac{3}{2} \in \mathopen{[}1,3\mathclose{]}$ et $\frac{3}{2} \notin \mathbb{N}$.