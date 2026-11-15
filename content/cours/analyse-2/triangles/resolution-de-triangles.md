---
title: Résolution de triangles
order: 4
---
Résoudre un triangle, c'est déterminer ses trois côtés et ses trois angles à partir de trois données dont un côté.

> [!property] Outils selon les données
> - **Trois côtés** : [[loi-des-cosinus|loi des cosinus]] pour chaque angle.
> - **Deux côtés et l'angle compris** : loi des cosinus pour le troisième côté, puis loi des sinus ou des cosinus.
> - **Un côté et deux angles** : le troisième angle vaut $\pi - \alpha - \beta$, puis [[loi-des-sinus|loi des sinus]].
> - **Deux côtés et un angle non compris** : loi des sinus, qui peut donner **deux solutions**.

> [!warning] Cas ambigu
> Si l'angle donné est opposé à un côté connu, $\sin\gamma = k$ a deux solutions $\gamma$ et $\pi - \gamma$ (voir [[equations-trigonometriques-elementaires|équations élémentaires]]). On garde celles pour lesquelles $\alpha + \gamma < \pi$.

### Exemples
- Avec $a = 4$, $b = 7$, $c = 10$ : $\alpha \approx 18{,}2^\circ$, $\beta \approx 33{,}1^\circ$ et $\gamma \approx 128{,}7^\circ$ car on applique la loi des cosinus trois fois.
- Avec $a = 12$, $b = 18$, $\gamma = 53^\circ$ : $c \approx 14{,}4$, puis $\alpha \approx 41{,}6^\circ$ et $\beta \approx 85{,}4^\circ$.
- Avec $a = 7$, $c = 10$, $\alpha = 30^\circ$ : $\sin\gamma = \dfrac{c\sin\alpha}{a} = \dfrac{5}{7}$ donne deux triangles car $\alpha + \gamma < \pi$ dans les deux cas :
  - $\gamma \approx 45{,}6^\circ$, $\beta \approx 104{,}4^\circ$, $b \approx 13{,}6$,
  - $\gamma \approx 134{,}4^\circ$, $\beta \approx 15{,}6^\circ$, $b \approx 3{,}8$.
