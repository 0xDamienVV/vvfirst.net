---
title: Formules d'addition
order: 1
---
Soient $x, y \in \mathbb{R}$.

# Cosinus
> [!property] Propriété
> $\cos(x + y) = \cos x \cos y - \sin x \sin y$  
> $\cos(x - y) = \cos x \cos y + \sin x \sin y$

### Exemple
- $\cos\dfrac{7\pi}{12} = \cos\left(\dfrac{\pi}{3} + \dfrac{\pi}{4}\right) = \dfrac{1}{2}\cdot\dfrac{\sqrt{2}}{2} - \dfrac{\sqrt{3}}{2}\cdot\dfrac{\sqrt{2}}{2} = -\dfrac{\sqrt{2}}{4}(\sqrt{3} - 1)$ car on utilise les [[valeurs-remarquables|valeurs remarquables]].

# Sinus
> [!property] Propriété
> $\sin(x + y) = \sin x \cos y + \cos x \sin y$  
> $\sin(x - y) = \sin x \cos y - \cos x \sin y$

### Exemple
- $\sin\dfrac{\pi}{12} = \sin\left(\dfrac{\pi}{3} - \dfrac{\pi}{4}\right) = \dfrac{\sqrt{2}}{4}(\sqrt{3} - 1)$ car $\dfrac{\pi}{12} = \dfrac{\pi}{3} - \dfrac{\pi}{4}$.

# Tangente
> [!property] Propriété
> $\tan(x + y) = \dfrac{\tan x + \tan y}{1 - \tan x \tan y}$  
> $\tan(x - y) = \dfrac{\tan x - \tan y}{1 + \tan x \tan y}$

### Exemples
- $\tan\dfrac{5\pi}{12} = \tan\left(\dfrac{\pi}{4} + \dfrac{\pi}{6}\right) = \dfrac{1 + \sqrt{3}/3}{1 - \sqrt{3}/3} = 2 + \sqrt{3}$ car $\dfrac{5\pi}{12} = \dfrac{\pi}{4} + \dfrac{\pi}{6}$.
- Si $\tan x = \dfrac{1}{3}$, $\tan y = -\dfrac{1}{7}$ et $x, y \in \left]-\dfrac{\pi}{2}, \dfrac{\pi}{2}\right[$ : $\tan 2x = \dfrac{3}{4}$ et $\tan(2x - y) = \dfrac{3/4 + 1/7}{1 - 3/28} = 1$, donc $2x - y = \dfrac{\pi}{4}$ car $2x < \dfrac{\pi}{2}$ et $-y < \dfrac{\pi}{2}$ donnent $0 < 2x - y < \pi$.

# Cotangente
> [!property] Propriété
> $\cot(x + y) = \dfrac{\cot x \cot y - 1}{\cot x + \cot y}$

Elle s'obtient en inversant la formule de $\tan(x + y)$, avec $\cot = \dfrac{1}{\tan}$ (voir [[tangente-et-cotangente|tangente et cotangente]]).

### Exemple
- $\cot\dfrac{5\pi}{12} = \cot\left(\dfrac{\pi}{4} + \dfrac{\pi}{6}\right) = \dfrac{1\cdot\sqrt{3} - 1}{1 + \sqrt{3}} = 2 - \sqrt{3}$ est identique à $\dfrac{1}{2 + \sqrt{3}}$ car $\tan\dfrac{5\pi}{12} = 2 + \sqrt{3}$.

# Différence de tangentes
Soient $x, y$ tels que $\tan x$ et $\tan y$ soient définis.
> [!property] Propriété
> $\tan x - \tan y = \dfrac{\sin(x - y)}{\cos x \cos y}$

### Exemple
- $\tan\left(\dfrac{\pi}{6} + x\right) - \tan\left(x - \dfrac{\pi}{6}\right) = \dfrac{\sin(\pi/3)}{\cos(x + \pi/6)\cos(x - \pi/6)}$ car on applique la formule avec $\sin\left(\dfrac{\pi}{6} + x - x + \dfrac{\pi}{6}\right) = \sin\dfrac{\pi}{3}$.
