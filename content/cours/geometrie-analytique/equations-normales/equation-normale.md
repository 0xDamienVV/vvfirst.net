---
title: Équation normale
order: 1
---
Soient $A$ un point et $\vec{n} \neq \vec{0}$ un [[vecteur]] de $\mathbb{R}^2$.
> [!definition] Définition
> Une **équation normale** de la droite $d$, vue depuis $A$, est :
> $\overrightarrow{AM} \cdot \vec{n} = k, \quad k \in \mathbb{R}$
>
> Le vecteur $\vec{n}$ est un **vecteur normal** à $d$ : il est [[orthogonalite|orthogonal]] à sa direction.

>[!property] Remarque
> - $d$ est la perpendiculaire à $\vec{n}$ passant par le point $P$ tel que $\overrightarrow{AP} = \dfrac{k}{\|\vec{n}\|^2}\,\vec{n}$ (voir [[projection-orthogonale|projection orthogonale]]). Si $k = 0$, $d$ passe par $A$.
> - Changer de point de départ change $k$ : si $P \in d$, la même droite s'écrit $\overrightarrow{PM}\cdot\vec{n} = 0$.
> - Un vecteur directeur de $d$ est un vecteur $\vec{w}$ avec $\vec{w}\cdot\vec{n} = 0$.
> - Si $d : \overrightarrow{AM}\cdot\vec{n} = k$ et $P$ est un point quelconque, alors $d : \overrightarrow{PM}\cdot\vec{n} = k - \overrightarrow{AP}\cdot\vec{n}$ (relation de [[addition-de-vecteurs|Chasles]]).
> - Pour intersecter $d$ avec une droite $\overrightarrow{AM} = \overrightarrow{AB} + t\,\vec{u}$, on remplace $\overrightarrow{AM}$ dans l'équation normale : on obtient une équation en $t$ (voir [[intersection-de-deux-droites|intersection de deux droites]]).
> - Pour tracer $d : \overrightarrow{AM}\cdot\vec{n} = k$, on place le point $P$ de la première remarque puis la perpendiculaire à $\vec{n}$ en $P$.

### Exemples
Soient $A$, $B$, $C$ alignés avec $AB = 2$ et $\overrightarrow{BC} = 2\overrightarrow{AB}$ :
- $\overrightarrow{AM}\cdot\overrightarrow{BC} = 0$ est la perpendiculaire à $(AB)$ passant par $A$.
- $\overrightarrow{CM}\cdot\overrightarrow{AB} = -4$ est la perpendiculaire à $(BC)$ passant par le milieu de $[BC]$ car la projection de $\overrightarrow{CM}$ sur $\overrightarrow{AB}$ vaut $-2$, ce qui amène au milieu de $[BC]$.

Dans un rectangle $ABCD$ avec $AB = 3$, $AD = 2$ :
- $\overrightarrow{DM}\cdot\overrightarrow{AC} = 18$ est identique à $\overrightarrow{DM}\cdot\overrightarrow{AC} = 2\,\overrightarrow{DC}\cdot\overrightarrow{AC}$ car $\overrightarrow{DC}\cdot\overrightarrow{AC} = AB^2 = 9$ ; c'est donc la perpendiculaire à $(AC)$ passant par $E$ tel que $\overrightarrow{DE} = 2\overrightarrow{DC}$.
- Elle coupe $g : \overrightarrow{DM} = \overrightarrow{DA} + \overrightarrow{DC} + \lambda(\overrightarrow{DA} + 2\overrightarrow{DC})$ pour $\lambda = \tfrac{13}{14}$ car, avec $\overrightarrow{AC} = \overrightarrow{DC} - \overrightarrow{DA}$, le produit scalaire vaut $5 + 14\lambda$ et doit valoir $18$.

Avec $AB^2 = 7$, $\overrightarrow{AB}\cdot\overrightarrow{AC} = 1$ et $d : \overrightarrow{AM}\cdot\overrightarrow{AB} = 2$ :
- $\overrightarrow{AB} - 7\overrightarrow{AC}$ est un vecteur directeur de $d$ car $(\overrightarrow{AB} - 7\overrightarrow{AC})\cdot\overrightarrow{AB} = 7 - 7 = 0$.
- $d$ passe par $P$ tel que $\overrightarrow{AP} = \tfrac{2}{7}\overrightarrow{AB}$, donc $d : \overrightarrow{AM} = \tfrac{2}{7}\overrightarrow{AB} + t\,(\overrightarrow{AB} - 7\overrightarrow{AC})$ (voir [[equation-vectorielle-de-droite|équation vectorielle]]).
