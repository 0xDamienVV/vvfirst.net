---
title: Calculs en coordonnées
order: 2
---
Dans un repère de $\mathbb{R}^2$, soient $A(x_A, y_A)$, $B(x_B, y_B)$, $\vec{u}\begin{pmatrix} x \\ y \end{pmatrix}$ et $\vec{v}\begin{pmatrix} x' \\ y' \end{pmatrix}$.
> [!definition] Formules
> - $\overrightarrow{AB}\begin{pmatrix} x_B - x_A \\ y_B - y_A \end{pmatrix}$
> - $\vec{u} + \vec{v}\begin{pmatrix} x + x' \\ y + y' \end{pmatrix}$ et $\alpha\vec{u}\begin{pmatrix} \alpha x \\ \alpha y \end{pmatrix}$
> - **Milieu** de $[AB]$ : $\left(\dfrac{x_A + x_B}{2}, \dfrac{y_A + y_B}{2}\right)$
> - **Centre de gravité** de $ABC$ : $\left(\dfrac{x_A + x_B + x_C}{3}, \dfrac{y_A + y_B + y_C}{3}\right)$

>[!property] Remarque
> Ces formules valent dans n'importe quel repère. Si $ABCD$ est un [[parallelogramme|parallélogramme]], alors $D = A + C - B$.

### Exemples
Avec $A(3,4)$, $B(5,-2)$, $C(0,2)$ :
- Le milieu de $[BC]$ est $\left(\tfrac{5}{2}, 0\right)$.
- $\tfrac{1}{2}\overrightarrow{AB} + \overrightarrow{CA} = \begin{pmatrix}1 \\ -3\end{pmatrix} + \begin{pmatrix}3 \\ 2\end{pmatrix} = \begin{pmatrix}4 \\ -1\end{pmatrix}$.
- Pour que $ABCD$ soit un parallélogramme, $D = (3 + 0 - 5,\ 4 + 2 + 2) = (-2, 8)$.
- Si $G(1,6)$ est le centre de gravité de $ABC$ avec $A(-4,5)$ et $B(2,3)$, alors $C = 3G - A - B = (5, 10)$.
