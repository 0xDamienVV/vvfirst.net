---
title: Formes indéterminées
order: 2
---
> [!definition] Conjugué
> Une **forme indéterminée** est une limite que les règles de calcul ne permettent pas de conclure. Pour une différence de racines $\sqrt{u_n} - \sqrt{v_n}$ de type $\infty - \infty$, on multiplie et divise par le **conjugué** $\sqrt{u_n} + \sqrt{v_n}$ (voir [[rationalisation|rationalisation]]) :
> $\sqrt{u_n} - \sqrt{v_n} = \dfrac{u_n - v_n}{\sqrt{u_n} + \sqrt{v_n}}$

> [!property] Propriétés
> - Quand les racines ont des termes dominants différents, on **factorise** le terme dominant.
> - Le produit d'une suite qui tend vers $\pm\infty$ et d'une suite bornée **loin de $0$** (par exemple $\geq 3$) tend vers $\pm\infty$.

### Exemples
- $\sqrt{n^2+1} - \sqrt{n^2 + an} = \dfrac{1 - an}{\sqrt{n^2+1} + \sqrt{n^2+an}} \to -\dfrac{a}{2}$ car on divise par $n$ le numérateur et le dénominateur.
- $\sqrt{2n} - \sqrt{n+1} = \sqrt{n}\left(\sqrt{2} - \sqrt{1 + \tfrac{1}{n}}\right) \to +\infty$ car $\sqrt{2} - 1 > 0$.
- $\dfrac{n}{\sqrt{n^4+1} - (n^2+1)} = -\dfrac{\sqrt{n^4+1} + n^2 + 1}{2n} \to -\infty$ car le dénominateur devient $-2n^2$ par le conjugué.
- $\sqrt{2n^3 + n^2 + 2} - \sqrt{2n^3 + 2n^2} = \dfrac{-n^2 + 2}{\sqrt{2n^3+n^2+2} + \sqrt{2n^3+2n^2}} \to -\infty$ car le numérateur est équivalent à $-n^2$ et le dénominateur à $2\sqrt{2}\,n^{3/2}$.
- $\sqrt{9n^4 + 2n^2} - \sqrt{9n^4 - n^2 + n + 1} = \dfrac{3n^2 - n - 1}{\sqrt{9n^4+2n^2} + \sqrt{9n^4-n^2+n+1}} \to \dfrac{1}{2}$ car on divise numérateur et dénominateur par $n^2$ et le dénominateur tend vers $3 + 3 = 6$ contre $3$ au numérateur.
- $\dfrac{\sin^2(n^3) + 3}{\sqrt{n^3-1} - \sqrt{n^3+1}} \to -\infty$ car $\sqrt{n^3-1} - \sqrt{n^3+1} = \dfrac{-2}{\sqrt{n^3-1} + \sqrt{n^3+1}} \to 0^-$ et le numérateur est compris entre $3$ et $4$.
