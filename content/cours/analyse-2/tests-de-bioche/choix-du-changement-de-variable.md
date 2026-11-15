---
title: Choix du changement de variable
order: 2
---
> [!definition] Règle de Bioche
> Pour une équation trigonométrique $F(x) = 0$ construite avec $\sin$, $\cos$, $\tan$ et $\cot$ de $x$ :
> - invariante par $x \to -x$ : on pose $z = \cos x$ ;
> - invariante par $x \to \pi - x$ : on pose $z = \sin x$ ;
> - invariante par $x \to \pi + x$ : on pose $z = \tan x$ ;
> - invariante par aucune des trois : on pose $z = \tan\dfrac{x}{2}$ (voir [[tangente-de-l-angle-moitie|tangente de l'angle moitié]]).

> [!property] Remarque
> - Si l'équation est invariante par deux transformations, elle l'est par la troisième, et on peut choisir l'une des variables correspondantes.
> - Pour l'équation en $\tan\dfrac{x}{2}$, on obtient toujours une équation rationnelle en $z$ : c'est la méthode qui fonctionne dans tous les cas, mais l'équation obtenue est de degré plus élevé.

### Exemples
- $4\tan^2 x - 3\cos x + 2\tan x \sin x = 26$ se résout avec $z = \cos x$ est VRAI car elle est invariante par $x \to -x$.
- $\dfrac{\sin 3x}{\cos^2 x - \sin^2 x} + 2\cos x \cot x - \dfrac{1}{\cos^2 x} = 0$ se résout avec $z = \sin x$ est VRAI car elle est invariante par $x \to \pi - x$.
- $\dfrac{1}{\cos^2 x} = 4\tan x$ se résout avec $z = \tan x$ est VRAI car elle est invariante par $x \to \pi + x$.
- $\cos x + \sin x + \tan x = 1$ se résout avec $z = \cos x$ est FAUX car $\cos x + \sin x + \tan x \to \cos x - \sin x - \tan x$ par $x \to -x$ : l'équation n'est invariante par aucune transformation, et on pose $z = \tan\dfrac{x}{2}$.
