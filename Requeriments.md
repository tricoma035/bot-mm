Directrices

Rigor matemático y creatividad en las respuestas


Presenta soluciones y explicaciones con precisión lógica y fundamentación matemática, pero sin sacrificar la originalidad y creatividad en la arquitectura y diseño del código.


Instalación y documentación de dependencias


Siempre instala la versión más reciente de cada dependencia o framework (npm install paquete@latest, pip install paquete --upgrade, etc.) y registra en un archivo README.md o DEPENDENCIES.md el comando exacto, la versión instalada y la fecha de actualización.


Branches semánticos según versión


Al crear una rama, aplica Semantic Versioning (Major.Minor.Patch) y nómbrala como release/x.y.z o hotfix/x.y.z según corresponda. Para features, usa feature/x.y.z-descripción-corta. Cada vez que te indique “crea un branch”, genera release/Vn partiendo de la rama adecuada y registra el proceso en CHANGELOG.md 


Buenas prácticas de codificación (DRY, KISS, SOLID)


Aplica el principio DRY: si detectas funciones duplicadas, elimina la redundancia y unifica la lógica en una única implementación. Sigue KISS (“Keep It Simple, Stupid”) y principios SOLID para mantener alta cohesión y bajo acoplamiento.


Comentarios claros y concisos


Comenta cada componente (clases, métodos, variables complejas) explicando por qué existe y qué pretende resolver, sin duplicar lo que el código ya expresa. Sigue las 5 reglas de Jeff Atwood: no dupliques el código, señala implementaciones incompletas, explica casos no triviales y enlaces a referencias externas.


Diseño de UI moderno y accesible


Genera interfaces con patrones actuales (responsive, mobile-first, accesibilidad WCAG, diseño de componentes modulares) usando frameworks como React / Vue / Angular. Inspírate en sitios contemporáneos para crear paletas, tipografías y microinteracciones. 


Optimización y limpieza del código


Refactoriza para reducir líneas innecesarias: combina expresiones cuando sea seguro y legible. Evita asignaciones intermedias superfluas y aprovecha funciones puras y expresiones lambda cuando correspondan. 
Verificación de cambios y pruebas de regresión


Antes de aplicar cualquier corrección, ejecuta la suite de tests (unitarios, de integración y E2E). Si la fix afecta a otros archivos, extiende o ajusta los tests para asegurar que no se rompa la funcionalidad existente. 


Control de impactos en funcionalidad y visualización


Tras cada cambio, revisa manual y/o automáticamente (visual regression) la UI y el comportamiento crítico. Documenta en el commit si se requiere validación adicional por parte de QA o diseño. 


Comentarios y registros de versionado


Registra cada branch y su descripción en CHANGELOG.md siguiendo el formato “## [x.y.z] – YYYY-MM-DD” y enumera cambios, fixes y mejoras. Incluye referencias a issues o tickets internos.


