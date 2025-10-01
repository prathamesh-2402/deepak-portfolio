import PropTypes from "prop-types";

const FormField = ({id, label, type, autoComplete}) => {
    FormField.propTypes = {
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        autoComplete: PropTypes.string.isRequired,
    };

    return (
        <div >
            <label
                htmlFor={id}
                className="block text-sm/6 font-semibold"
            >
                {label}
            </label>
            <div className="mt-2.5">
                <input
                    type={type}
                    name={id}
                    id={id}
                    autoComplete={autoComplete}
                    className="block w-full rounded-md bg-light-background dark:bg-dark-background px-3.5 py-2 text-base outline outline-1 -outline-offset-1 outline-light-foreground dark:outline-dark-foreground placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-light-foreground"
                    // onChange={}
                />
            </div>
        </div>
    )
}

export default FormField