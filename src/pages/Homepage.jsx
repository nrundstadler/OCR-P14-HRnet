import { Link } from "react-router-dom";
import { NAV_LINKS } from "@/features/core/";

const Homepage = () => {
  return (
    <div className="py-4">
      <div className="my-9 text-center">
        <h1 className="text-4xl">
          Welcome to{" "}
          <span className="inline-block">
            HRnet
            <div className="from-primary-light dark:from-primary -mt-3 h-3 w-full bg-gradient-to-r to-transparent"></div>
          </span>
        </h1>
        <p className="mt-2 text-lg">
          Your application to efficiently manage employee records.
        </p>

        <div className="my-17 flex flex-col justify-center gap-8 lg:flex-row lg:gap-16">
          {NAV_LINKS.map((link) => {
            const Icon = link.icon;
            return (
              <Link
                key={link.to}
                to={link.to}
                className="ui-card flex h-40 flex-col items-center justify-center gap-5 p-4 text-center lg:h-60 lg:w-60"
              >
                {Icon && <Icon className="h-20 w-20" />}
                <h2 className="text-xl">{link.name}</h2>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Homepage;
