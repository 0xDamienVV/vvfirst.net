---
title: Rencontre de deux mobiles
order: 8
---
> [!definition] Critère de rencontre
> Deux mobiles de positions $\vec{r}_1(t)$ et $\vec{r}_2(t)$ **se rencontrent** s'il existe un instant $t_r$ tel que :
> $\vec{r}_1(t_r) = \vec{r}_2(t_r)$
>
> Cette égalité vectorielle doit être vérifiée par **toutes les composantes à la fois**, avec la même origine spatiale et la même origine des temps.

> [!property] Remarque
> On détermine $t_r$ avec une composante, puis on vérifie ou on utilise l'autre pour trouver un paramètre inconnu.

### Exemples
- **Bille et paroi** (table de côté $L$, bille de vitesse $\vec{v}_0$ avec $\alpha = \tfrac{\pi}{6}$, paroi mobile qui part de $A(L, 0)$ avec la vitesse $\vec{v}_p$ verticale de norme $v_0$) : $\vec{v}_0 t_r = \vec{v}_p t_r + \overrightarrow{OA}$ donne $v_0\cos\alpha\,t_r = L$ et $v_0\sin\alpha\,t_r = v_0 t_r$, impossible car $\sin\alpha \neq 1$. Si la paroi part à $t_{p0}$, la seconde équation devient $v_0\sin\alpha\,t_r = v_0(t_r - t_{p0})$, d'où $t_{p0} = (1 - \sin\alpha)\,t_r = \dfrac{L}{v_0\sqrt{3}}$.
- **Objet lâché de $h_0 = 20\ \text{m}$ et objet lancé du sol à $v_0 = 16\ \text{m s}^{-1}$** : $-\tfrac{1}{2}gt^2 + h_0 = -\tfrac{1}{2}gt^2 + v_0 t$ donne $t_r = \dfrac{h_0}{v_0} = 1{,}25\ \text{s}$, à la hauteur $12{,}34\ \text{m}$. Pour qu'ils se croisent à mi-hauteur, il faut $v_0 = \sqrt{gh_0} = 14{,}01\ \text{m s}^{-1}$.
- **Sarbacane et cible lâchée** : la bille est en chute libre depuis $O$ avec $\vec{v}_0$, la cible en chute libre depuis $\vec{r}_0$ : $\vec{r}_b(t_r) = \vec{r}_c(t_r)$ se réduit à $\vec{v}_0 t_r = \vec{r}_0$. Si la sarbacane vise la cible, $\vec{v}_0$ et $\vec{r}_0$ sont [[colinearite|colinéaires]] : la bille touche la cible quelle que soit sa vitesse.
- **Chien et frisbee** : le frisbee a un MUA horizontal à la hauteur $h$ ($x_f = \tfrac{1}{2}a_ft^2 + v_ft$), le chien court en MRU à $v_c$ jusqu'à l'instant de saut $t_s$, puis vole en [[tir-oblique|tir oblique]]. Horizontalement, $\tfrac{1}{2}a_ft_r^2 + v_ft_r = v_ct_r$ donne $t_r = \dfrac{2(v_c - v_f)}{a_f}$ ; la durée de vol $t_r - t_s = \dfrac{2v_s}{3g}$ donne $t_s = t_r - \dfrac{2v_s}{3g}$.
- **Canard et wagonnet** : le wagonnet monte une pente de $\alpha = \dfrac{\pi}{6}$ avec $a_0 = \dfrac{g}{2}$ ($\vec{r}_w = \tfrac{1}{2}a_0t^2\vec{e}_t$) ; le canard, à la hauteur $h$, saute horizontalement à $t_s$ avec $v_0$ et tombe pendant $t_r - t_s = \tfrac{1}{2}t_r$, donc $t_r = 2t_s$. Selon $\vec{e}_y$ : $\tfrac{1}{2}a_0t_r^2\sin\alpha = h - \tfrac{1}{2}gt_s^2$ donne $t_s = \sqrt{\dfrac{h}{g}}$ ; selon $\vec{e}_x$ : $v_0 = \dfrac{\sqrt{3}}{2}gt_s = \dfrac{\sqrt{3gh}}{2}$.
- **Balle et chariot** : la balle lancée de $O$ à $v_0$ ($\alpha = \dfrac{\pi}{3}$) retombe dans un chariot en MRU de même vitesse $v_0$ : la rencontre a lieu au temps de vol $t_v$ et $v_0(t_v - t_c) = v_0\cos\alpha\,t_v$ donne l'instant de passage $t_c = t_v(1 - \cos\alpha) = \dfrac{v_0\sqrt{3}}{2g}$ du chariot en $O$.
- **Cascadeur** qui saute à l'instant $t_s$ avec la vitesse horizontale $v_h$ d'une cage descendante vers une cage montante (vitesses $\mp v_0$) distante de $d$ et à la hauteur $h$ : $v_h(t_r - t_s) = d$ et $-\tfrac{1}{2}g(t_r - t_s)^2 - v_0 t_r + h = v_0 t_r$ donnent $t_s = \dfrac{1}{2v_0}\left(h - \dfrac{gd^2}{2v_h^2}\right) - \dfrac{d}{v_h}$.
