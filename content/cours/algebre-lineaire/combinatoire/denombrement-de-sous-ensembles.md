---
title: Dénombrement de Sous-Ensembles
order: 6
---
Soit $E$ un [[definition-ensemble|ensemble]] fini avec $|E| = n$.

> [!property] Résultats de base
> - Le nombre de [[sous-ensembles|sous-ensembles]] de $E$ à $k$ éléments est $\binom{n}{k}$ (voir [[coefficient-binomial|coefficient binomial]]).
> - Le nombre total de sous-ensembles est $|\mathcal{P}(E)| = 2^n$ (voir [[ensemble-des-parties|ensemble des parties]] et [[triangle-de-pascal|triangle de Pascal]]).

> [!property] Sous-ensembles et contraintes
> Soit $A \subset E$ avec $|A| = a$.
> - Contenant un élément fixé de $E$ et de cardinal $k$ : $\binom{n-1}{k-1}$ ; ne le contenant pas : $\binom{n-1}{k}$.
> - $B \subset A$ et $|B| = k$ : $\binom{a}{k}$ ; au total $2^a$ sous-ensembles $B \subset A$.
> - $B \cap A = \varnothing$ et $|B| = k$ : $\binom{n-a}{k}$, car $B \subset \complement_E A$.
> - $B \not\subset A$ : $2^n - 2^a$, car on retire les $2^a$ sous-ensembles de $A$ aux $2^n$ sous-ensembles de $E$.
> - $|B| = k$ et $|A \cap B| = j$ : $\binom{a}{j}\binom{n-a}{k-j}$, car on choisit $j$ éléments dans $A$ puis $k-j$ éléments dans $\complement_E A$.
> - De cardinal pair : $2^{n-1}$ pour $n \geq 1$ ; de cardinal impair : également $2^{n-1}$ (voir [[binome-de-newton|binôme de Newton]]).

### Exemples
- Si $|E| = 5$, il y a $\binom{5}{2} = 10$ sous-ensembles à $2$ éléments.
- Si $|E| = 5$, il y a $\binom{4}{1} = 4$ sous-ensembles à $2$ éléments contenant $1$ car il reste un élément à choisir parmi $4$.
- Si $|E| = 11$ et $|A| = 6$, il y a $2^{11}-2^6 = 1984$ sous-ensembles $B \not\subset A$ car on retire les sous-ensembles de $A$.
- Si $|E| = 16$ et $|A| = 5$, il y a $\binom{11}{9} = 55$ sous-ensembles $B$ à $9$ éléments avec $A \cap B = \varnothing$ car $B$ est choisi dans $\complement_E A$ qui a $11$ éléments.
- Si $|E| = 14$ et $|A| = 3$, il y a $\binom{3}{2}\binom{11}{4} = 990$ sous-ensembles $C$ à $6$ éléments avec $|A \cap C| = 2$ car on choisit $2$ éléments dans $A$ puis $4$ dans $\complement_E A$.
- Si $|E| = 4$, il y a $8$ sous-ensembles de cardinal pair car $\binom{4}{0}+\binom{4}{2}+\binom{4}{4} = 1+6+1 = 8$.
- Si $|E| = 2n$ et $|A| = n$, les ensembles $B$ vérifiant $|A \cup B| \geq 2n-1$ sont ceux qui contiennent au moins $n-1$ éléments de $\complement_E A$ : on en compte $2^n(n+1)$, car $B \cap A$ est quelconque ($2^n$ choix) et $B \cap \complement_E A$ a $n$ ou $n-1$ éléments ($1+n$ choix).
