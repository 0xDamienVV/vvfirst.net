---
title: Parabole et droite
order: 4
---
Soit $y = P(x) = ax^2 + bx + c$ une **parabole** et $y = px + q$ une **droite** (voir [[trinome-du-second-degre|trinôme du second degré]]).
> [!definition] Intersection
> Les **abscisses** des points d'intersection des **points d'intersection** sont les racines du trinôme $P(x) - (px + q) = 0$.

> [!property] Propriété
> - La droite est **tangente** à la parabole si et seulement si ce trinôme a une racine double ($\Delta = 0$).
> - La parabole est **entièrement sous** la droite si et seulement si $a < 0$ et $\Delta < 0$.

### Exemples
- Pour $P(x) = (m-2)x^2 - 4mx + 5m - 1$ et la droite $y = -6x + 5$ : $P(x) + 6x - 5 = (m-2)x^2 - (4m - 6)x + 5m - 6$ de discriminant $\Delta = -4(m-1)(m-3)$.
  - La parabole est sous la droite si $m - 2 < 0$ et $\Delta < 0$, donc $m < 1$.
  - Elle est tangente si $\Delta = 0$, donc $m = 1$ ou $m = 3$ ; avec un minimum ($m > 2$), $m = 3$ et $P(x) = x^2 - 12x + 14$, minimale en $x = 6$.
- Pour $P(x) = x^2 + (1 - 4m)x + 2 + m$ et la droite $y = x + 2$ : $P(x) - (x+2) = x^2 - 4mx + m =: Q(x)$ de discriminant $\Delta = 4m(4m - 1)$. Il y a deux points d'intersection si et seulement si $m < 0$ ou $m > \dfrac{1}{4}$. Leurs abscisses sont toutes deux dans $]-\infty, 1]$ si et seulement si $Q(1) \geq 0$ et $x_S = 2m < 1$ (voir [[position-des-racines|position des racines]]) : $Q(1) = 1 - 3m \geq 0$ donne $m \leq \dfrac{1}{3}$, d'où $m \in ]-\infty, 0[ \cup \left]\dfrac{1}{4}, \dfrac{1}{3}\right]$.
