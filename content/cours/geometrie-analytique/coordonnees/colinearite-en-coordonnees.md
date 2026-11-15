---
title: Colinéarité en coordonnées
order: 3
---
Soient $\vec{u}\begin{pmatrix} x \\ y \end{pmatrix}$ et $\vec{v}\begin{pmatrix} x' \\ y' \end{pmatrix}$ dans un repère de $\mathbb{R}^2$.
> [!definition] Théorème
> $\vec{u}$ et $\vec{v}$ sont [[colinearite|colinéaires]] si et seulement si $\begin{vmatrix} x & x' \\ y & y' \end{vmatrix} = xy' - x'y = 0$.
>
> Ce nombre est le **déterminant** de $(\vec{u}, \vec{v})$, noté $\det(\vec{u}, \vec{v})$.

>[!property] Preuve
> - ($\Rightarrow$) Si $\vec{v} = \alpha\vec{u}$, alors $xy' - x'y = \alpha xy - \alpha xy = 0$. Le cas $\vec{u} = \alpha\vec{v}$ est identique.
> - ($\Leftarrow$) Si $xy' = x'y$ et $\vec{u} \neq \vec{0}$ : si $x \neq 0$, $\vec{v} = \tfrac{x'}{x}\vec{u}$ ; si $x = 0$ alors $y \neq 0$, $x'y = 0$ donne $x' = 0$ et $\vec{v} = \tfrac{y'}{y}\vec{u}$. Si $\vec{u} = \vec{0}$, c'est colinéaire.

### Exemple
- $\begin{pmatrix}3 \\ 1\end{pmatrix}$ et $\begin{pmatrix}1+2\alpha \\ \alpha - 2\end{pmatrix}$ sont colinéaires si $3(\alpha - 2) - (1 + 2\alpha) = 0$, c'est-à-dire $\alpha = 7$.
- $A$, $B$, $C$ sont alignés si et seulement si $\det(\overrightarrow{AB}, \overrightarrow{AC}) = 0$.
