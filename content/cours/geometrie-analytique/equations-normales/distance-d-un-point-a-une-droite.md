---
title: Distance d'un point à une droite
order: 2
---
Soient $d : \overrightarrow{BM}\cdot\vec{n} = k$ une [[equation-normale|équation normale]] vue depuis un point $B$.
> [!definition] Définition
> La **distance** de $B$ à $d$ est la distance $BH$ où $H$ est le pied de la perpendiculaire à $d$ passant par $B$ :
> $\text{dist}(B, d) = \dfrac{|k|}{\|\vec{n}\|}$

>[!property] Remarque
> $\overrightarrow{BH}$ est [[colinearite|colinéaire]] à $\vec{n}$ : $\overrightarrow{BH} = \dfrac{k}{\|\vec{n}\|^2}\vec{n}$.

### Exemple
- Dans un rectangle $ABCD$ avec $AB = 3$, $AD = 1$ et $d : \overrightarrow{AM}\cdot\overrightarrow{BD} = 0$ : vue depuis $B$, $d : \overrightarrow{BM}\cdot\overrightarrow{BD} = \overrightarrow{BA}\cdot\overrightarrow{BD} = 9$ et $BD = \sqrt{10}$, donc $\text{dist}(B, d) = \tfrac{9}{\sqrt{10}}$.
