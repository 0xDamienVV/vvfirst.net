---
title: Intersection de deux droites
order: 3
---
Soient $d$ et $d'$ deux droites de $\mathbb{R}^2$ données par des [[equation-vectorielle-de-droite|équations vectorielles]] vues depuis un même point $A$, et $\vec{u}$, $\vec{v}$ deux vecteurs non [[colinearite|colinéaires]] de référence (par exemple $\overrightarrow{AB}$ et $\overrightarrow{AC}$).
> [!definition] Principe
> L'**intersection** de $d$ et $d'$ est l'ensemble des points $I$ tels que $\overrightarrow{AI}$ est donné à la fois par $d$ (paramètre $t$) et par $d'$ (paramètre $s$).  
> Par unicité de la décomposition (voir [[combinaison-lineaire|combinaison linéaire]]), on **identifie les coefficients** de $\vec{u}$ et de $\vec{v}$ : cela donne un système de deux équations en $t$ et $s$.

>[!property] Remarque
> Le système a une solution si les droites sont sécantes, aucune si elles sont parallèles distinctes, une infinité si elles sont confondues.

### Exemple
- Dans un parallélogramme $ABCD$, avec $d : \overrightarrow{AM} = 2\overrightarrow{AD} + t\left(\tfrac{1}{2}\overrightarrow{AB} - \overrightarrow{AD}\right)$ et $(AC) : \overrightarrow{AM} = k(\overrightarrow{AB} + \overrightarrow{AD})$ : on identifie $\tfrac{t}{2} = k$ et $2 - t = k$, d'où $t = \tfrac{4}{3}$ et $\overrightarrow{AI} = \tfrac{2}{3}\overrightarrow{AC}$.
