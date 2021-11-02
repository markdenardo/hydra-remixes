
 // Puertas
// por Celeste Betancur
// https://github.com/essteban

src(o0)
  .modulate(osc(21,0.25,0))
  .modulateScale(osc(34))
  .modulateKaleid(osc(55),0.1,1)
  .out(o1)

shape(3).out(o0)

render(o1)
