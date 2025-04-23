import { source } from "@/lib/source";
import { createFromSource } from "fumadocs-core/search/server";

export const { GET } = createFromSource(source, undefined, {
  localeMap: {
    // Configure Thai language support
    th: {
      search: {
        threshold: 0,
        tolerance: 0,
      },
    },
  },
});
