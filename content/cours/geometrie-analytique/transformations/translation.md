---
title: Translation
order: 2
---
Soit $\vec{u}\begin{pmatrix} a \\ b \end{pmatrix}$ un [[vecteur]] de $\mathbb{R}^2$.
> [!definition] Définition
> La **translation** de vecteur $\vec{u}$, notée $t_{\vec{u}}$, associe à $M$ le point $M'$ tel que $\overrightarrow{MM'} = \vec{u}$.  
> Expression analytique : $\begin{cases} x' = x + a \\ y' = y + b \end{cases}$

>[!property] Remarque
> - Si $\vec{u} \neq \vec{0}$, aucun point n'est fixe.
> - L'image d'une droite $d$ est une droite parallèle à $d$ (confondue si $\vec{u}$ est [[colinearite|colinéaire]] à $d$).
> - $\overrightarrow{M'N'} = \overrightarrow{MN}$ : la translation conserve les vecteurs.

### Exemples
Avec $A(2,1)$, $B(1,-3)$ et $d : 2x + y = 1$ :
- $t_{\overrightarrow{AB}} : \begin{cases} x' = x - 1 \\ y' = y - 4 \end{cases}$ car $\overrightarrow{AB}\begin{pmatrix}-1 \\ -4\end{pmatrix}$.
- $t_{\overrightarrow{AB}}(d) : 2x + y = -5$ car $2(x'+1) + (y'+4) = 1$.
- $t_{\vec{u}}(d)$ est la parallèle $2x - y = 10$ à $d : 2x - y = 5$ si $2a - b = 5$ (repère orthonormé), et le plus court de ces vecteurs est le vecteur normal $\begin{pmatrix}2 \\ -1\end{pmatrix}$.
