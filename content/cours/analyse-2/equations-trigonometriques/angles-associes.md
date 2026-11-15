---
title: Angles associés
order: 1
---
Soit $x \in \mathbb{R}$ tel que les expressions soient définies.

# Angle opposé
> [!property] Propriété
> $\cos(-x) = \cos x$  
> $\sin(-x) = -\sin x$  
> $\tan(-x) = -\tan x$

### Exemple
- $\cos\left(-\dfrac{\pi}{3}\right) = \dfrac{1}{2}$ car le [[cercle-trigonometrique|point associé]] $P(-x)$ est le symétrique de $P(x)$ par rapport à l'axe des abscisses.

# Angle supplémentaire
> [!property] Propriété
> $\cos(\pi - x) = -\cos x$  
> $\sin(\pi - x) = \sin x$  
> $\tan(\pi - x) = -\tan x$

### Exemple
- $A = \cos(7\pi - x) = \cos(\pi - x) = -\cos x$ car $7\pi = \pi + 3 \cdot 2\pi$.

# Angle augmenté de $\pi$
> [!property] Propriété
> $\cos(x + \pi) = -\cos x$  
> $\sin(x + \pi) = -\sin x$  
> $\tan(x + \pi) = \tan x$

### Exemple
- $\sin\left(\dfrac{7\pi}{6}\right) = -\sin\dfrac{\pi}{6} = -\dfrac{1}{2}$ car $\dfrac{7\pi}{6} = \dfrac{\pi}{6} + \pi$.

# Angle complémentaire
> [!property] Propriété
> $\cos\left(\dfrac{\pi}{2} - x\right) = \sin x$  
> $\sin\left(\dfrac{\pi}{2} - x\right) = \cos x$  
> $\tan\left(\dfrac{\pi}{2} - x\right) = \cot x$

### Exemple
- $C = \sin\left(\dfrac{3\pi}{2} - x\right) = \sin\left(\pi + \dfrac{\pi}{2} - x\right) = -\cos x$ car on ajoute $\pi$ à l'angle complémentaire.

# Angle augmenté de $\dfrac{\pi}{2}$
> [!property] Propriété
> $\cos\left(x + \dfrac{\pi}{2}\right) = -\sin x$  
> $\sin\left(x + \dfrac{\pi}{2}\right) = \cos x$  
> $\tan\left(x + \dfrac{\pi}{2}\right) = -\cot x$

### Exemples
- $B = \cos\left(x + \dfrac{\pi}{2}\right) = -\sin x$ et $D = \cos\left(x - \dfrac{9\pi}{2}\right) = \cos\left(x - \dfrac{\pi}{2}\right) = \sin x$ car $-\dfrac{9\pi}{2} = -\dfrac{\pi}{2} - 4\pi$.
- $E = \cot\left(-\dfrac{5\pi}{2} - x\right) = \cot\left(-\dfrac{\pi}{2} - x\right) = -\cot\left(x + \dfrac{\pi}{2}\right) = \tan x$ car la cotangente est impaire de période $\pi$.
- $\sin\left(x + n\dfrac{\pi}{2}\right)$ vaut $\sin x$, $\cos x$, $-\sin x$, $-\cos x$ selon que $n$ vaut $4k$, $4k+1$, $4k+2$, $4k+3$ car chaque ajout de $\dfrac{\pi}{2}$ applique le cycle ci-dessus.
- $A = \dfrac{\cos\left(x - \frac{\pi}{2}\right)\tan\left(\frac{3\pi}{2} + x\right)}{\sin\left(x + \frac{5\pi}{2}\right) - \cos(\pi - x)} = \dfrac{\sin x \cdot (-\cot x)}{\cos x + \cos x} = -\dfrac{1}{2}$ sur $\mathbb{R} \setminus \left\{\dfrac{k\pi}{2}\right\}$ car $\tan\left(\dfrac{3\pi}{2} + x\right)$ n'est pas défini en $x = k\pi$ et le dénominateur $2\cos x$ s'annule en $x = \dfrac{\pi}{2} + k\pi$.
