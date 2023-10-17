function SectionHeadingmd({ children }) {
  return (
    <div
      className="hidden sm:flex flex-row items-center gap-2"
      id="SectionHeading"
    >
      <div>
        <div className="flex">
          <span className="sm:min-w-max text-4xl sm:text-5xl font-medium text-white after:content-['.'] after:text-hotmag">
            {children}
          </span>
        </div>
      </div>

      <div className=" h-[1px] w-full bg-white"></div>
    </div>
  );
}

function SectionHeadingsm({ children }) {
  return (
    <div className="sm:hidden flex justify-center">
      <span className="text-[40px] font-semibold text-white after:content-['.'] after:text-hotmag">
        {children}
      </span>
    </div>
  );
}
export { SectionHeadingmd, SectionHeadingsm };
