import Bookmark from "@/components/bookmarks/bookmark";
import { Icons } from "@/components/shared/icons";
import { cn } from "@/lib/utils";
import type { BookmarkWithCollection } from "@/types";
import { Collection } from "@prisma/client";
import Link from "next/link";

export default function Bookmarks({
  title,
  bookmarks,
}: {
  title: string;
  bookmarks: BookmarkWithCollection[];
}) {
  if (!bookmarks.length) {
    return null;
  }

  const hasMore = bookmarks.length > 5;
  return (
    <dl className="section-container not-prose">
      <dt className={cn("section-title group", hasMore && "link")}>
        {hasMore ? (
          <Link
            href="/bookmarks"
            className="absolute w-full h-full "
            aria-label="View All Bookmarks"
          />
        ) : null}
        <h3>{title}</h3>
        <Icons.arrowRight
          size={16}
          className={cn(
            "text-gray-4 group-hover:text-secondary hidden",
            hasMore && "block",
          )}
        />
      </dt>
      <dd className="section-content">
        {bookmarks.slice(0, 5).map((bookmark) => (
          <Bookmark
            bookmark={bookmark}
            collection={bookmark?.collection as Collection}
            key={bookmark.id}
          />
        ))}
      </dd>
    </dl>
  );
}
