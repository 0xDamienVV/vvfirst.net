---
title: Équation en tangente
order: 3
---
Soit $t = \tan x$ avec $\cos x \neq 0$.  
Une équation **homogène** (voir [[equation-homogene|équation homogène]]) se ramène à cette substitution.
> [!property] Propriété
> $\cos^2 x = \dfrac{1}{1 + t^2}$, $\quad \sin^2 x = \dfrac{t^2}{1 + t^2}$, $\quad \sin x\cos x = \dfrac{t}{1 + t^2}$, $\quad \sin 2x = \dfrac{2t}{1 + t^2}$

Ces formules découlent de $1 + \tan^2 x = \dfrac{1}{\cos^2 x}$ (voir [[identites-fondamentales|identités fondamentales]]).

### Exemples
- $\tan x + 3\sin^2 x - \cos^2 x = 0$ s'écrit $t + \dfrac{3t^2 - 1}{1 + t^2} = 0$, soit $t^3 + 3t^2 + t - 1 = (t + 1)(t^2 + 2t - 1) = 0$ : $\tan x = -1$ ou $\tan x = -1 \pm \sqrt{2}$.
- $\sin^2 x + 8\sin 2x + 3\cos^2 x = 10\cot x$ s'écrit $\dfrac{t^2 + 16t + 3}{1 + t^2} = \dfrac{10}{t}$, soit $t^3 + 6t^2 + 3t - 10 = (t - 1)(t + 2)(t + 5) = 0$ : $\tan x = 1$, $-2$ ou $-5$.
