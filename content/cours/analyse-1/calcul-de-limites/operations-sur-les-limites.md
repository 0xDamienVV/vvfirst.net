---
title: Opérations sur les limites
order: 1
---
Soient $(a_n)$ et $(b_n)$ deux [[limite-d-une-suite|suites convergentes]] avec $a_n \to a$ et $b_n \to b$.
> [!property] Propriété
> $a_n + b_n \to a + b$  
> $a_n b_n \to ab$  
> $\dfrac{a_n}{b_n} \to \dfrac{a}{b}$ si $b \neq 0$

*Preuve de la somme* : pour $\varepsilon > 0$, il existe $N_1, N_2$ tels que $|a_n - a| < \dfrac{\varepsilon}{2}$ pour $n \geq N_1$ et $|b_n - b| < \dfrac{\varepsilon}{2}$ pour $n \geq N_2$. Alors, pour $n \geq \max(N_1, N_2)$, $|a_n + b_n - (a + b)| \leq |a_n - a| + |b_n - b| < \varepsilon$ par l'[[valeur-absolue|inégalité triangulaire]].

> [!property] Limites infinies
> Soit $a_n \to +\infty$ et $(b_n)$ une suite.
> - Si $(b_n)$ est **bornée** (ou minorée), alors $a_n + b_n \to +\infty$.
> - Si $b_n \geq c > 0$ pour tout $n$, alors $a_n b_n \to +\infty$ ; si $b_n \leq -c < 0$, alors $a_n b_n \to -\infty$.
> - $\dfrac{1}{a_n} \to 0$, et si $(b_n)$ est bornée, $\dfrac{b_n}{a_n} \to 0$.
>
> Les énoncés sont les mêmes pour $a_n \to -\infty$ en changeant les signes.

> [!warning] Formes indéterminées
> Les formes $\dfrac{\infty}{\infty}$, $\infty - \infty$, $0 \cdot \infty$ et $\dfrac{0}{0}$ ne permettent pas de conclure : on transforme l'expression (factorisation, conjugué).

### Exemples
- $\dfrac{\sqrt{n^2+1} + n}{n+3} = \dfrac{\sqrt{1 + 1/n^2} + 1}{1 + 3/n} \to 2$ car on factorise $n$ au numérateur et au dénominateur.
- $\dfrac{1 + 2 + \dots + n}{n^2 + n + 1} = \dfrac{n(n+1)/2}{n^2 + n + 1} \to \dfrac{1}{2}$ car la somme des $n$ premiers entiers vaut $\dfrac{n(n+1)}{2}$.
- $\dfrac{3(n+2)! + 2(n+1)!}{(n+3)!} = \dfrac{3n + 8}{(n+3)(n+2)} \to 0$ car on factorise $(n+1)!$.
- Si $a_n \to -\infty$ et $(b_n)$ est bornée, $a_n b_n \to -\infty$ est faux en général car $b_n = 0$ donne $a_n b_n = 0$ ; $a_n + b_n \to -\infty$ est vrai car $a_n + b_n \leq a_n + M$.
- Si $a_n \to -\infty$, $\dfrac{a_n}{n}$ ne tend pas forcément vers $0$ car $a_n = -n^2$ donne $\dfrac{a_n}{n} = -n \to -\infty$.
- Si $a_n \to -\infty$, $(a_n)$ est majorée car $a_n < -1$ à partir d'un certain rang, et il reste un nombre fini de termes.
