"use client";

import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

type Book = {
  readonly title: string;
  readonly author: string;
  readonly cover: string;
};

type Books = {
  readonly title: string;
  readonly subtitle: string;
  readonly items: readonly Book[];
};

/**
 * The reading list. Lives in the About sidebar rather than inside the tech
 * stack: "ideas I carry" is not the same job as "tools I use", and inside the
 * stack it only rendered while the All filter was active.
 *
 * Covers are remote openlibrary.org URLs, so this uses a plain <img> rather
 * than next/image on purpose.
 */
export default function BooksCard({ books }: { books: Books }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="p-6 rounded-2xl backdrop-blur-sm shadow-xl"
      style={{
        border: "1px solid rgba(245, 158, 11, 0.3)",
        background: "rgba(245, 158, 11, 0.04)",
      }}
    >
      <div className="flex items-center gap-2 mb-2">
        <Icon icon="solar:book-2-bold" width={22} height={22} className="text-amber-600 dark:text-amber-400" />
        <h4 className="text-base font-bold text-[#061825] dark:text-[#f1f5f9]">
          {books.title}
        </h4>
      </div>
      <p className="text-sm mb-4 text-[#4d6579] dark:text-[#94a3b8] italic">
        {books.subtitle}
      </p>
      <div className="space-y-3">
        {books.items.map((book) => (
          <div
            key={book.title}
            className="flex items-center gap-3.5 rounded-xl p-3"
            style={{
              border: "1px solid rgba(245, 158, 11, 0.2)",
              background: "rgba(245, 158, 11, 0.06)",
            }}
          >
            <span className="shrink-0 rounded-lg overflow-hidden ring-1 ring-black/5 dark:ring-white/10">
              <img
                src={book.cover}
                alt={`${book.title} by ${book.author}`}
                width={40}
                height={54}
                loading="lazy"
                className="h-[54px] w-[40px] object-cover"
              />
            </span>
            <span className="min-w-0">
              <p className="text-sm font-semibold text-gray-900 dark:text-gray-100 leading-snug">
                {book.title}
              </p>
              <p className="text-xs mt-1 text-[#4d6579] dark:text-[#94a3b8] truncate">
                {book.author}
              </p>
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
