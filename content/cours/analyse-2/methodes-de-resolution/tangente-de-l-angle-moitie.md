---
title: Tangente de l'angle moitié
order: 4
---
Soit $t = \tan\dfrac{x}{2}$ avec $x \neq \pi + 2k\pi$.
> [!property] Propriété
> $\sin x = \dfrac{2t}{1 + t^2}$, $\quad \cos x = \dfrac{1 - t^2}{1 + t^2}$, $\quad \tan x = \dfrac{2t}{1 - t^2}, \quad \cot x = \dfrac{1 - t^2}{2t}$

Elles découlent des [[formules-de-duplication|formules de duplication]] appliquées à $\dfrac{x}{2}$.

> [!warning] Attention
> La valeur $x = \pi + 2k\pi$ est exclue de la substitution : on la teste séparément dans l'équation de départ.

### Exemple
- $1 + 2\sin x + \cos x + 2\tan x = 0$ s'écrit en $t$ : $t^2 - 4t - 1 = 0$, donc $\tan\dfrac{x}{2} = 2 \pm \sqrt{5}$, c'est-à-dire $\dfrac{x}{2} = \theta_\pm + k\pi$ avec $\tan\theta_\pm = 2 \pm \sqrt{5}$ (voir [[equations-trigonometriques-elementaires|équations élémentaires]]), soit $x = 2\theta_\pm + 2k\pi$. De plus $x = \pi + 2k\pi$ est solution car $1 + 0 - 1 + 0 = 0$.
