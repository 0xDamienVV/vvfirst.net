---
title: Chocs
order: 3
---
> [!definition] Définition
> Un **choc** est une interaction brève entre deux objets. Pendant un choc, les forces internes sont très grandes devant les forces extérieures : la [[quantite-de-mouvement|quantité de mouvement]] du système des deux objets est **conservée** (vectoriellement) entre l'instant juste avant et l'instant juste après.  
> Dans un choc **mou**, les objets restent collés et ont ensuite la même vitesse.

> [!property] Remarque
> - On projette la conservation $\vec{P}_{\text{avant}} = \vec{P}_{\text{après}}$ sur des axes, par exemple la direction de la vitesse initiale et la direction perpendiculaire.
> - Si une force extérieure (soutien du sol, poids) est verticale, seule la composante **horizontale** de $\vec{P}$ est conservée.
> - Avant comme après le choc, le [[centre-de-masse|centre de masse]] a la vitesse $\vec{v}_{CM} = \dfrac{\vec{P}}{\sum m_i}$, constante si les forces extérieures sont nulles.

### Exemples
- **Astéroïde (masse $M$, vitesse $v_a\vec{e}_x$) percuté par un vaisseau (masse $m$, vitesse $v_v\vec{e}_y$)**, choc mou : $(m+M)\vec{v}_f = (Mv_a,\ mv_v)$, donc $\tan\alpha = \dfrac{v_{f,y}}{v_{f,x}} = \dfrac{m\,v_v}{M\,v_a}$. Le centre de masse a ensuite un mouvement rectiligne uniforme.
- **Deux disques identiques sur une patinoire** : le disque lancé avec $\vec{v}_0$ repart avec $\|\vec{v}_1\| = \dfrac{v_0}{2}$ à l'angle $\alpha = \dfrac{\pi}{3}$ de sa direction initiale. Selon $\vec{v}_0$ : $mv_0 = m\dfrac{v_0}{2}\cos\alpha + m\,v'_{1,\parallel}$ donne $v'_{1,\parallel} = \dfrac{3v_0}{4}$. Avant le choc, $\vec{v}_{CM} = \dfrac{\vec{v}_0}{2}$.
- **Balle (masse $m$, angle $\alpha$) retombant dans un chariot** (masse $M = 2m$, vitesse $v_0$) sans frottement horizontal : $mv_0\cos\alpha + Mv_0 = (m+M)v'$ donne, pour $\alpha = \dfrac{\pi}{3}$, $v' = \dfrac{5}{6}v_0$.
- **Projectile de masse inconnue $m_p$ encastré dans un chariot** de masse $m$ roulant à $2v$, tiré à $-10v$ ; le chariot et le projectile repartent à $\dfrac{v}{2}$ : $2mv - 10m_pv = (m + m_p)\dfrac{v}{2}$ donne $m_p = \dfrac{m}{7}$.
