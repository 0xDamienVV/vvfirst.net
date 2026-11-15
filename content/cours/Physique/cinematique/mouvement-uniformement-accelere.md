---
title: Mouvement uniformément accéléré
order: 5
---
> [!definition] Définition
> Un mouvement est **uniformément accéléré** (MUA) si l'[[acceleration|accélération]] $\vec{a}$ est constante (donc la [[vitesse]] varie linéairement avec le temps). Les équations horaires sont :
> $\vec{a}(t) = \vec{a}$  
> $\vec{v}(t) = \vec{a}\,t + \vec{v}_0$  
> $\vec{r}(t) = \tfrac{1}{2}\vec{a}\,t^2 + \vec{v}_0\,t + \vec{r}_0$

> [!property] Remarque
> Pour un mouvement sur un axe, on projette ces équations sur cet axe. L'**arrêt** correspond à $v(t_f) = 0$ et un **trajet** de longueur $d$ à $x(t_d) = d$ (équation du second degré, voir [[trinome-du-second-degre|trinôme du second degré]] : on garde la plus petite racine positive).

### Exemple
Une luge lancée à $v_0 = 5\ \text{m s}^{-1}$ subit une accélération de $-0{,}5\ \text{m s}^{-2}$ le long de l'axe de son mouvement.
- Après $1\ \text{s}$ : $v = -0{,}5 \cdot 1 + 5 = 4{,}5\ \text{m s}^{-1}$.
- Arrêt : $t_f = -\dfrac{v_0}{a} = 10\ \text{s}$ et distance de freinage $x(t_f) = \tfrac{1}{2}(-0{,}5)\cdot 100 + 5 \cdot 10 = 25\ \text{m}$.
- Après $1\ \text{m}$ : $-0{,}25\,t^2 + 5t = 1$ donne $t_d \approx 0{,}202\ \text{s}$ et $v(t_d) \approx 4{,}899\ \text{m s}^{-1}$.
- **Atterrissage vertical d'une fusée** partie de $O$ à la hauteur $h$ avec $\vec{v}_0$ (angle $\alpha = \dfrac{\pi}{6}$ sous l'horizontale) et une accélération constante $(a_x, a_y)$, pour arriver verticalement avec $\|\vec{v}_a\| = \dfrac{v_0}{2}$ : la vitesse verticale $v_0\sin\alpha = \dfrac{v_0}{2}$ ne doit pas changer, donc $a_y = 0$ ; $h = \dfrac{v_0}{2}t_a$ donne $t_a = \dfrac{2h}{v_0}$ ; la vitesse horizontale s'annule : $a_x = -\dfrac{v_0\cos\alpha}{t_a} = -\dfrac{\sqrt{3}\,v_0^2}{4h}$ et $x(t_a) = \dfrac{\sqrt{3}}{2}h$.
