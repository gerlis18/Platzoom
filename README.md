# Platzoom

**Platzom** se trata de un idioma avanzado creado en el curso de fundamentos de JavaScript en [Platzi](https://platzi.com)

## Descripcion

- Si la palabra termina con "ar", se le quitan esas dos letras
- Si la palabra inicia con Z, se le añade "pe" al final.
- Si la palabra traducida tiene 10 o más letras, se debe partir en dos por la mitad y unir con con un guión medio
- Por último, si la palabra original en un palíndromo, ninguna ragla anterior cuenta y se devuelve la misma palabra pero intercalando letras mayúsculas y minúsculas

# Instalacion

```
npm install platzoom
```

# Uso

```
import platzoom from 'platzoom'

platzoom("programar") // Program
platzoom("Zorro") // Zorrope
platzoom("Zarpar") // Zarppe
platzoom("abecedario") // abece-dario
platzoom("sometemos") // SoMeTeMoS

```

