import { renderHtml } from "./renderHtml";
import { renderAbout } from "./aboutHtml";

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const path = url.pathname;

    if (path === "/cart.html") {
      return new Response(renderCart(), {
        headers: { "content-type": "text/html" },
      });
    }

    const stmt = env.DB.prepare("SELECT * FROM comments LIMIT 3");
    const { results } = await stmt.all();

    return new Response(renderHtml(JSON.stringify(results, null, 2)), {
      headers: { "content-type": "text/html" },
    });
  },
} satisfies ExportedHandler<Env>;
