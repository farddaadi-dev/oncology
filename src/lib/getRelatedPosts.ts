import type { CollectionEntry } from "astro:content";

interface Options {
  currentPost: CollectionEntry<"blog">;
  allPosts: CollectionEntry<"blog">;
  limit?: number;
}

interface ScoredPost {
  post: CollectionEntry<"blog">;
  score: number;
}

export function getRelatedPosts({
  currentPost,
  allPosts,
  limit = 3
}: Options): CollectionEntry<"blog">[] {

  return allPosts

    // Exclude the current article
    .filter(post => post.slug !== currentPost.slug)

    // Score every article
    .map<ScoredPost>(post => {

      let score = 0;

      //
      // Same category
      //
      if (post.data.category === currentPost.data.category) {
        score += 3;
      }

      //
      // Shared tags
      //
      const sharedTags = post.data.tags.filter(tag =>
        currentPost.data.tags.includes(tag)
      );

      score += sharedTags.length * 2;

      //
      // Bonus for featured articles
      //
      if (post.data.featured) {
        score += 1;
      }

      return {
        post,
        score
      };

    })

    // Remove unrelated articles
    .filter(item => item.score > 0)

    // Highest score first
    .sort((a, b) => {

      if (b.score !== a.score) {
        return b.score - a.score;
      }

      //
      // Tie breaker:
      // newest article first
      //
      return (
        new Date(b.post.data.publishDate).getTime() -
        new Date(a.post.data.publishDate).getTime()
      );

    })

    .slice(0, limit)

    .map(item => item.post);

}