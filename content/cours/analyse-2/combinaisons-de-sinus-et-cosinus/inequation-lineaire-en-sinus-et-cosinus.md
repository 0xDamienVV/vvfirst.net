---
title: Inéquation linéaire en sinus et cosinus
order: 3
---
> [!definition] Principe
> Une **inéquation linéaire** en $\sin$ et $\cos$ compare $a\cos x + b\sin x$ à une constante.  
> On l'écrit sous [[forme-r-sinus|forme $R\sin$]], puis on résout l'[[inequations-trigonometriques|inéquation]] obtenue sur une période.

### Exemples
- $\cos x + \sqrt{3}\sin x > 1$ s'écrit $\cos\left(x - \dfrac{\pi}{3}\right) > \dfrac{1}{2}$, donc $x - \dfrac{\pi}{3} \in \left]-\dfrac{\pi}{3}, \dfrac{\pi}{3}\right[ + 2k\pi$ : $S = \bigcup_{k \in \mathbb{Z}}\left]2k\pi, \dfrac{2\pi}{3} + 2k\pi\right[$.
- $\sin x \geq \cos x$ sur $\left[\dfrac{\pi}{2}, \dfrac{5\pi}{2}\right]$ s'écrit $\sqrt{2}\sin\left(x - \dfrac{\pi}{4}\right) \geq 0$, donc $x \in \left[\dfrac{\pi}{4}, \dfrac{5\pi}{4}\right] + 2k\pi$ : $S = \left[\dfrac{\pi}{2}, \dfrac{5\pi}{4}\right] \cup \left[\dfrac{9\pi}{4}, \dfrac{5\pi}{2}\right]$.
- $-\sqrt{3}\sin 2x + \cos 2x \leq -\sqrt{2}$ sur $[5\pi, 6\pi]$ s'écrit $\cos\left(2x + \dfrac{\pi}{3}\right) \leq -\dfrac{\sqrt{2}}{2}$, donc $x \in \left[\dfrac{5\pi}{24}, \dfrac{11\pi}{24}\right] + k\pi$ : $S = \left[\dfrac{125\pi}{24}, \dfrac{131\pi}{24}\right]$.
- $\cos 2x + \sin x + \cos x > 0$ sur $[0, 2\pi]$ se factorise (avec [[formules-de-duplication|duplication]]) en $(\cos x + \sin x)(\cos x - \sin x + 1) > 0$ car $\cos 2x = (\cos x - \sin x)(\cos x + \sin x)$. Un tableau de signes donne $S = \left[0, \dfrac{\pi}{2}\right[ \cup \left]\dfrac{3\pi}{4}, \pi\right[ \cup \left]\dfrac{7\pi}{4}, 2\pi\right]$.
- $\cos\left(4x - \dfrac{\pi}{3}\right) + \sin\left(\dfrac{\pi}{3} - 4x\right) \geq \dfrac{\sqrt{6}}{2}$ pour $x \in [-\pi, 0]$ s'écrit $\sqrt{2}\cos\left(4x - \dfrac{\pi}{12}\right) \geq \dfrac{\sqrt{6}}{2}$ car $\cos u - \sin u = \sqrt{2}\cos\left(u + \dfrac{\pi}{4}\right)$ avec $u = 4x - \dfrac{\pi}{3}$. Donc $x \in \left[-\dfrac{\pi}{48}, \dfrac{\pi}{16}\right] + \dfrac{k\pi}{2}$ et $S = \left[-\pi, -\dfrac{15\pi}{16}\right] \cup \left[-\dfrac{25\pi}{48}, -\dfrac{7\pi}{16}\right] \cup \left[-\dfrac{\pi}{48}, 0\right]$.
