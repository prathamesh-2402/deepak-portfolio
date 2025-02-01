import PropTypes from "prop-types";

const Checkbox = ({ id, label }) => {
    Checkbox.propTypes = {
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
    };
    return (
        <>
            <input type="checkbox" name={id} id={id} className="w-auto h-auto border border-light-foreground dark:border-dark-foreground cursor-pointer" />
            <label
                htmlFor={id}
                className="text-sm/6 font-semibold cursor-pointer"
            >
                {label}
            </label>
        </>
    )
}

export default Checkbox