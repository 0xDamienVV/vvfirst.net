---
title: Moyennes
order: 5
---
Soient $a, b > 0$ (voir [[racines|racines]]).
> [!definition] Définition
> - **Moyenne arithmétique** : $m_a = \dfrac{a + b}{2}$
> - **Moyenne géométrique** : $m_g = \sqrt{ab}$
> - **Moyenne harmonique** : $\dfrac{1}{m_h} = \dfrac{1}{2}\left(\dfrac{1}{a} + \dfrac{1}{b}\right)$, soit $m_h = \dfrac{2ab}{a + b}$

> [!property] Propriété
> $m_h \leq m_g \leq m_a$, avec égalité si et seulement si $a = b$.

### Exemples
- $m_a \geq m_g$ car $m_a - m_g = \dfrac{1}{2}\left(\sqrt{a} - \sqrt{b}\right)^2 \geq 0$.
- Les trois moyennes de $a = 1$ et $b = 4$ valent $\dfrac{5}{2}$, $2$ et $\dfrac{8}{5}$, donc $m_h \leq m_g \leq m_a$.
- $m_g \geq m_h$ car $m_h = \dfrac{m_g^2}{m_a}$ et $m_a \geq m_g$ donnent $m_h \leq \dfrac{m_g^2}{m_g} = m_g$.
