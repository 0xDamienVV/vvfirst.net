---
title: Tir oblique
order: 7
---
> [!definition] Définition
> Un **tir oblique** est une [[chute-libre|chute libre]] lancée depuis l'origine avec la vitesse $\vec{v}_0$ faisant l'angle $\alpha$ avec l'horizontale :
> $x(t) = v_0\cos\alpha\,t$ et $y(t) = v_0\sin\alpha\,t - \tfrac{1}{2}gt^2$
>
> $v_x = v_0\cos\alpha$ reste constante et $v_y(t) = v_0\sin\alpha - gt$.

> [!property] Remarque
> - L'**angle de la vitesse** avec l'horizontale à l'instant $t$ vérifie $\tan\theta = \dfrac{v_y(t)}{v_x(t)}$.
> - Le **temps de vol** jusqu'au retour à la hauteur de départ est $t_v = \dfrac{2v_0\sin\alpha}{g}$ et la **portée** est $d = x(t_v) = \dfrac{v_0^2\sin 2\alpha}{g}$.
> - Une hauteur $h$ est atteinte à la montée à la **plus petite** racine de $y(t) = h$ (équation du second degré, voir [[trinome-du-second-degre|trinôme du second degré]]) ; la vitesse en ce point a la même composante horizontale qu'au départ.

### Exemples
- Pour $\alpha = \dfrac{\pi}{3}$, la vitesse fait l'angle $\dfrac{\pi}{6}$ avec l'horizontale quand $\tan\dfrac{\pi}{6} = \dfrac{1}{\sqrt{3}} = \dfrac{v_0\frac{\sqrt{3}}{2} - gt_1}{v_0\frac{1}{2}}$, soit $t_1 = \dfrac{v_0}{g\sqrt{3}}$. Le temps de vol est $t_v = \dfrac{v_0\sqrt{3}}{g}$ et la portée $d = \dfrac{v_0^2\sqrt{3}}{2g}$.
- Un chien saute avec $\vec{v}_s$ verticale en plus de sa vitesse horizontale $\vec{v}_c$, et $gh = \dfrac{4}{9}v_s^2$ : $gt_h^2 - 2v_st_h + 2h = 0$ donne $t_h = \dfrac{v_s - \sqrt{v_s^2 - 2gh}}{g} = \dfrac{2v_s}{3g}$. Sa vitesse est alors $\left(v_c,\ \dfrac{v_s}{3}\right)$.
