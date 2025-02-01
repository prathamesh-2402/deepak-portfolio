import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { filmMakingDropdown, digitalMarketingDropdown } from "../../utils/data";

const NavbarDropdown = ({ menu, dropdownVisible, setDropdownVisible }) => {
  NavbarDropdown.propTypes = {
    menu: PropTypes.string.isRequired,
    dropdownVisible: PropTypes.bool.isRequired,
    setDropdownVisible: PropTypes.func.isRequired,
  };

  const handleMouseEnter = () => {
    setDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setTimeout(() => {
      setDropdownVisible(false);
    }, 150);
  };

  const dropdownData =
    menu === "film-making" ? filmMakingDropdown : digitalMarketingDropdown;

  return (
    <div className={`${dropdownVisible ? "absolute" : "hidden"} left-16 z-10 mt-2 flex w-screen max-w-max -translate-x-1/2 px-4 transition-all duration-500`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex-auto overflow-hidden rounded-3xl text-light-foreground dark:text-dark-foreground bg-dark-white dark:bg-light-black text-sm/6 shadow-lg ring-1 ring-gray-900/5">
        <div className="p-4">
          <div className="group relative flex flex-col gap-2 rounded-lg">
            {dropdownData.map((item, index) => (
              <Link
                to={`/${menu}/${item.toLowerCase().split(' ')[0]}`}
                key={index}
                className="hover:bg-light-hover-background dark:hover:bg-dark-hover-background p-4 rounded-2xl"
              >
                <h1
                  className="font-semibold"
                >
                  {item}
                </h1>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarDropdown;
