---
title: Suite convergente et suite bornée
order: 7
---
Soit $(a_n)$ une [[suite]].
> [!property] Convergence et bornes
> - Si $(a_n)$ **converge** (voir [[limite-d-une-suite|limite d'une suite]]), alors $(a_n)$ est [[suite-bornee|bornée]].
> - Si $(a_n)$ est **croissante et majorée** (ou décroissante et minorée), alors elle converge.
> - Si $|a_n| \to +\infty$ (voir [[limite-infinie|limite infinie]]), alors $(a_n)$ n'est pas bornée.
> - Si $a_n \to l$ et $a_n \geq m$ pour tout $n$, alors $l \geq m$ : les inégalités strictes deviennent larges à la limite.

*Preuve du premier point* : pour $\varepsilon = 1$, il existe $N$ tel que $|a_n - l| < 1$, donc $|a_n| < |l| + 1$ pour $n \geq N$, et $(a_n)$ est bornée par $\max(|a_1|, \dots, |a_{N-1}|, |l| + 1)$.

> [!warning] Attention
> Les réciproques sont fausses : une suite bornée peut diverger, et $|a_n| \to |l|$ n'implique pas $a_n \to l$.

### Exemples
- Si $0 \leq a_n \leq b_n$ avec $(a_n)$ croissante et $(b_n)$ convergente, alors $(a_n)$ converge car $(b_n)$ est bornée, donc $(a_n)$ est croissante et majorée.
- $a_n = (-1)^n$ est bornée mais diverge car ses termes pairs valent $1$ et ses termes impairs valent $-1$.
- $|a_n| = 1$ converge vers $1$ pour $a_n = (-1)^n$ mais $(a_n)$ ne converge ni vers $1$ ni vers $-1$.
- $a_n = 1 - \dfrac{1}{n}$ est strictement croissante et converge vers $1$ car elle est majorée par $1$ : elle ne tend pas vers $+\infty$.
- $a_n = (-1)^n n$ est non minorée avec $|a_n| \to +\infty$, mais ne tend ni vers $+\infty$ ni vers $-\infty$.
- $a_n = \dfrac{1}{n^2} + \bigl(1 + (-1)^n\bigr)\dfrac{1}{n}$ est strictement positive, converge vers $0$ et n'est pas monotone car $a_1 = 1$, $a_2 = \dfrac{1}{4} + 1 = \dfrac{5}{4}$ et $a_3 = \dfrac{1}{9}$.
- $a_n = \dfrac{1}{n}$ et $b_n = n^2$ vérifient $a_n \to 0$ et $a_n b_n = n \to +\infty$ car le produit d'une suite qui tend vers $0$ et d'une suite qui tend vers $+\infty$ est une forme indéterminée.
