import Image from "next/image";

interface Props {
  src: string;
  title: string;
  description: string;
  repoLink: string;
  demoLink: string;
}

const ProjectCard = ({
  src,
  title,
  description,
  repoLink,
  demoLink,
}: Props) => {
  const isVideo =
    src.endsWith(".mp4") || src.endsWith(".webm") || src.endsWith(".mkv");
  return (
    <div className="relative z-40 group overflow-hidden flex-1 rounded-lg shadow-lg border border-cyan-600">
      <div className="relative w-full overflow-hidden">
        {isVideo ? (
          <video
            src={src}
            className="w-full z-40 group-hover:scale-105 object-fill h-52 transition-transform duration-300"
            preload="none"
            width={1000}
            height={1000}
            playsInline
            loop
            muted
            autoPlay
          >
            {/* <source type="video/mp4" /> */}
            Your browser does not support the video tag.
          </video>
        ) : (
          <Image
            src={src}
            alt={title}
            width={1000}
            height={1000}
            className="w-full group-hover:scale-105 z-40 object-fill h-52 transition-transform duration-300"
          />
        )}
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="flex gap-5">
            <a
              className="z-40 cursor-pointer bg-gradient-to-br from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 hover:text-white dark:text-white p-3 rounded-full transition duration-300 transform hover:scale-105"
              href={repoLink}
            >
              Github
            </a>
            {demoLink && (
              <a
                className="z-40 cursor-pointer bg-gradient-to-br from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 hover:text-white dark:text-white p-3 rounded-full transition duration-300 transform hover:scale-105"
                href={demoLink}
              >
                View Site
              </a>
            )}
          </div>
        </div>
      </div>

      <div className="p-4 mt-4">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <p className="mt-2 text-gray-300">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
