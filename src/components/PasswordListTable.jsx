const PasswordListTable = () => {
  return (
    <section className="h-[86vh] flex items-center justify-center">
      <div className="notFound gap-4 flex flex-col items-center justify-center">
        <img src="/empty-table.png" alt="empty-table" className="h-[14rem]" />
        <p className="flex flex-col gap-2 items-center justify-center">
          <span className="font-semibold">No Valut Found</span>
          <span className="text-green-500 font-semibold">Create New Valut Using Create New Vault Button</span>
        </p>
      </div>
    </section>
  );
};

export default PasswordListTable;
