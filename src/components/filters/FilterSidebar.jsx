import FilterSidebarContent from "./FilterSidebarContent";

const FilterSidebar = (props) => {
  const {
    availableColors,
    filters,
    onColorChange,
    onPriceChange,
    onReset,
    mobileOpen,
    onMobileClose,
  } = props;

  const contentProps = {
    availableColors,
    filters,
    onColorChange,
    onPriceChange,
    onReset,
    onMobileClose,
  };

  return (
    <>
      <aside className="sticky top-[72px] hidden w-72 shrink-0 self-start md:block">
        <FilterSidebarContent {...contentProps} />
      </aside>

      {mobileOpen && (
        <div className="fixed inset-0 z-50 flex md:hidden">
          <div className="fixed inset-0 bg-black/40" onClick={onMobileClose} />
          <aside className="relative ml-auto h-full w-72 overflow-y-auto bg-white p-6 shadow-xl">
            <FilterSidebarContent {...contentProps} />
          </aside>
        </div>
      )}
    </>
  );
};

export default FilterSidebar;
