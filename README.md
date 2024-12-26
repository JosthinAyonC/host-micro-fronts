# Proyecto ADAM

**ADAM** es un proyecto modular diseñado para gestionar diversos aspectos administrativos y operativos. Actualmente, se enfoca en un módulo específico, pero está estructurado para expandirse fácilmente a otros módulos en el futuro.

## Módulos

1. **Módulo de Roles**: Encargado de la generación de PDF de roles de pago.

## Herramientas Utilizadas

- **Lefthook**: Para la ejecución de hooks de Git como linters y pruebas antes de los commits.
- **Linter**: Para asegurar que el código siga las mejores prácticas y estándares.
- **Prettier**: Para formatear el código de manera consistente.
- **Redux**: Para la gestión del estado global de la aplicación.
- **React Router**: Para la navegación y enrutamiento en la aplicación React.

## Módulo de Roles

El **Módulo de Roles** se encarga de generar los roles de pago en formato PDF. Este módulo incluye:

- Funcionalidad para generar PDF de roles de pago.
- Interfaz para la gestión y visualización de roles generados.

## Configuración de Prettier y ESLint

El proyecto utiliza Prettier y ESLint para mantener el código limpio y consistente. Asegúrate de seguir las siguientes directrices:

- **Prettier**:
  - `semi`: true
  - `singleQuote`: true
  - `trailingComma`: 'es5'
  - `tabWidth`: 2
  - `printWidth`: 80
  - `bracketSpacing`: true
  - `arrowParens`: 'always'
  - `endOfLine`: 'lf'

- **ESLint**:
  - Se utiliza para verificar el código y asegurar que sigue las reglas definidas.
  - Los errores de linting deben ser corregidos antes de poder hacer commit.

## Ejemplo de Mensajes de Commit

Para mantener un historial de commits claro y organizado, utiliza los siguientes formatos:

- **Feature**: `feat: Añadir funcionalidad de generación de PDF`
- **Bug Fix**: `fix: Corregir error en el módulo de generación de PDF`
- **Refactorización**: `refactor: Mejorar estructura del código en el módulo de roles`

## Importancia del Linter

Es crucial mantener el linter en ejecución, ya que los commits no podrán realizarse si el linter detecta errores. Esto asegura que todo el código cumple con los estándares de calidad y las reglas establecidas antes de que se integre en el repositorio.

---

Para cualquier duda o problema relacionado con el proyecto, no dudes en ponerte en contacto con el equipo de desarrollo.

