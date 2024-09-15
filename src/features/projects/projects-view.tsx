'use client';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { PROJECTS } from '@/shared/assets/data/projects';
import { Heading } from '@/shared/components/heading';
import { Paragraph } from '@/shared/components/paragraph';

import { StaticImageData } from 'next/image';

export type Project = {
  title: string;
  description: string;
  thumbnail: string;
  images: string[] | StaticImageData[];
  href: string;
  slug?: string;
  stack?: string[];
  content?: React.ReactNode | string;
};

export default function ProjectsView() {
  return (
    <div>
      <div className="grid grid-cols-1  gap-10">
        {PROJECTS.map((project: Project, idx: number) => (
          <motion.div
            key={project.href}
            initial={{
              opacity: 0,
              x: -50,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{ duration: 0.2, delay: idx * 0.1 }}
          >
            <Link
              href={project.slug ? `/projects/${project.slug}` : project.href}
              key={project.href}
              className="group flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 hover:bg-gray-50 rounded-2xl transition duration-200 pt-4"
            >
              <Image
                src={project.thumbnail}
                alt="thumbnail"
                height="200"
                width="200"
                className="rounded-md"
              />
              <div className="flex flex-col justify-between">
                <div>
                  <Heading
                    as="h4"
                    className="font-black text-lg md:text-lg lg:text-lg "
                  >
                    {project.title}
                  </Heading>
                  <Paragraph className="text-sm md:text-sm lg:text-sm mt-2 max-w-xl">
                    {project.description}
                  </Paragraph>
                </div>
                <div className="flex space-x-2 md:mb-1 mt-2 md:mt-0">
                  {project.stack?.map((stack: string) => (
                    <span
                      key={stack}
                      className="text-xs  md:text-xs lg:text-xs bg-gray-50 px-2 py-1 rounded-sm text-secondary"
                    >
                      {stack}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
