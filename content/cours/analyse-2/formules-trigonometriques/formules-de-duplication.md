---
title: Formules de duplication
order: 2
---
Soit $x \in \mathbb{R}$. Ces formules découlent des [[formules-d-addition|formules d'addition]] avec $y = x$.

# Sinus
> [!property] Propriété
> $\sin 2x = 2\sin x \cos x$

### Exemple
- Si $\sin x = \dfrac{3}{5}$ avec $x \in \left[\dfrac{\pi}{2}, \pi\right]$, alors $\cos x = -\dfrac{4}{5}$ car $\cos x < 0$ (voir [[signe]]), et $\sin 2x = 2 \cdot \dfrac{3}{5}\cdot\left(-\dfrac{4}{5}\right) = -\dfrac{24}{25}$.

# Cosinus
> [!property] Propriété
> $\cos 2x = \cos^2 x - \sin^2 x = 2\cos^2 x - 1 = 1 - 2\sin^2 x$

### Exemple
- Avec les mêmes données, $\cos 2x = \dfrac{16}{25} - \dfrac{9}{25} = \dfrac{7}{25}$ car on utilise la première forme.

# Tangente
> [!property] Propriété
> $\tan 2x = \dfrac{2\tan x}{1 - \tan^2 x}$

### Exemple
- $\tan 2x = \dfrac{2/3}{1 - 1/9} = \dfrac{3}{4}$ si $\tan x = \dfrac{1}{3}$.

# Linéarisation
> [!property] Propriété
> $\cos^2 x = \dfrac{1 + \cos 2x}{2}$  
> $\sin^2 x = \dfrac{1 - \cos 2x}{2}$

### Exemples
- $\cos^2\dfrac{\pi}{8} = \dfrac{1 + \cos(\pi/4)}{2} = \dfrac{2 + \sqrt{2}}{4}$ car on applique la formule avec $x = \dfrac{\pi}{8}$.
- Si $\cos x = \dfrac{\sqrt{2 + \sqrt{2}}}{2}$ avec $x \in [-3\pi, -2\pi]$, alors $\cos 2x = 2 \cdot \dfrac{2 + \sqrt{2}}{4} - 1 = \dfrac{\sqrt{2}}{2}$ car $\cos x > 0$ impose $x \in \left[-\dfrac{5\pi}{2}, -2\pi\right]$, donc $2x = -4\pi - \dfrac{\pi}{4} = -\dfrac{17\pi}{4}$.
- $\cos\dfrac{7\pi}{8} + \sin\dfrac{199\pi}{3} = -\dfrac{\sqrt{2 + \sqrt{2}}}{2} + \dfrac{\sqrt{3}}{2}$ car $\cos\dfrac{7\pi}{8} = -\cos\dfrac{\pi}{8}$ avec $\cos^2\dfrac{\pi}{8} = \dfrac{2 + \sqrt{2}}{4}$, et $\dfrac{199\pi}{3} = 66\pi + \dfrac{\pi}{3}$.
- Une roue de rayon $r$ roule entre deux murs inclinés d'un angle $\alpha$ avec le sol, distants de $d$ à la base. Au contact d'un mur, le point de contact avec le sol est à $r\cot\dfrac{\alpha}{2}$ (mur de gauche) ou $r\tan\dfrac{\alpha}{2}$ (mur de droite) du pied du mur car la bissectrice passe par le centre (voir [[arc-et-secteur|arc et secteur]]). La roue parcourt donc $d - \dfrac{2r}{\sin\alpha}$ et tourne de $\beta = \dfrac{d}{r} - \dfrac{2}{\sin\alpha}$ car $\cot\dfrac{\alpha}{2} + \tan\dfrac{\alpha}{2} = \dfrac{\cos^2(\alpha/2) + \sin^2(\alpha/2)}{\sin(\alpha/2)\cos(\alpha/2)} = \dfrac{2}{\sin\alpha}$.
- Un triangle rectangle de côté vertical $R$ et d'angle $\alpha$ à la base contient un quart de disque de rayon $R$ centré à l'angle droit. L'aire hors du disque vaut $\dfrac{R^2}{2}\left(\cot\alpha - \sin 2\alpha + 2\alpha - \dfrac{\pi}{2}\right)$ car on retire au triangle ($\dfrac{R^2}{2\tan\alpha}$) un secteur d'angle $\dfrac{\pi}{2} - 2\alpha$ et un triangle isocèle de côtés $R$ d'angle $2\alpha$.
