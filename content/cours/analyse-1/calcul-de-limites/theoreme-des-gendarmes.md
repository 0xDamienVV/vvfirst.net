---
title: Théorème des deux gendarmes
order: 3
---
Soient $(a_n)$, $(b_n)$, $(c_n)$ trois [[suite|suites]].
> [!property] Théorème
> Si $a_n \leq b_n \leq c_n$ à partir d'un certain rang, et si $a_n \to l$ et $c_n \to l$, alors $b_n \to l$.

> [!property] Corollaires
> - Si $|a_n| \leq b_n$ et $b_n \to 0$, alors $a_n \to 0$ (voir [[valeur-absolue|valeur absolue]]).
> - Si $a_n \leq b_n$ et $a_n \to +\infty$, alors $b_n \to +\infty$ ; si $b_n \leq c_n$ et $c_n \to -\infty$, alors $b_n \to -\infty$.

### Exemples
- $\dfrac{\sqrt{n^2+1}}{n} \to 1$ car $1 \leq \dfrac{\sqrt{n^2+1}}{n} \leq \dfrac{n+1}{n}$.
- $\dfrac{\sin(n\pi/2)}{(n+1)^2} \to 0$ car $-\dfrac{1}{(n+1)^2} \leq \dfrac{\sin(n\pi/2)}{(n+1)^2} \leq \dfrac{1}{(n+1)^2}$.
- $c_n = \dfrac{n^2}{n^3 + 3n + 1} + \dfrac{n^2 + 1}{n^3 + 3n + 2} + \dots + \dfrac{n^2 + 2n - 1}{n^3 + 5n}$ comporte $2n$ termes compris entre $\dfrac{n^2}{n^3 + 5n}$ et $\dfrac{n^2 + 2n - 1}{n^3 + 3n + 1}$, donc $\dfrac{2n^3}{n^3 + 5n} \leq c_n \leq \dfrac{2n(n^2 + 2n - 1)}{n^3 + 3n + 1}$, et $c_n \to 2$.
- $a_n = \dfrac{2n+1}{3n - \cos(n\pi)} \to \dfrac{2}{3}$ car $-1 \leq \cos(n\pi) \leq 1$ donne $\dfrac{2n+1}{3n+1} \leq a_n \leq \dfrac{2n+1}{3n-1}$, et les deux bornes tendent vers $\dfrac{2}{3}$.
- $a_n = \dfrac{1}{\sqrt{n^4+n^2+1} - \sqrt{n^4+1}} \to 2$ car $a_n = \dfrac{\sqrt{n^4+n^2+1} + \sqrt{n^4+1}}{n^2}$ (conjugué) et $\dfrac{2n^2}{n^2} \leq a_n \leq \dfrac{2n^2 + 2}{n^2}$.
- $a_n = \dfrac{n}{n+3} + \dfrac{n+1}{n+4} + \dots + \dfrac{2n-1}{2n+2} \to +\infty$ car les $n$ termes sont tous $\geq \dfrac{n}{2n+2}$, donc $a_n \geq \dfrac{n^2}{2n+2} \to +\infty$ (voir [[limite-infinie|limite infinie]]).
- $x_n = \dfrac{2y_n - 2\sin(y_n) + 4}{y_n - (-1)^n + 3} \to 2$ si $y_n \to +\infty$ car $\dfrac{2\sin(y_n)}{y_n} \to 0$ et $\dfrac{(-1)^n}{y_n} \to 0$ par le premier corollaire, puis on divise numérateur et dénominateur par $y_n$.
