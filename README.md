## Iniciar la aplicación

Primero, ejecute el servidor de desarrollo:

yarn install
yarn run dev

Abir [http://localhost:3000](http://localhost:3000) en su navegador para ver el resultado.

## Ejecutar los test

yarn run test

\*\* Aclaración: Hay algunas pruebas de Snapshots que pueden fallar. Presionar u para actualizarlo y todo funcionara a la perfección.

## Tecnologias usadas

-- NextJS: es un pequeño framework construido sobre React.js que viene a ayudar a reducir esta fatiga. ¿Cómo? Next nos permite, instalando una sola dependencia, tener configurado todo lo que necesitamos para crear una aplicación de React usando Babel, Webpack, server render y muchas otras técnicas como HMR o separación de código y… ¡hasta hace más fácil hacer deploy de nuestras aplicaciones!

-- NextUI: NextUI es un marco moderno de React UI que le permite crear sitios web/aplicaciones hermosos y rápidos, independientemente de su experiencia de diseño. Puede crear una hermosa interfaz de usuario en su aplicación React y Nextjs con solo una pequeña personalización App.jsxpara cargar el proveedor de NextUI. Tiene muchas características interesantes, por lo que muchos desarrolladores lo adoran y lo utilizan.

-- SWR: El nombre “SWR” es derivado de stale-while-revalidate, una estrategia de invalidación de caché HTTP popularizada por HTTP RFC 5861. SWR es una estrategia para devolver primero los datos en caché (obsoletos), luego envíe la solicitud de recuperación (revalidación), y finalmente entregue los datos actualizados.

## A tener en cuenta

-- Se usaron estas tecnologias a modo de ejemplo. Pero se podrían haber utilizado otras.
-- Se podria haber utilizado páginas estaticas con NextJs para todas las paginas de personajes de Rick and Morty ya que no cambian en el tiempo pero decidi hacerlo dinámico como prueba.
-- Se realizaron pruebas en algunos componentes solamente para probar las diferentes tipos y opciones de pruebas. A modo de ejemplo.
-- Se eligio esta estrucutura de carpetas por ser una aplicación chica pero si la aplicación es grande se recomienda modularizar y usar otras estrategías.
-- Se utilizo otro método de grilla para la pantalla de favoritos como muestra.
-- Se utilizo tema dark para mostrar los diferentes temas que se pueden aplicar.
