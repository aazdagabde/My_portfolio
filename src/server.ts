import { AngularAppEngine, createRequestHandler } from '@angular/ssr';
import { getContext } from '@netlify/angular-runtime/context.mjs';

const angularAppEngine = new AngularAppEngine();

export async function netlifyAppEngineHandler(request: Request): Promise<Response> {
  const context = getContext();

  // Les points d'API (API endpoints) peuvent être définis ici si nécessaire.
  // Décommentez et définissez les points d'accès selon vos besoins.
  // const pathname = new URL(request.url).pathname;
  // if (pathname === '/api/hello') {
  //   return Response.json({ message: 'Hello from the API' });
  // }

  const result = await angularAppEngine.handle(request, context);
  return result || new Response('Not found', { status: 404 });
}

/**
 * Le gestionnaire de requêtes utilisé par l'Angular CLI (serveur de développement et pendant le build).
 */
export const reqHandler = createRequestHandler(netlifyAppEngineHandler);