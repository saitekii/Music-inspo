import type { Concept } from "../types/concept";

export function buildRelatedMap(
  allConcepts: Concept[],
  limit = 4
): Map<string, Concept[]> {
  const tagIndex = new Map<string, Set<string>>();
  for (const c of allConcepts) {
    for (const tag of c.tags) {
      let set = tagIndex.get(tag);
      if (!set) {
        set = new Set();
        tagIndex.set(tag, set);
      }
      set.add(c.id);
    }
  }

  const byId = new Map(allConcepts.map((c) => [c.id, c]));
  const result = new Map<string, Concept[]>();

  for (const concept of allConcepts) {
    const scores = new Map<string, number>();
    for (const tag of concept.tags) {
      const peers = tagIndex.get(tag);
      if (!peers) continue;
      for (const otherId of peers) {
        if (otherId === concept.id) continue;
        const other = byId.get(otherId)!;
        if (other.category === concept.category) continue;
        scores.set(otherId, (scores.get(otherId) ?? 0) + 1);
      }
    }

    const top = [...scores.entries()]
      .sort((a, b) => b[1] - a[1])
      .slice(0, limit)
      .map(([id]) => byId.get(id)!);

    if (top.length > 0) result.set(concept.id, top);
  }

  return result;
}
