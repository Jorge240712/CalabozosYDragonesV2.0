# 🐉 Operación: El Bestiario Despierta

**Misión 26 — Backend con Base de Datos**

---

## 🗄️ SQL — Crear la tabla

Ejecuta el siguiente script en el **SQL Editor** de tu panel de Supabase antes de comenzar a programar:

```sql
CREATE TABLE jefes (
    id SERIAL PRIMARY KEY,
    nombre TEXT NOT NULL,
    tipo TEXT NOT NULL,
    vida INTEGER NOT NULL DEFAULT 100,
    nivel_amenaza INTEGER NOT NULL DEFAULT 1,
    derrotado BOOLEAN DEFAULT false
);

INSERT INTO jefes (nombre, tipo, vida, nivel_amenaza, derrotado) VALUES
('Ignathrax el Devorador', 'Dragón', 500, 9, false),
('Vex Coronapálida', 'Liche', 300, 8, false),
('Guardián de Obsidiana', 'Elemental', 400, 7, true),
('Morrag Fauces Negras', 'Dragón', 450, 8, false);
```

---

## 📌 Premisa

El Gremio necesita catalogar a los jefes que enfrentan sus aventureros. El módulo `jefes` ya cuenta con la estructura del CRUD básico. Hoy agregaremos la capacidad de **filtrar la información dinámicamente** según los requerimientos del frontend.

---

## 🧠 Lo nuevo de hoy

`req.query` permite leer los parámetros enviados después del símbolo `?` en la URL (por ejemplo: `/jefes/filtrar?tipo=Dragón`).

A diferencia de `req.params`, cada parámetro de query es **opcional**. Tu consulta a Supabase debe evaluar en tiempo de ejecución cuáles filtros aplicar según los parámetros que realmente hayan llegado en la petición.

---

## 🎫 Ticket 1 — `obtenerJefesPorTipo`

Completa la función en `controllers/jefesController.js` para que el endpoint `GET /jefes/filtrar?tipo=Dragón`:

1. Extraiga `tipo` desde `req.query`.
2. Aplique el filtro `.eq('tipo', tipo)` en la consulta a Supabase.
3. Maneje adecuadamente posibles errores (`error`) antes de responder con los datos.

> **💡 Bonus del ticket:** Si el cliente no envía el parámetro `tipo` en el query, responde con la lista completa de jefes sin aplicar el filtro.

---

## 🎫 Ticket 2 — Combinar dos filtros

El mismo endpoint debe soportar también el filtrado por estado: `?derrotado=true` o `?derrotado=false`, así como la combinación de **ambos filtros a la vez**:

```http
GET /jefes/filtrar?tipo=Dragón&derrotado=false
```

Este endpoint debe devolver únicamente los jefes que coincidan con ambas condiciones (en este ejemplo, Dragones que **no** estén derrotados).

> **📌 Pista:** Puedes encadenar múltiples métodos `.eq()` en una misma consulta de Supabase (equivale a una condición SQL `WHERE ... AND ...`). Recuerda aplicar cada `.eq()` únicamente si el parámetro correspondiente llegó en `req.query`.

---

## 🎫 Mini-ticket — Configurar la Ruta (`routes/jefes.js`)

Agrega en `routes/jefes.js` la ruta para el endpoint `GET /filtrar`.

> **⚠️ Pista de orden:** Recuerda la regla sobre el orden de las rutas en Express: una ruta con un texto fijo (como `/filtrar`) debe declararse **antes** que una ruta con parámetro dinámico (como `/:id`), para evitar que Express interprete la palabra "filtrar" como si fuera un ID.

---

## 🟢 Estado esperado al terminar

- [ ] `GET /jefes/filtrar?tipo=Dragón` devuelve únicamente jefes de tipo Dragón.
- [ ] `GET /jefes/filtrar?derrotado=false` devuelve únicamente los jefes no derrotados.
- [ ] `GET /jefes/filtrar?tipo=Dragón&derrotado=false` devuelve únicamente Dragones no derrotados.
- [ ] `GET /jefes/filtrar` (sin parámetros) devuelve el listado completo de jefes.
