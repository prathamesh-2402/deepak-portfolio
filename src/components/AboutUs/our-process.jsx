import PropTypes from "prop-types";
import { pricingPlans } from "../../utils/data";

const AboutProcess = ({ darkMode }) => {
  AboutProcess.propTypes = {
    darkMode: PropTypes.bool.isRequired,
  };

  return (
    <div className="px-4 py-16 mx-auto md:px-24 lg:px-8 lg:py-20 mt-[150px]">
      <div className="mb-10 text-center md:mb-12">
        <h2 className="mb-6 text-3xl leading-none tracking-tight sm:text-[52px]">
          <span className="relative inline-block">
            <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
            >
              <defs>
                <pattern id="bfcc89c7-3b4a-491a-bc7e-53e26502ff69" x="0" y="0" width=".135" height=".30">
                  <circle cx="1" cy="1" r=".7" />
                </pattern>
              </defs>
              <rect fill="url(#bfcc89c7-3b4a-491a-bc7e-53e26502ff69)" width="52" height="24" />
            </svg>
            <span className="relative">Coaching</span>
          </span>{" "}
          Plans
        </h2>
        <p className="text-base md:text-lg mx-auto">
          100% online coaching. Each tier (1, 3, 6 months) includes a diet plan, training program, online weekly check‑ins, a quantified nutrition approach, and an almost‑home‑food diet made easy.
        </p>
      </div>

      {/* Plans Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {pricingPlans.tiers.map((plan) => (
          <div
            key={plan.id}
            className={`rounded-2xl p-6 border transition-colors duration-300 ${
              plan.highlight
                ? "bg-light-foreground/10 dark:bg-dark-hover-background border-light-foreground/30 dark:border-dark-foreground/30"
                : "bg-transparent border-light-foreground/20 dark:border-dark-foreground/20"
            }`}
          >
            <div className="flex items-baseline justify-between mb-4">
              <h3 className="text-2xl font-semibold">{plan.name}</h3>
              <div className="text-right">
                <div className="text-3xl font-bold">{plan.priceText}</div>
                <div className="text-xs opacity-70">{plan.period}</div>
              </div>
            </div>

            <ul className="space-y-3 text-sm">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <img
                    src={`../${darkMode ? "dark" : "light"}/checkmark${darkMode ? "-dark" : "-light"}.svg`}
                    className="w-4 mt-1"
                  />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <a
              href={`mailto:deepakjha3430@gmail.com?subject=${encodeURIComponent(`Inquiry: ${plan.name} - ${plan.period}`)}`}
              className="mt-6 w-full inline-block text-center rounded-xl border px-4 py-2 text-sm hover:bg-light-foreground/10 dark:hover:bg-dark-hover-background transition-colors"
            >
              {plan.cta}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutProcess;
