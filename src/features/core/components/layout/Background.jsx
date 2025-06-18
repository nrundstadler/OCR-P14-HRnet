const Background = () => {
  // prettier-ignore
  return (
    <div className="
      absolute inset-x-0 top-0 -z-10
      mx-auto h-[25rem] w-[90vw] max-w-[35rem]
      bg-gradient-to-r from-[#5a7002] to-[#93ac17]
      [mask-image:radial-gradient(farthest-side_at_top,white,transparent)]
      opacity-35
      lg:max-w-[90rem] dark:opacity-25
    "></div>
  );
};

export default Background;
