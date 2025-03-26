import { Icons } from "@/components/shared/icons";
import { getLinks } from "@/config/user-page";
import type { User } from "@/types";
import Link from "next/link";

export default function Connect({
  title,
  user,
}: {
  title: string;
  user: User;
}) {
  const links = getLinks(user);

  if (links.every((link) => !link?.username?.length)) {
    return null;
  }
  return (
    <dl className="section-container not-prose">
      <dt className="section-title">
        <h3>{title}</h3>
      </dt>
      <dd className="section-content flex flex-col">
        {links.map((link) => {
          return (
            <Link
              href={`${link.url}${link.username === null ? "" : link.username}`}
              className="flex text-gray-4 items-center group -mx-4  relative justify-between rounded-md  p-2 px-4 text-sm transition-colors  hover:bg-gray-3 "
              key={
                link.url + link.username === null
                  ? ""
                  : link.username + `-${link.platform}`
              }
              target="_blank"
            >
              <p>{link.platform}</p>
              <span className="flex gap-1 group-hover:text-secondary transition-colors">
                {link.username || link.url} <Icons.arrowUpRight size={14} />
              </span>
            </Link>
          );
        })}
      </dd>
    </dl>
  );
}
