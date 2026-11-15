---
title: Transformations somme et produit
order: 4
---
Soient $p, q \in \mathbb{R}$. Ces formules se déduisent des [[formules-d-addition|formules d'addition]] en posant $p = a + b$ et $q = a - b$.

# Somme de sinus
> [!property] Propriété
> $\sin p + \sin q = 2\sin\dfrac{p+q}{2}\cos\dfrac{p-q}{2}$  
> $\sin p - \sin q = 2\cos\dfrac{p+q}{2}\sin\dfrac{p-q}{2}$

### Exemples
- $\sin 5x - \sin x = 2\sin 2x \cos 3x$ car $\dfrac{5x + x}{2} = 3x$ et $\dfrac{5x - x}{2} = 2x$.
- $\sin 3x + \sin x = \sin 2x$ s'écrit $2\sin 2x \cos x = \sin 2x$, donc $\sin 2x(2\cos x - 1) = 0$ : $x = \dfrac{k\pi}{2}$ ou $x = \pm\dfrac{\pi}{3} + 2k\pi$.

# Somme de cosinus
> [!property] Propriété
> $\cos p + \cos q = 2\cos\dfrac{p+q}{2}\cos\dfrac{p-q}{2}$  
> $\cos p - \cos q = -2\sin\dfrac{p+q}{2}\sin\dfrac{p-q}{2}$

### Exemples
- $\cos^2 3x - \cos^2 x = (\cos 3x - \cos x)(\cos 3x + \cos x) = -\sin 2x \sin 4x$ car $\cos 3x - \cos x = -2\sin 2x \sin x$ et $\cos 3x + \cos x = 2\cos 2x \cos x$.
- $\cos 3x + \cos 5x = \cos x$ s'écrit $2\cos 4x \cos x = \cos x$, donc $\cos x(2\cos 4x - 1) = 0$ : $x = \dfrac{\pi}{2} + k\pi$ ou $x = \pm\dfrac{\pi}{12} + \dfrac{k\pi}{2}$.

# Produit en somme
> [!property] Propriété
> $\cos p \cos q = \dfrac{1}{2}\left[\cos(p + q) + \cos(p - q)\right]$  
> $\sin p \sin q = -\dfrac{1}{2}\left[\cos(p + q) - \cos(p - q)\right]$  
> $\sin p \cos q = \dfrac{1}{2}\left[\sin(p + q) + \sin(p - q)\right]$

### Exemples
- $\cos\left(x + \dfrac{\pi}{6}\right)\cos\left(x - \dfrac{\pi}{6}\right) = \dfrac{1}{2}\left[\cos 2x + \dfrac{1}{2}\right]$ car $p + q = 2x$ et $p - q = \dfrac{\pi}{3}$.
- $\tan\left(\dfrac{\pi}{6} + x\right) - \tan\left(x - \dfrac{\pi}{6}\right) = \dfrac{\sqrt{3}}{\cos 2x + 1/2}$ est égal à $2\sqrt{3}$ si et seulement si $\cos 2x = 0$ car on utilise la [[formules-d-addition#différence-de-tangentes|différence de tangentes]] et l'exemple précédent. Sur $\left]-\dfrac{\pi}{3}, \dfrac{\pi}{3}\right[$, on obtient $x = \pm\dfrac{\pi}{4}$.
