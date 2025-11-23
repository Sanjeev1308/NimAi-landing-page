"use client";

import { blogs } from "@/utils/data";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";
import Link from "next/link";
import { FaCalendar, FaClock } from "react-icons/fa";

const Blog = () => {
  return (
    <section className="py-16 md:py-24 px-4 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl md:text-center font-medium">
            Latest Insights
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Stay updated with our latest articles on cloud, AI, security, and modern work solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <Link key={blog.id} href={`/blog/${blog.slug}`}>
              <Card className="bg-gray-100 dark:bg-accent h-full hover:shadow-lg transition-shadow duration-300 cursor-pointer">
                <CardContent className="p-0">
                  <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
                    <Image
                      src={blog.image}
                      alt={blog.title}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="bg-gradient-to-r from-[#FA8B31] to-[#FC4950] text-white px-3 py-1 rounded-full text-xs font-semibold">
                        {blog.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-5">
                    <h3 className="text-lg font-semibold mb-2 line-clamp-2 text-black dark:text-white">
                      {blog.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                      {blog.excerpt}
                    </p>

                    <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-500 mb-4">
                      <div className="flex items-center gap-1">
                        <FaCalendar size={12} />
                        <span>{blog.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <FaClock size={12} />
                        <span>{blog.readTime}</span>
                      </div>
                    </div>

                    <div className="pt-3 border-t border-gray-300 dark:border-gray-600">
                      <p className="text-xs font-medium text-gray-600 dark:text-gray-400">
                        By {blog.author}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;