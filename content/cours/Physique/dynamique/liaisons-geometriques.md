---
title: Liaisons géométriques
order: 14
---
> [!definition] Définition
> Une **liaison** est une relation imposée par la géométrie entre les mouvements de deux objets : contact sans décollement, tige ou rail guidant un objet, fil inextensible.  
> Elle relie leurs accélérations et s'ajoute aux équations de [[systemes-de-corps-lies|Newton de chaque objet]].

> [!property] Remarque
> - Si deux objets restent en contact selon une direction, leurs composantes d'accélération selon cette direction sont égales.
> - Un objet guidé par une tige ou un rail n'accélère que le long de ce guide ; si un autre objet le pousse, la composante de son accélération sur ce guide est égale à la projection de l'accélération de l'autre.
> - Les forces de contact entre les deux objets sont opposées ([[troisieme-loi-de-newton|troisième loi]]).
> - Le choix d'un repère (horizontal-vertical, oblique ou « naturel » pour chaque objet) donne le même résultat ; le plus simple est celui qui annule une composante d'accélération.

### Exemples
- **Bloc triangulaire** de masse $M = 2m$ sur un plan incliné de $\alpha = 30^\circ$, sous un bloc de masse $m$ guidé verticalement par deux tiges, sans frottement. Les deux blocs ont la même accélération verticale $a_y$ et $a_{M,x} = \dfrac{a_y}{\tan\alpha}$. Avec $N$ la force de contact, $mg - N = ma_y$, $S\sin\alpha = Ma_{M,x}$ et $Mg - S\cos\alpha + N = Ma_y$ donnent $a_y = \dfrac{g}{3}$ et $a = \dfrac{(M+m)g\sin\alpha}{M + m\sin^2\alpha} = \dfrac{2g}{3}$ le long de la pente.
- **Petit chariot** de masse $m$ sur des rails inclinés de $\alpha$, poussé par une tige verticale fixée à un grand chariot de masse $M$ tiré par une force horizontale $F$ : $-mg\sin\alpha + C\cos\alpha = ma$ selon la pente et $F - C = Ma\cos\alpha$ selon l'horizontale (liaison $a_{M,x} = a\cos\alpha$) donnent $a = \dfrac{F\cos\alpha - mg\sin\alpha}{m + M\cos^2\alpha}$ le long de la pente.
- **Bloc d'accélération horizontale $a_0$** portant une masse $M$ posée dessus et une masse $m$ contre sa face avant, reliées par un fil sur une poulie. Poulie bloquée : $T = Ma_0$, $S = Mg$, $N = ma_0$, $T' = mg$. Poulie libre : $T' = T$ et, comme $m$ descend de $\Delta y$ pendant que $M$ avance de $\Delta x - \Delta y$, $a_{M,x} = a_0 - a_{m,y}$ ; avec $T = Ma_{M,x}$ et $-mg + T = ma_{m,y}$ : $a_{m,y} = \dfrac{Ma_0 - mg}{M + m}$ et $a_{M,x} = \dfrac{m(a_0 + g)}{M + m}$.
- **Masse $m$ suspendue par un ressort à une planche de masse $M$** tirée vers le haut par une force $T$ (la longueur du ressort est constante) : l'ensemble et $m$ ont la même accélération, $T - (m+M)g = (m+M)a$ et $kd - mg = ma$ donnent $d = \dfrac{m}{m+M}\dfrac{T}{k}$. Le ressort est en élongation ; si $T = 0$, tout tombe en chute libre et $d = 0$.
