export function estimateReadingMinutes(body: string) {
  const plainText = body
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/`[^`]*`/g, " ")
    .replace(/!\[[^\]]*\]\([^)]+\)/g, " ")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/[>#*_~|\-]/g, " ");
  const cjk = plainText.match(
    /[\p{Script=Han}\p{Script=Hiragana}\p{Script=Katakana}\p{Script=Hangul}]/gu,
  )?.length ?? 0;
  const words = plainText
    .replace(/[\p{Script=Han}\p{Script=Hiragana}\p{Script=Katakana}\p{Script=Hangul}]/gu, " ")
    .match(/[\p{L}\p{N}]+/gu)?.length ?? 0;
  return Math.max(1, Math.ceil(cjk / 400 + words / 220));
}

export function taxonomySlug(value: string) {
  const slug = Array.from(value.trim().normalize("NFKC"))
    .map((character) => {
      if (/^[\p{L}\p{N}]$/u.test(character) || /^\s$/u.test(character)) return character;
      if (character === "-") return character;
      return `-${character.codePointAt(0)?.toString(16) ?? "item"}-`;
    })
    .join("")
    .replace(/\s+/g, " ")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "")
    .trim();
  return slug || "item";
}

export const tagPath = (tag: string) => `/blog/tags/${taxonomySlug(tag)}/`;
export const collectionPath = (name: string) => `/blog/collections/${taxonomySlug(name)}/`;
