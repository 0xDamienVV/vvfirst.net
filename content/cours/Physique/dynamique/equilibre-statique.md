---
title: Équilibre statique
order: 13
---
> [!definition] Définition
> Un objet est en **équilibre statique** s'il est au repos : son accélération est nulle, donc la somme des forces extérieures est nulle (voir [[loi-de-l-inertie|loi de l'inertie]]). On applique la loi à chaque objet, mais aussi à un **point** d'un fil (un nœud) auquel plusieurs fils sont attachés, ou à une poulie de masse négligeable.

> [!property] Remarque
> - La [[tension-d-un-fil|tension]] a la même norme dans tout le fil ; une poulie de masse négligeable dont les deux brins sont tendus avec la même norme $T$ les voit former le **même angle** avec l'horizontale.
> - Une [[force-de-rappel-d-un-ressort|force de rappel]] est dirigée vers le haut ou vers le bas selon que le ressort est en compression ou en élongation : le signe de $\sum F$ projetée donne le type de déformation.
> - Une équation du type $\cos\beta = \dfrac{M\sin\alpha}{m}$ n'a de solution que si le second membre est dans $[0, 1]$ : cela donne les **conditions d'équilibre**.

### Exemples
- **Poulie accrochée à un ressort horizontal**, corde tendue par une masse $m$ ($T = mg$) formant les angles $\alpha$ et $\beta$ avec l'horizontale : selon $\vec{e}_y$, $T\sin\alpha = T\sin\beta$ donc $\alpha = \beta$ ; selon $\vec{e}_x$, $kd = 2T\cos\alpha$ donne $\alpha = \arccos\dfrac{k(a - \ell_0)}{2mg}$. Le ressort est en élongation car la corde tire la poulie vers la droite.
- **Bloc suspendu à deux ressorts** fixés au plafond en $A$ et $B$ distants de $2c$ : le triangle est équilatéral si la longueur des ressorts est $2c$, donc $d = 2c - \ell_0$ ; selon la verticale, $2kd\cos\dfrac{\pi}{6} = Mg$ donne $M = \dfrac{\sqrt{3}\,k}{g}(2c - \ell_0)$.
- **Nœud tiré horizontalement** par une force $\vec{F}$, avec une masse $m_1$ suspendue en dessous et un fil oblique d'angle $\alpha = \dfrac{\pi}{6}$ vers une poulie : $T_1 = m_1g = T\sin\alpha$ et $F = T\cos\alpha = \dfrac{m_1g}{\tan\alpha} = 3\sqrt{3}\,mg$ pour $m_1 = 3m$. Le fil passe sur la poulie et retient $m_2 = 2m$ posée sur un ressort : $m_2g - T + kd = 0$ avec $T = 6mg$ donne $kd = 4mg$ (ressort en élongation) et la hauteur du bas de $m_2$ est $\ell_0 + \dfrac{4mg}{k}$.
- **Bloc de masse $M$ sur un plan incliné sans frottement**, retenu par un fil oblique (angle $\beta$ avec la pente) passant sur une poulie et retenant une masse $m$ : selon la pente, $Mg\sin\alpha = mg\cos\beta$ donne $\cos\beta = \dfrac{M\sin\alpha}{m}$. L'équilibre existe si $M\sin\alpha \le m \le M$ (sinon $M$ descend, ou $M$ est soulevé).
