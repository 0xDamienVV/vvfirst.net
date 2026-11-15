---
title: Équation linéaire en sinus et cosinus
order: 2
---
Soient $a, b, c \in \mathbb{R}$ avec $(a, b) \neq (0, 0)$ et $R = \sqrt{a^2 + b^2}$.
> [!property] Propriété
> L'équation $a\cos x + b\sin x = c$ s'écrit $R\sin(x + \psi) = c$ (voir [[forme-r-sinus|forme $R\sin$]]) :
> - elle n'a **aucune solution** si $|c| > R$,
> - sinon, on la résout comme une [[equations-trigonometriques-elementaires|équation élémentaire]] en $\sin(x + \psi) = \dfrac{c}{R}$.

> [!warning] Attention
> Si l'équation contient $\tan x$ ou $\dfrac{1}{\cos x}$, on vérifie ensuite que $\cos x \neq 0$.

### Exemples
- $\sin x - \sqrt{3}\cos x = \sqrt{2}$ s'écrit $\sin\left(x - \dfrac{\pi}{3}\right) = \dfrac{\sqrt{2}}{2}$, donc $x = \dfrac{7\pi}{12} + 2k\pi$ ou $x = \dfrac{13\pi}{12} + 2k\pi$.
- $\sin x + 2\cos x = 9$ n'a pas de solution car $R = \sqrt{5} < 9$.
- $\dfrac{\sqrt{2}}{2}[\sin 3x + \cos 3x] = 1$ s'écrit $\sin\left(3x + \dfrac{\pi}{4}\right) = 1$, donc $x = \dfrac{\pi}{12} + \dfrac{2k\pi}{3}$.
- $\sin 2x - \cos 2x + 1 = 0$ sur $[-5\pi, -3\pi]$ s'écrit $\sin\left(2x - \dfrac{\pi}{4}\right) = -\dfrac{\sqrt{2}}{2}$, donc $x = k\pi$ ou $x = \dfrac{3\pi}{4} + k\pi$, soit $x \in \left\{-5\pi, -\dfrac{17\pi}{4}, -4\pi, -\dfrac{13\pi}{4}, -3\pi\right\}$.
- $\sin 2x - 2\cos^2 x + 2\cos x = 0$ se factorise (avec [[formules-de-duplication|duplication]]) en $2\cos x(\sin x - \cos x + 1) = 0$ : $\cos x = 0$ ou $\sin\left(x - \dfrac{\pi}{4}\right) = -\dfrac{\sqrt{2}}{2}$, donc $x = \dfrac{\pi}{2} + k\pi$ ou $x = 2k\pi$.
- $\sqrt{3} - \tan x = \dfrac{1}{\cos x}$ s'écrit $\sqrt{3}\cos x - \sin x = 1$, soit $\cos\left(x + \dfrac{\pi}{6}\right) = \dfrac{1}{2}$, donc $x = \dfrac{\pi}{6} + 2k\pi$ ou $x = -\dfrac{\pi}{2} + 2k\pi$. On rejette la seconde car $\cos x = 0$ : $S = \left\{\dfrac{\pi}{6} + 2k\pi\right\}$.
- $\cos\left(2x - \dfrac{\pi}{3}\right) + \dfrac{\sqrt{3}}{3}\sin\left(\dfrac{\pi}{3} - 2x\right) = \dfrac{2\sqrt{3}}{3}$ s'écrit $\cos u - \dfrac{\sqrt{3}}{3}\sin u = \dfrac{2\sqrt{3}}{3}$ avec $u = 2x - \dfrac{\pi}{3}$ car $\sin(-u) = -\sin u$ (voir [[angles-associes|angles associés]]). Comme $R = \dfrac{2\sqrt{3}}{3}$, cela donne $\cos\left(u + \dfrac{\pi}{6}\right) = 1$, donc $x = \dfrac{\pi}{12} + k\pi$ et, sur $[-2\pi, 2\pi]$, $x \in \left\{-\dfrac{23\pi}{12}, -\dfrac{11\pi}{12}, \dfrac{\pi}{12}, \dfrac{13\pi}{12}\right\}$.
