---
title: Centre de masse
order: 2
---
> [!definition] Définition
> Le **centre de masse** d'un système de masses $m_i$ aux positions $\vec{r}_i$ est :
> $\vec{r}_{CM} = \dfrac{\sum m_i\vec{r}_i}{\sum m_i}$
>
> Sa vitesse est $\vec{v}_{CM} = \dfrac{\vec{P}}{M}$ (voir [[quantite-de-mouvement|quantité de mouvement]]) et son mouvement vérifie $M\vec{a}_{CM} = \sum \vec{F}_{\text{ext}}$, où $M = \sum m_i$.

> [!property] Remarque
> Pour un objet composé de parties homogènes, on remplace chaque partie par une masse ponctuelle placée en son **centre** (milieu pour une barre ou une planche). Pour un objet homogène, le centre de masse d'une barre est son milieu. Un objet en chute libre a $\vec{a}_{CM} = \vec{g}$ : son centre de masse décrit une **parabole**, même si l'objet tourne sur lui-même.

### Exemples
- **Récipient sans masse** (base carrée de côté $a$, hauteur $h$) rempli à mi-hauteur d'un liquide de masse $m$ (centre en $\left(0,\ \dfrac{h}{4}\right)$) avec une planche de masse $2m$ et de hauteur $\dfrac{h}{2}$ collée sur la paroi de droite (centre en $\left(\dfrac{a}{2},\ \dfrac{3h}{4}\right)$) ; origine au centre de la base : $x_{CM} = \dfrac{m \cdot 0 + 2m\,\frac{a}{2}}{3m} = \dfrac{a}{3}$ et $y_{CM} = \dfrac{m\frac{h}{4} + 2m\frac{3h}{4}}{3m} = \dfrac{7h}{12}$.
- **Deux chariots identiques** de vitesses $\vec{v}$ et $2\vec{v}$ : $\vec{v}_{CM} = \dfrac{m\vec{v} + 2m\vec{v}}{2m} = \dfrac{3}{2}\vec{v}$, constante tant qu'aucune force extérieure horizontale n'agit.
- **Boîte cylindrique** de hauteur $3h$ avec un fond de masse $m$ en $z = 0$, une paroi latérale de masse $2m$ en $\dfrac{3h}{2}$ et un piston de masse $2m$ en $\dfrac{5h}{2}$ : $d = \dfrac{2m \cdot \frac{3h}{2} + 2m \cdot \frac{5h}{2}}{5m} = \dfrac{8h}{5}$.
- Un objet formé de deux barres homogènes en « L », de même matériau, la grande ayant le double de la masse de la petite : $\vec{r}_{CM} = \tfrac{1}{3}\vec{r}_1 + \tfrac{2}{3}\vec{r}_2$ avec $\vec{r}_1$ et $\vec{r}_2$ leurs milieux.
- Un athlète dont le centre de masse monte de $100\ \text{cm}$ à $180\ \text{cm}$ peut franchir une barre à $210\ \text{cm}$ car, en passant d'abord les épaules, puis le bassin, puis les jambes, son centre de masse reste **sous** la barre.
- Une masse $M = 2m$ lancée de $O$ avec $\vec{v}_0$ et une masse $m$ lâchée du point $D$ à la distance $d$ avec $gd = v_0^2$ : le centre de masse a pour équation horaire $\vec{r}_{CM}(t) = \tfrac{1}{2}\vec{g}t^2 + \tfrac{2}{3}\vec{v}_0t + \tfrac{1}{3}\vec{d}$.  
  Elles se rencontrent à $t_r = \dfrac{d}{v_0} = \sqrt{\dfrac{d}{g}}$ au point $\left(d,\ \tfrac{d}{2}\right)$ (axe vertical vers le bas) ; sans la rencontre, $M$ toucherait le sol en $\left(\sqrt{2dh},\ h\right)$. Si elles collent après la rencontre, leur position suit alors celle du centre de masse.
