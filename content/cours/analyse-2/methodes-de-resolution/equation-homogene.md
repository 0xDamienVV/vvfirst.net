---
title: Équation homogène
order: 2
---
Soient $a, b, c, d \in \mathbb{R}$.
> [!definition] Définition
> Une équation **homogène** en $\sin x$ et $\cos x$ est de la forme $a\sin^2 x + b\sin x\cos x + c\cos^2 x = d$.  
> On remplace $d$ par $d(\sin^2 x + \cos^2 x)$, on regarde séparément le cas $\cos x = 0$, puis on divise par $\cos^2 x$ pour obtenir une équation en $\tan x$.

### Exemple
- $2\sin^2 x + \sqrt{3}\sin 2x - 3 = 0$ sur $]0, 2\pi[$ (avec $\sin 2x = 2\sin x\cos x$, voir [[formules-de-duplication|duplication]]) s'écrit $-\sin^2 x + 2\sqrt{3}\sin x\cos x - 3\cos^2 x = 0$ car $3 = 3\sin^2 x + 3\cos^2 x$. Comme $\cos x = 0$ n'est pas solution, on divise : $(\tan x - \sqrt{3})^2 = 0$, donc $x = \dfrac{\pi}{3}$ ou $\dfrac{4\pi}{3}$.
