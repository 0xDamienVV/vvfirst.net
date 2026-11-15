---
title: Équation cartésienne
order: 2
---
Dans un repère de $\mathbb{R}^2$.
> [!definition] Définition
> Une **équation cartésienne** d'une droite $d$ est une équation $ax + by = c$ avec $(a, b) \neq (0, 0)$.  
> Un vecteur directeur de $d$ est $\begin{pmatrix} -b \\ a \end{pmatrix}$.

>[!property] Remarque
> - Dans un repère **orthonormé**, $\begin{pmatrix} a \\ b \end{pmatrix}$ est un vecteur normal à $d$ (voir [[equation-normale|équation normale]]).
> - Deux équations proportionnelles décrivent la même droite.
> - Les parallèles à $d$ s'écrivent $ax + by = c'$.
> - Pour passer de paramétrique à cartésienne, on élimine $t$ : $b(x - x_0) - a(y - y_0) = 0$, d'après la [[colinearite-en-coordonnees|colinéarité en coordonnées]].

> - Une droite passe par $A$ et $B$ si et seulement si $\det(\overrightarrow{AB}, \overrightarrow{AM}) = 0$.
> - Dans un repère **orthonormé**, la perpendiculaire à $d$ passant par $P(x_P, y_P)$ est $bx - ay = bx_P - ay_P$.

### Exemples
- $d : x + 3y = 7$ a pour vecteur directeur $\begin{pmatrix} 3 \\ -1 \end{pmatrix}$.
- La parallèle à $g$ (de vecteur directeur $\begin{pmatrix}1 \\ -1\end{pmatrix}$) passant par $A(0,3)$ est $x + y = 3$.
- La perpendiculaire à $d : x + 3y = 7$ passant par $A(2,-1)$ est $3x - y = 7$ car $\begin{pmatrix}3 \\ -1\end{pmatrix}$ est son vecteur normal.
- $d$ et $g$ se coupent en $(-2, 3)$ car $2 + t + 3(-1 - t) = 7$ donne $t = -4$ (voir [[equation-parametrique|équation paramétrique]]).
- $\begin{cases} x = 5 + 2t \\ y = -3 - t \end{cases}$, $2x + 4y + 2 = 0$ et $\begin{cases} x = -5 - \sqrt{3}\,t \\ y = 2 + \tfrac{\sqrt{3}}{2}t \end{cases}$ décrivent la même droite $x + 2y = -1$.
