---
title: Inéquations
order: 4
---
> [!definition] Principe
> Pour résoudre une **inéquation trigonométrique**, on cherche les $x$ où une expression en $\sin$, $\cos$, $\tan$ ou $\cot$ est comparée à une valeur :
> 1. la résoudre sur **une période** (intervalle de longueur $2\pi$, ou $\pi$ pour $\tan$ et $\cot$) à l'aide du [[cercle-trigonometrique|cercle trigonométrique]],
> 2. ajouter les multiples de la période,
> 3. intersecter avec l'[[intervalles|intervalle]] demandé.

> [!warning] Attention
> Pour $\sin(ax + b)$, il faut résoudre en $u = ax + b$, puis revenir à $x$, car la période devient $\dfrac{2\pi}{a}$.

### Exemples
- $\sin x \geq \dfrac{1}{2}$ pour $x \in [4\pi, 5\pi[$ a pour solution $\left[\dfrac{25\pi}{6}, \dfrac{29\pi}{6}\right]$ car sur une période $\sin x \geq \dfrac{1}{2} \iff x \in \left[\dfrac{\pi}{6}, \dfrac{5\pi}{6}\right]$.
- $-\dfrac{1}{2} < \cos x < 0$ pour $x \in [-5\pi, -3\pi[$ a pour solution $\left]-\dfrac{14\pi}{3}, -\dfrac{9\pi}{2}\right[ \cup \left]-\dfrac{7\pi}{2}, -\dfrac{10\pi}{3}\right[$ car sur une période les solutions sont $\left]\dfrac{\pi}{2}, \dfrac{2\pi}{3}\right[ \cup \left]\dfrac{4\pi}{3}, \dfrac{3\pi}{2}\right[$.
- $\tan x \leq -\dfrac{\sqrt{3}}{3}$ pour $x \in [0, 2\pi[$ a pour solution $\left]\dfrac{\pi}{2}, \dfrac{5\pi}{6}\right] \cup \left]\dfrac{3\pi}{2}, \dfrac{11\pi}{6}\right]$ car $\tan$ est de période $\pi$ et non définie en $\dfrac{\pi}{2}$ et $\dfrac{3\pi}{2}$.
- $\tan 2x \leq 1$ pour $x \in [0, 2\pi]$ est la réunion de $5$ intervalles disjoints, $\left[0, \dfrac{\pi}{8}\right] \cup \left]\dfrac{\pi}{4}, \dfrac{5\pi}{8}\right] \cup \left]\dfrac{3\pi}{4}, \dfrac{9\pi}{8}\right] \cup \left]\dfrac{5\pi}{4}, \dfrac{13\pi}{8}\right] \cup \left]\dfrac{7\pi}{4}, 2\pi\right]$ car pour $u = 2x \in [0, 4\pi]$, $\tan u \leq 1 \iff u \in \left]-\dfrac{\pi}{2}, \dfrac{\pi}{4}\right] + k\pi$, puis on divise par $2$.
- $\cot\left(2x + \dfrac{\pi}{12}\right) \geq \sqrt{3}$ pour $x \in [-3\pi, -\pi]$ est la réunion de $5$ intervalles car $\cot u \geq \sqrt{3} \iff u \in \left]0, \dfrac{\pi}{6}\right] + k\pi$ et $u = 2x + \dfrac{\pi}{12}$ parcourt $\left[-\dfrac{71\pi}{12}, -\dfrac{23\pi}{12}\right]$, qui rencontre $5$ de ces intervalles.
