---
title: Équation vectorielle de droite
order: 1
---
Soient $A$ un point et $\vec{u} \neq \vec{0}$ un [[vecteur]] de $\mathbb{R}^2$ ou $\mathbb{R}^3$.
> [!definition] Définition
> La **droite** $d$ passant par $A$ et de **vecteur directeur** $\vec{u}$ est l'ensemble des points $M$ tels que :
> $\overrightarrow{AM} = t\,\vec{u}, \quad t \in \mathbb{R}$
>
> C'est une équation vectorielle de $d$ *vue depuis $A$*, et $t$ est le **paramètre**.

>[!property] Remarque
> - $M \in d$ si et seulement si $\overrightarrow{AM}$ et $\vec{u}$ sont [[colinearite|colinéaires]].
> - Une droite a plusieurs équations : on peut changer de point $A \in d$ ou de vecteur directeur $\alpha\vec{u}$ ($\alpha \neq 0$).
> - Pour une équation vue depuis un autre point $P$, on revient à $A$ par [[addition-de-vecteurs|Chasles]] : $\overrightarrow{AM} = \overrightarrow{AP} + \overrightarrow{PM}$.

### Exemples
Pour trois points non alignés $A$, $B$, $C$ :
- $\overrightarrow{AM} = t\,\overrightarrow{AB}$ est la droite $(AB)$ : $t = 0$ donne $A$ et $t = 1$ donne $B$.
- $\overrightarrow{AM} = \overrightarrow{AB} + t\,\overrightarrow{AC}$ est la parallèle à $(AC)$ passant par $B$.
- $\overrightarrow{BM} = \overrightarrow{AC} + t(\overrightarrow{AB} + \overrightarrow{AC})$ est la droite $(AD)$ avec $ABDC$ un [[parallelogramme|parallélogramme]] car $\overrightarrow{AM} = \overrightarrow{AB} + \overrightarrow{BM} = (1+t)(\overrightarrow{AB} + \overrightarrow{AC})$.
