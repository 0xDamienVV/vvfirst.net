---
title: Loi des cosinus
order: 2
---
Soit un triangle $ABC$ avec les mêmes notations que pour la [[loi-des-sinus|loi des sinus]].
> [!property] Propriété
> $a^2 = b^2 + c^2 - 2bc\cos\alpha$  
> $b^2 = a^2 + c^2 - 2ac\cos\beta$  
> $c^2 = a^2 + b^2 - 2ab\cos\gamma$

Pour $\gamma = 90^\circ$, on retrouve le théorème de Pythagore.

### Exemples
- Avec $a = 4$, $b = 7$, $c = 10$ : $\cos\gamma = \dfrac{16 + 49 - 100}{2 \cdot 4 \cdot 7} = -\dfrac{5}{8}$, donc $\gamma \approx 128{,}7^\circ$.
- Avec $a = 12$, $b = 18$, $\gamma = 53^\circ$ : $c^2 = 144 + 324 - 432\cos 53^\circ \approx 208$, donc $c \approx 14{,}4$.
- Pour la médiane $AM$ avec $M$ milieu de $[BC]$ : en écrivant la loi des cosinus dans $ABM$ et $ACM$ avec des angles en $M$ supplémentaires, on obtient $b^2 + c^2 = 2AM^2 + \dfrac{a^2}{2}$ car les termes en $\cos$ s'annulent, donc $AM = \dfrac{1}{2}\sqrt{2(b^2 + c^2) - a^2}$.
