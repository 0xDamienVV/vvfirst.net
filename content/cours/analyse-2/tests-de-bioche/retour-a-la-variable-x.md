---
title: Retour à la variable x
order: 4
---
> [!definition] Étapes
> Après la résolution de l'équation en $z$ :
> 1. on écarte les valeurs de $z$ **impossibles** : $|z| > 1$ pour $z = \cos x$ ou $z = \sin x$, et les valeurs qui annulent un dénominateur de l'équation de départ ;
> 2. pour chaque valeur $z_0$ retenue, on résout l'[[equations-trigonometriques-elementaires|équation élémentaire]] $\cos x = z_0$, $\sin x = z_0$, $\tan x = z_0$ ou $\tan\dfrac{x}{2} = z_0$ ;
> 3. on teste séparément les valeurs de $x$ que la substitution exclut, et on restreint les solutions à l'intervalle demandé.

> [!warning] Attention
> Avec $z = \tan\dfrac{x}{2}$, la valeur $x = \pi + 2k\pi$ n'est jamais atteinte par $z$ : on la teste à part dans l'équation de départ.  
> Avec $z = \tan x$, les valeurs $x = \dfrac{\pi}{2} + k\pi$ sont exclues.

### Exemples
- $\sin x \tan x = 1$ a pour solutions $x = \pm\arccos\dfrac{\sqrt{5} - 1}{2} + 2k\pi$ est VRAI car $z^2 + z - 1 = 0$ donne $z = \dfrac{-1 \pm \sqrt{5}}{2}$, et $z = \dfrac{-1 - \sqrt{5}}{2} < -1$ est écartée alors que $\dfrac{\sqrt{5} - 1}{2} \in\ ]0, 1[$ est retenue.
- $\dfrac{1}{\cos^2 x} = 4\tan x$ a pour solutions $x = \dfrac{\pi}{12} + k\pi$ et $x = \dfrac{5\pi}{12} + k\pi$ est VRAI car $z^2 - 4z + 1 = 0$ donne $\tan x = 2 \pm \sqrt{3}$, avec $\tan\dfrac{\pi}{12} = 2 - \sqrt{3}$ et $\tan\dfrac{5\pi}{12} = 2 + \sqrt{3}$.
- $2\cos^2 x + 3\sin x = 3$ a pour solutions $\dfrac{\pi}{6} + 2k\pi$, $\dfrac{5\pi}{6} + 2k\pi$ et $\dfrac{\pi}{2} + 2k\pi$ est VRAI car $2z^2 - 3z + 1 = 0$ donne $\sin x = \dfrac{1}{2}$ ou $\sin x = 1$.
- $\cos x + \sin x + \tan x = 1$ admet $x = 2k\pi$ comme solution est VRAI car $z^4 - z^2 + 2z = z(z^3 - z + 2) = 0$ donne $z = 0$, soit $\tan\dfrac{x}{2} = 0$ ; les autres solutions viennent de $z^3 - z + 2 = 0$, qui n'a pas de racine simple.
- $x = \pi + 2k\pi$ est solution de cette équation est FAUX car $\cos\pi + \sin\pi + \tan\pi = -1 \neq 1$ : cette valeur exclue par la substitution est testée à part, puis écartée.
