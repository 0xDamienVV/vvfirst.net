---
title: Composition de transformations
order: 4
---
> [!definition] Définition
> La **composée** $g \circ f$ est la transformation « d'abord $f$, puis $g$ » (voir [[composition|composition d'applications]]).  
> Une composée de [[translation|translations]] et d'[[homothetie|homothéties]] s'écrit $\begin{cases} x' = Kx + c_1 \\ y' = Ky + c_2 \end{cases}$, où $K$ est le **produit des rapports** (une translation compte pour $1$).

>[!property] Classification
> - Si $K \neq 1$ : **homothétie** de rapport $K$ et de centre $\left(\dfrac{c_1}{1-K}, \dfrac{c_2}{1-K}\right)$.
> - Si $K = 1$ : **translation** de vecteur $\begin{pmatrix}c_1 \\ c_2\end{pmatrix}$.
> - En général $g \circ f \neq f \circ g$.

### Exemples
- $t_{\vec{u}} \circ t_{\vec{v}} = t_{\vec{u}+\vec{v}}$ car $K = 1$ et les vecteurs s'ajoutent.
- $h_{A,\frac{1}{2}} \circ h_{B,3}$ est l'homothétie de rapport $\tfrac{3}{2}$ et de centre $2B - A$ (aligné avec $A$ et $B$).
- $t_{\frac{3}{2}\overrightarrow{AB}} \circ h_{A,-\frac{1}{2}} \circ h_{C,-2}$ est une translation car $\left(-\tfrac{1}{2}\right)(-2) = 1$, de vecteur $\tfrac{3}{2}\overrightarrow{CB}$.
