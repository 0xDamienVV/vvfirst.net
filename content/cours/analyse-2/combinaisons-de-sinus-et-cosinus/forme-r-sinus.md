---
title: Forme R sin
order: 1
---
Soient $a, b \in \mathbb{R}$ non tous deux nuls et $R = \sqrt{a^2 + b^2}$.
> [!property] Propriété
> $a\cos x + b\sin x = R\cos(x - \varphi)$ avec $\cos\varphi = \dfrac{a}{R}$ et $\sin\varphi = \dfrac{b}{R}$  
> $a\cos x + b\sin x = R\sin(x + \psi)$ avec $\sin\psi = \dfrac{a}{R}$ et $\cos\psi = \dfrac{b}{R}$

*Preuve* : $R\cos(x - \varphi) = R\cos\varphi\cos x + R\sin\varphi\sin x$ par les [[formules-d-addition|formules d'addition]].

### Exemples
- $\cos x + \sqrt{3}\sin x = 2\cos\left(x - \dfrac{\pi}{3}\right)$ car $R = 2$, $\cos\varphi = \dfrac{1}{2}$ et $\sin\varphi = \dfrac{\sqrt{3}}{2}$.
- $\sin x - \sqrt{3}\cos x = 2\sin\left(x - \dfrac{\pi}{3}\right)$ car $R = 2$, $\sin\psi = -\dfrac{\sqrt{3}}{2}$ et $\cos\psi = \dfrac{1}{2}$.
- Dans un rectangle de diagonale $d$ avec $\alpha = \widehat{BAC}$, le périmètre est $P = 2d(\cos\alpha + \sin\alpha) = 2\sqrt{2}\,d\sin\left(\alpha + \dfrac{\pi}{4}\right)$. Il est maximal pour $\alpha = \dfrac{\pi}{4}$, avec $P = 2\sqrt{2}\,d$, et $P \geq d\sqrt{6}$ si $\sin\left(\alpha + \dfrac{\pi}{4}\right) \geq \dfrac{\sqrt{3}}{2}$, c'est-à-dire $\alpha \in \left[\dfrac{\pi}{12}, \dfrac{5\pi}{12}\right]$.
