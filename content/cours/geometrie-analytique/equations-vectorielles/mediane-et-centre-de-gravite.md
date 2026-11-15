---
title: Médiane et centre de gravité
order: 4
---
Soient $ABC$ un triangle non aplati et $I$, $J$, $K$ les [[milieu|milieux]] respectifs de $[BC]$, $[AC]$, $[AB]$.
> [!definition] Définition
> Une **médiane** joint un sommet au milieu du côté opposé : $(AI)$, $(BJ)$, $(CK)$.  
> Les trois médianes se coupent en un point $G$, le **centre de gravité**, tel que :
> $\overrightarrow{AG} = \tfrac{1}{3}(\overrightarrow{AB} + \overrightarrow{AC}) = \tfrac{2}{3}\overrightarrow{AI}$ et $\overrightarrow{GA} + \overrightarrow{GB} + \overrightarrow{GC} = \vec{0}$

### Exemple
- Vues depuis $A$, $(BJ) : \overrightarrow{AM} = (1-t)\overrightarrow{AB} + \tfrac{t}{2}\overrightarrow{AC}$ et $(CK) : \overrightarrow{AM} = \tfrac{s}{2}\overrightarrow{AB} + (1-s)\overrightarrow{AC}$.  
  Par [[intersection-de-deux-droites|intersection de deux droites]], $1 - t = \tfrac{s}{2}$ et $\tfrac{t}{2} = 1 - s$ donnent $t = s = \tfrac{2}{3}$, donc $\overrightarrow{AG} = \tfrac{1}{3}(\overrightarrow{AB} + \overrightarrow{AC}) = \tfrac{2}{3}\overrightarrow{AI}$ : $G$ est aussi sur $(AI)$.
- $\overrightarrow{GA} + \overrightarrow{GB} + \overrightarrow{GC} = \overrightarrow{AB} + \overrightarrow{AC} - 3\overrightarrow{AG} = \vec{0}$ car $\overrightarrow{GA} = -\overrightarrow{AG}$, $\overrightarrow{GB} = \overrightarrow{AB} - \overrightarrow{AG}$ et $\overrightarrow{GC} = \overrightarrow{AC} - \overrightarrow{AG}$.
