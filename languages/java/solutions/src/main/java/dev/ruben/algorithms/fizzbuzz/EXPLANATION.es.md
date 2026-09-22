[English](./EXPLANATION.md) | [Español](./EXPLANATION.es.md)

# Referencia de FizzBuzz

`FizzBuzz.generate(int n)` devuelve un `List<String>` con las
representaciones de 1 hasta `n`.

El resultado es un `ArrayList` con capacidad inicial `n`, evitando ampliaciones
mientras se agregan los valores esperados. La clase es `final` y tiene un
constructor privado porque solo expone un metodo de utilidad estatico.

El metodo recorre cada valor una vez, por lo que la complejidad temporal es
O(n). La lista devuelta usa O(n) espacio.
