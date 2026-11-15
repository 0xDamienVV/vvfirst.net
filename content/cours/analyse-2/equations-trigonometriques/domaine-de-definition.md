---
title: Domaine de définition
order: 5
---
> [!definition] Définition
> Le **domaine de définition** d'une équation est l'ensemble des $x \in \mathbb{R}$ pour lesquels toutes ses expressions sont définies.  
> On l'obtient en retirant les $x$ qui annulent un dénominateur ou sortent du domaine de la [[tangente-et-cotangente|tangente ou cotangente]].

> [!warning] Attention
> Les solutions trouvées doivent appartenir au domaine de définition : on écarte celles qui n'en font pas partie.

> [!property] Réunion de familles
> Les exclusions sont des [[familles-d-angles|familles d'angles]] ; on les regroupe en une seule quand c'est possible.

### Exemples
- $\tan x$ est défini sur $\mathbb{R} \setminus \left\{\dfrac{\pi}{2} + k\pi\right\}$ et $\cot x$ sur $\mathbb{R} \setminus \{k\pi\}$ car $\cos x = 0$ et $\sin x = 0$ annulent leurs dénominateurs.
- $\dfrac{\sin 3x}{\cos^2 x - \sin^2 x} + 2\cos x\cot x - \dfrac{1}{\cos^2 x} = 0$ est défini sur $\mathbb{R} \setminus \left\{\dfrac{k\pi}{4}\right\}$ car on exclut $\cos^2 x - \sin^2 x = 0$, soit $\tan x = \pm 1$ et $x = \dfrac{\pi}{4} + \dfrac{k\pi}{2}$ (voir [[equations-trigonometriques-elementaires|équations élémentaires]]), $\sin x = 0$, soit $x = k\pi$, et $\cos x = 0$, soit $x = \dfrac{\pi}{2} + k\pi$ : ces trois familles forment les multiples de $\dfrac{\pi}{4}$.
