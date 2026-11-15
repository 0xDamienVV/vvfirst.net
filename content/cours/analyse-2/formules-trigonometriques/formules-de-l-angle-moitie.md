---
title: Formules de l'angle moitié
order: 3
---
Soit $x \in \mathbb{R}$.

# Carrés
> [!property] Propriété
> $\cos^2\dfrac{x}{2} = \dfrac{1 + \cos x}{2}$  
> $\sin^2\dfrac{x}{2} = \dfrac{1 - \cos x}{2}$

Elles découlent de la [[formules-de-duplication#linéarisation|linéarisation]]. Le signe de $\cos\dfrac{x}{2}$ et $\sin\dfrac{x}{2}$ se lit dans le [[signe|quadrant]] de $\dfrac{x}{2}$.

### Exemple
- Si $\cos x = -\dfrac{3}{5}$ avec $x \in \left]-\dfrac{7\pi}{2}, -3\pi\right[$, alors $\dfrac{x}{2} \in \left]-\dfrac{7\pi}{4}, -\dfrac{3\pi}{2}\right[$ est dans le quadrant I (à $2\pi$ près), donc $\sin\dfrac{x}{2} = \sqrt{\dfrac{1 + 3/5}{2}} = \dfrac{2\sqrt{5}}{5}$ et $\cos\dfrac{x}{2} = \dfrac{\sqrt{5}}{5}$.

# Tangente et cotangente au carré
> [!property] Propriété
> $\tan^2\dfrac{x}{2} = \dfrac{1 - \cos x}{1 + \cos x}$  
> $\cot^2\dfrac{x}{2} = \dfrac{1 + \cos x}{1 - \cos x}$

Elles s'obtiennent en divisant les formules des carrés : $\tan^2\dfrac{x}{2} = \dfrac{\sin^2(x/2)}{\cos^2(x/2)}$.

### Exemple
- $\tan^2\dfrac{\pi}{3} = \dfrac{1 - \cos(2\pi/3)}{1 + \cos(2\pi/3)} = \dfrac{3/2}{1/2} = 3$ est identique à $(\sqrt{3})^2$ car $\tan\dfrac{\pi}{3} = \sqrt{3}$.

# Tangente
> [!property] Propriété
> $\tan\dfrac{x}{2} = \dfrac{\sin x}{1 + \cos x} = \dfrac{1 - \cos x}{\sin x}$

### Exemples
- $\tan\dfrac{\pi}{8} = \dfrac{\sin(\pi/4)}{1 + \cos(\pi/4)} = \dfrac{\sqrt{2}/2}{1 + \sqrt{2}/2} = \sqrt{2} - 1$.
- $\tan\dfrac{x}{2} = \dfrac{\sin x}{1 + \cos x}$ car $\dfrac{\sin(x/2)}{\cos(x/2)} = \dfrac{2\sin(x/2)\cos(x/2)}{2\cos^2(x/2)}$, c'est-à-dire $\dfrac{\sin x}{1 + \cos x}$.
