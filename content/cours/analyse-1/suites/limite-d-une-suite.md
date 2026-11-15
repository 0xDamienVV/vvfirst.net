---
title: Limite d'une suite
order: 5
---

# Définition
Soient $(a_n)$ une [[suite]] et $l \in \mathbb{R}$.
> [!definition] Définition
> $\lim\limits_{n \to \infty} a_n = l$ si
> $\forall \varepsilon > 0,\ \exists N \in \mathbb{N}^*,\ n \geq N \Rightarrow |a_n - l| < \varepsilon$
>
> On dit alors que $(a_n)$ **converge** vers $l$ ; sinon elle **diverge**.

Cette définition utilise des [[quantificateurs|quantificateurs]] et une [[implications-remarquables|implication]].

### Exemples
- $a_n = \dfrac{n+2}{n} \to 1$ car $|a_n - 1| = \dfrac{2}{n} < \varepsilon$ dès que $n \geq N > \dfrac{2}{\varepsilon}$. Pour $\varepsilon = \dfrac{1}{2}, \dfrac{1}{4}, \dfrac{1}{8}$, il suffit de $N > 4, 8, 16$.
- $a_n = \sqrt{1 + \dfrac{1}{n}} \to 1$ car $|a_n - 1| < \varepsilon \iff \dfrac{1}{n} < 2\varepsilon + \varepsilon^2$, donc $N > \dfrac{1}{2\varepsilon + \varepsilon^2}$ suffit.

- $a_n = \dfrac{-1}{\sqrt{n+1}} \to 0$ car $|a_n| < \varepsilon \iff \sqrt{n+1} > \dfrac{1}{\varepsilon} \iff n > \dfrac{1}{\varepsilon^2} - 1$, donc $N > \dfrac{1}{\varepsilon^2} - 1$ suffit.
- $a_n = \left(\dfrac{2n+1}{3n}\right)^2 \to \dfrac{4}{9}$ car $\left|a_n - \dfrac{4}{9}\right| = \dfrac{4n+1}{9n^2}$ (différence de carrés) et $\dfrac{4n+1}{9n^2} < \varepsilon \iff 9\varepsilon n^2 - 4n - 1 > 0$, qui est vrai pour $n > \dfrac{4 + \sqrt{16 + 36\varepsilon}}{18\varepsilon}$ (inéquation du second degré en $n$).
- $a_n = \dfrac{a\sqrt{n} + b}{\sqrt{n} + c} \to a$ pour $c \geq 0$ car $|a_n - a| = \dfrac{|b - ca|}{\sqrt{n} + c} < \varepsilon$ dès que $\sqrt{n} > \dfrac{|b - ca|}{\varepsilon} - c$, donc $N = \max\left(1, \left(\dfrac{|b - ca|}{\varepsilon} - c\right)^2 + 1\right)$ convient.

# Formulations équivalentes
> [!property] Propriété
> Remplacer « $< \varepsilon$ » par « $\leq \varepsilon$ » donne une définition **équivalente**.  
> Les variantes suivantes ne sont **pas** équivalentes :
> - $\forall \varepsilon \geq 0$ (le cas $\varepsilon = 0$ imposerait $a_n = l$),
> - $\exists N,\ \forall \varepsilon$ (le rang $N$ ne doit pas dépendre de $\varepsilon$),
> - $\forall N,\ \exists \varepsilon$ (l'ordre des quantificateurs est inversé).

### Exemple
- Pour $a_n = \dfrac{1}{n} \to 0$, le rang $N > \dfrac{1}{\varepsilon}$ dépend de $\varepsilon$ : aucun $N$ ne convient pour tous les $\varepsilon$ à la fois.

# Négation
> [!property] Propriété
> $(a_n)$ ne converge pas vers $a$ si et seulement si il existe $\varepsilon > 0$ tel que $a_n \notin ]a - \varepsilon, a + \varepsilon[$ pour une **infinité** de $n$.

### Exemples
- Si $a_n > 0$ pour tout $n$ et $a_n \to a$, on a seulement $a \geq 0$ car $a_n = \dfrac{1}{n} > 0$ mais $\lim a_n = 0$.
- Si $a_n \to l$ et $b_n \to l$, on n'a pas $\dfrac{a_n}{b_n} \to 1$ en général car $a_n = \dfrac{1}{n}$ et $b_n = \dfrac{1}{n^2}$ donnent $\dfrac{a_n}{b_n} = n$.
- Une suite non bornée n'a pas forcément $|a_n| \to +\infty$ car $a_n = 0, 1, 0, 2, 0, 3, \dots$ est non bornée sans tendre vers $+\infty$.
