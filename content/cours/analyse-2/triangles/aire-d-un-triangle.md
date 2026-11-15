---
title: Aire d'un triangle
order: 3
---
Soit un triangle $ABC$ de côtés $a$, $b$, $c$, d'angles $\alpha$, $\beta$, $\gamma$ et de demi-périmètre $p = \dfrac{a + b + c}{2}$.

# Avec un angle
> [!property] Propriété
> $S = \dfrac{1}{2}ab\sin\gamma = \dfrac{1}{2}bc\sin\alpha = \dfrac{1}{2}ac\sin\beta$

### Exemple
- Avec $a = 12$, $b = 18$, $\gamma = 53^\circ$ : $S = \dfrac{1}{2}\cdot 12 \cdot 18\sin 53^\circ \approx 86{,}2$.

# Formule de Héron
> [!property] Propriété
> $S = \sqrt{p(p - a)(p - b)(p - c)}$

La formule vient de $S^2 = \dfrac{1}{4}a^2b^2\sin^2\gamma = \dfrac{1}{4}a^2b^2(1 - \cos^2\gamma)$ avec $\cos\gamma = \dfrac{a^2 + b^2 - c^2}{2ab}$ (voir [[loi-des-cosinus|loi des cosinus]]). On obtient $S^2 = \dfrac{1}{16}\left(c^2 - (a - b)^2\right)\left((a + b)^2 - c^2\right)$, qui se factorise en $\dfrac{1}{16}(c + b - a)(c + a - b)(a + b - c)(a + b + c)$, soit $p(p - a)(p - b)(p - c)$ car $a + b + c = 2p$ et $b + c - a = 2(p - a)$.

### Exemple
- Pour $a = 3$, $b = 4$, $c = 5$ : $p = 6$ et $S = \sqrt{6 \cdot 3 \cdot 2 \cdot 1} = 6$.

# Rayons des cercles
> [!property] Propriété
> Rayon du cercle circonscrit : $R = \dfrac{abc}{4S}$.  
> Rayon du cercle inscrit : $r = \dfrac{S}{p}$.

Ces formules s'expliquent ainsi :
- Le centre du cercle inscrit, relié aux trois sommets, partage le triangle en trois triangles de hauteur $r$ et de bases $a$, $b$, $c$ : $S = \dfrac{r(a + b + c)}{2} = rp$, donc $r = \dfrac{S}{p}$.
- La [[loi-des-sinus|loi des sinus]] donne $\sin\alpha = \dfrac{a}{2R}$. En reportant dans $S = \dfrac{1}{2}bc\sin\alpha$, on obtient $S = \dfrac{abc}{4R}$, donc $R = \dfrac{abc}{4S}$.

### Exemple
- Pour le triangle $3, 4, 5$ : $R = \dfrac{60}{24} = \dfrac{5}{2}$ et $r = \dfrac{6}{6} = 1$.
- L'aire du disque circonscrit et du disque inscrit, privée de celle du triangle, vaut $\pi(R^2 + r^2) - S$ avec $R^2 = \dfrac{(abc)^2}{16S^2}$ et $r^2 = \dfrac{(p-a)(p-b)(p-c)}{p}$ car $S^2 = p(p-a)(p-b)(p-c)$.
