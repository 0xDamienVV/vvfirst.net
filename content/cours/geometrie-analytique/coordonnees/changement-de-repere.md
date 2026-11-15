---
title: Changement de repère
order: 4
---
Soient $(O, \vec{i}, \vec{j})$ un repère de $\mathbb{R}^2$ et $(O', \vec{e}_1, \vec{e}_2)$ un second repère connu par ses coordonnées dans le premier.
> [!definition] Principe
> Un **changement de repère** exprime les coordonnées d'un même point dans un autre repère. Un point $M$ de coordonnées $(x', y')$ dans le second repère vérifie $\overrightarrow{O'M} = x'\,\vec{e}_1 + y'\,\vec{e}_2$.  
> En écrivant cette égalité en coordonnées dans le premier repère, on obtient un système en $(x', y')$ (ou en $(x, y)$ selon le sens).

### Exemples
Avec $A(-1,3)$, $B(2,1)$, $C(1,5)$, $\overrightarrow{AC}\begin{pmatrix}2 \\ 2\end{pmatrix}$ et $\overrightarrow{AB}\begin{pmatrix}3 \\ -2\end{pmatrix}$ :
- Dans $(C, \overrightarrow{AC}, \overrightarrow{AB})$, le milieu $I$ de $[BC]$ vérifie $\overrightarrow{CI}\begin{pmatrix}\tfrac{1}{2} \\ -2\end{pmatrix} = x\overrightarrow{AC} + y\overrightarrow{AB}$, d'où $I\left(-\tfrac{1}{2}, \tfrac{1}{2}\right)$.
- Si $E$ a pour coordonnées $(a,b)$ dans $(A, \overrightarrow{AB}, \overrightarrow{AC})$, ses coordonnées dans $(C, \overrightarrow{CA}, \tfrac{1}{2}\overrightarrow{AB})$ sont $(1-b, 2a)$ car $\overrightarrow{CE} = \overrightarrow{CA} + a\overrightarrow{AB} + b\overrightarrow{AC} = (1-b)\overrightarrow{CA} + 2a\cdot\tfrac{1}{2}\overrightarrow{AB}$.
- Le point $J(2,1)$ de $(B, \overrightarrow{AB}, \overrightarrow{BC})$ vaut $B + 2\overrightarrow{AB} + \overrightarrow{BC}$, soit $(7, 1)$ dans $(O, \vec{i}, \vec{j})$.
