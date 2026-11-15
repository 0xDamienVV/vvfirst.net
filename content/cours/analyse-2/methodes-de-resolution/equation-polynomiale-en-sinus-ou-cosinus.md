---
title: Équation polynomiale en sinus ou cosinus
order: 1
---
> [!definition] Principe
> Une équation est **polynomiale en $\sin x$** (ou en $\cos x$) si elle ne contient que $\sin x$ après usage de $\cos^2 x + \sin^2 x = 1$ (voir [[identites-fondamentales|identités fondamentales]]).  
> On pose alors $u = \sin x$ et on résout l'équation algébrique en $u$.  
> Seules les racines vérifiant $|u| \leq 1$ donnent des solutions (voir [[sinus-et-cosinus#bornes|bornes]]).

> [!warning] Attention
> Si l'équation contient des quotients, on multiplie seulement après avoir exclu les valeurs qui annulent un dénominateur.

### Exemples
- $\cos t(2\cos t + 3) = -1$ s'écrit $2u^2 + 3u + 1 = 0$ avec $u = \cos t$, donc $u = -\dfrac{1}{2}$ ou $u = -1$ : $t = \pm\dfrac{2\pi}{3} + 2k\pi$ ou $t = \pi + 2k\pi$.
- $4 - 5\sin t = 2\cos^2 t$ s'écrit $2u^2 - 5u + 2 = 0$ avec $u = \sin t$, donc $u = \dfrac{1}{2}$ ($u = 2$ est rejeté) : sur $\left[-\dfrac{11\pi}{2}, -5\pi\right]$, $t = -\dfrac{31\pi}{6}$.
- $4\sin^4 2x - 11\sin^2 2x + 6 = 0$ avec $s = \sin^2 2x$ donne $4s^2 - 11s + 6 = 0$, donc $s = \dfrac{3}{4}$ ($s = 2$ est rejeté) : sur $\left[-\dfrac{3\pi}{2}, -\dfrac{\pi}{2}\right]$, $x \in \left\{-\dfrac{4\pi}{3}, -\dfrac{7\pi}{6}, -\dfrac{5\pi}{6}, -\dfrac{2\pi}{3}\right\}$.
- $2\tan^2 x + 3\dfrac{\tan x}{\cos x} = \dfrac{2}{\cos^2 x}$ avec $\cos x \neq 0$ se multiplie par $\cos^2 x$ : $2\sin^2 x + 3\sin x = 2$, donc $\sin x = \dfrac{1}{2}$ et $x = \dfrac{\pi}{6} + 2k\pi$ ou $\dfrac{5\pi}{6} + 2k\pi$.
- $\cos 2x + \sin x\tan x = 1$ avec $\cos x \neq 0$ s'écrit $\sin^2 x\left(\dfrac{1}{\cos x} - 2\right) = 0$, donc $\sin x = 0$ ou $\cos x = \dfrac{1}{2}$ : $x = k\pi$ ou $x = \pm\dfrac{\pi}{3} + 2k\pi$.
- $\cos x = \tan x$ s'écrit $1 - u^2 = u$ avec $u = \sin x$, donc $\sin x = \dfrac{-1 + \sqrt{5}}{2}$ (l'autre racine est $< -1$).
- $\dfrac{1}{\cos x} - \cos x = \sin x$ n'exige aucun changement de variable car elle s'écrit $\sin x(\sin x - \cos x) = 0$ : $x = k\pi$ ou $x = \dfrac{\pi}{4} + k\pi$.
- $\cos 2x + \cot x = -1$ sur $\left[-\dfrac{3\pi}{2}, -\dfrac{\pi}{2}\right]$ avec $\sin x \neq 0$ s'écrit $2\cos^2 x + \dfrac{\cos x}{\sin x} = 0$ car $\cos 2x + 1 = 2\cos^2 x$ (voir [[formules-de-duplication|duplication]]), soit $\dfrac{\cos x(\sin 2x + 1)}{\sin x} = 0$. Donc $\cos x = 0$ ou $\sin 2x = -1$, c'est-à-dire $x = \dfrac{\pi}{2} + k\pi$ ou $x = -\dfrac{\pi}{4} + k\pi$, et $S = \left\{-\dfrac{3\pi}{2}, -\dfrac{5\pi}{4}, -\dfrac{\pi}{2}\right\}$.
- $\tan x\cos 2x + \dfrac{1}{\cos x} = \cos x$ avec $\cos x \neq 0$ se multiplie par $\cos x$ : $\sin x\cos 2x + 1 = \cos^2 x$, soit $\sin x(1 - 2\sin^2 x) + \sin^2 x = 0$ car $\cos^2 x = 1 - \sin^2 x$. On factorise $\sin x\,(1 + \sin x - 2\sin^2 x) = \sin x\,(1 - \sin x)(1 + 2\sin x)$ : $\sin x = 0$, $1$ ou $-\dfrac{1}{2}$, puis on rejette $\sin x = 1$ car alors $\cos x = 0$.
