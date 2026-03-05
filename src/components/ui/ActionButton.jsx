import { HiArrowUp } from "react-icons/hi";

const ActionButton = (props) => {
  const { icon, children, onClick, "aria-label": ariaLabel } = props;
  return (
    <div className="mt-8 text-center">
      <button
        type="button"
        onClick={onClick}
        className="inline-flex items-center justify-center gap-1.5 rounded border border-gray-300 bg-white px-6 py-2.5 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-gray-900"
        aria-label={ariaLabel}
      >
        {icon && <HiArrowUp className="h-4 w-4" />}
        {children}
      </button>
    </div>
  );
};
export default ActionButton;
